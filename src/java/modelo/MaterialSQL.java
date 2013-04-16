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
}
