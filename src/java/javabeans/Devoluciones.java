
package javabeans;

import org.json.simple.JSONObject;

public class Devoluciones 
{
    private String id_devolucion;
    private String id_cliente;
    private String codigo_producto;
    private String id_usuario;
    private String causa_devolucion;
    
    public Devoluciones()
    {
        this.id_devolucion = "";
        this.id_cliente = "";
        this.codigo_producto = "";
        this.id_usuario = "";
        this.causa_devolucion = "";
    }
    
    public Devoluciones(String id_devolucion, String id_cliente, String codigo_producto, String id_usuario, String causa_devolucion)
    {
        this.id_devolucion = id_devolucion;
        this.id_cliente = id_cliente;
        this.codigo_producto = codigo_producto;
        this.id_usuario = id_usuario;
        this.causa_devolucion = causa_devolucion;
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("id_devolucion", this.id_devolucion);
        obj.put("id_cliente", this.id_cliente);
        obj.put("codigo_producto", this.codigo_producto);
        obj.put("id_usuario", this.id_usuario);
        obj.put("causa_devolucion", this.causa_devolucion);
           
        return obj;
    }
    public void setIdDevolucion(String id_devolucion)
    {
        this.id_devolucion = id_devolucion;
    }
    public String getIdDevolucion()
    {
        return this.id_devolucion;
    }
    public void setIdCliente(String id_cliente)
    {
        this.id_cliente = id_cliente;
    }
    
    public String getIdCliente()
    {
        return this.id_cliente;
    }
   
    public void setCodigoProducto(String codigo_producto)
    {
        this.codigo_producto = codigo_producto;
    }
    
    public String getCodigoProducto()
    {
        return this.codigo_producto;
    }

    public void setNombreVendedor(String id_usuario)
    {
        this.id_usuario = id_usuario;
    }
    public String getNombreVendedor()
    {
        return this.id_usuario;
    }
    
    public void setCausaDevolucion(String causa_devolucion)
    {
        this.causa_devolucion = causa_devolucion;
    }
    
    public String getCausaDevolucion()
    {
        return this.causa_devolucion;
    }
}
