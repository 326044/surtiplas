package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import javabeans.LineaProduccion;
/**
 *
 * @author SENA
 */
public class LineaProduccionSQL 
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
    
 //**********************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*********************
//*************  PARA QUE CARGE TODAS LAS LINEAS DE PRODUCCION DE LOS PRODUCTOS*****
//**********************************************************************************
    
    public JSONArray ObtenerLineasProduccion()
    {
        JSONArray LineaProduccion = new JSONArray();
        JSONObject Lproduccion = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM linea_produccion";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                LineaProduccion lp = new LineaProduccion(rs.getString("cod_linea"), rs.getString("nombre_linea"));
                Lproduccion = lp.getJSONObject();
                System.out.printf(Lproduccion.toString());
                LineaProduccion.add(Lproduccion);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(LineaProduccion);
    }

//*****************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA****************************
//*************  PARA VISUALIZAR LOS LINEA PRODUCCION                  ********************    
//*****************************************************************************************
    
    public JSONObject Datoslineas(String codlinea)
    {
        JSONObject Lineas= new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT * FROM linea_produccion WHERE cod_linea = '" + codlinea + "';";
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            LineaProduccion lp = new LineaProduccion(rs.getString("cod_linea"), rs.getString("nombre_linea"));
            Lineas = lp.getJSONObject();
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return (Lineas);
    }
    
    public boolean AdicionarLinea(JSONObject datos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            LineaProduccion lp = new LineaProduccion("", String.valueOf(datos.get("nombre_linea")));
            String tsql;
            tsql = "INSERT INTO linea_produccion VALUES(DEFAULT, '";
            tsql += lp.getNombre_linea() + "')";
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
    
    public boolean ModificarLinea(JSONObject datos, String Codlinea)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            LineaProduccion lp = new LineaProduccion("", String.valueOf(datos.get("nombre_linea")));
            String tsql;
            tsql = "UPDATE linea_produccion SET nombre_linea='" + lp.getNombre_linea() + "' WHERE cod_linea = " + Codlinea + ";";
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
    
    public boolean BorrarLinea(String CodLinea)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String tsql;
            tsql = "DELETE FROM linea_produccion WHERE cod_linea = '" + CodLinea + "';";
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
