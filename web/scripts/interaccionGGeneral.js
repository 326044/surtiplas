//***********************************************************************************
//***********************************************************************************
//*******    RUTINA QUE SE EJECUTA AL CARGARSE LA PAGINA WEB     ********************
//***********************************************************************************
//***********************************************************************************
var pagina;
pagina=$(document);
pagina.ready(inicializar);
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE INICIALIZA LAS OPERACIONES        *********************
//*************  PRINCIPALES EN JQUERY                         *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
function inicializar()
{
    /*__________opcion comercial (pestaña en el menu)____________-*/  
    // Variables
    var Gcomecial;
    vendedores=$("#Vendedores");
    vendedores.click(menuVendedores);
    //Inicializacion de las opciones
    menuVendedores();
    $(".nav .menu li a#Vendedores").addClass("active");
    activadorEventosVendedores();
  /*__________opcion financiera (pestaña en el menu)____________-*/  
    // Variables
    var clientes;
    //Inicializacion de las opciones
    clientes=$("#Clientes");
    clientes.click(menuClientes);
  /*__________opcion produccion (pestaña en el menu)____________-*/  
    // Variables
    var productos;
    //Inicializacion de las opciones
    productos=$("#Productos");
    productos.click(menuProductos);
  /*__________opcion perfil(pestaña en el menu)____________-*/  
    // Variables
    var perfil;
    //Inicializacion de las opciones
    perfil=$("#Perfil");
    perfil.click(menuPerfil);
}
/*Funcion que activa los eventos principales del menu vertical"gestion comercial"*/
function activadorEventosVendedores()
{
    /*____declaro las variables del meno vertical "gestion comercial________*/
    var   VisualizarV, ubicacionV,actividadesV, viaticosV, comisionesV;
    /*_________Le asigno eventos a las anteriores variables___________*/
    VisualizarV=$("#listadoVentas");
    VisualizarV.click(seccionListado);
	ubicacionV=$("#ubicacionVendedor");
    ubicacionV.click(seccionUbicacion);
	ventasV=$("#ventasVendedor");
    ventasV.click(seccionVentas);
    actividadesV=$("#ActividadesVendedor");
    actividadesV.click(seccionActividades);
    viaticosV=$("#viaticosVendedor");
    viaticosV.click(seccionViaticos);
    comisionesV=$("#comisionesVendedor");
    comisionesV.click(seccionComisiones);
    //*********************************************************
    //** VARIABLES DE LAS OPCIONES DEL LISTADO DE VENDEDORES **
    //*********************************************************
    var VisualizarV;
    var volverVendedor, vBorrarV, vHideDelV;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    VisualizarV=$(".VerVendedor");
    VisualizarV.click(VerVendedor);
    //*****************************************************
    //** VARIABLES DE LAS OPCIONES DEL LISTADO DE VENTAS **
    //*****************************************************
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCIONES PARA CREAR Y ACTIVAR EVENTOS        *********************
//*************  EN LOS TABERS DE LA APLICACION                *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function IniciarTabers()
{
    $(".tab_content").hide();
    $("ul.tabs li:first").addClass("active").show();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function()
    {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();

        return false;
    });
}

function IniciarTabersAnidados()
{
    $(".tab_content").hide();
    $("ul.tabs li:first").addClass("active").show();
    $(".tab_content:first").show();
    $(".tab_content2").hide();
    $("ul.tabs2 li:first").addClass("active").show();
    $(".tab_content2:first").show();

    $("ul.tabs li").click(function()
    {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();

        return false;
    });

    $("ul.tabs2 li").click(function()
    {
        $("ul.tabs2 li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content2").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();
        return false;
    });
}
/*Funcion que crea eventos en el menu vertical"gestion comercial"*/
function menuVendedores()
{
   var codigoHTML = '<div class="encabezado">Gestion Comercial</div>'+
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoVentas"><img src="images/IconoOpciones.png"/> Visualizar </a></li>'+
                        '<li><a href="#2" id="ventasVendedor"><img src="images/IconoOpciones.png"/> Pedidos</a></li>'+
                        '<li><a href="#3" id="ActividadesVendedor"><img src="images/IconoOpciones.png"/>Top Vendedores</a></li>'+
                        '<li><a href="#4" id="viaticosVendedor"><img src="images/IconoOpciones.png"/> Top Clientes</a></li>'+
                   '</li>'+
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML).css({height:"165px"});
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionListado();
    $(".menu-vertical li a#listadoVentas").addClass("active");
    activadorEventosVendedores();
}
/*Funcion que crea eventos en el menu vertical"gestion financiera"*/
function menuClientes()
{
   var codigoHTML = '<div class="encabezado">Gestión Financiera</div>'+
                    '<ul class="menu-vertical">'+
                    '<li><a href="#2" id="IngresosFinanciera"><img src="images/IconoOpciones.png"/>Ingresos</a></li>'+  
					'<li><a href="#1" id="EgresosFinanciera"><img src="images/IconoOpciones.png"/>Egresos</a></li>'+                   
                    '</ul>'; 

 $(".content-float-vendedores").html(codigoHTML).css({height:"100px"});
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionUbicacion();
    $(".menu-vertical li a#IngresosFinanciera").addClass("active");
    activadorEventosVendedores();
 
}
/*Funcion que crea eventos en el menu vertical"gestion produccion"*/
function menuProductos()
{
   var codigoHTML = '<div class="encabezado">Gestión de Productos</div>'+
                    '<ul class="menu-vertical">'+
                        
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionListadoProductos();
    //$(".menu-vertical li a#listadoVentas").addClass("active");
}
/*Funcion que crea eventos en el menu vertical"gestion perfil"*/
function menuPerfil()
{
   var codigoHTML = '<div class="encabezado">Gestión del Perfil</div>'+
                    '<ul class="menu-vertical">'+
                        
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".nav .menu li a").removeClass();
    $(this).addClass("active");
    seccionDatosPerfil();
}
/*Funcion que modifican el contenido segun las opciones del menu vertical*/
function seccionListado()
{
    var codigoHTML = '<div class="encabezado2">Visualizar La Ubicacion Geografica</div>'+
                     '<div class="tabla">'+
                        '<table class="tbonita">'+
                          '<tr align="left">'+           				   
							'<th colspan=""><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
                            '<th>Cedula</th>'+
                            '<th>Nombre</th>'+
							'<th>Direccion</th>'+
                            '<th>Teléfono</th>'+
                            '<th>Celular</th>'+
                            '<th>email</th>'+
                          '</tr>'+             
                          '<tr>'+								  
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor"/></td>'+
                            '<td>9867024</td>'+
                            '<td>Carlos Andres Jaramillo</td>'+
							'<td>Cll28 #25-52</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>cajaramillov@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+                          
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>111111</td>'+
                            '<td>Juan Sebastian Jaramillo</td>'+
							'<td>Cll28 #25-52</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>sebas@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
							'<td>Cll28 #25-52</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+                           
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
							'<td>Cll28 #25-52</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
							'<td>Cll28 #25-52</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
							'<td>Cll28 #25-52</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+                      
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
							'<td>Cll28 #25-52</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
							'<td>Cll28 #25-52</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
							'<td>Cll28 #25-52</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
							'<td>Cll28 #25-52</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
							'<td>Cll28 #25-52</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+
                        '</table>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#listadoVentas").addClass("active");
    activadorEventosVendedores();
}
/*funciones que modifican las opciones del contenido segun el menu vertical*/
function VerVendedor()
{
    var codigoHTML = '<div class="encabezado2">Ubicacion Geografica Cliente / Vendedor</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Laboral">Clientes</a></li>'+
                            '<li><a href="#Zonas">Vendedores</a></li>'+
                        '</ul>'+                       
                        '<div class="tab_container">'+                           
                            '<div id="Laboral" class="tab_content">'+
                              '<table>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="Usu" value="Nicolas Diaz"  required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Identificacion</th>'+
                                    '<td><input type="text" name="num" value="95020406160" required/></td>'+									
                                  '</tr>'+                               
                              '</table>'+
							   '<td  collspan="8" align="center"><br><input type="submit" class="button" value="Visualizar" /></br></td>'+
							   '<td><img src="images/MAPA.png"</td>'+
                            '</div>'+
                            '<div id="Zonas" class="tab_content">'+
                              '<table>'+               
								 '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="Usu" value="Andres Arango"  required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Identificacion</th>'+
                                    '<td><input type="text" name="num" value="0123456789" required/></td>'+									
                                  '</tr>'+                               
                              '</table>'+
							   '<td  collspan="8" align="center"><br><input type="submit" class="button" value="Visualizar" /></br></td>'+
							   '<td><img src="images/MAPA.png"</td>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddVendedor" />'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    activadorEventosVendedores();
}
/*_____________________FIN VISUALIZAR____________________________*/
/*____________________INICIO VENTAS___________________*/
function seccionVentas()
{
    var codigoHTML = '<div class="encabezado2">Reporte Estadistico De Los Pedidos</div>'+
                     '<div class="tabla">'+                    
                        '<div class="tab_container">'+
                            '<div id="Fecha" class="tab_content">'+ 
                                '<form action="" method="POST" name="form_buscar_venta">'+ 
                                    '<table align="center" border="0" align="left">'+ 
                                        '<tr>'+ 
                                            '<th align="right" style="padding-right:5px;">Vendedor</th>'+ 
                                            '<td>'+ 
                                                '<select name="vendedor" style="width:160px;">'+ 
                                                    '<option value="">Nicolas Diaz</option>'+ 
                                                    '<option value="">Andres Arango</option>'+ 
                                                    '<option value="">Santiago Valencia</option>'+ 
                                                    '<option value="">Yordi Arteaga</option>'+ 
                                                '</select>'+ 
                                            '</td>'+ 
											'<th align="right" style="padding-right:5px;">Identificacion</th>'+ 
                                            '<td>'+ 
                                            '<input type="text" name="fechaInicio" value="95020406160" style="font-size:14px;"/>'+ 
                                            '</td>'+ 
                                        '</tr>'+ 					
										'<tr>'+ 
                                            '<th align="right" style="padding-right:5px;">Departamento</th>'+ 
                                            '<td>'+ 
                                                '<select name="vendedor" style="width:160px;">'+ 
                                                    '<option value="">Cundinamarca</option>'+ 
                                                    '<option value="">Risaralda</option>'+                                                
                                                '</select>'+ 
                                            '</td>'+ 
											'<th align="right" style="padding-right:5px;">Ciudad</th>'+ 
                                             '<td>'+ 
                                                '<select name="vendedor" style="width:160px;">'+ 
                                                    '<option value="">Bogota</option>'+ 
                                                    '<option value="">Pereira</option>'+                                                
                                                '</select>'+ 
                                            '</td>'+ 
                                        '</tr>'+ 																
                                        '<tr>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Inicial</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field2" type="text" name="fechaFin" value=""/>'+  
                                            '</td>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Final</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field" type="text" name="fechaFin" value="" style="font-size:14px;"/>'+ 
                                            '</td>'+ 														
                                        '</tr>'+ 
                                        '<tr>'+ 
                                            '<td colspan="4" align="center"><br>'+ 
                                              '<input type="submit" value="Generar Reporte" class="button" />'+ 
                                            '</td>'+ 
                                        '</tr> '+ 																
                                    '</table>'+ 
									'<td align="center"><img src="images/ESTADISTICA.png"</td>'+		                                                      
                            '</div>'+
                        '</div>'+
                    '</div>';

	$("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#ventasVendedor").addClass("active");
    IniciarTabers();
    $('#date_field').datepick({yearRange: '1980:2050'});
    $('#date_field2').datepick({yearRange: '1980:2050'});
    $('#date_field3').datepick({yearRange: '1980:2050'});
    $('#date_field4').datepick({yearRange: '1980:2050'});
    $('#date_field5').datepick({yearRange: '1980:2050'});
    $('#date_field6').datepick({yearRange: '1980:2050'});
    activadorEventosVendedores();
}
/*____________FIN VENTAS______________*/
/*____________INICIO TOP VENDEDORES______________*/
function seccionActividades()
{
    var codigoHTML = '<div class="encabezado2">Actividades Vendedores</div>'+
  '<div class="table">'+
                       		'<br>'+
								'<ul class="tabs">'+							
									'<li><a href="#Pedidos">Pedidos</a></li>'+
									'<li><a href="#Visitas">Visitas</a></li>'+
									'<li><a href="#Recaudos">Recaudos</a></li>'+
									'<li><a href="#Viaticos">Viaticos</a></li>'+
									'<li><a href="#Comisiones">Comisiones</a></li>'+								
								'</ul>'+
							'</br>'+
/*____________________________PEDIDOS________________________*/												
						'<div class="tab_container">'+                           
                            '<div id="Pedidos" class="tab_content">'+				
								'<table class="tbonita">'+
									'<tr align="left">'+           				   
										'<th><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
										'<th>Cedula</th>'+
										'<th>Nombre</th>'+
										'<th>Totales</th>'+
										'<th>Teléfono</th>'+
										'<th>Celular</th>'+
										'<th>email</th>'+
									'</tr>'+             
									'<tr>'+			
										'<td>1-</td>'+
										'<td>25180450</td>'+
										'<td>Sandra Milena Giraldo</td>'+
										'<td>$ 5.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3012740919</td>'+
										'<td>sanmigita@gmail.com</td>'+
									'</tr>'+
									'<tr class="even">'+
										'<td>2-</td>'+
										'<td>25180450</td>'+
										'<td>Sandra Milena Giraldo</td>'+
										'<td>$ 5.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3012740919</td>'+
										'<td>sanmigita@gmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>3-</td>'+
										'<td>25180450</td>'+
										'<td>Sandra Milena Giraldo</td>'+
										'<td>$ 5.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3012740919</td>'+
										'<td>sanmigita@gmail.com</td>'+
									'</tr>'+ 
									'<tr class="even">'+
										'<td>4-</td>'+
										'<td>25180450</td>'+
										'<td>Sandra Milena Giraldo</td>'+
										'<td>$ 5.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3012740919</td>'+
										'<td>sanmigita@gmail.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>5-</td>'+
										'<td>25180450</td>'+
										'<td>Sandra Milena Giraldo</td>'+
										'<td>$ 5.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3012740919</td>'+
										'<td>sanmigita@gmail.com</td>'+
									'</tr>'+   
									'<tr class="even">'+
										'<td>6-</td>'+
										'<td>25180450</td>'+
										'<td>Sandra Milena Giraldo</td>'+
										'<td>$ 5.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3012740919</td>'+
										'<td>sanmigita@gmail.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>7-</td>'+
										'<td>25180450</td>'+
										'<td>Sandra Milena Giraldo</td>'+
										'<td>$ 5.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3012740919</td>'+
										'<td>sanmigita@gmail.com</td>'+
									'</tr>'+   
									'<tr class="even">'+
										'<td>8-</td>'+
										'<td>25180450</td>'+
										'<td>Sandra Milena Giraldo</td>'+
										'<td>$ 5.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3012740919</td>'+
										'<td>sanmigita@gmail.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>9-</td>'+
										'<td>25180450</td>'+
										'<td>Sandra Milena Giraldo</td>'+
										'<td>$ 5.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3012740919</td>'+
										'<td>sanmigita@gmail.com</td>'+
									'</tr>'+   
									'<tr class="even">'+
										'<td>10-</td>'+
										'<td>25180450</td>'+
										'<td>Sandra Milena Giraldo</td>'+
										'<td>$ 5.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3012740919</td>'+
										'<td>sanmigita@gmail.com</td>'+
									'</tr>'+   
                               '</table>'+
							  '</div>'+
                            '</div>'+                         			                                                                                       
                        '</div>'+                           
/*____________________________ FIN PEDIDOS________________________*/			
/*____________________________VISITAS________________________*/									
						 '<div class="tab_container">'+                           
                            '<div id="Visitas" class="tab_content">'+							
								'<table class="tbonita">'+
									'<tr align="left">'+           				   
										'<th><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
										'<th>Cedula</th>'+
										'<th>Nombre</th>'+
										'<th>Totales</th>'+
										'<th>Teléfono</th>'+
										'<th>Celular</th>'+
										'<th>email</th>'+
									'</tr>'+             
									'<tr>'+			
										'<td>1-</td>'+
										'<td>2525662</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>$ 10.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3175581102</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+
									'<tr class="even">'+
										'<td>2-</td>'+
										'<td>2525662</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>$ 10.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3175581102</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>3-</td>'+
										'<td>2525662</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>$ 10.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3175581102</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+ 
									'<tr class="even">'+
										'<td>4-</td>'+
										'<td>2525662</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>$ 10.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3175581102</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>5-</td>'+
										'<td>2525662</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>$ 10.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3175581102</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+   
									'<tr class="even">'+
										'<td>6-</td>'+
										'<td>2525662</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>$ 10.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3175581102</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>7-</td>'+
										'<td>2525662</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>$ 10.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3175581102</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+   
									'<tr class="even">'+
										'<td>8-</td>'+
										'<td>2525662</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>$ 10.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3175581102</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>9-</td>'+
										'<td>2525662</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>$ 10.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3175581102</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'<tr class="even">'+
										'<td>10-</td>'+
										'<td>2525662</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>$ 10.000.000</td>'+
										'<td>3325618</td>'+
										'<td>3175581102</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+   
                               '</table>'+
							  '</div>'+
                            '</div>'+                         			                                                                                       
                        '</div>'+                  
/*____________________________FIN VISITAS________________________*/			
/*____________________________RECAUDOS________________________*/									
						 '<div class="tab_container">'+                           
                            '<div id="Recaudos" class="tab_content">'+							
								'<table class="tbonita">'+
									'<tr align="left">'+           				   
										'<th><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
										'<th>Cedula</th>'+
										'<th>Nombre</th>'+
										'<th>Totales</th>'+
										'<th>Teléfono</th>'+
										'<th>Celular</th>'+
										'<th>email</th>'+
									'</tr>'+             
									'<tr>'+			
										'<td>1-</td>'+
										'<td>789658423</td>'+
										'<td>Edwar Masso</td>'+
										'<td>$ 100.000.000</td>'+
										'<td>430 52 26</td>'+
										'<td>312 334 52 02</td>'+
										'<td>maxxitope@hotmail.com</td>'+
									'</tr>'+
									'<tr class="even">'+
										'<td>2-</td>'+
										'<td>789658423</td>'+
										'<td>Edwar Masso</td>'+
										'<td>$ 100.000.000</td>'+
										'<td>430 52 26</td>'+
										'<td>312 334 52 02</td>'+
										'<td>maxxitope@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>3-</td>'+
										'<td>789658423</td>'+
										'<td>Edwar Masso</td>'+
										'<td>$ 100.000.000</td>'+
										'<td>430 52 26</td>'+
										'<td>312 334 52 02</td>'+
										'<td>maxxitope@hotmail.com</td>'+
									'</tr>'+ 
									'<tr class="even">'+
										'<td>4-</td>'+
										'<td>789658423</td>'+
										'<td>Edwar Masso</td>'+
										'<td>$ 100.000.000</td>'+
										'<td>430 52 26</td>'+
										'<td>312 334 52 02</td>'+
										'<td>maxxitope@hotmail.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>5-</td>'+
										'<td>789658423</td>'+
										'<td>Edwar Masso</td>'+
										'<td>$ 100.000.000</td>'+
										'<td>430 52 26</td>'+
										'<td>312 334 52 02</td>'+
										'<td>maxxitope@hotmail.com</td>'+
									'</tr>'+   
									'<tr class="even">'+
										'<td>6-</td>'+
										'<td>789658423</td>'+
										'<td>Edwar Masso</td>'+
										'<td>$ 100.000.000</td>'+
										'<td>430 52 26</td>'+
										'<td>312 334 52 02</td>'+
										'<td>maxxitope@hotmail.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>7-</td>'+
										'<td>789658423</td>'+
										'<td>Edwar Masso</td>'+
										'<td>$ 100.000.000</td>'+
										'<td>430 52 26</td>'+
										'<td>312 334 52 02</td>'+
										'<td>maxxitope@hotmail.com</td>'+
									'</tr>'+   
									'<tr class="even">'+
										'<td>8-</td>'+
										'<td>789658423</td>'+
										'<td>Edwar Masso</td>'+
										'<td>$ 100.000.000</td>'+
										'<td>430 52 26</td>'+
										'<td>312 334 52 02</td>'+
										'<td>maxxitope@hotmail.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>9-</td>'+
										'<td>789658423</td>'+
										'<td>Edwar Masso</td>'+
										'<td>$ 100.000.000</td>'+
										'<td>430 52 26</td>'+
										'<td>312 334 52 02</td>'+
										'<td>maxxitope@hotmail.com</td>'+
									'<tr class="even">'+
										'<td>10-</td>'+
										'<td>789658423</td>'+
										'<td>Edwar Masso</td>'+
										'<td>$ 100.000.000</td>'+
										'<td>430 52 26</td>'+
										'<td>312 334 52 02</td>'+
										'<td>maxxitope@hotmail.com</td>'+
									'</tr>'+   
                               '</table>'+
							  '</div>'+
                            '</div>'+                         			                                                                                       
                        '</div>'+                   
/*____________________________FIN RECAUDOS________________________*/		
/*____________________________VIATICOS________________________*/
						  '<div class="tab_container">'+                           
                            '<div id="Viaticos" class="tab_content">'+							
								'<table class="tbonita">'+
									'<tr align="left">'+           				   
										'<th><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
										'<th>Cedula</th>'+
										'<th>Nombre</th>'+
										'<th>Totales</th>'+
										'<th>Teléfono</th>'+
										'<th>Celular</th>'+
										'<th>email</th>'+
									'</tr>'+             
									'<tr>'+			
										'<td>1-</td>'+
										'<td>0246810</td>'+
										'<td>Santiago Valencia Cardona</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+
									'<tr class="even">'+
										'<td>2-</td>'+
										'<td>0246810</td>'+
										'<td>Santiago Valencia Cardona</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>3-</td>'+
										'<td>0246810</td>'+
										'<td>Santiago Valencia Cardona</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+ 
									'<tr class="even">'+
										'<td>4-</td>'+
										'<td>0246810</td>'+
										'<td>Santiago Valencia Cardona</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>5-</td>'+
										'<td>0246810</td>'+
										'<td>Santiago Valencia Cardona</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+   
									'<tr class="even">'+
										'<td>6-</td>'+
										'<td>0246810</td>'+
										'<td>Santiago Valencia Cardona</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>7-</td>'+
										'<td>0246810</td>'+
										'<td>Santiago Valencia Cardona</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+   
									'<tr class="even">'+
										'<td>8-</td>'+
										'<td>0246810</td>'+
										'<td>Santiago Valencia Cardona</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>9-</td>'+
										'<td>0246810</td>'+
										'<td>Santiago Valencia Cardona</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'<tr class="even">'+
										'<td>10-</td>'+
										'<td>0246810</td>'+
										'<td>Santiago Valencia Cardona</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+   
                               '</table>'+
							  '</div>'+
                            '</div>'+                         			                                                                                       
                        '</div>'+     	
/*____________________________FIN VIATICOS________________________*/						
/*____________________________COMISIONES________________________*/
						'<div class="tab_container">'+                           
                            '<div id="Comisiones" class="tab_content">'+							
								'<table class="tbonita">'+
									'<tr align="left">'+           				   
										'<th><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
										'<th>Cedula</th>'+
										'<th>Nombre</th>'+
										'<th>Totales</th>'+
										'<th>Teléfono</th>'+
										'<th>Celular</th>'+
										'<th>email</th>'+
									'</tr>'+             
									'<tr>'+			
										'<td>1-</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+
									'<tr class="even">'+
										'<td>2-</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>3-</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+ 
									'<tr class="even">'+
										'<td>4-</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>5-</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+   
									'<tr class="even">'+
										'<td>6-</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>7-</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+   
									'<tr class="even">'+
										'<td>8-</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+   
									'<tr>'+
										'<td>9-</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'<tr class="even">'+
										'<td>10-</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>$ 50.000.000</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti.com</td>'+
									'</tr>'+   
                               '</table>'+
							  '</div>'+
                            '</div>'+                         			                                                                                       
                        '</div>'+ 
/*____________________________FIN COMISIONES________________________*/
'</div>';                  
    $("#datos").html(codigoHTML);
	IniciarTabers();
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
    $('#date_field7').datepick({yearRange: '1980:2050'});
    $('#date_field8').datepick({yearRange: '1980:2050'});
}
/*_________________________ FIN TOP VENDEDORES________________*/
/*_________________________ INICIO TOP CLIENTES________________*/
function seccionViaticos()
{
    var codigoHTML = '<div class="encabezado2">Listado de Viáticos de los Vendedores</div>'+                                     
					'<div class="table">'+
						'<br>'+
							'<ul class="tabs">'+								
								'<li><a href="#Pagos">Pagos</a></li>'+
								'<li><a href="#Visitas">Visitas</a></li>'+
								'<li><a href="#Pedidos">Pedidos</a></li>'+
							'</ul>'+
						'</br>'+
						'<div class="tab_container">'+                           
                            '<div id="Pagos" class="tab_content">'+							
								'<table class="tbonita">'+
									'<tr align="left">'+        
									'<form action="" method="POST" name="form_buscar_venta">'+
										'<table align="center" border="0" align="left">'+
											'<tr>'+
												'<th align="center" style="padding-right:5px;">Categoria</th>'+
												'<td>'+
													'<select name="vendedor" style="width:160px;">'+
														'<option value="">Mayor Puntualidad</option>'+
														'<option value="">Menor Puntualidad</option>'+                                           
													'</select>'+
												'</td>'+                                   
											'<tr>'+
											'<td colspan="4" align="center"><br>'+
												'<input type="submit" value="Ver" class="button" />'+
											'</td>'+											
										'</table>'+										
									'</form>'+     
									'</tr>'+       									
								'</table>'+
								'<table class="tbonita">'+
									'<tr align="left">'+           				   
										'<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
										'<th>Fecha</th>'+
										'<th>Cedula</th>'+
										'<th>Nombre</th>'+
										'<th>Teléfono</th>'+
										'<th>Celular</th>'+
										'<th>email</th>'+
									'</tr>'+   									
										'<td>1-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+  
									'<tr>'+
										'<tr class="even">'+
										'<td>2-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>3-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<tr class="even">'+
										'<td>4-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>5-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<tr class="even">'+
										'<td>6-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>7-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<tr class="even">'+
										'<td>8-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>9-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<tr class="even">'+
										'<td>10-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
							'</table>'+
						'</div>'+
/*________________________FIN PAGOS_________________________*/		
/*________________________ INICIO VISITAS_________________________*/						
			                       
                            '<div id="Visitas" class="tab_content">'+							
								'<table class="tbonita">'+
									'<tr align="left">'+        
									'<form action="" method="POST" name="form_buscar_venta">'+
										'<table align="center" border="0" align="left">'+
											'<tr>'+
												'<th align="center" style="padding-right:5px;">Categoria</th>'+
												'<td>'+
													'<select name="vendedor" style="width:160px;">'+
														'<option value="">Mas Visitados</option>'+
														'<option value="">Menos Visitados</option>'+                                           
													'</select>'+
												'</td>'+                                   
											'<tr>'+
											'<td colspan="4" align="center"><br>'+
												'<input type="submit" value="Ver" class="button" />'+
											'</td>'+		
									'<table class="tbonita">'+
									'<tr align="left">'+           				   
										'<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
										'<th>Fecha</th>'+
										'<th>Cedula</th>'+
										'<th>Nombre</th>'+
										'<th>Teléfono</th>'+
										'<th>Celular</th>'+
										'<th>email</th>'+
									'</tr>'+   									
										'<td>1-</td>'+
										'<td>02/04/1995</td>'+
										'<td>95020406160</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>252 5662</td>'+
										'<td>314 351 58 44</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+  
									'<tr>'+
										'<tr class="even">'+
										'<td>2-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>3-</td>'+
										'<td>02/04/1995</td>'+
										'<td>95020406160</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>252 5662</td>'+
										'<td>314 351 58 44</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<tr class="even">'+
										'<td>4-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>5-</td>'+
										'<td>02/04/1995</td>'+
										'<td>95020406160</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>252 5662</td>'+
										'<td>314 351 58 44</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<tr class="even">'+
										'<td>6-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>7-</td>'+
										'<td>02/04/1995</td>'+
										'<td>95020406160</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>252 5662</td>'+
										'<td>314 351 58 44</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<tr class="even">'+
										'<td>8-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>9-</td>'+
										'<td>02/04/1995</td>'+
										'<td>95020406160</td>'+
										'<td>Nicolas Diaz Franco</td>'+
										'<td>252 5662</td>'+
										'<td>314 351 58 44</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<tr class="even">'+
										'<td>10-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Andres Arango</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
							'</table>'+											
										'</table>'+										
									'</form>'+     
									'</tr>'+       									
								'</table>'+																					
							'</div>'+		
						'</div>'+		   
/*________________________ FIN VISITAS_________________________*/	
/*________________________ PEDIDOS_________________________*/	
						'<div id="Pedidos" class="tab_content">'+							
								'<table class="tbonita">'+
									'<tr align="left">'+        
										'<form action="" method="POST" name="form_buscar_venta">'+
											'<table align="center" border="0" align="left">'+
												'<tr>'+
													'<th align="center" style="padding-right:5px;">Categoria</th>'+
													'<td>'+
														'<select name="vendedor" style="width:140px;">'+
															'<option value="">Mas Pedidos</option>'+
															'<option value="">Menos Pedidos</option>'+                                           
														'</select>'+
													'</td>'+                                   
												'<tr>'+
												'<td colspan="4" align="center"><br>'+
													'<input type="submit" value="Ver" class="button" />'+
												'</td>'+																							
											'</table>'+				
											'<table class="tbonita">'+
									'<tr align="left">'+           				   
										'<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
										'<th>Fecha</th>'+
										'<th>Cedula</th>'+
										'<th>Nombre</th>'+
										'<th>Teléfono</th>'+
										'<th>Celular</th>'+
										'<th>email</th>'+
									'</tr>'+   		
									'<tr>'+
										'<td>1-</td>'+
										'<td>02/04/1995</td>'+
										'<td>9502040</td>'+
										'<td>Nicolas Diaz</td>'+
										'<td>252 5662</td>'+
										'<td>314 351 58 44</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+  
									'<tr>'+
										'<tr class="even">'+
										'<td>2-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Nicolas Diaz</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>3-</td>'+
										'<td>02/04/1995</td>'+
										'<td>9502040</td>'+
										'<td>Nicolas Diaz</td>'+
										'<td>252 5662</td>'+
										'<td>314 351 58 44</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<tr class="even">'+
										'<td>4-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Nicolas Diaz</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>5-</td>'+
										'<td>02/04/1995</td>'+
										'<td>9502040</td>'+
										'<td>Nicolas Diaz</td>'+
										'<td>252 5662</td>'+
										'<td>314 351 58 44</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<tr class="even">'+
										'<td>6-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Nicolas Diaz</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>7-</td>'+
										'<td>02/04/1995</td>'+
										'<td>9502040</td>'+
										'<td>Nicolas Diaz</td>'+
										'<td>252 5662</td>'+
										'<td>314 351 58 44</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<tr class="even">'+
										'<td>8-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Nicolas Diaz</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<td>9-</td>'+
										'<td>02/04/1995</td>'+
										'<td>9502040</td>'+
										'<td>Nicolas Diaz</td>'+
										'<td>252 5662</td>'+
										'<td>314 351 58 44</td>'+
										'<td>nicolas_950404@hotmail.com</td>'+
									'</tr>'+
									'<tr>'+
										'<tr class="even">'+
										'<td>10-</td>'+
										'<td>02/04/1995</td>'+
										'<td>0246810</td>'+
										'<td>Nicolas Diaz</td>'+
										'<td>444 44 44</td>'+
										'<td>314 351 58 44</td>'+
										'<td>valenciasanti@hotmail.com</td>'+
									'</tr>'+
										'</form>'+     
									'</tr>'+       									
								'</table>'+																											
						'</div>'+
				    '</div>'; 
	$("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
	$(this).addClass("active");
    IniciarTabers();
    activadorEventosVendedores();
/*________________________ FIN PEDIDOS_________________________*/	
 
}

//**********************************************************************************

function seccionComisiones()
{
    var codigoHTML = 
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
    $('#date_field11').datepick({yearRange: '1980:2050'});
    $('#date_field12').datepick({yearRange: '1980:2050'});
}

//**********************************************************************************

function seccionUbicacion()
{
    var codigoHTML = 
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
}

//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DEL MENU VERTICAL DE LOS   *********************
//*************  CLIENTES                                      *********************
function seccionListadoClientes()
{
    var codigoHTML = '<div class="encabezado2">Listado de Clientes</div>'+
                     '<div class="tabla">'+
                        
                    '</div>';

    $("#datos").html(codigoHTML);
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
}
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DEL MENU VERTICAL DE LOS   *********************
//*************  PRODUCTOS                                     *********************
function seccionListadoProductos()
{
    var codigoHTML = '<div class="encabezado2">Listado de Productos</div>'+
                     '<div class="tabla">'+
                        
                    '</div>';

    $("#datos").html(codigoHTML);
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
}
/*________SECCION QUE MODIFICA LOS DATOS DEL PERFIL_______*/
function seccionDatosPerfil()
{
    var codigoHTML = '<div class="encabezado2">Datos del Jefe Comercial</div>'+
                     '<div class="tabla">'+
                        
                    '</div>';

    $("#datos").html(codigoHTML);
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
}
