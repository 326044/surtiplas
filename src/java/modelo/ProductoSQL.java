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
    public boolean BorrarUsuario(String Id_producto)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String tsql;
            tsql = "DELETE FROM productos WHERE codigo_producto = '" + Id_producto + "';";
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
    // Opcion modificar productos.
    
        public boolean ModificarProductos(JSONObject datos, String idProductos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            productos usj = new productos("", String.valueOf(datos.get("nombre")), "foto", String.valueOf(datos.get("cantidad")), String.valueOf(datos.get("precio_costo")), String.valueOf(datos.get("precio_venta")), String.valueOf(datos.get("precio_descuento")), String.valueOf(datos.get("codigo_barras")), String.valueOf(datos.get("cod_tipo_producto")));
            String tsql;
            tsql = "UPDATE productos SET nombre='" + usj.getnombre() + "', foto='" + usj.getfoto() + "', cantidad=" + usj.getcantidad() + ", precio_costo=" + usj.getprecio_costo() + ", precio_venta=" + usj.getprecio_venta() + ", precio_descuento=" + usj.getprecio_descuento() + ", codigo_barras=" + usj.getcodigo_barras() + ", cod_tipo_producto=" + usj.getcod_tipo_producto () + " WHERE codigo_producto = " + idProductos + ";";
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