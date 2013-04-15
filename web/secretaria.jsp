<%-- 
    Document   : secretaria
    Created on : 13/11/2012, 09:02:03 PM
    Author     : MASSO
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Sistema de Informacion Integral Surtiplas</title>
        <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="css/jquery.datepick.css" type="text/css" media="screen" />
        <script type="text/javascript" src="scripts/jquery.js"></script>
        <script type="text/javascript" src="scripts/jquery.datepick.js"></script>
        <script type="text/javascript" src="scripts/jquery.datepick-es-AR.js"></script>
        <script type="text/javascript" src="scripts/interaccionSecretaria.js"></script>
    </head>
    <body>
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
                        	<div class="img-header"><img src='images/moto.png' height="220" /></div>
                        </div>
                    </header>
                    <nav class="nav">
                        <ul class="menu">
                            <li><a href="#vendedores" id="Vendedores">Vendedores</a></li>
                            <li><a href="#clientes" id="Clientes">Clientes</a></li>
                            <li><a href="#productos" id="Productos">Productos</a></li>
                            <li><a href="#perfil" id="Perfil">Perfil</a></li>
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
