
package javabeans;

import org.json.simple.JSONObject;

public class Colores 
{
    private String cod_color;
    private String color;
    
    public Colores()
    {
        this.cod_color = "";
        this.color = "";
    }
    
    public Colores(String cod_color, String color)
    {
        this.cod_color = cod_color;
        this.color = color;
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("cod_color", this.cod_color);
        obj.put("color", this.color);

        return obj;
    }
    
    public void setCodColor(String cod_color)
    {
        this.cod_color = cod_color;
    }
    
    public String getCodColor()
    {
        return this.cod_color;
    }
    
    public void setColor(String color)
    {
        this.color = color;
    }
    
    public String getColor()
    {
        return this.color;
    }
}
