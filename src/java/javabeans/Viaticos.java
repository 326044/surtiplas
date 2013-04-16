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
     private String fecha;
     private String codMunicipio;  
     private String doc_soporte;
     
     public Viaticos()
     {
       this.id_viaticos = "";
       this.id_usuario = "";
       this.valor = "";
       this.concepto = "";
       this.fecha = "";
       this.codMunicipio = "";
       this.doc_soporte="";
     }
     
     public Viaticos(String id_viaticos, String id_usuario, String valor, String concepto, String fecha, String codMunicipio, String doc_soporte)
     {
         this.id_viaticos = id_viaticos;
         this.id_usuario = id_usuario;
         this.valor = valor;
         this.concepto = concepto;
         this.fecha = fecha;
         this.codMunicipio = codMunicipio;
         this.doc_soporte = doc_soporte;
     }
     
     public JSONObject getJSONObject()
     {
         JSONObject obj = new JSONObject();
         obj.put("id_viaticos", this.id_viaticos);
         obj.put("id_usuario", this.id_usuario);
         obj.put("valor", this.valor);
         obj.put("concepto", this.concepto);
         obj.put("fecha", this.fecha);
         obj.put("codMunicipio", this.codMunicipio);
         obj.put("doc_soporte", this.doc_soporte);
         
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
        
     public void setFecha(String fecha)
     {
         this.fecha = fecha;
     }
     
     public String getFecha()
     {
         return this.fecha;
     }
     
     public void setcodMunicipio(String codMunicipio)
     {
         this.codMunicipio = codMunicipio;
     }
     
     public String getcodMunicipio()
     {
         return this.codMunicipio;
     }  
     
     public void setdoc_soporte(String doc_soporte)
     {
         this.codMunicipio = doc_soporte;
     }
     
     public String getdoc_soporte()
     {
         return this.doc_soporte;
     } 
}

