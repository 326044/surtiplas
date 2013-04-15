package javabeans;

import org.json.simple.JSONObject;

public class Clientes 
{
    private String id_cliente;
    private String cedula;
    private String razon_social ;
    private String nombre;
    private String apellido;
    private String direccion;
    private String telefono;
    private String nombre_contacto;
    private String celular;
    private String foto;
    private String email;
    private String maximo_credito;
    private String estado;
    private String comentario;
    private String documentos_de_Soporte ;
    private String responsable;
    private String fecha;


    public Clientes()
    {
        this.id_cliente = "";
        this.cedula = "";
        this.razon_social  = "";
        this.nombre = "";
        this.apellido = "";
        this.direccion = "";
        this.telefono = "";
        this.nombre_contacto = "";
        this.celular = "";
        this.foto = "";
        this.email = "";
        this.maximo_credito = "";
        this.estado = "";
        this.comentario = "";
        this.documentos_de_Soporte  = "";
        this.responsable = "";
        this.fecha = "";
    }
    
    public Clientes(String id_cliente, String cedula, String razon_social, String nombre, String apellido, String direccion, String telefono, String nombre_contacto, String celular, String foto, String email, String maximo_credito, String estado, String comentario, String documentos_de_Soporte , String responsable, String fecha)
    {
        this.id_cliente = id_cliente;
        this.cedula = cedula;
        this.razon_social = razon_social;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nombre_contacto = nombre_contacto;
        this.celular = celular;
        this.foto = foto;
        this.email = email;
        this.maximo_credito = maximo_credito;
        this.estado = estado;
        this.comentario = comentario;
        this.documentos_de_Soporte  = documentos_de_Soporte ;
        this.responsable = responsable;
        this.fecha = fecha;
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_cliente", this.id_cliente);
        obj.put("cedula", this.cedula);
        obj.put("razon_social", this.razon_social);
        obj.put("nombre", this.nombre);
        obj.put("apellido", this.apellido);
        obj.put("direccion", this.direccion);
        obj.put("telefono", this.telefono);
        obj.put("nombre_contacto", this.nombre_contacto);
        obj.put("celular", this.celular);
        obj.put("foto", this.foto);
        obj.put("email", this.email);
        obj.put("maximo_credito", this.maximo_credito);
        obj.put("estado", this.estado);
        obj.put("comentario", this.comentario);
        obj.put("documentos_de_Soporte ", this.documentos_de_Soporte );
        obj.put("responsable", this.responsable);
        obj.put("fecha", this.fecha);
           
        return obj;
    }
    
    public void setIdCliente(String id_cliente)
    {
        this.id_cliente = id_cliente;
    }
    
    public String getIdCliente()
    {
        return this.id_cliente;
    }
    
    public void setCedula(String cedula)
    {
        this.cedula = cedula;
    }
    
    public String getCedula()
    {
        return this.cedula;
    }
    
    public void setRazonSocial(String razon_social)
    {
        this.razon_social = razon_social;
    }
    
    public String getRazonSocial()
    {
        return this.razon_social;
    }
    
    public void setNombre(String nombre)
    {
        this.nombre = nombre;
    }
    
    public String getNombre()
    {
        return this.nombre;
    }
    
    public void setApellido(String apellido)
    {
        this.apellido = apellido;
    }
    
    public String getApellido()
    {
        return this.apellido;
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
    
     public void setNombreContacto(String nombre_contacto)
    {
        this.nombre_contacto = nombre_contacto;
    }
    
    public String getNombreContacto()
    {
        return this.nombre_contacto;
    }
    
    public void setNombreCelular(String celular)
    {
        this.celular = celular;
    }
    
    public String getNombreCelular()
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
    
   public void setEmail(String email)
    {
        this.email = email;
    }
    
    public String getEmail()
    {
        return this.email;
    }
    
    public void setMaximoCredito(String maximo_credito)
    {
        this.maximo_credito = maximo_credito;
    }
    
    public String getMaximoCredito()
    {
        return this.maximo_credito;
    }
    
    public void setEstado(String estado)
    {
        this.estado = estado;
    }
    
    public String getEstado()
    {
        return this.estado;
    }
    
    public void setComentario(String comentario)
    {
        this.comentario = comentario;
    }
    
    public String getComentario()
    {
        return this.comentario;
    }
    
    public void setDocumentosSoporte(String documentos_de_Soporte )
    {
        this.documentos_de_Soporte  = documentos_de_Soporte ;
    }
    
    public String getDocumentosSoporte()
    {
        return this.documentos_de_Soporte ;
    }
    
    public void setResponsable(String responsable)
    {
        this.responsable = responsable;
    }
    
    public String getResponsable()
    {
        return this.responsable;
    }
    
    public void setFecha(String fecha)
    {
        this.fecha = fecha;
    }
    
    public String getFecha()
    {
        return this.fecha;
    }
}