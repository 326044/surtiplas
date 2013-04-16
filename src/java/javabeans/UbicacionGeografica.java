package javabeans;

import org.json.simple.JSONObject;

public class UbicacionGeografica 
{
    private String id_usuario;
    private String lantitud;
    private String pais;   
    
    
    public UbicacionGeografica()
    {
        this.id_usuario = "";
        this.lantitud = "";
        this.pais = "";     
       
    }
    
    public UbicacionGeografica(String id_usuario, String lantitud, String pais, String departamento, String ciudad)
    {
        this.id_usuario = id_usuario;
        this.lantitud = lantitud;
        this.pais = pais;
       
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_usuario", this.id_usuario);
        obj.put("lantitud", this.lantitud);
        obj.put("pais", this.pais);        
                           
        return obj;
    }
    
    public void setID_usuario(String id_usuario)
    {
        this.id_usuario = id_usuario;
    }
    
    public String getID_usuario()
    {
        return this.id_usuario;
    }
    
    public void setLatitud(String lantitud)
    {
        this.lantitud = lantitud;
    }
    
    public String getLatitud()
    {
        return this.lantitud;
    }
    
    public void setPais(String pais)
    {
        this.pais = pais;
    }
    
    public String getPais()
    {
        return this.pais;
    }    
          
}
