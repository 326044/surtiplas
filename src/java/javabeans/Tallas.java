
package javabeans;

import org.json.simple.JSONObject;

public class Tallas 
{
    private String cod_talla;
    private String talla;
    
    public Tallas()
    {
        this.cod_talla = "";
        this.talla = "";
    }
    
    public Tallas(String cod_talla, String talla)
    {
        this.cod_talla = cod_talla;
        this.talla = talla;
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("cod_talla", this.cod_talla);
        obj.put("talla", this.talla);
           
        return obj;
    }
    
    public void setCodTalla(String cod_talla)
    {
        this.cod_talla = cod_talla;
    }
    
    public String getCodTalla()
    {
        return this.cod_talla;
    }
    
    public void setTalla(String descripcion)
    {
        this.talla = talla;
    }
    
    public String getTalla()
    {
        return this.talla;
    }
}
