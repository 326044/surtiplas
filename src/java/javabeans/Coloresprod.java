
package javabeans;

import org.json.simple.JSONObject;

public class Coloresprod 
{
    private String id_coloresProd;
    private String cod_color;
    private String codigo_producto;
    
    public Coloresprod()
    {
        this.id_coloresProd = "";
        this.cod_color = "";
        this.codigo_producto = "";
    }
    
    public Coloresprod(String id_coloresProd, String cod_color, String codigo_producto)
    {
        this.id_coloresProd = id_coloresProd;
        this.cod_color = cod_color;
        this.codigo_producto = codigo_producto;
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_coloresProd", this.id_coloresProd);
        obj.put("cod_color", this.cod_color);
        obj.put("codigo_producto", this.codigo_producto);

        return obj;
    }
    
    public void setid_coloresProd(String id_coloresProd)
    {
        this.id_coloresProd = id_coloresProd;
    }
    
    public String getCodColorProd()
    {
        return this.id_coloresProd;
    }
    
    public void setcodColor(String cod_color)
    {
        this.cod_color = cod_color;
    }
    
    public String getcodColor()
    {
        return this.cod_color;
    }
    
    public void setcodigo_producto(String codigo_producto)
    {
        this.codigo_producto = codigo_producto;
    }
    
    public String getcodigo_producto()
    {
        return this.codigo_producto;
    }
}
