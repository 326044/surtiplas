
package javabeans;

import org.json.simple.JSONObject;

public class TallasProd 
{
    private String id_tallasProd;
    private String cod_talla;
    private String codigo_producto;
    
    public TallasProd()
    {
        this.id_tallasProd = "";
        this.cod_talla = "";
        this.codigo_producto = "";
    }
    
    public TallasProd(String id_tallasProd, String cod_talla, String codigo_producto)
    {
        this.id_tallasProd = id_tallasProd;
        this.cod_talla = cod_talla;
        this.codigo_producto = codigo_producto;
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_tallasProd", this.id_tallasProd);
        obj.put("cod_talla", this.cod_talla);
        obj.put("codigo_producto", this.codigo_producto);
           
        return obj;
    }
    
    public void setid_tallasProd(String id_tallasProd)
    {
        this.id_tallasProd = cod_talla;
    }
    
    public String getid_tallasProd()
    {
        return this.id_tallasProd;
    }
    
    public void setcod_talla(String cod_talla)
    {
        this.cod_talla = cod_talla;
    }
    
    public String getcod_talla()
    {
        return this.cod_talla;
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
