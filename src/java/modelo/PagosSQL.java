package modelo;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import javabeans.Pagos;
public class PagosSQL 
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
//*************  PARA QUE SE VISUALIZE UN PAGO MOSTRANDO LA INFORMACION********************    
//**************************************************************************************
    
    public JSONObject DatosPago(String id)
    {
        JSONObject pago = new JSONObject();        
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT pagos.id_pago, pagos.fecha, clientes.razon_social, usuarios.nombre_usuario, municipios.NombreMunicipio, departamentos.nombre_depto, "
                    + "pagos.descripcion, pagos.tipo_de_pago, pagos.forma_de_pago, pagos.cantidad_de_pago, clientes.id_cliente, clientes.telefono"
                    + " FROM pagos, clientes, usuarios, municipios, departamentos"
                    + " WHERE pagos.id_cliente=clientes.id_cliente AND pagos.id_usuario=usuarios.id_usuario AND clientes.codMunicipio=municipios.codMunicipio AND municipios.cod_departamento=departamentos.cod_departamento"
                    + " AND pagos.id_pago="+ id +" ORDER BY pagos.fecha DESC;";
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            
                
                pago.put("id_pago", rs.getString("id_pago"));
                pago.put("fecha", rs.getString("fecha"));
                pago.put("razon_social", rs.getString("razon_social"));
                pago.put("nombre_usuario", rs.getString("nombre_usuario"));
                pago.put("id_cliente", rs.getString("id_cliente"));
                pago.put("telefono", rs.getString("telefono"));
                pago.put("nombre_depto", rs.getString("nombre_depto"));
                pago.put("NombreMunicipio", rs.getString("NombreMunicipio"));
                pago.put("tipo_de_pago", rs.getString("tipo_de_pago"));
                pago.put("forma_de_pago", rs.getString("forma_de_pago")); 
                pago.put("cantidad_de_pago", rs.getString("cantidad_de_pago"));  
                //pago.put("numero_de_factura", rs.getString("numero_de_factura"));  
                pago.put("descripcion", rs.getString("descripcion"));
                 System.out.printf(pago.toString());
                 
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
     
        return pago;
    }
    
    //**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA ADICIONAR UN PAGO A LOS CLIENTES********************    
//**************************************************************************************
    
    public boolean AdicionarPago(JSONObject datos)
    {
        try
        {            
            this.cn = getConnection();
            this.st = cn.createStatement();
            Pagos pag= new Pagos("", String.valueOf(datos.get("id_cliente")), String.valueOf(datos.get("id_usuario")), String.valueOf(datos.get("fecha")), String.valueOf(datos.get("tipo_de_pago")), String.valueOf(datos.get("cantidad_de_pago")), String.valueOf(datos.get("forma_de_pago")), String.valueOf(datos.get("descripcion")));
            String tsql;
            tsql = "INSERT INTO pagos VALUES(DEFAULT, '";
            tsql += pag.getId_cliente()+ "," + pag.getId_usuario() + ",'" + pag.getFecha() + "','" + pag.getTipo_de_pago() + "'," + pag.getCantidad_de_pago() + ",'" + pag.getForma_de_pago() + "','" + pag.getDescripcion() + "')";
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
    
    //**************************************************************************************
//*************  FUNCION QUE SE ENCARGA DE REALIZAR LA CONSULTA*************************
//*************  PARA QUE AL MOMENTO DE REALIZAR UNA BUSQUEDA ********
//*************  CARGE TODO EL LISTADO DE LOS PAGOS             ***********************
//**************************************************************************************

    public JSONArray obtenerListadoPagos(JSONObject jsonObject)
     {
        JSONArray Pagos = new JSONArray();        
        
        try
        {
            this.cn = getConnection();
            this.st = cn.createStatement();
            String fechaInicial= String.valueOf(jsonObject.get("fechaInicio"));
            String fechaFinal= String.valueOf(jsonObject.get("fechaFin"));
            String id_cliente= String.valueOf(jsonObject.get("id_cliente"));
            String tsql;
               
            if("".equals(fechaInicial))
            {
                if("".equals(fechaFinal))
                {
                 tsql = "SELECT pagos.id_pago, pagos.fecha, clientes.razon_social, usuarios.nombre_usuario, municipios.NombreMunicipio, pagos.descripcion, pagos.tipo_de_pago, pagos.forma_de_pago"
                    + " FROM pagos, clientes, usuarios, municipios"
                    + " WHERE pagos.id_cliente=clientes.id_cliente AND pagos.id_usuario=usuarios.id_usuario AND clientes.codMunicipio=municipios.codMunicipio"
                    + " AND clientes.id_cliente="+ id_cliente +" ORDER BY pagos.fecha DESC;";   
                 this.rs = this.st.executeQuery(tsql);
                 System.out.printf(tsql.toString());
                }
            }
            else
            {
                tsql =  "SELECT pagos.id_pago, pagos.fecha, clientes.razon_social, usuarios.nombre_usuario, municipios.NombreMunicipio, pagos.descripcion, pagos.tipo_de_pago, pagos.forma_de_pago"
                    + " FROM pagos, clientes, usuarios, municipios"
                    + " WHERE pagos.id_cliente=clientes.id_cliente AND pagos.id_usuario=usuarios.id_usuario AND clientes.codMunicipio=municipios.codMunicipio"
                    + " AND clientes.id_cliente="+ id_cliente +" AND pagos.fecha BETWEEN '"+ fechaInicial +"' AND '"+ fechaFinal +"' ORDER BY pagos.fecha DESC;";
                this.rs = this.st.executeQuery(tsql);
                System.out.printf(tsql.toString());
            }
                        
            while(this.rs.next())
            {
                JSONObject pago = new JSONObject();
                
                pago.put("id_pago", rs.getString("id_pago"));
                pago.put("fecha", rs.getString("fecha"));
                pago.put("razon_social", rs.getString("razon_social"));
                pago.put("nombre_usuario", rs.getString("nombre_usuario"));
                pago.put("NombreMunicipio", rs.getString("NombreMunicipio"));
                pago.put("tipo_de_pago", rs.getString("tipo_de_pago"));
                pago.put("forma_de_pago", rs.getString("forma_de_pago"));         
                pago.put("descripcion", rs.getString("descripcion"));
                
                System.out.printf(pago.toString());
                Pagos.add(pago);
            }
            
                     
            
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();            
        }
    
        return(Pagos);
    }
    
}
