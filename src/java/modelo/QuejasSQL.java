package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Quejas;
import javabeans.Usuarios;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class QuejasSQL 
{
    private Connection cn;
    private Statement st;
    private ResultSet rs;        

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
//*************  PARA VISUALIZAR LOS DATOS DE UNA QUEJA********************    
//**************************************************************************************
    
     public JSONObject DatosQueja(String id)
    {
        JSONObject queja = new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT quejas.id_queja, quejas.fecha, clientes.razon_social, usuarios.nombre_usuario, municipios.NombreMunicipio, departamentos.nombre_depto, clientes.id_cliente, clientes.telefono, quejas.descripcion"
                    + " FROM quejas, clientes, usuarios, municipios, departamentos"
                    + " WHERE quejas.id_cliente=clientes.id_cliente AND quejas.id_usuario=usuarios.id_usuario AND clientes.codMunicipio=municipios.codMunicipio AND municipios.cod_departamento=departamentos.cod_departamento"
                    + " AND quejas.id_queja="+ id +" ORDER BY quejas.fecha DESC;";
                   
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            
            queja.put("id_queja", rs.getString("id_queja"));
            queja.put("fecha", rs.getString("fecha"));
            queja.put("razon_social", rs.getString("razon_social"));
            queja.put("telefono", rs.getString("telefono"));            
            queja.put("id_cliente", rs.getString("id_cliente"));            
            queja.put("descripcion", rs.getString("descripcion"));
            queja.put("nombre_depto", rs.getString("nombre_depto"));
            queja.put("NombreMunicipio", rs.getString("NombreMunicipio"));
            queja.put("nombre_usuario", rs.getString("nombre_usuario"));
            System.out.printf(queja.toString());
            
             this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
     
        return queja;
    }
     
     //**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA ADICIONAR UNA QUEJA A LOS CLIENTES********************    
//**************************************************************************************
     
    public boolean AdicionarQueja(JSONObject datos, String id_usuario)
    {
        try
        {            
            this.cn = getConnection();
            this.st = cn.createStatement();
            Quejas que= new Quejas("", String.valueOf(datos.get("fecha")), String.valueOf(datos.get("id_cliente")), String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("descripcion")));
            String tsql;
            tsql = "INSERT INTO quejas VALUES(DEFAULT, '";
            tsql += que.getFecha() + "'," + que.getId_cliente()+ ","+ id_usuario + ",'" + que.getDescripcion() + "')";
        
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
    
///**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA BUSCAR UNA QUEJA POR FECHAS O SI DESEA QUE APARESCAN*************** 
//*************  TODA LAS QUEJAS DEL CLIENT                               *************      
//**************************************************************************************
    
    public JSONArray obtenerListadoQuejas(JSONObject jsonObject)
     {
        JSONArray Quejas = new JSONArray();        
        
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
                 tsql = "SELECT quejas.id_queja, quejas.fecha, clientes.razon_social, usuarios.nombre_usuario, municipios.NombreMunicipio, quejas.descripcion"
                    + " FROM quejas, clientes, usuarios, municipios"
                    + " WHERE quejas.id_cliente=clientes.id_cliente AND quejas.id_usuario=usuarios.id_usuario AND clientes.codMunicipio=municipios.codMunicipio"
                    + " AND clientes.id_cliente="+ id_cliente +" ORDER BY quejas.fecha DESC;";   
                 this.rs = this.st.executeQuery(tsql);
                 System.out.printf(tsql.toString());
                }
            }
            else
            {
                tsql =  "SELECT quejas.id_queja, quejas.fecha, clientes.razon_social, usuarios.nombre_usuario, municipios.NombreMunicipio, quejas.descripcion"
                    + " FROM quejas, clientes, usuarios, municipios"
                    + " WHERE quejas.id_cliente=clientes.id_cliente AND quejas.id_usuario=usuarios.id_usuario AND clientes.codMunicipio=municipios.codMunicipio"
                    + " AND clientes.id_cliente="+ id_cliente +" AND quejas.fecha BETWEEN '"+ fechaInicial +"' AND '"+ fechaFinal +"' ORDER BY quejas.fecha DESC;";
                this.rs = this.st.executeQuery(tsql);
                System.out.printf(tsql.toString());
            }
                        
            while(this.rs.next())
            {
                JSONObject queja = new JSONObject();
                
                queja.put("id_queja", rs.getString("id_queja"));
                queja.put("fecha", rs.getString("fecha"));
                queja.put("razon_social", rs.getString("razon_social"));
                queja.put("nombre_usuario", rs.getString("nombre_usuario"));
                queja.put("NombreMunicipio", rs.getString("NombreMunicipio"));
                queja.put("descripcion", rs.getString("descripcion"));
               
                
                System.out.printf(queja.toString());
                Quejas.add(queja);
            }
            
                     
            
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();            
        }
    
        return(Quejas);
    }
  
}
