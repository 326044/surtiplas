<%-- 
    Document   : ggeneral
    Created on : 08-nov-2012, 15:39:32
    Author     : SENA
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <%-- Le agregamos el morfato de codificacion UTF8 --%>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        
        <%-- titulo que aparecera en el sistema de informacion --%>
        <title>Sistema de Informacion Integral Surtiplas</title>
        
        <%-- Conectamos el Css con el HTML para darle diseño al sistema de informacion --%>
        <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
        
        <%-- conectamos el jquery con el HTML para darle interaccion y agregarle los calendarios --%>
        <link rel="stylesheet" href="css/jquery.datepick.css" type="text/css" media="screen" />
        
    <%--Librerias que utilizaremos para el HTML --%>
        
        <script type="text/javascript" src="scripts/jquery.js"></script>
        <script type="text/javascript" src="scripts/jquery.datepick.js"></script>
        <script type="text/javascript" src="scripts/jquery.datepick-es-AR.js"></script>
        <script type="text/javascript" src="scripts/interaccionGGeneral.js"></script>
        
        <%-- script obligatorio que se usa para comunicar un app de google con el java script y permitir visualizar la geolocalizacion --%>
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
    </head>
    <body>
        
        <%-- le agregamos clases que nos muestran y ocultan los lighbox --%>
        <div id="overDelItem" class="overboxMsg"></div>
        <div id="fadeDelItem" class="fadebox"></div>
        <div id="overAddProducto" class="overboxVentana"></div>
        <div id="fadeAddProducto" class="fadebox"></div>
        <center>
            <div class="sheet">
                <div class="sheet-body">
                    <header class="header">
                        <div class="header-body">
                            <div class="logo">
                                <h1 class="logo-name">SICPS</h1>
                                <h2 class="logo-text">Sistema de Información Comercial<br></h2>
                                <h2 class="logo-text">y de Producción</h2>
                            </div>
                        <div class="img-header"><img src='images/moto.png' height="220" />
                        </div>
                    </header>
                    <nav class="nav">
                        <ul class="menu">
                            <li><a href="#v" id="Vendedores">Comercial</a></li>
                            <li><a href="#c" id="Clientes">Financiera</a></li>
                            <li><a href="#p" id="Productos">Produccion</a></li>
                            <li><a href="#pr" id="Perfil">Perfil</a></li>
                            <li><a href="index.jsp">Salir</a></li>
                        </ul>
                    </nav>
                    <section class="content">
                        <article class="content-float-vendedores">
                            
                        </article>
                        <article class="content-float-datos" id="datos">
                            
                        </article>
                    </section>
                    <footer class="footer">
                        <div class="footer-text">
                            <p style="margin-top: 17px;color: white; font-size: 12px;">Copyright © 2012 - Todos los derechos Reservados.</a><br /> Diseño, Maquetación y Desarrollo CARLOS ANDRES JARAMILLO.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </center>
    </body>
</html>
