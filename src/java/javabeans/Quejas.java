
package javabeans;
import org.json.simple.JSONObject;

public class Quejas 
{
   private String id_queja; 
   private String fecha;
   private String id_cliente;
   private String id_usuario;
   private String descripcion;
   
   public Quejas()
   {
       this.id_queja = "";
       this.fecha = "";
       this.id_cliente = "";
       this.id_usuario = "";   
       this.descripcion = "";
   }
   
   public Quejas (String id_queja, String fecha, String id_cliente, String id_usuario, String descripcion)
   {
       this.id_queja = id_queja; 
       this.fecha = fecha;
       this.id_cliente = id_cliente; 
       this.id_usuario = id_usuario;


      
       this.descripcion = descripcion;
   }
   
   public JSONObject getJSONObject() 
    {
       JSONObject obj = new JSONObject();
        obj.put("id_queja", this.id_queja);
        obj.put("fecha", this.fecha);
        obj.put("id_cliente", this.id_cliente);
        obj.put("id_usuario", this.id_usuario);
        obj.put("descripcion", this.descripcion); 
        
        return obj;
    }
   
   public void setId_queja(String id_queja)
    {
        this.id_queja = id_queja;
    }
   
   public String getId_queja(String id_queja)
    {
        return this.id_queja;
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
