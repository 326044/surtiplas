package modelo;

/*se importan las librerias */

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

// se importa el modelo

import javabeans.departamentos;

/* se importan las librerias json que se usaran*/

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/*se crea la clase usuariosSQL que realizara la consulta en la base de datos*/

public class departamentosSQL_1
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
    
    public JSONArray obtenerdepartamentos()
    {
        JSONArray arraydepartamentos = new JSONArray();
        JSONObject departamento = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();        
            String depto;
            depto = "SELECT * FROM departamentos";
            this.rs = this.st.executeQuery(depto);
                        
            // creamos la sentencia que realizara la consulta
            
            while(this.rs.next())
            {  
                departamentos dep = new departamentos(rs.getString("cod_departamento"), rs.getString("nombre_depto"));
                departamento = dep.getJSONObject();
                System.out.printf(departamento.toString());
                arraydepartamentos.add(departamento);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(arraydepartamentos);
    }  
 
}