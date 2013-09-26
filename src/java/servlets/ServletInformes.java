package servlets;

import java.io.File;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRExporter;
import net.sf.jasperreports.engine.JRExporterParameter;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.util.JRLoader;
import modelo.ProductosSQL;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.HashMap;
import modelo.ClientesSQL;
import modelo.PagosSQL;
import modelo.QuejasSQL;
import modelo.ViaticosSQL;
import modelo.VisitasSQL;
import modelo.UsuariosSQL;
import net.sf.jasperreports.engine.JRResultSetDataSource;
import net.sf.jasperreports.engine.JasperRunManager;
import net.sf.jasperreports.engine.export.JRXlsExporter;
import net.sf.jasperreports.engine.export.JRXlsExporterParameter;
import net.sf.jasperreports.engine.export.ooxml.JRXlsxExporter;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


@WebServlet(name = "ServletInformes", urlPatterns = {"/ServletInformes"})

public class ServletInformes extends HttpServlet
{
    private Connection cn;
    private Statement st;
    private ResultSet rs;
    
    //CONECCION A LA BASE DE DATOS
    public Connection getConnection()
    {
        this.cn = null;
        
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            this.cn = DriverManager.getConnection("jdbc:mysql://localhost/surtiplas", "root", "12345");
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return cn;        
    }
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
            String op=request.getParameter("informe");
            
            if(op.equals("ListadoProductosPDF1"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"ListadoProductos.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                ProductosSQL pro = new ProductosSQL();
                Connection conn = pro.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/ListadoProductos.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            
            if(op.equals("ListadoProductosPDF"))
            {
                String sql = request.getParameter("query");
                System.out.printf(sql.toString());
                response.setHeader("Content-Disposition", "attachment; filename=\"ListadoProductos.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                ClientesSQL clie = new ClientesSQL();
                Connection conn = clie.getConnection(); 

                try
                {   
                    this.cn = getConnection();
                    this.st = cn.createStatement();
                    rs = st.executeQuery(sql);
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/ListadoProductos.jasper"));                    
                    JRResultSetDataSource resultSetDataSource = new JRResultSetDataSource(rs);
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, new HashMap(), resultSetDataSource);
                    //JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            
            if(op.equals("ListadoClientesPDF"))
            {
                String sql = request.getParameter("query");
                System.out.printf(sql.toString());
                response.setHeader("Content-Disposition", "attachment; filename=\"ListadoClientes.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                ClientesSQL clie = new ClientesSQL();
                Connection conn = clie.getConnection(); 

                try
                {   
                    this.cn = getConnection();
                    this.st = cn.createStatement();
                    rs = st.executeQuery(sql);
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/ListadoClientes.jasper"));                    
                    JRResultSetDataSource resultSetDataSource = new JRResultSetDataSource(rs);
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, new HashMap(), resultSetDataSource);
                    //JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            
            if(op.equals("ListadoVisitasPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"ListadoVisitas.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                VisitasSQL vis = new VisitasSQL();
                Connection conn = vis.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/ListadoVisitas.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            
             if(op.equals("ListadoQuejasPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"ListadoQuejas.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                QuejasSQL que = new QuejasSQL();
                Connection conn = que.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/ListadoQuejas.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
             
            if(op.equals("ListadoPagosPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"ListadoPagos.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                PagosSQL pag = new PagosSQL();
                Connection conn = pag.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/ListadoPagos.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            
            if(op.equals("ListadoUsuariosPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"ListadoUsuarios.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                UsuariosSQL usr = new UsuariosSQL();
                Connection conn = usr.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/ListadoUsuarios.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            
            if(op.equals("reporteUsuariosXLS"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"reporteUsuarios.xlsx\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/vnd.ms-excel");

                ServletOutputStream out = response.getOutputStream();

                UsuariosSQL usr = new UsuariosSQL();
                Connection conn = usr.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/reporteUsuarios.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRXlsxExporter exporter = new JRXlsxExporter ();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            
            
            
            if(op.equals("ListadoViaticosPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"ListadoViaticos.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                ViaticosSQL usl = new ViaticosSQL();
                Connection conn = usl.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/ListadoViaticos.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            
            if(op.equals("ListadoProductosPDF2"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"ListadosProductos.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                ProductosSQL pro = new ProductosSQL();
                Connection conn = pro.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/ListadosProductos.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            
            if(op.equals("ListadosProductosPDF"))
            {
                String sql = request.getParameter("query");
                System.out.printf(sql.toString());
                response.setHeader("Content-Disposition", "attachment; filename=\"ListadosProductos.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                ClientesSQL clie = new ClientesSQL();
                Connection conn = clie.getConnection(); 

                try
                {   
                    this.cn = getConnection();
                    this.st = cn.createStatement();
                    rs = st.executeQuery(sql);
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/ListadosProductos.jasper"));                    
                    JRResultSetDataSource resultSetDataSource = new JRResultSetDataSource(rs);
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, new HashMap(), resultSetDataSource);
                    //JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            
            if(op.equals("reporteLineasPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"reporteLineas.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                UsuariosSQL usr = new UsuariosSQL();
                Connection conn = usr.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/reporteLineas.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            if(op.equals("reporteColorPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"reporteColor.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                UsuariosSQL usr = new UsuariosSQL();
                Connection conn = usr.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/reporteColor.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            if(op.equals("reporteTallasPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"reporteTallas.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                UsuariosSQL usr = new UsuariosSQL();
                Connection conn = usr.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/reporteTallas.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            if(op.equals("reporteMaterialesPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"reporteMateriales.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                UsuariosSQL usr = new UsuariosSQL();
                Connection conn = usr.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/reporteMateriales.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            if(op.equals("reporteClientesPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"reporteClientes.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                UsuariosSQL usr = new UsuariosSQL();
                Connection conn = usr.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/reporteClientes.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            if(op.equals("reportePedidosPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"reportePedidos.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                UsuariosSQL usr = new UsuariosSQL();
                Connection conn = usr.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/reportePedidos.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            if(op.equals("reporteDevolucionesPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"reporteDevoluciones.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                UsuariosSQL usr = new UsuariosSQL();
                Connection conn = usr.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/reporteDevoluciones.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRExporter exporter = new JRPdfExporter();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
            if(op.equals("reporteDevolucionesXLS"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"reporteDevoluciones.xls\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/vnd.ms-excel");

                ServletOutputStream out = response.getOutputStream();

                UsuariosSQL usr = new UsuariosSQL();
                Connection conn = usr.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/reporteDevoluciones.jasper"));
                    JasperPrint jasperPrint = JasperFillManager.fillReport(reporte, null, conn);
                    JRXlsxExporter exporter = new JRXlsxExporter ();
                    exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
                    exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, out);
                    exporter.exportReport();
                }

                catch (Exception e)
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