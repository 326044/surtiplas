/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import modelo.UsuariosSQL;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


@WebServlet(name = "ServletComercial", urlPatterns = {"/ServletComercial"})
public class ServletComercial extends HttpServlet 
{ 
    public void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    {
        request.setCharacterEncoding("utf8");
        response.setCharacterEncoding("utf8");
        response.setContentType("application/json"); 
        PrintWriter out = response.getWriter(); 
        JSONObject jsonObj = (JSONObject) JSONValue.parse(request.getParameter("comercial"));
        String op = String.valueOf(jsonObj.get("Vendedores")); 
        System.out.print(op);
        System.out.print(jsonObj.toString());
        UsuariosSQL usr = new UsuariosSQL();
        
        if (op.equals("Listado"))
        {
            JSONArray vendedores = new JSONArray();
            vendedores = usr.obtenerUsuariosVendedores();
            out.print(vendedores);
        }
        
        if (op.equals("DatosVendedor"))
        {
            String cod = String.valueOf(jsonObj.get("Id_vendedor"));   
            JSONObject vendedor = usr.datosUsuario(cod);
            out.print(vendedor);
        }
        
        if (op.equals("AddVendedor"))
        {
            String tipoUsuario = "V"; 
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (usr.AdicionarUsuario(jsonObject, tipoUsuario))
                {
                    objRes.put("AddVendedor", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("AddVendedor", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        
        if (op.equals("ModVendedor"))
        {
            String tipoUsuario = "V"; 
            String cod = String.valueOf(jsonObj.get("Id_vendedor"));
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
                if (usr.ModificarUsuario(jsonObject, tipoUsuario, cod))
                {
                    objRes.put("ModVendedor", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("ModVendedor", "false");
                    out.print(objRes);
                }
                
            } 
            catch (ParseException e) 
            {
                e.printStackTrace();
            }
        }
        
        if (op.equals("DelVendedor"))
        {
            String cod = String.valueOf(jsonObj.get("Id_vendedor"));  
            JSONObject objRes = new JSONObject();
            
            if (usr.BorrarUsuario(cod))
            {
                objRes.put("DelVendedor", "true");
                out.print(objRes);
            }

            else
            {
                objRes.put("DelVendedor", "false");
                out.print(objRes);
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
