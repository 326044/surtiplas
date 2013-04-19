package modelo;

/***************** IMPORTACIONES ******************/

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Clientes;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class clientes1SQL 
{
    private Connection cn;
    private Statement st;
    private ResultSet rs;
    
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  METODO GENERAL QUE SE ENCARGA DE LA CONEXION *********************
//*************              A LA BASE DE DATOS                *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
    
    public Connection getConnection()
    {
        this.cn=null;
        
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            this.cn=DriverManager.getConnection("jdbc:mysql://localhost/surtiplas", "root", "12345");
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return cn;
    }
    
    @SuppressWarnings("CallToThreadDumpStack")
    
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  METODO QUE SE ENCARGA DE LA DESCONEXION      *********************
//*************              DE LA BASE DE DATOS                *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
    
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
    
//****************************************************************************************
//****************************************************************************************
//*************                                                      *********************
//*************  METODO QUE SE ENCARGA DE REALIZAR LA CONSULTA PARA  *********************
//*************  LLAMAR LOS DATOS DE LA BASE DE DATOS                *********************
//*************                                                      *********************
//****************************************************************************************
//****************************************************************************************
    
    public JSONArray cargarListadoClientes()
    {
        JSONArray clientes = new JSONArray();
        JSONObject cliente = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM clientes";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                Clientes usf = new Clientes(rs.getString("id_cliente"), rs.getString("cedula"), rs.getString("razon_social"), rs.getString("nombre"), rs.getString("apellido"), rs.getString("direccion"), rs.getString("telefono"), rs.getString("nombre_contacto"), rs.getString("celular"), rs.getString("foto"), rs.getString("email"), rs.getString("maximo_credito"), rs.getString("estado"), rs.getString("comentario"), rs.getString("documentos_de_soporte"), rs.getString("responsable"), rs.getString("fecha"), rs.getString("codMunicipio"), rs.getString("id_usuario"), rs.getString("id_ubicacion"));
                cliente = usf.getJSONObject();
                System.out.printf(cliente.toString());
                clientes.add(cliente);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(clientes);
    }
    
//***********************************************************************************************
//***********************************************************************************************
//*************                                                             *********************
//************* METODO DONDE SE REALIZAN LAS CONSULTA PARA LLAMAR LOS DATOS *********************
//************* DE LA BASE DE DATOS Y CARGARLOS EN LA INTERFAZ WEB EN CADA  *********************
//************* UNO DE LOS CAMPOS DEL FORMULARIO                            *********************
//*************                                                             *********************
//***********************************************************************************************
//***********************************************************************************************
    
    public JSONObject datosClientes(String idClientes)
    {
        JSONObject clientes= new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT clientes.id_cliente, clientes.cedula, clientes.razon_social, clientes.nombre, clientes.apellido, clientes.direccion, clientes.telefono, clientes.nombre_contacto, clientes.celular, clientes.foto, clientes.email, clientes.maximo_credito, clientes.estado, clientes.comentario,"
                    + "clientes.documentos_de_soporte, clientes.responsable, clientes.fecha, municipios.nombreMunicipio, departamentos.nombre_depto, usuarios.id_usuario,ubicacion_geografica.id_ubicacion "
                    + "FROM clientes, usuarios, municipios, departamentos, ubicacion_geografica WHERE municipios.codMunicipio=clientes.codMunicipio AND departamentos.cod_departamento=municipios.cod_departamento AND usuarios.id_usuario=clientes.id_usuario AND ubicacion_geografica.id_ubicacion=clientes.id_ubicacion AND clientes.id_cliente= " + idClientes + ";";
                     
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            
            clientes.put("id_cliente", rs.getString("id_cliente"));
            clientes.put("cedula", rs.getString("cedula"));
            clientes.put("razon_social", rs.getString("razon_social"));
            clientes.put("nombre", rs.getString("nombre"));
            clientes.put("apellido", rs.getString("apellido"));
            clientes.put("direccion", rs.getString("direccion"));
            clientes.put("telefono", rs.getString("telefono"));
            clientes.put("nombre_contacto", rs.getString("nombre_contacto"));
            clientes.put("celular", rs.getString("celular"));
            clientes.put("foto", rs.getString("foto"));
            clientes.put("email", rs.getString("email"));
            clientes.put("maximo_credito", rs.getString("maximo_credito"));
            clientes.put("estado", rs.getString("estado"));
            clientes.put("comentario", rs.getString("comentario"));
            clientes.put("documentos_de_soporte", rs.getString("documentos_de_soporte"));
            clientes.put("responsable", rs.getString("responsable"));
            clientes.put("fecha", rs.getString("fecha"));
            clientes.put("nombreMunicipio", rs.getString("nombreMunicipio"));
            clientes.put("nombre_depto", rs.getString("nombre_depto"));
            clientes.put("id_usuario", rs.getString("id_usuario"));
            clientes.put("id_ubicacion", rs.getString("id_ubicacion"));
 
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return (clientes);
    }
    
//**********************************************************************************************
//**********************************************************************************************
//*************                                                            *********************
//************* METODO QUE SE ENCARGA DE ADICIONAR EN LA BASE DE DATOS LOS *********************
//************* DATOS QUE SE INGRESARON EN LOS CAMPOS DE LA INTERFAZ WEB   *********************
//************* A TRAVES DEL ESTAMENTO "INSERT INTO" EN LA TABLA CLIENTES  *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
      public boolean AdicionarCliente(JSONObject datos)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Clientes usf = new Clientes("", String.valueOf(datos.get("cedula")), String.valueOf(datos.get("razon_social")), String.valueOf(datos.get("nombre")), String.valueOf(datos.get("apellido")), String.valueOf(datos.get("direccion")), String.valueOf(datos.get("telefono")), String.valueOf(datos.get("nombre_contacto")), String.valueOf(datos.get("celular")), "foto", String.valueOf(datos.get("email")), String.valueOf(datos.get("maximo_credito")), String.valueOf(datos.get("estado")), String.valueOf(datos.get("comentario")), String.valueOf(datos.get("documentos_de_soporte")), String.valueOf(datos.get("responsable")), String.valueOf(datos.get("fecha")), String.valueOf(datos.get("codMunicipio")), String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("id_ubicacion")));
            String tsql;
            tsql = "INSERT INTO clientes VALUES(DEFAULT, '";
            tsql += usf.getCedula()+ "','" + usf.getRazonSocial()+ "','" + usf.getNombre() + "','" + usf.getApellido() + "','" + usf.getDireccion() + "','" + usf.getTelefono() + "','" + usf.getNombreContacto() + "','" + usf.getNombreCelular() + "','" + usf.getFoto() + "','" + usf.getEmail() + "','" + usf.getMaximoCredito() + "','" + usf.getEstado() + "','" + usf.getComentario() + "','" + usf.getDocumentosSoporte() + "','" + usf.getResponsable() + "','" + usf.getFecha() + "','" + usf.getCodMunicipio() + "','" + usf.getId_usuario() + "','" + usf.getId_ubicacion() + "')";
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
//************* A TRAVES DEL ESTAMENTO "UPDATE" PARA LA TABLA CLIENTES     *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
    public boolean ModificarCliente(JSONObject datos, String id_cliente)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            Clientes usf = new Clientes("", String.valueOf(datos.get("cedula")), String.valueOf(datos.get("razon_social")), String.valueOf(datos.get("nombre")), String.valueOf(datos.get("apellido")), String.valueOf(datos.get("direccion")), String.valueOf(datos.get("telefono")), String.valueOf(datos.get("nombre_contacto")), String.valueOf(datos.get("celular")), "foto", String.valueOf(datos.get("email")), String.valueOf(datos.get("maximo_credito")), String.valueOf(datos.get("estado")), String.valueOf(datos.get("comentario")), String.valueOf(datos.get("documentos_de_soporte")), String.valueOf(datos.get("responsable")), String.valueOf(datos.get("fecha")), String.valueOf(datos.get("codMunicipio")), String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("id_ubicacion")));
            String tsql;
            tsql = "UPDATE clientes SET  cedula='" + usf.getCedula() + "', razon_social='" + usf.getRazonSocial() +"', nombre='" + usf.getNombre() +"', apellido='" + usf.getApellido() + "', direccion='" + usf.getDireccion() + "', telefono='" + usf.getTelefono() + "', nombre_contacto='" + usf.getNombreContacto() + "', celular='" + usf.getNombreCelular() + "', foto='" + usf.getFoto() + "',email='" + usf.getEmail() + "', maximo_credito='" + usf.getMaximoCredito() + "', estado='" + usf.getEstado() +"', comentario='" + usf.getComentario() + "', documentos_de_soporte ='" + usf.getDocumentosSoporte()+"', responsable=" + usf.getResponsable() + ", fecha='" + usf.getFecha() + "', codMunicipio='" + usf.getCodMunicipio()+"', id_usuario='" + usf.getId_usuario() + "', id_ubicacion=" + usf.getId_ubicacion() + " WHERE id_cliente = " + id_cliente + ";";
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
//************* A TRAVES DEL ESTAMENTO "DELETE" EN LA TABLA USUARIOS       *********************
//*************                                                            *********************
//**********************************************************************************************
//**********************************************************************************************
    
    public boolean BorrarCliente(String idClientes)
    {
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String tsql;
            tsql = "DELETE FROM clientes WHERE id_cliente = '" + idClientes + "';";
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
}