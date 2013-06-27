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
    
    public JSONArray cargarListado()
    {
        JSONArray usuarios = new JSONArray();
        JSONObject usuario = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM usuarios WHERE tipo_usuario = 'A' or tipo_usuario ='G' or tipo_usuario = 'C' or tipo_usuario ='JP' or tipo_usuario ='JC' or tipo_usuario ='V' or tipo_usuario ='S'";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                Usuarios usr = new Usuarios(rs.getString("id_usuario"), rs.getString("nickname_usuario"), rs.getString("nombre_usuario"), rs.getString("apellidos_usuario"), rs.getString("cedula_usuario"), rs.getString("direccion_usuario"), rs.getString("telefono_usuario"), rs.getString("celular_usuario"), rs.getString("email_usuario"), rs.getString("password_usuario"), rs.getString("tipo_usuario"), rs.getString("foto_usuario"), rs.getString("fecha"),  rs.getString("fecha_cumpleanos"),  rs.getString("banco"),  rs.getString("tipo_cuenta_bancaria"),  rs.getString("numero_cuenta"),  rs.getString("otros_datos"));                
                usuario = usr.getJSONObject();
                System.out.printf(usuario.toString());
                usuarios.add(usuario);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(usuarios);
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
                Usuarios usr = new Usuarios(rs.getString("id_usuario"), rs.getString("nickname_usuario"), rs.getString("nombre_usuario"), rs.getString("apellidos_usuario"), rs.getString("cedula_usuario"), rs.getString("direccion_usuario"), rs.getString("telefono_usuario"), rs.getString("celular_usuario"), rs.getString("email_usuario"), rs.getString("password_usuario"), rs.getString("tipo_usuario"), rs.getString("foto_usuario"), rs.getString("fecha"),  rs.getString("fecha_cumpleanos"),  rs.getString("banco"),  rs.getString("tipo_cuenta_bancaria"),  rs.getString("numero_cuenta"),  rs.getString("otros_datos"));                
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
    
    
     public JSONObject TipoUsuario(String nickname, String clave)
    {
        JSONObject vendedor = new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT tipo_usuario, id_usuario FROM usuarios WHERE nickname_usuario = '" + nickname + "' AND password_usuario = '" + clave + "';";
            this.rs = this.st.executeQuery(sql);
            
            if (this.rs.first())
            {
                vendedor.put("TipoUsuario", this.rs.getString("tipo_usuario"));
                vendedor.put("IdUsuario", this.rs.getString("id_usuario"));
                this.desconectar();
                return vendedor;
            }
           
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
       
        vendedor.put("TipoUsuario", "false");
        vendedor.put("IdUsuario", "false");
        return vendedor;
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
    
    public JSONObject datosUsuario(String idUsuario)
    {
        JSONObject Usuarios = new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT usuarios.id_usuario, usuarios.nombre_usuario, usuarios.apellidos_usuario, usuarios.cedula_usuario,"
                    + " usuarios.direccion_usuario, usuarios.telefono_usuario, usuarios.celular_usuario, usuarios.email_usuario,"
                    + " usuarios.nickname_usuario, usuarios.password_usuario, usuarios.tipo_usuario, usuarios.foto_usuario, usuarios.fecha,"
                    + " usuarios.fecha_cumpleanos, usuarios.banco, usuarios.tipo_cuenta_bancaria, usuarios.numero_cuenta,"
                    + " usuarios.otros_datos FROM usuarios WHERE usuarios.id_usuario= " + idUsuario + ";";
                    
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            
            Usuarios.put("id_usuario", rs.getString("id_usuario"));
            Usuarios.put("nombre_usuario", rs.getString("nombre_usuario"));
            Usuarios.put("apellidos_usuario", rs.getString("apellidos_usuario"));
            Usuarios.put("cedula_usuario", rs.getString("cedula_usuario"));
            Usuarios.put("direccion_usuario", rs.getString("direccion_usuario"));
            Usuarios.put("telefono_usuario", rs.getString("telefono_usuario"));
            Usuarios.put("celular_usuario", rs.getString("celular_usuario"));
            Usuarios.put("email_usuario", rs.getString("email_usuario"));
            Usuarios.put("nickname_usuario", rs.getString("nickname_usuario"));
            Usuarios.put("password_usuario", rs.getString("password_usuario"));
            Usuarios.put("tipo_usuario", rs.getString("tipo_usuario"));
            Usuarios.put("foto_usuario", rs.getString("foto_usuario"));
            Usuarios.put("fecha", rs.getString("fecha"));
            Usuarios.put("fecha_cumpleanos", rs.getString("fecha_cumpleanos"));
            Usuarios.put("banco", rs.getString("banco"));
            Usuarios.put("tipo_cuenta_bancaria", rs.getString("tipo_cuenta_bancaria"));
            Usuarios.put("numero_cuenta", rs.getString("numero_cuenta"));
            Usuarios.put("otros_datos", rs.getString("otros_datos"));
            
            this.desconectar();
        }
    catch(Exception e)
        {
            e.printStackTrace();
        }
        return Usuarios;
    }
    
    public boolean AdicionarUsuario(JSONObject datos, String tipoUsuario)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Usuarios usr = new Usuarios("", String.valueOf(datos.get("nickname_usuario")), String.valueOf(datos.get("nombre_usuario")), String.valueOf(datos.get("apellidos_usuario")), String.valueOf(datos.get("cedula_usuario")), String.valueOf(datos.get("direccion_usuario")), String.valueOf(datos.get("telefono_usuario")), String.valueOf(datos.get("celular_usuario")), String.valueOf(datos.get("email_usuario")), String.valueOf(datos.get("password_usuario")), String.valueOf(datos.get("tipo_usuario")), "foto_usuario", String.valueOf(datos.get("fecha")),  String.valueOf(datos.get("fecha_cumpleanos")),  String.valueOf(datos.get("banco")),  String.valueOf(datos.get("tipo_cuenta_bancaria")),  String.valueOf(datos.get("numero_cuenta")),  String.valueOf(datos.get("otros_datos")));            
            String tsql;
            tsql = "INSERT INTO usuarios VALUES(DEFAULT, '";
            tsql += usr.getNickname() + "','" + usr.getNombres() + "','" + usr.getApellidos() + "','" + usr.getCedula() + "','" + usr.getDireccion()+ "','" + usr.getTelefono()+ "','" + usr.getCelular() + "','" + usr.getEmail() + "','" + usr.getPassword() + "','" + usr.getTipo() + "','" + usr.getFoto()+"','" + usr.getFechaIngreso()+"','" + usr.getFechaCumple()+"'," + usr.getBanco()+"," + usr.getTipoCuenta()+",'" + usr.getNumCuenta()+"','" + usr.getOtrosDatos()+"')";
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
            Usuarios usr = new Usuarios("", String.valueOf(datos.get("nickname_usuario")), String.valueOf(datos.get("nombre_usuario")), String.valueOf(datos.get("apellidos_usuario")), String.valueOf(datos.get("cedula_usuario")), String.valueOf(datos.get("direccion_usuario")), String.valueOf(datos.get("telefono_usuario")), String.valueOf(datos.get("celular_usuario")), String.valueOf(datos.get("email_usuario")), String.valueOf(datos.get("password_usuario")), String.valueOf(datos.get("tipo_usuario")), "foto_usuario", String.valueOf(datos.get("fecha")),  String.valueOf(datos.get("fecha_cumpleanos")),  String.valueOf(datos.get("banco")),  String.valueOf(datos.get("tipo_cuenta_bancaria")),  String.valueOf(datos.get("numero_cuenta")),  String.valueOf(datos.get("otros_datos")));
            String tsql;
            tsql = "UPDATE usuarios SET  nickname_usuario='" + usr.getNickname() + "', nombre_usuario='" + usr.getNombres() +"', apellidos_usuario='" + usr.getApellidos() +"', cedula_usuario='" + usr.getCedula() + "', direccion_usuario='" + usr.getDireccion() + "', telefono_usuario='" + usr.getTelefono() + "', celular_usuario='" + usr.getCelular() + "', email_usuario='" + usr.getEmail() + "',password_usuario='" + usr.getPassword() + "', tipo_usuario='" + usr.getTipo() + "', foto_usuario='" + usr.getFoto() +"', fecha='" + usr.getFechaIngreso() + "', fecha_cumpleanos ='" + usr.getFechaCumple()+"', banco=" + usr.getBanco() + ", tipo_cuenta_bancaria=" + usr.getTipoCuenta() + ", numero_cuenta='" + usr.getNumCuenta()+"', otros_datos=" + usr.getOtrosDatos() + " WHERE id_usuario = " + id_usuario + ";";            
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