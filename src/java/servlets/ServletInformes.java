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
import modelo.UsuariosSQL;
import modelo.VisitasSQL;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import java.sql.Connection;
import modelo.ViaticosSQL;
import net.sf.jasperreports.engine.JasperRunManager;
import net.sf.jasperreports.engine.export.JRXlsExporter;
import net.sf.jasperreports.engine.export.JRXlsExporterParameter;
import net.sf.jasperreports.engine.export.ooxml.JRXlsxExporter;


@WebServlet(name = "ServletInformes", urlPatterns = {"/ServletInformes"})

public class ServletInformes extends HttpServlet
{
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
            String op=request.getParameter("informe");
            
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
            
            if(op.equals("ListadoVisitasPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"ListadoVisitas.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                VisitasSQL uss = new VisitasSQL();
                Connection conn = uss.getConnection(); 

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
            
            if(op.equals("reporteProductosPDF"))
            {
                response.setHeader("Content-Disposition", "attachment; filename=\"reporteProductos.pdf\";");
                response.setHeader("Cache-Control", "no-cache");
                response.setHeader("Pragma", "no-cache");
                response.setDateHeader("Expires", 0);
                response.setContentType("application/pdf");

                ServletOutputStream out = response.getOutputStream();

                UsuariosSQL usr = new UsuariosSQL();
                Connection conn = usr.getConnection(); 

                try
                {
                    JasperReport reporte = (JasperReport) JRLoader.loadObjectFromFile(getServletContext().getRealPath("reportes/reporteProductos.jasper"));
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