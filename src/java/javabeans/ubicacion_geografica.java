package javabeans;

// importamos la libreria que usaremos

import org.json.simple.JSONObject;

// hacemos publica la clase Usuarios

public class ubicacion_geografica 
{
	 // declaro la variable de tipo cadena

    private String id_usuario;
    private String lantitud;
    private String pais;
    private String departamento;
    private String ciudad;
    
	 // inicializamos las variables vacios
	
    public ubicacion_geografica()
    {
        this.id_usuario = "";
        this.lantitud = "";
        this.pais = "";
        this.departamento = "";
        this.ciudad = "";
        
    }
    
	 /* traemos los datos desde la base de datos para 
     asignarlos a las variables inicializadas*/
	
    public ubicacion_geografica(String id_usuario, String lantitud, String pais, String departamento, String ciudad)
    {
        this.id_usuario = id_usuario;
        this.lantitud = lantitud;
        this.pais = pais;
        this.departamento = departamento;
        this.ciudad = ciudad;
       
    }
		
	   // Actualizamos los valores
		
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_usuario", this.id_usuario);
        obj.put("lantitud", this.lantitud);
        obj.put("pais", this.pais);
        obj.put("departamento", this.departamento);
        obj.put("ciudad", this.ciudad);           
        
        return obj;
    }
// Obtenemos el valor id_ usuario para la variable id_usuario  
    public void setIdUsurio(String id_usuario)
    {
        this.id_usuario = id_usuario;
    }
    // retornamos el valor a id_usuario
    public String getIdUsuario()
    {
        return this.id_usuario;
    }
// Obtenemos el valor id_ usuario para la variable lantitud
    public void setTipo(String lantitud)
    {
        this.lantitud = lantitud;
    }
    // retornamos el valor a lantitud
    public String getlantitud()
    {
        return this.lantitud;
    }
// Obtenemos el valor id_ usuario para la variable pais  
    public void setNombres(String pais)
    {
        this.pais = pais;
    }
       // retornamos el valor a pais 
    public String getpais()
    {
        return this.pais;
    }
// Obtenemos el valor id_ usuario para la variable departamento
    public void setdepartamento(String departamento)
    {
        this.departamento = departamento;
    }
      // retornamos el valor a departamento  
    public String getdepartamento()
    {
        return this.departamento;
    }
// Obtenemos el valor id_ usuario para la variable ciudad
    public void setciudad(String ciudad)
    {
        this.ciudad = ciudad;
    }
       // retornamos el valor a ciudad 
	   
    public String getciudad()
    {
        return this.ciudad;
    }
}
