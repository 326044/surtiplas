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
                Usuarios per = new Usuarios(rs.getString("id_usuario"), rs.getString("nickname_usuario"), rs.getString("nombre_usuario"), rs.getString("apellidos_usuario"), rs.getString("cedula_usuario"), rs.getString("direccion_usuario"), rs.getString("telefono_usuario"), rs.getString("celular_usuario"), rs.getString("email_usuario"), rs.getString("password_usuario"), rs.getString("tipo_usuario"), rs.getString("foto_usuario"), rs.getString("fecha"),  rs.getString("fecha_cumpleanos"),  rs.getString("banco"),  rs.getString("tipo_cuenta_bancaria"),  rs.getString("numero_cuenta"),  rs.getString("otros_datos"));                
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
            String sql = "SELECT * FROM usuarios WHERE id_usuario = '" + idUsuario + "';";
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            Perfil usrv = new Perfil(rs.getString("id_usuario"), rs.getString("nombre_usuario"), rs.getString("apellidos_usuario"), rs.getString("cedula_usuario"), rs.getString("direccion_usuario"), rs.getString("telefono_usuario"), rs.getString("celular_usuario"), rs.getString("email_usuario"), rs.getString("nickname_usuario"), rs.getString("password_usuario"), rs.getString("tipo_usuario"), rs.getString("foto_usuario"), rs.getString("fecha"),  rs.getString("fecha_cumpleanos"),  rs.getString("banco"),  rs.getString("tipo_cuenta_bancaria"),  rs.getString("numero_cuenta"),  rs.getString("otros_datos"));
            Perfil = usrv.getJSONObject();
            this.desconectar();
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
     
        return Perfil;
    }
     public boolean ModificarPerfil(JSONObject datos, String tipoUsuario, String id_usuario)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Usuarios usr = new Usuarios("", String.valueOf(datos.get("nickname_usuario")), String.valueOf(datos.get("nombre_usuario")), String.valueOf(datos.get("apellidos_usuario")), String.valueOf(datos.get("cedula_usuario")), String.valueOf(datos.get("direccion_usuario")), String.valueOf(datos.get("telefono_usuario")), String.valueOf(datos.get("celular_usuario")), String.valueOf(datos.get("email_usuario")), String.valueOf(datos.get("password_usuario")), String.valueOf(datos.get("tipo_usuario")), "foto_usuario", String.valueOf(datos.get("fecha")),  String.valueOf(datos.get("fecha_cumpleanos")),  String.valueOf(datos.get("banco")),  String.valueOf(datos.get("tipo_cuenta_bancaria")),  String.valueOf(datos.get("numero_cuenta")),  String.valueOf(datos.get("otros_datos")));
            String tsql;
            tsql = "UPDATE usuarios SET  nickname_usuario='" + usr.getNickname() + "', nombre_usuario='" + usr.getNombres() +"', apellidos_usuario='" + usr.getApellidos() +"', cedula_usuario='" + usr.getCedula() + "', direccion_usuario='" + usr.getDireccion() + "', telefono_usuario='" + usr.getTelefono() + "', celular_usuario='" + usr.getCelular() + "', email_usuario='" + usr.getEmail() + "',password_usuario='" + usr.getPassword() + "', tipo_usuario='" + usr.getTipo() + "', foto_usuario='" + usr.getFoto() +"', fecha='" + usr.getFechaIngreso() + "', fecha_cumpleanos ='" + usr.getFechaCumple()+"', banco=" + usr.getBanco() + ", tipo_cuenta_bancaria=" + usr.getTipoCuenta() + ", numero_cuenta='" + usr.getNumCuenta()+"', otros_datos='" + usr.getOtrosDatos() + "' WHERE id_usuario = " + id_usuario + ";";            
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
