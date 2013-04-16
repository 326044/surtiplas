package javabeans;

import org.json.simple.JSONObject;

public class UbicacionGeografica 
{
    private String id_ubicacion;
    private String latitud;
    private String longitud;   
    
    
    public UbicacionGeografica()
    {
        this.id_ubicacion = "";
        this.latitud = "";
        this.longitud = "";
    }
    
    public UbicacionGeografica(String id_ubicacion, String latitud, String longitud)
    {
        this.id_ubicacion = id_ubicacion;
        this.latitud = latitud;
        this.longitud = longitud;
       
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_ubicacion", this.id_ubicacion);
        obj.put("latitud", this.latitud);
        obj.put("longitud", this.longitud);        
                           
        return obj;
    }
    
    public void setID_usuario(String id_ubicacion)
    {
        this.id_ubicacion = id_ubicacion;
    }
    
    public String getID_usuario()
    {
        return this.id_ubicacion;
    }
    
    public void setLatitud(String latitud)
    {
        this.latitud = latitud;
    }
    
    public String getLatitud()
    {
        return this.latitud;
    }
    
    public void setLongitud(String longitud)
    {
        this.longitud = longitud;
    }
    
    public String getLongitud()
    {
        return this.longitud;
    }    
          
}
