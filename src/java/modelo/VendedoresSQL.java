package modelo;

/***************** IMPORTACIONES ******************/

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Usuarios;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class VendedoresSQL 
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
//*************              DE LA BASE DE DATOS                *********************
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
    
/*//****************************************************************************************
//****************************************************************************************
//*************                                                      *********************
//*************  METODO QUE SE ENCARGA DE REALIZAR LA CONSULTA PARA *********************
//*************  LLAMAR LOS DATOS DE LA BASE DE DATOS                *********************
//*************                                                      *********************
//****************************************************************************************
//****************************************************************************************
    
    public JSONArray cargarListadoVendedores()
    {
        JSONArray vendedores = new JSONArray();
        JSONObject vendedor = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM usuarios WHERE tipo_usuario = 'V'";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                Usuarios ven = new Usuarios(rs.getString("id_usuario"), rs.getString("nickname_usuario"), rs.getString("nombre_usuario"), rs.getString("apellidos_usuario"), rs.getString("cedula_usuario"), rs.getString("direccion_usuario"), rs.getString("telefono_usuario"), rs.getString("celular_usuario"), rs.getString("email_usuario"), rs.getString("password_usuario"), rs.getString("tipo_usuario"), rs.getString("foto_usuario"), rs.getString("fecha"),  rs.getString("fecha_cumpleanos"),  rs.getString("banco"),  rs.getString("tipo_cuenta_bancaria"),  rs.getString("numero_cuenta"),  rs.getString("otros_datos"),  rs.getString("id_ubicacion"));                
                vendedor = ven.getJSONObject();
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
    } */ 
}