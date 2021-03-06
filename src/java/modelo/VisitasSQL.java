package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import javabeans.Material;
import javabeans.Pagos;
import javabeans.Quejas;
import javabeans.Visitas;
/**
 *
 * @author SENA
 */
public class VisitasSQL 
{
    private Connection cn;
    private Statement st;
    private ResultSet rs;
    private String tsql;
    //CONECCION A LA BASE DE DATOS 
    public Connection getConnection()
    {
        this.cn = null;
        
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            this.cn = DriverManager.getConnection("jdbc:mysql://localhost/surtiplas", "root", "12345");
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return cn;        
    }
    
    @SuppressWarnings("CallToThreadDumpStack")
     //DESCONECCION DE LA BASE DE DATOS 
    public void desconectar()
    {
        try
        {
            this.cn.close();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }
    
    //**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA ADICIONAR UNA VISITA A LOS CLIENTES********************    
//**************************************************************************************
    
    public boolean AdicionarVisita(JSONObject datos, String IdUsuario)
    {
        try
        {            
            this.cn = getConnection();
            this.st = cn.createStatement();
            Visitas vis= new Visitas("", String.valueOf(datos.get("fecha")), String.valueOf(datos.get("id_cliente")), String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("descripcion")));
            String tsql;
            tsql = "INSERT INTO visitas VALUES(DEFAULT, '";
            tsql += vis.getFecha() + "'," + vis.getId_cliente()+ "," + IdUsuario + ",'" + vis.getDescripcion() + "')";       
            this.st.execute(tsql);
            System.out.printf(tsql.toString());
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
        
        return true;
    }
    
    
//**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA BUSCAR LAS VISITAS DEL CLIENTE YA SEA POR********************  
//*************  FECHA DE INICIO, FECHA FINAL O SI DESEA VER TODOS*********************
//*************  LAS VISITAS    
//**************************************************************************************
    
    public JSONArray obtenerListadoVisitas(JSONObject jsonObject, String IdUsuario)
     {
        JSONArray Visitas = new JSONArray();        
        
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String fechaInicial= String.valueOf(jsonObject.get("fechaInicio"));
            String fechaFinal= String.valueOf(jsonObject.get("fechaFin"));
            String id_cliente= String.valueOf(jsonObject.get("id_cliente"));
            String tsql;
               
            if("".equals(fechaInicial))
            {
                if("".equals(fechaFinal))
                {
                 tsql = "SELECT visitas.id_visita, visitas.fecha, clientes.razon_social, usuarios.nombre_usuario, municipios.NombreMunicipio, visitas.descripcion"
                    + " FROM visitas, clientes, usuarios, municipios"
                    + " WHERE visitas.id_cliente=clientes.id_cliente AND visitas.id_usuario=usuarios.id_usuario AND clientes.codMunicipio=municipios.codMunicipio"
                    + " AND clientes.id_cliente="+ id_cliente +" AND usuarios.id_usuario=" +IdUsuario+ " ORDER BY visitas.fecha DESC;";   
                 this.rs = this.st.executeQuery(tsql);                  
                }
            }
            else
            {
                tsql =  "SELECT visitas.id_visita, visitas.fecha, clientes.razon_social, usuarios.nombre_usuario, municipios.NombreMunicipio, visitas.descripcion"
                    + " FROM visitas, clientes, usuarios, municipios"
                    + " WHERE visitas.id_cliente=clientes.id_cliente AND visitas.id_usuario=usuarios.id_usuario AND clientes.codMunicipio=municipios.codMunicipio"
                    + " AND clientes.id_cliente="+ id_cliente +" ORDER BY visitas.fecha DESC visitas.fecha BETWEEN '"+ fechaInicial +"' AND '"+ fechaFinal +"' AND usuarios.id_usuario=" +IdUsuario+ ";";
                this.rs = this.st.executeQuery(tsql); 
            }
            
            while(this.rs.next())
            {
                JSONObject visita = new JSONObject();
                
                visita.put("id_visita", rs.getString("id_visita"));
                visita.put("fecha", rs.getString("fecha"));
                visita.put("razon_social", rs.getString("razon_social"));
                visita.put("nombre_usuario", rs.getString("nombre_usuario"));
                visita.put("NombreMunicipio", rs.getString("NombreMunicipio"));
                visita.put("descripcion", rs.getString("descripcion"));
                
                
                System.out.printf(visita.toString());
                Visitas.add(visita);
            }
            
                     
            
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();            
        }
    
        return(Visitas);
    }
    
    public JSONArray obtenerListadoVisitas2(JSONObject jsonObject, String IdUsuario)
     {
        JSONArray Visitas = new JSONArray();        
        
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String fechaInicial= String.valueOf(jsonObject.get("fechaInicio"));
            String fechaFinal= String.valueOf(jsonObject.get("fechaFin"));            
            String tsql;
               
            if("".equals(fechaInicial))
            {
                if("".equals(fechaFinal))
                {
                 tsql = "SELECT visitas.id_visita, visitas.fecha, clientes.razon_social, usuarios.nombre_usuario, municipios.NombreMunicipio, visitas.descripcion"
                    + " FROM visitas, clientes, usuarios, municipios"
                    + " WHERE visitas.id_cliente=clientes.id_cliente AND visitas.id_usuario=usuarios.id_usuario AND clientes.codMunicipio=municipios.codMunicipio"
                    + " ORDER BY visitas.fecha DESC;";   
                 this.rs = this.st.executeQuery(tsql);                  
                }
            }
            else
            {
                tsql =  "SELECT visitas.id_visita, visitas.fecha, clientes.razon_social, usuarios.nombre_usuario, municipios.NombreMunicipio, visitas.descripcion"
                    + " FROM visitas, clientes, usuarios, municipios"
                    + " WHERE visitas.id_cliente=clientes.id_cliente AND visitas.id_usuario=usuarios.id_usuario AND clientes.codMunicipio=municipios.codMunicipio"
                    + " AND visitas.fecha BETWEEN '"+ fechaInicial +"' AND '"+ fechaFinal +"' ORDER BY visitas.fecha DESC;";
                    
                this.rs = this.st.executeQuery(tsql); 
            }
            
            while(this.rs.next())
            {
                JSONObject visita = new JSONObject();
                
                visita.put("id_visita", rs.getString("id_visita"));
                visita.put("fecha", rs.getString("fecha"));
                visita.put("razon_social", rs.getString("razon_social"));
                visita.put("nombre_usuario", rs.getString("nombre_usuario"));
                visita.put("NombreMunicipio", rs.getString("NombreMunicipio"));
                visita.put("descripcion", rs.getString("descripcion"));
                
                
                System.out.printf(visita.toString());
                Visitas.add(visita);
            }
            
                     
            
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();            
        }
    
        return(Visitas);
    }
    //**********************************************************************************************
//**********************************************************************************************
//*************                                                            *********************
//************* METODO QUE SE ENCARGA DE MODIFICAR EN LA BASE DE DATOS LOS *********************
//************* DATOS QUE SE CAMBIARON EN LOS CAMPOS DE LA INTERFAZ WEB    *********************
//************* A TRAVES DEL ESTAMENTO "UPDATE" PARA LA TABLA VISITAS      *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
     
    public boolean ModificarVisita(JSONObject datos, String idVisitas)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Visitas uss = new Visitas("", String.valueOf(datos.get("fecha")), String.valueOf(datos.get("id_cliente")), String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("descripcion")));
            String tsql;
            tsql = "UPDATE visitas SET fecha='" + uss.getFecha() +"', id_cliente=" + uss.getId_cliente() + ", id_usuario=" + uss.getId_usuario() + ", descripcion='" + uss.getDescripcion() + "' WHERE id_visita = " + idVisitas + ";";
            this.st.execute(tsql);
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
        
        return true;
    }
    
//**********************************************************************************************
//**********************************************************************************************
//*************                                                            *********************
//************* METODO QUE SE ENCARGA DE ELIMINAR EN LA BASE DE DATOS LOS  *********************
//************* DATOS QUE SE ENCUENTRAN VISUALIZADOS EN LA INTERFAZ WEB    *********************
//************* A TRAVES DEL ESTAMENTO "DELETE" EN LA TABLA VISITAS        *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
    public boolean BorrarVisita(String idVist)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String tsql;
            tsql = "DELETE FROM visitas WHERE id_visita = " + idVist + ";";
            this.st.execute(tsql);
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
        
        return true;
    }
//**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA VISUALIZAR LOS DATOS DE LAS VISITAS DEL CLIENTE********************    
//**************************************************************************************
    
    public JSONObject DatosVisita(String id)
    {
        JSONObject visita = new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT visitas.id_visita, visitas.fecha, clientes.razon_social, usuarios.nombre_usuario, municipios.NombreMunicipio, departamentos.nombre_depto, clientes.id_cliente, clientes.telefono, visitas.descripcion"
                    + " FROM visitas, clientes, usuarios, municipios, departamentos"
                    + " WHERE visitas.id_cliente=clientes.id_cliente AND visitas.id_usuario=usuarios.id_usuario AND clientes.codMunicipio=municipios.codMunicipio AND municipios.cod_departamento=departamentos.cod_departamento"
                    + " AND visitas.id_visita="+ id +" ORDER BY visitas.fecha DESC;";
                   
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            
            visita.put("id_visita", rs.getString("id_visita"));
            visita.put("fecha", rs.getString("fecha"));
            visita.put("razon_social", rs.getString("razon_social"));
            visita.put("telefono", rs.getString("telefono"));            
            visita.put("id_cliente", rs.getString("id_cliente"));            
            visita.put("descripcion", rs.getString("descripcion"));
            visita.put("nombre_depto", rs.getString("nombre_depto"));
            visita.put("NombreMunicipio", rs.getString("NombreMunicipio"));
            visita.put("nombre_usuario", rs.getString("nombre_usuario"));
            System.out.printf(visita.toString());
            
             this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
     
        return visita;
    }
    
}
