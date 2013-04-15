/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import modelo.UsuariosSQL;
import modelo.pedidosSQL;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.JSONValue;

/**
 *
 * @author MASSO|
 */
@WebServlet(name = "ServletSecretaria", urlPatterns = {"/ServletSecretaria"})
public class ServletSecretaria extends HttpServlet 
{

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        request.setCharacterEncoding("utf8");
        response.setCharacterEncoding("utf8");
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        JSONObject jsonObj = (JSONObject) JSONValue.parse(request.getParameter("Secretaria"));
        String op = String.valueOf(jsonObj.get("ecretaria")); 
        System.out.print(op);
        System.out.print(jsonObj.toString());
        UsuariosSQL usr = new UsuariosSQL();
        pedidosSQL pedsql = new pedidosSQL();
        
        
        if (op.equals("ListadoVendedores"))
        {
            JSONArray vendedores = new JSONArray();
            vendedores = usr.obtenerUsuariosVendedores();
            JSONArray mensaje = new JSONArray();
            mensaje.add(vendedores);
            System.out.print(mensaje.toString());
            out.print(mensaje);
        }
         if (op.equals("DatosVendedor"))
        {
            String cod = String.valueOf(jsonObj.get("Id_vendedor"));   
            JSONObject vendedor = usr.datosUsuario(cod);
            out.print(vendedor);
        }
         
        if(op.equals("ListadoPedidos"))
        {
            JSONArray pedidos = new JSONArray();
            pedidos = pedsql.obtenerPedidos();
            JSONArray mensaje = new JSONArray();
            mensaje.add(pedidos);
            System.out.print(mensaje.toString());
            out.print(mensaje);
        }
        if (op.equals("DatosPedido"))
        {
            String cod = String.valueOf(jsonObj.get("id_pedido"));   
            JSONObject pedido = pedsql.datosPedido(cod);
            out.print(pedido);
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