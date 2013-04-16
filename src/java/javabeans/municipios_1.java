package javabeans;

/*importamos la libreria que usaremos*/

import org.json.simple.JSONObject;

// hacemos publica la clase Usuarios

public class municipios_1
{	

	 // declaro la svariable de tipo cadena

    private String codMunicipio ;
    private String nombreMunicipio;    
    private String cod_departamento;
 
	// inicializamos las variables vacios
 
    public municipios_1()
    {
        this.codMunicipio = "";
        this.nombreMunicipio = "";         
        this.cod_departamento = "";
    }
    
	 /* traemos los datos desde la base de datos para 
     asignarlos a las variables inicializadas*/
	
    public municipios_1(String codMunicipio, String NombreMunicipio, String cod_departamento)
    {
        this.codMunicipio = codMunicipio;
        this.nombreMunicipio = NombreMunicipio;        
        this.cod_departamento = cod_departamento;
    }
    
	   // Actualizamos los valores
	
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("codMunicipio", this.codMunicipio);
        obj.put("nombreMunicipio", this.nombreMunicipio);                 
        obj.put("cod_departamento", this.cod_departamento); 
        return obj;
    }
// Obtenemos el valor id_ usuario para la variable codMunicipio 
    public void setcodMunicipio(String codMunicipio)
    {
        this.codMunicipio = codMunicipio;
    }
    // retornamos el valor a codMunicipio    
    public String codMunicipio()
    {
        return this.codMunicipio;
    }
// Obtenemos el valor id_ usuario para la variable nombreMunicipio
    public void setNombreMunicipio(String NombreMunicipio)
    {
        this.nombreMunicipio = nombreMunicipio;
    }
    // retornamos el valor a nombreMunicipio    
    public String setNombreMunicipio()
    {
        return this.nombreMunicipio;
    }

// Obtenemos el valor id_ usuario para la variable cod_departamento
      public void setcod_departamento(String cod_departamento)
    {
        this.cod_departamento = cod_departamento;
    }
    // retornamos el valor a cod_departamento    
    public String cod_departamento()
    {
        return this.cod_departamento;
    }
}