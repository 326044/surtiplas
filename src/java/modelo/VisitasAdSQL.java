package modelo;

/***************** IMPORTACIONES ******************/

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Usuarios;
import javabeans.Viaticos;
import javabeans.Visitas;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class VisitasAdSQL 
{
    private Connection cn;
    private Statement st;
    private ResultSet rs;
    
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  METODO GENERAL QUE SE ENCARGA DE LA CONEXION  *********************
//*************              A LA BASE DE DATOS                *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
    
    public Connection getConnection()
    {
        this.cn=null;
        
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            this.cn=DriverManager.getConnection("jdbc:mysql://localhost/surtiplas", "root", "12345");
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return cn;
    }
    
    @SuppressWarnings("CallToThreadDumpStack")
    
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  METODO QUE SE ENCARGA DE LA DESCONEXION      *********************
//*************              DE LA BASE DE DATOS                *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
    
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

//***********************************************************************************************
//***********************************************************************************************
//*************                                                             *********************
//************* METODO DONDE SE REALIZAN LAS CONSULTA PARA LLAMAR LOS DATOS *********************
//************* DE LA BASE DE DATOS Y CARGARLOS EN LA INTERFAZ WEB EN CADA  *********************
//************* UNO DE LOS CAMPOS DEL FORMULARIO                            *********************
//*************                                                             *********************
//***********************************************************************************************
//***********************************************************************************************
    
    public JSONObject datosVisitas(String idVisitas)
    {
        JSONObject Visitas = new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT visitas.id_visita, visitas.fecha, visitas.id_cliente,visitas.descripcion, usuarios.id_usuario,"
                    + "clientes.id_cliente FROM visitas, usuarios, clientes WHERE usuarios.id_usuario=visitas.id_usuario "
                    + "AND clientes.id_cliente=visitas.id_cliente AND visitas.id_visita= " + idVisitas + "";
                    
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            
            Visitas.put("id_visita", rs.getString("id_visita"));
            Visitas.put("fecha", rs.getString("fecha"));
            Visitas.put("id_cliente", rs.getString("id_cliente"));
            Visitas.put("id_usuario", rs.getString("id_usuario"));
            Visitas.put("descripcion", rs.getString("descripcion"));
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return Visitas;
    }
 
//**********************************************************************************************
//**********************************************************************************************
//*************                                                            *********************
//************* METODO QUE SE ENCARGA DE ADICIONAR EN LA BASE DE DATOS LOS *********************
//************* DATOS QUE SE INGRESARON EN LOS CAMPOS DE LA INTERFAZ WEB   *********************
//************* A TRAVES DEL ESTAMENTO "INSERT INTO" EN LA TABLA VISITAS   *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
     public boolean AdicionarVisita(JSONObject datos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Visitas uss = new Visitas("", String.valueOf(datos.get("fecha")), String.valueOf(datos.get("id_cliente")), String.valueOf(datos.get("id_usuario")),  String.valueOf(datos.get("descripcion")));
            String tsql;
            tsql = "INSERT INTO visitas VALUES(DEFAULT, '";
            tsql +=  uss.getFecha() + "','" + uss.getId_cliente() + "','" + uss.getId_usuario() + "','" + uss.getDescripcion()+"')";
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
    //****************************************************************************************
//****************************************************************************************
//*************                                                      *********************
//*************  METODO QUE SE ENCARGA DE REALIZAR LA CONSULTA PARA *********************
//*************  LLAMAR LOS DATOS DE LA BASE DE DATOS                *********************
//*************                                                      *********************
//****************************************************************************************
//****************************************************************************************
    
    public JSONArray cargarListadoVist(JSONObject jsonObject)
    {
        JSONArray visitas = new JSONArray();
        JSONObject visita = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String fechaInicio= String.valueOf(jsonObject.get("fechaInicio"));
            String fechaFin= String.valueOf(jsonObject.get("fechaFin"));
            String id_usuario= String.valueOf(jsonObject.get("id_usuario"));            
            String tsql = null;
            
            if("".equals(fechaInicio))
            {
                if("".equals(fechaFin))
                {
                    if("".equals(id_usuario))
                    {
                        tsql = "SELECT * FROM visitas"; 
                        System.out.printf(tsql.toString());                        
                    }
                    else
                    {
                        tsql = "SELECT * FROM visitas WHERE id_usuario='"+ id_usuario +"';";
                        System.out.printf(tsql.toString());
                    }
                }                 
            }
            else if("".equals(id_usuario))
            {
                tsql = "SELECT * FROM visitas WHERE fecha BETWEEN '"+ fechaInicio +"' AND '"+ fechaFin +"';";
                System.out.printf(tsql.toString());
            }
            else
            {
                tsql = "SELECT * FROM visitas WHERE fecha BETWEEN '"+ fechaInicio +"' AND '"+ fechaFin +"' AND id_usuario='" +id_usuario+ "';";
                System.out.printf(tsql.toString());
            }
            
            this.rs = this.st.executeQuery(tsql);
            
            while(this.rs.next())
            {
                Visitas uss = new Visitas(rs.getString("id_visita"), rs.getString("fecha"), rs.getString("id_cliente"), rs.getString("id_usuario"), rs.getString("descripcion"));
                visita = uss.getJSONObject();
                System.out.printf(visita.toString());
                visitas.add(visita);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(visitas);
    }
}