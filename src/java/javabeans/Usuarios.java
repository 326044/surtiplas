
package javabeans;

import org.json.simple.JSONObject;

public class Usuarios 
{
    private String id_usuario;
    private String nickname_usuario;
    private String nombre_usuario;
    private String apellidos_usuario;
    private String cedula_usuario;
    private String direccion_usuario;
    private String telefono_usuario;
    private String celular_usuario;
    private String email_usuario;
    private String password_usuario;
    private String tipo_usuario;
    private String foto_usuario;
    private String fecha;
    private String fecha_cumpleanos;
    private String banco;
    private String tipo_cuenta_bancaria;
    private String numero_cuenta;
    private String otros_datos;
    private String id_ubicacion;
    
    
    public Usuarios()
    {
        this.id_usuario = "";
        this.nickname_usuario = "";
        this.nombre_usuario = "";
        this.apellidos_usuario = "";
        this.cedula_usuario = "";
        this.direccion_usuario = "";
        this.telefono_usuario = "";
        this.celular_usuario = "";
        this.email_usuario = "";
        this.password_usuario = "";
        this.tipo_usuario = "";
        this.foto_usuario = "";
        this.fecha = "";
        this.fecha_cumpleanos = "";
        this.banco = "";
        this.tipo_cuenta_bancaria = "";
        this.numero_cuenta = "";
        this.otros_datos = "";
        this.id_ubicacion = "";
    }
    
    public Usuarios(String id_usuario, String nickname_usuario, String nombre_usuario, String apellidos_usuario, String cedula_usuario, String direccion_usuario, String telefono_usuario, String celular_usuario, String email_usuario, String password_usuario, String tipo_usuario, String foto_usuario, String fecha, String fecha_cumpleanos, String banco, String tipo_cuenta_bancaria, String numero_cuenta, String otros_datos, String id_ubicacion)
    {
        this.nickname_usuario = nickname_usuario;
        this.id_usuario = id_usuario;
        this.nombre_usuario = nombre_usuario;
        this.apellidos_usuario = apellidos_usuario;
        this.cedula_usuario = cedula_usuario;
        this.direccion_usuario = direccion_usuario;
        this.telefono_usuario = telefono_usuario;
        this.celular_usuario = celular_usuario;
        this.email_usuario = email_usuario;
        this.password_usuario = password_usuario;
        this.tipo_usuario = tipo_usuario;
        this.foto_usuario = foto_usuario;
        this.fecha = fecha;
        this.fecha_cumpleanos = fecha_cumpleanos;
        this.banco = banco;
        this.tipo_cuenta_bancaria = tipo_cuenta_bancaria;
        this.numero_cuenta = numero_cuenta;
        this.otros_datos= otros_datos;
        this.id_ubicacion= id_ubicacion;
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_usuario", this.id_usuario);
        obj.put("nickname_usuario", this.nickname_usuario);
        obj.put("nombre_usuario", this.nombre_usuario);
        obj.put("apellidos_usuario", this.apellidos_usuario);
        obj.put("cedula_usuario", this.cedula_usuario);
        obj.put("direccion_usuario", this.direccion_usuario);
        obj.put("telefono_usuario", this.telefono_usuario);
        obj.put("celular_usuario", this.celular_usuario);
        obj.put("email_usuario", this.email_usuario);
        obj.put("password_usuario", this.password_usuario);
        obj.put("tipo_usuario", this.tipo_usuario);
        obj.put("foto_usuario", this.foto_usuario);
        obj.put("fechaIngreso", this.fecha);
        obj.put("fecha_cumpleanos", this.fecha_cumpleanos);
        obj.put("Banco", this.banco);
        obj.put("tipo_cuenta_bancaria", this.tipo_cuenta_bancaria);
        obj.put("numero_cuenta", this.numero_cuenta);
        obj.put("otros_datos", this.otros_datos);
        obj.put("id_ubicacion", this.id_ubicacion);
           
        return obj;
    }
    
    public void setIdUsurio(String id_usuario)
    {
        this.id_usuario = id_usuario;
    }
    
    public String getIdUsuario()
    {
        return this.id_usuario;
    }
    
    public void setNickname(String nickname_usuario)
    {
        this.nickname_usuario = nickname_usuario;
    }
    
    public String getNickname()
    {
        return this.nickname_usuario;
    }
    
    public void setNombres(String nombre_usuario)
    {
        this.nombre_usuario = nombre_usuario;
    }
    
    public String getNombres()
    {
        return this.nombre_usuario;
    }
    
    public void setApellidos(String apellidos_usuario)
    {
        this.apellidos_usuario = apellidos_usuario;
    }
    
    public String getApellidos()
    {
        return this.apellidos_usuario;
    }
    
    public void setCedula(String cedula_usuario)
    {
        this.cedula_usuario = cedula_usuario;
    }
    
    public String getCedula()
    {
        return this.cedula_usuario;
    }
    
    public void setDireccion(String direccion_usuario)
    {
        this.direccion_usuario = direccion_usuario;
    }
    
    public String getDireccion()
    {
        return this.direccion_usuario;
    }
    
    public void setTelefono(String telefono_usuario)
    {
        this.telefono_usuario = telefono_usuario;
    }
    
    public String getTelefono()
    {
        return this.telefono_usuario;
    }
    
    public void setCelular(String celular_usuario)
    {
        this.celular_usuario = celular_usuario;
    }
    
    public String getCelular()
    {
        return this.celular_usuario;
    }    
    
    public void setEmail(String email_usuario)
    {
        this.email_usuario = email_usuario;
    }
    
    public String getEmail()
    {
        return this.email_usuario;
    }
    
     public void setPassword(String password_usuario)
    {
        this.password_usuario = password_usuario;
    }
    
    public String getPassword()
    {
        return this.password_usuario;
    }
    
    public void setTipo(String tipo_usuario)
    {
        this.tipo_usuario = tipo_usuario;
    }
    
    public String getTipo()
    {
        return this.tipo_usuario;
    }
    public void setFoto(String foto_usuario)
    {
        this.foto_usuario = foto_usuario;
    }
    
    public String getFoto()
    {
        return this.foto_usuario;
    }   
    
    public void setFechaIngreso(String fecha)
    {
        this.fecha = fecha;
    }
    
    public String getFechaIngreso()
    {
        return this.fecha;
    }   
    
    public void setFechaCumple(String fecha_cumpleanos)
    {
        this.fecha_cumpleanos = fecha_cumpleanos;
    }
    
    public String getFechaCumple()
    {
        return this.fecha_cumpleanos;
    }   
    
    public void setBanco(String banco)
    {
        this.banco = banco;
    }
    
    public String getBanco()
    {
        return this.banco;
    }   
    
    public void setTipoCuenta(String tipo_cuenta_bancaria)
    {
        this.tipo_cuenta_bancaria = tipo_cuenta_bancaria;
    }
    
    public String getTipoCuenta()
    {
        return this.tipo_cuenta_bancaria;
    }   
    
    public void setNumCuenta(String numero_cuenta)
    {
        this.numero_cuenta = numero_cuenta;
    }
    
    public String getNumCuenta()
    {
        return this.numero_cuenta;
    }   
    
    public void setOtrosDatos(String otros_datos)
    {
        this.otros_datos = otros_datos;
    }
    
    public String getOtrosDatos()
    {
        return this.otros_datos;
    } 
    
    public void setIdUbicacion(String id_ubicacion)
    {
        this.id_ubicacion = id_ubicacion;
    }
    
    public String getIdUbicacion()
    {
        return this.id_ubicacion;
    } 
}
