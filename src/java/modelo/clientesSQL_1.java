package modelo;

/*se importan las librerias */

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

// se importa el modelo

import javabeans.clientes;

/* se importan las librerias json que se usaran*/

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/*se crea la clase usuariosSQL que realizara la consulta en la base de datos*/

public class clientesSQL
{
    
    // Declaramos las variables
    
    private Connection cn; 
    private Statement st;   
    private ResultSet rs;
    
    public Connection getConnection()
    {
        this.cn=null;
        
         /*conectamos con la base de datos*/
        
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            this.cn=DriverManager.getConnection("jdbc:mysql://localhost/surtiplas", "root", "12345");
        }
    
        /*colocamos un catch para que atrape cualquier clase de error al intentar conectar la libreria*/
        
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return cn;
    }
    
    @SuppressWarnings("CallToThreadDumpStack")
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
    
     /*cramos el arreglo nombrandolo con la variable a la que se le asiganara la consulta*/
    
    public JSONArray obtenerClientes()
    {
        JSONArray arrayclientes = new JSONArray();
        JSONObject cliente = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();        
            String Clintsql;
            
            // creamos la sentencia que realizara la consulta
            
            Clintsql = "SELECT * FROM clientes";
            this.rs = this.st.executeQuery(Clintsql);
            
            while(this.rs.next())
            {  
                clientes cli = new clientes(rs.getString("id_cliente"), rs.getString("cedula"), rs.getString("razon_social"), rs.getString("nombre"), rs.getString("apellido"), rs.getString("direccion"), rs.getString("telefono"), rs.getString("nombre_contacto"), rs.getString("celular"), rs.getString("foto"), rs.getString("email"), rs.getString("maximo_credito"), rs.getString("estado"), rs.getString("comentario"),  rs.getString("documentos_de_soporte"), rs.getString("responsable"), rs.getString("fecha"), rs.getString("codMunicipio"));
                cliente = cli.getJSONObject();
                System.out.printf(cliente.toString());
                arrayclientes.add(cliente);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(arrayclientes);
    }  
 
}   