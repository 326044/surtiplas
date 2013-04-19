/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.UbicacionGeografica;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
/**
 *
 * @author SENA
 */
public class UbicacionSQL 
{
    private Connection cn;
    private Statement st;
    private ResultSet rs;
    
    //CONECCION A LA BASE DE DATOS
    public Connection getConnection()
    {
        this.cn = null;
        
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            this.cn = DriverManager.getConnection("jdbc:mysql://localhost/surtiplas", "root", "12345");
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return cn;        
    }
    
    @SuppressWarnings("CallToThreadDumpStack")
    //DESCONECCION DE LA BASE DE DATOS
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
    
 //**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA ADICIONAR LA UBICACION DEL CLIENTE EN LA BASE DE DATOS***************    
//**************************************************************************************
    
    public boolean AdicionarUbicacionCliente(JSONObject datos)
    {
        try
        {            
            this.cn = getConnection();
            this.st = cn.createStatement();
            UbicacionGeografica ubic = new UbicacionGeografica(String.valueOf(datos.get("id_ubicacion")),String.valueOf(datos.get("latitud")), String.valueOf(datos.get("longitud")));
            String tsql;
            tsql = "INSERT INTO ubicacion_geografica VALUES(DEFAULT, ";
            tsql += ubic.getLatitud() + "," + ubic.getLongitud()+ ")";
            this.st.execute(tsql);
            System.out.printf(tsql.toString());
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
        
        return true;
    }

    public JSONArray listUbicacion() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
