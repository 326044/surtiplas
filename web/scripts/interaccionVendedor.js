//***********************************************************************************
//***********************************************************************************
//*******    RUTINA QUE SE EJECUTA AL CARGARSE LA PAGINA WEB     ********************
//***********************************************************************************
//***********************************************************************************



var pagina;
var map;
var latitud;
var longitud;
var precision;
var TablaViaticos=null;
var TablaClientes=null;
var TablaProductos=null;
var TablaProductosPedidos=null;
var TablaClientePedido=null;
var TablaPedidos=null;
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
    /************************************************************************************/
    /********************       OPCION VENDEDORES      **********************************/
    /************************************************************************************/
    
    // Variables
    var vendedores;
    vendedores=$("#Vendedores");
    vendedores.click(menuVendedores);
    //Inicializacion de las opciones
    menuVendedores();
    $(".nav .menu li a#Vendedores").addClass("active");
    activadorEventosVendedores();

    /************************************************************************************/
    /********************       OPCION CLIENTES        **********************************/
    /************************************************************************************/
    
    // Variables
    var clientes;
    //Inicializacion de las opciones
    clientes=$("#Clientes");
    clientes.click(menuClientes);
    activadorEventosClientes();
    


    /************************************************************************************/
    /********************       OPCION PRODUCTOS       **********************************/
    /************************************************************************************/
    
    // Variables
    var productos;
    //Inicializacion de las opciones
    productos=$("#Productos");
    productos.click(menuProductos);
    activadorEventosProductos();

    /************************************************************************************/
    /********************       OPCION PERFIL       **********************************/
    /************************************************************************************/
    
    // Variables
    var perfil;
    //Inicializacion de las opciones
    perfil=$("#Perfil");
    perfil.click(menuPerfil);
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE ACTIVA LOS EVENTOS PRINCIPALES    *********************
//*************  DE LA SECCION VENDEDORES                      *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function activadorEventosVendedores()
{
    // VARIABLES DEL MENU VERTICAL DE LA OPCION VENDEDORES
    var pedidoV, viaticosV, actividadesV, AddActividad, hideAddActividad, adicionarCampos;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    pedidoV=$("#pedidoVendedor");
    pedidoV.click(seccionPedido);    
    viaticosV=$("#viaticosVendedor");
    viaticosV.click(seccionViaticos);
    actividadesV=$("#ActividadesVendedor");
    actividadesV.click(seccionActividades);
    
    AddActividad=$(".addActividad");
    AddActividad.click(AddActividades);   
    
    /*adicionarCampos=$("#campos");
    adicionarCampos.click(camposAdicionalesPagos);*/

     //*****************************************************
    //** VARIABLES DE LAS OPCIONES DEL LISTADO DE PEDIDOS **
    //*****************************************************
    var addPedido, reportePedido, addProducto, hideAddProducto, ventAddProducto;
    var volverPedido, verPedido, buscarCliente, buscarProducto;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    addPedido=$(".AdicionarPedido");
    addPedido.click(AddPedido);    
    verPedido=$(".VerPedido");
    verPedido.click(VerPedido);
    ventAddProducto=$("#VentAddProducto");
    ventAddProducto.click(ConfirmAddProducto);
    volverPedido=$("#volverPedido");
    volverPedido.click(seccionPedido);
    addProducto=$(".VentanaAddProducto");
    addProducto.click(ConfirmAddProducto);
    buscarCliente=$(".buscarCliente");
    buscarCliente.click(confirmBuscarCliente);
    buscarProducto=$("#buscarProducto");
    buscarProducto.click(confirmBuscarProducto);
    hideAddProducto=$("#NotAddProducto");
    hideAddProducto.click(HideConfirmAddProducto);
    
    //*****************************************************
    //** VARIABLES DE LAS OPCIONES DEL LISTADO DE VIATICOS **
    //*****************************************************
   
    var addViatico, verViatico; 
    var volAgrViatico;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    addViatico=$(".AdicionarViatico");
    addViatico.click(AgrViatico);    
    verViatico=$(".VerViatico");
    verViatico.click(DatosVerViatico);
    
    volAgrViatico=$("#volAgrViatico");
    volAgrViatico.click(seccionViaticos);    
}



//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE ACTIVA LOS EVENTOS PRINCIPALES    *********************
//*************  DE LA SECCION CLIENTES                        *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function activadorEventosClientes()
{ 
    //*****************************************************
    //** VARIABLES DE LAS OPCIONES DEL LISTADO DE ClIENTES **
    //*****************************************************
    var addCliente, reporteCliente, actividadesClientes;
    var volverCliente,  verCliente, verVisita, AddVisita, hideAddVisita, hideVerVisita;
    
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    addCliente=$("#AdicionarCliente");
    addCliente.click(AddCliente);    
    verCliente=$(".VerCliente");
    verCliente.click(DatosVerCliente);
       
    volverCliente=$("#volverCliente");
    volverCliente.click(seccionListadoClientes);
    verVisita=$(".VerVisita");
    verVisita.click(VerVisita);
    AddVisita=$(".addVisita");
    AddVisita.click(ConfirmAddVisita);
    hideAddVisita=$("#NotAddVisita");
    hideAddVisita.click(HideConfirmAddVisita);

    //*****************************************************
    //** VARIABLES DE LA PESTAÑA QUEJAS **
    //*****************************************************
    
    var verQuejas, addQuejas, hideAddQuejas, hideVerQuejas;
    
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS

    verQuejas=$(".VerQuejas");
    verQuejas.click(VerQuejas);
    addQuejas=$(".VentanaAddQuejas");
    addQuejas.click(ConfirmAddQuejas);
    hideAddQuejas=$("#NotAddQuejas");
    hideAddQuejas.click(HideConfirmAddQuejas);

     //*****************************************************
    //** VARIABLES DE LA PESTAÑA QUEJAS **
    //*****************************************************
    var verRecaudo, addRecaudo, hideAddRecaudo, hideVerRecaudo;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS

    verRecaudo=$(".VerRecaudo");
    verRecaudo.click(VerRecaudo);
    addRecaudo=$(".VentanaAddRecaudo");
    addRecaudo.click(ConfirmAddRecaudo);
    hideAddRecaudo=$("#NotAddRecaudo");
    hideAddRecaudo.click(HideConfirmAddRecaudo);                          
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE ACTIVA LOS EVENTOS PRINCIPALES    *********************
//*************  DE LA SECCION PRODUCTOS                       *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************


function activadorEventosProductos ()
{
    //*****************************************************
    //** VARIABLES PRINCIPALES DE LA SECCION PRODUCTOS **
    //*****************************************************
    var verProducto, volverProducto;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS

    verProducto=$(".VerProducto");
    verProducto.click(DatosVerProducto);
    volverProducto=$("#VolverProducto");
    volverProducto.click(seccionListadoProductos);

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

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CREA LOS COMPONENTES DEL MENU     *********************
//*************  VERTICAL DE LA SECCION VENDEDORES             *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function menuVendedores()
{
    var codigoHTML = '<div class="encabezado">Gestión de Vendedores</div>'+
                     '<ul class="menu-vertical">'+                       
                        '<li><a href="#2" id="pedidoVendedor"><img src="images/IconoOpciones.png"/> Pedido</a></li>'+                       
                        '<li><a href="#4" id="viaticosVendedor"><img src="images/IconoOpciones.png"/> Viáticos</a></li>'+
                        '<li><a href="#3" id="ActividadesVendedor"><img src="images/IconoOpciones.png"/> Actividades</a></li>'+                       
                     '</ul>'; 


    $(".content-float-vendedores").html(codigoHTML);
    $(".content-float-vendedores").css({height: 140});
    $(".content-float-vendedores").show();
    $(".content-float-datos").css({width: 640});
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionPedido();
    $(".menu-vertical li a#pedidoVendedor").addClass("active");
    activadorEventosVendedores();
    
}


//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CREA LOS COMPONENTES DEL MENU     *********************
//*************  VERTICAL DE LA SECCION CLIENTES               *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function menuClientes()
{
    $(".nav .menu li a").removeClass("active");    
    $(".content-float-vendedores").hide();
    $(".content-float-datos").css({width: 880});
    $(this).addClass("active");
    seccionListadoClientes();
    activadorEventosClientes();
    //$(".menu-vertical li a#listadoVentas").addClass("active");
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CREA LOS COMPONENTES DEL MENU     *********************
//*************  VERTICAL DE LA SECCION PRODUCTOS              *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function menuProductos()
{   
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    $(".content-float-vendedores").hide();
    $(".content-float-datos").css({width: 870});
    seccionListadoProductos();
    activadorEventosProductos();
    //$(".menu-vertical li a#listadoVentas").addClass("active");
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CREA LOS COMPONENTES DEL MENU     *********************
//*************  VERTICAL DE LA SECCION PERFIL                 *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function menuPerfil()
{    
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    $(".content-float-vendedores").hide();
    $(".content-float-datos").css({width: 880});
    seccionDatosPerfil();
    //$(".menu-vertical li a#listadoVentas").addClass("active");
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DEL MENU HORIZONTAL DE LA  *********************
//*************  SECCION PEDIDOS                               *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************


function  seccionPedido()
{
   var codigoHTML = '<div class="encabezado2">Listado de Pedido</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Fecha">Fecha</a></li>'+
                            '<li><a href="#Cliente">Cliente</a></li>'+
                            '<li><a href="#Producto">Producto</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Fecha" class="tab_content">'+ 
                                '<form action="" method="POST" id="form_buscar_Pedido" enctype="multipart/form-data">'+ 
                                    '<table align="center" border="0" align="left">'+ 
                                        '<br>'+
                                        '<br>'+
                                        '<tr>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Inicial</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field" type="text" name="fechaInicio" value="" style="font-size:14px;"/>'+ 
                                            '</td>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Final</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field2" type="text" name="fechaFin" value=""/>'+ 
                                            '</td>'+ 
                                        '</tr>'+ 
                                        
                                        '<tr>'+ 
                                            '<td colspan="4" align="center"><br>'+ 
                                              '<input type="submit" value="Buscar" class="button" name"buscarPedido" />'+ 
                                            '</td>'+ 
                                        '</tr> '+
                                        
                                    '</table>'+ 
                                '</form>'+ 
                                '<br>'+ 
                                '<table class="tbonita" align="center" id="tablaPedido">'+ 
                                '<tr align="left">'+ 
                                    '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Pedido" class="AdicionarPedido" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReportePedido" /></th>'+ 
                                    '<th>IdPedido</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Direccion</th>'+ 
                                    '<th>Total</th>'+ 
                                  '</tr>'+
                                '</table>'+ 
                            '</div>'+ 
                            '<div id="Cliente" class="tab_content">'+ 
                                '<form id="form_buscar_Pedido_cliente" enctype="multipart/form-data">'+ 
                                    '<table align="center" border="0" align="left">'+ 
                                        '<tr>'+ 
                                            '<th align="right" style="padding-right:5px;">NIT</th>'+ 
                                            '<td>'+ 
                                              '<input type="text" name="id_cliente" value=""/>'+ 
                                            '</td>'+ 
                                            '<th align="right" style="padding-right:5px;">Nombre</th>'+ 
                                            '<td>'+ 
                                              '<input type="text" name="nombre_del_cliente" value=""/>'+ 
                                            '</td>'+ 
                                        '</tr>'+ 

                                        '<tr>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Inicial</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field3" type="text" name="fechaInicio" value=""/>'+ 
                                            '</td>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Final</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field4" type="text" name="fechaFin" value=""/>'+ 
                                            '</td>'+ 
                                        '</tr>'+ 
                                        '<tr>'+ 
                                            '<td colspan="4" align="center"><br>'+ 
                                              '<input type="submit" value="Buscar" class="button" />'+ 
                                            '</td>'+ 
                                        '</tr>'+ 
                                    '</table>'+ 
                                '</form>'+ 
                                '<br>'+ 
                                '<table class="tbonita" align="center" id="tablaPedidoCliente">'+ 
                                  '<tr align="left">'+ 
                                    '<th colspan="1"><img src="images/b_insrow.png" title="agregar" class="AdicionarPedido" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento"  /></th>'+ 
                                    '<th>IdPedido</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Cuidad</th>'+ 
                                    '<th>Total</th>'+ 
                                  '</tr>'+                          
                                '</table>'+ 
                            '</div>'+ 

                            '<div id="Producto" class="tab_content">'+ 
                                '<form action="" method="POST" id="form_buscar_Pedido_Productos">'+ 
                                     '<table align="center" border="0" align="left">'+
                                        '<tr>'+ 
                                                '<th align="right" style="padding-right:5px;">Id Producto</th>'+ 
                                                '<td>'+ 
                                                  '<input id="date_field" type="text" name="codigo_producto" value="" style="font-size:14px;"/>'+ 
                                                '</td>'+ 
                                                '<th align="right" style="padding-right:5px;">Nombre del Producto</th>'+ 
                                                '<td>'+ 
                                                  '<input id="date_field2" type="text" name="nombre" value=""/>'+ 
                                                '</td>'+ 
                                            '</tr>'+ 

                                          '<tr>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Inicial</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field5" type="text" name="fechaInicio" value=""/>'+ 
                                            '</td>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Final</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field6" type="text" name="fechaFin" value=""/>'+ 
                                            '</td>'+ 
                                          '</tr>'+ 

                                          '<tr>'+ 
                                            '<td colspan="4" align="center"><br>'+ 
                                              '<input type="submit" value="Buscar" class="button"/>'+ 
                                            '</td>'+ 
                                          '</tr>'+ 
                                       '</table>'+ 
                                    '</form>'+ 
                                    '<br>'+ 
                                    '<table class="tbonita" align="center" id="tablaPedidoProducto">'+ 
                                     '<tr align="left">'+ 
                                        '<th colspan="1"><img src="images/b_insrow.png" title="agregar" class="AdicionarPedido" /></th>'+ 
                                        '<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento"  /></th>'+ 
                                        '<th>IdPedido</th>'+ 
                                        '<th>Fecha</th>'+ 
                                        '<th>Cliente</th>'+ 
                                        '<th>Vendedor</th>'+ 
                                        '<th>Cuidad</th>'+ 
                                        '<th>Total</th>'+ 
                                    '</tr>'+                
                                '</table>'+                          
                        '</div>'+
                        '</div>'+
                    '</div>';  

    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#pedidoVendedor").addClass("active");
    if(TablaPedidos != null)
    {
        tablaPedido(TablaPedidos);
    }
    IniciarTabers();
    $('#date_field').datepick({yearRange: '1980:2050'});
    $('#date_field').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field2').datepick({yearRange: '1980:2050'});
    $('#date_field2').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field3').datepick({yearRange: '1980:2050'});
    $('#date_field4').datepick({yearRange: '1980:2050'});
    $('#date_field5').datepick({yearRange: '1980:2050'});
    $('#date_field6').datepick({yearRange: '1980:2050'});
    $('#date_field6').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_buscar_Pedido").submit(buscarPedido);
    $("#form_buscar_Pedido_cliente").submit(buscarPedidoCliente);
    $("#form_buscar_Pedido_Productos").submit(buscarPedidoProducto);
    //$("#form_buscar_Pedido_Productos").submit(enviarDatosBuscarProducto);   
    activadorEventosVendedores();
    //activadorEventosClientes();
}

function buscarPedido(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"BuscarPedido","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonArray)
                    {
                        tablaPedido(jsonArray);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE AL MOMENTO DE REALIZAR UNA BUSQUEDA*********************
//*************  SE VA CREAR UNA TABLA ARROJANDO LOS RESULTADOS*********************
//**********************************************************************************
//**********************************************************************************

function tablaPedido(jsonArray)
{
    TablaPedidos=jsonArray;
    
    var codigoHTML =                '<tr align="left">'+ 
                                    '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Pedido" class="AdicionarPedido" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReportePedido" /></th>'+ 
                                    '<th>IdPedido</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Direccion</th>'+ 
                                    '<th>Total</th>'+ 
                                  '</tr>';
                         
    for (var i = 0; i < jsonArray.length; i++)
    {
            if (i % 2 == 0)
                codigoHTML+=      '<tr>';
           else
                codigoHTML+=      '<tr class="even">';
    
    codigoHTML+=                          '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerPedido" id="' + jsonArray[i].id_pedido + '" /></td>';
                                   
    codigoHTML+=                          '<td>' + jsonArray[i].id_pedido + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[i].fecha + '</td>';  
    codigoHTML+=                          '<td>' + jsonArray[i].razon_social + '</td>'; 
    codigoHTML+=                          '<td>' + jsonArray[i].nombre_usuario + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[i].direccion + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[i].valor_total + '</td>';
    codigoHTML+=                  '</tr>';
            
    }
    
    
    $("#tablaPedido").html(codigoHTML);
    activadorEventosVendedores();
}

function buscarPedidoCliente(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"BuscarPedidoCliente","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonArray)
                    {
                        TablaPedidoCliente(jsonArray);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

function TablaPedidoCliente(jsonArray)
{
    var codigoHTML =                '<tr align="left">'+ 
                                    '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Pedido" class="AdicionarPedido" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReportePedido" /></th>'+ 
                                    '<th>IdPedido</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Direccion</th>'+ 
                                    '<th>Total</th>'+ 
                                  '</tr>';
                         
    for (var i = 0; i < jsonArray.length; i++)
    {
            if (i % 2 == 0)
                codigoHTML+=      '<tr>';
           else
                codigoHTML+=      '<tr class="even">';
    
    codigoHTML+=                          '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerPedido" id="' + jsonArray[i].id_pedido + '" /></td>';
                                   
    codigoHTML+=                          '<td>' + jsonArray[i].id_pedido + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[i].fecha + '</td>';  
    codigoHTML+=                          '<td>' + jsonArray[i].razon_social + '</td>'; 
    codigoHTML+=                          '<td>' + jsonArray[i].nombre_usuario + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[i].direccion + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[i].valor_total + '</td>';
    codigoHTML+=                  '</tr>';
            
    }
    
    
    
    $("#tablaPedidoCliente").html(codigoHTML);
    activadorEventosVendedores();
}

function buscarPedidoProducto(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"BuscarPedidoProducto","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonArray)
                    {
                        tablaPedidoProducto(jsonArray);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}



//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE AL MOMENTO DE REALIZAR UNA BUSQUEDA*********************
//*************  SE VA CREAR UNA TABLA ARROJANDO LOS RESULTADOS*********************
//**********************************************************************************
//**********************************************************************************

function tablaPedidoProducto(jsonArray)
{
    var codigoHTML =                '<tr align="left">'+ 
                                    '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Pedido" class="AdicionarPedido" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReportePedido" /></th>'+ 
                                    '<th>IdPedido</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Direccion</th>'+ 
                                    '<th>Total</th>'+ 
                                  '</tr>';
                         
    for (var i = 0; i < jsonArray.length; i++)
    {
            if (i % 2 == 0)
                codigoHTML+=      '<tr>';
           else
                codigoHTML+=      '<tr class="even">';
    
    codigoHTML+=                          '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerPedido" id="' + jsonArray[i].id_pedido + '" /></td>';
                                   
    codigoHTML+=                          '<td>' + jsonArray[i].id_pedido + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[i].fecha + '</td>';  
    codigoHTML+=                          '<td>' + jsonArray[i].razon_social + '</td>'; 
    codigoHTML+=                          '<td>' + jsonArray[i].nombre_usuario + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[i].direccion + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[i].valor_total + '</td>';
    codigoHTML+=                  '</tr>';
            
    }
    
    
    
    $("#tablaPedidoProducto").html(codigoHTML);
    activadorEventosVendedores();
}



//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCIONE PARA BUSCAR AL CLIENTE EN LA SECCION *********************
//*************  DE LOS PEDIDOS                                *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function confirmBuscarCliente()
{
    var codigoHTML='<div class="encabezado2">Buscar Cliente</div>'+
                     '<div id="Cliente" class="tab_content">'+
                     '<form id="form_buscar_clientes_pedidos" >'+
                              '<br>'+
                              '<fieldset><legend>Datos Generales</legend>'+
                              '<table align="center">'+                              
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nit</th>'+
                                    '<td>'+
                                      '<input type="text" name="id_cliente" value="" size="5" />'+                                      
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td>'+
                                      '<input type="text" name="nomAutoriza" value=""/>'+
                                    '</td>'+                                    
                                      '</tr>'+
                                      '<tr>'+
                                      '<th align="right" style="padding-right:5px;">Telefono</th>'+
                                    '<td>'+
                                      '<input type="text" name="telefono" value=""/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Direccion</th>'+
                                    '<td>'+
                                      '<input type="text" name="celAutoriza" value=""/>'+
                                    '</td>'+                 
                                  '</tr>'+
                                  '<tr>'+           
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                     '<td>'+
                                         '<select name="cod_departamento" class="deptos" style="width:160px;" onchange="cargarMunicipios()">'+                      
                                         '</select>'+
                                      '</td>'+
                                      '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                       '<td>'+
                                        '<select name="codMunicipio" style="width:160px;" class="municipios">'+
                                           '<option value="null"></option>'+
                                        '</select>'+ 
                                      '</td>'+                                    
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Telefono fijo</th>'+
                                    '<td>'+
                                      '<input type="text" name="telAutoriza" value=""/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                  '<td>'+
                                      '<input type="text" name="celAutoriza" value=""/>'+
                                    '</td>'+                                    
                                  '</tr>'+
                                  '<th align="right" style="padding-right:5px;">Cargo</th>'+
                                    '<td>'+
                                      '<input type="text" name="cargoAutoriza" value=""/>'+
                                    '</td>'+
                                  
                              '</table>'+
                              '<table align="center">'+
                            '<tr>'+
                                '<td colspan="4" align="center">'+
                                   '<input type="submit" value="Buscar" class="button"/>'+
                                   '<input type="reset" value="Limpiar" class="button"/>'+
                                   '<input type="reset" class="button" value="Volver" id="NotAddProducto"/>'+
                                '</td>'+
                             '</tr>'+    
                          '</table>'+ 
                          '</form>'+                            
                              '</fieldset>'+                              
                              '<fieldset><legend>Resultado</legend>'+
                               '<table class="tbonita" align="center" id="TablaClientePedido">'+                                   
                                  '<tr align="left">'+
                                    '<th colspan="1"></th>'+
                                    '<th>NIT</th>'+
                                    '<th>Razón Social</th>'+
                                    '<th>Dirección</th>'+
                                    '<th>Telefono</th>'+                                
                                  '</tr>'+                      
                              '</table>'+                              
                              '</fieldset>'+                                
                          '</div>'+
                          '</div>'+
                          '<br>'+                 
                        '</form>'+                      
                    '</div>';
                
    $("#overAddProducto").css({display: "block"});
    $("#overAddProducto").html(codigoHTML);
    $("#fadeAddProducto").css({display: "block"});
    listadoDepartamentos();
    if (TablaClientePedido != null)
    {
        AdicionarBusquedaPedidosClientes(TablaClientePedido);
    }
    $(this).addClass("active");
    $("#form_buscar_clientes_pedidos").submit(enviarDatosBuscarPedidosCliente);    
    activadorEventosVendedores();
    activadorEventosClientes();
}



function enviarDatosBuscarPedidosCliente(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    var request = {"Vendedores":"BuscarClientes","Datos":datos};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonArray)
                    {
                        AdicionarBusquedaPedidosClientes(jsonArray);
                    },
                    error: function()
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

function AdicionarBusquedaPedidosClientes(jsonArray)
{
   var codigoHTML=                '<tr align="left">'+                                
                                    '<th colspan="1"></th>'+
                                    '<th>NIT</th>'+
                                    '<th>Razón Social</th>'+
                                    '<th>Dirección</th>'+
                                    '<th>Telefono</th>'+
                                  '</tr>';

                    for (var i = 0; i < jsonArray.length; i++)
                    {
                            if (i % 2 == 0)
                                codigoHTML+=      '<tr>';
                           else
                                codigoHTML+=      '<tr class="even">';
                    codigoHTML+=                          '<td><input class="checkCliente" type="checkbox" name="checkbox" id="' + jsonArray[i].id_cliente + '"></td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].id_cliente + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].razon_social + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].direccion + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].telefono + '</td>';
                    codigoHTML+=                  '</tr>';

                    }
                    
    $("#TablaClientePedido").html(codigoHTML); 
    $(".checkCliente").click(checkVerCliente);    
    activadorEventosClientes();
}

function checkVerCliente()
{
    HideConfirmAddProducto();
    var id = $(this)[0].id;
    var request = {"Vendedores":"DatosCheckCliente","id_cliente":id};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerCheckCliente(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
               });
}

function VerCheckCliente(jsonObject)
{
    
   var codigoHTML = '<div class="encabezado2">Agregar Pedido</div>'+
                     //'<div id="Cliente" class="tab_content">'+
                              '<br>'+
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Pedido</th>'+
                                    '<td>'+
                                      '<input type="text" name="id" value="" size="5" readonly="readonly"/>'+                                      
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input id="date_field6" type="text" name="fecha" value="" size="10"/>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                              '<br>'+
                              '<br>'+
                              '<fieldset><legend>Datos Generales</legend>'+
                              '<table align="center">'+                              
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id Cliente</th>'+
                                    '<td>'+
                                      '<input type="text" name="nit" value="' + jsonObject.id_cliente+ '" size="5" readonly="readonly"/>'+
                                      '<img src="images/b_search.png" title="Buscar" class="buscarCliente">'+
                                    '</td>'+                                    
                                  '</tr>'+
                                  '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td>'+
                                      '<input type="text" name="nombres_cliente"  value="' + jsonObject.nombre + '" readonly="readonly"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Apellido</th>'+
                                    '<td>'+
                                      '<input type="text" name="apellido_cliente" value="' + jsonObject.apellido + '" readonly="readonly"/>'+
                                    '</td>'+                                     
                                  '</tr>'+
                                  '<tr>'+           
                                  '</tr>'+
                                  '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Telefono fijo</th>'+
                                    '<td>'+
                                      '<input type="text" name="telefono_cliente" value="' + jsonObject.telefono + '"  readonly="readonly"/>'+                          
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td>'+
                                      '<input type="text" name="celular_cliente" value="' + jsonObject.celular + '"  readonly="readonly"/>'+
                                    '</td>'+                                    
                                  '</tr>'+
                                  '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                    '<td>'+
                                      '<input type="text" name="departamento_cliente" value="' + jsonObject.nombre_depto + '" readonly="readonly"/>'+
                                    '</td>'+
                                    '<th align="center" style="padding-right:5px;">Ciudad</th>'+
                                  '<td>'+
                                      '<input type="text" name="municipio_cliente" value="' + jsonObject.NombreMunicipio + '" readonly="readonly"/>'+
                                    '</td>'+                                    
                                  '</tr>'+                                  
                                  '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td colspan="2">'+
                                      '<input type="text" name="direccion_cliente"  value="' + jsonObject.direccion + '"  size="30" readonly="readonly" />'+
                                    '</td>'+                                 
                              '</table>'+
                              '</fieldset>'+                              
                              '<fieldset><legend>Productos</legend>'+
                              '<table class="tbonita" align="center" id="TablaCheckProducto">'+ 
                                  '<tr>'+
                                     '<td colspan="4" align="center">'+
                                        '<input type="submit" value="Adicionar Fila" class="button" id="buscarProducto"/>'+
                                        '<input type="submit" value="Eliminar Fila" class="button"/>'+
                                     '</td>'+
                                  '</tr>'+ 
                                  '<tr align="left">'+                            
                                         '<th colspan="1"></th>'+
                                         '<th>C</th>'+
                                         '<th>Nombre</th>'+
                                         '<th>Cantidad</th>'+
                                         '<th>Color</th>'+
                                         '<th>Talla</th>'+
                                         '<th>Precio C/U</th>'+
                                        '</tr>'+
                                '</table>'+ 
                              '</table>'+
                              '</fieldset>'+                                                    
                          '</div>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                              '<tr>'+
                                '<th align="right" style="padding-right:5px;">Total sin IVA</th>'+
                                '<td><input type="text" name="totalSinIva" value="2500000" readonly="readonly"/></td>'+
                                '<th align="right" style="padding-right:5px;">IVA</th>'+
                                '<td><input type="text" name="iva" value="100000" size="20" maxlength="35" readonly="readonly" /></td>'+
                              '</tr>'+
                              '<tr>'+
                                '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">Total de la Compra</th>'+
                                '<td colspan="2"><input type="text" name="totalSinIva" value="2600000" readonly="readonly" style="padding-right:5px; font-weight: bold; font-size: 20px;"/></td>'+
                              '</tr>'+
                          '</table>'+
                          '<table align="center">'+
                            '<tr>'+
                                '<td colspan="4" align="center">'+
                                   '<input type="submit" value="Guardar" class="button" />'+
                                   '<input type="reset" value="Limpiar" class="button"/>'+
                                   '<input type="submit" value="Volver" class="button" />'+
                                '</td>'+
                             '</tr>'+    
                          '</table>'+     
                        '</form>'+
                    '</div>';



    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#pedidoVendedor").addClass("active");    
    IniciarTabers();
    $('#date_field').datepick({yearRange: '1980:2050'});
    $('#date_field').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field2').datepick({yearRange: '1980:2050'});
    $('#date_field2').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field3').datepick({yearRange: '1980:2050'});
    $('#date_field4').datepick({yearRange: '1980:2050'});
    $('#date_field5').datepick({yearRange: '1980:2050'});
    $('#date_field6').datepick({yearRange: '1980:2050'});
    $('#date_field6').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_cargar_datos_pedidos").submit(enviarDatosBuscarPedidosCliente);    
    //$("#form_buscar_Pedido").submit(buscarPedido);
    //$("#form_buscar_Pedido_cliente").submit(buscarPedidoCliente);
    //$("#form_buscar_Pedido_Productos").submit(enviarDatosBuscarProducto);   
    activadorEventosVendedores();
    activadorEventosClientes();
  
}


function confirmBuscarProducto()
{
    var codigoHTML='<div class="encabezado2">Buscar Producto</div>'+
                     '<div id="Cliente" class="tab_content">'+
                     '<form id="form_buscar_producto_pedido">'+
                              '<br>'+
                              '<fieldset><legend>Datos Generales</legend>'+
                              '<table align="center">'+                              
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Linea de Produccion</th>'+
                                    '<td>'+
                                      '<input type="text" name="lineaProduccion" value=""/>'+                                      
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Nombre Producto</th>'+
                                    '<td>'+
                                      '<input type="text" name="tipoProducto" value=""/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Material</th>'+
                                    '<td>'+
                                      '<input type="text" name="materiales" value="" />'+
                                    '</td>'+                                   
                              '</table>'+
                              '<table align="center">'+
                            '<tr>'+
                                '<td colspan="4" align="center">'+
                                   '<input type="submit" value="Buscar" class="button"/>'+
                                   '<input type="reset" value="Limpiar" class="button"/>'+
                                   '<input type="button" class="button" value="Volver" id="NotAddProducto"/>'+
                                '</td>'+
                             '</tr>'+    
                          '</table>'+  
                              '</fieldset>'+                              
                              '<fieldset><legend>Resultado</legend>'+
                               '<table class="tbonita" align="center" id="TablaProductosPedidos">'+                                   
                                 '<tr align="left">'+                            
                                    '<th colspan="1"></th>'+
                                    '<th>Codigo</th>'+
                                    '<th>Nombre</th>'+
                                    '<th>Cantidad</th>'+
                                    '<th>Color</th>'+
                                    '<th>Talla</th>'+
                                    '<th>Precio C/U</th>'+                                 
                                  '</tr>'+                          
                                '</table>'+ 
                              '</table>'+                              
                              '</fieldset>'+                             
                          '</div>'+
                          '</div>'+
                          '<br>'+                                                   
                         '</form>'+
                    '</div>';


    $("#overAddProducto").css({display: "block"});    
    $("#overAddProducto").html(codigoHTML);
    $("#fadeAddProducto").css({display: "block"});
    if(TablaProductosPedidos != null)
    {
        AdicionarBusquedaPedidosProductos(TablaProductosPedidos);
    }  
    $("#form_buscar_producto_pedido").submit(enviarDatosBuscarPedidosProductos);
    activadorEventosVendedores();
    activadorEventosProductos();
}

function enviarDatosBuscarPedidosProductos(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    var request = {"Vendedores":"BuscarProductos","Datos":datos};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonArray)
                    {
                        AdicionarBusquedaPedidosProductos(jsonArray);
                    },
                    error: function()
                    {
                        alert('Error al conectar con el servidor');
                    }
                });    
}


function AdicionarBusquedaPedidosProductos(jsonArray)
{
    
    var codigoHTML =                     '<tr align="left">'+                            
                                         '<th colspan="1"></th>'+
                                         '<th>Codigo</th>'+
                                         '<th>Nombre</th>'+
                                         '<th>Cantidad</th>'+
                                         '<th>Color</th>'+
                                         '<th>Talla</th>'+
                                         '<th>Precio C/U</th>'+
                                        '</tr>';

                for (var i = 0; i < jsonArray.length; i++)
                {
                            if (i % 2 == 0)
                                codigoHTML+=      '<tr>';
                           else
                                codigoHTML+=      '<tr class="even">';
                    
                    //codigoHTML+=                        '<td colspan="1"><img src="images/b_search.png" title="Visualizar" class="VerProducto" id="' + jsonArray[i].codigo_producto + '" /></td>';
                    codigoHTML+=                          '<td><input type="checkbox" class="checkProducto" name="checkboxproducto" id="' + jsonArray[i].codigo_producto + '"></td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].codigo_producto + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].nombre + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].cantidad + '</td>';  
                    codigoHTML+=                          '<td>' + jsonArray[i].color + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].talla + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].precio_venta + '</td>'; 
                    codigoHTML+=                  '</tr>';

                }              
    
   $("#TablaProductosPedidos").html(codigoHTML);   
   $(".checkProducto").click(checkVerProducto);    
   activadorEventosProductos();
    
}

function checkVerProducto()
{
    HideConfirmAddProducto();
    var id = $(this)[0].id;
    var request = {"Vendedores":"DatosCheckProducto","codigo_producto":id};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        VerCheckProducto(jsonArray);     
                    },
                    error: function() 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
               });
}

function VerCheckProducto(jsonArray)
{
 var codigoHTML =                     '<tr>'+
                                       '<td colspan="4" align="center">'+
                                         '<input type="submit" value="Adicionar Fila" class="button" id="buscarProducto"/>'+
                                         '<input type="submit" value="Eliminar Fila" class="button"/>'+
                                       '</td>'+
                                      '</tr>'+
                                       '<tr align="left">'+                            
                                         '<th colspan="1"></th>'+
                                         '<th>C</th>'+
                                         '<th>Nombre</th>'+
                                         '<th>Cantidad</th>'+
                                         '<th>Color</th>'+
                                         '<th>Talla</th>'+
                                         '<th>Precio C/U</th>'+
                                        '</tr>';

                for (var i = 0; i < jsonArray.length; i++)
                {
                            if (i % 2 == 0)
                                codigoHTML+=      '<tr>';
                           else
                                codigoHTML+=      '<tr class="even">';
                            
                    
                    //codigoHTML+=                        '<td colspan="1"><img src="images/b_search.png" title="Visualizar" class="VerProducto" id="' + jsonArray[i].codigo_producto + '" /></td>';
                    //codigoHTML+=                          '<td><input id="' + jsonArray[i].codigo_producto + '"></td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].codigo_producto + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].nombre + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].cantidad + '</td>';  
                    codigoHTML+=                          '<td>' + jsonArray[i].color + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].talla + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].precio_venta + '</td>'; 
                    codigoHTML+=                  '</tr>';

                } 
        
    $("#TablaCheckProducto").html(codigoHTML);
    activadorEventosVendedores();
    activadorEventosClientes();
    
}
            
  



function SerializeToJson(form)
{
    var o = {};
    var a = form;
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}



//**********************************************************************************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DE ADICIONAR PEDIDO        *********************
//**********************************************************************************

function AddPedido()
{
    var codigoHTML = '<div class="encabezado2">Agregar Pedido</div>'+
                     //'<div id="Cliente" class="tab_content">'+
                              '<br>'+
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Pedido</th>'+
                                    '<td>'+
                                      '<input type="text" name="id" value="" size="5" readonly="readonly"/>'+                                      
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input id="date_field6" type="text" name="fecha" value="" size="10"/>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                              '<br>'+
                              '<br>'+
                              '<fieldset><legend>Datos Generales</legend>'+
                              '<table align="center">'+                              
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id Cliente</th>'+
                                    '<td>'+
                                      '<input type="text" name="nit" value="" size="5" readonly="readonly"/>'+
                                      '<img src="images/b_search.png" title="Buscar" class="buscarCliente">'+
                                    '</td>'+                                    
                                  '</tr>'+
                                  '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td>'+
                                      '<input type="text" name="nombres_cliente"  value="" />'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Apellido</th>'+
                                    '<td>'+
                                      '<input type="text" name="apellido_cliente" value="" />'+
                                    '</td>'+                                     
                                  '</tr>'+
                                  '<tr>'+           
                                  '</tr>'+
                                  '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Telefono fijo</th>'+
                                    '<td>'+
                                      '<input type="text" name="telefono_cliente" value=""/>'+                          
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td>'+
                                      '<input type="text" name="celular_cliente" value=""/>'+
                                    '</td>'+                                    
                                  '</tr>'+
                                  '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                    '<td>'+
                                      '<input type="text" name="departamento_cliente" value=""/>'+
                                    '</td>'+
                                    '<th align="center" style="padding-right:5px;">Ciudad</th>'+
                                  '<td>'+
                                      '<input type="text" name="municipio_cliente" value="" />'+
                                    '</td>'+                                    
                                  '</tr>'+
                                  '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td colspan="2">'+
                                      '<input type="text" name="direccion_cliente"  value="" size="30"  />'+
                                    '</td>'+                                 
                              '</table>'+
                              '</fieldset>'+                              
                              '<fieldset><legend>Productos</legend>'+
                              '<table class="tbonita" align="center" id="TablaCheckProducto">'+ 
                                  '<tr>'+
                                     '<td colspan="4" align="center">'+
                                        '<input type="submit" value="Adicionar Fila" class="button" id="buscarProducto"/>'+
                                        '<input type="submit" value="Eliminar Fila" class="button"/>'+
                                     '</td>'+
                                  '</tr>'+                                
                                  '<tr align="left">'+                            
                                         '<th colspan="1"></th>'+
                                         '<th>Codigo</th>'+
                                         '<th>Nombre</th>'+
                                         '<th>Cantidad</th>'+
                                         '<th>Color</th>'+
                                         '<th>Talla</th>'+
                                         '<th>Precio C/U</th>'+
                                        '</tr>'+                       
                                '</table>'+ 
                              '</table>'+
                              '</fieldset>'+                                                    
                          '</div>'+
                          '</div>'+
                          '<br>'+                                                                                                                                                                                                                       
                          '<table align="center">'+
                              '<tr>'+
                                '<th align="right" style="padding-right:5px;">Total sin IVA</th>'+
                                '<td><input type="text" name="totalSinIva" value="2500000" readonly="readonly"/></td>'+
                                '<th align="right" style="padding-right:5px;">IVA</th>'+
                                '<td><input type="text" name="iva" value="100000" size="20" maxlength="35" readonly="readonly" /></td>'+
                              '</tr>'+
                              '<tr>'+
                                '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">Total de la Compra</th>'+
                                '<td colspan="2"><input type="text" name="totalSinIva" value="2600000" readonly="readonly" style="padding-right:5px; font-weight: bold; font-size: 20px;"/></td>'+
                              '</tr>'+
                          '</table>'+
                          '<table align="center">'+
                            '<tr>'+
                                '<td colspan="4" align="center">'+
                                   '<input type="submit" value="Guardar" class="button" />'+
                                   '<input type="reset" value="Limpiar" class="button"/>'+
                                   '<input type="reset" value="Volver" class="button"/>'+
                                '</td>'+
                             '</tr>'+    
                          '</table>'+     
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#pedidoVendedor").addClass("active");
    if(TablaPedidos != null)
    {
        tablaPedido(TablaPedidos);
    }
    IniciarTabers();
    $('#date_field').datepick({yearRange: '1980:2050'});
    $('#date_field').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field2').datepick({yearRange: '1980:2050'});
    $('#date_field2').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field3').datepick({yearRange: '1980:2050'});
    $('#date_field4').datepick({yearRange: '1980:2050'});
    $('#date_field5').datepick({yearRange: '1980:2050'});
    $('#date_field6').datepick({yearRange: '1980:2050'});
    $('#date_field6').datepick('option', {dateFormat: $.datepick.ATOM});
    //$("#form_buscar_Pedido").submit(buscarPedido);
    //$("#form_buscar_Pedido_cliente").submit(buscarPedidoCliente);
    //$("#form_buscar_Pedido_Productos").submit(enviarDatosBuscarProducto); 
    activadorEventosVendedores(); 
}




function ConfirmAddProducto()
{
    var codigoHTML='<div class="encabezado2">Adicionar Producto</div>'+
                    '<br>'+
                    '<form>'+
                    '<table align="center">'+
                        '<tr>'+                                    
                            '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+ 
                               '<td>'+
                                '<select name="linea_produccion" style="width:177px">'+ 
                                    '<option value="LI">Linea Industrial</option>'+ 
                                    '<option value="LM">Linea Motociclista</option>'+ 
                                    '<option value="LH">Linea Hogar</option>'+ 
                                    '<option value="LF">Linea Infantil</option>'+ 
                                  '</select>'+ 
                            '</td>'+  

                            '<th align="right" style="padding-right:5px;">Material</th>'+ 
                                '<td>'+ 
                                  '<select name="material_producto" style="width:177px">'+ 
                                    '<option value="LI">Econoflex</option>'+ 
                                    '<option value="LM">Greenflex</option>'+ 
                                    '<option value="LH">Natuflex</option>'+ 
                                    '<option value="LF">Oxiflex</option>'+ 
                                    '<option value="LF">Poliester PVC</option>'+ 
                                    '<option value="LF">PVC Poliester PVC</option>'+ 
                                  '</select>'+ 
                            '</td>'+                            
                        '</tr>'+
                        
                        '<tr>'+
                        '<th align="right" style="padding-right:5px;">Tipo Producto</th>'+ 
                        '<td>'+ 
                          '<select name="tipo_producto" style="width:177px">'+ 
                            '<option value="LI">Abrigos</option>'+ 
                            '<option value="LM">Capas</option>'+ 
                            '<option value="LH">Pantalón y Vestido</option>'+ 
                            '<option value="LF">Gabardinas</option>'+ 
                          '</select>'+ 
                        '</td>'+                        
                          '<th align="right" style="padding-right:5px;">Codigo</th>'+
                          '<td>'+
                            '<input type="text" name="codigo_producto" value="" />'+
                          '</td>'+
                          '</tr>'+
                          '<tr>'+
                          '<th align="right" style="padding-right:5px;">Nombre</th>'+
                          '<td>'+
                            '<input type="text" name="nombre_producto" value=""/>'+
                          '</td>'+
                        '</tr>'+                      
                        '<tr>'+
                          '<td colspan="4" align="center"><br>'+
                            '<input type="button" value="Buscar" class="button" /<br>'+                          
                            '<input type="reset" value="Limpiar" class="button" /<br>'+
                          '</td>'+
                        '</tr>'+                    
                        '<tr>'+
                          '<th colspan="2" align="left" style="padding-right:5px; font-weight: bold; font-size: 18px;"><br>'+
                            'RESULTADO DE LA BUSQUEDA:'+
                          '</th>'+
                        '</tr>'+                     
                    '</table>'+
                    '</form>'+
                    '<table align="center" border="0" class="tbonita" ">'+
                          '<tr align="left">'+ 
                            '<th></th>'+                        
                            '<th>Codigo</th>'+
                            '<th>Nombre</th>'+
                            '<th>Cantidad</th>'+
                            '<th>Color</th>'+
                            '<th>Talla</th>'+
                            '<th>Precio C/U</th>'+
                          '</tr>'+
                 
                          '<tr>'+
                            '<td><input type="checkbox" name="opcion" value="seleccion"></td>'+                          
                            '<td>12125</td>'+
                            '<td>vestido Motociclista</td>'+
                            '<td>50</td>'+
                            '<td>Amarillo</td>'+
                            '<td>XL</td>'+
                            '<td>50000</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><input type="checkbox" name="opcion" value="seleccion"></td>'+                           
                            '<td>12125</td>'+
                            '<td>vestido Motociclista</td>'+
                            '<td>50</td>'+
                            '<td>Amarillo</td>'+
                            '<td>L</td>'+
                            '<td>40000</td>'+
                          '</tr>'+

                          '<tr>'+ 
                            '<td><input type="checkbox" name="opcion" value="seleccion"></td>'+                          
                            '<td>12125</td>'+
                            '<td>vestido Motociclista</td>'+
                            '<td>50</td>'+
                            '<td>Amarillo</td>'+
                            '<td>XL</td>'+
                            '<td>50000</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><input type="checkbox" name="opcion" value="seleccion"></td>'+                          
                            '<td>12125</td>'+
                            '<td>vestido Motociclista</td>'+
                            '<td>50</td>'+
                            '<td>Amarillo</td>'+
                            '<td>XL</td>'+
                            '<td>50000</td>'+
                          '</tr>'+                       
                    '</table>'+

                    '<br>'+
                    '<table align="center">'+
                      '<tr>'+
                        '<td colspan="4" align="center">'+
                            '<input type="button" value="Aceptar" class="button" id="OkAddProducto"/>'+
                            '<input type="button" value="cancelar" class="button" id="NotAddProducto"/>'+
                        '</td>'+
                      '</tr>'+
                    '</table>'+               
                '</div>';

    $("#overAddProducto").css({display: "block"});
    $("#overAddProducto").html(codigoHTML);
    $("#fadeAddProducto").css({display: "block"});
    activadorEventosVendedores();
}

function HideConfirmAddProducto()
{
    $("#overAddProducto").css({display: "none"});
    $("#fadeAddProducto").css({display: "none"});
    activadorEventosVendedores();  
}


function DatosVerPedido()
{
    var id = $(this)[0].id;
    var request = {"Vendedores":"DatosPedido","id_pedido":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerPedido(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletComercial');
                    }
               });
}

function VerPedido()
{
    var codigoHTML = '<div class="encabezado2">Datos Pedido</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Prod">Productos</a></li>'+
                            '<li><a href="#Cliente">Cliente</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Prod" class="tab_content">'+
                            '<form action="" method="POST" name="form_crear_Pedido">'+
                              '<table align="left" border="0" align="left">'+
                                  '<tr colspan="4">'+
                                    '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+
                                    '<td>'+
                                      '<input type="text" value="Linea Industrial" readonly="readonly" />'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Material</th>'+
                                    '<td>'+
                                      '<input type="text" value="Ecoflex" readonly="readonly" />'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Tipo Producto</th>'+
                                    '<td>'+
                                      '<input type="text" value="Abrigos" readosnly="readonly" />'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+ 
                              'LISTADO DE PRODUCTOS:'+
                              '<table class="tbonita">'+
                                  '<tr align="right">'+
                                    '<th>Codigo</th>'+
                                    '<th>Nombre</th>'+
                                    '<th>Cantidad</th>'+
                                    '<th>Color</th>'+
                                    '<th>Talla</th>'+
                                    '<th>Total</th>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td style="text-align: center;">11111</td>'+
                                    '<td>vestido Motociclista</td>'+
                                    '<td style="text-align: center;">3</td>'+
                                    '<td>Amarillo</td>'+
                                    '<td style="text-align: center;">XL</td>'+
                                    '<td style="text-align: center;">150000</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td style="text-align: center;">11111</td>'+
                                    '<td>vestido Motociclista</td>'+
                                    '<td style="text-align: center;">3</td>'+
                                    '<td>Amarillo</td>'+
                                    '<td style="text-align: center;">XL</td>'+
                                    '<td style="text-align: center;">150000</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td style="text-align: center;">11111</td>'+
                                    '<td>vestido Motociclista</td>'+
                                    '<td style="text-align: center;">1</td>'+
                                    '<td>Amarillo</td>'+
                                    '<td style="text-align: center;">XL</td>'+
                                    '<td style="text-align: center;">100000</td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            
                            
                            '<div id="Cliente" class="tab_content">'+
                              '<br>'+
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">NIT</th>'+
                                     '<td>'+
                                       '<input type="text" name="nit" value="123456" readonly="readonly"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Razón Social</th>'+
                                    '<td>'+
                                      '<input type="text" name="razonSocial" value="Indu Motos S.A." readonly="readonly"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                    '<td>'+
                                      '<input type="text" name="ciudad" value="Medellin" readonly="readonly"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td>'+
                                      '<input type="text" name="dir" value="Calle 80 #12-50" readonly="readonly"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Telefono</th>'+
                                    '<td>'+
                                      '<input type="text" name="telefono" value="3252324" readonly="readonly"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th colspan="2" align="left" style="padding-right:5px; font-weight: bold; font-size: 15px;"><br>'+
                                      'DATOS DE QUIEN AUTORIZA:'+
                                    '</th>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td>'+
                                      '<input type="text" name="nomAutoriza" value="Pedro Perez" readonly="readonly"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Cargo</th>'+
                                    '<td>'+
                                      '<input type="text" name="cargoAutoriza" value="Jefe de Compras" readonly="readonly"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Telefono fijo</th>'+
                                    '<td>'+
                                      '<input type="text" name="telAutoriza" value="3122324" readonly="readonly"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td>'+
                                      '<input type="text" name="celAutoriza" value="310456789" readonly="readonly"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left"><br>'+
                                    'Otros datos:<br />'+
                                      '<textarea name="mensaje" cols="60" rows="4" readonly="readonly">Entregar maximo en 10 dias</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                              '<tr>'+
                                '<th align="right" style="padding-right:5px;">Total sin IVA</th>'+
                                '<td><input type="text" name="totalSinIva" value="2500000" readonly="readonly"/></td>'+
                                '<th align="right" style="padding-right:5px;">IVA</th>'+
                                '<td><input type="text" name="iva" value="100000" size="20" maxlength="35" readonly="readonly" /></td>'+
                              '</tr>'+
                              '<tr>'+
                                '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">Total de la Compra</th>'+
                                '<td colspan="2"><input type="text" name="totalSinIva" value="2600000" readonly="readonly" style="padding-right:5px; font-weight: bold; font-size: 20px;"/></td>'+
                              '</tr>'+
                          '</table>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="reset" value="Volver" class="button" id="volverPedido"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table>'+     
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabersAnidados();
    activadorEventosVendedores();
}

function ConfirmDelPedido()
{
    var codigoHTML = '<div class="encabezado2">Borrar Pedido</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea borrar la Pedido?</th>'+
                            '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Si" class="button" id="OkDelPedido"/>'+
                                '<input type="button" value="No" class="button" id="NotDelPedido"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosVendedores();
}

function HideConfirmDelPedido()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosVendedores();  
}

//**********************************************************************************

function seccionActividades()
{
    var codigoHTML = '<div class="encabezado2">Listado de Actividades</div>'+
                     '<div class="tabla">'+
                        '<form action="" method="POST" id="form_buscar_Actividad">'+
                            '<table align="center" border="0" align="left">'+
                                '<tr>'+                                   
                                    '<th align="right" style="padding-right:5px;">Tipo Actividad</th>'+
                                    '<td>'+
                                        '<select name="tipoActividad" style="width:160px;">'+                                           
                                            '<option value="Visitas">Visitas</option>'+
                                            '<option value="Recaudos">Recaudos</option>'+
                                            '<option value="Quejas">Quejas</option>'+
                                        '</select>'+
                                    '</td>'+
                                    '<div id="campos"><div>'+
                                '</tr>'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Inicial</th>'+
                                    '<td>'+
                                      '<input id="date_field7" type="text" name="fechaInicio" value=""/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Final</th>'+
                                    '<td>'+
                                      '<input id="date_field8" type="text" name="fechaFin" value=""/>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td colspan="4" align="center"><br>'+
                                      '<input type="submit" value="Buscar" class="button" />'+
                                    '</td>'+
                                '</tr>'+
                            '</table>'+
                        '</form>'+
                        '<br>'+
                        '<table class="tbonita" align="center" id="tablaActividades">'+
                          '<tr align="left">'+
                            '<th colspan="1"><img src="images/b_insrow.png" title="agregar" class="addActividad"/></th>'+
                            '<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
                            '<th>IdAct.</th>'+
                            '<th>Fecha</th>'+
                            '<th>Cliente</th>'+
                            '<th>Departamento</th>'+
                            '<th>Cuidad</th>'+
                            '<th>Tema</th>'+
                          '</tr>'+                
                        '</table>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
    $('#date_field7').datepick({yearRange: '1980:2050'});
    $('#date_field8').datepick({yearRange: '1980:2050'});
     $("#form_buscar_Actividad").submit(buscarActividad);
    activadorEventosVendedores();
    //activadorEventosClientes();
}



function buscarActividad(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"BuscarActividades","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonArray)
                    {
                        tablaActividad(jsonArray);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

function tablaActividad(jsonArray)
{
    //TablaViaticos = jsonArray;
    
    var codigoHTML = '<tr align="left">'+
                        '<th colspan="1"><img src="images/b_insrow.png" title="agregar" class="addActividad"/></th>'+
                        '<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
                        '<th>Id</th>'+
                        '<th>Fecha</th>'+
                        '<th>Cliente</th>'+
                        '<th>Departamento</th>'+
                        '<th>Cuidad</th>'+
                        '<th>Tema</th>'+
                      '</tr>';
      
    var i;
    for (i = 0; i < jsonArray.length-1; i++)
    {
        if (i % 2 == 0)
                codigoHTML+=      '<tr>';
        else
                codigoHTML+=      '<tr class="even">';
        codigoHTML+=                          '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerVisita" id="' + jsonArray[i].id_visita + '" /></td>';
        codigoHTML+=                          '<td>' + jsonArray[i].id_visita + '</td>';
        codigoHTML+=                          '<td>' + jsonArray[i].fecha + '</td>';
        codigoHTML+=                          '<td>' + jsonArray[i].id_cliente + '</td>';  
        codigoHTML+=                          '<td>' + jsonArray[i].nombre_depto + '</td>'; 
        codigoHTML+=                          '<td>' + jsonArray[i].NombreMunicipio + '</td>';   
        codigoHTML+=                          '<td>' + jsonArray[i].descripcion + '</td>';   
        codigoHTML+=                  '</tr>';
            
    }    
   
    $("#tablaActividades").html(codigoHTML);
    activadorEventosClientes();
    activadorEventosVendedores();
}


/*function ConfirmAddActividad()
{
    var id = $(this)[0].id;
    var request = {"Vendedores":"CargarDatosAddVisita","id_cliente":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        AddActividad(jsonObject); 
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
               });  
}*/


function AddActividades()
{
    var codigoHTML= '<div class="encabezado2">Adicionar Actividad</div>'+
                    '<form id="form_crear_actividad" enctype="multipart/form-data">'+
                    '<br>'+
                    '<table align="center">'+
                     '<tbody id="campos">'+
                        '<tr>'+                                   
                            '<th align="right" style="padding-right:5px;">Tipo Actividad</th>'+
                            '<td>'+
                                '<select name="tipoActividad" style="width:180px;"  onChange="addcampos(this.value)">'+ 
                                    '<option value="0">Seleccione La Actividad</option>'+
                                    '<option value="1">Visitas</option>'+
                                    '<option value="2">Recaudos</option>'+
                                    '<option value="3">Quejas</option>'+
                                '</select>'+
                            '</td>'+                           
                        '</tr>'+
                     '</tbody>'+                     
                    '</table>'+ 
                    '<br>'+                    
                    '</form>'+
                '</div>';
    
    $("#overAddProducto").css({display: "block"});
    $("#overAddProducto").html(codigoHTML);
    $("#fadeAddProducto").css({display: "block"});
    $('#date_field29').datepick({yearRange: '1980:2050'});
    $('#date_field29').datepick('option', {dateFormat: $.datepick.ATOM});
    listadoDepartamentos();
    $("#form_crear_actividad").submit(crearActividadVisita);  
    activadorEventosClientes();
    activadorEventosVendedores();
}

/*function addCampo()
{
  alert("ddd");
 
}*/
function addcampos(A)
{
    var codigoHTML;
    if(A==1)
    {
       codigoHTML=  '<div>'+
           '<form enctype="multipart/form-data">'+
                     '<tr>'+
                          '<th align="right" style="padding-right:5px;">Id visita</th>'+
                          '<td>'+
                            '<input type="text" name="id" value="" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input id="date_field32" type="text" name="fecha" value="" style="font-size:14px;"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="razonSocial" value="" />'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="id_usuario" value="" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<select name="cod_departamento" class="deptos" style="width:160px;" onchange="cargarMunicipios()">'+                      
                            '</select>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                             '<select name="codMunicipio" style="width:160px;" class="municipios">'+
                                 '<option value="null"></option>'+
                             '</select>'+ 
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="id_cliente" value=""/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono" value=""/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td colspan="4" align="left">'+
                              'Descripcion:<br>'+
                              '<textarea name="descripcion" cols="67" rows="6"></textarea>'+
                            '</td>'+
                        '</tr>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="submit" value="Aceptar" class="button" id="OkAddActividad"/>'+
                                  '<input type="button" value="Cancelar" class="button" id="NotAddProducto"/>'+ 
                                  '<input type="button" value="Atras" class="button" onclick="AddActividades()"/>'+ 
                              '</td>'+
                            '</tr>'+
                      '</table>'+
                     '</form>'+
                     '</div>';
    $('#date_field32').datepick({yearRange: '1980:2050'}); 
    $('#date_field32').datepick('option', {dateFormat: $.datepick.ATOM});
    
    }  
    
    else if(A==2)
    {
         codigoHTML=  '<form>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Id Recaudo</th>'+
                          '<td>'+
                            '<input type="text" name="id" value="" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input id="date_field29" type="text" name="fecha" value="" style="font-size:14px;"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="razonSocial" value="" />'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="id_usuario" value="" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<select name="cod_departamento" class="deptos" style="width:160px;" onchange="cargarMunicipios()">'+                      
                            '</select>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                             '<select name="codMunicipio" style="width:160px;" class="municipios">'+
                                 '<option value="null"></option>'+
                             '</select>'+ 
                          '</td>'+                        
                        '<tr>'+
                          '<th align="right" colspan="0" style="padding-right:5px;">Estado Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="debe" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" colspan="0" style="padding-right:5px;">Valor $</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="150000" readonly="readonly"/>'+
                          '</td>'+                          
                          '</tr>'+
                          '<th align="right" colspan="0" style="padding-right:5px;">Tipo de Pago</th>'+
                          '<td>'+
                            '<input type="text" name="tipo_de_pago" value=""/>'+
                          '</td>'+
                          '<th align="right" colspan="0" style="padding-right:5px;">Numero de Factura</th>'+
                          '<td>'+
                            '<input type="text" name="numero_de_factura" value=""/>'+
                          '</td>'+
                          '<tr>'+
                          '<th align="right" colspan="2" style="padding-right:5px;">Forma de Pago</th>'+
                          '<td>'+
                            '<input type="text" name="forma_de_pago" value=""/>'+
                          '</tr>'+                          
                        '<tr>'+
                        '<table align="center">'+
                          '<tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="submit" value="Aceptar" class="button" id="OkAddActividad"/>'+
                                '<input type="button" value="cancelar" class="button" id="NotAddProducto"/>'+
                                '<input type="button" value="Atras" class="button" onclick="AddActividades()"/>'+ 
                            '</td>'+
                          '</tr>'+
                        '</table>'+
                        '<form>';
    }
    else
    {
        codigoHTML = '<form>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Id Queja</th>'+
                          '<td>'+
                            '<input type="text" name="id" value="" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input id="date_field29" type="text" name="fecha" value="" style="font-size:14px;"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="razonSocial" value="" />'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="id_usuario" value="" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<select name="cod_departamento" class="deptos" style="width:160px;" onchange="cargarMunicipios()">'+                      
                            '</select>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                             '<select name="codMunicipio" style="width:160px;" class="municipios">'+
                                 '<option value="null"></option>'+
                             '</select>'+ 
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="id_cliente" value=""/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono" value=""/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+                        
                            '<td colspan="4" align="left">'+
                              'Descripcion:<br>'+
                              '<textarea name="descripcion" cols="67" rows="6"></textarea>'+
                            '</td>'+
                        '</tr>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="submit" value="Aceptar" class="button" id="OkAddActividad"/>'+
                                  '<input type="button" value="cancelar" class="button" id="NotAddProducto"/>'+
                                  '<input type="button" value="Atras" class="button" onclick="AddActividades()"/>'+ 
                              '</td>'+
                            '</tr>'+
                        '</table>'+
                    '</form>';
    }
    //$("#overAddProducto").html(codigoHTML);
    listadoDepartamentos();
   
    $("#campos").html(codigoHTML);
    activadorEventosClientes();
    activadorEventosVendedores();
}

function crearActividadVisita(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"AddVisita","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonObj)
                    {
                        verificarAddActividad(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  MENSAJE QUE NOS INFORMA SI LA VISITA SE ADICIONO ******************
//*************  CORRECTAMENTE O SI FALLO                         ******************
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function verificarAddActividad(jsonObj)
{
    if (jsonObj.AddVisita  =="true")
    {
        alert("La visita se adicionó correctamente");
    }
    
    else
    {
        alert("La visita no se pudo adicionar");
    }   
    
    HideConfirmAddActividad();
}

function HideConfirmAddActividad()
{
    $("#overAddProducto").css({display: "none"});
    $("#fadeAddProducto").css({display: "none"});
    activadorEventosClientes();  
}
//**********************************************************************************
function seccionViaticos()
{
    var codigoHTML = '<div class="encabezado2">Listado de Viáticos</div>'+
                     '<div class="tabla">'+
                        '<form action="" method="POST" id="form_buscar_Viatico">'+
                            '<table align="center" border="0" align="left">'+
                                '<tr>'+                                    
                                    '<th align="right" style="padding-right:5px;">Tipo Viático</th>'+
                                       '<td>'+
                                        '<select name="tipoViatico" style="width:160px;">'+
                                            '<option value=""></option>'+
                                            '<option value="Transporte">Transporte</option>'+
                                            '<option value="Alimentación">Alimentación</option>'+
                                            '<option value="Urbanos">Urbanos</option>'+
                                            '<option value="Hospedaje">Hospedaje</option>'+
                                            '<option value="Otros">Otros</option>'+
                                        '</select>'+ 
                                    '</td>'+                               
                                '</tr>'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Inicial</th>'+
                                    '<td>'+
                                      '<input id="date_field9" type="text" name="fechaInicio" value=""/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Final</th>'+
                                    '<td>'+
                                      '<input id="date_field10" type="text" name="fechaFin" value=""/>'+
                                    '</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td colspan="4" align="center"><br>'+
                                      '<input type="submit" value="Buscar" class="button"/>'+
                                    '</td>'+
                                '</tr>'+
                            '</table>'+
                        '</form>'+
                        '<br>'+
                        '<table class="tbonita" align="center" id="tablaViaticos">'+
                            '<tr align="left">'+
                             '<th colspan="1"><img src="images/b_insrow.png" title="agregar" class="AdicionarViatico" /></th>'+
                             '<th colspan="1"><a href="ServletInformes?informe=ListadoViaticosPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></a></th>'+
                             '<th>IdViatico</th>'+
                             '<th>Fecha</th>'+
                             '<th>Valor</th>'+
                             '<th>Concepto</th>'+
                           '</tr>'+
                        '<table>'+
                            '<tr>'+
                                  '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">TOTAL VIÁTICOS $</th>'+
                                  '<td colspan="2"><input type="text" id="valorTotalViaticos" value="" readonly="readonly" style="padding-right:5px; font-weight: bold; font-size: 20px;"/></td>'+
                            '</tr>'+
                        '</table>'+  
                    '</div>';

    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#viaticosVendedor").addClass("active");
    if (TablaViaticos != null)
    {
        tablaViaticos(TablaViaticos);
    }
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field10').datepick({yearRange: '1980:2050'});
    $('#date_field10').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_buscar_Viatico").submit(buscarViatico);
    activadorEventosVendedores();
}

function buscarViatico(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"BuscarViatico","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonArray)
                    {
                        tablaViaticos(jsonArray);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

function tablaViaticos(jsonArray)
{
    TablaViaticos = jsonArray;
    
    var codigoHTML = '<tr align="left">'+
                        '<th colspan="1"><img src="images/b_insrow.png" title="agregar" class="AdicionarViatico" /></th>'+
                        '<th colspan="1"><a href="ServletInformes?informe=ListadoViaticosPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></a></th>'+
                        '<th>IdViatico</th>'+
                        '<th>Fecha</th>'+
                        '<th>Valor</th>'+
                        '<th>Concepto</th>'+
                      '</tr>';
      
    var i;
    for (i = 0; i < jsonArray.length-1; i++)
    {
        if (i % 2 == 0)
                codigoHTML+=      '<tr>';
        else
                codigoHTML+=      '<tr class="even">';
        codigoHTML+=                          '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerViatico" id="' + jsonArray[i].id_viaticos + '" /></td>';
        codigoHTML+=                          '<td>' + jsonArray[i].id_viaticos + '</td>';
        codigoHTML+=                          '<td>' + jsonArray[i].fecha + '</td>';
        codigoHTML+=                          '<td>' + jsonArray[i].valor + '</td>';  
        codigoHTML+=                          '<td>' + jsonArray[i].concepto + '</td>';                                   
        codigoHTML+=                  '</tr>';
            
    }
    
    $("#valorTotalViaticos").val(jsonArray[i].valor_total);
    $("#tablaViaticos").html(codigoHTML);
    activadorEventosVendedores();
}


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCIONES QUE DESPLIEGA UN  LISTADO DE       **********************  
//************* DEPARTAMENTOS                                *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************


function listadoDepartamentos()
{
    var request = {"Vendedores":"Departamentos"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarDeptos(jsonArray);                          
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
           });
}

function cargarDeptos(jsonArray)
{
    var codigoHTML =  '<option value="null"></option>';
    for (var j = 0; j < jsonArray.length; j++)
    {
        codigoHTML += '<option value="'+ jsonArray[j].cod_departamento +'">'+ jsonArray[j].nombre_depto +'</option>';
    }
    
    $('.deptos').html(codigoHTML);   
}

function seccionListadoClientes() 
{
             var codigoHTML = '<div class="encabezado2">Listado De Clientes</div>'+
                             '<div class="tabla">'+
                                '<form id="form_buscar_clientes" >'+
                                    '<table align="center" border="0" >'+
                                        '<tr>'+
                                            '<th align="right" style="padding-right:5px;">NIT</th>'+
                                               '<td>'+                                        
                                                '<input type="text" name="id_cliente" value="" >'+
                                               '</td>'+
                                            '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                               '<td>'+
                                                '<select name="cod_departamento" class="deptos" style="width:160px;" onchange="cargarMunicipios()">'+
                      
                                               '</select>'+
                                            '</td>'+

                                            '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                               '<td>'+
                                                '<select name="codMunicipio" style="width:160px;" class="municipios">'+
                                                   '<option value="null"></option>'+
                                                '</select>'+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td colspan="6" align="center"><br>'+
                                              '<input type="submit" value="Buscar" class="button" />'+
                                            '</td>'+
                                        '</tr>'+
                                    '</table>'+
                                '</form>'+
                                '<br>'+
                                '<table align="center" border="0" width="800" class="tbonita" id="tablaClientes">'+
                                 '<tr align="left">'+
                                    '<th colspan="1"><img src="images/b_insrow.png" title="agregar" id="AdicionarCliente" /></th>'+
                                    '<th colspan="1"><a href="ServletInformes?informe=ListadoClientesPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></a></th>'+
                                    '<th>NIT</th>'+
                                    '<th>Razón Social</th>'+
                                    '<th>Dirección</th>'+
                                    '<th>Telefono</th>'+
                                  '</tr>'+
                                '</table>'+
                            '</div>';
     
  
    $("#datos").html(codigoHTML);
    listadoDepartamentos();
    $(".menu-vertical li a").removeClass("active");
    if (TablaClientes != null)
    {
        AdicionarBusquedaClientes(TablaClientes);
    }
    $(this).addClass("active");
    $("#form_buscar_clientes").submit(enviarDatosBuscarCliente);    
    activadorEventosClientes();    
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
}

function enviarDatosBuscarCliente(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    var request = {"Vendedores":"BuscarClientes","Datos":datos};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonArray)
                    {
                        AdicionarBusquedaClientes(jsonArray);
                    },
                    error: function()
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

function AdicionarBusquedaClientes(jsonArray)
{
   TablaClientes = jsonArray; 
   var codigoHTML=                '<tr align="left">'+
                                    '<th colspan="1"><img src="images/b_insrow.png" title="agregar" id="AdicionarCliente" /></th>'+
                                    '<th colspan="1"><a href="ServletInformes?informe=ListadoClientesPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></a></th>'+
                                    '<th>NIT</th>'+
                                    '<th>Razón Social</th>'+
                                    '<th>Dirección</th>'+
                                    '<th>Telefono</th>'+
                                  '</tr>';

                    for (var i = 0; i < jsonArray.length; i++)
                    {
                            if (i % 2 == 0)
                                codigoHTML+=      '<tr>';
                           else
                                codigoHTML+=      '<tr class="even">';
                    codigoHTML+=                          '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerCliente" id="' + jsonArray[i].id_cliente + '" /></td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].id_cliente + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].razon_social + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].direccion + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].telefono + '</td>';
                    codigoHTML+=                  '</tr>';

                    }
                    
    $("#tablaClientes").html(codigoHTML); 
    activadorEventosClientes();
}



//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCIONES QUE DESPLIEGA UN  LISTADO DE       **********************  
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************


function cargarMunicipios()
{
    var depto=$('.deptos').val();
    //alert(depto);
    var request = {"Vendedores":"Municipios","DatosDepto":depto};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        Municipios(jsonArray);    
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
           });
}

function Municipios(jsonArray)
{
       var codigoHTML;
                                for (var l = 0; l < jsonArray.length; l++) 
                                {
           codigoHTML +=         '<option value="'+ jsonArray[l].codMunicipio +'">'+ jsonArray[l].NombreMunicipio +'</option>';                                                 
                                }
           codigoHTML+=          '<option value="null"></option>';   
    $(".municipios").html(codigoHTML);
}

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DEL MENU VERTICAL DE LOS   *********************
//*************  PRODUCTOS                                     *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function seccionListadoProductos()
{
    var request = {"Vendedores":"SeccionProducto"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        ListadoProductos(jsonArray);     
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
           });
}

function ListadoProductos(jsonArray)
{
   for (var k = 0; k < jsonArray.length; k++)
   {
       if (k==0)
       {
         var codigoHTML = '<div class="encabezado2">Listado Productos</div>'+
                          '<div class="tabla">'+
                             '<form id="form_buscar_producto">'+
                                 '<table align="center" border="0" >'+
                                     '<tr>'+                                    
                                         '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+ 
                                            '<td>'+
                                             '<select name="lineaProduccion" style="width:177px">'+
                                                 '<option value=""></option>';
                                             for (var j = 0; j < jsonArray[k].length; j++)
                                             {
            codigoHTML+=                         '<option value="'+ jsonArray[k][j].cod_linea +'">'+ jsonArray[k][j].nombre_linea +'</option>';
                                             }                                                                                              
            codigoHTML +=                    '</select>'+ 
                                         '</td>'; 
       }
       
       if (k==1)
       {
            codigoHTML+=                '<th align="right" style="padding-right:5px;">Material</th>'+ 
                                             '<td>'+ 
                                               '<select name="materiales" style="width:177px">'+
                                                 '<option value=""></option>';
                                                for (var l = 0; l < jsonArray[k].length; l++) 
                                                {
            codigoHTML+=                         '<option value="'+ jsonArray[k][l].codigo +'">'+ jsonArray[k][l].material +'</option>';                                                 
                                                }
            codigoHTML+=                        '</select>'+ 
                                         '</td>';  
        }
       
        if (k==2)
        {
            codigoHTML +=                '<th align="right" style="padding-right:5px;">Tipo Producto</th>'+ 
                                             '<td>'+ 
                                               '<select name="tipoProducto" style="width:177px">'+
                                                 '<option value=""></option>';
                                                for (var m = 0; m < jsonArray[k].length; m++)
                                                {
            codigoHTML+=                         '<option value="'+ jsonArray[k][m].cod_tipo_producto  +'">'+ jsonArray[k][m].nombre_tipo_producto +'</option>';                                                     
                                                }
            codigoHTML+=                        '</select>'+ 
                                         '</td>'+ 
                                     '</tr>'+
                                     '<tr>'+                                
                                         '<td colspan="6" align="center"><br>'+
                                           '<input type="submit" value="Buscar" class="button"  />'+
                                         '</td>'+
                                     '</tr>'+
                                 '</table>'+
                             '</form>'+
                             '<br>'+
                             '<table align="center" border="0"  width="800" class="tbonita" id="TablaProductos">'+ 
                                '<tr align="left">'+                     
                                    '<th border="1"><a href="ServletInformes?informe=ListadoProductosPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></a></th>'+
                                    '<th>Codigo</th>'+
                                    '<th>Nombre</th>'+
                                    '<th>Cantidad</th>'+
                                    '<th>Color</th>'+
                                    '<th>Talla</th>'+
                                    '<th>Precio C/U</th>'+
                                  '</tr>'+
                             '</table>'+                  
                          '</div>'; 
        }
                                      
  }                  
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    if(TablaProductos != null)
    {
        AdicionarBusquedaProductos(TablaProductos);
    }
    $(this).addClass("active");   
    $("#form_buscar_producto").submit(enviarDatosBuscarProducto);
     activadorEventosProductos();
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
}



function enviarDatosBuscarProducto(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    var request = {"Vendedores":"BuscarProductos","Datos":datos};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonArray)
                    {
                        AdicionarBusquedaProductos(jsonArray);
                    },
                    error: function()
                    {
                        alert('Error al conectar con el servidor');
                    }
                });    
}

function AdicionarBusquedaProductos(jsonArray)
{
    TablaProductos = jsonArray;
    var codigoHTML =                     '<tr align="left">'+                            
                                         '<th border="1"><a href="ServletInformes?informe=ListadoProductosPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></a></th>'+
                                         '<th>Codigo</th>'+
                                         '<th>Nombre</th>'+
                                         '<th>Cantidad</th>'+
                                         '<th>Color</th>'+
                                         '<th>Talla</th>'+
                                         '<th>Precio C/U</th>'+
                                        '</tr>';

                for (var i = 0; i < jsonArray.length; i++)
                {
                            if (i % 2 == 0)
                                codigoHTML+=      '<tr>';
                           else
                                codigoHTML+=      '<tr class="even">';
                    codigoHTML+=                          '<td colspan="1"><img src="images/b_search.png" title="Visualizar" class="VerProducto" id="' + jsonArray[i].codigo_producto + '" /></td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].codigo_producto + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].nombre + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].cantidad + '</td>';  
                    codigoHTML+=                          '<td>' + jsonArray[i].color + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].talla + '</td>';
                    codigoHTML+=                          '<td>' + jsonArray[i].precio_venta + '</td>'; 
                    codigoHTML+=                  '</tr>';

                }
                
                
    $("#TablaProductos").html(codigoHTML);
    activadorEventosProductos();
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DEL MENU VERTICAL DEL      *********************
//*************  PERFIL DEL USUARIO                            *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
function seccionDatosPerfil()
{
    var request = {"Vendedores":"Perfil"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        cargarDatosPerfil(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
           });
}

function cargarDatosPerfil(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Perfil</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Personal</a></li>'+
                            '<li><a href="#Laboral">Laboral</a></li>'+
                        '</ul>'+                        
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                            '<form id="form_enviar_foto"  enctype="multipart/form-data">'+
                              '<table align="center" border="0" align="left">'+
                                  '<tr>'+
                                      '<td colspan="2" rowspan="9" align="center">'+
                                          '<div class="foto">'+
                                                '<div class="imagen" id="fotoVendedores">'+
                                                    '<img src="images/usuario.png" align="center">'+
                                                '</div>'+
                                                '<div>'+
                                                  '<input type="button" value="Cargar Foto" class="button" id="cargarFoto" />'+
                                                    '<input type="text" value="" id="rutaFoto" />'+
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                  '</tr>'+
                                 '</form>'+                              
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Identificación</th>'+
                                    '<td><input type="text" name="cedula" value="' + jsonObject.cedula_usuario + '" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellidos" value="' + jsonObject.apellidos_usuario + '" size="20" maxlength="25" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombres" value="' + jsonObject.nombre_usuario + '" size="20" maxlength="25" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nickname</th>'+
                                    '<td><input type="text" name="nickname" value="' + jsonObject.nickname_usuario + '" size="20" maxlength="10" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Contraseña</th>'+
                                    '<td><input type="password" name="contrasena" value="' + jsonObject.password_usuario + '" size="20" maxlength="10" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion" value="' + jsonObject.direccion_usuario + '" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono" value="' + jsonObject.telefono_usuario + '" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular" value="' + jsonObject.celular_usuario + '" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<div id="Laboral" class="tab_content">'+
                              '<table>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Ingreso</th>'+
                                    '<td><input type="text" name="fecha" value="' + jsonObject.fecha + '" readonly="readonly" /></td>'+
                                    '<th align="right" style="padding-right:5px;">email</th>'+
                                    '<td><input type="text" name="email" value="' + jsonObject.email_usuario + '" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Cumpleaños</th>'+
                                    '<td><input type="text" name="cumpleanos" value="' + jsonObject.fecha_cumpleanos + '"  readonly="readonly" /></td>'+
                                    '<th align="right" style="padding-right:5px;">Tipo de Cuenta</th>'+
                                    '<td>'+
                                      '<select name="tipoCuenta" style="width:177px">'+
                                        '<option value="1">Ahorros</option>'+
                                        '<option value="2">Corriente</option>'+
                                      '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Numero Cuenta</th>'+
                                    '<td><input type="text" name="num_cuenta" value="' + jsonObject.numero_cuenta + '" /></td>'+
                                    '<th align="right" style="padding-right:5px;">Banco</th>'+
                                    '<td>'+
                                      '<select name="banco" style="width:177px">'+
                                        '<option value="1">Bancafé</option>'+
                                        '<option value="2">Banco AV Villas</option>'+
                                        '<option value="3">BBVA</option>'+
                                        '<option value="4">Banco Caja Social BCSC</option>'+
                                        '<option value="5">Banco de Bogotá</option>'+
                                        '<option value="6">Banco de Credito</option>'+
                                        '<option value="7">Banco de la República de Colombia</option>'+
                                        '<option value="8">Banco de Occidente</option>'+
                                        '<option value="9">Banco GNB Sudameris</option>'+
                                        '<option value="10">Banco Granahorrar</option>'+
                                        '<option value="11">Banco Popular</option>'+
                                        '<option value="12">Banco Santander Colombia</option>'+
                                        '<option value="13">Bancoldex</option>'+
                                        '<option value="14">Bancolombia</option>'+
                                        '<option value="15">BBVA Banco Ganadero</option>'+
                                        '<option value="16">Citi Bank</option>'+
                                        '<option value="17">Colmena BCSC</option>'+
                                        '<option value="18">Colpatria</option>'+
                                        '<option value="19">Conavi</option>'+
                                        '<option value="20">Davivienda</option>'+
                                        '<option value="21">Megabanco</option>'+
                                        '<option value="22">Banco Finandino</option>'+
                                        '<option value="23">Banco Falabella</option>'+
                                        '<option value="24">Banco Coomeva</option>'+
                                      '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                '<td colspan="4" align="left">'+
                                    'Otros datos:<br>'+
                                    '<textarea name="otrosDatos" cols="74" rows="6">' + jsonObject.otros_datos + '</textarea>'+
                                '</td>'+
                                '</tr>'+
                              '</table>'+
                            '</div>'+                    
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="submit" value="Registrar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field13').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field14').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_modificar_perfil").submit(enviarDatosModPerfil);
    activadorEventosVendedores();
    cargarFoto();
}

function cargarFoto()
{
    var botonCargarFoto = $("#cargarFoto");
    
    new AjaxUpload(botonCargarFoto, 
    {
        action: 'ServletFotos',
        onSubmit : function(file, ext)
        {
                if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext)))
                {
                        // extensiones permitidas
                        alert('Error: Solo se permiten imagenes');
                        // cancela upload
                        return false;
                } 
                else 
                {
                        botonCargarFoto.attr("value", "Cargando");
                        this.disable();
                }
        },
        onComplete: function(file, response)
        {
                botonCargarFoto.attr("value", "Cargar Foto");
                // enable upload button
                this.enable();			
                // Agrega archivo a la lista
                var rutaFoto = "images/empleados/" + file;
                var htmlFoto = '<img src="' + rutaFoto + '" align="center" width="180px">';
                $('#rutaFoto').attr("value",file);
                $('#fotoVendedores').html(htmlFoto);
                
        }	
    });
}



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DEL MENU VERTICAL DE LOS   *********************
//*************  PRODUCTOS                                     *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************


function AgrViatico()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Viatico</div>'+
                '<form id="form_crear_viatico" enctype="multipart/form-data>'+
                     '<div class="tabla">'+ 
                             '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input type="text" name="fecha" id="date_field15" value="" required/>'+                                      
                                    '</td>'+
                                  '</tr>'+
                                  //'<tr>'+
                                    //'<th align="right" style="padding-right:5px;">Nit</th>'+
                                    //'<td>'+
                                      //'<input type="hidde" name="id_usuario" value="4" readonly="readonly" />'+                                      
                                    //'</td>'+
                                  //'</tr>'+
                              '</table>'+
                              '<br>'+
                              '<br>'+
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Concepto</th>'+
                                    '<td>'+
                                        '<select name="concepto" style="width:160px;" required>'+
                                            '<option value=""></option>'+
                                            '<option value="transporte">Transporte</option>'+
                                            '<option value="alimentacion">Alimentación</option>'+
                                            '<option value="urbanos">Urbanos</option>'+
                                            '<option value="hospedaje">Hospedaje</option>'+
                                            '<option value="otros">Otros</option>'+
                                        '</select>'+                                      
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Valor $</th>'+
                                    '<td>'+
                                      '<input type="text" name="valor"   required/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                   '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                       '<td>'+
                                        '<select name="cod_departamento" class="deptos" style="width:160px;" onchange="cargarMunicipios()"  required>'+                                           
                                        '</select>'+ 
                                    '</td>'+ 

                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                       '<td>'+
                                        '<select name="codMunicipio" style="width:160px;" class="municipios"  required>'+
                                            //'<option value="null"></option>'+
                                         '</select>'+
                                    '</td>'+ 
                                  '</tr>'+                                  
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+                          
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="reset" value="Volver" class="button" id="volAgrViatico"/>'+
                                  '<input type="submit" value="Guardar" class="button"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table>'+     
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    $('#date_field15').datepick({yearRange: '1980:2050'});
    $('#date_field15').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_crear_viatico").submit(enviarDatosAddViatico);
    listadoDepartamentos();
    activadorEventosVendedores();
}

function enviarDatosAddViatico(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"AddViatico","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonObj)
                    {
                        verificarAddViatico(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

function verificarAddViatico(jsonObj)
{
    if (jsonObj.AddViatico  =="true")
    {
        alert("El viatico se adicionó correctamente");
    }
    
    else
    {
        alert("El viatico no se pudo adicionar");
    }   
    
    seccionViaticos();
}

function DatosVerViatico()
{
    var id = $(this)[0].id;
    var request = {"Vendedores":"DatosViatico","id_viaticos":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonObject)
                    {
                        VerViatico(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
               });
}


function VerViatico(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Visualizar Viatico</div>'+
                     '<div class="tabla">'+                                           
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input type="text" name="fecha_viatico" value="' + jsonObject.fecha + '" readonly="readonly"/>'+                                      
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                              '<br>'+
                              '<br>'+
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Concepto</th>'+
                                    '<td>'+
                                        '<input name="tipoActividad" style="width:160px;" value="'+ jsonObject.concepto +'" readonly="readonly"/>'+                                    
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Valor $</th>'+
                                    '<td>'+
                                      '<input type="text" name="vlr" value="' + jsonObject.valor + '" readonly="readonly" readonly="readonly"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                    '<td>'+
                                      '<input type="text" name="ciud"  value="'+ jsonObject.NombreMunicipio +'" readonly="readonly" readonly="readonly"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                    '<td>'+
                                      '<input type="text" name="depto"  value="'+ jsonObject.nombre_depto +'" readonly="readonly" readonly="readonly"/>'+
                                    '</td>'+
                                  '</tr>'+                                  
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+                          
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="reset" value="Volver" class="button" id="volAgrViatico"/>'+                                  
                              '</td>'+
                            '</tr>'+
                          '</table>'+     
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);  
    IniciarTabers() ;
    activadorEventosVendedores();
}

//**********************************************************************************
//**********************************************************************************
//*******************************************************************************
//*************  FUNCION DE DEL MENU VERTICAL CLIENTES*****************************
// ************  EN LA TABLA OPCION AGREAGR            *******************************
//***********************************************************************************
//**********************************************************************************
//**********************************************************************************


function AddCliente()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Cliente</div>'+
                    '<div class="tabla">'+
                    '<form id="form_crear_cliente" enctype="multipart/form-data">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Personal</a></li>'+                            
                            '<li><a href="#zona">Ubicacion</a></li>'+                        
                        '</ul>'+                        
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                                '<table align="center" border="0" align="left">'+
                                  '<tr>'+
                                      '<td colspan="2" rowspan="8" align="center">'+
                                          '<div class="foto">'+
                                                '<div class="imagen" id="fotoVendedores">'+
                                                    '<img src="images/usuario.png" align="center">'+
                                                '</div>'+
                                                '<div>'+
                                                  '<input type="button" value="Cargar Foto" class="button" id="cargarFoto" />'+
                                                    '<input type="text" value="" id="rutaFoto" />'+
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:10px;">Fecha</th>'+
                                    '<td><input type="text" name="fecha" id="date_field16" value="" size="20"/></td>'+                                                                   
                                    '<th align="right" style="padding-right:10px;">NIT</th>'+
                                    '<td><input type="text" name="id_cliente" value="" size="20" maxlength="15" readonly="readonly"  required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombre" value="" size="20"  required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellido" value="" size="20"  required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Razón Social</th>'+
                                    '<td><input type="text" name="razon_social" value="" size="20" maxlength="35"  required/></td>'+                                  
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion" value="" size="20" maxlength="35"  required/></td>'+
                                  '</tr>'+                            
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono" value="" size="20" maxlength="12"  required/></td>'+                                 
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular" value="" size="20" maxlength="15"  required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Email</th>'+
                                    '<td><input type="text" name="email" value="" size="20" maxlength="50"  required/></td>'+                                                                             
                                 '</tr>'+                                 
                                '</table>'+                                                           
                            '</div>'+
                            '<div id="zona" class="tab_content">'+
                                '<table align="center" border="0" align="left" id="tablaMapa">'+
                                    '<tr>'+
                                    '<th align="right" style="padding-right:10px;">Latitud</th>'+
                                    '<td><input type="text" name="lalitudC" value="" size="15" maxlength="15"/ ></td>'+                                                                   
                                    '<th align="right" style="padding-right:10px;">Longitud</th>'+
                                    '<td><input type="text" name="longitudC" value="" size="15" maxlength="15" /></td>'+                                   
                                  '</tr>'+
                                  '<tr>'+
                                  '<td colspan="4" align="center"><br>'+
                                    '<input type="button" id="mapa" value="ubicar" class="button"/>'+                                  '</tr>'+
                                  '</td>'+                                                                                                                                                                      
                                '</table>'+                              
                                '<div class="Ubicacion-Geografica">'+                                                                                                               
                                '</div>'+
                            '</div>'+                            
                            '<table align="center">'+                                
                              '<tr>'+                                    
                               '<td align="center">'+
                                '<input type="button" value="Volver" class="button" id="volverCliente">'+
                                '<input type="submit" value="Registrar" class="button">'+
                               '</td>'+                             
                             '</tr>'+
                            '</table>'+ 
                        '</form>'+                        
                    '</div>';

    $("#datos").html(codigoHTML);     
    $(".Ubicacion-Geografica").css({width: 840});   
    $('#date_field16').datepick({yearRange: '1980:2050'});
    $('#date_field16').datepick('option', {dateFormat: $.datepick.ATOM});
    IniciarTabers();
    $("#form_crear_cliente").submit(enviarDatosAddCliente);
    $("#mapa").click(localizame);
    //localizame();
    cargarFoto();
    activadorEventosClientes();
}



function enviarDatosAddCliente(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"AddCliente","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonObj)
                    {
                        verificarAddCliente(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

function verificarAddCliente(jsonObj)
{
    if (jsonObj.AddCliente  =="true")
    {
        alert("El cliete se adicionó correctamente");
    }
    
    else
    {
        alert("El cliente no se pudo adicionar");
    }   
    
    seccionListadoClientes();
}

function DatosVerCliente()
{
    var id = $(this)[0].id;
    var request = {"Vendedores":"DatosCliente","id_cliente":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerCliente(jsonObject, id);     
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
               });
}

//**********************************************************************************
//**********************************************************************************
//*******************************************************************************
//*************  FUNCION DE DEL MENU VERTICAL CLIENTES*****************************
// ************  EN LA TABLA OPCION VIZUALIZAR          *******************************
//***********************************************************************************
//**********************************************************************************
//**********************************************************************************

function VerCliente(jsonObject, id)
{
  var codigoHTML = '<div class="encabezado2">Visualizar Cliente</div>'+
                        '<div class="tabla">'+
                            '<ul class="tabs">'+
                                '<li><a href="#Personal">Personal</a></li>'+
                                '<li><a href="#actividad">Actividades</a></li>'+  
                                '<li><a href="#zona">Ubicacion</a></li>'+                        
                            '</ul>'+
                        
                        '<div class="tab_container">'+
                        
                         '<div id="Personal" class="tab_content">'+                        
                              '<table align="center" border="0" align="left">'+                        
                                  '<tr>'+
                                      '<td colspan="2" rowspan="8" align="center">'+
                                          '<div class="foto">'+
                                              '<div class="imagen">'+
                                                  '<img src="images/usuario.png" align="center">'+
                                              '</div>'+
                                              '<div>'+
                                                  '<input type="button" value="Cargar Foto" class="button"> '+
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                  '</tr>'+                                
                                
                                 '<tr>'+
                                    '<th align="right" style="padding-right:10px;">Fecha</th>'+
                                    '<td><input type="text" name="fecha_Icliente" id="date_field16"value="' + jsonObject.fecha + '" size="10"/ readonly="readonly"></td>'+                                                                   
                                    '<th align="right" style="padding-right:10px;">NIT</th>'+
                                    '<td><input type="text" name="nit" value="' + jsonObject.id_cliente+ '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombres_cliente" value="' + jsonObject.nombre + '" size="20" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellido_cliente" value="' + jsonObject.apellido + '" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Razón Social</th>'+
                                    '<td><input type="text" name="Razon_social" value="' + jsonObject.razon_social + '" size="20" maxlength="35" readonly="readonly" /></td>'+                                  
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion" value="' + jsonObject.direccion + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+                                 
                                  
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono_cliente" value="' + jsonObject.telefono + '" size="20" maxlength="12"  readonly="readonly"/></td>'+                                 
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular_cliente" value="' + jsonObject.celular + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Email</th>'+
                                    '<td><input type="text" name="email" value="' + jsonObject.email + '" size="20" maxlength="12" readonly="readonly"/></td>'+                                                                                                               
                                 '</tr>'+                         
                            '</table>'+                        
                           '</div>'+
                        
                           '<div id="zona" class="tab_content">'+
                            '<table align="center" border="0" align="left">'+                                  
                                  '<tr>'+
                                    '<th align="right" style="padding-right:10px;">Latitud</th>'+
                                    '<td><input type="text" name="lalitud" value="'+ jsonObject.latitud +'" size="15" maxlength="15"/ ></td>'+                                                                   
                                    '<th align="right" style="padding-right:10px;">Longitud</th>'+
                                    '<td><input type="text" name="longitud" value="'+ jsonObject.longitud +'" size="15" maxlength="15" /></td>'+                                   
                                  '</tr>'+
                                  '<th align="right" style="padding-right:10px;">Departamento</th>'+
                                    '<td><input type="text" name="depto" value="'+ jsonObject.nombre_depto +'" size="15" maxlength="15"/ ></td>'+                                                                   
                                    '<th align="right" style="padding-right:10px;">Municipio</th>'+
                                    '<td><input type="text" name="municipio" value="'+ jsonObject.NombreMunicipio +'" size="15" maxlength="15" /></td>'+                                   
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="center">'+
                                     '<input type="button" id="MapCliente" value="Cargar" class="button"> '+
                                    '</td>'+
                                  '</tr>'+                                  
                              '</table>'+
                              '<div class="Ubicacion-Geografica">'+
                                
                              '</div>'+                                              
                            '</div>'+
                            
                            '<div id="actividad" class="tab_content">'+
                              '<ul class="tabs2">'+
                                '<li><a href="#visitas">Visitas</a></li>'+
                                '<li><a href="#quejas">Quejas</a></li>'+
                                '<li><a href="#recaudo">Pagos</a></li>'+
                              '</ul>'+
                              '<div class="tab_container2">'+                             
                               '<div id="visitas" class="tab_content2" enctype="multipart/form-data">'+
                                 '<form id="form_buscar_visita_cliente">'+
                             
                                    '<table align="center" border="0" align="left">'+                                    
                                        '<tr>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Inicial</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field17" type="text" name="fechaInicio" value="" style="font-size:14px;"/>'+ 
                                            '</td>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Final</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field18" type="text" name="fechaFin" value=""/>'+ 
                                            '</td>'+ 
                                        '</tr>'+ 
                                        '<td><input type="hidden" name="id_cliente"  value="' + id + '"></td>'+
                                        '<tr>'+ 
                                            '<td colspan="4" align="center"><br>'+ 
                                              '<input type="submit" value="Buscar" class="button" />'+ 
                                            '</td>'+ 
                                        '</tr> '+ 
                                    '</table>'+ 
                                '</form>'+
                                '<br>'+
                        
                                
                              '<table class="tbonita" align="center" width="700" id="tablaVisita">'+
                                '<tr align="left">'+
                                    '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Visita" id="'+ id +'" class="addVisita"/></th>'+
                                    '<th><a href="ServletInformes?informe=ListadoVisitasPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></a></th>'+
                                    '<th>IdVisita</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Cuidad</th>'+ 
                                    '<th>Asunto</th>'+ 
                                  '</tr>'+
                                 '</table>'+                                   
                                '</div>'+
                                                          
                                '<div id="quejas" class="tab_content2">'+
                                    '<form id="form_buscar_quejas_cliente" enctype="multipart/form-data">'+ 
                                    '<table align="center" border="0" align="left">'+                                         
                                        '<tr>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Inicial</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field19" type="text" name="fechaInicio" value="" style="font-size:14px;"/>'+ 
                                            '</td>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Final</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field20" type="text" name="fechaFin" value=""/>'+ 
                                            '</td>'+ 
                                        '</tr>'+ 
                                        '<tr>'+ 
                                            '<td colspan="4" align="center"><br>'+ 
                                              '<input type="submit" value="Buscar" class="button" />'+ 
                                            '</td>'+ 
                                        '</tr> '+
                                        '</tr>'+ 
                                            '<td><input type="hidden" name="id_cliente"  value="' + id + '"></td>'+
                                        '<tr>'+
                                    '</table>'+ 
                                '</form>'+ 
                                '<br>'+                                 
                                '<table class="tbonita" align="center" width="700" id="tablaQueja">'+ 
                                  '<tr align="left">'+ 
                                    '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Queja" class="VentanaAddQuejas" id="' + id +'"/></th>'+ 
                                    '<th><a href="ServletInformes?informe=ListadoQuejasPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></a></th>'+
                                    '<th>IdQueja</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Cuidad</th>'+ 
                                    '<th>Asunto</th>'+ 
                                  '</tr>'+                                
                                '</table>'+     
                                '</div>'+                    
                                
                               '<div id="recaudo" class="tab_content2">'+
                                    '<form id="enviarDatosBuscarPagoCliente" enctype="multipart/form-data">'+ 
                                    '<table align="center" border="0" align="left">'+                                         
                                        '<tr>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Inicial</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field21" type="text" name="fechaInicio" value="" style="font-size:14px;"/>'+ 
                                            '</td>'+ 
                                            '<th align="right" style="padding-right:5px;">Fecha Final</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field22" type="text" name="fechaFin" value=""/>'+ 
                                            '</td>'+ 
                                        '</tr>'+ 

                                        '<tr>'+ 
                                            '<td colspan="4" align="center"><br>'+ 
                                              '<input type="submit" value="Buscar" class="button" />'+ 
                                            '</td>'+
                                        '</tr> '+
                                        '</tr>'+ 
                                            '<td><input type="hidden" name="id_cliente"  value="' + id + '"></td>'+
                                        '<tr>'+
                                    '</table>'+ 
                                '</form>'+ 
                                '<br>'+ 
                                '<table class="tbonita" align="center" width="700" id="tablaPago">'+ 
                                    '<tr align="left">'+ 
                                        '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Recaudo" class="VentanaAddRecaudo" id="' + id +'"/></th>'+ 
                                        '<th><a href="ServletInformes?informe=ListadoPagosPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></a></th>'+
                                        '<th>IdPago</th>'+ 
                                        '<th>Fecha</th>'+ 
                                        '<th>Cliente</th>'+ 
                                        '<th>Vendedor</th>'+ 
                                        '<th>Cuidad</th>'+ 
                                        '<th>Asunto</th>'+ 
                                    '</tr>'+
                                '</table>'+   
                                '</div>'+                                                                                              
                            '</div>'+                      
                          '</div>'+                          
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center"><br>'+
                                  '<input type="button" value="Volver" class="button" id="volverCliente" />'+                                  
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+                        
                        '</div>';
  
    var lat =jsonObject.latitud;
    var lon= jsonObject.longitud;
    
    $("#datos").html(codigoHTML);
    activadorEventosClientes();    
    IniciarTabersAnidados();
    $(".Ubicacion-Geografica").css({width: 820});    
    $('#date_field17').datepick({yearRange: '1980:2050'});
    $('#date_field17').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field18').datepick({yearRange: '1980:2050'});
    $('#date_field18').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field19').datepick({yearRange: '1980:2050'});
    $('#date_field19').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field20').datepick({yearRange: '1980:2050'});
    $('#date_field20').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field21').datepick({yearRange: '1980:2050'});
    $('#date_field21').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field22').datepick({yearRange: '1980:2050'});
    $('#date_field22').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_buscar_visita_cliente").submit(enviarDatosBuscarVisitaCliente);
    $("#form_buscar_quejas_cliente").submit(enviarDatosBuscarQuejaCliente);
    $("#enviarDatosBuscarPagoCliente").submit(enviarDatosBuscarPagoCliente);
    $('#MapCliente').click(function(){
        var latlon = new google.maps.LatLng(lat, lon);
        alert(lat);
        var myOptions = {
                                    zoom: 17,
                                    center: latlon,
                                    mapTypeId: google.maps.MapTypeId.ROADMAP
                                };
                                
    var map = new google.maps.Map($(".Ubicacion-Geografica").get(0), myOptions);

    var marcador = new google.maps.Marker({
                                                                            position: latlon,
                                                                            map: map,
                                                                            title: "ubicación"
                                                                        });
    });
}

function localizame() 
{
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition(coordenadas, errores);
    }
    else
    {
        alert('Tu navegador no soporta geolocalización');
    }
}

function coordenadas(position) 
{
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;
    precision = position.coords.accuracy;  
    cargarMapa();
}

function errores(err) 
{
    if (err.code == 0) 
    {
      alert("Algo ha salido mal");
    }
    if (err.code == 1) 
    {
      alert("No has aceptado compartir tu posición");
    }
    if (err.code == 2) 
    {
      alert("No se puede obtener la posición actual");
    }
    if (err.code == 3) 
    {
      alert("Hemos superado el tiempo de espera");
    }
}

function cargarMapa() 
{
    var latlon = new google.maps.LatLng(latitud,longitud);
    var myOptions = {
                                    zoom: 17,
                                    center: latlon,
                                    mapTypeId: google.maps.MapTypeId.ROADMAP
                                };
                                
    map = new google.maps.Map($(".Ubicacion-Geografica").get(0), myOptions);

    var marcador = new google.maps.Marker({
                                                                            position: latlon,
                                                                            map: map,
                                                                            title: "Mi ubicación"
                                                                        });
                                                                        
    var codigoHTML = '<tr>'+
                        '<th align="right" style="padding-right:10px;">Latitud</th>'+
                        '<td><input type="text" id="latitudC" value="'+ latitud +'" size="15" maxlength="15"/ ></td>'+                                                                   
                        '<th align="right" style="padding-right:10px;">Longitud</th>'+
                        '<td><input type="text" id="longitudC" value="'+ longitud +'" size="15" maxlength="15" /></td>'+                                   
                      '</tr>'+          
                      '</tr>'+
                      '<tr>'+                                   
                        '<td colspan="6" align="center"><br>'+
                          '<input type="button" value="Ubicar" class="button" id="mapa"/>'+
                        '</td>'+
                      '</tr>';
    $("#tablaMapa").html(codigoHTML);
    listadoDepartamentos();
    activadorEventosClientes();
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  FUNCION DE DEL MENU VERTICAL CLIENTES         ******************
//*************  DENTRO DE LA OPCION VISUALIZAR, HAY           ******************
//*************  UNA PESTAÑA DE ACTIVIDADES DONDE SE ENCUENTRA ******************
//*************  EL BOTON BUSCAR                               ******************
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function enviarDatosBuscarVisitaCliente(evento)
{
    var id = $(".VentanaAddQuejas")[0].id;
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"BuscarVisita","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonArray)
                    {
                        tablaVisita(jsonArray, id);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  TABLA QUE SE GENERA AL PULSAR EL BOTON BUSCAR ******************
//*************  ARROJANDO LOS RESULTADOS DE LA BUSQUEDA       ******************
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function tablaVisita(jsonArray, id)
{                        
       var codigoHTML =       '<tr align="left">'+
                                    '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Visita" id="'+ id +'" class="addVisita"/></th>'+
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReporteVisitaCliente" /></th>'+ 
                                    '<th>IdVisita</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Cuidad</th>'+ 
                                    '<th>Asunto</th>'+ 
                                  '</tr>';
                         
    for ( var i = 0; i < jsonArray.length; i++)
    {
            if (i % 2 == 0)
                codigoHTML+=      '<tr>';
           else
                codigoHTML+=      '<tr class="even">';
    
    codigoHTML+=                          '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerVisita" id="' + jsonArray[i].id_visita + '" /></td>';
                                   
    codigoHTML+=                          '<td>' + jsonArray[i].id_visita + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[i].fecha + '</td>';  
    codigoHTML+=                          '<td>' + jsonArray[i].razon_social + '</td>'; 
    codigoHTML+=                          '<td>' + jsonArray[i].nombre_usuario + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[i].NombreMunicipio + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[i].descripcion + '</td>';
    codigoHTML+=                  '</tr>';
            
    }
   
   $("#tablaVisita").html(codigoHTML);
   activadorEventosClientes();
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  FUNCION DE DEL MENU VERTICAL CLIENTES         ******************
//*************  DENTRO DE LA OPCION VISUALIZAR, HAY           ******************
//*************  UNA PESTAÑA DE ACTIVIDADES DONDE SE ENCUENTRA ******************
//*************  EL BOTON BUSCAR QUEJAS                        ******************
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
function enviarDatosBuscarQuejaCliente(evento)
{
    var id = $(".VentanaAddQuejas")[0].id;
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"BuscarQueja","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonArray)
                    {
                        tablaQueja(jsonArray, id);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  TABLA QUE SE GENERA AL PULSAR EL BOTON BUSCAR ******************
//*************  ARROJANDO LOS RESULTADOS DE LA BUSQUEDA       ******************
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function tablaQueja(jsonArray, id)
{
       var codigoHTML =       '<tr align="left">'+ 
                                    '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Queja" class="VentanaAddQuejas" id="' + id +'"/></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReporteQuejasCliente" /></th>'+ 
                                    '<th>IdQueja</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Cuidad</th>'+ 
                                    '<th>Asunto</th>'+ 
                                  '</tr>';
                         
for ( var j = 0; j < jsonArray.length; j++)
    {
            if (j % 2 == 0)
                codigoHTML+=      '<tr>';
           else
                codigoHTML+=      '<tr class="even">';
    
    codigoHTML+=                          '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerQuejas" id="' + jsonArray[j].id_queja + '" /></td>';
                                   
    codigoHTML+=                          '<td>' + jsonArray[j].id_queja + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[j].fecha + '</td>';  
    codigoHTML+=                          '<td>' + jsonArray[j].razon_social + '</td>'; 
    codigoHTML+=                          '<td>' + jsonArray[j].nombre_usuario + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[j].NombreMunicipio + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[j].descripcion + '</td>';
    codigoHTML+=                  '</tr>';
            
    }   
   $("#tablaQueja").html(codigoHTML);
   activadorEventosClientes();
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  FUNCION DE DEL MENU VERTICAL CLIENTES         ******************
//*************  DENTRO DE LA OPCION VISUALIZAR, HAY           ******************
//*************  UNA PESTAÑA DE ACTIVIDADES DONDE SE ENCUENTRA ******************
//*************  EL BOTON BUSCAR PAGOS                         ******************
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function enviarDatosBuscarPagoCliente(evento)
{
    var id = $(".VentanaAddQuejas")[0].id;
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"BuscarPago","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonArray)
                    {
                        tablaPago(jsonArray, id);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  TABLA QUE SE GENERA AL PULSAR EL BOTON BUSCAR ******************
//*************  ARROJANDO LOS RESULTADOS DE LA BUSQUEDA       ******************
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function tablaPago(jsonArray, id)
{
var codigoHTML=    '<tr align="left">'+ 
                        '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Recaudo" class="VentanaAddRecaudo" id="' + id +'"/></th>'+ 
                        '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReporteRecaudoCliente" /></th>'+ 
                        '<th>IdPago</th>'+ 
                        '<th>Fecha</th>'+ 
                        '<th>Cliente</th>'+ 
                        '<th>Vendedor</th>'+ 
                        '<th>Cuidad</th>'+ 
                        '<th>Asunto</th>'+ 
                    '</tr>';
                         
for ( var P = 0; P < jsonArray.length; P++)
    {
            if (P % 2 == 0)
                codigoHTML+=      '<tr>';
           else
                codigoHTML+=      '<tr class="even">';
    
    codigoHTML+=                          '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerRecaudo" id="' + jsonArray[P].id_pago + '" /></td>';
                                   
    codigoHTML+=                          '<td>' + jsonArray[P].id_pago + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[P].fecha + '</td>';  
    codigoHTML+=                          '<td>' + jsonArray[P].razon_social + '</td>'; 
    codigoHTML+=                          '<td>' + jsonArray[P].nombre_usuario + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[P].NombreMunicipio + '</td>';
    codigoHTML+=                          '<td>' + jsonArray[P].descripcion + '</td>';
    codigoHTML+=                  '</tr>';
            
    }
    $("#tablaPago").html(codigoHTML);
    activadorEventosClientes();
    
}


//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  FUNCION DE AGREGAR UNA VISITA A LOS CLIENTES ******************
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
function ConfirmAddVisita()
{
    var id = $(this)[0].id;
    var request = {"Vendedores":"CargarDatosAddVisita","id_cliente":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        AddVisitaCliente(jsonObject); 
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
               });  
}


function AddVisitaCliente(jsonObject)
{
    var codigoHTML= '<div class="encabezado2">Adicionar Visita</div>'+
                    '<form id="form_crear_visita" enctype="multipart/form-data">'+
                    '<br>'+
                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">IdVisita</th>'+
                          '<td>'+
                            '<input type="text" name="id_visi" value="" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input id="date_field29" type="text" name="fecha" value="" style="font-size:14px;"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="cliente_vis" value="'+jsonObject.razon_social+'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="id_usuario" value="'+jsonObject.NombreUsuario+'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad_vis" value="'+jsonObject.NombreMunicipio+'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<input type="text" name="depto_vis" value="'+jsonObject.nombre_depto+'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="id_cliente" value="'+jsonObject.id_cliente+'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="'+jsonObject.telefono+'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td colspan="4" align="left">'+
                              'Descripcion:<br>'+
                              '<textarea name="descripcion" cols="67" rows="6"></textarea>'+
                            '</td>'+
                        '</tr>'+                              
                    '</table>'+
                    '<br>'+
                    '<table align="center">'+
                      '<tr>'+
                        '<td colspan="4" align="center">'+
                            '<input type="submit" value="Aceptar" class="button" id="OkAddVisita"/>'+
                            '<input type="button" value="cancelar" class="button" id="NotAddVisita"/>'+
                        '</td>'+
                      '</tr>'+
                    '</table>'+
                    '</form>'+
                '</div>';

    
    $("#overAddProducto").css({display: "block"});
    $("#overAddProducto").html(codigoHTML);
    $("#fadeAddProducto").css({display: "block"});
    $('#date_field29').datepick({yearRange: '1980:2050'});
    $('#date_field29').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_crear_visita").submit(crearVisita);
    activadorEventosClientes();
}

function crearVisita(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"AddVisita","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonObj)
                    {
                        verificarAddVisita(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  MENSAJE QUE NOS INFORMA SI LA VISITA SE ADICIONO ******************
//*************  CORRECTAMENTE O SI FALLO                         ******************
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function verificarAddVisita(jsonObj)
{
    if (jsonObj.AddVisita  =="true")
    {
        alert("La visita se adicionó correctamente");
    }
    
    else
    {
        alert("La visita no se pudo adicionar");
    }   
    
    HideConfirmAddVisita();
}

function HideConfirmAddVisita()
{
    $("#overAddProducto").css({display: "none"});
    $("#fadeAddProducto").css({display: "none"});
    activadorEventosClientes();  
}


//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  FUNCION DE VISUALIZAR LAS VISITAS QUE SE LE HAN ****************
//*************  ECHO A LOS CLIENTES                             **************** 
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
function VerVisita()
{
    var id = $(this)[0].id;
    var request = {"Vendedores":"DatosVerVisita","id_visita":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        CargarDatosVerVisita(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletComercial');
                    }
               });
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  FUNCION DE MUESTA TODOS LOS DATOS DE LA VISITA  **************** 
//*************  QUE SE LE HIZO AL CLIENTE                       **************** 
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function CargarDatosVerVisita(jsonObject)
{
   var codigoHTML='<div class="encabezado2">Visualizar Visita</div>'+
                    '<br>'+
                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">IdVisita</th>'+
                          '<td>'+
                            '<input type="text" name="id_vis" value="'+ jsonObject.id_visita +'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input type="text" name="fecha_vis" value="'+ jsonObject.fecha +'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+                        
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="cliente_vis" value="'+ jsonObject.razon_social +'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad" value="'+ jsonObject.nombre_usuario +'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad_vis" value="'+ jsonObject.NombreMunicipio +'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<input type="text" name="depto_vis" value="'+ jsonObject.nombre_depto +'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="nit_vis" value="'+ jsonObject.id_cliente +'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="'+ jsonObject.telefono +'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td colspan="4" align="left">'+
                              'Descripcion:<br>'+
                              '<textarea name="mensaje" cols="67" rows="6"  readonly="readonly">'+ jsonObject.descripcion +'</textarea>'+
                            '</td>'+
                        '</tr>'+                              
                    '</table>'+                

                    '<br>'+
                    '<table align="center">'+
                      '<tr>'+
                        '<td colspan="4" align="center">'+                            
                            '<input type="button" value="Volver" class="button" id="NotAddVisita"/>'+
                        '</td>'+
                      '</tr>'+
                    '</table>'+               
                '</div>';

    $("#overAddProducto").css({display: "block"});
    $("#overAddProducto").html(codigoHTML);
    $("#fadeAddProducto").css({display: "block"});
    activadorEventosClientes();
}


//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  FUNCION DE AGREGAR QUEJAS A LOS CLIENTES ******************
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
function ConfirmAddQuejas()
{
    var id = $(this)[0].id;
    var request = {"Vendedores":"CargarDatosAddQueja","id_cliente":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        AddQuejaCliente(jsonObject); 
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
               });  
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  FORMULARIO PARA AGREGAR LA QUEJA DEL CLIENTE ******************
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function AddQuejaCliente(jsonObject)
{
    var codigoHTML='<div class="encabezado2">Adicionar Queja</div>'+
                    '<form id="form_crear_queja" enctype="multipart/form-data">'+
                    '<br>'+
                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">IdQuejas</th>'+
                          '<td>'+
                            '<input type="text" name="id_que" value="" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input type="text" name="fecha" value="" id="date_field25"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                         '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="cliente_que" value="'+jsonObject.razon_social+'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="id_usuario" value="4" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad_que" value="'+jsonObject.NombreMunicipio+'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<input type="text" name="depto_que" value="'+jsonObject.nombre_depto+'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="id_cliente" value="'+jsonObject.id_cliente+'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_que" value="'+jsonObject.telefono+'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+                        
                        '<tr>'+
                            '<td colspan="4" align="left">'+
                              'Queja o Reclamo:<br>'+
                              '<textarea name="descripcion" cols="67" rows="6"></textarea>'+
                            '</td>'+
                        '</tr>'+                              
                    '</table>'+                

                    '<br>'+
                    '<table align="center">'+
                      '<tr>'+
                        '<td colspan="4" align="center">'+
                            '<input type="submit" value="Aceptar" class="button" id="OkAddQuejas"/>'+
                            '<input type="button" value="cancelar" class="button" id="NotAddQuejas"/>'+
                        '</td>'+
                      '</tr>'+
                    '</table>'+
                    '</form>'+
                '</div>';

    $("#overAddProducto").css({display: "block"});
    $("#overAddProducto").html(codigoHTML);
    $("#fadeAddProducto").css({display: "block"});
    $('#date_field25').datepick({yearRange: '1980:2050'});
    $('#date_field25').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_crear_queja").submit(crearQueja);
    activadorEventosClientes();
}

function crearQueja(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"AddQueja","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonObj)
                    {
                        verificarAddQueja(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

function verificarAddQueja(jsonObj)
{
    if (jsonObj.AddQueja  =="true")
    {
        alert("La visita se adicionó correctamente");
    }
    
    else
    {
        alert("La visita no se pudo adicionar");
    }   
    
    HideConfirmAddQuejas();
}

function HideConfirmAddQuejas()
{
    $("#overAddProducto").css({display: "none"});
    $("#fadeAddProducto").css({display: "none"});
    activadorEventosClientes();  
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  OPCION DE VISUALIZAR LAS QUEJAS QUE A ECHO EL ******************
//*************  EL CLIENTE
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function VerQuejas()
{
    var id = $(this)[0].id;
    var request = {"Vendedores":"DatosVerQueja","id_queja":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        CargarDatosVerQueja(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletComercial');
                    }
               });
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  FUNCION DE CARGAR EL FORMULARIO CON TODOS LOS DATOS ************
//*************  DE LA QUEJA QUE HIZO EL CLIENTE                     ************
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function CargarDatosVerQueja(jsonObject)
{
    var codigoHTML='<div class="encabezado2">Visualizar Quejas</div>'+
                    '<br>'+
                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">IdQueja</th>'+
                          '<td>'+
                            '<input type="text" name="id_vis" value="'+ jsonObject.id_queja +'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input type="text" name="fecha_vis" value="'+ jsonObject.fecha +'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+                        
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="cliente_vis" value="'+ jsonObject.razon_social +'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad" value="'+ jsonObject.nombre_usuario +'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad_vis" value="'+ jsonObject.NombreMunicipio +'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<input type="text" name="depto_vis" value="'+ jsonObject.nombre_depto +'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="nit_vis" value="'+ jsonObject.id_cliente +'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="'+ jsonObject.telefono +'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+                        
                        '<tr>'+
                            '<td colspan="4" align="left">'+
                              'Queja o Reclamo:<br>'+
                              '<textarea name="descripcion" cols="67" rows="6"  readonly="readonly">'+ jsonObject.descripcion +'</textarea>'+
                            '</td>'+
                        '</tr>'+                              
                    '</table>'+                

                    '<br>'+
                    '<table align="center">'+
                      '<tr>'+
                        '<td colspan="4" align="center">'+                            
                            '<input type="button" value="Volver" class="button" id="NotAddQuejas"/>'+
                        '</td>'+
                      '</tr>'+
                    '</table>'+               
                '</div>';

    $("#overAddProducto").css({display: "block"});
    $("#overAddProducto").html(codigoHTML);
    $("#fadeAddProducto").css({display: "block"});
    activadorEventosClientes();
}


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
function ConfirmAddRecaudo()
{
    var id = $(this)[0].id;
    var request = {"Vendedores":"CargarDatosAddQueja","id_cliente":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        AddPagoCliente(jsonObject); 
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
               });  
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  FORMULARIO PARA AGREGAR LOS PAGOS A LOS CLIENTES*****************
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function AddPagoCliente(jsonObject)
{
    var codigoHTML='<div class="encabezado2">Adicionar Pago</div>'+
                     '<form id="form_crear_pago" enctype="multipart/form-data">'+
                    '<br>'+
                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">IdRecaudo</th>'+
                          '<td>'+
                            '<input type="text" name="id_vis" value="" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input type="text" name="fecha" value="" id="date_field26"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="cliente_que" value="'+jsonObject.razon_social+'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="id_usuario" value="4" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad_que" value="'+jsonObject.NombreMunicipio+'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<input type="text" name="depto_que" value="'+jsonObject.nombre_depto+'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="id_cliente" value="'+jsonObject.id_cliente+'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_que" value="'+jsonObject.telefono+'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" colspan="0" style="padding-right:5px;">Estado Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="debe" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" colspan="0" style="padding-right:5px;">Valor $</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="150000" readonly="readonly"/>'+
                          '</td>'+                          
                          '</tr>'+
                          '<th align="right" colspan="0" style="padding-right:5px;">Tipo de Pago</th>'+
                          '<td>'+
                            '<input type="text" name="tipo_de_pago" value=""/>'+
                          '</td>'+
                          '<th align="right" colspan="0" style="padding-right:5px;">Numero de Factura</th>'+
                          '<td>'+
                            '<input type="text" name="numero_de_factura" value=""/>'+
                          '</td>'+
                          '<tr>'+
                          '<th align="right" colspan="2" style="padding-right:5px;">Forma de Pago</th>'+
                          '<td>'+
                            '<input type="text" name="forma_de_pago" value=""/>'+
                          '</tr>'+
                        '<tr>'+
                            '<td colspan="4" align="left">'+
                              'Comentario:<br>'+
                              '<textarea name="descripcion" cols="67" rows="6"></textarea>'+
                            '</td>'+
                        '</tr>'+                              
                    '</table>'+                

                    '<br>'+
                    '<table align="center">'+
                      '<tr>'+
                        '<td colspan="4" align="center">'+
                            '<input type="submit" value="Aceptar" class="button" id="OkAddRecaudo"/>'+
                            '<input type="button" value="cancelar" class="button" id="NotAddRecaudo"/>'+
                        '</td>'+
                      '</tr>'+
                    '</table>'+
                    '</form>'+
                '</div>';

    $("#overAddProducto").css({display: "block"});
    $("#overAddProducto").html(codigoHTML);
    $("#fadeAddProducto").css({display: "block"});
    $('#date_field26').datepick({yearRange: '1980:2050'});
    $('#date_field26').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_crear_pago").submit(crearPago);
    activadorEventosClientes();
}

function crearPago(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Vendedores":"AddPago","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {vendedor:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletVendedor',
                    success: function(jsonObj)
                    {
                        verificarAddPago(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  MENSAJE QUE SE MUESTRA PARA INDICARNOS SI EL PAGO***************
//*************  SE GUARDO CORRECTAMENTE
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function verificarAddPago(jsonObj)
{
    if (jsonObj.AddPago  =="true")
    {
        alert("El pago se adicionó correctamente");
    }
    
    else
    {
        alert("El pago no se pudo adicionar");
    }   
    
    HideConfirmAddRecaudo();
}


function HideConfirmAddRecaudo()
{
    $("#overAddProducto").css({display: "none"});
    $("#fadeAddProducto").css({display: "none"});
    activadorEventosClientes();  
}


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
function VerRecaudo()
{
    var id = $(this)[0].id;
    var request = {"Vendedores":"DatosVerPago","id_pago":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        CargarDatosVerRecaudo(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletComercial');
                    }
               });
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  FUNCION DE VISUALIZAR EL PAGO(RECAUDO) QUE HIZO EL CLIENTE******
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function CargarDatosVerRecaudo(jsonObject)
{
    var codigoHTML='<div class="encabezado2">Visualizar Recaudo</div>'+
                    '<br>'+
                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">IdRecaudo</th>'+
                          '<td>'+
                            '<input type="text" name="id_vis" value="'+jsonObject.id_pago+'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input type="text" name="fecha" value="'+jsonObject.fecha+'" id="date_field26" />'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="cliente_que" value="'+jsonObject.razon_social+'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="id_usuario" value="'+ jsonObject.nombre_usuario +'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad_que" value="'+jsonObject.NombreMunicipio+'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<input type="text" name="depto_que" value="'+jsonObject.nombre_depto+'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="id_cliente" value="'+jsonObject.id_cliente+'" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_que" value="'+jsonObject.telefono+'" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" colspan="0" style="padding-right:5px;">Estado Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="debe" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" colspan="0" style="padding-right:5px;">Valor $</th>'+
                          '<td>'+
                            '<input type="text" name="cantidad_de_pago" value="'+ jsonObject.cantidad_de_pago +'" readonly="readonly"/>'+
                          '</td>'+                          
                          '</tr>'+
                          '<th align="right" colspan="0" style="padding-right:5px;">Tipo de Pago</th>'+
                          '<td>'+
                            '<input type="text" name="tipo_de_pago" value="'+ jsonObject.tipo_de_pago +'"/>'+
                          '</td>'+
                          '<th align="right" colspan="0" style="padding-right:5px;">Numero de Factura</th>'+
                          '<td>'+
                            '<input type="text" name="numero_de_factura" value="'+ jsonObject.numero_de_factura +'"/>'+
                          '</td>'+
                          '<tr>'+
                          '<th align="right" colspan="2" style="padding-right:5px;">Forma de Pago</th>'+
                          '<td>'+
                            '<input type="text" name="forma_de_pago" value="'+ jsonObject.forma_de_pago +'"/>'+
                          '</tr>'+
                        '<tr>'+
                            '<td colspan="4" align="left">'+
                              'Comentario:<br>'+
                              '<textarea name="descripcion" cols="67" rows="6">'+ jsonObject.descripcion +'</textarea>'+
                            '</td>'+
                        '</tr>'+                              
                    '</table>'+                
                    '<br>'+
                    '<table align="center">'+
                      '<tr>'+
                        '<td colspan="4" align="center">'+                            
                            '<input type="button" value="Volver" class="button" id="NotAddRecaudo"/>'+
                        '</td>'+
                      '</tr>'+
                    '</table>'+                    
                '</div>';
    $("#overAddProducto").css({display: "block"});
    $("#overAddProducto").html(codigoHTML);
    $("#fadeAddProducto").css({display: "block"});
    activadorEventosClientes();
}

////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
function DatosVerProducto()
{
    var id = $(this)[0].id;
    var request = {"Vendedores":"DatosProducto","codigo_producto":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {vendedor:jsonobj},
                    dataType: 'json',
                    url: 'ServletVendedor',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerProducto(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
               });
}

//*******************************************************************************
//*******************************************************************************
//*******************************************************************************
//*************  FUNCION DEL MENU ORIZONTAL PRODUCTOS DONDE SE ENCUENTRA*********
//*************  LA OPCION VISUALIZAR LOS DETALLES DEL PRODUCTO
//*******************************************************************************
//*******************************************************************************
//*******************************************************************************

function VerProducto(jsonObject)
{
    var codigoHTML= '<div class="encabezado2">Visualizar Producto</div>'+
                    '<table align="center" border="0" align="left">'+
                          '<tr>'+
                              '<td colspan="2" rowspan="8" align="center">'+
                                  '<div class="foto">'+
                                      '<div class="imagen">'+
                                          '<img src="images/traje.png" align="center">'+
                                      '</div>'+                                               
                                  '</div>'+
                              '</td>'+
                          '</tr>'+
                          '<br>'+
                          '<br>'+
                          '<tr>'+
                            '<th align="right" style="padding-right:10px;">IdPoducto</th>'+
                            '<td><input type="text" name="id_producto" value="' + jsonObject.codigo_producto + '" size="20"/ readonly="readonly"></td>'+                                                                   
                            '<th align="right" style="padding-right:10px;">Nombre</th>'+
                            '<td><input type="text" name="nombre_producto" value="' + jsonObject.nombre + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                          '</tr>'+
                          '<tr>'+
                            '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+
                            '<td><input type="text" name="linea_produccion" value="' + jsonObject.nombre_linea + '" size="20" readonly="readonly"/></td>'+
                            '<th align="right" style="padding-right:5px;">Cantidad</th>'+
                            '<td><input type="text" name="cantidad_producto" value="' + jsonObject.cantidad + '" size="20" readonly="readonly"/></td>'+
                          '</tr>'+
                          '<tr>'+
                            '<th align="right" style="padding-right:5px;">Material</th>'+
                            '<td><input type="text" name="material_producto" value="' + jsonObject.material + '" size="20" maxlength="15" readonly="readonly" /></td>'+                                  
                            '<th align="right" style="padding-right:5px;">Color</th>'+
                            '<td><input type="text" name="color_producto" value="' + jsonObject.color + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                          '</tr>'+
                          '<tr>'+
                            '<th align="right" style="padding-right:5px;">Talla</th>'+
                            '<td><input type="text" name="talla_producto" value="' + jsonObject.talla + '" size="20" maxlength="10" readonly="readonly" /></td>'+                                 
                            '<th align="right" style="padding-right:5px;">Precio $</th>'+
                            '<td><input type="text" name="precio_producto" value="' + jsonObject.precio_venta + '" size="20" maxlength="15" readonly="readonly" /></td>'+
                          '</tr>'+
                          '<br>'+
                          '<br>'+                                                                
                      '</table>'+
                      '<table align="center">'+
                      '<tr>'+
                        '<td colspan="4" align="center">'+
                            '<input type="button" value="Volver" class="button" id="VolverProducto" />'+                                  
                        '</td>'+
                      '</tr>'+
                    '</table> ';

    $("#datos").html(codigoHTML);   
    activadorEventosProductos();
}

