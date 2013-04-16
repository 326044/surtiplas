/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package javabeans;

import org.json.simple.JSONObject;
/*campos de la tabla material*/
public class Material 
{
    private String codigo;
    private String material;
    //inicializacion de los campos bacios     
    public Material()
    {
        this.codigo = "";
        this.material = "";        
    }
       //Metodo para llamar los datos de la base de datos para agregarlos a cada campo correspondiente 
    public Material(String codigo, String material)
    {
        this.codigo = codigo;
        this.material = material;
        
    }
    //Actualizar los valores 
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("codigo", this.codigo);
        obj.put("material", this.material);
                
        return obj;
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
    public void setNombre_material(String material)
    {
        this.material = material;
    }
    // obtener nombre_material
    public String getNombre_material()
    {
        return this.material;
    }   
}
