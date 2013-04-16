
package javabeans;

import org.json.simple.JSONObject;

public class Dimensiones 
{
    private String id_dimension;
    private String codigo_producto;
    private String largo;
    private String ancho;
    
    public Dimensiones()
    {
        this.id_dimension = "";
        this.codigo_producto = "";
        this.largo = "";
        this.ancho = "";
    }
    
    public Dimensiones(String id_dimension, String codigo_producto, String largo, String ancho)
    {
        this.id_dimension = id_dimension;
        this.codigo_producto = codigo_producto;
        this.largo = largo;
        this.ancho = ancho;
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_dimension", this.id_dimension);
        obj.put("codigo_producto", this.codigo_producto);
        obj.put("largo", this.largo);
        obj.put("ancho", this.ancho);
           
        return obj;
    }
    
    public void setIdDimension(String id_dimension)
    {
        this.id_dimension = id_dimension;
    }
    
    public String getIdDimension()
    {
        return this.id_dimension;
    }
    
    public void setCodigoProducto(String codigo_producto)
    {
        this.codigo_producto = codigo_producto;
    }
    
    public String getCodigoProducto()
    {
        return this.codigo_producto;
    }
    
    public void setLargo(String largo)
    {
        this.largo = largo;
    }
    
    public String getLargo()
    {
        return this.largo;
    }
    
    public void setAncho(String ancho)
    {
        this.ancho = ancho;
    }
    
    public String getAncho()
    {
        return this.ancho;
    }
}
