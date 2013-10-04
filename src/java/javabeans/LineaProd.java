package javabeans;

import org.json.simple.JSONObject;
/**
 *
 * @author SENA
 */
/*campos de la tabla clientes*/
public class LineaProd 
{
    private String id_lineaprod;
    private String cod_linea;
    private String codigo_producto;
    
    //inicializacion de los campos bacios    
    public LineaProd()
    {
        this.id_lineaprod = "";
        this.cod_linea = "";
        this.codigo_producto = "";        
    }
   //Metodo para llamar los datos de la base de datos para agregarlos a cada campo correspondiente
    public LineaProd(String id_lineaprod, String cod_linea, String codigo_producto)
    {
        this.id_lineaprod = id_lineaprod;
        this.cod_linea = cod_linea;
        this.codigo_producto = codigo_producto;
        
    }
    //Actualizar los valores
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_lineaprod", this.id_lineaprod);
        obj.put("cod_linea", this.cod_linea);
        obj.put("nombre_linea", this.codigo_producto);
                
        return obj;
    }
     // establecer id_lineaprod
    public void setid_lineaprod(String id_lineaprod)
    {
        this.id_lineaprod = id_lineaprod;
    }
    // obtener Cod_linea
    public String getid_lineaprod()
    {
        return this.id_lineaprod;
    }
    // establecer Cod_linea
    public void setCod_linea(String cod_linea)
    {
        this.cod_linea = cod_linea;
    }
    // obtener Cod_linea
    public String getCod_linea()
    {
        return this.cod_linea;
    }
    //establecer codigo_producto
    public void setcodigo_producto(String codigo_producto)
    {
        this.codigo_producto = codigo_producto;
    }
    // Obtener codigo_producto
    public String getcodigo_producto()
    {
        return this.codigo_producto;
    }   
}
