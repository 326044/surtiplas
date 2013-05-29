package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Perfil;
import javabeans.Usuarios;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;


public class PerfilSQL 
{
    private Connection cn;
    private Statement st;
    private ResultSet rs;
    
    //CONECCION A LA BASE DE DATOS
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
//*************  PARA QUE EL VENDEDOR VISUALIZE SUS DATOS DEL PERFIL********************    
//**************************************************************************************
    
    public JSONObject datosVendedor(String idUsuario)
    {
        JSONObject perfil = new JSONObject();
 
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT * FROM usuarios WHERE id_usuario = '" + idUsuario + "';";
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            Perfil usrv = new Perfil(rs.getString("id_usuario"), rs.getString("nombre_usuario"), rs.getString("apellidos_usuario"), rs.getString("cedula_usuario"), rs.getString("direccion_usuario"), rs.getString("telefono_usuario"), rs.getString("celular_usuario"), rs.getString("email_usuario"), rs.getString("nickname_usuario"), rs.getString("password_usuario"), rs.getString("tipo_usuario"), rs.getString("foto_usuario"), rs.getString("fecha"),  rs.getString("fecha_cumpleanos"),  rs.getString("banco"),  rs.getString("tipo_cuenta_bancaria"),  rs.getString("numero_cuenta"),  rs.getString("otros_datos"));
            perfil = usrv.getJSONObject();
            this.desconectar();
        }
 
        catch(Exception e)
        {
            e.printStackTrace();
        }
     
        return perfil;
    }
    //****************************************************************************************
//****************************************************************************************
//*************                                                      *********************
//*************  METODO QUE SE ENCARGA DE REALIZAR LA CONSULTA PARA *********************
//*************  LLAMAR LOS DATOS DE LA BASE DE DATOS                *********************
//*************                                                      *********************
//****************************************************************************************
//****************************************************************************************
    
    public JSONArray cargarPerfil()
    {
        JSONArray perfiles = new JSONArray();
        JSONObject perfil = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM usuarios WHERE tipo_usuario = 'A'";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                Usuarios per = new Usuarios(rs.getString("id_usuario"), rs.getString("nickname_usuario"), rs.getString("nombre_usuario"), rs.getString("apellidos_usuario"), rs.getString("cedula_usuario"), rs.getString("direccion_usuario"), rs.getString("telefono_usuario"), rs.getString("celular_usuario"), rs.getString("email_usuario"), rs.getString("password_usuario"), rs.getString("tipo_usuario"), rs.getString("foto_usuario"), rs.getString("fecha"),  rs.getString("fecha_cumpleanos"),  rs.getString("banco"),  rs.getString("tipo_cuenta_bancaria"),  rs.getString("numero_cuenta"),  rs.getString("otros_datos"),  rs.getString("id_ubicacion"));                
                perfil = per.getJSONObject();
                System.out.printf(perfil.toString());
                perfiles.add(perfil);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(perfiles);
    }
//***********************************************************************************************
//***********************************************************************************************
//*************                                                             *********************
//************* METODO DONDE SE REALIZAN LAS CONSULTA PARA LLAMAR LOS DATOS *********************
//************* DE LA BASE DE DATOS Y CARGARLOS EN LA INTERFAZ WEB EN CADA  *********************
//************* UNO DE LOS CAMPOS DEL FORMULARIO                            *********************
//*************                                                             *********************
//***********************************************************************************************
//***********************************************************************************************
    
    public JSONObject datosPerfil(String idUsuario)
    {
        JSONObject Perfil = new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT usuarios.id_usuario, usuarios.nombre_usuario, usuarios.apellidos_usuario, usuarios.cedula_usuario,"
                    + " usuarios.direccion_usuario, usuarios.telefono_usuario, usuarios.celular_usuario, usuarios.email_usuario,"
                    + " usuarios.nickname_usuario, usuarios.password_usuario, usuarios.tipo_usuario, usuarios.foto_usuario, usuarios.fecha,"
                    + " usuarios.fecha_cumpleanos, usuarios.banco, usuarios.tipo_cuenta_bancaria, usuarios.numero_cuenta,"
                    + " usuarios.otros_datos, ubicacion_geografica.id_ubicacion FROM usuarios, ubicacion_geografica WHERE ubicacion_geografica.id_ubicacion=usuarios.id_ubicacion";
                    
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            
            Perfil.put("id_usuario", rs.getString("id_usuario"));
            Perfil.put("nombre_usuario", rs.getString("nombre_usuario"));
            Perfil.put("apellidos_usuario", rs.getString("apellidos_usuario"));
            Perfil.put("cedula_usuario", rs.getString("cedula_usuario"));
            Perfil.put("direccion_usuario", rs.getString("direccion_usuario"));
            Perfil.put("telefono_usuario", rs.getString("telefono_usuario"));
            Perfil.put("celular_usuario", rs.getString("celular_usuario"));
            Perfil.put("email_usuario", rs.getString("email_usuario"));
            Perfil.put("nickname_usuario", rs.getString("nickname_usuario"));
            Perfil.put("password_usuario", rs.getString("password_usuario"));
            Perfil.put("tipo_usuario", rs.getString("tipo_usuario"));
            Perfil.put("foto_usuario", rs.getString("foto_usuario"));
            Perfil.put("fecha", rs.getString("fecha"));
            Perfil.put("fecha_cumpleanos", rs.getString("fecha_cumpleanos"));
            Perfil.put("banco", rs.getString("banco"));
            Perfil.put("tipo_cuenta_bancaria", rs.getString("tipo_cuenta_bancaria"));
            Perfil.put("numero_cuenta", rs.getString("numero_cuenta"));
            Perfil.put("otros_datos", rs.getString("otros_datos"));
            Perfil.put("id_ubicacion", rs.getString("id_ubicacion"));
            
            this.desconectar();
        }
    catch(Exception e)
        {
            e.printStackTrace();
        }
        return Perfil;
    }
}
