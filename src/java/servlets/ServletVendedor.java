package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import modelo.ClientesSQL;
import modelo.DepartamentosSQL;
import modelo.LineaProduccionSQL;
import modelo.MaterialSQL;
import modelo.MunicipiosSQL;
import modelo.PagosSQL;
import modelo.PerfilSQL;
import modelo.ProductosSQL;
import modelo.TipoProductoSQL;
import modelo.ViaticosSQL;
import modelo.pedidosSQL;
import modelo.QuejasSQL;
import modelo.UsuariosSQL;
import modelo.UbicacionSQL;
import modelo.VisitasSQL;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


@WebServlet(name = "ServletVendedor", urlPatterns = {"/ServletVendedor"})
public class ServletVendedor extends HttpServlet
{
    private String tipoUsuario;
    private String idUsuario;
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException 
    {
        request.setCharacterEncoding("utf8");
        response.setCharacterEncoding("utf8");
        response.setContentType("application/json"); 
        PrintWriter out = response.getWriter(); 
        JSONObject jsonObj = (JSONObject) JSONValue.parse(request.getParameter("vendedor"));
        String op = String.valueOf(jsonObj.get("Vendedores")); 
        System.out.print(op);
        System.out.print(jsonObj.toString());
        pedidosSQL ped = new pedidosSQL();
        ViaticosSQL usrs = new ViaticosSQL();
        ClientesSQL clie = new ClientesSQL(); 
        ProductosSQL pro = new ProductosSQL();
        PerfilSQL usrv = new PerfilSQL();
        LineaProduccionSQL LP = new LineaProduccionSQL();
        MaterialSQL mat = new MaterialSQL();
        TipoProductoSQL tp = new TipoProductoSQL();
        DepartamentosSQL dpt = new DepartamentosSQL();
        MunicipiosSQL mun = new MunicipiosSQL();
        VisitasSQL vis = new VisitasSQL();
        QuejasSQL que = new QuejasSQL();
        PagosSQL pag = new PagosSQL();
        UsuariosSQL usr = new UsuariosSQL();
        UbicacionSQL ubic = new UbicacionSQL();
        
        HttpSession session = request.getSession(true);
        session.setMaxInactiveInterval(20 * 60);
        
        idUsuario = (String)session.getAttribute("IdUsuario");
        tipoUsuario = (String)session.getAttribute("TipoUsuario");

        if (op.equals("DatosVendedor"))
        {
            String cod = String.valueOf(jsonObj.get("Id_vendedor"));   
            JSONObject perfil = usrv.datosVendedor(cod);
            out.print(perfil);
        }
        
                
        if (op.equals("DatosProducto"))
        {
            String cod = String.valueOf(jsonObj.get("codigo_producto"));   
            JSONObject productos = pro.DatosProducto(cod);
            out.print(productos);
        }
        
        if (op.equals("DatosViatico"))
        {
            String id = String.valueOf(jsonObj.get("id_viaticos"));   
            JSONObject viaticos = usrs.DatosViatico(id);
            out.print(viaticos);
        }
        
        if (op.equals("DatosCliente"))
        {
            String id = String.valueOf(jsonObj.get("id_cliente"));   
            JSONObject cliente = clie.DatosCliente(id, this.idUsuario);
            out.print(cliente);
        }
        
         if (op.equals("DatosPedido"))
        {
            String cod = String.valueOf(jsonObj.get("id_pedido"));   
            JSONObject pedidos = ped.DatosPedidoVendedor(cod);
            out.print(pedidos);
        }
         
        if (op.equals("SeccionProducto"))
        {   
            JSONArray lineaProduccion = new JSONArray();
            lineaProduccion = LP.ObtenerLineasProduccion();
            JSONArray Material = new JSONArray();
            Material = mat.ObtenerMateriales();
            JSONArray Tproducto = new JSONArray();
            Tproducto = tp.ObtenerTipoProducto();
            JSONArray mensaje = new JSONArray();            
            mensaje.add(lineaProduccion);
            mensaje.add(Material);
            mensaje.add(Tproducto);            
            System.out.print(mensaje.toString());
            out.print(mensaje);
        }
        
        if (op.equals("Departamentos"))
        {   
            JSONArray deptos = new JSONArray();
            deptos = dpt.listadoDepartamentos();
            out.print(deptos);
        }
        
        if (op.equals("Municipios"))
        {
            String codDepto = String.valueOf(jsonObj.get("DatosDepto"));   
            JSONArray municipios = mun.ObtenerMunicipios(codDepto);
            out.print(municipios);
        }
        
        if (op.equals("BuscarClientes"))
        { 
            System.out.print(String.valueOf(jsonObj.get("Datos")));            
            JSONParser parser = new JSONParser();
            JSONArray Clientes = new JSONArray();
            
            try 
            {   
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));                
                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                Clientes = clie.ListadoClientesUno(jsonObject);   
            }
            catch (ParseException e)
            {
                e.printStackTrace();
            }
            out.print(Clientes); 
        }
        
        if (op.equals("BuscarProductos"))
        {
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONParser parser = new JSONParser();
            JSONArray Productos = new JSONArray();
            
            try 
            {   
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));                
                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                Productos = pro.ListadoProductos(jsonObject);   
            }
            catch (ParseException e)
            {
                e.printStackTrace();
            }
            out.print(Productos);             
        }
        
        
        if (op.equals("AddCliente"))
        { 
          
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));
                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if(ubic.AdicionarUbicacionCliente(jsonObject))
                {
                   if (clie.AdicionarCliente(jsonObject, this.idUsuario))
                    {
                        objRes.put("AddCliente", "true");
                        out.print(objRes);
                    }

                    else
                    {
                        objRes.put("AddCliente", "false");
                        out.print(objRes);
                    } 
                }
                               
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        
        if (op.equals("AddPedido"))
        {           
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (ped.AdicionarPedido2(jsonObject, this.idUsuario))
                {
                    objRes.put("AddPedido", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("AddPedido", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        
        if (op.equals("CargarDatosAddVisita"))
        {
            String id = String.valueOf(jsonObj.get("id_cliente"));   
            JSONObject visitas = clie.DatosCliente(id, this.idUsuario);
            out.print(visitas);
        }
         
          if (op.equals("CargarDatosAddQueja"))
        {
            String id = String.valueOf(jsonObj.get("id_cliente"));   
            JSONObject viaticos = clie.DatosCliente(id, this.idUsuario);
            out.print(viaticos);
        }
         
          if (op.equals("AddVisita"))
        {           
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (vis.AdicionarVisita(jsonObject, this.idUsuario))
                {
                    objRes.put("AddVisita", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("AddVisita", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
          
          if (op.equals("AddQueja"))
        {           
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (que.AdicionarQueja(jsonObject, this.idUsuario))
                {
                    objRes.put("AddQueja", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("AddQueja", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
          
          if (op.equals("AddPago"))
        {           
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (pag.AdicionarPago(jsonObject, this.idUsuario))
                {
                    objRes.put("AddPago", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("AddPago", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
          
          if (op.equals("BuscarViatico"))
         { 
            System.out.print(String.valueOf(jsonObj.get("Datos")));            
            JSONParser parser = new JSONParser();
            JSONArray Viaticos = new JSONArray();
            
            try 
            {   
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));                
                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                Viaticos = usrs.obtenerListadoViaticos(jsonObject, this.idUsuario);   
            }
            catch (ParseException e)
            {
                e.printStackTrace();
            }
            out.print(Viaticos); 
        }
          
           if (op.equals("AddViatico"))
        { 
          
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (usrs.AdicionarViatico(jsonObject, this.idUsuario))
                {
                    objRes.put("AddViatico", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("AddViatico", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        
           
          if (op.equals("BuscarPedido"))
         { 
            System.out.print(String.valueOf(jsonObj.get("Datos")));            
            JSONParser parser = new JSONParser();
            JSONArray Pedidos = new JSONArray();
            
            try 
            {   
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));                
                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                Pedidos = ped.obtenerListadoPedidos(jsonObject);   
            }
            catch (ParseException e)
            {
                e.printStackTrace();
            }
            out.print(Pedidos); 
        }
          
          if (op.equals("BuscarPedidoCliente"))
        { 
           System.out.print(String.valueOf(jsonObj.get("Datos")));            
           JSONParser parser = new JSONParser();
           JSONArray Pedidos = new JSONArray();

           try 
           {   
               Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));                
               JSONObject jsonObject = (JSONObject) obj;
               System.out.print(jsonObject.toString());
               Pedidos = ped.obtenerListadoPedidosCliente(jsonObject);   
           }
           catch (ParseException e)
           {
               e.printStackTrace();
           }
           out.print(Pedidos); 
       }
      
          if (op.equals("BuscarPedidoProducto"))
        { 
           System.out.print(String.valueOf(jsonObj.get("Datos")));            
           JSONParser parser = new JSONParser();
           JSONArray Pedidos = new JSONArray();

           try 
           {   
               Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));                
               JSONObject jsonObject = (JSONObject) obj;
               System.out.print(jsonObject.toString());
               Pedidos = ped.obtenerListadoPedidosProducto(jsonObject);   
           }
           catch (ParseException e)
           {
               e.printStackTrace();
           }
           out.print(Pedidos); 
       }
      
          
          if (op.equals("BuscarVisita"))
         { 
            System.out.print(String.valueOf(jsonObj.get("Datos")));            
            JSONParser parser = new JSONParser();
            JSONArray Visitas = new JSONArray();
    
            try 
            {   
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));  
                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                Visitas = vis.obtenerListadoVisitas(jsonObject, this.idUsuario); 
                
            }
            catch (ParseException e)
            {
                e.printStackTrace();
            }
            out.print(Visitas); 
        }
          
          if (op.equals("BuscarQueja"))
         { 
            System.out.print(String.valueOf(jsonObj.get("Datos")));            
            JSONParser parser = new JSONParser();
            JSONArray Quejas = new JSONArray();
    
            try 
            {   
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));  
                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                Quejas = que.obtenerListadoQuejas(jsonObject); 
                
            }
            catch (ParseException e)
            {
                e.printStackTrace();
            }
            out.print(Quejas); 
        }
          
          if (op.equals("BuscarPago"))
         { 
            System.out.print(String.valueOf(jsonObj.get("Datos")));            
            JSONParser parser = new JSONParser();
            JSONArray Pagos = new JSONArray();
    
            try 
            {   
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));  
                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                Pagos = pag.obtenerListadoPagos(jsonObject); 
                
            }
            catch (ParseException e)
            {
                e.printStackTrace();
            }
            out.print(Pagos); 
        }
          
          if (op.equals("DatosVerVisita"))
        {
            String id = String.valueOf(jsonObj.get("id_visita"));   
            JSONObject visita = vis.DatosVisita(id);
            out.print(visita);
        }
          
          if (op.equals("DatosVerQueja"))
        {
            String id = String.valueOf(jsonObj.get("id_queja"));   
            JSONObject queja = que.DatosQueja(id);
            out.print(queja);
        }
          
          if (op.equals("DatosVerPago"))
        {
            String id = String.valueOf(jsonObj.get("id_pago"));   
            JSONObject pago = pag.DatosPago(id);
            out.print(pago);
        }
          
         if (op.equals("Perfil"))
        {
            System.out.print(String.valueOf(session.getAttribute("IdUsuario")));
            JSONObject vendedor = usr.datosUsuario(this.idUsuario);
            out.print(vendedor);
        }
         
         if (op.equals("DatosCheckCliente"))
        {
            String id = String.valueOf(jsonObj.get("id_cliente"));   
            JSONObject cliente = clie.DatosCheckCliente(id);
            out.print(cliente);
        }
         
          if (op.equals("DatosCheckProducto"))
        {
            String id = String.valueOf(jsonObj.get("codigo_producto"));   
            JSONObject producto = pro.DatosCheckProducto(id);
            out.print(producto);
        }
        
          if (op.equals("BuscarActividades"))
         { 
            System.out.print(String.valueOf(jsonObj.get("Datos")));            
            JSONParser parser = new JSONParser();
            JSONArray Actividades = new JSONArray();
    
            try 
            {   
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));  
                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                String tipoActividad= String.valueOf(jsonObject.get("tipoActividad"));
                
                if("1".equals(tipoActividad))
                {
                   Actividades = vis.obtenerListadoVisitas2(jsonObject, this.idUsuario); 
                }
                
                if("2".equals(tipoActividad))
                {
                    Actividades = pag.obtenerListadoPagos2(jsonObject);
                }
                
                if("3".equals(tipoActividad))
                {
                    Actividades = que.obtenerListadoQuejas2(jsonObject);
                }
                 
                
            }
            catch (ParseException e)
            {
                e.printStackTrace();
            }
            out.print(Actividades);
        }
          
        if (op.equals("ModPerfil"))
        {
            String cod = String.valueOf(jsonObj.get("IdUsuario"));
            System.out.print(cod);
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (usrv.ModificarPerfilVendedor(jsonObject, this.idUsuario, cod))
                {
                    objRes.put("ModPerfil", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("ModPerfil", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
    }
    
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        processRequest(request, response);
    }
  
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() 
    {
        return "Short description";
    }
}
