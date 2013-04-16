package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.productos;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

//Variables que usaremos.
public class ProductoSQL
{
    private Connection cn; 
    private Statement st;
    private ResultSet rs;
    
    public Connection getConnection()
    {
        //Inicializaremos la variable cn null.
        this.cn=null;
        
        //Nos conectaremos a la base de datos.
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
    //obtendremos los productos tras una consulta.
    public JSONArray obtenerProductos()
    {
        JSONArray arrayproductos = new JSONArray();
        JSONObject productos = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();        
            String Productossql;
            Productossql = "SELECT * FROM productos";
            this.rs = this.st.executeQuery(Productossql);
            
            while(this.rs.next()) 
            {  
                productos pro = new productos(rs.getString("codigo_producto"), rs.getString("nombre"), rs.getString("foto"), rs.getString("cantidad"), rs.getString("precio_costo"), rs.getString("precio_venta"), rs.getString("precio_descuento"),rs.getString("codigo_barras"),rs.getString("cod_tipo_producto"));
                productos = pro.getJSONObject();
                System.out.printf(productos.toString());
                arrayproductos.add(productos);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(arrayproductos);
    }  
    //Listaremos los prouctos por medio de una consulta.
    public JSONObject datosProduc(String idProducto)
    {
        JSONObject datosproducto = new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT * FROM productos WHERE codigo_producto = '" + idProducto + "';";
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            productos Dpro = new productos(rs.getString("codigo_producto"), rs.getString("nombre"), rs.getString("foto"), rs.getString("cantidad"), rs.getString("precio_costo"), rs.getString("precio_venta"), rs.getString("precio_descuento"),rs.getString("codigo_barras"),rs.getString("cod_tipo_producto"));            
            datosproducto = Dpro.getJSONObject();
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
     
        return datosproducto;
    }
    //Boraremos un producto con el idUsr
    public boolean BorrarUsuario(String codigo_produto)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String tsql;
            tsql = "DELETE FROM productos WHERE codigo_producto = '" + codigo_produto + "';";
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