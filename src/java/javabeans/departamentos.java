package javabeans;

import org.json.simple.JSONObject;

public class departamentos 
{
    private String cod_departamento;
    private String nombre_depto;
 
    public departamentos()
    {
        this.cod_departamento = "";
        this.nombre_depto = "";
      
    }
    
    public departamentos(String cod_departamento, String nombre_depto)
    {
        this.cod_departamento = cod_departamento;
        this.nombre_depto = nombre_depto; 
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("cod_departamento", this.cod_departamento);
        obj.put("nombre_depto", this.nombre_depto);         
        return obj;
    }
/*                                  cod_departamento                                    */    
    public void setCodDepartamento(String cod_departamento)
    {
        this.cod_departamento = cod_departamento;
    }
    
    public String getCod_departamento()
    {
        return this.cod_departamento;
    }
/* nombre_depto                                    */    
    public void setnombre_depto(String nombre_depto)
    {
        this.nombre_depto = nombre_depto;
    }
    
    public String getnombre_depto()
    {
        return this.nombre_depto;
    }

}