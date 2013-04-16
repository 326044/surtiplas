package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import javabeans.TipoProducto;
/**
 *
 * @author SENA
 */
public class TipoProductoSQL 
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
//*************  PARA BUSCAR UN PRODUCTO POR EL TIPO DE PRODUCTO********************    
//**************************************************************************************
    
    public JSONArray ObtenerTipoProducto()
    {
        JSONArray Tproductos = new JSONArray();
        JSONObject Tproducto = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM tipo_producto";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                TipoProducto tp = new TipoProducto(rs.getString("cod_tipo_producto"), rs.getString("nombre_tipo_producto"));
                Tproducto = tp.getJSONObject();
                System.out.printf(Tproducto.toString());
                Tproductos.add(Tproducto);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(Tproductos);
    }
}
