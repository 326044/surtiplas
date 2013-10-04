package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Material;
import javabeans.productos;
import javabeans.LineaProduccion;
import javabeans.MaterialProd;
import javabeans.LineaProd;
import javabeans.Coloresprod;
import javabeans.TallasProd;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class ProductosSQL 
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
//*************  PARA QUE SE REALIZE LA BUSQUEDA DE UN PRODUCTO YA SEA********************
//*************  POR LINEA DE PRODCCION, MATERIAL O TIPO DE PRODUCTO****************    
//**************************************************************************************
    
    public JSONArray ListadoProductos(JSONObject jsonObject)
    {
        JSONArray productos = new JSONArray();
        
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String lineaProduccion = (String.valueOf(jsonObject.get("lineaProduccion")));
            String material = (String.valueOf(jsonObject.get("materiales")));
            String Tproducto = (String.valueOf(jsonObject.get("tipoProducto")));
            String tsql;
            
            if("".equals(lineaProduccion))
            {
                if("".equals(material))
                {                    
                    if("".equals(Tproducto))
                    {
                        tsql = "SELECT DISTINCT productos.codigo_producto, productos.nombre, productos.cantidad, productos.precio_venta, colores.color, tallas.talla"
                                + " FROM productos, colores, coloresprod, tallas, tallasprod"
                                + " WHERE productos.codigo_producto=coloresprod.codigo_producto AND colores.cod_color=coloresprod.cod_color AND"
                                + " productos.codigo_producto=tallasprod.codigo_producto AND tallas.cod_talla=tallasprod.cod_talla;";
                        this.rs = this.st.executeQuery(tsql);
                    }                    
                    else
                    {
                        tsql = "SELECT DISTINCT productos.codigo_producto, productos.nombre, productos.cantidad, productos.precio_venta, colores.color, tallas.talla"
                                + " FROM productos, colores, coloresprod, tallas, tallasprod"
                                + " WHERE productos.codigo_producto=coloresprod.codigo_producto AND colores.cod_color=coloresprod.cod_color AND"
                                + " productos.codigo_producto=tallasprod.codigo_producto AND tallas.cod_talla=tallasprod.cod_talla AND"
                                + " productos.cod_tipo_producto="+ Tproducto +";";
                        this.rs = this.st.executeQuery(tsql);
                    }
                }
                else if("".equals(Tproducto))
                {
                    tsql = "SELECT DISTINCT productos.codigo_producto, productos.nombre, productos.cantidad, productos.precio_venta, colores.color, tallas.talla"
                            + " FROM productos, materialprod, material, colores, coloresprod, tallas, tallasprod"
                            + " WHERE productos.codigo_producto=materialprod.codigo_producto AND material.codigo=materialprod.codigo AND"
                            + " productos.codigo_producto=coloresprod.codigo_producto AND colores.cod_color=coloresprod.cod_color AND"
                            + " productos.codigo_producto=tallasprod.codigo_producto AND tallas.cod_talla=tallasprod.cod_talla AND"
                            + " material.codigo="+ material +";";
                    this.rs = this.st.executeQuery(tsql);
                }
                else
                {
                    tsql = "SELECT DISTINCT productos.codigo_producto, productos.nombre, productos.cantidad, productos.precio_venta, colores.color, tallas.talla"
                            + " FROM productos,  tipo_producto,  material, materialprod, colores, coloresprod, tallas, tallasprod"
                            + " WHERE productos.cod_tipo_producto=tipo_producto.cod_tipo_producto AND materialprod.codigo=material.codigo AND"
                            + " productos.codigo_producto=coloresprod.codigo_producto AND colores.cod_color=coloresprod.cod_color AND"
                            + " productos.codigo_producto=tallasprod.codigo_producto AND tallas.cod_talla=tallasprod.cod_talla AND"
                            + " productos.codigo_producto=materialprod.codigo_producto AND material.codigo="+ material +" AND"
                            + " productos.cod_tipo_producto="+ Tproducto +";";
                    this.rs = this.st.executeQuery(tsql);                    
                }
            }
            else
            {
                if("".equals(material))
                {
                    if("".equals(Tproducto))
                    {
                        tsql = "SELECT DISTINCT productos.codigo_producto, productos.nombre, productos.cantidad, productos.precio_venta, colores.color, tallas.talla"
                                + " FROM productos, linea_produccion, lineaprod, colores, coloresprod, tallas, tallasprod"
                                + " WHERE productos.codigo_producto=lineaprod.codigo_producto AND productos.codigo_producto=coloresprod.codigo_producto AND"
                                + " colores.cod_color=coloresprod.cod_color AND productos.codigo_producto=tallasprod.codigo_producto AND tallas.cod_talla=tallasprod.cod_talla AND"
                                + " linea_produccion.cod_linea=lineaprod.cod_linea AND linea_produccion.cod_linea="+ lineaProduccion +";";
                        this.rs = this.st.executeQuery(tsql);                        
                    }
                    else
                    {
                       tsql = "SELECT DISTINCT productos.codigo_producto, productos.nombre, productos.cantidad, productos.precio_venta, colores.color, tallas.talla"
                               + " FROM productos, linea_produccion, lineaprod, colores, coloresprod, tallas, tallasprod"
                               + " WHERE productos.codigo_producto=lineaprod.codigo_producto AND productos.codigo_producto=coloresprod.codigo_producto AND"
                               + " colores.cod_color=coloresprod.cod_color AND productos.codigo_producto=tallasprod.codigo_producto AND tallas.cod_talla=tallasprod.cod_talla AND"
                               + " linea_produccion.cod_linea=lineaprod.cod_linea AND linea_produccion.cod_linea="+ lineaProduccion +" AND productos.cod_tipo_producto="+ Tproducto +";";
                        this.rs = this.st.executeQuery(tsql);                        
                    }
                }
                else if("".equals(Tproducto))
                {
                    tsql = "SELECT DISTINCT productos.codigo_producto, productos.nombre, productos.cantidad, productos.precio_venta, colores.color, tallas.talla"
                            + " FROM productos, linea_produccion, lineaprod, colores, coloresprod, tallas, tallasprod, material, materialprod"
                            + " WHERE productos.codigo_producto=coloresprod.codigo_producto AND colores.cod_color=coloresprod.cod_color AND"
                            + " productos.codigo_producto=tallasprod.codigo_producto AND tallas.cod_talla=tallasprod.cod_talla AND"
                            + " productos.codigo_producto=lineaprod.codigo_producto AND linea_produccion.cod_linea=lineaprod.cod_linea AND"
                            + " linea_produccion.cod_linea="+ lineaProduccion +" AND productos.codigo_producto=materialprod.codigo_producto AND"
                            + " material.codigo=materialprod.codigo AND material.codigo="+ material +";";
                    this.rs = this.st.executeQuery(tsql);                    
                }
                else
                {
                   tsql = "SELECT DISTINCT productos.codigo_producto, productos.nombre, productos.cantidad, productos.precio_venta, colores.color, tallas.talla"
                            + " FROM productos, colores, coloresprod, tallas, tallasprod, tipo_producto,  material, materialprod, linea_produccion, lineaprod"
                            + " WHERE productos.cod_tipo_producto=tipo_producto.cod_tipo_producto AND linea_produccion.cod_linea=lineaprod.cod_linea AND"
                            + " productos.codigo_producto=coloresprod.codigo_producto AND colores.cod_color=coloresprod.cod_color AND"
                            + " productos.codigo_producto=tallasprod.codigo_producto AND tallas.cod_talla=tallasprod.cod_talla AND"
                            + " materialprod.codigo=material.codigo AND productos.codigo_producto=lineaprod.codigo_producto AND"
                            + " productos.codigo_producto=materialprod.codigo_producto AND material.codigo="+ material +" AND"
                            + " productos.cod_tipo_producto="+ Tproducto +" AND linea_produccion.cod_linea="+ lineaProduccion +";";
                    this.rs = this.st.executeQuery(tsql);                    
                }                
            }
            
            System.out.printf(tsql.toString());                
            
            while(this.rs.next())
            {
                JSONObject producto = new JSONObject();
                
                producto.put("codigo_producto", rs.getString("codigo_producto"));
                producto.put("nombre", rs.getString("nombre"));
                producto.put("cantidad", rs.getString("cantidad"));
                producto.put("color", rs.getString("color"));
                producto.put("talla", rs.getString("talla"));
                producto.put("precio_venta", rs.getString("precio_venta"));
                producto.put("sql",tsql);
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
    
    
    //**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA VISUALIZAR LOS DATOS DE UN PRODUCTO********************    
//**************************************************************************************
    
    public JSONObject DatosProducto(String codigo_producto)
    {
        JSONObject producto = new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT DISTINCT productos.codigo_producto, productos.nombre, productos.cantidad, productos.precio_venta, colores.color, tallas.talla, linea_produccion.nombre_linea, material.material"
                    + " FROM productos, colores, coloresprod, tallas, tallasprod, linea_produccion, lineaprod, material, materialprod"
                    + " WHERE productos.codigo_producto=coloresprod.codigo_producto AND colores.cod_color=coloresprod.cod_color AND"
                    + " productos.codigo_producto=tallasprod.codigo_producto AND tallas.cod_talla=tallasprod.cod_talla AND productos.codigo_producto=lineaprod.codigo_producto"
                    + " AND linea_produccion.cod_linea=lineaprod.cod_linea AND productos.codigo_producto=materialprod.codigo_producto AND material.codigo=materialprod.codigo AND"
                    + " productos.codigo_producto = '" + codigo_producto + "';";
            this.rs = this.st.executeQuery(sql);            
            this.rs.first();
            
            
            producto.put("codigo_producto", rs.getString("codigo_producto"));
            producto.put("nombre", rs.getString("nombre"));
            producto.put("cantidad", rs.getString("cantidad"));
            producto.put("color", rs.getString("color"));
            producto.put("talla", rs.getString("talla"));
            producto.put("precio_venta", rs.getString("precio_venta"));
            producto.put("material", rs.getString("material"));
            producto.put("nombre_linea", rs.getString("nombre_linea"));
            System.out.printf(producto.toString());
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
     
        return producto;
    }
    
    
     public JSONObject DatosCheckProducto(String codigo_producto)
    {
        JSONObject producto = new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT DISTINCT productos.codigo_producto, productos.nombre, productos.cantidad, productos.precio_venta, colores.color, tallas.talla, linea_produccion.nombre_linea, material.material"
                    + " FROM productos, colores, coloresprod, tallas, tallasprod, linea_produccion, lineaprod, material, materialprod"
                    + " WHERE productos.codigo_producto=coloresprod.codigo_producto AND colores.cod_color=coloresprod.cod_color AND"
                    + " productos.codigo_producto=tallasprod.codigo_producto AND tallas.cod_talla=tallasprod.cod_talla AND productos.codigo_producto=lineaprod.codigo_producto"
                    + " AND linea_produccion.cod_linea=lineaprod.cod_linea AND productos.codigo_producto=materialprod.codigo_producto AND material.codigo=materialprod.codigo AND"
                    + " productos.codigo_producto = '" + codigo_producto + "';";
            this.rs = this.st.executeQuery(sql);            
            this.rs.first();
            
            
            producto.put("codigo_producto", rs.getString("codigo_producto"));
            producto.put("nombre", rs.getString("nombre"));
            producto.put("cantidad", rs.getString("cantidad"));
            producto.put("color", rs.getString("color"));
            producto.put("talla", rs.getString("talla"));
            producto.put("precio_venta", rs.getString("precio_venta"));
            producto.put("material", rs.getString("material"));
            producto.put("nombre_linea", rs.getString("nombre_linea"));
            System.out.printf(producto.toString());
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
     
        return producto;
    }
     public JSONObject DatosProductos(String codigo_producto)
    {
        JSONObject producto = new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT DISTINCT productos.codigo_producto, productos.nombre, productos.cantidad, productos.precio_costo, productos.precio_venta, productos.precio_descuento, productos.codigo_barras, tipo_producto.nombre_tipo_producto, colores.color, tallas.talla, linea_produccion.nombre_linea, material.material"
                    + " FROM productos, tipo_producto, colores, coloresprod, tallas, tallasprod, linea_produccion, lineaprod, material, materialprod"
                    + " WHERE tipo_producto.cod_tipo_producto=productos.cod_tipo_producto AND productos.codigo_producto=coloresprod.codigo_producto AND colores.cod_color=coloresprod.cod_color AND"
                    + " productos.codigo_producto=tallasprod.codigo_producto AND tallas.cod_talla=tallasprod.cod_talla AND productos.codigo_producto=lineaprod.codigo_producto"
                    + " AND linea_produccion.cod_linea=lineaprod.cod_linea AND productos.codigo_producto=materialprod.codigo_producto AND material.codigo=materialprod.codigo AND"
                    + " productos.codigo_producto = '" + codigo_producto + "';";
            this.rs = this.st.executeQuery(sql);            
            this.rs.first();
            
            
            producto.put("codigo_producto", rs.getString("codigo_producto"));
            producto.put("nombre", rs.getString("nombre"));
            producto.put("cantidad", rs.getString("cantidad"));
            producto.put("precio_costo", rs.getString("precio_costo"));
            producto.put("precio_venta", rs.getString("precio_venta"));
            producto.put("precio_descuento", rs.getString("precio_descuento"));
            producto.put("codigo_barras", rs.getString("codigo_barras"));
            producto.put("nombre_tipo_producto", rs.getString("nombre_tipo_producto"));
            producto.put("color", rs.getString("color"));
            producto.put("talla", rs.getString("talla"));
            producto.put("precio_venta", rs.getString("precio_venta"));
            producto.put("material", rs.getString("material"));
            producto.put("nombre_linea", rs.getString("nombre_linea"));
            System.out.printf(producto.toString());
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
     
        return producto;
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
            String tsql1;
            
            tsql = "INSERT INTO productos VALUES(DEFAULT, '";
            tsql += usj.getnombre()+ "','" + usj.getfoto()+ "','" + usj.getcantidad() + "','" + usj.getprecio_costo() + "','" + usj.getprecio_venta() + "','" + usj.getprecio_descuento() + "','" + usj.getcodigo_barras() + "','" + usj.getcod_tipo_producto() + "')";
            tsql = "SELECT MAX(cod_producto) FROM producto";
            this.st.execute(tsql);
            
            Coloresprod ubd = new Coloresprod("", String.valueOf(datos.get("cod_color")),"");
            
            tsql1 = "INSERT INTO coloresprod VALUES(, '";
            tsql1 += ubd.getcodColor() + "')";        
            this.st.execute(tsql1);       
            
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
            String tsql1;
            String tsql2;
            String tsql3;
            String tsql4;
            
            tsql = "UPDATE productos SET nombre='" + usj.getnombre() + "', foto='" + usj.getfoto() + "', cantidad=" + usj.getcantidad() + ", precio_costo=" + usj.getprecio_costo() + ", precio_venta=" + usj.getprecio_venta() + ", precio_descuento=" + usj.getprecio_descuento() + ", codigo_barras=" + usj.getcodigo_barras() + ", cod_tipo_producto=" + usj.getcod_tipo_producto () + " WHERE codigo_producto = " + idProductos + ";";
            this.st.execute(tsql);
            
            Coloresprod ubd = new Coloresprod("", String.valueOf(datos.get("cod_color")),"");
            
            tsql1 = "UPDATE coloresprod SET cod_color='" + ubd.getcodColor() + "' WHERE codigo_producto = " + idProductos + ";";
            this.st.execute(tsql1);
            
            LineaProd lna = new LineaProd("", String.valueOf(datos.get("cod_linea")),"");
            
            tsql2 = "UPDATE lineaprod SET cod_linea='" + lna.getCod_linea() + "' WHERE codigo_producto = " + idProductos + ";";
            this.st.execute(tsql2);
            
            MaterialProd mtr = new MaterialProd("", String.valueOf(datos.get("codigo")),"");
            
            tsql3 = "UPDATE materialprod SET codigo='" + mtr.getCodigo() + "' WHERE codigo_producto = " + idProductos + ";";
            this.st.execute(tsql3);
            
            TallasProd tll = new TallasProd("", String.valueOf(datos.get("cod_talla")),"");
            
            tsql4 = "UPDATE tallasprod SET cod_talla='" + tll.getcod_talla() + "' WHERE codigo_producto = " + idProductos + ";";
            this.st.execute(tsql4);
                       
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
            String tsql1;
            String tsql2;
            String tsql3;
            String tsql4;
            String tsql5;
            
            tsql1 = "DELETE FROM coloresprod WHERE codigo_producto = '" + idProductos + "';";
            this.st.execute(tsql1);
            tsql2 = "DELETE FROM tallasprod WHERE codigo_producto = '" + idProductos + "';";
            this.st.execute(tsql2);
            tsql3 = "DELETE FROM materialprod WHERE codigo_producto = '" + idProductos + "';";
            this.st.execute(tsql3);
            tsql4 = "DELETE FROM lineaprod WHERE codigo_producto = '" + idProductos + "';";
            this.st.execute(tsql4);
            tsql5 = "DELETE FROM productos WHERE codigo_producto = '" + idProductos + "';";
            this.st.execute(tsql5);
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
