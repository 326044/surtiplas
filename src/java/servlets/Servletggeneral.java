/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

/* Importamos las librerias de java*/

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*Importamos los modelos SQL que usaremos */

import modelo.UsuariosSQL;
import modelo.ClientesSQL;
import modelo.pedidosSQL;
import modelo.viaticosSQL;
import modelo.visitasSQL;
import modelo.departamentosSQL;
import modelo.municipiosSQL; 
//import modelo.pagosSQL;


/*Importamos las librerias JsonObject, JsonArray, JsonValue*/

import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
/**
 *
 * @author SENA|
 */
@WebServlet(name = "Servletggeneral", urlPatterns = {"/Servletggeneral"})
public class Servletggeneral extends HttpServlet 
{
    
    /**/
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {	
	
		// Le declaramos con que tipo de caracteres trabajaremos

        request.setCharacterEncoding("utf8");
        response.setCharacterEncoding("utf8");
		
		// Le asignamos el json a la aplicacion
		
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        JSONObject jsonObj = (JSONObject) JSONValue.parse(request.getParameter("gerente"));
        String op = String.valueOf(jsonObj.get("Ggeneral")); 
        System.out.print(op);
        System.out.print(jsonObj.toString());
        
        /*Le declaramos memoria a los siguientes modelos*/
        
        UsuariosSQL usr = new UsuariosSQL();
        ClientesSQL cli = new ClientesSQL();
        pedidosSQL  ped = new pedidosSQL();
        viaticosSQL via = new viaticosSQL();
        visitasSQL vis = new visitasSQL();
        departamentosSQL dep = new  departamentosSQL();
        municipiosSQL mun = new municipiosSQL();
        //pagosSQL pag = new pagosSQL();

            
        /* Se crea una condicion que llame y carge llos datos realizados en las consultas SQL de las tablas "vendedores" "Clientes"*/      
        if (op.equals("ListadoVendedoresClientes"))
        {
            JSONArray vendedores = new JSONArray();
            vendedores = usr.obtenerUsuariosVendedores();
            JSONArray clientes = new JSONArray();
            clientes = cli.obtenerClientes();
			
			// le declaramos memoria a la variable "mensaje" que usaremos para dar avisos o alertas
			
            JSONArray mensaje = new JSONArray();
            
            /*Se crean mensajes de alerta por si llegara a presentar un error*/
            
            mensaje.add(vendedores);
            mensaje.add(clientes);
            System.out.print(mensaje.toString());
            out.print(mensaje);
        }                
     
        /* Se crea una condicion que llame y carge llos datos realizados en las consultas SQL de las tablas "departamentos"*/              
        
        if (op.equals("ReporteEstadistico"))
        {
            JSONArray departamentos = new JSONArray();
            departamentos = dep.obtenerdepartamentos();  
            out.print(departamentos);
        }         
        
        /* Se crea una condicion que llame y carge llos datos realizados en las consultas SQL de las tablas "Municipos"*/                      
        
        if (op.equals("Municipios"))
        {
            String codDepto = String.valueOf(jsonObj.get("DatosDepto"));   
            JSONArray municipios = mun.obtenermunicipios(codDepto);
            out.print(municipios);
        }
        
        /* Se crea una condicion que llame y carge llos datos realizados en las consultas SQL de las tablas "Usuarios"*/                      
        
        if (op.equals("Vendedores"))
        {
            JSONArray usuarios = new JSONArray();   
            usuarios = usr.Obtenervendedores();
            out.print(usuarios);
        }
        
        /* Se crea una condicion que llame y carge llos datos realizados en las consultas SQL de las tablas "viaticos"
         * " pedidos", "comisiones", "recaudos", "visitas",*/
         
        if (op.equals("ListadoComisionesPedidosEtc"))
        {
            JSONArray pedidos = new JSONArray();
            pedidos = ped.obtenerPedidos();
            JSONArray viaticos = new JSONArray();
            viaticos = via.obtenerviaticos();      
        
            JSONArray visitas = new JSONArray();
            visitas = vis.obtenerVisitas();
            JSONArray mensaje = new JSONArray();
            
            /*Se crean mensajes de alerta por si llegara a presentar un error*/            
            
            mensaje.add(pedidos);
            mensaje.add(viaticos);
            mensaje.add(visitas);
            System.out.print(mensaje.toString());
            out.print(mensaje);
        }

        /* Se crea una condicion que llame y carge llos datos realizados en las consultas SQL de las tablas "pedidos", "recuados"*/     
        
     if (op.equals("ListadoIngresos"))
        {
            JSONArray pedidos = new JSONArray();
            pedidos = ped.obtenerPedidos();
            JSONArray mensaje = new JSONArray();
            
            /*Se crean mensajes de alerta por si llegara a presentar un error*/       
            
            mensaje.add(pedidos);
            System.out.print(mensaje.toString());
            out.print(mensaje);
        } 

            /* Se crea una condicion que llame y carge llos datos realizados en las consultas SQL de las tablas "comisiones"
            * " nomina", "varios", "viaticos", "visitas",*/
     
     if (op.equals("ListadoEgresos"))
        {

            JSONArray viaticos = new JSONArray();
            viaticos = via.obtenerviaticos();
            JSONArray mensaje = new JSONArray();
            
            /*Se crean mensajes de alerta por si llegara a presentar un error*/     

            mensaje.add(viaticos);
            System.out.print(mensaje.toString());
            out.print(mensaje);
        } 
     
   /* if (op.equals("obtenerpagos"))
         { 
            System.out.print(String.valueOf(jsonObj.get("Datos")));            
            JSONParser parser = new JSONParser();
            JSONArray pagosSQL = new JSONArray();
            
            try 
            {   
                
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));                
                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                pagosSQL = pag.obtenerpagos(jsonObject);   
            }
            catch (ParseException e)
            {
                e.printStackTrace();
            }
            out.print(pagosSQL); 
        }   */
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

   

