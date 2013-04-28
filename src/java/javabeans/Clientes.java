package javabeans;

import org.json.simple.JSONObject;
/*campos de la tabla clientes*/
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
    private String codMunicipio;
    private String id_usuario;
    private String id_ubicacion;

    //inicializacion de los campos bacios
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
        this.codMunicipio = "";
        this.id_usuario = "";
        this.id_ubicacion = "";
    }
    //Metodo para llamar los datos de la base de datos para agregarlos a cada campo correspondiente
    public Clientes(String id_cliente, String cedula, String razon_social, String nombre, String apellido, String direccion, String telefono, String nombre_contacto, String celular, String foto, String email, String maximo_credito, String estado, String comentario, String documentos_de_Soporte , String responsable, String fecha, String codMunicipio, String id_usuario, String id_ubicacion)
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
        this.codMunicipio = codMunicipio;
        this.id_usuario = id_usuario;
        this.id_ubicacion = id_ubicacion;
    }
    //Actualizar los valores
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
        obj.put("codMunicipio", this.codMunicipio);
        obj.put("id_usuario", this.id_usuario);
        obj.put("id_ubicacion", this.id_ubicacion);
           
        return obj;
    }
    
     // establecer id_cliente
    public void setIdCliente(String id_cliente)
    {
        this.id_cliente = id_cliente;
    }
    // obtener id_cliente
    public String getIdCliente()
    {
        return this.id_cliente;
    }
    // establecer cedula
    public void setCedula(String cedula)
    {
        this.cedula = cedula;
    }
    // obtener Cedula
    public String getCedula()
    {
        return this.cedula;
    }
    // establecer RazonSocial
    public void setRazonSocial(String razon_social)
    {
        this.razon_social = razon_social;
    }
    // obtener RazonSocial
    public String getRazonSocial()
    {
        return this.razon_social;
    }
    // establecer Nombre
    public void setNombre(String nombre)
    {
        this.nombre = nombre;
    }
    // obtener Nombre
    public String getNombre()
    {
        return this.nombre;
    }
     // establecer Apellido
    public void setApellido(String apellido)
    {
        this.apellido = apellido;
    }
    
    public String getApellido()
    {
        return this.apellido;
    }
     // establecer Direccion
    public void setDireccion(String direccion)
    {
        this.direccion = direccion;
    }
    
    public String getDireccion()
    {
        return this.direccion;
    }
     // establecer Telefono
    public void setTelefono(String telefono)
    {
        this.telefono = telefono;
    }
    
    public String getTelefono()
    {
        return this.telefono;
    }  
     // establecer NombreContacto
     public void setNombreContacto(String nombre_contacto)
    {
        this.nombre_contacto = nombre_contacto;
    }
    
    public String getNombreContacto()
    {
        return this.nombre_contacto;
    }
     // establecer NombreCelular
    public void setNombreCelular(String celular)
    {
        this.celular = celular;
    }
    
    public String getNombreCelular()
    {
        return this.celular;
    }
     // establecer Foto
    public void setFoto(String foto)
    {
        this.foto = foto;
    }
    
    public String getFoto()
    {
        return this.foto;
    }
     // establecer Email
   public void setEmail(String email)
    {
        this.email = email;
    }
    
    public String getEmail()
    {
        return this.email;
    }
     // establecer MaximoCredito
    public void setMaximoCredito(String maximo_credito)
    {
        this.maximo_credito = maximo_credito;
    }
    
    public String getMaximoCredito()
    {
        return this.maximo_credito;
    }
    // establecer Estado 
    public void setEstado(String estado)
    {
        this.estado = estado;
    }
    
    public String getEstado()
    {
        return this.estado;
    }
    // establecer Comentario
    public void setComentario(String comentario)
    {
        this.comentario = comentario;
    }
    
    public String getComentario()
    {
        return this.comentario;
    }
     // establecer DocumentosSoporte
    public void setDocumentosSoporte(String documentos_de_Soporte )
    {
        this.documentos_de_Soporte  = documentos_de_Soporte ;
    }
    
    public String getDocumentosSoporte()
    {
        return this.documentos_de_Soporte ;
    }
     // establecer Responsable
    public void setResponsable(String responsable)
    {
        this.responsable = responsable;
    }
    
    public String getResponsable()
    {
        return this.responsable;
    }
     // establecer Fecha
    public void setFecha(String fecha)
    {
        this.fecha = fecha;
    }
    
    public String getFecha()
    {
        return this.fecha;
    }
     // establecer codMunicipio
    public void setCodMunicipio(String codMunicipio)
    {
        this.codMunicipio = codMunicipio;
    }
     
    public String getCodMunicipio()
    {
        return this.codMunicipio;
    }
     // establecer id_usuario
    public void setId_usuario(String id_usuario)
    {
        this.id_usuario = id_usuario;
    }
    
    public String getId_usuario()
    {
        return this.id_usuario;
    }
     // establecer id_ubicacion
    public void setId_ubicacion(String id_ubicacion)
    {
        this.id_ubicacion = id_ubicacion;
    }
    
    public String getId_ubicacion()
    {
        return this.id_ubicacion;
    }
}