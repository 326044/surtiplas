package modelo;

/***************** IMPORTACIONES ******************/

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Colores;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class ColoresSQL 
{
    private Connection cn;
    private Statement st;
    private ResultSet rs;

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  METODO GENERAL QUE SE ENCARGA DE LA CONEXION *********************
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
//*************             DE LA BASE DE DATOS                *********************
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
    
//****************************************************************************************
//****************************************************************************************
//*************                                                      *********************
//*************  METODO QUE SE ENCARGA DE REALIZAR LA CONSULTA PARA *********************
//*************  LLAMAR LOS DATOS DE LA BASE DE DATOS                *********************
//*************                                                      *********************
//****************************************************************************************
//****************************************************************************************
    
    public JSONArray cargarListadoColores()
    {
        JSONArray colores = new JSONArray();
        JSONObject color = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM colores";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                Colores usp = new Colores(rs.getString("cod_color"), rs.getString("color"));
                color = usp.getJSONObject();
                System.out.printf(color.toString());
                colores.add(color);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(colores);
    }  
//*****************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA        ********************
//*************  PARA VISUALIZAR LOS COLORES                           ********************    
//*****************************************************************************************
    
    public JSONObject DatosColor(String CodColor)
    {
        JSONObject color= new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT * FROM colores WHERE cod_color = '" + CodColor + "';";
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            Colores usp = new Colores(rs.getString("cod_color"), rs.getString("color"));
            color = usp.getJSONObject();
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return (color);
    }
    
    public boolean AdicionarColor(JSONObject datos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Colores usp = new Colores("", String.valueOf(datos.get("color")));
            String tsql;
            tsql = "INSERT INTO colores VALUES(DEFAULT, '";
            tsql += usp.getColor() + "')";
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
//************* A TRAVES DEL ESTAMENTO "UPDATE" PARA LA TABLA LINEA PRODUCCION *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
    public boolean ModificarColor(JSONObject datos, String CodColor)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Colores usp = new Colores("", String.valueOf(datos.get("color")));
            String tsql;
            tsql = "UPDATE colores SET color='" + usp.getColor() + "' WHERE cod_color = " + CodColor + ";";
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
//************************************************************************************************
//************************************************************************************************
//*************                                                              *********************
//************* METODO QUE SE ENCARGA DE ELIMINAR EN LA BASE DE DATOS LOS    *********************
//************* DATOS QUE SE ENCUENTRAN VISUALIZADOS EN LA INTERFAZ WEB      *********************
//************* A TRAVES DEL ESTAMENTO "DELETE" EN LA TABLA LINEA PRODUCCION *********************
//*************                                                              *********************
//************************************************************************************************
//************************************************************************************************
    
    public boolean BorrarColor(String CodColor)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String tsql;
            tsql = "DELETE FROM colores WHERE cod_color = '" + CodColor + "';";
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
}
