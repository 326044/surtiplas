package modelo;

/*se importan las librerias */

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

// se importa el modelo

import javabeans.Usuarios;

/* se importan las librerias json que se usaran*/

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/*se crea la clase ubicacion_geograficaSQL que realizara la consulta en la base de datos*/


public class ubicacion_geograficaSQL
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
	
    public JSONArray obtenerUsuariosVendedores()
    {
        JSONArray vendedores = new JSONArray();
        JSONObject vendedor = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
			
			// creamos la sentencia que realizara la consulta
			
            sql = "SELECT * FROM Usuarios WHERE Usuarios.tipo_usuario = 'V' ";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
			
				/*las declaramos como cadenas de texto*/
			
                Usuarios usr = new Usuarios(rs.getString("id_usuario"), rs.getString("nombre_usuario"), rs.getString("apellidos_usuario"), rs.getString("cedula_usuario"), rs.getString("direccion_usuario"), rs.getString("telefono_usuario"), rs.getString("celular_usuario"), rs.getString("email_usuario"), rs.getString("nickname_usuario"), rs.getString("password_usuario"), rs.getString("tipo_usuario"), rs.getString("foto_usuario"), rs.getString("fecha"),  rs.getString("fecha_cumpleanos"),  rs.getString("banco"),  rs.getString("tipo_cuenta_bancaria"),  rs.getString("numero_cuenta"),  rs.getString("otros_datos"));                
                vendedor = usr.getJSONObject();
                System.out.printf(vendedor.toString());
                vendedores.add(vendedor);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(vendedores);
    }  
 
}