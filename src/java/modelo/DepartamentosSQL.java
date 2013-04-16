package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.departamentos;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
/**
 *
 * @author SENA
 */
public class DepartamentosSQL 
{
    private Connection cn;
    private Statement st;
    private ResultSet rs;
   
    //**********************************************************************************
//*************  FUNCION QUE SE ENCARGA CONECTARSE A LA BASE DE DATOS*******************    
//**************************************************************************************
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
    
//**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA QUE PUEDA CARGAR LA LISTA DE LOS DEPARTAMENTOS********************    
//**************************************************************************************
    
    public JSONArray listadoDepartamentos()
    {
        JSONArray departamentos = new JSONArray();
        JSONObject depto = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM departamentos";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                departamentos dept = new departamentos(rs.getString("cod_departamento"), rs.getString("nombre_depto"));
                depto = dept.getJSONObject();
                System.out.printf(depto.toString());
                departamentos.add(depto);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(departamentos);
    }
}
