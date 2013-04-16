package modelo;

/*se importan las librerias */

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

// se importa el modelo

import javabeans.Viaticos;

/* se importan las librerias json que se usaran*/

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/*se crea la clase viaticosSQL que realizara la consulta en la base de datos*/

public class viaticosSQL_1
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
	
    public JSONArray obtenerviaticos()
    {
        JSONArray arrayviaticos = new JSONArray();
        JSONObject viaticos = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();        
            String viaticossql;
			
			// creamos la sentencia que realizara la consulta
			
            viaticossql = "SELECT * FROM viaticos";
            this.rs = this.st.executeQuery(viaticossql);
            
            while(this.rs.next())
            {  
				/*las declaramos como cadenas de texto*/
			
                Viaticos vtc = new Viaticos(rs.getString("id_viaticos"), rs.getString("id_usuario"), rs.getString("valor"), rs.getString("concepto"), rs.getString("fecha"), rs.getString("codMunicipio"), rs.getString("doc_soporte"));
                viaticos = vtc.getJSONObject();
                System.out.printf(viaticos.toString());
                arrayviaticos.add(viaticos);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(arrayviaticos);
    }  
 
}