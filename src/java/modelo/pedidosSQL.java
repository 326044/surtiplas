/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Calendar;
import javabeans.Pedidos;
import javabeans.Usuarios;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject; 

/**
 *
 * @author EdwuarAlberto
 */
public class pedidosSQL {
    private Connection cn;
    private Statement st;
    private ResultSet rs;
    
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
    
    public JSONArray obtenerPedidos()
    {
        JSONArray pedidos = new JSONArray();
        JSONObject pedido = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM pedidos";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                                  //Pedidos(String id_pedido,           
                Pedidos ped = new Pedidos(rs.getString("id_pedido"), rs.getString("valor_del_iva"), rs.getString("valor_total"), rs.getString("id_usuario"), rs.getString("fecha"), rs.getString("hora"), rs.getString("id_cliente"));
                pedido = ped.getJSONObject();
                System.out.printf(pedido.toString());
                pedidos.add(pedido);
            }
            
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
        }
        
        return(pedidos);
    }
    
    public JSONObject datosPedido(String idPedido)
    {
        JSONObject pedido = new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT * FROM pedidos WHERE id_pedido = '" + idPedido + "';";
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            Pedidos ped = new Pedidos(rs.getString("id_pedido"), rs.getString("valor_del_iva"), rs.getString("valor_total"), rs.getString("id_usuario"), rs.getString("fecha"), rs.getString("hora"), rs.getString("id_cliente"));
            pedido = ped.getJSONObject();
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
     
        return pedido;
    }
    
    public JSONArray obtenerListadoPedidos(JSONObject jsonObject)
    {
       JSONArray Pedidos = new JSONArray();
       
       try
       {
           this.cn = getConnection();
           this.st = cn.createStatement();
           String fechaInicial= String.valueOf(jsonObject.get("fechaInicio"));
           String fechaFinal= String.valueOf(jsonObject.get("fechaFin"));
           String tsql = null; 
           
           if("".equals(fechaInicial))
           {
               if("".equals(fechaFinal))
               {
                tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                        + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente;";   
                this.rs = this.st.executeQuery(tsql);                  
               }
           }           
           else
           {
               tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                       + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                       + " pedidos.fecha BETWEEN '"+ fechaInicial +"' AND '"+ fechaFinal +"';";
               this.rs = this.st.executeQuery(tsql); 
           
           }
           
         
           System.out.printf(tsql.toString());  
           
           while(this.rs.next())
           {
               JSONObject pedido = new JSONObject();
               pedido.put("id_pedido",rs.getString("id_pedido"));
               pedido.put("fecha",rs.getString("fecha"));
               pedido.put("razon_social",rs.getString("razon_social"));
               pedido.put("nombre_usuario",rs.getString("nombre_usuario"));
               pedido.put("direccion",rs.getString("direccion"));
               pedido.put("valor_total",rs.getString("valor_total"));
               pedido.put("sql",tsql);
               System.out.printf(pedido.toString());
               Pedidos.add(pedido); 
           }
           this.desconectar();
       }

       catch(Exception e)
       {
           e.printStackTrace();            
       }

       return(Pedidos);
   }
    
    public JSONArray obtenerListadoPedidosCliente(JSONObject jsonObject)
    {
       JSONArray Pedidos = new JSONArray();
       
       try
       {
           this.cn = getConnection();
           this.st = cn.createStatement();
           String fechaInicial= String.valueOf(jsonObject.get("fechaInicio"));
           String fechaFinal= String.valueOf(jsonObject.get("fechaFin"));
           String nombre_del_cliente= String.valueOf(jsonObject.get("nombre_del_cliente"));
           String id_cliente= String.valueOf(jsonObject.get("id_cliente"));
           String tsql = null; 
          
           
           if("".equals(nombre_del_cliente))
           {
               if("".equals(id_cliente))
               {
                   if("".equals(fechaInicial))
                   {
                       if("".equals(fechaFinal))
                       {
                           tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                                   + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente;";
                           this.rs = this.st.executeQuery(tsql);
                       }
                   }
                   else
                   {
                       tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                               + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                               + " pedidos.fecha BETWEEN '"+ fechaInicial +"' AND '"+ fechaFinal +"';";   
                       this.rs = this.st.executeQuery(tsql);
                   }
               }
               else if("".equals(fechaInicial))
               {                   
                    if("".equals(fechaFinal))
                    {
                        tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                                + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                                + " pedidos.id_cliente='"+ id_cliente +"';";   
                        this.rs = this.st.executeQuery(tsql);
                    }                   
               }
               else
               {
                   tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                           + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                           + " pedidos.id_cliente='"+ id_cliente +"' AND pedidos.fecha BETWEEN '"+ fechaInicial +"' AND '"+ fechaFinal +"';";   
                   this.rs = this.st.executeQuery(tsql);
               }
           }
           else if("".equals(id_cliente))
           {
               if("".equals(fechaInicial))
               {
                   if("".equals(fechaFinal))
                   {
                        tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion "
                                + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                                + " CONCAT(clientes.nombre,' ',clientes.apellido) LIKE '%"+ nombre_del_cliente +"%';";
                        this.rs = this.st.executeQuery(tsql);
                   }
               }
               else
               {
                   tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                           + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                           + " CONCAT(clientes.nombre,' ',clientes.apellido) LIKE '%"+ nombre_del_cliente +"%' AND pedidos.fecha BETWEEN '"+ fechaInicial +"' AND '"+ fechaFinal +"';";   
                   this.rs = this.st.executeQuery(tsql);  
               }
           }
           else
           {
               if("".equals(fechaInicial))
               {
                   if("".equals(fechaFinal))
                   {
                        tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                                + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                                + " CONCAT(clientes.nombre,' ',clientes.apellido) LIKE '%"+ nombre_del_cliente +"%' AND pedidos.id_cliente='"+ id_cliente +"';";
                        this.rs = this.st.executeQuery(tsql);                        
                   }
               }
               else
               {
                   tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                           + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                           + " CONCAT(clientes.nombre,' ',clientes.apellido) LIKE '%"+ nombre_del_cliente +"%' AND pedidos.fecha BETWEEN '"+ fechaInicial +"' AND '"+ fechaFinal +"' AND id_cliente='"+ id_cliente +"';";   
                   this.rs = this.st.executeQuery(tsql); 
               }
           }
           
           System.out.print(tsql.toString());           
           
           while(this.rs.next())
           {
               JSONObject pedido = new JSONObject();
               pedido.put("id_pedido",rs.getString("id_pedido"));
               pedido.put("fecha",rs.getString("fecha"));
               pedido.put("razon_social",rs.getString("razon_social"));
               pedido.put("nombre_usuario",rs.getString("nombre_usuario"));
               pedido.put("direccion",rs.getString("direccion"));
               pedido.put("valor_total",rs.getString("valor_total"));
               pedido.put("sql",tsql);
               System.out.printf(pedido.toString());
               Pedidos.add(pedido);
           }
           this.desconectar();
       }

       catch(Exception e)
       {
           e.printStackTrace();            
       }

       return(Pedidos);
   }
    
    
    public JSONArray obtenerListadoPedidosProducto(JSONObject jsonObject)
    {
       JSONArray Pedidos = new JSONArray();
       
       try
       {
           this.cn = getConnection();
           this.st = cn.createStatement();
           String fechaInicial= String.valueOf(jsonObject.get("fechaInicio"));
           String fechaFinal= String.valueOf(jsonObject.get("fechaFin"));
           String nombre_del_producto= String.valueOf(jsonObject.get("nombre"));
           String codigo_producto= String.valueOf(jsonObject.get("codigo_producto"));
           String tsql = null;  
           
           if("".equals(nombre_del_producto))
           {
               if("".equals(codigo_producto))
               {
                   if("".equals(fechaInicial))
                   {
                       if("".equals(fechaFinal))
                       {
                           tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                                   + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente;";
                           this.rs = this.st.executeQuery(tsql);
                       }
                   }
                   else
                   {
                       tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                               + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                               + " pedidos.fecha BETWEEN '"+ fechaInicial +"' AND '"+ fechaFinal +"';";   
                       this.rs = this.st.executeQuery(tsql);
                   }
               }
               else if("".equals(fechaInicial))
               {                   
                    if("".equals(fechaFinal))
                    {
                        tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                                + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                                + " pedidos.id_cliente='"+ codigo_producto +"';";   
                        this.rs = this.st.executeQuery(tsql);
                    }                   
               }
               else
               {
                   tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                           + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                           + " pedidos.id_cliente='"+ codigo_producto +"' AND pedidos.fecha BETWEEN '"+ fechaInicial +"' AND '"+ fechaFinal +"';";   
                   this.rs = this.st.executeQuery(tsql);
               }
           }
           else if("".equals(codigo_producto))
           {
               if("".equals(fechaInicial))
               {
                   if("".equals(fechaFinal))
                   {
                        tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion "
                                + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                                + " CONCAT(clientes.nombre,' ',clientes.apellido) LIKE '%"+ nombre_del_producto +"%';";
                        this.rs = this.st.executeQuery(tsql);
                   }
               }
               else
               {
                   tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                           + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                           + " CONCAT(clientes.nombre,' ',clientes.apellido) LIKE '%"+ nombre_del_producto +"%' AND pedidos.fecha BETWEEN '"+ fechaInicial +"' AND '"+ fechaFinal +"';";   
                   this.rs = this.st.executeQuery(tsql);  
               }
           }
           else
           {
               if("".equals(fechaInicial))
               {
                   if("".equals(fechaFinal))
                   {
                        tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                                + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                                + " CONCAT(clientes.nombre,' ',clientes.apellido) LIKE '%"+ nombre_del_producto +"%' AND pedidos.id_cliente='"+ nombre_del_producto +"';";
                        this.rs = this.st.executeQuery(tsql);                        
                   }
               }
               else
               {
                   tsql = "SELECT DISTINCT pedidos.id_pedido, pedidos.fecha, pedidos.valor_total, clientes.razon_social, usuarios.nombre_usuario, clientes.direccion"
                           + " FROM pedidos, clientes, usuarios WHERE pedidos.id_usuario=usuarios.id_usuario AND pedidos.id_cliente=clientes.id_cliente AND"
                           + " CONCAT(clientes.nombre,' ',clientes.apellido) LIKE '%"+ nombre_del_producto +"%' AND pedidos.fecha BETWEEN '"+ fechaInicial +"' AND '"+ fechaFinal +"' AND id_cliente='"+ codigo_producto +"';";   
                   this.rs = this.st.executeQuery(tsql); 
               }
           }
           
           System.out.print(tsql.toString());
           
           
           while(this.rs.next())
           {
               JSONObject pedido = new JSONObject();
               pedido.put("id_pedido",rs.getString("id_pedido"));
               pedido.put("fecha",rs.getString("fecha"));
               pedido.put("razon_social",rs.getString("razon_social"));
               pedido.put("nombre_usuario",rs.getString("nombre_usuario"));
               pedido.put("direccion",rs.getString("direccion"));
               pedido.put("valor_total",rs.getString("valor_total"));
               pedido.put("sql",tsql);
               System.out.printf(pedido.toString());
               Pedidos.add(pedido);
           }
           this.desconectar();
       }

       catch(Exception e)
       {
           e.printStackTrace();            
       }

       return(Pedidos);
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
    
    public JSONObject datosPedidos(String idPedido)
    {
        JSONObject pedidos= new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT pedidos.id_pedido, pedidos.valor_del_iva, pedidos.valor_total, pedidos.fecha, pedidos.hora, usuarios.id_usuario, clientes.id_cliente FROM pedidos, usuarios, clientes WHERE usuarios.id_usuario=pedidos.id_usuario AND clientes.id_cliente=pedidos.id_cliente AND pedidos.id_pedido= " + idPedido + ";";
                     
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            
            pedidos.put("id_pedido", rs.getString("id_pedido"));
            pedidos.put("valor_del_iva", rs.getString("valor_del_iva"));
            pedidos.put("valor_total", rs.getString("valor_total"));
            pedidos.put("fecha", rs.getString("fecha"));
            pedidos.put("hora", rs.getString("hora"));
            pedidos.put("id_usuario", rs.getString("id_usuario"));
            pedidos.put("id_cliente", rs.getString("id_cliente"));
       
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return (pedidos);
    }
//**********************************************************************************************
//**********************************************************************************************
//*************                                                            *********************
//************* METODO QUE SE ENCARGA DE ADICIONAR EN LA BASE DE DATOS LOS *********************
//************* DATOS QUE SE INGRESARON EN LOS CAMPOS DE LA INTERFAZ WEB   *********************
//************* A TRAVES DEL ESTAMENTO "INSERT INTO" EN LA TABLA PEDIDOS  *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    public boolean AdicionarPedido(JSONObject datos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Pedidos usw = new Pedidos("", String.valueOf(datos.get("valor_del_iva")), String.valueOf(datos.get("valor_total")), String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("fecha")), String.valueOf(datos.get("hora")), String.valueOf(datos.get("id_cliente")));
            String tsql;
            String tsql2;
            tsql = "INSERT INTO pedidos VALUES(DEFAULT, '";
            tsql += usw.getvalor_del_iva() + "','" + usw.getvalor_total() + "','" + usw.getid_usuario() + "','" + usw.getfecha() + "','" + usw.gethora() + "','" + usw.getid_cliente() + "')";
             tsql2 = "SELECT SUM(valor) AS valor_total FROM pedidos"; 
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
    
    public boolean AdicionarPedido2(JSONObject datos, String IdUsuario)
    {
        try
        {
            // obtenemos la hora del sistema
            Calendar calendario = Calendar.getInstance();
            int hora, minutos, segundos;
            hora =calendario.get(Calendar.HOUR_OF_DAY);
            minutos = calendario.get(Calendar.MINUTE);
            segundos = calendario.get(Calendar.SECOND);
            String horaActual = (hora + ":" + minutos + ":" + segundos);
            
            // Establecemos la conexion 
            this.cn = getConnection();
            this.st = cn.createStatement();
            Pedidos usw = new Pedidos("", String.valueOf(datos.get("valor_del_iva")), String.valueOf(datos.get("valor_total")), String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("fecha")), String.valueOf(datos.get("hora")), String.valueOf(datos.get("id_cliente")));
            String tsql;
            
            // insertamos un nuevo pedido
            tsql = "INSERT INTO pedidos VALUES(DEFAULT, ";
            tsql += usw.getvalor_del_iva() + "," + usw.getvalor_total() + "," + IdUsuario + ",'" + usw.getfecha() + "','" + horaActual + "'," + usw.getid_cliente() + ")";
             
            this.st.execute(tsql);
            
            // seleccionamos el pedido que cabamos de ingresar
            String precio_unitario= String.valueOf(datos.get("precio_unitario"));
            String codigo_producto= String.valueOf(datos.get("codigo_producto"));
            String cant_pedidosprod= String.valueOf(datos.get("cant_pedidosprod"));
            String sql;
            String tsql2;
            String sql3;
            String sql4;
            sql = "SELECT MAX(id_pedido) AS pedido FROM pedidos;";
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            String pedi = rs.getString("pedido");
            
            // insertamos los producto que estan asociados al pedido
            tsql2 = "INSERT INTO pedidosprod VALUES(DEFAULT, ";
            tsql2 += codigo_producto +"," + pedi + "," + cant_pedidosprod + "," + precio_unitario + ")";
            
            this.st.execute(tsql2);
            
            // seleccionamos la cantidad de productos pedidos
            sql3 = "SELECT cantidad FROM productos WHERE codigo_producto="+ codigo_producto +";";
            this.rs = this.st.executeQuery(sql3);
            this.rs.first();
            String cantidad = rs.getString("cantidad");
            
            // descontamos la cantidad de productos obtenida al inventario disponible
            int val3 = Integer.parseInt(cantidad);
            int val2 = Integer.parseInt(cant_pedidosprod);
            int cant = val3 - val2;
            
            sql4 = "UPDATE productos SET cantidad="+ cant +" WHERE codigo_producto="+ codigo_producto +" ;";                        
            this.st.execute(sql4);            
            
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
//************* A TRAVES DEL ESTAMENTO "UPDATE" PARA LA TABLA PEDIDOS     *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
    public boolean ModificarPedido(JSONObject datos, String idPedido)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Pedidos usw = new Pedidos("", String.valueOf(datos.get("valor_del_iva")), String.valueOf(datos.get("valor_total")), String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("fecha")), String.valueOf(datos.get("hora")), String.valueOf(datos.get("id_cliente")));
            String tsql;
            tsql = "UPDATE pedidos SET  valor_del_iva='" + usw.getvalor_del_iva() + "', valor_total='" + usw.getvalor_total() +"', id_usuario='" + usw.getid_usuario() +"', fecha='" + usw.getfecha() + "', hora='" + usw.gethora() + "', id_cliente='" + usw.getid_cliente() + "' WHERE id_pedido = " + idPedido + ";";
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
//************* A TRAVES DEL ESTAMENTO "DELETE" EN LA TABLA  PEDIDOS       *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
    public boolean BorrarPedido(String idPedido)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String tsql;
            tsql = "DELETE FROM pedidos WHERE id_pedido = " + idPedido + ";";
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
    
    public JSONArray DatosPedidoVendedor(String id_pedidosProd)
    {
        JSONArray pedidos = new JSONArray();
        JSONObject cliente = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT DISTINCT productos.codigo_producto, productos.nombre, pedidosprod.cant_pedidosprod, pedidosprod.precio_unitario, colores.color, tallas.talla"
                    + " FROM productos, colores, coloresprod, tallas, tallasprod, pedidosprod, pedidos"
                    + " WHERE productos.codigo_producto=coloresprod.codigo_producto AND colores.cod_color=coloresprod.cod_color AND"
                    + " productos.codigo_producto=tallasprod.codigo_producto AND tallas.cod_talla=tallasprod.cod_talla"
                    + " AND pedidosprod.codigo_producto=productos.codigo_producto AND"
                    + " pedidosprod.id_pedido=pedidos.id_pedido AND pedidosprod.id_pedido='" + id_pedidosProd + "';";
            this.rs = this.st.executeQuery(sql);            
            System.out.print(sql.toString());
            
           while(this.rs.next())
           {
                JSONObject pedido = new JSONObject(); 
                
                pedido.put("codigo_producto", rs.getString("codigo_producto"));
                pedido.put("nombre", rs.getString("nombre"));
                pedido.put("cant_pedidosprod", rs.getString("cant_pedidosprod"));
                pedido.put("color", rs.getString("color"));
                pedido.put("talla", rs.getString("talla"));
                pedido.put("precio_unitario", rs.getString("precio_unitario"));
    //            producto.put("precio_venta", rs.getString("precio_venta"));
    //            producto.put("material", rs.getString("material"));
    //            producto.put("nombre_linea", rs.getString("nombre_linea"));
                System.out.printf(pedidos.toString());
                pedidos.add(pedido); 
    }
    
           String sql1 = "SELECT clientes.id_cliente, clientes.razon_social, usuarios.otros_datos, municipios.nombreMunicipio, clientes.telefono,"
                    + " usuarios.nombre_usuario, usuarios.tipo_usuario, usuarios.telefono_usuario, usuarios.celular_usuario, pedidos.id_pedido, pedidos.valor_del_iva, pedidos.valor_total"                    
                    + " FROM clientes, municipios, usuarios, pedidos WHERE clientes.codMunicipio=municipios.codMunicipio AND"
                    + " pedidos.id_cliente=clientes.id_cliente AND pedidos.id_pedido = '" + id_pedidosProd + "';";
            this.rs = this.st.executeQuery(sql1);
            this.rs.first();            
           
            
            cliente.put("id_cliente", rs.getString("id_cliente"));
            cliente.put("razon_social", rs.getString("razon_social"));
            cliente.put("nombreMunicipio", rs.getString("nombreMunicipio"));
            cliente.put("telefono", rs.getString("telefono"));
            cliente.put("nombre_usuario", rs.getString("nombre_usuario"));
            cliente.put("tipo_usuario", rs.getString("tipo_usuario"));
            cliente.put("telefono_usuario", rs.getString("telefono_usuario"));
            cliente.put("celular_usuario", rs.getString("celular_usuario"));
            cliente.put("id_pedido", rs.getString("id_pedido"));
            cliente.put("otros_datos", rs.getString("otros_datos"));
            cliente.put("valor_del_iva", rs.getString("valor_del_iva"));
            cliente.put("valor_total", rs.getString("valor_total"));
            pedidos.add(cliente);
              
            System.out.printf(cliente.toString());
           
}
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
     
        return pedidos;
    }
}
