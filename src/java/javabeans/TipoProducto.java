
package javabeans;

import org.json.simple.JSONObject;
/**
 *
 * @author SENA
 */
public class TipoProducto 
{
    private String cod_tipo_producto;
    private String nombre_tipo_producto;
        
    public TipoProducto()
    {
        this.cod_tipo_producto = "";
        this.nombre_tipo_producto = "";        
    }
    
    public TipoProducto(String cod_tipo_producto, String nombre_tipo_producto)
    {
        this.cod_tipo_producto = cod_tipo_producto;
        this.nombre_tipo_producto = nombre_tipo_producto;
        
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("cod_tipo_producto", this.cod_tipo_producto);
        obj.put("nombre_tipo_producto", this.nombre_tipo_producto);
                
        return obj;
    }
    
    public void setCodTipoProducto(String cod_tipo_producto)
    {
        this.cod_tipo_producto = cod_tipo_producto;
    }
    
    public String getCodTipoProducto()
    {
        return this.cod_tipo_producto;
    }
    
    public void setNombreTipoProducto(String nombre_tipo_producto)
    {
        this.nombre_tipo_producto = nombre_tipo_producto;
    }
    
    public String getNombreTipoProducto()
    {
        return this.nombre_tipo_producto;
    }   
}
