package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import javabeans.Material;
/**
 *
 * @author SENA
 */
public class MaterialSQL 
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
//*************  PARA QUE CARGE TODOS LOS MATERIALES DE LOS PRODUCTOS*****
//**********************************************************************************
    
    public JSONArray ObtenerMateriales()
    {
        JSONArray Materiales = new JSONArray();
        JSONObject material = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM material";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                Material mat = new Material(rs.getString("codigo"), rs.getString("material"));
                material = mat.getJSONObject();
                System.out.printf(material.toString());
                Materiales.add(material);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(Materiales);
    }
    
    //*****************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA        ********************
//*************  PARA VISUALIZAR LOS MATERIALES                           ********************    
//*****************************************************************************************
    
    public JSONObject DatosMaterial(String Codigo)
    {
        JSONObject mater= new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT * FROM material WHERE codigo = '" + Codigo + "';";
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            Material use = new Material(rs.getString("codigo"), rs.getString("material"));
            mater = use.getJSONObject();
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return (mater);
    }
//************************************************************************************************
//************************************************************************************************
//*************                                                              *********************
//************* METODO QUE SE ENCARGA DE ADICIONAR EN LA BASE DE DATOS LOS   *********************
//************* DATOS QUE SE INGRESARON EN LOS CAMPOS DE LA INTERFAZ WEB     *********************
//************* A TRAVES DEL ESTAMENTO "INSERT INTO" EN LA TABLA MATERIAL    *********************
//*************                                                              *********************
//************************************************************************************************
//************************************************************************************************
    public boolean AdicionarMaterial(JSONObject datos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Material use = new Material("", String.valueOf(datos.get("material")));
            String tsql;
            tsql = "INSERT INTO material VALUES(DEFAULT, '";
            tsql += use.getNombre_material() + "')";
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
//************* A TRAVES DEL ESTAMENTO "UPDATE" PARA LA TABLA MATERIAL     *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
    public boolean ModificarMaterial(JSONObject datos, String Codigo)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Material use = new Material("", String.valueOf(datos.get("material")));
            String tsql;
            tsql = "UPDATE material SET material='" + use.getNombre_material() + "' WHERE codigo = " + Codigo + ";";
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
//************* A TRAVES DEL ESTAMENTO "DELETE" EN LA TABLA MATERIAL         *********************
//*************                                                              *********************
//************************************************************************************************
//************************************************************************************************
    
    public boolean BorrarMaterial(String Codigo)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String tsql;
            tsql = "DELETE FROM material WHERE codigo = '" + Codigo + "';";
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
