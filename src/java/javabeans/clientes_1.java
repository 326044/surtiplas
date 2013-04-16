package javabeans;

// importamos la libreria que usaremos

import org.json.simple.JSONObject;

// hacemos publica la clase Usuarios

public class clientes
{
	 // declaro la variable de tipo cadena

    private String id_cliente;
    private String cedula;
    private String razon_social;
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
    private String documento_de_soporte;
    private String responsable;
    private String fecha;
    private String codMunicipo;
    
	// inicializamos las variables vacios
	
    public clientes()
    {
        this.id_cliente = "";
        this.cedula = "";
        this.razon_social = "";
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
        this.documento_de_soporte = "";
        this.responsable = "";
        this.fecha = "";
        this.codMunicipo = "";
        
    }
    
	 /* traemos los datos desde la base de datos para 
     asignarlos a las variables inicializadas*/
	
    public clientes(String id_cliente, String cedula, String razon_social, String nombre, String apellido, String direccion,String telefono,String nombre_contacto,String celular,String foto,String email,String maximo_credito,String estado,String comentario,String documento_de_soporte,String responsable, String fecha, String codMunicipo)         
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
        this.documento_de_soporte = documento_de_soporte;
        this.responsable = responsable;
        this.fecha = fecha;
        this.codMunicipo = codMunicipo;
       
    }
    
	// Actualizamos los valores
	
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
        obj.put("maximo_credito", this.maximo_credito); 
        obj.put("estado", this.estado); 
        obj.put("comentario", this.comentario); 
        obj.put("documento_de_soporte", this.documento_de_soporte); 
        obj.put("responsable", this.responsable); 
        obj.put("fecha", this.fecha);                
        obj.put("codMunicipio", this.codMunicipo);
        return obj;
    }
// Obtenemos el valor id_ usuario para la variable id_cliente
    public void setid_cliente(String id_cliente)
    {
        this.id_cliente = id_cliente;
    }
        // retornamos el valor a id_cliente
    public String getid_cliente()
    {
        return this.id_cliente;
    }
// Obtenemos el valor id_ usuario para la variable cedula
    public void setcedula(String cedula)
    {
        this.cedula = cedula;
    }
    // retornamos el valor a cedula
    public String getcedula()
    {
        return this.cedula;
    }
// Obtenemos el valor id_ usuario para la variable razon_social
    public void setNombres(String razon_social)
    {
        this.razon_social = razon_social;
    }
       // retornamos el valor a razon_social
    public String getrazon_social()
    {
        return this.razon_social;
    }
// Obtenemos el valor id_ usuario para la variable nombre
    public void setnombre(String nombre)
    {
        this.nombre = nombre;
    }
     // retornamos el valor a nombre
    public String getnombre()
    {
        return this.nombre;
    }
// Obtenemos el valor id_ usuario para la variable apellido
    public void setapellido(String apellido)
    {  
        this.apellido = apellido;
    }
     // retornamos el valor a apellido
    public String getapellido()
    {
        return this.apellido;
    }
            
// Obtenemos el valor id_ usuario para la variable direccion
    public void setdireccion(String direccion)
    {
        this.direccion = direccion;
    }
     // retornamos el valor a direccion
    public String getdireccion()
    {
        return this.direccion;
    }
// Obtenemos el valor id_ usuario para la variable telefono
    public void settelefono(String telefono)
    {
        this.telefono = telefono;
    }
    // retornamos el valor a telefono
    public String gettelefono()
    {
        return this.telefono;
    }    
    // Obtenemos el valor id_ usuario para la variable nombre_contacto
    public void setnombre_contacto(String nombre_contacto)
    {
        this.nombre_contacto = nombre_contacto;
    }
    // retornamos el valor a nombre_contacto
    public String getnombre_contacto()
    {
        return this.nombre_contacto;
    } 
    // Obtenemos el valor id_ usuario para la variable celular
    public void setcelular(String celular)
    {
        this.celular = celular;
    }
     // retornamos el valor a celular
    public String getcelular()
    {
        return this.celular;
    } 
    // Obtenemos el valor id_ usuario para la variable foto
    public void setfoto(String foto)
    {
        this.foto = foto;
    }
     // retornamos el valor a foto
    public String getfoto()
    {
        return this.foto;
    } 
    // Obtenemos el valor id_ usuario para la variable maximo_credito
    public void setmaximo_credito(String maximo_credito)
    {
        this.maximo_credito = maximo_credito;
    }
    // retornamos el valor a maximo_credito
    public String getmaximo_credito()
    {
        return this.maximo_credito;
    } 
    // Obtenemos el valor id_ usuario para la variable estado
    public void setestado(String estado)
    {
        this.estado = estado;
    }
     // retornamos el valor a estado
    public String getestado()
    {
        return this.estado;
    } 
    // Obtenemos el valor id_ usuario para la variable comentario
    public void setcomentario(String comentario)
    {
        this.comentario = comentario;
    }
     // retornamos el valor a comentario
    public String getcomentario()
    {
        return this.comentario;
    } 
    // Obtenemos el valor id_ usuario para la variable documento_de_soporte
    public void setdocumento_de_soporte(String documento_de_soporte)
    {
        this.documento_de_soporte = documento_de_soporte;
    }
        // retornamos el valor a documento_de_soporte
    public String getdocumento_de_soporte()
    {
        return this.documento_de_soporte;
    } 
    // Obtenemos el valor id_ usuario para la variable responsable
    public void setresponsable(String responsable)
    {
        this.responsable = responsable;
    }
        // retornamos el valor a responsable
    public String getresponsable()
    {
        return this.responsable;
    } 
    // Obtenemos el valor id_ usuario para la variable fecha
     public void setfecha(String fecha)
    {
        this.fecha = fecha;
    }
        // retornamos el valor a fecha
    public String getfecha()
    {
        return this.fecha;
    } 
    // Obtenemos el valor id_ usuario para la variable codMunicipo
      public void setcodMunicipo(String codMunicipo)
    {
        this.fecha = fecha;
    }
        // retornamos el valor a codMunicipo
    public String getcodMunicipo()
    {
        return this.codMunicipo;
    } 
}
