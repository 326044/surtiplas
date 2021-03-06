package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Viaticos;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class ViaticosSQL 
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
    
    @SuppressWarnings("CallToThreadDumpStack")
    //DESCONECCION DE LA BASE DE DATOS    
    public void desconectar()
    {
        try
        {
            this.cn.close();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }
    
    //**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA VISUALIZAR LOS VIATICOS                  ********************    
//**************************************************************************************
    
    public JSONObject DatosViatico(String id_viaticos)
    {
        JSONObject viaticos= new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT viaticos.id_viaticos, viaticos.valor, viaticos.concepto, viaticos.fecha, viaticos.doc_soporte,"
                    + "municipios.nombreMunicipio, departamentos.nombre_depto, usuarios.id_usuario FROM viaticos, municipios, usuarios,"
                    + "departamentos WHERE municipios.codMunicipio=viaticos.codMunicipio AND departamentos.cod_departamento=municipios.cod_departamento "
                    + "AND usuarios.id_usuario=viaticos.id_usuario AND viaticos.id_viaticos='" + id_viaticos + "';";
                    
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            
            viaticos.put("id_viaticos", rs.getString("id_viaticos"));
            viaticos.put("id_usuario", rs.getString("id_usuario"));
            viaticos.put("valor", rs.getString("valor"));
            viaticos.put("concepto", rs.getString("concepto"));
            viaticos.put("fecha", rs.getString("fecha"));
            viaticos.put("nombreMunicipio", rs.getString("nombreMunicipio"));
            viaticos.put("nombre_depto", rs.getString("nombre_depto"));
            viaticos.put("doc_soporte", rs.getString("doc_soporte"));

            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return (viaticos);
    }
    
 //**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA ADICIONAR EL VIATICO DEL VENDEDOR        ********************    
//**************************************************************************************
    
     public boolean AdicionarViatico(JSONObject datos, String IdUsuario)
    {
        try
        {
            
            this.cn = getConnection();
            this.st = cn.createStatement();
            Viaticos usrs = new Viaticos("", String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("valor")), String.valueOf(datos.get("concepto")), String.valueOf(datos.get("fecha")), String.valueOf(datos.get("codMunicipio")), String.valueOf(datos.get("doc_soporte")));
            String tsql;
            tsql = "INSERT INTO viaticos VALUES(DEFAULT, ";
            tsql += IdUsuario + ",'" + usrs.getValor()+ "','" + usrs.getConcepto()+ "','" + usrs.getFecha()+ "','" + usrs.getcodMunicipio()+ "','"+ usrs.getdoc_soporte() +"')";
            this.st.execute(tsql);
            System.out.printf(tsql.toString());
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
        
        return true;
    }
//**********************************************************************************************
//**********************************************************************************************
//*************                                                            *********************
//************* METODO QUE SE ENCARGA DE ADICIONAR EN LA BASE DE DATOS LOS *********************
//************* DATOS QUE SE INGRESARON EN LOS CAMPOS DE LA INTERFAZ WEB   *********************
//************* A TRAVES DEL ESTAMENTO "INSERT INTO" EN LA TABLA VIATICOS  *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
      
    public boolean AdicionarViaticos(JSONObject datos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Viaticos usrs = new Viaticos("", String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("valor")), String.valueOf(datos.get("concepto")), String.valueOf(datos.get("fecha")), String.valueOf(datos.get("codMunicipio")), String.valueOf(datos.get("doc_soporte")));
            String tsql;
            tsql = "INSERT INTO viaticos VALUES(DEFAULT, '";
            tsql +=  usrs.getId_usuario() + "','" + usrs.getValor()+ "','" + usrs.getConcepto()+ "','" + usrs.getFecha() + "','" + usrs.getcodMunicipio() + "','" + usrs.getdoc_soporte() + "')";
            this.st.execute(tsql);
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
        
        return true;
    }
    
//**********************************************************************************************
//**********************************************************************************************
//*************                                                            *********************
//************* METODO QUE SE ENCARGA DE MODIFICAR EN LA BASE DE DATOS LOS *********************
//************* DATOS QUE SE CAMBIARON EN LOS CAMPOS DE LA INTERFAZ WEB    *********************
//************* A TRAVES DEL ESTAMENTO "UPDATE" PARA LA TABLA VIATICOS      *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
    public boolean ModificarViaticos(JSONObject datos, String idViaticos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Viaticos usrs = new Viaticos("", String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("valor")), String.valueOf(datos.get("concepto")), String.valueOf(datos.get("fecha")), String.valueOf(datos.get("codMunicipio")), String.valueOf(datos.get("doc_soporte")));
            String tsql;
            tsql = "UPDATE viaticos SET id_usuario=" + usrs.getId_usuario() + ", valor='" + usrs.getValor() + "', concepto='" + usrs.getConcepto() + "', fecha='" + usrs.getFecha() + "', codMunicipio='" + usrs.getcodMunicipio() + "', doc_soporte='" + usrs.getdoc_soporte() + "' WHERE id_viaticos = " + idViaticos + ";";
            this.st.execute(tsql);
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
        
        return true;
    }

//**********************************************************************************************
//**********************************************************************************************
//*************                                                            *********************
//************* METODO QUE SE ENCARGA DE ELIMINAR EN LA BASE DE DATOS LOS  *********************
//************* DATOS QUE SE ENCUENTRAN VISUALIZADOS EN LA INTERFAZ WEB    *********************
//************* A TRAVES DEL ESTAMENTO "DELETE" EN LA TABLA VIATICOS       *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
    public boolean BorrarViatico(String idViaticos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String tsql;
            tsql = "DELETE FROM viaticos WHERE id_viaticos = '" + idViaticos + "';";
            this.st.execute(tsql);
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
        
        return true;
    }    
     //**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA BUSCAR LOS VIATICOS YA SEA POR FECHA DE INICIO, FECHA FINAL,************
//*************  TIPO DE VIATICO O SI SOLO DESEA VER TODOS LOS VIATICO*********************     
//**************************************************************************************
     
     public JSONArray obtenerListadoViaticos(JSONObject jsonObject, String idUsuario)
     {
        JSONArray Viaticos = new JSONArray();
        JSONObject viatico = new JSONObject();
        JSONObject viaticoo = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String fechaInicio= String.valueOf(jsonObject.get("fechaInicio"));
            String fechaFin= String.valueOf(jsonObject.get("fechaFin"));
            String tipoViatico= String.valueOf(jsonObject.get("tipoViatico"));            
            String tsql = null;
            String tsql2 = null;
            
            if("".equals(fechaInicio))
            {
                if("".equals(fechaFin))
                {
                    if("".equals(tipoViatico))
                    {
                        tsql = "SELECT * FROM viaticos WHERE id_usuario="+ idUsuario +";"; 
                        System.out.printf(tsql.toString());                        
                        tsql2 = "SELECT SUM(valor) AS valor_total FROM viaticos WHERE id_usuario="+ idUsuario +";";                        
                    }
                    else
                    {
                        tsql = "SELECT * FROM viaticos WHERE concepto='"+ tipoViatico +"' AND id_usuario="+ idUsuario +";";
                        System.out.printf(tsql.toString());
                        tsql2 = "SELECT SUM(valor) AS valor_total FROM viaticos WHERE concepto='"+ tipoViatico +"' AND id_usuario="+ idUsuario +";";
                    }
                }                 
            }
            else if("".equals(tipoViatico))
            {
                tsql = "SELECT * FROM viaticos WHERE fecha BETWEEN '"+ fechaInicio +"' AND '"+ fechaFin +"' AND id_usuario="+ idUsuario +";";
                System.out.printf(tsql.toString());
                tsql2 = "SELECT SUM(valor) AS valor_total FROM viaticos WHERE fecha BETWEEN '"+ fechaInicio +"' AND '"+ fechaFin +"' AND id_usuario="+ idUsuario +";";
            }
            else
            {
                tsql = "SELECT * FROM viaticos WHERE fecha BETWEEN '"+ fechaInicio +"' AND '"+ fechaFin +"' AND concepto='" +tipoViatico+ "' AND id_usuario="+ idUsuario +";";
                System.out.printf(tsql.toString());
                tsql2 = "SELECT SUM(valor) AS valor_total FROM viaticos WHERE fecha BETWEEN '"+ fechaInicio +"' AND '"+ fechaFin +"' AND concepto='" +tipoViatico+ "' AND id_usuario="+ idUsuario +";";
            }
            
            this.rs = this.st.executeQuery(tsql);
             System.out.printf(tsql.toString());  
            while(this.rs.next())
            {
                Viaticos via = new Viaticos(rs.getString("id_viaticos"), rs.getString("id_usuario"), rs.getString("valor"), rs.getString("concepto"), rs.getString("fecha"), rs.getString("codMunicipio"), rs.getString("doc_soporte"));
                viatico = via.getJSONObject();
                viatico.put("sql",tsql);
                System.out.printf(viatico.toString());                
                Viaticos.add(viatico);               
            }
              
           
            this.rs.first();
            
            viaticoo.put("valor_total", rs.getString("valor_total"));
            viatico.put("sql",tsql2);
            System.out.printf(viaticoo.toString());
            Viaticos.add(viaticoo);
            
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();            
        }
    
        return(Viaticos);
    }
   //****************************************************************************************
//****************************************************************************************
//*************                                                      *********************
//*************  METODO QUE SE ENCARGA DE REALIZAR LA CONSULTA PARA  *********************
//*************  LLAMAR LOS DATOS DE LA BASE DE DATOS                *********************
//*************                                                      *********************
//****************************************************************************************
//****************************************************************************************
    
    public JSONArray cargarListadoViatico(JSONObject jsonObject)
    {
        JSONArray Viaticos = new JSONArray();
        JSONObject viatico = new JSONObject();
        JSONObject viaticot = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String fechaInicio= String.valueOf(jsonObject.get("fechaInicio"));
            String fechaFin= String.valueOf(jsonObject.get("fechaFin"));
            String tipoViatico= String.valueOf(jsonObject.get("tipoViatico"));            
            String tsql = null;
            String tsql2 = null;
            
            if("".equals(fechaInicio))
            {
                if("".equals(fechaFin))
                {
                    if("".equals(tipoViatico))
                    {
                        tsql = "SELECT * FROM viaticos"; 
                        System.out.printf(tsql.toString());                        
                        tsql2 = "SELECT SUM(valor) AS valor_total FROM viaticos;";                        
                    }
                    else
                    {
                        tsql = "SELECT * FROM viaticos WHERE concepto='"+ tipoViatico +"';";
                        System.out.printf(tsql.toString());
                        tsql2 = "SELECT SUM(valor) AS valor_total FROM viaticos WHERE concepto='"+ tipoViatico +"';";
                    }
                }                 
            }
            else if("".equals(tipoViatico))
            {
                tsql = "SELECT * FROM viaticos WHERE fecha BETWEEN '"+ fechaInicio +"' AND '"+ fechaFin +"';";
                System.out.printf(tsql.toString());
                tsql2 = "SELECT SUM(valor) AS valor_total FROM viaticos WHERE fecha BETWEEN '"+ fechaInicio +"' AND '"+ fechaFin +"';";
            }
            else
            {
                tsql = "SELECT * FROM viaticos WHERE fecha BETWEEN '"+ fechaInicio +"' AND '"+ fechaFin +"' AND concepto='" +tipoViatico+ "';";
                System.out.printf(tsql.toString());
                tsql2 = "SELECT SUM(valor) AS valor_total FROM viaticos WHERE fecha BETWEEN '"+ fechaInicio +"' AND '"+ fechaFin +"' AND concepto='" +tipoViatico+ "';";
            }
            
            this.rs = this.st.executeQuery(tsql);
            
            while(this.rs.next())
            {
                Viaticos via = new Viaticos(rs.getString("id_viaticos"), rs.getString("id_usuario"), rs.getString("valor"), rs.getString("concepto"), rs.getString("fecha"), rs.getString("codMunicipio"), rs.getString("doc_soporte"));
                viatico = via.getJSONObject();
                System.out.printf(viatico.toString());
                Viaticos.add(viatico);               
            }
            
            this.rs = this.st.executeQuery(tsql2);
            this.rs.first();
            
            viaticot.put("valor_total", rs.getString("valor_total"));
            System.out.printf(viaticot.toString());
            Viaticos.add(viaticot);
            
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();            
        }
    
        return(Viaticos);
    }
  }
