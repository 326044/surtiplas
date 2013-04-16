/*package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.pagos;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class pagosSQL
{
    private Connection cn; 
    private Statement st;
    private ResultSet rs;
    
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
    
    public JSONArray obtenerpagos(JSONObject jsonObject)
    {
        JSONArray arraypagos = new JSONArray();
        JSONObject pagos = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();        
             String criterios = (String.valueOf(jsonObject.get("criterios")));
            String pagosql;
            
             if("All".equals(criterios))
                    {
                        pagosql = "SELECT * FROM pagos ";
                        this.rs = this.st.executeQuery(pagosql);
                    }
               if("MasPuntual".equals(criterios))
                    {
                        pagosql = "SELECT * FROM pagos";
                        this.rs = this.st.executeQuery(pagosql);
                    }
               
                if("MenosPuntual".equals(criterios))
                    {
                        pagosql = "SELECT * FROM pagos";
                        this.rs = this.st.executeQuery(pagosql);
                    }
            
            while(this.rs.next())
            {  
                pagos pag = new pagos ( rs.getString("id_pago"), rs.getString("id_pedido"), rs.getString("id_cliente"), rs.getString("id_usuario"), rs.getString("nombre_cliente"), rs.getString("fecha"), rs.getString("tipo_de_pago"), rs.getString("cantidad_de_pago"), rs.getString("descripcion"));
                pagos = pag.getJSONObject();
                System.out.printf(pagos.toString());
                arraypagos.add(pagos);
            }
            
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
    
        return(arraypagos);
    }  
 
}*/