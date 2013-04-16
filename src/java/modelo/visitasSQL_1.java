package modelo;

/*se importan las librerias */

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

// se importa el modelo

import javabeans.Visitas;

/* se importan las librerias json que se usaran*/

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/*se crea la clase visitasSQL que realizara la consulta en la base de datos y se hace publica*/

public class visitasSQL_1
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
	
	/*Se crea un arreglo para obetener las visitas*/
    
    public JSONArray obtenerVisitas()
    {	
        JSONArray visitas = new JSONArray();
        JSONObject visita = new JSONObject();
        
		/*cramos el arreglo nombrandolo con la variable a la que se le asiganara la consulta*/
		
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
			
			// creamos la sentencia que realizara la consulta
			
            sql = "SELECT * FROM visitas";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
			
				/*las declaramos como cadenas de texto*/
			
                Visitas vis = new Visitas(rs.getString("id_visita"), rs.getString("fecha"), rs.getString("id_cliente"), rs.getString("id_usuario"), rs.getString("descripcion"));                
                visita = vis.getJSONObject();
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