
package javabeans;

import org.json.simple.JSONObject;

public class Usuarios 
{
    private String id_usuario;
    private String nombres;
    private String apellidos;
    private String cedula;
    private String direccion;
    private String telefono;
    private String celular;
    private String email;
    private String nickname;
    private String password;
    private String tipo;
    private String foto;
    private String fechaIngreso;
    private String fechaCumpleanos;
    private String banco;
    private String numCuenta;
    private String otrosDatos;
    private String tipoCuenta;
    
    public Usuarios()
    {
        this.id_usuario = "";
        this.nombres = "";
        this.apellidos = "";
        this.cedula = "";
        this.direccion = "";
        this.telefono = "";
        this.celular = "";
        this.email = "";
        this.nickname = "";
        this.password = "";
        this.tipo = "";
        this.foto = "";
        this.fechaIngreso = "";
        this.fechaCumpleanos = "";
        this.banco = "";
        this.tipoCuenta = "";
        this.numCuenta = "";
        this.otrosDatos = "";
    }
    
    public Usuarios(String id_usuario, String nombres, String apellidos, String cedula, String direccion, String telefono, String celular, String email, String nickname, String password, String tipo, String foto, String fechaIngreso, String fechaCumple, String banco, String tipoCuenta, String numCuenta, String otrosDatos)
    {
        this.id_usuario = id_usuario;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.direccion = direccion;
        this.telefono = telefono;
        this.celular = celular;
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.tipo = tipo;
        this.foto = foto;
        this.fechaIngreso = fechaIngreso;
        this.fechaCumpleanos = fechaCumple;
        this.banco = banco;
        this.tipoCuenta = tipoCuenta;
        this.numCuenta = numCuenta;
        this.otrosDatos= otrosDatos;
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_usuario", this.id_usuario);
        obj.put("nombres", this.nombres);
        obj.put("apellidos", this.apellidos);
        obj.put("cedula", this.cedula);
        obj.put("direccion", this.direccion);
        obj.put("telefono", this.telefono);
        obj.put("celular", this.celular);
        obj.put("email", this.email);
        obj.put("nickname", this.nickname);
        obj.put("password", this.password);
        obj.put("tipo", this.tipo);
        obj.put("foto", this.foto);
        obj.put("fechaIngreso", this.fechaIngreso);
        obj.put("fechaCumple", this.fechaCumpleanos);
        obj.put("Banco", this.banco);
        obj.put("tipoCuenta", this.tipoCuenta);
        obj.put("numCuenta", this.numCuenta);
        obj.put("otrosDatos", this.otrosDatos);
           
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
    
    public void setTipo(String tipo)
    {
        this.tipo = tipo;
    }
    
    public String getTipo()
    {
        return this.tipo;
    }
    
    public void setNombres(String nombres)
    {
        this.nombres = nombres;
    }
    
    public String getNombres()
    {
        return this.nombres;
    }
    
    public void setApellidos(String apellidos)
    {
        this.apellidos = apellidos;
    }
    
    public String getApellidos()
    {
        return this.apellidos;
    }
    
    public void setNickname(String nickname)
    {
        this.nickname = nickname;
    }
    
    public String getNickname()
    {
        return this.nickname;
    }
    
    public void setPassword(String password)
    {
        this.password = password;
    }
    
    public String getPassword()
    {
        return this.password;
    }
    
    public void setDireccion(String direccion)
    {
        this.direccion = direccion;
    }
    
    public String getDireccion()
    {
        return this.direccion;
    }
    
    public void setTelefono(String telefono)
    {
        this.telefono = telefono;
    }
    
    public String getTelefono()
    {
        return this.telefono;
    }
    
    public void setCedula(String cedula)
    {
        this.cedula = cedula;
    }
    
    public String getCedula()
    {
        return this.cedula;
    }
    
    public void setEmail(String email)
    {
        this.email = email;
    }
    
    public String getEmail()
    {
        return this.email;
    }
    
    public void setCelular(String celular)
    {
        this.celular = celular;
    }
    
    public String getCelular()
    {
        return this.celular;
    }    
    
    public void setFoto(String foto)
    {
        this.foto = foto;
    }
    
    public String getFoto()
    {
        return this.foto;
    }   
    
    public void setFechaIngreso(String fecha)
    {
        this.fechaIngreso = fecha;
    }
    
    public String getFechaIngreso()
    {
        return this.fechaIngreso;
    }   
    
    public void setFechaCumple(String fecha)
    {
        this.fechaCumpleanos = fecha;
    }
    
    public String getFechaCumple()
    {
        return this.fechaCumpleanos;
    }   
    
    public void setBanco(String banco)
    {
        this.banco = banco;
    }
    
    public String getBanco()
    {
        return this.banco;
    }   
    
    public void setTipoCuenta(String tipoCuenta)
    {
        this.tipoCuenta = tipoCuenta;
    }
    
    public String getTipoCuenta()
    {
        return this.tipoCuenta;
    }   
    
    public void setNumCuenta(String numero)
    {
        this.numCuenta = numero;
    }
    
    public String getNumCuenta()
    {
        return this.numCuenta;
    }   
    
    public void setOtrosDatos(String datos)
    {
        this.otrosDatos = datos;
    }
    
    public String getOtrosDatos()
    {
        return this.otrosDatos;
    }   
}
