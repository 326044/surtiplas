package javabeans;

// importamos la libreria que usaremos

import org.json.simple.JSONObject;

// hacemos publica la clase Usuarios

public class pedidos 
{
	
 // declaro la variable de tipo cadena

    private String id_pedido;    
    private String valor_del_iva;
    private String valor_total;
    private String id_usuario;
    private String fecha;
    private String hora;    
    private String id_cliente;  
 
	 // inicializamos las variables vacios
 
    public pedidos()
    {
        this.id_pedido = "";
        this.valor_del_iva = "";
        this.valor_total = "";                        
        this.id_usuario = "";  
        this.fecha = "";
        this.hora = "";          
        this.id_cliente = ""; 
    }
    	
 /* traemos los datos desde la base de datos para 
     asignarlos a las variables inicializadas*/
	
    public pedidos(String id_pedido, String valor_del_iva, String valor_total, String id_usuario, String fecha, String hora, String id_cliente)
    {
        this.id_pedido = id_pedido;        
        this.valor_del_iva = valor_del_iva;
        this.valor_total = valor_total;        
        this.id_usuario = id_usuario;   
        this.fecha = fecha;
        this.hora = hora;         
         this.id_cliente = id_cliente;  
    }
    
	  // Actualizamos los valores
	
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_pedido", this.id_pedido);        
        obj.put("valor_del_iva", this.valor_del_iva);
        obj.put("valor_total", this.valor_total);        
        obj.put("id_usuario", this.id_usuario); 
        obj.put("fecha", this.fecha);
        obj.put("hora", this.hora);        
        obj.put("id_cliente", this.id_cliente);   
        return obj;
    }
// Obtenemos el valor id_ usuario para la variable id_pedido     
    public void setid_pedido(String id_pedido)
    {
        this.id_pedido = id_pedido;
    }
   // retornamos el valor a id_pedido
    public String getid_pedido()
    {
        return this.id_pedido;
    }
// Obtenemos el valor id_ usuario para la variable valor_del_iva
  public void setvalor_del_iva(String valor_del_iva)
    {
        this.valor_del_iva = valor_del_iva;
    }
    // retornamos el valor a valor_del_iva    
    public String setvalor_del_iva()
    {
        return this.valor_del_iva;
    }
// Obtenemos el valor id_ usuario para la variable valor_total  
    
   public void setvalor_total(String valor_total)
    {
        this.valor_total = valor_total;
    }
// retornamos el valor a valor_total    
    public String setvalor_totala()
    {
        return this.valor_total;
    }       
// Obtenemos el valor id_ usuario para la variable id_usuario   
    
   public void setid_usuario(String id_usuario)
    {
        this.id_usuario = id_usuario;
    }
// retornamos el valor a id_usuario    
    public String setid_usuario()
    {
        return this.id_usuario;
    } 
// Obtenemos el valor id_ usuario para la variable fecha
    
   public void setfecha(String fecha)
    {
        this.fecha = fecha;
    }
// retornamos el valor a fecha    
    public String setfecha()
    {
        return this.fecha;
    }   
// Obtenemos el valor id_ usuario para la variable hora  
    
   public void sethora(String hora)
    {
        this.hora = hora;
    }
// retornamos el valor a hora    
    public String sethora()
    {
        return this.hora;
    }      
// Obtenemos el valor id_ usuario para la variable id_cliente     
    
   public void setid_cliente(String id_cliente)
    {
        this.id_cliente = id_cliente;
    }
// retornamos el valor a id_cliente    
    public String setid_cliente()
    {
        return this.id_cliente;
    }      
}