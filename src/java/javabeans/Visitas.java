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
public class Visitas 
{
   private String fecha;
   private String id_cliente;
   private String id_usuario;
   private String nombre_usuario;
   private String cedula_usuario;
   private String direccion_del_cliente;
   private String descripcion;
   
   public Visitas()
   {
       this.fecha = "";
       this.id_cliente = "";
       this.id_usuario = "";
       this.nombre_usuario = "";
       this.cedula_usuario = "";
       this.direccion_del_cliente = "";
       this.descripcion = "";
   }
   
   public Visitas (String fecha, String id_cliente, String id_usuario, String nombre_usuario, String cedula_usuario, String direccion_del_cliente, String descripcion)
   {
       this.fecha = fecha;
       this.id_cliente = id_cliente;
       this.id_usuario = id_usuario;
       this.nombre_usuario = nombre_usuario;
       this.cedula_usuario = cedula_usuario;
       this.direccion_del_cliente = direccion_del_cliente;
       this.descripcion = descripcion;
   }
   
   public JSONObject getJSONObject() 
    {
       JSONObject obj = new JSONObject();
        obj.put("fecha", this.fecha);
        obj.put("id_cliente", this.id_cliente);
        obj.put("id_usuario", this.id_usuario);
        obj.put("nombre_usuario", this.nombre_usuario);
        obj.put("cedula_usuario", this.cedula_usuario);
        obj.put("direccion_del_cliente", this.direccion_del_cliente);
        obj.put("descripcion", this.descripcion); 
        
        return obj;
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
   
   public void setNombre_usuario(String nombre_usuario)
   {
       this.nombre_usuario = nombre_usuario;
   }
   
   public String getNombre_usuario()
   {
       return this.nombre_usuario;
   }
   
   public void setCedula_usuario(String cedula_usuario)
   {
       this.cedula_usuario = cedula_usuario;
   }
   
   public String getCedula_usuario()
   {
       return this.cedula_usuario;
   }
   
   public void setDireccion_del_cliente(String direccion_del_cliente)
   {
       this.direccion_del_cliente = direccion_del_cliente;
   }
   
   public String getDireccion_del_cliente()
   {
       return this.direccion_del_cliente;
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
