/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package javabeans;

import org.json.simple.JSONObject;
/*campos de la tabla material*/
public class MaterialProd 
{
    private String id_materialProd;
    private String codigo;
    private String codigo_producto;
    
    //inicializacion de los campos bacios     
    public MaterialProd()
    {
        this.id_materialProd = "";
        this.codigo = "";
        this.codigo_producto = "";        
    }
       //Metodo para llamar los datos de la base de datos para agregarlos a cada campo correspondiente 
    public MaterialProd(String id_materialProd, String codigo, String codigo_producto)
    {
        this.id_materialProd = id_materialProd;
        this.codigo = codigo;
        this.codigo_producto = codigo_producto;
        
    }
    //Actualizar los valores 
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_materialProd", this.id_materialProd);
        obj.put("codigo", this.codigo);
        obj.put("codigo_producto", this.codigo_producto);
                
        return obj;
    }
    // establecer codigo
    public void setid_materialProd(String id_materialProd)
    {
        this.id_materialProd = id_materialProd;
    }
    // obtener codigo
    public String getid_materialProd()
    {
        return this.id_materialProd;
    }
    // establecer codigo
    public void setCodigo(String codigo)
    {
        this.codigo = codigo;
    }
    // obtener codigo
    public String getCodigo()
    {
        return this.codigo;
    }
    // establecer nombre_material
    public void setcodigo_producto(String codigo_producto)
    {
        this.codigo_producto = codigo_producto;
    }
    // obtener nombre_material
    public String getcodigo_producto()
    {
        return this.codigo_producto;
    }   
}
