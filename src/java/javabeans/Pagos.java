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
public class Pagos {
    private String numero_de_factura;
    private String id_cliente;
    private String nombre_cliente;
    private String fecha;
    private String id_vendedor;
    private String nombre_del_vendedor;
    private String cedula_vendedor;
    private String ciudad;
    private String tipo_de_pago;
    private String cantidad_de_pago;
    private String forma_de_pago;
    
    public Pagos()
    {
        this.numero_de_factura = "";
        this.id_cliente = "";
        this.nombre_cliente = "";
        this.fecha = "";
        this.id_vendedor = "";
        this.nombre_del_vendedor = "";
        this.cedula_vendedor = "";
        this.ciudad = "";
        this.tipo_de_pago = "";
        this.cantidad_de_pago = "";
        this.forma_de_pago = ""; 
    }
    
    public Pagos (String numero_de_factura, String id_cliente, String nombre_cliente, String fecha, String id_vendedor, String nombre_del_vendedor, String cedula_vendedor, String ciudad, String tipo_de_pago, String cantidad_de_pago, String forma_de_pago)
    {
        this.numero_de_factura = numero_de_factura;
        this.id_cliente = id_cliente;
        this.nombre_cliente = nombre_cliente;
        this.fecha = fecha;
        this.id_vendedor = id_vendedor;
        this.nombre_del_vendedor = nombre_del_vendedor;
        this.cedula_vendedor = cedula_vendedor;
        this.ciudad = ciudad;
        this.tipo_de_pago = tipo_de_pago;
        this.cantidad_de_pago = cantidad_de_pago;
        this.forma_de_pago = forma_de_pago; 
    }
    
    public JSONObject getJSONObject() 
    {
        JSONObject obj = new JSONObject();
        obj.put("numero_de_factura", this.numero_de_factura);
        obj.put("id_cliente", this.id_cliente);
        obj.put("nombre_cliente", this.nombre_cliente);
        obj.put("fecha", this.fecha);
        obj.put("id_vendedor", this.id_vendedor);
        obj.put("nombre_del_vendedor", this.nombre_del_vendedor);
        obj.put("cedula_vendedor", this.cedula_vendedor);
        obj.put("ciudad", this.ciudad);
        obj.put("tipo_de_pago", this.tipo_de_pago);
        obj.put("cantidad_de_pago", this.cantidad_de_pago);
        obj.put("forma_de_pago", this.forma_de_pago);
        
        return obj;
    }
    
    public void setNumero_de_factura(String numero_de_factura)
    {
        this.numero_de_factura = numero_de_factura;
    }
    
    public String getNumero_de_factura()
    {
        return this.numero_de_factura;
    }
    
    public void setId_cliente(String id_cliente)
    {
        this.id_cliente = id_cliente;
    }
    
    public String getId_cliente()
    {
        return this.id_cliente;
    }
    
    public void setNombre_cliente(String nombre_cliente)
    {
        this.nombre_cliente = nombre_cliente;
    }
    
    public String getNombre_cliente()
    {
        return this.nombre_cliente;
    }
    
    public void setFecha(String fecha)
    {
        this.fecha = fecha;
    }
    
    public String getFecha()
    {
        return this.fecha;
    }
    
    public void setId_vendedor(String id_vendedor)
    {
        this.id_vendedor = id_vendedor;
    }
    
    public String getId_vendedor()
    {
        return this.id_vendedor;
    }
    
    public void setNombre_del_vendedor(String nombre_del_vendedor)
    {
        this.nombre_del_vendedor = nombre_del_vendedor;
    }
    
    public String getNombre_del_vendedor()
    {
        return this.nombre_del_vendedor;
    }
    
    public void setCedula_vendedor(String cedula_vendedor)
    {
        this.cedula_vendedor = cedula_vendedor;
    }
    
    public String getCedula_vendedor()
    {
        return this.cedula_vendedor;
    }
    
    public void setCiudad(String ciudad)
    {
        this.ciudad = ciudad;
    }
    
    public String getCiudad()
    {
        return this.ciudad;
    }
    
    public void setTipo_de_pago(String tipo_de_pago)
    {
        this.tipo_de_pago = tipo_de_pago;
    }
    
    public String getTipo_de_pago()
    {
        return this.tipo_de_pago;
    }
    
    public void setCantidad_de_pago(String cantidad_de_pago)
    {
        this.cantidad_de_pago = cantidad_de_pago;
    }
    
    public String getCantidad_de_pago()
    {
        return this.cantidad_de_pago;
    }
    
    public void setForma_de_pago(String forma_de_pago)
    {
        this.forma_de_pago = forma_de_pago;
    }
    
    public String getForma_de_pago()
    {
        return this.forma_de_pago;
    }
    
    
    
    
    
    
    
    
    
    
    
}
