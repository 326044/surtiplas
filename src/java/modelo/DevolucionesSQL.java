package modelo;

/***************** IMPORTACIONES ******************/

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Devoluciones;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class DevolucionesSQL 
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
    
    public JSONArray cargarDevoluciones()
    {
        JSONArray devoluciones = new JSONArray();
        JSONObject devolucion = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM devolucion";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                Devoluciones usd = new Devoluciones(rs.getString("id_devolucion"), rs.getString("id_cliente"), rs.getString("codigo_producto"), rs.getString("id_usuario"), rs.getString("causa_devolucion"));
                devolucion = usd.getJSONObject();
                System.out.printf(devolucion.toString());
                devoluciones.add(devolucion);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(devoluciones);
    } 
    //***********************************************************************************************
//***********************************************************************************************
//*************                                                             *********************
//************* METODO DONDE SE REALIZAN LAS CONSULTA PARA LLAMAR LOS DATOS *********************
//************* DE LA BASE DE DATOS Y CARGARLOS EN LA INTERFAZ WEB EN CADA  *********************
//************* UNO DE LOS CAMPOS DEL FORMULARIO                            *********************
//*************                                                             *********************
//***********************************************************************************************
//***********************************************************************************************
    
    public JSONObject datosDevoluciones(String idDev)
    {
        JSONObject devolucion= new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT devolucion.id_devolucion, devolucion.causa_devolucion, clientes.id_cliente, productos.codigo_producto,"
                    + "usuarios.id_usuario FROM devolucion, clientes, productos, usuarios WHERE clientes.id_cliente=devolucion.id_cliente AND productos.codigo_producto=devolucion.codigo_producto AND usuarios.id_usuario=devolucion.id_usuario AND devolucion.id_devolucion= " + idDev + ";";
                     
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            
            devolucion.put("id_devolucion", rs.getString("id_devolucion"));
            devolucion.put("id_cliente", rs.getString("id_cliente"));
            devolucion.put("codigo_producto", rs.getString("codigo_producto"));
            devolucion.put("id_usuario", rs.getString("id_usuario"));
            devolucion.put("causa_devolucion", rs.getString("causa_devolucion"));
 
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return (devolucion);
    }
    
//**********************************************************************************************
//**********************************************************************************************
//*************                                                            *********************
//************* METODO QUE SE ENCARGA DE ADICIONAR EN LA BASE DE DATOS LOS *********************
//************* DATOS QUE SE INGRESARON EN LOS CAMPOS DE LA INTERFAZ WEB   *********************
//************* A TRAVES DEL ESTAMENTO "INSERT INTO" EN LA TABLA CLIENTES  *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
      public boolean AdicionarDevolucion(JSONObject datos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Devoluciones usd = new Devoluciones("", String.valueOf(datos.get("id_cliente")), String.valueOf(datos.get("codigo_producto")), String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("causa_devolucion")));
            String tsql;
            tsql = "INSERT INTO devolucion VALUES(DEFAULT, '";
            tsql +=  usd.getIdCliente()+ "','" + usd.getCodigoProducto() + "','" + usd.getNombreVendedor() + "','" + usd.getCausaDevolucion() + "')";
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
//************* A TRAVES DEL ESTAMENTO "UPDATE" PARA LA TABLA CLIENTES     *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
    public boolean ModificarDevolucion(JSONObject datos, String id_devo)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Devoluciones usd = new Devoluciones("", String.valueOf(datos.get("id_cliente")), String.valueOf(datos.get("codigo_producto")), String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("causa_devolucion")));
            String tsql;
            tsql = "UPDATE devolucion SET  id_cliente='" + usd.getIdCliente() + "', codigo_producto='" + usd.getCodigoProducto() +"', id_usuario='" + usd.getNombreVendedor() +"', causa_devolucion='" + usd.getCausaDevolucion() + "' WHERE id_devolucion = " + id_devo + ";";
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
//************* METODO QUE SE ENCARGA DE ELIMINAR EN LA BASE DE DATOS LOS  *********************
//************* DATOS QUE SE ENCUENTRAN VISUALIZADOS EN LA INTERFAZ WEB    *********************
//************* A TRAVES DEL ESTAMENTO "DELETE" EN LA TABLA USUARIOS       *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
    public boolean BorrarDevolucion(String idDevolucion)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String tsql;
            tsql = "DELETE FROM devolucion WHERE id_devolucion = '" + idDevolucion + "';";
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