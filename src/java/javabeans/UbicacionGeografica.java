package javabeans;

import org.json.simple.JSONObject;

public class UbicacionGeografica 
{
    private String id_usuario;
    private String lantitud;
    private String pais;
    private String departamento;
    private String ciudad;
    
    
    public UbicacionGeografica()
    {
        this.id_usuario = "";
        this.lantitud = "";
        this.pais = "";
        this.departamento = "";
        this.ciudad = "";
       
    }
    
    public UbicacionGeografica(String id_usuario, String lantitud, String pais, String departamento, String ciudad)
    {
        this.id_usuario = id_usuario;
        this.lantitud = lantitud;
        this.pais = pais;
        this.departamento = departamento;
        this.ciudad = ciudad;
       
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_usuario", this.id_usuario);
        obj.put("lantitud", this.lantitud);
        obj.put("pais", this.pais);
        obj.put("departamento", this.departamento);
        obj.put("ciudad", this.ciudad);
                           
        return obj;
    }
    
    public void setID_usuario(String id_usuario)
    {
        this.id_usuario = id_usuario;
    }
    
    public String getID_usuario()
    {
        return this.id_usuario;
    }
    
    public void setLatitud(String lantitud)
    {
        this.lantitud = lantitud;
    }
    
    public String getLatitud()
    {
        return this.lantitud;
    }
    
    public void setPais(String pais)
    {
        this.pais = pais;
    }
    
    public String getPais()
    {
        return this.pais;
    }
    
    public void setDepartamento(String departamento)
    {
        this.departamento = departamento;
    }
    
    public String getDepartamento()
    {
        return this.departamento;
    }
    
    public void setCiudad(String ciudad)
    {
        this.ciudad = ciudad;
    }
    
    public String getCiudad()
    {
        return this.ciudad;
    }        
}
