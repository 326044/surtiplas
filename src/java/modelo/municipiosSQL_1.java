package modelo;

/*se importan las librerias */

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

// se importa el modelo

import javabeans.municipios;

/* se importan las librerias json que se usaran*/

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/*se crea la clase usuariosSQL que realizara la consulta en la base de datos*/

public class municipiosSQL
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
    
    public JSONArray obtenermunicipios(String codDepto)
    {
        JSONArray arraymunicipios = new JSONArray();
        JSONObject municipio = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();        
            String munipsql;
            
             // creamos la sentencia que realizara la consulta
            
            munipsql = "SELECT * FROM municipios WHERE cod_departamento='"+ codDepto +"';";
            this.rs = this.st.executeQuery(munipsql);
            
            while(this.rs.next())
            {  
                municipios mun = new municipios(rs.getString("codMunicipio"), rs.getString("NombreMunicipio"), rs.getString("cod_departamento"));
                municipio = mun.getJSONObject();
                System.out.printf(municipio.toString());
                arraymunicipios.add(municipio);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(arraymunicipios);
    }  
 
}