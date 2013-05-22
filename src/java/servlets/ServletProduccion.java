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
import modelo.ProductoSQL;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**-
 *
 * @author SENA|
 */
@WebServlet(name = "ServletProduccion", urlPatterns = {"/ServletProduccion"})
public class ServletProduccion extends HttpServlet 
{
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
         //Le esta asignando caracteres   
        request.setCharacterEncoding("utf8");
        response.setCharacterEncoding("utf8");
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        JSONObject jsonObj = (JSONObject) JSONValue.parse(request.getParameter("produccion"));
        String op = String.valueOf(jsonObj.get("Pproduccion")); 
        System.out.print(op);
        System.out.print(jsonObj.toString());
        
        //Estamos diciendo que esa variable "pro" sea iguala "ProductosSQL"
        ProductoSQL pro = new ProductoSQL();
        ProductoSQL Dpro= new ProductoSQL();
        
        
        //Enviamos las consultas 
        if (op.equals("ListadoProductos"))
        {
            JSONArray productos = new JSONArray();
            productos = pro.obtenerProductos();
            System.out.print(productos.toString());
            out.print(productos);
        }
        if (op.equals("DatosVendedor"))
        {
            String cod = String.valueOf(jsonObj.get("Id_producto"));   
            JSONObject vendedor = pro.datosProduc(cod);
            System.out.print(vendedor.toString());
            out.print(vendedor);
        }
        
        if (op.equals("DelVendedor"))
        {                          
            String cod = String.valueOf(jsonObj.get("Id_producto"));  
            JSONObject objRes = new JSONObject();
            
            if (pro.BorrarUsuario(cod))
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
        
        //Modificar Productos.
               if (op.equals("ModVendedor"))
        {
    
            String cod = String.valueOf(jsonObj.get("Id_vendedor"));
            System.out.print(String.valueOf(jsonObj.get("Datos")));
            JSONObject objRes = new JSONObject();
            JSONParser parser = new JSONParser();

            try 
            {
                Object obj = parser.parse(String.valueOf(jsonObj.get("Datos")));

                JSONObject jsonObject = (JSONObject) obj;
                System.out.print(jsonObject.toString());
                
 /*               if (pro.BorrarUsuario(JSONObject))
                {
                    objRes.put("ModVendedor", "true");
                    out.print(objRes);
                }

                else
                {
                    objRes.put("ModVendedor", "false");
                    out.print(objRes);
                }
                */
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

   

