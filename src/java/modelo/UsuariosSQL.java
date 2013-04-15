package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Usuarios;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class UsuariosSQL 
{
    private Connection cn;
    private Statement st;
    private ResultSet rs;
    
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
    
    public JSONArray obtenerUsuariosVendedores()
    {
        JSONArray vendedores = new JSONArray();
        JSONObject vendedor = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM usuarios WHERE tipo_usuario = 'V' OR tipo_usuario = 'S'";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                Usuarios usr = new Usuarios(rs.getString("id_usuario"), rs.getString("nombre_usuario"), rs.getString("apellidos_usuario"), rs.getString("cedula_usuario"), rs.getString("direccion_usuario"), rs.getString("telefono_usuario"), rs.getString("celular_usuario"), rs.getString("email_usuario"), rs.getString("nickname_usuario"), rs.getString("password_usuario"), rs.getString("tipo_usuario"), rs.getString("foto_usuario"), rs.getString("fecha"),  rs.getString("fecha_cumpleanos"),  rs.getString("banco"),  rs.getString("tipo_cuenta_bancaria"),  rs.getString("numero_cuenta"),  rs.getString("otros_datos"));
                vendedor = usr.getJSONObject();
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
    }  
    
    public boolean AutenticarUsuario(String nickname, String clave)
    {
       try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM usuarios WHERE nickname_usuario = '" + nickname + "' AND password_usuario = '" + clave + "';";
            this.rs = this.st.executeQuery(sql);
            
            if (this.rs.first())
            {
                this.desconectar();
                return true;
            }
            
            else
            {
                this.desconectar();
                return false;
            }
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return false;
    }
    
    public String TipoUsuario(String nickname, String clave)
    {
       try
        {
            String tipoUsr;
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT tipo_usuario FROM usuarios WHERE nickname_usuario = '" + nickname + "' AND password_usuario = '" + clave + "';";
            this.rs = this.st.executeQuery(sql);
            
            if (this.rs.first())
            {
                tipoUsr = this.rs.getString("tipo_usuario");
                this.desconectar();
                return tipoUsr;
            }
            
            else
            {
                this.desconectar();
                return "Sin tipo";
            }
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return "Sin tipo";
    }
    
    public JSONObject datosUsuario(String idUsuario)
    {
        JSONObject vendedor = new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT * FROM usuarios WHERE id_usuario = '" + idUsuario + "';";
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            Usuarios usr = new Usuarios(rs.getString("id_usuario"), rs.getString("nombre_usuario"), rs.getString("apellidos_usuario"), rs.getString("cedula_usuario"), rs.getString("direccion_usuario"), rs.getString("telefono_usuario"), rs.getString("celular_usuario"), rs.getString("email_usuario"), rs.getString("nickname_usuario"), rs.getString("password_usuario"), rs.getString("tipo_usuario"), rs.getString("foto_usuario"), rs.getString("fecha"),  rs.getString("fecha_cumpleanos"),  rs.getString("banco"),  rs.getString("tipo_cuenta_bancaria"),  rs.getString("numero_cuenta"),  rs.getString("otros_datos"));
            vendedor = usr.getJSONObject();
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
     
        return vendedor;
    }
    
    public boolean AdicionarUsuario(JSONObject datos, String tipoUsuario)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Usuarios usr = new Usuarios("", String.valueOf(datos.get("nombres")), String.valueOf(datos.get("apellidos")), String.valueOf(datos.get("cedula")), String.valueOf(datos.get("direccion")), String.valueOf(datos.get("telefono")), String.valueOf(datos.get("celular")), String.valueOf(datos.get("email")), String.valueOf(datos.get("nickname")), String.valueOf(datos.get("contrasena")), String.valueOf(tipoUsuario), "foto_usuario", String.valueOf(datos.get("fecha_ingreso")),  String.valueOf(datos.get("fecha_cumpleanos")),  String.valueOf(datos.get("banco")),  String.valueOf(datos.get("tipoCuenta")),  String.valueOf(datos.get("num_cuenta")),  String.valueOf(datos.get("otros_datos")));
            String tsql;
            tsql = "INSERT INTO usuarios VALUES(DEFAULT, '";
            tsql += usr.getNombres() + "','" + usr.getApellidos() + "','" + usr.getCedula() + "','" + usr.getDireccion()+ "','" + usr.getTelefono()+ "','" + usr.getCelular() + "','" + usr.getEmail() + "','" + usr.getNickname() + "','" + usr.getPassword() + "','" + usr.getTipo() + "','" + usr.getFoto()+"','" + usr.getFechaIngreso()+"','" + usr.getFechaCumple()+"'," + usr.getBanco()+"," + usr.getTipoCuenta()+",'" + usr.getNumCuenta()+"','" + usr.getOtrosDatos()+"')";
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
    
    public boolean ModificarUsuario(JSONObject datos, String tipoUsuario, String id_usuario)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Usuarios usr = new Usuarios("", String.valueOf(datos.get("nombres")), String.valueOf(datos.get("apellidos")), String.valueOf(datos.get("cedula")), String.valueOf(datos.get("direccion")), String.valueOf(datos.get("telefono")), String.valueOf(datos.get("celular")), String.valueOf(datos.get("email")), String.valueOf(datos.get("nickname")), String.valueOf(datos.get("contrasena")), String.valueOf(tipoUsuario), "foto_usuario", String.valueOf(datos.get("fecha")),  String.valueOf(datos.get("cumpleanos")),  String.valueOf(datos.get("banco")),  String.valueOf(datos.get("tipoCuenta")),  String.valueOf(datos.get("num_cuenta")),  String.valueOf(datos.get("otrosDatos")));
            String tsql;
            tsql = "UPDATE usuarios SET  nombre_usuario='" + usr.getNombres() +"', apellidos_usuario='" + usr.getApellidos() +"', cedula_usuario='" + usr.getCedula() + "', direccion_usuario='" + usr.getDireccion() + "', telefono_usuario='" + usr.getTelefono() + "', celular_usuario='" + usr.getCelular() + "', email_usuario='" + usr.getEmail() + "', nickname_usuario='" + usr.getNickname() + "', password_usuario='" + usr.getPassword() + "', tipo_usuario='" + tipoUsuario + "', foto_usuario='" + usr.getFoto() +"', fecha='" + usr.getFechaIngreso() + "', fecha_cumpleanos='" + usr.getFechaCumple()+"', banco=" + usr.getBanco() + ", tipo_cuenta_bancaria=" + usr.getTipoCuenta() + ", numero_cuenta='" + usr.getNumCuenta()+"', otros_datos='" + usr.getOtrosDatos() + "' WHERE id_usuario = " + id_usuario + ";";
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
    
    public boolean BorrarUsuario(String idUsr)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String tsql;
            tsql = "DELETE FROM usuarios WHERE id_usuario = '" + idUsr + "';";
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