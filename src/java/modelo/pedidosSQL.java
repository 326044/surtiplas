/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javabeans.Pedidos;
import javabeans.Usuarios;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject; 

/**
 *
 * @author EdwuarAlberto
 */
public class pedidosSQL {
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
    
    public JSONArray obtenerPedidos()
    {
        JSONArray pedidos = new JSONArray();
        JSONObject pedido = new JSONObject();
        
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql;
            sql = "SELECT * FROM pedidos";
            this.rs = this.st.executeQuery(sql);
            
            while(this.rs.next())
            {
                                  //Pedidos(String id_pedido,           
                Pedidos ped = new Pedidos(rs.getString("id_pedido"), rs.getString("valor_del_iva"), rs.getString("valor_total"), rs.getString("id_usuario"), rs.getString("fecha"), rs.getString("hora"), rs.getString("id_cliente"));
                pedido = ped.getJSONObject();
                System.out.printf(pedido.toString());
                pedidos.add(pedido);
            }
            
            this.desconectar();
        }
        
        catch(Exception e)
        {
            e.printStackTrace();
        }
        
        return(pedidos);
    }
    
    public JSONObject datosPedido(String idPedido)
    {
        JSONObject pedido = new JSONObject();
        try
        {
            this.cn = getConnection();
            this.st = this.cn.createStatement();
            String sql = "SELECT * FROM pedidos WHERE id_pedido = '" + idPedido + "';";
            this.rs = this.st.executeQuery(sql);
            this.rs.first();
            Pedidos ped = new Pedidos(rs.getString("id_pedido"), rs.getString("valor_del_iva"), rs.getString("valor_total"), rs.getString("id_usuario"), rs.getString("fecha"), rs.getString("hora"), rs.getString("id_cliente"));
            pedido = ped.getJSONObject();
            this.desconectar();
        }
    
        catch(Exception e)
        {
            e.printStackTrace();
        }
     
        return pedido;
    }
}
