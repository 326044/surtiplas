
package javabeans;

import org.json.simple.JSONObject;

public class Visitas 
{
   private String id_visita; 
   private String fecha;
   private String id_cliente;
   private String id_usuario;
   private String descripcion;
   
   public Visitas()
   {
       this.id_visita = "";
       this.fecha = "";
       this.id_cliente = "";

       this.id_usuario = "";
 
  
    
       this.descripcion = "";
   }
   
   public Visitas (String id_visita, String fecha, String id_cliente, String id_usuario, String descripcion)
   {
       this.id_visita = id_visita; 
       this.fecha = fecha;
       this.id_cliente = id_cliente;
 
       this.id_usuario = id_usuario;


      
       this.descripcion = descripcion;
   }
   
   public JSONObject getJSONObject() 
    {
       JSONObject obj = new JSONObject();
        obj.put("id_visita", this.id_visita);
        obj.put("fecha", this.fecha);
        obj.put("id_cliente", this.id_cliente);
        obj.put("id_usuario", this.id_usuario);
        obj.put("descripcion", this.descripcion); 
        
        return obj;
    }
   
   public void setId_visita(String id_visita)
    {
        this.id_visita = id_visita;
    }
   
   public String getId_visita(String id_visita)
    {
        return this.id_visita;
    }
    
   public void setFecha(String fecha)
    {
        this.fecha = fecha;
    }
    
   public String getFecha()
   {
       return this.fecha;
   }
   
   public void setId_cliente(String id_cliente)
   {
       this.id_cliente = id_cliente;
   }
   
   public String getId_cliente()
   {
       return this.id_cliente;
   }

   public void setId_usuario(String id_usuario)
   {
       this.id_usuario = id_usuario;
   }
   
   public String getId_usuario()
   {
       return this.id_usuario;
   }
   
   public void setDescripcion(String descripcion)
   {
       this.descripcion = descripcion;
   }
   
   public String getDescripcion()
   {
       return this.descripcion;
   }  
}
