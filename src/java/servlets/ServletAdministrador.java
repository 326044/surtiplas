
package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import modelo.ClientesSQL;
import modelo.ColorSQL;
import modelo.ColoresSQL;
import modelo.ComboClientesSQL;
import modelo.DepartamentosSQL;
import modelo.DevolucionesSQL;
import modelo.ComboProductoSQL;
import modelo.LineaProduccionSQL;
import modelo.MaterialSQL;
import modelo.MunicipiosSQL;
import modelo.pedidosSQL;
import modelo.PerfilSQL;
import modelo.ProductosAdSQL;
import modelo.TallasComboSQL;
import modelo.TallasSQL;
import modelo.TipoProductoSQL;
import modelo.UbicacionSQL;
import modelo.UsuariosSQL;
import modelo.VendedoresSQL;
import modelo.ViaticosSQL;
import modelo.VisitasSQL;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


@WebServlet(name = "ServletAdministrador", urlPatterns = {"/ServletAdministrador"})
public class ServletAdministrador extends HttpServlet 
{  
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException 
    {
        request.setCharacterEncoding("utf8");
        response.setCharacterEncoding("utf8");
        response.setContentType("application/json"); 
        PrintWriter out = response.getWriter(); 
        JSONObject jsonObj = (JSONObject) JSONValue.parse(request.getParameter("administrador"));
        String op = String.valueOf(jsonObj.get("Usuarios"));  
        System.out.print(op);
        System.out.print(jsonObj.toString());
        UsuariosSQL usr = new UsuariosSQL();
        VisitasSQL uss = new VisitasSQL();
        ViaticosSQL usl = new ViaticosSQL();
        ProductosAdSQL usj = new ProductosAdSQL();
        ClientesSQL usf = new ClientesSQL();
        LineaProduccionSQL lp = new LineaProduccionSQL();
        ColoresSQL usp = new ColoresSQL();
        TallasSQL usb = new TallasSQL();
        MaterialSQL use = new MaterialSQL();
        pedidosSQL usw = new pedidosSQL();
        DevolucionesSQL usd = new DevolucionesSQL();
        DepartamentosSQL dpt= new DepartamentosSQL();
        MunicipiosSQL mun= new MunicipiosSQL();
        UbicacionSQL ub= new UbicacionSQL();
        VendedoresSQL ven= new VendedoresSQL();
        ComboClientesSQL cli= new ComboClientesSQL();
        PerfilSQL per= new PerfilSQL();
        ComboProductoSQL cp=new ComboProductoSQL();
        TallasComboSQL tc=new TallasComboSQL();
        ColorSQL cl=new ColorSQL();
        TipoProductoSQL ti=new TipoProductoSQL();

        
        if (op.equals("Listado"))
        {
            JSONArray usuarios = new JSONArray();
            usuarios = usr.obtenerUsuariosVendedores();
            out.print(usuarios);
        }
        
        if (op.equals("Productos"))
        {
            JSONArray productos = new JSONArray();
            productos = usj.cargarListadoProducto();
            out.print(productos);
        }
        if (op.equals("Clientes"))
        {
            JSONArray clientes = new JSONArray();
            clientes = usf.cargarListadoClientes();
            out.print(clientes);
        }
        if (op.equals("Lineas"))
        {
            JSONArray lineas = new JSONArray();
            lineas = lp.cargarListadolineas();
            out.print(lineas);
        }

        if (op.equals("Colores"))
        {
            JSONArray colores = new JSONArray();
            colores = usp.cargarListadoColores();
            out.print(colores);
        }
        if (op.equals("Tallas"))
        {
            JSONArray tallas = new JSONArray();
            tallas = usb.cargarListadoTallas();
            out.print(tallas);
        }
        if (op.equals("Materiales"))
        {
            JSONArray materiales = new JSONArray();
            materiales = use.cargarMateriales();
            out.print(materiales);
        }
        if (op.equals("Pedidos"))
        {
            JSONArray pedidos = new JSONArray();
            pedidos = usw.cargarPedidos();
            out.print(pedidos);
        }
        if (op.equals("Devoluciones"))
        {
            JSONArray devoluciones = new JSONArray();
            devoluciones = usd.cargarDevoluciones();
            out.print(devoluciones);
        }

        if (op.equals("DatosUsuario"))
        {
            String cod = String.valueOf(jsonObj.get("Id_usuario"));   
            JSONObject usuario = usr.datosUsuario(cod);
            out.print(usuario);
        }
        if (op.equals("DatosVisitas"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Visitas"));  
            System.out.print(cod);
            JSONObject visita = uss.datosVisitas(cod);
            out.print(visita);
        }
       if (op.equals("DatosViaticos"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Viaticos"));  
            System.out.print(cod);
            JSONObject viatico = usl.datosViaticos(cod);
            out.print(viatico);
        }
        if (op.equals("DatosProductos"))
        {
            String cod = String.valueOf(jsonObj.get("Codigo_Producto"));  
            System.out.print(cod);
            JSONObject producto = usj.datosProductos(cod);
            out.print(producto);
        }
        if (op.equals("DatosLineas"))
        {
            String cod = String.valueOf(jsonObj.get("CodLinea"));  
            System.out.print(cod);
            JSONObject lineas = ush.datosLineas(cod);
            out.print(lineas);
        }
        if (op.equals("DatosClientes"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Cliente"));  
            System.out.print(cod);
            JSONObject clientes = usf.datosClientes(cod);
            out.print(clientes);
        }
        
        if (op.equals("DatosPedidos"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Pedido"));  
            System.out.print(cod);
            JSONObject pedido = usw.datosPedidos(cod);
            out.print(pedido);
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
        
        if (op.equals("Ubicacion"))
        {   
            JSONArray ubicacion = new JSONArray();
            ubicacion = ub.listUbicacion();
            out.print(ubicacion);
	}
        
        if (op.equals("Vendedores"))
        {   
            JSONArray vendor = new JSONArray();
            vendor = ven.cargarListadoVendedores();
            out.print(vendor);
	}
        
        if (op.equals("ComboClientes"))
        {   
            JSONArray clients = new JSONArray();
            clients = cli.ListadoClientes();
            out.print(clients);
	}
        
        if (op.equals("Perfil"))
        {   
            JSONArray perfils = new JSONArray();
            perfils = per.cargarPerfil();
            out.print(perfils);
	}
        
        if (op.equals("DatosPerfil"))
        {
            String cod = String.valueOf(jsonObj.get("Id_usuario"));  
            System.out.print(cod);
            JSONObject perfil = per.datosPerfil(cod);
            out.print(perfil);
        }
        if (op.equals("DatosDevoluciones"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Devolucion"));  
            System.out.print(cod);
            JSONObject devolucion = usd.datosDevoluciones(cod);
            out.print(devolucion);
        }
        
        if (op.equals("LineasCombo"))
        {   
            JSONArray lines = new JSONArray();
            lines = lni.cargarListadolineasCombo();
            out.print(lines);
	}
        
        if (op.equals("MaterialesCombo"))
        {   
            JSONArray maters = new JSONArray();
            maters = mtc.cargarComboMateriales();
            out.print(maters);
	}
        
        if (op.equals("TallasCombo"))
        {   
            JSONArray talls = new JSONArray();
            talls = tc.cargarListadoTallasCombo();
            out.print(talls);
	}
        
        if (op.equals("ComboProducto"))
        {   
            JSONArray prodts = new JSONArray();
            prodts = cp.cargarListadoProductos();
            out.print(prodts);
	}
        
        if (op.equals("Color"))
        {   
            JSONArray colors = new JSONArray();
            colors = cl.cargarColor();
            out.print(colors);
	}
        
        if (op.equals("Tipo"))
        {   
            JSONArray Tips = new JSONArray();
            Tips = ti.cargarlistadoTipo();
            out.print(Tips);
	}
        
        if (op.equals("AddUsuario"))
        {
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (usr.AdicionarUsuario(jsonObject))
                {
                    objRes.put("AddUsuario", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("AddUsuario", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        if (op.equals("ModUsuario"))
        {
            String cod = String.valueOf(jsonObj.get("Id_usuario"));
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (usr.ModificarUsuario(jsonObject, cod))
                {
                    objRes.put("ModUsuario", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("ModUsuario", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        if (op.equals("DelUsuario"))
        {
            String cod = String.valueOf(jsonObj.get("Id_usuario"));  
            JSONObject objRes = new JSONObject();
            
            if (usr.BorrarUsuario(cod))
            {
                objRes.put("DelUsuario", "true");
                out.print(objRes);
            }

            else
            {
                objRes.put("DelUsuario", "false");
                out.print(objRes);
            }
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
                
                if (uss.AdicionarVisita(jsonObject))
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
        if (op.equals("ModVisita"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Visitas"));
            System.out.print(cod);
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (uss.ModificarVisita(jsonObject, cod))
                {
                    objRes.put("ModVisita", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("ModVisita", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        if (op.equals("DelVisita"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Visitas"));  
            JSONObject objRes = new JSONObject();
           
            if (uss.BorrarVisita(cod))
            {
                objRes.put("DelVisita", "true");
                out.print(objRes);
            }

            else
            {
                objRes.put("DelVisita", "false");
                out.print(objRes);
            }
        }
        if (op.equals("BuscarVisitas"))
        {
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONParser parser = new JSONParser();
            JSONArray visitas = new JSONArray();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));
                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                visitas = uss.cargarListadoVist(jsonObject);
            }

            catch (ParseException e) 
            {
                e.printStackTrace();
            }
            out.print(visitas);
        }
        
        if (op.equals("BuscarViatico"))
        {
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONParser parser = new JSONParser();
            JSONArray viaticos = new JSONArray();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));
                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                viaticos = usl.cargarListadoViatico(jsonObject);
            }

            catch (ParseException e) 
            {
                e.printStackTrace();
            }
            out.print(viaticos);
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
                
                if (usl.AdicionarViatico(jsonObject))
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
        if (op.equals("ModViatico"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Viaticos"));
            System.out.print(cod);
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (usl.ModificarViaticos(jsonObject, cod))
                {
                    objRes.put("ModViatico", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("ModViatico", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        if (op.equals("DelViatico"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Viaticos"));  
            JSONObject objRes = new JSONObject();
            
            if (usl.BorrarViatico(cod))
            {
                objRes.put("DelViatico", "true");
                out.print(objRes);
            }

            else
            {
                objRes.put("DelViatico", "false");
                out.print(objRes);
            }
        }
        
        if (op.equals("AddProducto"))
        {
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (usj.AdicionarProducto(jsonObject))
                {
                    objRes.put("AddProducto", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("AddProducto", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        
        if (op.equals("ModProducto"))
        {
            String cod = String.valueOf(jsonObj.get("Codigo_Productos"));
            System.out.print(cod);
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (usj.ModificarProductos(jsonObject, cod))
                {
                    objRes.put("ModProducto", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("ModProducto", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        if (op.equals("DelProducto"))
        {
            String cod = String.valueOf(jsonObj.get("Codigo_Productos"));  
            JSONObject objRes = new JSONObject();
            
            if (usj.BorrarProducto(cod))
            {
                objRes.put("DelProducto", "true");
                out.print(objRes);
            }

            else
            {
                objRes.put("DelProducto", "false");
                out.print(objRes);
            }
        }
        
        if (op.equals("AddLinea"))
        {
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (ush.AdicionarLinea(jsonObject))
                {
                    objRes.put("AddLinea", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("AddLinea", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
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
                
                if (usf.AdicionarCliente(jsonObject))
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
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        
        if (op.equals("ModCliente"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Cliente"));
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (usf.ModificarCliente(jsonObject, cod))
                {
                    objRes.put("ModCliente", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("ModCliente", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        
        if (op.equals("DelCliente"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Cliente"));  
            JSONObject objRes = new JSONObject();
            
            if (usf.BorrarCliente(cod))
            {
                objRes.put("DelCliente", "true");
                out.print(objRes);
            }

            else
            {
                objRes.put("DelCliente", "false");
                out.print(objRes);
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
                
                if (usw.AdicionarPedido(jsonObject))
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
        
        if (op.equals("ModPedido"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Pedido"));
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (usw.ModificarPedido(jsonObject, cod))
                {
                    objRes.put("ModPedido", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("ModPedido", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        
        if (op.equals("DelPedido"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Pedido"));  
            JSONObject objRes = new JSONObject();
            
            if (usw.BorrarPedido(cod))
            {
                objRes.put("DelPedido", "true");
                out.print(objRes);
            }

            else
            {
                objRes.put("DelPedido", "false");
                out.print(objRes);
            }
        }
        
        if (op.equals("AddDevolucion"))
        {
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (usd.AdicionarDevolucion(jsonObject))
                {
                    objRes.put("AddDevolucion", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("AddDevolucion", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        
        if (op.equals("ModDevolucion"))
        {
            String cod = String.valueOf(jsonObj.get("Id_Devolucion"));
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (usd.ModificarDevolucion(jsonObject, cod))
                {
                    objRes.put("ModDevolucion", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("ModDevolucion", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        
        /*if (op.equals("ModPerfil"))
        {
            String cod = String.valueOf(jsonObj.get("id_usuario"));
            System.out.print(cod);
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (per.ModificarPerfil(jsonObject, cod))
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
        }*/
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException 
    {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException 
    {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() 
    {
        return "Short description";
    }// </editor-fold>
}
