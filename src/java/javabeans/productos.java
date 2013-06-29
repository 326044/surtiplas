  package javabeans;

import org.json.simple.JSONObject;

//estamos creando variables tipo String con el nombre de los campos de la base de datos.
public class productos 
{
    private String codigo_produto;
    private String nombre;
    private String foto;
    private String cantidad;
    private String precio_costo;
    private String precio_venta;
    private String precio_descuento;
    private String codigo_barras;
    private String cod_tipo_producto;
    private String cod_color;
    private String cod_talla;
    private String cod_linea;
    private String codigo;
    
  //inicialisamos la variable con un valor nulo.
    public productos()
    {
        this.codigo_produto = "";
        this.nombre = "";
        this.foto = "";
        this.cantidad = "";  
        this.precio_costo = "";
        this.precio_venta = "";  
        this.precio_descuento = "";
        this.codigo_barras = "";
        this.cod_tipo_producto = "";
        this.cod_color = "";
        this.cod_talla = "";
        this.cod_linea = "";
        this.codigo = "";
    }
    
    public productos(String codigo_produto,String nombre, String foto, String cantidad, String precio_costo, String precio_venta, String precio_descuento, String codigo_barras, String cod_tipo_producto, String cod_color, String cod_talla, String cod_linea, String codigo)
    {
        this.codigo_produto = codigo_produto;
        this.nombre = nombre;
        this.foto = foto;
        this.cantidad = cantidad;
        this.precio_costo = precio_costo;
         this.precio_venta = precio_venta;
        this.precio_descuento = precio_descuento;
        this.codigo_barras = codigo_barras;
        this.cod_tipo_producto = cod_tipo_producto; 
        this.cod_color = cod_color; 
        this.cod_talla = cod_talla; 
        this.cod_linea = cod_linea; 
        this.codigo = codigo; 
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("codigo_producto", this.codigo_produto);
        obj.put("nombre", this.nombre);
        obj.put("foto", this.foto);
        obj.put("cantidad", this.cantidad);
        obj.put("precio_costo", this.precio_costo);           
        obj.put("precio_venta", this.precio_venta);
        obj.put("precio_descuento", this.precio_descuento); 
        obj.put("codigo_barras", this.codigo_barras);
        obj.put("cod_tipo_producto", this.cod_tipo_producto);
        obj.put("cod_color", this.cod_color);
        obj.put("cod_talla", this.cod_talla);
        obj.put("cod_linea", this.cod_linea);
        obj.put("codigo", this.codigo);
        
        return obj;
    }
    /*retorna el valor a otros datos
                               codigo_produto                                     */    
    public void setcodigo_produto(String codigo_produto)
    {
        this.codigo_produto = codigo_produto;
    }
    
    public String getcodigo_produtos()
    {
        return this.codigo_produto;
    }
/*                                  nombre                                    */
    public void setnombre(String id_usuario)
    {
        this.nombre = nombre;
    }
    
    public String getnombre()
    {
        return this.nombre;
    }
/*                                    foto                                      */    
    public void setfoto(String foto)
    {
        this.foto = foto;
    }
    
    public String getfoto()
    {
        return this.foto;
    }
/*                                 cantidad                                 */    
    public void setcantidad(String cantidad)
    {
        this.cantidad = cantidad;
    }
    
    public String getcantidad()
    {
        return this.cantidad;
    }
/*                               precio_costo                                   */    
    public void setprecio_costo(String precio_costo)
    {
        this.precio_costo = precio_costo;
    }
    
    public String getprecio_costo()
    {
        return this.precio_costo;
    }
    /*                                 precio_venta                                 */    
    
    public void setprecio_venta(String precio_venta)
    {
        this.precio_venta = precio_venta;
    }
    
    public String getprecio_venta()
    {
        return this.precio_venta;
    }
/*                                     precio_descuento                                   */    
    
    public void setprecio_descuento(String precio_descuento)
    {
        this.precio_descuento = precio_descuento;
    }
    
    public String getprecio_descuento()
    {
        return this.precio_descuento;
    }
    /*                                     codigo_barras                                   */    
    
    public void setcodigo_barras(String codigo_barras)
    {
        this.codigo_barras = codigo_barras;
    }
    /*                         getcodigo_barras                   */
    public String getcodigo_barras()
    {
        return this.codigo_barras;
    }
    // Boton Borrar
      public void setcod_tipo_producto(String cod_tipo_producto)
    {
        this.cod_tipo_producto = cod_tipo_producto;
    }
    
    public String getcod_tipo_producto()
    {
        return this.cod_tipo_producto;
    }
    public void setcod_color(String cod_color)
    {
        this.cod_color = cod_color;
    }
    
    public String getcod_color()
    {
        return this.cod_color;
    }
    public void setcod_talla(String cod_talla)
    {
        this.cod_talla = cod_talla;
    }
    
    public String getcod_talla()
    {
        return this.cod_talla;
    }
    public void setcod_linea(String cod_linea)
    {
        this.cod_linea = cod_linea;
    }
    
    public String getcod_linea()
    {
        return this.cod_linea;
    }
    public void setcodigo(String codigo)
    {
        this.codigo = codigo;
    }
    
    public String getcodigo()
    {
        return this.codigo;
    }
}
