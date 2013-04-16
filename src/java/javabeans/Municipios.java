package javabeans;

import org.json.simple.JSONObject;
/**
 *
 * @author SENA
 */
/*campos de la tabla material*/
public class Municipios 
{
    private String codMunicipio;
    private String NombreMunicipio;    
    private String cod_departamento;
        
    //inicializacion de los campos bacios      
    public Municipios()
    {
        this.codMunicipio = "";
        this.NombreMunicipio = "";        
        this.cod_departamento = "";
              
    }
   //Metodo para llamar los datos de la base de datos para agregarlos a cada campo correspondiente  
    public Municipios(String codMunicipio, String NombreMunicipio, String cod_departamento)
    {
        this.codMunicipio = codMunicipio;
        this.NombreMunicipio = NombreMunicipio;        
        this.cod_departamento = cod_departamento;
               
    }
    //Actualizar los valores 
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("codMunicipio", this.codMunicipio);
        obj.put("NombreMunicipio", this.NombreMunicipio);        
        obj.put("cod_departamento", this.cod_departamento);
                                   
        return obj;
    }
    // establecer CodMunicipio
    public void setCodMunicipio(String codMunicipio)
    {
        this.codMunicipio = codMunicipio;
    }
    // obtener CodMunicipio
    public String getCodMunicipio()
    {
        return this.codMunicipio;
    }
    // establecer NombreMunicipio
    public void setNombreMunicipio(String NombreMunicipio)
    {
        this.NombreMunicipio = NombreMunicipio;
    }
     // obtener NombreMunicipio
    public String getNombreMunicipio()
    {
        return this.NombreMunicipio;
    }
        
    // establecer Departamento
    public void setDepartamento(String cod_departamento)
    {
        this.cod_departamento = cod_departamento;
    }
     // obtener Departamento
    public String getDepartamento()
    {
        return this.cod_departamento;
    }        
}
