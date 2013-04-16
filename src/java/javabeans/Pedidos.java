/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package javabeans;

import org.json.simple.JSONObject;

/**
 *
 * @author Home
 */
public class Pedidos 
{
    
     private String id_pedido;
     private String valor_del_iva;
     private String valor_total;
     private String id_usuario;
     private String fecha;
     private String hora;
     private String id_cliente;
     
     public Pedidos ()
     {
         
         this.id_pedido = "";
         this.valor_del_iva = "";
         this.valor_total = ""; 
         this.id_usuario = "";
         this.fecha = "";        
         this.hora = "";
         this.id_cliente = "";
    }
     
     public Pedidos(String id_pedido, String valor_del_iva, String valor_total, String id_usuario, String fecha, String hora, String id_cliente)
     {
        this.id_pedido = id_pedido;
        this.valor_del_iva = valor_del_iva;        
        this.valor_total = valor_total;        
        this.id_usuario = id_usuario;          
        this.fecha = fecha;        
        this.hora = hora;        
        this.id_cliente = id_cliente;
     }
     
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
     
     public void setidPedido(String id_pedido)
     {
         this.id_pedido = id_pedido;
     }
     
     public String getidPedido()
     {
       return this.id_pedido;  
     }
     
          
     public void setvalor_del_iva(String valor_del_iva)
    {
        this.valor_del_iva = valor_del_iva;
    }
     public String getvalor_del_iva()
    {
       return this.valor_del_iva; 
    }
     
    public void setvalor_total(String valor_total)
    {
        this.valor_total = valor_total;
    }
    
    public String getvalor_total()
    {
       return this.valor_total; 
    }
    
    public void setid_usuario (String id_usuario)
    {
        this.id_usuario = id_usuario;
    }
    
    public String getid_usuario()
    {
        return this.id_usuario;
    }
    
    public void setfecha(String fecha)
    {
        this.fecha = fecha;
    }
    
    public String getfecha()
    {
        return this.fecha;
    }
    
    public void sethora(String hora)
    {
        this.hora = hora;
    }
    
    public String gethora()
    {
        return this.hora;
    }
    
    public void setid_cliente(String id_cliente)
    {
        this.id_cliente = id_cliente;
    }
    
    public String getid_cliente()
    {
        return this.id_cliente;
    }
    
}
