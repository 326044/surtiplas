package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Material;
import javabeans.productos;
import javabeans.LineaProduccion;
import javabeans.TipoProducto;
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
    
    
}
