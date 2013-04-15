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
import org.json.simple.JSONObject;

/**
 *
 * @author cajaramillov
 */
@WebServlet(name = "ServletLogin", urlPatterns = {"/ServletLogin"})
public class ServletLogin extends HttpServlet 
{
    public void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    {
        request.setCharacterEncoding("utf8");
        response.setCharacterEncoding("utf8");
        response.setContentType("application/json"); 
        PrintWriter out = response.getWriter(); 
        String usuario = request.getParameter("usuario");
        String clave = request.getParameter("password");
        UsuariosSQL usr = new UsuariosSQL();
        JSONObject obj = new JSONObject();
        
        if (usr.AutenticarUsuario(usuario, clave))
        { 
            String tipoUsuario =  usr.TipoUsuario(usuario, clave);
            obj.put("TipoUsuario", tipoUsuario);
            out.print(obj);
        }
        
        else
        {
            obj.put("TipoUsuario", "false");
            out.print(obj);
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
    }// </editor-fold>
}
