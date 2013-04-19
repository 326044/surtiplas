package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import modelo.UsuariosSQL;
import org.json.simple.JSONObject;

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
            obj =  usr.TipoUsuario(usuario, clave);
            HttpSession session = request.getSession(true);
            session.setMaxInactiveInterval(20 * 60); 
            session.setAttribute("TipoUsuario", String.valueOf(obj.get("TipoUsuario")));
            session.setAttribute("IdUsuario", String.valueOf(obj.get("IdUsuario")));
            session.setAttribute("Usuario", usuario);
            session.setAttribute("Clave", clave);
            System.out.print(String.valueOf(session.getAttribute("TipoUsuario")));
            System.out.print(String.valueOf(session.getAttribute("IdUsuario")));
            System.out.print(String.valueOf(session.getAttribute("Usuario")));
            System.out.print(String.valueOf(session.getAttribute("Clave")));
            String tipoUsuario = String.valueOf(obj.get("TipoUsuario"));
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

