/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package javabeans;

import org.json.simple.JSONObject;

/**
 *
 * @author Home
 */
/*campos de la tabla material*/
public class Pagos 
{   
    private String id_pago;
    private String numero_de_factura;
    private String id_cliente;
    private String id_usuario;
    private String fecha;
    private String id_vendedor;
    private String tipo_de_pago;
    private String cantidad_de_pago;
    private String forma_de_pago;
    private String descripcion;
     //inicializacion de los campos bacios     
    public Pagos()
    {
        this.id_pago = "";
        this.numero_de_factura = "";
        this.id_cliente = "";
        this.id_usuario = "";
        this.fecha = "";
        this.id_vendedor = "";
        this.tipo_de_pago = "";
        this.cantidad_de_pago = "";
        this.forma_de_pago = ""; 
        this.descripcion = ""; 
    }
     //Metodo para llamar los datos de la base de datos para agregarlos a cada campo correspondiente 
    public Pagos (String id_pago, String numero_de_factura, String id_cliente, String id_usuario, String fecha, String id_vendedor, String tipo_de_pago, String cantidad_de_pago, String forma_de_pago, String descripcion)
    {
        this.id_pago = id_pago;
        this.numero_de_factura = numero_de_factura;
        this.id_cliente = id_cliente;
        this.id_usuario = id_usuario;
        this.fecha = fecha;
        this.id_vendedor = id_vendedor;
        this.tipo_de_pago = tipo_de_pago;
        this.cantidad_de_pago = cantidad_de_pago;
        this.forma_de_pago = forma_de_pago; 
        this.descripcion = descripcion; 
    }
     //Actualizar los valores 
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        
        obj.put("id_pago", this.id_pago);
        obj.put("numero_de_factura", this.numero_de_factura);
        obj.put("id_cliente", this.id_cliente);
        obj.put("id_usuario", this.id_usuario);
        obj.put("fecha", this.fecha);
        obj.put("id_vendedor", this.id_vendedor);
        obj.put("tipo_de_pago", this.tipo_de_pago);
        obj.put("cantidad_de_pago", this.cantidad_de_pago);
        obj.put("forma_de_pago", this.forma_de_pago);
        obj.put("descripcion", this.descripcion);
        
        return obj;
    }
     // establecer Id_pago
     public void setId_pago(String id_pago)
    {
        this.id_pago = id_pago;
    }
    // obtener Id_pago
    public String getId_pago()
    {
        return this.id_pago;
    }
    // establecer Numero_de_factura
    public void setNumero_de_factura(String numero_de_factura)
    {
        this.numero_de_factura = numero_de_factura;
    }
     // obtener Numero_de_factura
    public String getNumero_de_factura()
    {
        return this.numero_de_factura;
    }
    // establecer Id_cliente
    public void setId_cliente(String id_cliente)
    {
        this.id_cliente = id_cliente;
    }
    // obtener Id_cliente
    public String getId_cliente()
    {
        return this.id_cliente;
    }
    // establecer Id_usuario
    public void setId_usuario(String id_usuario)
    {
        this.id_usuario = id_usuario;
    }
    // obtener Id_usuario
    public String getId_usuario()
    {
        return this.id_usuario;
    }
    // establecer fecha
    public void setFecha(String fecha)
    {
        this.fecha = fecha;
    }
    // obtener fecha
    public String getFecha()
    {
        return this.fecha;
    }
    // establecer id_vendedor
    public void setId_vendedor(String id_vendedor)
    {
        this.id_vendedor = id_vendedor;
    }
    // obtener id_vendedor
    public String getId_vendedor()
    {
        return this.id_vendedor;
    }
    // establecer tipo_de_pago 
    public void setTipo_de_pago(String tipo_de_pago)
    {
        this.tipo_de_pago = tipo_de_pago;
    }
    // obtener tipo_de_pago
    public String getTipo_de_pago()
    {
        return this.tipo_de_pago;
    }
     // establecer cantidad_de_pago 
    public void setCantidad_de_pago(String cantidad_de_pago)
    {
        this.cantidad_de_pago = cantidad_de_pago;
    }
    // obtener cantidad_de_pago
    public String getCantidad_de_pago()
    {
        return this.cantidad_de_pago;
    }
     // establecer forma_de_pago 
    public void setForma_de_pago(String forma_de_pago)
    {
        this.forma_de_pago = forma_de_pago;
    }
    // obtener forma_de_pago
    public String getForma_de_pago()
    {
        return this.forma_de_pago;
    }
    // establecer  descripcion
     public void setDescripcion(String descripcion)
    {
        this.descripcion = descripcion;
    }
    // obtener descripcion
    public String getDescripcion()
    {
        return this.descripcion;
    }
    
    
}
