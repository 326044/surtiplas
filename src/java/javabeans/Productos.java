package javabeans;

import org.json.simple.JSONObject;

public class Productos 
{
    private String codigo_producto;
    private String nombre;
    private String foto;
    private String cantidad;
    private String precio_costo;
    private String precio_venta;
    private String precio_descuento;
    private String codigo_barras;
    
    
    public Productos()
    {
        this.codigo_producto = "";
        this.nombre = "";
        this.foto = "";
        this.cantidad = "";
        this.precio_costo = "";
        this.precio_venta = "";
        this.precio_descuento = "";
        this.codigo_barras = "";
        
    }
    
    public Productos(String codigo_producto, String nombre, String foto, String cantidad, String precio_costo, String precio_venta, String precio_descuento, String codigo_barras)
    {
        this.codigo_producto = codigo_producto;
        this.nombre = nombre;
        this.foto = foto;
        this.cantidad = cantidad;
        this.precio_costo = precio_costo;
        this.precio_venta = precio_venta;
        this.precio_descuento = precio_descuento;
        this.codigo_barras = codigo_barras;
        
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("codigo_producto", this.codigo_producto);
        obj.put("nombre", this.nombre);
        obj.put("foto", this.foto);
        obj.put("cantidad", this.cantidad);
        obj.put("precio_costo", this.precio_costo);
        obj.put("precio_venta", this.precio_venta);
        obj.put("precio_descuento", this.precio_descuento);
        obj.put("codigo_barras", this.codigo_barras);
                   
        return obj;
    }
    
    public void setCodProducto(String codigo_producto)
    {
        this.codigo_producto = codigo_producto;
    }
    
    public String getCodProducto()
    {
        return this.codigo_producto;
    }
    
    public void setNombreProducto(String nombre)
    {
        this.nombre = nombre;
    }
    
    public String getNombreProducto()
    {
        return this.nombre;
    }
    
    public void setFotoProducto(String foto)
    {
        this.foto = foto;
    }
    
    public String getFotoProdcto()
    {
        return this.foto;
    }
    
    public void setCantidad(String cantidad)
    {
        this.cantidad = cantidad;
    }
    
    public String getCantidado()
    {
        return this.cantidad;
    }
    
    public void setPrecioCosto(String precio_costo)
    {
        this.precio_costo = precio_costo;
    }
    
    public String getPrecioCosto()
    {
        return this.precio_costo;
    }
    
    public void setPrecioVenta(String precio_venta)
    {
        this.precio_venta = precio_venta;
    }
    
    public String getPrecioVenta()
    {
        return this.precio_venta;
    }
    
    public void setPrecioDescuento(String precio_descuento)
    {
        this.precio_descuento = precio_descuento;
    }
    
    public String getPrecioDescuento()
    {
        return this.precio_descuento;
    }
    
    public void setCodigoBarras(String codigo_barras)
    {
        this.codigo_barras = codigo_barras;
    }
    
    public String getCodigoBarras()
    {
        return this.codigo_barras;
    }
    
}
