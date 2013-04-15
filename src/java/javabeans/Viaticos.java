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
public class Viaticos 
{
    
     private String id_viaticos;
     private String id_usuario;
     private String valor;
     private String concepto;
     private String nombre_usuario;
     private String cedula;
     private String fecha;       
    
     public Viaticos()
     {
       this.id_viaticos = "";
       this.id_usuario = "";
       this.valor = "";
       this.concepto = "";
       this.nombre_usuario = "";
       this.cedula = "";
       this.fecha = "";
     }
     
     public Viaticos(String id_viaticos, String id_usuario, String valor, String concepto, String nombre_usuario, String cedula, String fecha)
     {
         this.id_viaticos = id_viaticos;
         this.id_usuario = id_usuario;
         this.valor = valor;
         this.concepto = concepto;
         this.nombre_usuario = nombre_usuario;
         this.cedula = cedula;
         this.fecha = fecha;
     }
     
     public JSONObject getJSONObject()
     {
         JSONObject obj = new JSONObject();
         obj.put("id_viaticos", this.id_viaticos);
         obj.put("id_usuario", this.id_usuario);
         obj.put("valor", this.valor);
         obj.put("concepto", this.concepto);
         obj.put("nombre_usuario", this.nombre_usuario);
         obj.put("cedula", this.cedula);
         obj.put("fecha", this.fecha);
         
         return obj;
     }
     
     public void setId_viaticos(String id_viaticos)
     {
         this.id_viaticos = id_viaticos;
     }
     
     public String getId_viaticos()
     {
         return this.id_viaticos;
     }        
     
     public void setId_usuario(String id_usuario)
     {
         this.id_usuario = id_usuario;
     }
     
     public String getId_usuario()
     {
         return this.id_usuario;
     }
     
     public void setValor(String valor)
     {
         this.valor = valor;
     }
     
     public String getValor()
     {
         return this.valor;
     }        
     
     public void setConcepto(String concepto)
     {
         this.concepto = concepto;
     }
     
     public String getConcepto()
     {
         return this.concepto;
     }        
     
     public void setNombre_usuario(String nombre_usuario)
     {
         this.nombre_usuario = nombre_usuario;
     }
     
     public String getNombre_usuario()
     {
         return this.nombre_usuario;
     }
     
     public void setCedula (String cedula)
     {
         this.cedula = cedula;
     }
     
     public String getCedula()
     {
         return this.cedula;
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

