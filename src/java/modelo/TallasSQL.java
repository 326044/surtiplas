package modelo;

/***************** IMPORTACIONES ******************/

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Tallas;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class TallasSQL 
{
    private Connection cn;
    private Statement st;
    private ResultSet rs;
    
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  METODO GENERAL QUE SE ENCARGA DE LA CONEXION *********************
//*************              A LA BASE DE DATOS                *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
    
    public Connection getConnection()
    {
        this.cn=null;
        
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            this.cn=DriverManager.getConnection("jdbc:mysql://localhost/surtiplas", "root", "12345");
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return cn;
    }
    
    @SuppressWarnings("CallToThreadDumpStack")
    
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  METODO QUE SE ENCARGA DE LA DESCONEXION      *********************
//*************              DE LA BASE DE DATOS                *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
    
    public void desconectar()
    {
        try
        {
            this.cn.close();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }
    
//****************************************************************************************
//****************************************************************************************
//*************                                                      *********************
//*************  METODO QUE SE ENCARGA DE REALIZAR LA CONSULTA PARA *********************
//*************  LLAMAR LOS DATOS DE LA BASE DE DATOS                *********************
//*************                                                      *********************
//****************************************************************************************
//****************************************************************************************
    
    public JSONArray cargarListadoTallas()
    {
        JSONArray tallas = new JSONArray();
        JSONObject talla = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM tallas";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                Tallas usg = new Tallas(rs.getString("cod_talla"), rs.getString("talla"));
                talla = usg.getJSONObject();
                System.out.printf(talla.toString());
                tallas.add(talla);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(tallas);
    }
    //*****************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA        ********************
//*************  PARA VISUALIZAR LOS COLORES                           ********************    
//*****************************************************************************************
    
    public JSONObject DatosTallas(String CodTalla)
    {
        JSONObject talla= new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT * FROM tallas WHERE cod_talla = '" + CodTalla + "';";
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            Tallas usb = new Tallas(rs.getString("cod_talla"), rs.getString("talla"));
            talla = usb.getJSONObject();
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return (talla);
    }
//************************************************************************************************
//************************************************************************************************
//*************                                                              *********************
//************* METODO QUE SE ENCARGA DE ADICIONAR EN LA BASE DE DATOS LOS   *********************
//************* DATOS QUE SE INGRESARON EN LOS CAMPOS DE LA INTERFAZ WEB     *********************
//************* A TRAVES DEL ESTAMENTO "INSERT INTO" EN LA TABLA TALLAS      *********************
//*************                                                              *********************
//************************************************************************************************
//************************************************************************************************   
    public boolean AdicionarTallas(JSONObject datos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Tallas usb = new Tallas("", String.valueOf(datos.get("talla")));
            String tsql;
            tsql = "INSERT INTO tallas VALUES(DEFAULT, '";
            tsql += usb.getTalla() + "')";
            this.st.execute(tsql);
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
        
        return true;
    }
  
//**********************************************************************************************
//**********************************************************************************************
//*************                                                            *********************
//************* METODO QUE SE ENCARGA DE MODIFICAR EN LA BASE DE DATOS LOS *********************
//************* DATOS QUE SE CAMBIARON EN LOS CAMPOS DE LA INTERFAZ WEB    *********************
//************* A TRAVES DEL ESTAMENTO "UPDATE" PARA LA TABLA LINEA PRODUCCION *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
    public boolean ModificarTallas(JSONObject datos, String CodTalla)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Tallas usb = new Tallas("", String.valueOf(datos.get("talla")));
            String tsql;
            tsql = "UPDATE tallas SET talla='" + usb.getTalla() + "' WHERE cod_talla = " + CodTalla + ";";
            this.st.execute(tsql);
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
        
        return true;
    }
//************************************************************************************************
//************************************************************************************************
//*************                                                              *********************
//************* METODO QUE SE ENCARGA DE ELIMINAR EN LA BASE DE DATOS LOS    *********************
//************* DATOS QUE SE ENCUENTRAN VISUALIZADOS EN LA INTERFAZ WEB      *********************
//************* A TRAVES DEL ESTAMENTO "DELETE" EN LA TABLA LINEA PRODUCCION *********************
//*************                                                              *********************
//************************************************************************************************
//************************************************************************************************
    
    public boolean BorrarTallas(String CodTalla)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String tsql;
            tsql = "DELETE FROM tallas WHERE cod_talla = '" + CodTalla + "';";
            this.st.execute(tsql);
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
        
        return true;
    }
}