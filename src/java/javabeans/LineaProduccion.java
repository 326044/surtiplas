package javabeans;

import org.json.simple.JSONObject;
/**
 *
 * @author SENA
 */
/*campos de la tabla clientes*/
public class LineaProduccion 
{
    private String cod_linea;
    private String nombre_linea;
    
    //inicializacion de los campos bacios    
    public LineaProduccion()
    {
        this.cod_linea = "";
        this.nombre_linea = "";        
    }
   //Metodo para llamar los datos de la base de datos para agregarlos a cada campo correspondiente
    public LineaProduccion(String cod_linea, String nombre_linea)
    {
        this.cod_linea = cod_linea;
        this.nombre_linea = nombre_linea;
        
    }
    //Actualizar los valores
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("cod_linea", this.cod_linea);
        obj.put("nombre_linea", this.nombre_linea);
                
        return obj;
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
    //establecer Nombre_linea
    public void setNombre_linea(String nombre_linea)
    {
        this.nombre_linea = nombre_linea;
    }
    // Obtener Nombre_linea
    public String getNombre_linea()
    {
        return this.nombre_linea;
    }   
}
