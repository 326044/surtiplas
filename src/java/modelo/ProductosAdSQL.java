package modelo;

/***************** IMPORTACIONES ******************/

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.productos;
import javabeans.Usuarios;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class ProductosAdSQL 
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
    
    public JSONArray cargarListadoProducto()
    {
        JSONArray productos = new JSONArray();
        JSONObject producto = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM productos";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                productos usj = new productos(rs.getString("codigo_producto"), rs.getString("nombre"), rs.getString("foto"), rs.getString("cantidad"), rs.getString("precio_costo"), rs.getString("precio_venta"), rs.getString("precio_descuento"), rs.getString("codigo_barras"), rs.getString("cod_tipo_producto"));
                producto = usj.getJSONObject();
                System.out.printf(producto.toString());
                productos.add(producto);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(productos);
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
    
      public JSONObject datosProductos(String idProductos)
    {
        JSONObject productos= new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT productos.codigo_producto, productos.nombre, productos.foto, productos.cantidad, productos.precio_costo, productos.precio_venta, productos.precio_descuento, productos.codigo_barras,"
                    + "tipo_producto.cod_tipo_producto, linea_produccion.nombre_linea, tallas.talla, material.material, colores.color FROM productos, tipo_producto, usuarios, linea_produccion, lineaprod, tallas, tallasprod, material, materialprod, colores, coloresprod "
                    + "WHERE tipo_producto.cod_tipo_producto=productos.cod_tipo_producto AND productos.codigo_producto=tallasprod.codigo_producto AND tallasprod.cod_talla=tallas.cod_talla AND materialprod.codigo_producto=productos.codigo_producto AND materialprod.codigo=material.codigo AND lineaprod.codigo_producto=productos.codigo_producto AND lineaprod.cod_linea=linea_produccion.cod_linea AND coloresprod.codigo_producto=productos.codigo_producto AND coloresprod.cod_color=colores.cod_color AND productos.codigo_producto= " + idProductos + ";";
                    
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            
            productos.put("codigo_producto", rs.getString("codigo_producto"));
            productos.put("nombre", rs.getString("nombre"));
            productos.put("foto", rs.getString("foto"));
            productos.put("cantidad", rs.getString("cantidad"));
            productos.put("precio_costo", rs.getString("precio_costo"));
            productos.put("precio_venta", rs.getString("precio_venta"));
            productos.put("precio_descuento", rs.getString("precio_descuento"));
            productos.put("codigo_barras", rs.getString("codigo_barras"));
            productos.put("cod_tipo_producto", rs.getString("cod_tipo_producto"));
            productos.put("nombre_linea", rs.getString("nombre_linea"));
            productos.put("talla", rs.getString("talla"));
            productos.put("material", rs.getString("material"));
            productos.put("color", rs.getString("color"));

            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return (productos);
    }
    
//**********************************************************************************************
//**********************************************************************************************
//*************                                                            *********************
//************* METODO QUE SE ENCARGA DE ADICIONAR EN LA BASE DE DATOS LOS *********************
//************* DATOS QUE SE INGRESARON EN LOS CAMPOS DE LA INTERFAZ WEB   *********************
//************* A TRAVES DEL ESTAMENTO "INSERT INTO" EN LA TABLA PRODUCTOS *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
      
      public boolean AdicionarProducto(JSONObject datos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            productos usj = new productos("", String.valueOf(datos.get("nombre")), "foto", String.valueOf(datos.get("cantidad")), String.valueOf(datos.get("precio_costo")), String.valueOf(datos.get("precio_venta")), String.valueOf(datos.get("precio_descuento")), String.valueOf(datos.get("codigo_barras")), String.valueOf(datos.get("cod_tipo_producto")));
            String tsql;
            tsql = "INSERT INTO productos VALUES(DEFAULT, '";
            tsql += usj.getnombre()+ "','" + usj.getfoto()+ "','" + usj.getcantidad() + "','" + usj.getprecio_costo() + "','" + usj.getprecio_venta() + "','" + usj.getprecio_descuento() + "','" + usj.getcodigo_barras() + "','" + usj.getcod_tipo_producto() + "')";
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
//************* A TRAVES DEL ESTAMENTO "UPDATE" PARA LA TABLA PRODUCTOS    *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************  
      
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
    
//**********************************************************************************************
//**********************************************************************************************
//*************                                                            *********************
//************* METODO QUE SE ENCARGA DE ELIMINAR EN LA BASE DE DATOS LOS  *********************
//************* DATOS QUE SE ENCUENTRAN VISUALIZADOS EN LA INTERFAZ WEB    *********************
//************* A TRAVES DEL ESTAMENTO "DELETE" EN LA TABLA PRODUCTOS      *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
    public boolean BorrarProducto(String idProductos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String tsql;
            tsql = "DELETE FROM productos WHERE codigo_producto = '" + idProductos + "';";
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