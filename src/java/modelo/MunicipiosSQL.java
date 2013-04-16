package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Municipios;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
/**
 *
 * @author SENA
 */
public class MunicipiosSQL 
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
    
//**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA QUE PUEDA CARGAR LA LISTA DE LOS MUNICIPIOS********************    
//**************************************************************************************
    
    public JSONArray ObtenerMunicipios(String codDepto)
    {
        JSONArray Municipios = new JSONArray();
        JSONObject munic = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM municipios WHERE cod_departamento= '"+ codDepto +"';";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                Municipios dept = new Municipios(rs.getString("codMunicipio"), rs.getString("NombreMunicipio"), rs.getString("cod_departamento"));
                munic = dept.getJSONObject();
                System.out.printf(munic.toString());
                Municipios.add(munic);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(Municipios);
    }
}
