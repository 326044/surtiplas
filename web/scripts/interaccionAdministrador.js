//***********************************************************************************
//***********************************************************************************
//*******    RUTINA QUE SE EJECUTA AL CARGARSE LA PAGINA WEB     ********************
//***********************************************************************************
//***********************************************************************************

var pagina;
var TablaViaticos=null;
var TablaVisitas=null;
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
/********************       OPCION USUARIOS      ************************************/
/************************************************************************************/
    
    // Variables
    var Usuarios;
    Usuarios=$("#Usuarios");
    Usuarios.click(menuUsuarios);
    //Inicializacion de las opciones
    menuUsuarios();
    
    $(".nav .menu li a#Usuarios").addClass("active");
    activadorEventosUsuarios();

/************************************************************************************/
/********************       OPCION CLIENTES        **********************************/
/************************************************************************************/
    
    // Variables
    var clientes;
    //Inicializacion de las opciones
    clientes=$("#Clientes");
    clientes.click(menuClientes);

/************************************************************************************/
/********************       OPCION PRODUCTOS       **********************************/
/************************************************************************************/
    
    // Variables
    var productos;
	//Inicializacion de las opciones
	productos=$("#Productos");
	productos.click(menuProductos);

/************************************************************************************/
/********************       OPCION PERFIL       *************************************/
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
//*************  DE LA SECCION USUARIOS                        *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function activadorEventosUsuarios()
{
// VARIABLES DEL MENU VERTICAL DE LA OPCION USUARIOS
    var listadoV, visitasV, viaticosV;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    listadoV=$("#listadoUsuarios");
    listadoV.click(seccionListado);
    visitasV=$("#VisitasVendedor");
    visitasV.click(seccionVisitas);
    viaticosV=$("#viaticosVendedor");
    viaticosV.click(seccionViaticos);
//*******************************************************
//** VARIABLES DE LAS OPCIONES DEL LISTADO DE USUARIOS **
//*******************************************************
    var adicionarU, modificarU, borrarU, visualizarU;
    var volverUsuario, vBorrarOk, vBorrarU, vHideDelU;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    adicionarU=$("#AUsuario");
    adicionarU.click(AddUsuario);
    modificarU=$(".ModUsuario");
    modificarU.click(DatosModUsuario);
    visualizarU=$(".VerUsuario");
    visualizarU.click(DatosVerUsuario);
    borrarU=$(".DelUsuario");
    borrarU.click(DatosDelUsuario);

    volverUsuario=$("#volverAddUsuario");
    volverUsuario.click(seccionListado);
    vBorrarU=$("#borrarUsuario");
    vBorrarU.click(ConfirmDelUsuario);
    vBorrarOk=$("#OkDelUsuario");
    vBorrarOk.click(DelUsuarioOk);
    vHideDelU=$("#NotDelUsuario");
    vHideDelU.click(HideConfirmDelUsuario); 
//******************************************************
//** VARIABLES DE LAS OPCIONES DEL LISTADO DE VISITAS **
//******************************************************
    var addVisita, modVisita, delVisita, verVisita;
    var volverVisitas, vBorrarOk, verVisita, delVisita, hideDelVisita, vBorrarV;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    addVisita=$("#AdVisita");
    addVisita.click(AddVisita);
    modVisita=$(".ModVisita");
    modVisita.click(DatosModVisita);
    verVisita=$(".VerVisita");
    verVisita.click(DatosVerVisita);
    delVisita=$(".DelVisita");
    delVisita.click(DatosDelVisita);
    
    vBorrarOk=$("#OkDelVisita");
    vBorrarOk.click(DelVisitaOk);
    vBorrarV=$("#borrarVisita");
    vBorrarV.click(ConfirmDelVisita);
    hideDelVisita=$("#NotDelVisita");
    hideDelVisita.click(HideConfirmDelVisita);
    volverVisitas=$("#volverVisita");
    volverVisitas.click(seccionVisitas);
//*******************************************************
//** VARIABLES DE LAS OPCIONES DEL LISTADO DE VIATICOS **
//*******************************************************
    var addViatico, modViatico, verViatico, delViatico;
    var VBorrarOk, VBorrarV, hideDelViatico, volverViatico;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    addViatico=$("#AddViatico");
    addViatico.click(AddViatico);
    modViatico=$(".ModViatico");
    modViatico.click(DatosModViatico);
    verViatico=$(".VerViatico");
    verViatico.click(DatosVerViatico);
    delViatico=$(".DelViatico");
    delViatico.click(DatosDelViatico);
    
    VBorrarOk=$("#OkDelViatico");
    VBorrarOk.click(DelViaticoOk);
    VBorrarV=$("#borrarViatico");
    VBorrarV.click(ConfirmDelViatico);
    hideDelViatico=$("#NotDelViatico");
    hideDelViatico.click(HideConfirmDelViatico);
    volverViatico=$("#volverViatico");
    volverViatico.click(seccionViaticos);
}

function ActivadorEventosClientes()
{
// VARIABLES DEL MENU VERTICAL DE LA OPCION VENDEDORES
    var listadoC, pedidosC, devolucionesC;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    listadoC=$("#listadoClientes");
    listadoC.click(seccionListadoClientes);
    pedidosC=$("#pedidosClientes");
    pedidosC.click(seccionPedidosC); 
    devolucionesC=$("#devolucionesClientes");
    devolucionesC.click(seccionDevolucionesC);

//*******************************************************
//** VARIABLES DE LAS OPCIONES DEL LISTADO DE CLIENTES **
//*******************************************************
    var adicionarC, modificarC, borrarC, visualizarC, reporteP;
    var CBorrarOk, volverCliente, BorrarC, vHideDelC;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    adicionarC=$("#ACliente");
    adicionarC.click(AddCliente);
    modificarC=$(".ModCliente");
    modificarC.click(DatosModClientes);
    visualizarC=$(".VerCliente");
    visualizarC.click(DatosVerCliente);
    borrarC=$(".DelCliente");
    borrarC.click(DatosDelCliente);
    
    CBorrarOk=$("#OkDelCliente");
    CBorrarOk.click(DelClienteOk);
    volverCliente=$("#volverAddCliente");
    volverCliente.click(seccionListadoClientes);
    BorrarC=$("#borrarCliente");
    BorrarC.click(ConfirmDelCliente);
    vHideDelC=$("#NotDelCliente");
    vHideDelC.click(HideConfirmDelCliente);
//********************************************************
//** VARIABLES DE LAS OPCIONES DEL LISTADO DE PEDIDOS   **
//********************************************************
    var adicionP, modificarp, visualizarp, borrarP;
    var PBorrarOk,volverPedido, BorrarP, HideDelP;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    adicionP=$("#AddPedido");
    adicionP.click(AddPedido);
    modificarp=$(".ModPedido");
    modificarp.click(DatosModPedido);
    visualizarp=$(".VerPedido");
    visualizarp.click(DatosVerPedido);
    borrarP=$(".DelPedido");
    borrarP.click(DatosDelPedido);
    
    PBorrarOk=$("#OkDelPedido");
    PBorrarOk.click(DelPedidoOk);
    volverPedido=$("#volverAddPedido");
    volverPedido.click(seccionPedidosC);
    BorrarP=$("#borrarPedido");
    BorrarP.click(ConfirmDelPedido);
    HideDelP=$("#NotDelPedido");
    HideDelP.click(HideConfirmDelPedido);
//***********************************************************
//** VARIABLES DE LAS OPCIONES DEL LISTADO DE DEVOLUCIONES **
//***********************************************************
    var adiciond, modificard, visualizard, borrard;
    var DBorrarOk,volverDevolucion, Borrard, HideDeld;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    adiciond=$("#AddDevolucion");
    adiciond.click(AddDevolucion);
    modificard=$(".ModDevolucion");
    modificard.click(DatosModDevolucion);
    visualizard=$(".VerDevolucion");
    visualizard.click(DatosVerDevolucion);
    borrard=$(".DelDevolucion");
    borrard.click(DatosDelDevolucion);
    
    DBorrarOk=$("#OkDelDevolucion");
    DBorrarOk.click(DelDevolucionOk);
    volverDevolucion=$("#volverAddDevolucion");
    volverDevolucion.click(seccionDevolucionesC);
    Borrard=$("#borrarDevolucion");
    Borrard.click(ConfirmDelDevolucion);
    HideDeld=$("#NotDelDevolucion");
    HideDeld.click(HideConfirmDelDevolucion);
}
function  activadorEventosProductos()
{
// VARIABLES DEL MENU VERTICAL DE LA OPCION PRODUCTOS
    var listadoP, LinasP, coloresP, tallasP, materialesP;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    listadoP=$("#listadoProductos");
    listadoP.click(seccionListadoProductos);
    LinasP=$("#lineasProd");
    LinasP.click(seccionListadolineas);
    coloresP=$("#coloresProductos");
    coloresP.click(MenuColores);
    tallasP=$("#tallasProductos");
    tallasP.click(Menutallas);
    materialesP=$("#materialesProductos");
    materialesP.click(Menumateriales);
//********************************************************
//** VARIABLES DE LAS OPCIONES DEL LISTADO DE PRODUCTOS **
//********************************************************
    var adicionarP, modificarP, borrarP, visualizarP, reporteP;
    var PBorrarOk,volverProducto, vBorrarP, vHideDelP;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    adicionarP=$("#AProducto");
    adicionarP.click(AddProducto);
    modificarP=$(".ModProducto");
    modificarP.click(DatosModProductos);
    visualizarP=$(".VerProducto");
    visualizarP.click(DatosVerProducto);
    borrarP=$(".DelProducto");
    borrarP.click(DatosDelProducto);
    
    PBorrarOk=$("#OkDelProducto");
    PBorrarOk.click(DelProductoOk);
    volverProducto=$("#volverAddProducto");
    volverProducto.click(seccionListadoProductos);
    vBorrarP=$("#borrarProducto");
    vBorrarP.click(ConfirmDelProducto);
    vHideDelP=$("#NotDelProducto");
    vHideDelP.click(HideConfirmDelProducto); 
//*******************************************************************
//** VARIABLES DE LAS OPCIONES DEL LISTADO DE LINEAS DE PRODUCCION **
//*******************************************************************
    var addLinea, modLinea, verLinea, delLinea, PBorrarLOk;
    var volverLinea, VBorrarV, hideDelViatico, hideAddLinea;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    verLinea=$(".VerLinea");
    verLinea.click(DatosVerLinea);
    delLinea=$(".DelLinea");
    delLinea.click(DatosDelLinea);
    PBorrarLOk=$("#OkDelLinea");
    PBorrarLOk.click(DelLineaOk);
    volverLinea=$("#NotDelLinea");
    volverLinea.click(HideConfirmAddLinea);
    
    addLinea=$(".addLinea");
    addLinea.click(ConfirmAddLinea);
    modLinea=$(".ModLinea");
    modLinea.click(DatosModlinea);
    hideAddLinea=$("#NotAddLinea");
    hideAddLinea.click(HideConfirmAddLinea);
    
//*******************************************************************
//** VARIABLES DE LAS OPCIONES DEL LISTADO DE LINEAS DE PRODUCCION **
//*******************************************************************
    var addColor, modColor, verColor, delColor, PBorrarCOk;
    var volverColor, hideAddColor;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    verColor=$(".VerColor");
    verColor.click(DatosVerColor);
    delColor=$(".DelColor");
    delColor.click(DatosDelColor);
    PBorrarCOk=$("#OkDelColor");
    PBorrarCOk.click(DelColorOk);
    volverColor=$("#NotDelColor");
    volverColor.click(HideConfirmAddLinea);
    
    addColor=$(".addColor");
    addColor.click(ConfirmAddColor);
    modColor=$(".ModColor");
    modColor.click(DatosModColor);
    hideAddColor=$("#NotAddColor");
    hideAddColor.click(HideConfirmAddColor);
    
//*******************************************************************
//** VARIABLES DE LAS OPCIONES DEL LISTADO DE LINEAS DE PRODUCCION **
//*******************************************************************
    var AddTalla, modTalla, verTalla, delTalla, PBorrarTOk;
    var volverTalla, VBorrarV, hideDelViatico, hideAddTalla;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    verTalla=$(".VerTalla");
    verTalla.click(DatosVerTalla);
    delTalla=$(".DelTalla");
    delTalla.click(DatosDelTallas);
    PBorrarTOk=$("#OkDelTalla");
    PBorrarTOk.click(DelTallaOk);
    volverTalla=$("#NotDelTalla");
    volverTalla.click(HideConfirmAddLinea);
    
    AddTalla=$(".AddTalla");
    AddTalla.click(ConfirmAddTalla);
    modTalla=$(".ModTalla");
    modTalla.click(DatosModTalla);
    hideAddTalla=$("#NotAddTalla");
    hideAddTalla.click(HideConfirmAddTalla);
    
//*******************************************************************
//** VARIABLES DE LAS OPCIONES DEL LISTADO DE LINEAS DE PRODUCCION **
//*******************************************************************
    var AddMaterial, modMaterial, verMaterial, delMaterial, PBorrarMOk;
    var volverMaterial, hideAddMaterial;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    verMaterial=$(".VerMaterial");
    verMaterial.click(DatosVerMaterial);
    delMaterial=$(".DelMaterial");
    delMaterial.click(DatosDelMaterial);
    PBorrarMOk=$("#OkDelMaterial");
    PBorrarMOk.click(DelMaterialOk);
    volverMaterial=$("#NotDelMaterial");
    volverMaterial.click(HideConfirmAddLinea);
    
    AddMaterial=$(".AddMaterial");
    AddMaterial.click(ConfirmAddMaterial);
    modMaterial=$(".ModMaterial");
    modMaterial.click(DatosModMaterial);
    hideAddMaterial=$("#NotAddMaterial");
    hideAddMaterial.click(HideConfirmAddMaterial);
}
function activadorEventosPerfil()
{
//********************************************************
//** VARIABLES DE LAS OPCIONES DEL LISTADO DE PRODUCTOS **
//********************************************************
    var modificarA;
    var PBorrarOk,volverProducto, vBorrarP, vHideDelP;
// ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    modificarA=$(".ModPerfil");
    modificarA.click(seccionDatosPerfil);
    volverProducto=$("#volverAddProducto");
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
//*************  VERTICAL DE LA SECCION USUARIOS               *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function menuUsuarios()
{
   var codigoHTML = '<div class="encabezado">Gestión de Usuarios</div>'+
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoUsuarios"><img src="images/IconoOpciones.png"/> Listado</a></li>'+
                        '<li><a href="#2" id="VisitasVendedor"><img src="images/IconoOpciones.png"/> Visitas</a></li>'+
                        '<li><a href="#4" id="viaticosVendedor"><img src="images/IconoOpciones.png"/> Viáticos</a></li>'+
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".content-float-vendedores").show();
    $(".content-float-vendedores").css({height: 130});
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionListado();
    $(".menu-vertical li a#listadoUsuarios").addClass("active");
    activadorEventosUsuarios();
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
   var codigoHTML = '<div class="encabezado">Gestión de Clientes</div>'+
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoClientes"><img src="images/IconoOpciones.png"/> Listado</a></li>'+
                        '<li><a href="#2" id="pedidosClientes"><img src="images/IconoOpciones.png"/> Pedidos</a></li>'+
                        '<li><a href="#3" id="devolucionesClientes"><img src="images/IconoOpciones.png"/> Devoluciones</a></li>'+
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".content-float-vendedores").show();
    $(".content-float-vendedores").css({height: 130});
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionListadoClientes();
    $(".menu-vertical li a#listadoClientes").addClass("active");
    ActivadorEventosClientes();
}

//****************************************************************************************
//****************************************************************************************
//*************                                                      *********************
//************* FUNCION OPCI0N PEDIDOS DEL MENU VERTICAL DE CLIENTES *********************
//*************                                                      *********************
//****************************************************************************************
//****************************************************************************************

function seccionPedidosC()
{

    var codigoHTML = '<div class="encabezado">Gestión de Clientes</div>'+
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoClientes"><img src="images/IconoOpciones.png"/> Listado</a></li>'+
                        '<li><a href="#2" id="pedidosClientes"><img src="images/IconoOpciones.png"/> Pedidos</a></li>'+
                        '<li><a href="#3" id="devolucionesClientes"><img src="images/IconoOpciones.png"/> Devoluciones</a></li>'+
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".content-float-vendedores").show();
    $(".content-float-vendedores").css({height: 130});
    $(".nav .menu li a#Clientes").addClass("active");
    seccionListadoPedidos();
    $(".menu-vertical li a#pedidosClientes").addClass("active");
    ActivadorEventosClientes();
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
   var codigoHTML = '<div class="encabezado">Gestión de Productos</div>'+
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoProductos"><img src="images/IconoOpciones.png"/> Productos</a></li>'+
                        '<li><a href="#2" id="lineasProd"><img src="images/IconoOpciones.png"/> Lineas de Produccion </a></li>'+
                        '<li><a href="#3" id="coloresProductos"><img src="images/IconoOpciones.png"/> Colores</a></li>'+
                        '<li><a href="#4" id="tallasProductos"><img src="images/IconoOpciones.png"/> Tallas</a></li>'+
                        '<li><a href="#5" id="materialesProductos"><img src="images/IconoOpciones.png"/> Materiales</a></li>'+
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".content-float-vendedores").show();
    $(".content-float-vendedores").css({height: 200});
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionListadoProductos();
    $(".menu-vertical li a#listadoProductos").addClass("active");
    seccionListadoProductos();
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CREA LOS COMPONENTES DEL MENU     *********************
//*************  VERTICAL DE LA SECCION CATEGORIAS              *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function MenuLineas()
{
    var codigoHTML = '<div class="encabezado">Gestión de Productos</div>'+
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoProductos"><img src="images/IconoOpciones.png"/> Productos</a></li>'+
                        '<li><a href="#2" id="lineasProd"><img src="images/IconoOpciones.png"/> Lineas de Produccion </a></li>'+
                        '<li><a href="#3" id="coloresProductos"><img src="images/IconoOpciones.png"/> Colores</a></li>'+
                        '<li><a href="#4" id="tallasProductos"><img src="images/IconoOpciones.png"/> Tallas</a></li>'+
                        '<li><a href="#5" id="materialesProductos"><img src="images/IconoOpciones.png"/> Materiales</a></li>'+
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".content-float-vendedores").show();
    $(".content-float-vendedores").css({height: 200});
    $(".nav .menu li a#Productos").addClass("active");
    $(this).addClass("active");
    seccionListadolineas();
    $(".menu-vertical li a#lineasProd").addClass("active");
    activadorEventosProductos();
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CREA LOS COMPONENTES DEL MENU     *********************
//*************  VERTICAL DE LA SECCION COLORES              *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function MenuColores()

{
    var codigoHTML = '<div class="encabezado">Gestión de Productos</div>'+
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoProductos"><img src="images/IconoOpciones.png"/> Productos</a></li>'+
                        '<li><a href="#2" id="lineasProd"><img src="images/IconoOpciones.png"/> Lineas de Produccion </a></li>'+
                        '<li><a href="#3" id="coloresProductos"><img src="images/IconoOpciones.png"/> Colores</a></li>'+
                        '<li><a href="#4" id="tallasProductos"><img src="images/IconoOpciones.png"/> Tallas</a></li>'+
                        '<li><a href="#5" id="materialesProductos"><img src="images/IconoOpciones.png"/> Materiales</a></li>'+
                    '</ul>'; 
                
    $(".content-float-vendedores").html(codigoHTML);
    $(".content-float-vendedores").show();
    $(".content-float-vendedores").css({height: 200});
    $(".nav .menu li a#Productos").addClass("active");
    $(this).addClass("active");
    seccionListadoColores();
    $(".menu-vertical li a#coloresProductos").addClass("active");
    activadorEventosProductos();
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CREA LOS COMPONENTES DEL MENU     *********************
//*************  VERTICAL DE LA SECCION TALLAS              *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function Menutallas()
{
    var codigoHTML = '<div class="encabezado">Gestión de Productos</div>'+
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoProductos"><img src="images/IconoOpciones.png"/> Productos</a></li>'+
                        '<li><a href="#2" id="lineasProd"><img src="images/IconoOpciones.png"/> Lineas de Produccion </a></li>'+
                        '<li><a href="#3" id="coloresProductos"><img src="images/IconoOpciones.png"/> Colores</a></li>'+
                        '<li><a href="#4" id="tallasProductos"><img src="images/IconoOpciones.png"/> Tallas</a></li>'+
                        '<li><a href="#5" id="materialesProductos"><img src="images/IconoOpciones.png"/> Materiales</a></li>'+
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".content-float-vendedores").show();
    $(".content-float-vendedores").css({height: 200});
    $(".nav .menu li a#Productos").addClass("active");
    $(this).addClass("active");
    seccionListadoTalla();
    $(".menu-vertical li a#tallasProductos").addClass("active");
    activadorEventosProductos(); 
}

//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//***********************                    SECCION DE USUARIOS                    ***********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function Menumateriales()

{
    var codigoHTML = '<div class="encabezado">Gestión de Productos</div>'+
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoProductos"><img src="images/IconoOpciones.png"/> Productos</a></li>'+
                        '<li><a href="#2" id="lineasProd"><img src="images/IconoOpciones.png"/> Lineas de Produccion </a></li>'+
                        '<li><a href="#3" id="coloresProductos"><img src="images/IconoOpciones.png"/> Colores</a></li>'+
                        '<li><a href="#4" id="tallasProductos"><img src="images/IconoOpciones.png"/> Tallas</a></li>'+
                        '<li><a href="#5" id="materialesProductos"><img src="images/IconoOpciones.png"/> Materiales</a></li>'+
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".content-float-vendedores").show();
    $(".content-float-vendedores").css({height: 200});
    $(".nav .menu li a#Productos").addClass("active");
    $(this).addClass("active");
    seccionListadoMateriales();
    $(".menu-vertical li a#materialesProductos").addClass("active");
    activadorEventosProductos();  
}

//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//***********************                    SECCION DE USUARIOS                    ***********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function seccionListado()
{
    var request = {"Usuarios":"Listado"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarListado(jsonArray);     
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//***********************   FUNCION PARA CARGAR LOS DATOS DE LA SECCION USUARIOS    ***********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function cargarListado(jsonArray)
{    
   var codigoHTML =      '<div class="encabezado2">Listado de Usuarios</div>'+
                                        '<div class="tabla">'+
                                                '<table class="tbonita">'+
                                                        '<tr align="left">'+
                                                                '<th><img src="images/b_insrow.png" title="Agregar" id="AUsuario"/></th>'+
                                                                '<th><a href="ServletInformes?informe=ListadoUsuariosPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                                                                '<th><a href="servletInformes?informe=reporteUsuariosXLS"><img src="images/iconoExcel.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                                                                '<th>Cedula</th>'+
                                                                '<th>Nombres</th>'+
                                                                '<th>Apellidos</th>'+
                                                                '<th>Teléfono</th>'+
                                                                '<th>Celular</th>'+
                                                                '<th>email</th>'+
                                                        '</tr>';
                                 
    for (var i = 0; i < jsonArray.length; i++)
    {
            if (i % 2 === 0)
                codigoHTML+=               '<tr>';
           else
                codigoHTML+=               '<tr class="even">';
            
           codigoHTML+=                            '<td><img src="images/b_edit.png" title="Modificar" class="ModUsuario" id="' + jsonArray[i].id_usuario + '" /></td>'+
                                                               '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" id="' + jsonArray[i].id_usuario + '" /></td>'+
                                                               '<td><img src="images/b_search.png" title="Visualizar" class="VerUsuario" id="' + jsonArray[i].id_usuario + '" /></td>';
            codigoHTML+=                          '<td>' + jsonArray[i].cedula_usuario + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].nombre_usuario + '</td>';  
            codigoHTML+=                          '<td>' + jsonArray[i].apellidos_usuario + '</td>'; 
            codigoHTML+=                          '<td>' + jsonArray[i].telefono_usuario + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].celular_usuario + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].email_usuario + '</td>';
            codigoHTML+=                   '</tr>';
            
    }
    
    codigoHTML+=                '</table>'+
                                  '</div>';
    
    $("#datos").html(codigoHTML);
    $(".tbonita").css({width: 620});
    $(".content-float-datos").css({width: 630});
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#listadoUsuarios").addClass("active");
    activadorEventosUsuarios();
}

//**********************************************************************************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DE ADICIONAR, MODIFICAR,   *********************
//*************  VISUALIZAR, BORRAR Y GENERAR INFORME EN LA    *********************
//*************  OPCION LISTADO DE LOS USUARIOS              *********************
//**********************************************************************************

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//*********************************************************************************************************
//***********************                                                           ***********************
//***********************         FUNCION PARA ADICIONAR A UN NUEVO USUARIO         ***********************
//***********************                                                           ***********************
//*********************************************************************************************************

function AddUsuario()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Usuario</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Personal</a></li>'+
                            '<li><a href="#Laboral">Laboral</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                              '<form id="form_enviar_foto"  enctype="multipart/form-data">'+
                                '<table align="center" border="0">'+
                                    '<tr>'+
                                        '<td colspan="2" rowspan="10" align="center">'+
                                            '<div class="foto">'+
                                                '<div class="imagen" id="fotoUsuarios">'+
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
                                '<form id="form_crear_usuario"  enctype="multipart/form-data">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Identificación</th>'+
                                    '<td><input type="text" name="cedula_usuario" value="" size="20" maxlength="15" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellidos_usuario" value="" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombre_usuario" value="" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nickname</th>'+
                                    '<td><input type="text" name="nickname_usuario" value="" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Contraseña</th>'+
                                    '<td><input type="password" name="password_usuario" value="" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '<td align="right" style="padding-right:5px;">Tipo de Usuario</td>'+
                                  '<td>'+
                                    '<select name="tipo_usuario" style="width:168px;">'+
                                      '<option value="A">A</option>'+
                                      '<option value="G">G</option>'+
                                      '<option value="JP">JP</option>'+
                                      '<option value="JC">JC</option>'+
                                      '<option value="V">V</option>'+
                                      '<option value="S">S</option>'+
                                  '</td>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion_usuario" value="" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono_usuario" value="" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular_usuario" value="" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<div id="Laboral" class="tab_content">'+
                              '<table>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Ingreso</th>'+
                                    '<td><input type="text" name="fecha" id="date_field13" value="" /></td>'+
                                    '<th align="right" style="padding-right:5px;">email</th>'+
                                    '<td><input type="text" name="email_usuario" value="" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Cumpleaños</th>'+
                                    '<td><input type="text" name="fecha_cumpleanos" id="date_field14" value="" /></td>'+
                                    '<th align="right" style="padding-right:5px;">Tipo de Cuenta</th>'+
                                    '<td>'+
                                      '<select name="tipo_cuenta_bancaria" style="width:177px">'+
                                        '<option value="1">Ahorros</option>'+
                                        '<option value="2">Corriente</option>'+
                                      '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Numero Cuenta</th>'+
                                    '<td><input type="text" name="numero_cuenta" value="" /></td>'+
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
                                '<th align="left" style="padding-left:5px;">Id Ubicacion</th>'+
                                '<td>'+
                                    '<select name="id_ubicacion" style="width:165px;" class="ubicacion">'+
                                      //'<option value="null"></option>'+
                                     '</select>'+
                                  '</td>'+ 
                               '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Otros datos:<br>'+
                                      '<textarea name="otros_datos" cols="74" rows="6"></textarea>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddUsuario" />'+
                                  '<input type="submit" value="Registrar" class="button" id="AdicionarUsuario"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    listUbicacion();
    IniciarTabers();
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field13').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field14').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_crear_usuario").submit(enviarDatosAddUsuario);
    activadorEventosUsuarios();
    cargarFoto();
}

//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//***********************       FUNCION PARA CARGAR LAS FOTOS DE LOS USUARIOS       ***********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

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
                var rutaFoto = "images/Usuarios/" + file;
                var htmlFoto = '<img src="' + rutaFoto + '" align="center" width="180px">';
                $('#rutaFoto').attr("value",file);
                $('#fotoUsuarios').html(htmlFoto);
        }	
    });
}
//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//*********************** FUNCION PARA EL RETORNO AL LISTADO DE USUARIOS                  ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************
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

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//*********************** FUNCION PARA CARGAR LOS DATOS Y ADICIONARLOS A LA BASE DE DATOS ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosAddUsuario(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray(); 
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"AddUsuario","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                data: {administrador:jsonobj},
                type: 'POST',
                dataType: 'json',
                url: 'ServletAdministrador',
                success: function(jsonObj)
                {
                    verificarAddUsuario(jsonObj);
                },
                error: function() 
                {
                    alert('Error al conectar con el servidor');
                }
           });
}
//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//*********************** FUNCION PARA VERIFICAR QUE LOS DATOS SE HALLAN ADICIONADO ***********************
//***********************                   CORRECTAMENTE                           **********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function verificarAddUsuario(jsonObj)
{
    if (jsonObj.AddUsuario  ==="true")
    {
        alert("El Usuario se adicionó correctamente");
    }
    
    else
    {
        alert("El Usuario no se pudo adicionar");
    }   
    
    seccionListado();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosModUsuario()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosUsuario","Id_usuario":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        ModUsuario(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA MODIFICAR LOS USUARIOS  ********************
//********************                                      ********************
//******************************************************************************

function ModUsuario(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Modificar Usuario</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Personal</a></li>'+
                            '<li><a href="#Laboral">Laboral</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                            '<form id="form_modificar_usuario"  enctype="multipart/form-data">'+
                              '<table align="center" border="0" align="left">'+
                                  '<tr>'+
                                      '<td colspan="2" rowspan="10" align="center">'+
                                          '<div class="foto">'+
                                              '<div class="imagen">'+
                                                  '<img src="images/usuario.png" align="center">'+
                                              '</div>'+
                                              '<div>'+
                                                  '<input type="button" value="Cargar Foto" class="button" '+
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Identificación</th>'+
                                    '<td><input type="text" name="cedula_usuario" value="' + jsonObject.cedula_usuario + '" size="20" maxlength="15" "/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellidos_usuario" value="' + jsonObject.apellidos_usuario+ '" size="20" maxlength="25" "/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombre_usuario" value="' + jsonObject.nombre_usuario + '" size="20" maxlength="25" "/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nickname</th>'+
                                    '<td><input type="text" name="nickname_usuario" value="' + jsonObject.nickname_usuario + '" maxlength="10" "/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Contraseña</th>'+
                                    '<td><input type="password" name="password_usuario" value="' + jsonObject.password_usuario + '" size="20" maxlength="10" "/></td>'+
                                  '</tr>'+
                                    '<td align="right" style="padding-right:5px;">Tipo de Usuario</td>'+
                                  '<td>'+
                                    '<select name="tipo_usuario" style="width:168px;">'+
                                      '<option value="A">A</option>'+
                                      '<option value="G">G</option>'+
                                      '<option value="JP">JP</option>'+
                                      '<option value="JC">JC</option>'+
                                      '<option value="V">V</option>'+
                                      '<option value="S">S</option>'+
                                  '</td>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion_usuario" value="' + jsonObject.direccion_usuario + '" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono_usuario" value="' + jsonObject.telefono_usuario + '" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular_usuario" value="' + jsonObject.celular_usuario + '" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<div id="Laboral" class="tab_content">'+
                              '<table>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Ingreso</th>'+
                                    '<td><input type="text" name="fecha" id="date_field13" value="' + jsonObject.fecha + '" /></td>'+
                                    '<th align="right" style="padding-right:5px;">email</th>'+
                                    '<td><input type="text" name="email_usuario" value="' + jsonObject.email_usuario + '" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Cumpleaños</th>'+
                                    '<td><input type="text" name="fecha_cumpleanos" id="date_field14" value="' + jsonObject.fecha_cumpleanos + '" /></td>'+
                                    '<th align="right" style="padding-right:5px;">Tipo de Cuenta</th>'+
                                    '<td>'+
                                      '<select name="tipo_cuenta_bancaria" style="width:177px">'+
                                        '<option value="1">Ahorros</option>'+
                                        '<option value="2">Corriente</option>'+
                                      '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Numero Cuenta</th>'+
                                    '<td><input type="text" name="numero_cuenta" value="' + jsonObject.numero_cuenta + '" /></td>'+
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
                                '<th align="left" style="padding-left:5px;">Id Ubicacion</th>'+
                                    '<td>'+ 
                                        '<select name="id_ubicacion" style="width:160px;" class="ubicacion">'+
                                            //'<option value="null"></option>'+
                                        '</select>'+ 
                                    '</td>'+
                               '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Otros datos:<br>'+
                                      '<textarea name="otros_datos" cols="74" rows="6">' + jsonObject.otros_datos + '</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                                '<tr>'+
                                    '<td><input type="hidden" name="id_usuarioMod" id="id_usuarioMod" value="' + jsonObject.id_usuario + '" /></td>'+
                                '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddUsuario" />'+
                                  '<input type="submit" value="Registrar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    listUbicacion();
    IniciarTabers();
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field13').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field14').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_modificar_usuario").submit(enviarDatosModUsuario);
    activadorEventosUsuarios();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//*********************** FUNCION PARA ENVIAR LOS DATOS MODIFICADOS A LA BASE DE DATOS    ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosModUsuario(evento)
{
    evento.preventDefault();
    var id_usuario = $("#id_usuarioMod").val();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"ModUsuario","Datos":datos, "Id_usuario":id_usuario};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    success: function(jsonObj)
                    {
                        verificarModUsuario(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//***********************************************************************************************************************
//***********************************************************************************************************************
//***********************                                                                         ***********************
//*********************** FUNCION PARA VERIFICAR QUE LOS DATOS SE HALLAN MODIFICADO CORRECTAMENTE ***********************
//***********************                                                                         ***********************
//***********************************************************************************************************************
//***********************************************************************************************************************

function verificarModUsuario(jsonObj)
{
    if (jsonObj.ModUsuario  ==="true")
    {
        alert("El usuario se modificó correctamente");
    }
    
    else
    {
        alert("El usuario no se pudo modificar");
    }   
    
    seccionListado();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosVerUsuario()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosUsuario","Id_usuario":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerUsuario(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA VISUALIZAR LOS USUARIOS ********************
//********************                                      ********************
//******************************************************************************

function VerUsuario(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Visualizar Usuario</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Personal</a></li>'+
                            '<li><a href="#Laboral">Laboral</a></li>'+
                        '</ul>'+
                        
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                            '<form action="" method="POST" name="form_crear_usuario">'+
                              '<table align="center" border="0" align="left">'+
                                  '<tr>'+
                                      '<td colspan="2" rowspan="10" align="center">'+
                                          '<div class="foto">'+
                                              '<div class="imagen">'+
                                                  '<img src="images/usuario.png" align="center">'+
                                              '</div>'+
                                              '<div>'+
                                                  '<input type="button" value="Cargar Foto" class="button" '+
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Identificación</th>'+
                                    '<td><input type="text" name="cedula_usuario" value="' + jsonObject.cedula_usuario + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellidos_usuario" value="' + jsonObject.apellidos_usuario + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombre_usuario" value="' + jsonObject.nombre_usuario + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nickname</th>'+
                                    '<td><input type="text" name="nickname_usuario" value="' + jsonObject.nickname_usuario + '" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Contraseña</th>'+
                                    '<td><input type="password" name="password_usuario" value="' + jsonObject.password_usuario + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Tipo de Usuario</th>'+
                                    '<td><input type="text" name="tipo_usuario" value="' + jsonObject.tipo_usuario + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion_usuario" value="' + jsonObject.direccion_usuario + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono_usuario" value="' + jsonObject.telefono_usuario + '" size="20" maxlength="12" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular_usuario" value="' + jsonObject.celular_usuario + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<div id="Laboral" class="tab_content">'+
                              '<table>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Ingreso</th>'+
                                    '<td><input type="text" name="fecha" id="date_field13" value="' + jsonObject.fecha + '" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">email</th>'+
                                    '<td><input type="text" name="email" value="' + jsonObject.email_usuario + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Cumpleaños</th>'+
                                    '<td><input type="text" name="fecha_cumpleanos" id="date_field14" value="' + jsonObject.fecha_cumpleanos + '" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Tipo de Cuenta</th>'+
                                    '<td><input type="text" name="tipo_cuenta_bancaria" value="' + jsonObject.tipo_cuenta_bancaria + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Numero Cuenta</th>'+
                                    '<td><input type="text" name="numero_cuenta" value="' + jsonObject.numero_cuenta + '" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Banco</th>'+
                                    '<td><input type="text" name="banco" value="' + jsonObject.banco + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id ubicacion</th>'+
                                    '<td><input type="text" name="id_ubicacion" value="' + jsonObject.id_ubicacion + '" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Otros datos:<br>'+
                                      '<textarea name="otros_datos" cols="74" rows="6" readonly="readonly">' + jsonObject.otros_datos + '</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddUsuario" />'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';
                    
    $("#datos").html(codigoHTML);
    IniciarTabers();
    activadorEventosUsuarios();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosDelUsuario()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosUsuario","Id_usuario":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        DelUsuario(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA ELIMINAR LOS USUARIOS  ********************
//********************                                      ********************
//******************************************************************************

function DelUsuario(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Borrar Usuario</div>'+
                     '<div class="tabla">'+
                        '<form action="" method="POST" name="form_borrar_usuario">'+
                            '<table align="center" border="0" align="left">'+
                                '<tr>'+
                                    '<td colspan="2" rowspan="9" align="center">'+
                                        '<div class="foto">'+
                                            '<div class="imagen">'+
                                                '<img src="images/usuario.png" align="center">'+
                                            '</div>'+
                                        '</div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+
                                   '<th align="right" style="padding-right:5px;">Identificación:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">' + jsonObject.cedula_usuario + '</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Apellidos:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">' + jsonObject.apellidos_usuario + '</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Nombres:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">' + jsonObject.nombre_usuario + '</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Nickname:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">' + jsonObject.nickname_usuario + '</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Contraseña:</th>'+
                                  '<td type="password" style="font-size:15px; color: #000; font-weight:bold;">######</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Dirección:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">' + jsonObject.direccion_usuario + '</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Teléfono:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">' + jsonObject.telefono_usuario + '</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Celular:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">' + jsonObject.celular_usuario + '</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Fecha Ingreso:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">' + jsonObject.fecha + '</td>'+
                                  '<th align="right" style="padding-right:5px;">email:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">' + jsonObject.email_usuario + '</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td colspan="4" align="center">'+
                                      '<input type="button" value="Volver" class="button" id="volverAddUsuario" />'+
                                      '<a href="#DelV" class="button" name="' + jsonObject.id_usuario + '" id="borrarUsuario" style="text-decoration:none; padding:2px 4px 2px 4px;">Borrar<a/>'+
                                  '</td>'+
                                '</tr>'+
                            '</table>'+       
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    activadorEventosUsuarios();
}

function ConfirmDelUsuario()
{
    var id = $(this)[0].name;
    var codigoHTML = '<div class="encabezado2">Borrar Usuario</div>'+
                        '<table align="center">'+
                           '<tr>'+
                              '<th>Está seguro que desea borrar el Usuario?</th>'+
                            '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Si" class="button" id="OkDelUsuario" name="' + id + '"/>'+
                                '<input type="button" value="No" class="button" id="NotDelUsuario"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosUsuarios();
}

function DelUsuarioOk()
{
    var id = $(this)[0].name; 
    var request = {"Usuarios":"DelUsuario","Id_usuario":id};
    var jsonobj=JSON.stringify(request);
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        verificarDelUsuario(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

function verificarDelUsuario(jsonObj)
{
    if (jsonObj.DelUsuario  ==="true")
    {
        alert("El usuario se ha borrado correctamente");
    }
    
    else
    {
        alert("El usuario no se pudo borrar");
    }   
    
    seccionListado();
}

function HideConfirmDelUsuario()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosUsuarios(); 
}

//***********************************************************************************
//********************                                           ********************
//******************** FUNCION PARA CARGAR EL LISTADO DE VISITAS ********************
//********************                                           ********************
//***********************************************************************************
function seccionVisitas()
{    
   var codigoHTML =      '<div class="encabezado2">Listado de Visitas</div>'+
                            '<div class="tabla">'+
                                '<form action="" method="POST" id="form_buscar_Visitas">'+
                                    '<table align="center" border="0" align="left">'+
                                        '<tr>'+ 
                                             '<th align="left" style="padding-left:5px;">Id Usuario</th>'+
                                                '<td>'+
                                                '<select name="id_usuario" style="width:165px;" class="vendor">'+
                                                  //'<option value="null"></option>'+
                                                 '</select>'+
                                              '</td>'+
                                            '</tr>'+ 

                                            '<tr>'+ 
                                                '<th align="right" style="padding-right:5px;">Fecha Inicial</th>'+ 
                                                '<td>'+ 
                                                  '<input id="date_field1" type="text" name="fechaInicio" value="" style="font-size:14px;"/>'+ 
                                                '</td>'+ 
                                                '<th align="right" style="padding-right:5px;">Fecha Final</th>'+ 
                                                '<td>'+ 
                                                  '<input id="date_field2" type="text" name="fechaFin" value=""/>'+ 
                                                '</td>'+ 
                                            '</tr>'+ 

                                            '<tr>'+ 
                                                '<td colspan="4" align="center"><br>'+ 
                                                  '<input type="submit" value="Buscar" class="button" />'+ 
                                                '</td>'+ 
                                            '</tr> '+ 
                                        '</table>'+
                                      '</from>'+
                                      '<br>'+
                                        '<table class="tbonita" align="center" id="tablaVisitas">'+
                                            '<tr align="left">'+
                                                    '<th><img src="images/b_insrow.png" title="Agregar" id="AdVisita"/></th>'+
                                                    '<th><a href="ServletInformes?informe=ListadoVisitasPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                                                    '<th><a href="servletInformes?informe=reporteUsuariosXLS"><img src="images/iconoExcel.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                                                    '<th>Id Visita</th>'+
                                                    '<th>Fecha</th>'+
                                                    '<th>Id Cliente</th>'+
                                                    '<th>Id Usuario</th>'+
                                            '</tr>'+
                                        '</div>';
    $("#datos").html(codigoHTML);
    $(".tbonita").css({width: 600});
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#VisitasVendedor").addClass("active");
    if (TablaVisitas !== null)
    {
        tablaVisitas(TablaVisitas);
    }
    cargarListadoVendedores();
    IniciarTabers();
    $('#date_field1').datepick({yearRange: '1980:2050'});
    $('#date_field1').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field2').datepick({yearRange: '1980:2050'});
    $('#date_field2').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_buscar_Visitas").submit(buscarVisita);
    activadorEventosUsuarios();
}   
    //***********************************************************************************************************
    
    function buscarVisita(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"BuscarVisitas","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    success: function(jsonArray)
                    {
                        tablaVisitas(jsonArray);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}
    
    //***********************************************************************************************************
    function tablaVisitas(jsonArray)
{
    TablaVisitas = jsonArray;
    
    var codigoHTML = '<tr align="left">'+
                        '<th><img src="images/b_insrow.png" title="Agregar" id="AdVisita"/></th>'+
                        '<th><a href="ServletInformes?informe=ListadoVisitasPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                        '<th><a href="servletInformes?informe=reporteUsuariosXLS"><img src="images/iconoExcel.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                        '<th>Id Visita</th>'+
                        '<th>Fecha</th>'+
                        '<th>Id Cliente</th>'+
                        '<th>Id Usuario</th>'+
                    '</tr>';
        
    var i;    
    for (var i = 0; i < jsonArray.length; i++)
    {
            if (i % 2 === 0)
                codigoHTML+=               '<tr>';
           else
                codigoHTML+=               '<tr class="even">';
            
           codigoHTML+=                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVisita" id="' + jsonArray[i].id_visita + '" /></td>'+
                                                               '<td><img src="images/b_drop.png" title="Eliminar" class="DelVisita" id="' + jsonArray[i].id_visita + '" /></td>'+
                                                               '<td><img src="images/b_search.png" title="Visualizar" class="VerVisita" id="' + jsonArray[i].id_visita + '" /></td>';
            codigoHTML+=                          '<td>' + jsonArray[i].id_visita + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].fecha + '</td>';  
            codigoHTML+=                          '<td>' + jsonArray[i].id_cliente + '</td>'; 
            codigoHTML+=                          '<td>' + jsonArray[i].id_usuario + '</td>';
            codigoHTML+=                   '</tr>';
            
    }
    
    $("#tablaVisitas").html(codigoHTML);
    activadorEventosUsuarios();
}

//**********************************************************************************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DE ADICIONAR, MODIFICAR,   *********************
//*************  VISUALIZAR, BORRAR Y GENERAR INFORME EN LA    *********************
//*************  OPCION VENTAS DE LOS VENDEDORES               *********************
//**********************************************************************************

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************               FUNCION PARA UN NUEVA VISITA                      ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************

function AddVisita()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Visitas</div>'+
                     '<div class="tabla">'+
                     '<form id="form_crear_visita"  enctype="multipart/form-data">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Visit">Nueva Visita</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Visit" class="tab_content">'+
                            
                              '<table align="center" border="0" align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input id="date_field9" type="text" name="fecha" value=""/>'+
                                    '</td>'+
                                    '<th align="left" style="padding-left:5px;">Id Cliente</th>'+
                                    '<td>'+
                                    '<select name="id_cliente" style="width:165px;" class="clients">'+
                                      //'<option value="null"></option>'+
                                     '</select>'+
                                  '</td>'+ 
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="left" style="padding-left:5px;">Id Usuario</th>'+
                                    '<td>'+
                                    '<select name="id_usuario" style="width:165px;" class="vendor">'+
                                      //'<option value="null"></option>'+
                                     '</select>'+
                                  '</td>'+ 
                                  '</tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Datos Adicionales<br>'+
                                      '<textarea name="descripcion" cols="74" rows="6"></textarea>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                            
                           '</div>'+
                        '</div>'+
                        '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="reset" value="Volver" class="button" id="volverVisita"/>'+
                                  '<input type="submit" value="Registrar" class="button"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+ 
                      '</div>'+
                      '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    ListadoClientes();
    cargarListadoVendedores();
    IniciarTabers();
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_crear_visita").submit(enviarDatosAddVisita);
    activadorEventosUsuarios();
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

//*********************************************************************************************************************
//*********************************************************************************************************************
//***********************                                                                       ***********************
//*********************** FUNCION PARA ENVIAR LOS DATOS A LA BASE DE DATOS PARA SER ADICIONADOS ***********************
//***********************                                                                       ***********************
//*********************************************************************************************************************
//*********************************************************************************************************************

function enviarDatosAddVisita(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"AddVisita","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
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

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************  FUNCION PARA VERIFICAR QUE LOS DATOS HALLAN SIDO ADICIONADOS   ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function verificarAddVisita(jsonObj)
{
    if (jsonObj.AddVisita  ==="true")
    {
        alert("La Visita se adicionó correctamente");
    }
    
    else
    {
        alert("La Visita no se pudo adicionar");
    }   
    
    seccionVisitas();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosModVisita()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosVisitas","Id_Visitas":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        ModVisita(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//**********************************************************************************
//********************                                          ********************
//******************** FUNCION PARA MODIFICAR DATOS DE VISITAS  ********************
//********************                                          ********************
//**********************************************************************************

function ModVisita(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Modificar Visita</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Visit">Datos</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Visit" class="tab_content">'+
                            '<form id="form_modificar_visita" enctype="multipart/form-data">'+
                              '<table align="center" border="0" align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input id="date_field9" type="text" name="fecha" value="' + jsonObject.fecha + '"/>'+
                                    '</td>'+
                                    '<th align="left" style="padding-left:5px;">Id Cliente</th>'+
                                    '<td>'+
                                    '<select name="id_cliente" style="width:165px;" class="clients">'+
                                      //'<option value="null"></option>'+
                                     '</select>'+
                                  '</td>'+ 
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="left" style="padding-left:5px;">Id Usuario</th>'+
                                    '<td>'+
                                    '<select name="id_usuario" style="width:165px;" class="vendor">'+
                                      //'<option value="null"></option>'+
                                     '</select>'+
                                  '</td>'+ 
                                  '</tr>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Datos Adicionales<br>'+
                                      '<textarea name="descripcion" cols="74" rows="6">' + jsonObject.descripcion + '</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td><input type="hidden" name="id_visitaMod" id="id_visitaMod" value="' + jsonObject.id_visita + '" /></td>'+
                                  '</tr>'+
                              '</table>'+
                           '</div>'+
                        '</div>'+
                        '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="reset" value="Volver" class="button" id="volverVisita"/>'+
                                  '<input type="submit" value="Registrar" class="button"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+ 
                        '</form>'+
                      '</div>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    ListadoClientes();
    cargarListadoVendedores();
    IniciarTabersAnidados();
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_modificar_visita").submit(enviarDatosModVisita);
    activadorEventosUsuarios();
}

//*******************************************************************************************************************
//*******************************************************************************************************************
//***********************                                                                     ***********************
//*********************** FUNCION PARA ENVIA LOS DATOS A LA BASE DE DATOSPARA SER MODIFICADOS ***********************
//***********************                                                                     ***********************
//*******************************************************************************************************************
//*******************************************************************************************************************

function enviarDatosModVisita(evento)
{
    evento.preventDefault();
    var id_visita = $("#id_visitaMod").val();
    //alert(id_visitas);
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"ModVisita","Datos":datos, "Id_Visitas":id_visita};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    success: function(jsonObj)
                    {
                        verificarModVisita(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************  FUNCION PARA VERIFICAR QUE LOS DATOS HALLAN SIDO MODIFICADOS   ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function verificarModVisita(jsonObj)
{
    if (jsonObj.ModVisita  ==="true")
    {
        alert("La Visita se modificó correctamente");
    }
    
    else
    {
        alert("La Visita no se pudo modificar");
    }   
    
    seccionVisitas();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosVerVisita()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosVisitas","Id_Visitas":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerVisita(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrado');
                    }
               });
}

//******************************************************************************************
//********************                                                  ********************
//******************** FUNCION PARA VISUALIZAR LOS DATOS DE LAS VISITAS ********************
//********************                                                  ********************
//******************************************************************************************

function VerVisita(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Visualizar Visita</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Visit">Datos</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Visit" class="tab_content">'+
                            '<form action="" method="POST" id="form_crear_venta">'+
                              '<table align="center" border="0" align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input id="date_field9" type="text" name="fecha" value="' + jsonObject.fecha + '" readonly="readonly"/>'+
                                    '</td>'+
                                  
                                    '<td align="right" style="padding-right:5px;">Id Cliente</td>'+ 
                                    '<td><input type="text" name="cliente" value="' + jsonObject.id_cliente + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td align="right" style="padding-right:5px;">Id Usuario</td>'+ 
                                    '<td><input type="text" name="id_usuario" value="' + jsonObject.id_usuario + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Datos Adicionales<br>'+
                                      '<textarea name="descripcion" cols="74" rows="6">' + jsonObject.descripcion + '</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td><input type="hidden" name="id_visitaMod" id="id_visitaMod" value="' + jsonObject.id_visita + '" readonly="readonly"/></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</form>'+
                           '</div>'+
                        '</div>'+
                        '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="reset" value="Volver" class="button" id="volverVisita"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+ 
                      '</div>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabersAnidados();
    activadorEventosUsuarios();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosDelVisita()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosVisitas","Id_Visitas":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        DelVisita(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//****************************************************************************************
//********************                                                ********************
//******************** FUNCION PARA ELIMINAR LOS DATOS DE LAS VISITAS ********************
//********************                                                ********************
//****************************************************************************************

function DelVisita(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Eliminar Visita</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Visit">Datos</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Visit" class="tab_content">'+
                            '<form id="form_modificar_visita" enctype="multipart/form-data">'+
                              '<table align="center" border="0" align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input id="date_field9" type="text" name="fecha" value="' + jsonObject.fecha + '" readonly="readonly"/>'+
                                    '</td>'+
                                    '<td align="right" style="padding-right:5px;">Id Cliente</td>'+ 
                                    '<td><input type="text" name="id_cliente" value="' + jsonObject.id_cliente + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td align="right" style="padding-right:5px;">Id Usuario</td>'+ 
                                    '<td><input type="text" name="id_usuario" value="' + jsonObject.id_usuario + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+ 
                                      'Datos Adicionales<br>'+
                                      '<textarea name="descripcion" cols="74" rows="6" readonly="readonly">' + jsonObject.descripcion + '</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                  '</tr>'+
                              '</table>'+
                           '</div>'+
                        '</div>'+
                        '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="reset" value="Volver" class="button" id="volverVisita"/>'+
                                  '<a href="#DelVisit" class="button" name="' + jsonObject.id_visita + '" id="borrarVisita" style="text-decoration:none; padding:2px 4px 2px 4px;">Borrar</a>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+ 
                        '</form>'+
                      '</div>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    activadorEventosUsuarios();
}
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//************* FUNCION QUE LLAMA AL LIGHTBOX PARA CONFIRMAR  *********************
//************* LA ELIMINACION DE LOS DATOS                    *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
function ConfirmDelVisita()
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Borrar Visita</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea borrar la Visita?</th>'+
                            '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Si" class="button" id="OkDelVisita" name="' + id + '"/>'+
                                '<input type="button" value="No" class="button" id="NotDelVisita"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosUsuarios();
}
function DelVisitaOk()
{
    var id = $(this)[0].name; 
    //alert(id);
    var request = {"Usuarios":"DelVisita","Id_Visitas":id};
    var jsonobj=JSON.stringify(request);
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        verificarDelVisita(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
function verificarDelVisita(jsonObj)
{
    if (jsonObj.DelVisita  ==="true")
    {
        alert("La Visita se ha borrado correctamente");
    }
    
    else
    {
        alert("La Visita no se pudo borrar");
    }   
    
    seccionVisitas();
}

function HideConfirmDelVisita()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosUsuarios();    
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************      FUNCION PARA CARGAR LOS DATOS DE LA SECCION VIATICOS       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function seccionViaticos(jsonArray)
{ 
    var codigoHTML = '<div class="encabezado2">Listado de Viaticos de los Vendedores</div>'+
                        '<div class="tabla">'+
                            '<form action="" method="POST" id="form_buscar_viatico">'+
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
                            '<th><img src="images/b_insrow.png" title="agregar" id="AddViatico" /></th>'+
                            '<th><a href="ServletInformes?informe=ListadoViaticosPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th><a href="servletInformes?informe=reporteUsuariosXLS"><img src="images/iconoExcel.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th>IdViatico</th>'+
                            '<th>Fecha</th>'+
                            '<th>Concepto</th>'+
                            '<th>Valor</th>'+
                      '</tr>'+
                        '<table>'+
                            '<tr>'+
                                  '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">TOTAL VIÁTICOS $</th>'+
                                  '<td colspan="2"><input type="text" id="valorTotalViaticos" value="" readonly="readonly" style="padding-right:5px; font-weight: bold; font-size: 20px;"/></td>'+
                            '</tr>'+
                        '</table>'+  
                    '</div>';
                  
    $("#datos").html(codigoHTML);
    $(".tbonita").css({width: 620});
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#viaticosVendedor").addClass("active");
    if (TablaViaticos !== null)
    {
        tablaViaticos(TablaViaticos);
    }
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field10').datepick({yearRange: '1980:2050'});
    $('#date_field10').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_buscar_viatico").submit(buscarViatico);    
    activadorEventosUsuarios();
}               
   //*********************************************************************************************                  

function buscarViatico(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"BuscarViatico","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
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
//*********************************************************************************************

    function tablaViaticos(jsonArray)
    {
        var codigoHTML = '<tr align="left">'+
                            '<th><img src="images/b_insrow.png" title="agregar" id="AddViatico" /></th>'+
                            '<th><a href="ServletInformes?informe=ListadoViaticosPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th><a href="servletInformes?informe=reporteUsuariosXLS"><img src="images/iconoExcel.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th>IdViatico</th>'+
                            '<th>Fecha</th>'+
                            '<th>Concepto</th>'+
                            '<th>Valor</th>'+
                          '</tr>';
    var i;
    for (var i = 0; i < jsonArray.length-1; i++)
    {
            if (i % 2 === 0)
                codigoHTML+=               '<tr>';
           else
                codigoHTML+=               '<tr class="even">';
            
           codigoHTML+=                            '<td><img src="images/b_edit.png" title="Modificar" class="ModViatico" id="' + jsonArray[i].id_viaticos + '" /></td>'+
                                                               '<td><img src="images/b_drop.png" title="Eliminar" class="DelViatico" id="' + jsonArray[i].id_viaticos + '" /></td>'+
                                                               '<td><img src="images/b_search.png" title="Visualizar" class="VerViatico" id="' + jsonArray[i].id_viaticos + '" /></td>';
            codigoHTML+=                          '<td>' + jsonArray[i].id_viaticos + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].fecha + '</td>';  
            codigoHTML+=                          '<td>' + jsonArray[i].concepto + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].valor + '</td>';
            codigoHTML+=                   '</tr>';
            
    }


    
    $("#valorTotalViaticos").val(jsonArray[i].valor_total);
    $("#tablaViaticos").html(codigoHTML);
    activadorEventosUsuarios();
}
//**********************************************************************************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DE ADICIONAR, MODIFICAR,   *********************
//*************  VISUALIZAR, BORRAR Y GENERAR INFORME EN LA    *********************
//*************  OPCION LISTADO DE LOS VENDEDORES              *********************
//**********************************************************************************

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA ADICIONAR LOS VIATICOS  ********************
//********************                                      ********************
//******************************************************************************

function AddViatico()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Viático</div>'+
                      '<form id="form_crear_viatico" enctype="multipart/form-data">'+
                        '<div class="tabla">'+
                              '<table align="center">'+
                                 '<tr>'+
                                   '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input id="date_field9" type="text" name="fecha" value="\n\"/>'+
                                    '</td>'+
                                    '</tr>'+
                                   '<tr>'+
                                   '<th align="right" style="padding-right:5px;">Id Usuario</th>'+
                                     '<td>'+
                                        '<select name="id_usuario" style="width:165px;" class="vendor">'+
                                            //'<option value="null"></option>'+
                                        '</select>'+
                                     '</td>'+
                                  '</tr>'+
                                  '</table>'+
                                  '<br>'+
                                  '<br>'+
                                  '<tr>'+
                                  '<table align="center">'+
                                    '<th align="right" style="padding-right:5px;">Concepto</th>'+
                                    '<td>'+ 
                                        '<select name="concepto" style="width:160px;">'+ 
                                            '<option value=""></option>'+ 
                                            '<option value="Transporte">Transporte</option>'+ 
                                            '<option value="Alimentación">Alimentación</option>'+ 
                                            '<option value="Hospedaje">Hospedaje</option>'+ 
                                            '<option value="Urbanos">Otros</option>'+ 
                                        '</select>'+ 
                                    '</td>'+
                                    '<td align="right" style="padding-right:5px;">Valor</td>'+ 
                                    '<td><input type="text" name="valor" value="" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                     '<td>'+
                                        '<select name="cod_departamento" class="deptos" style="width:160px;" onchange="cargarMunicipios()">'+
                                        '</select>'+
                                     '</td>'+
                                        '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                     '<td>'+
                                        '<select name="codMunicipio" style="width:165px;" class="municipios">'+
                                            //'<option value="null"></option>'+
                                        '</select>'+
                                     '</td>'+
                                   '</tr>'+
                                 '</tr>'+
                              '</table>'+
                           '</div>'+
                        '</div>'+
                        '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="reset" value="Volver" class="button" id="volverViatico"/>'+
                                  '<input type="submit" value="Registrar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+ 
                      '</div>'+
                    '</form>'+
                   '</div>';

    $("#datos").html(codigoHTML);
    cargarListadoVendedores();
    listadoDepartamentos();
    IniciarTabers();    
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_crear_viatico").submit(enviarDatosAddViatico);    
    activadorEventosUsuarios();
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

//***********************************************************************************************************************
//***********************************************************************************************************************
//***********************                                                                         ***********************
//*********************** FUNCION PARA ENVIAR LOS NUEVOS DATOS DEL DEL VIATICO PARA SER ADICINADO ***********************
//***********************                                                                         ***********************
//***********************************************************************************************************************
//***********************************************************************************************************************

function enviarDatosAddViatico(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"AddViatico","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
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

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************  FUNCION PARA VERIFICAR QUE LOS DATOS HALLAN SIDO ADICIONADOS   ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function verificarAddViatico(jsonObj)
{
    if (jsonObj.AddViatico  ==="true")
    {
        alert("El Viatico se adicionó correctamente");
    }
    
    else
    {
        alert("El Viatico no se pudo adicionar");
    }   
    
    seccionViaticos();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosModViatico()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosViaticos","Id_Viaticos":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        ModViatico(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA MODIFICAR LOS VIATICOS  ********************
//********************                                      ********************
//******************************************************************************

function ModViatico(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Modificar Viático</div>'+
                     '<div class="tabla">'+
                            '<div id="Viatic" class="tab_content">'+
                            '<form id="form_modificar_viatico" enctype="multipart/form-data">'+
                              '<table align="center" border="0" align="center">'+
                                  '<tr>'+
                                   '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input id="date_field9" type="text" name="fecha" value="' + jsonObject.fecha + '"/>'+
                                    '</td>'+
                                    '</tr>'+
                                   '<tr>'+
                                   '<th align="right" style="padding-right:5px;">Id Usuario</th>'+
                                     '<td>'+
                                        '<select name="id_usuario" style="width:165px;" class="vendor">'+
                                            //'<option value="null"></option>'+
                                        '</select>'+
                                     '</td>'+
                                  '</tr>'+
                                  '</table>'+
                                  '<br>'+
                                  '<br>'+
                                  '<tr>'+
                                  '<table align="center">'+
                                    '<th align="right" style="padding-right:5px;">Concepto</th>'+
                                    '<td>'+ 
                                        '<select name="concepto" style="width:160px;">'+ 
                                            '<option value=""></option>'+ 
                                            '<option value="Transporte">Transporte</option>'+ 
                                            '<option value="Alimentación">Alimentación</option>'+ 
                                            '<option value="Hospedaje">Hospedaje</option>'+ 
                                            '<option value="Otros">Otros</option>'+ 
                                        '</select>'+ 
                                    '</td>'+
                                    '<td align="right" style="padding-right:5px;">Valor</td>'+ 
                                    '<td><input type="text" name="valor" value="' + jsonObject.valor + '" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                     '<td>'+
                                        '<select name="cod_departamento" class="deptos" style="width:160px;" onchange="cargarMunicipios()">'+
                                        '</select>'+
                                     '</td>'+
                                        '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                     '<td>'+
                                        '<select name="codMunicipio" style="width:165px;" class="municipios">'+
                                            //'<option value="null"></option>'+
                                        '</select>'+
                                     '</td>'+
                                   '</tr>'+
                                  '<tr>'+
                                    '<td><input type="hidden" name="id_viaticoMod" id="id_viaticoMod" value="' + jsonObject.id_viaticos + '" /></td>'+
                                  '</tr>'+
                              '</table>'+
                           '</div>'+
                        '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="reset" value="Volver" class="button" id="volverViatico"/>'+
                                  '<input type="submit" value="Registrar" class="button"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+ 
                        '</form>'+
                      '</div>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    cargarListadoVendedores();
    listadoDepartamentos();
    IniciarTabersAnidados();
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_modificar_viatico").submit(enviarDatosModViatico);
    activadorEventosUsuarios();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************  FUNCION PARA ENVIAR LOS DATOS MODIFICADOS A LA BASE DE DATOS   ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosModViatico(evento)
{
    evento.preventDefault();
    var id_viaticos = $("#id_viaticoMod").val();
    //alert(id_viaticos);
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"ModViatico","Datos":datos, "Id_Viaticos":id_viaticos};
    var jsonobj=JSON.stringify(request);
   // alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    success: function(jsonObj)
                    {
                        verificarModViatico(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************  FUNCION PARA VERIFICAR QUE LOS DATOS HALLAN SIDO MODIFICADOS   ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function verificarModViatico(jsonObj)
{
    if (jsonObj.ModViatico  ==="true")
    {
        alert("El Viatico se modificó correctamente");
    }
    
    else
    {
        alert("El Viatico no se pudo modificar");
    }   
    seccionViaticos();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosVerViatico()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosViaticos","Id_Viaticos":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerViatico(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA VISUALIZAR LOS VIATICOS ********************
//********************                                      ********************
//******************************************************************************

function VerViatico(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">visualizar Viático</div>'+
                     '<div class="tabla">'+
                            '<div id="Visit" class="tab_content">'+
                            '<form action="" method="POST" name="form_crear_venta">'+
                              '<table align="center" border="0" align="center">'+
                                  '<tr>'+
                                  '<td align="right" style="padding-right:5px;">Fecha</td>'+ 
                                    '<td><input type="text" name="fecha" value="' + jsonObject.fecha + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                  '<td align="right" style="padding-right:5px;">Id Usuario</td>'+ 
                                    '<td><input type="text" name="id_usuario" value="' + jsonObject.id_usuario + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '</table>'+
                                  '<br>'+
                                  '<br>'+
                                  '<tr>'+
                                  '<table align="center">'+
                                    '<td align="right" style="padding-right:5px;">Concepto</td>'+ 
                                    '<td><input type="text" name="concepto" value="' + jsonObject.concepto + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '<td align="right" style="padding-right:5px;">Total</td>'+ 
                                    '<td><input type="text" name="Total" value="' + jsonObject.valor + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td align="right" style="padding-right:5px;">Departamento</td>'+ 
                                    '<td><input type="text" name="departamento" value="' + jsonObject.nombre_depto + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '<td align="right" style="padding-right:5px;">Ciudad</td>'+ 
                                    '<td><input type="text" name="ciudad" value="' + jsonObject.nombreMunicipio + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                              '</table>'+
                       '</form>'+
                           '</div>'+
                        '</div>'+
                        '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="reset" value="Volver" class="button" id="volverViatico"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+ 
                      '</div>'+
                    '</div>';
                    
    $("#datos").html(codigoHTML);
    IniciarTabers();
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick({yearRange: '1980:2050'});
    activadorEventosUsuarios();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosDelViatico()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosViaticos","Id_Viaticos":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        DelViatico(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//******************************************************************************
//********************                                      ********************
//********************  FUNCION PARA ELIMINAR LOS VIATICOS  ********************
//********************                                      ********************
//******************************************************************************

function DelViatico(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Eliminar Viático</div>'+
                     '<div class="tabla">'+
                         '<div id="Visit" class="tab_content">'+
                            '<form id="form_eliminar_viatico" enctype="multipart/form-data">'+
                              '<table align="center" border="0" align="center">'+
                                  '<tr>'+
                                  '<td align="right" style="padding-right:5px;">Fecha</td>'+ 
                                    '<td><input type="text" name="fecha" value="' + jsonObject.fecha + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                  '<td align="right" style="padding-right:5px;">Id Usuario</td>'+ 
                                    '<td><input type="text" name="id_usuario" value="' + jsonObject.id_usuario + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '</table>'+
                                  '<br>'+
                                  '<br>'+
                                  '<tr>'+
                                  '<table align="center">'+
                                    '<td align="right" style="padding-right:5px;">Concepto</td>'+ 
                                    '<td><input type="text" name="concepto" value="' + jsonObject.concepto + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '<td align="right" style="padding-right:5px;">Total</td>'+ 
                                    '<td><input type="text" name="Total" value="' + jsonObject.valor + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td align="right" style="padding-right:5px;">Departamento</td>'+ 
                                    '<td><input type="text" name="departamento" value="' + jsonObject.nombre_depto + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '<td align="right" style="padding-right:5px;">Ciudad</td>'+ 
                                    '<td><input type="text" name="ciudad" value="' + jsonObject.nombreMunicipio + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                              '</table>'+
                           '</div>'+
                        '</div>'+
                        '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="reset" value="Volver" class="button" id="volverViatico"/>'+
                                  '<a href="#DelVisit" class="button" name="' + jsonObject.id_viaticos + '" id="borrarViatico" style="text-decoration:none; padding:2px 4px 2px 4px;">Borrar</a>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+ 
                        '</form>'+
                      '</div>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    activadorEventosUsuarios();
}
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//************* FUNCION QUE LLAMA AL LIGHTBOX PARA CONFIRMAR   *********************
//************* LA ELIMINACION DE LOS DATOS                    *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
function ConfirmDelViatico()
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Borrar Viático</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea borrar el Viático?</th>'+
                            '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Si" class="button" id="OkDelViatico" name="' + id + '"/>'+
                                '<input type="button" value="No" class="button" id="NotDelViatico"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosUsuarios();
}
function DelViaticoOk()
{
    var id = $(this)[0].name; 
    //alert(id);
    var request = {"Usuarios":"DelViatico","Id_Viaticos":id};
    var jsonobj=JSON.stringify(request);
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        verificarDelViatico(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
function verificarDelViatico(jsonObj)
{
    if (jsonObj.DelViatico  ==="true")
    {
        alert("El Viático se ha borrado correctamente");
    }
    
    else
    {
        alert("El Viático no se pudo borrar");
    }   
    
    seccionViaticos();
}

function HideConfirmDelViatico()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosUsuarios();    
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CARGA LOS DATOS EN EL COBOBOX     *********************   
//*************  DEL CAMPO DEPARTAMENTO                        *********************
//**********************************************************************************
//**********************************************************************************

function listadoDepartamentos()
{
    var request = {"Usuarios":"Departamentos"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarDeptos(jsonArray);                          
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
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
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CARGA LOS DATOS EN EL COBOBOX     *********************   
//*************  DEL CAMPO MUNICIPIO                           *********************
//**********************************************************************************
//**********************************************************************************
 function cargarMunicipios()
{
    var depto=$('.deptos').val();
    //alert(depto);
    var request = {"Usuarios":"Municipios","DatosDepto":depto};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        Municipios(jsonArray);    
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
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

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CARGA LOS DATOS EN EL COBOBOX     *********************   
//*************  DEL CAMPO ID UBICACION                       *********************
//**********************************************************************************
//**********************************************************************************

function listUbicacion()
{
    var request = {"Usuarios":"Ubicacion"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarUbicacion(jsonArray);                          
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

function cargarUbicacion(jsonArray)
{
    var codigoHTML =  '<option value="null"></option>';
    for (var u = 0; u < jsonArray.length; u++)
    {
        codigoHTML += '<option value="'+ jsonArray[u].id_ubicacion +'">'+ jsonArray[u].id_ubicacion +'</option>';
    }
    $('.ubicacion').html(codigoHTML);   
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CARGA LOS DATOS EN EL COBOBOX     *********************   
//*************  DEL CAMPO ID USUARIO                       *********************
//**********************************************************************************
//**********************************************************************************

function cargarListadoVendedores()
{
    var request = {"Usuarios":"Vendedores"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarVendedor(jsonArray);                          
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}
function cargarVendedor(jsonArray)
{
    var codigoHTML =  '<option value="null"></option>';
    for (var v = 0; v < jsonArray.length; v++)
    {
        codigoHTML += '<option value="'+ jsonArray[v].id_usuario +'">'+ jsonArray[v].id_usuario +'</option>';
    }
    
    $('.vendor').html(codigoHTML);   
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CARGA LOS DATOS EN EL COBOBOX     *********************   
//*************  DEL CAMPO ID CLIENTE                          *********************
//**********************************************************************************
//**********************************************************************************

function ListadoClientes()
{
    var request = {"Usuarios":"ComboClientes"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarcomboClient(jsonArray);                          
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

function cargarcomboClient(jsonArray)
{
    var codigoHTML =  '<option value="null"></option>';
    for (var d = 0; d < jsonArray.length; d++)
    {
        codigoHTML += '<option value="'+ jsonArray[d].id_cliente +'">'+ jsonArray[d].id_cliente +'</option>';
    }
    
    $('.clients').html(codigoHTML);   
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CARGA LOS DATOS EN EL COBOBOX     *********************   
//*************  DEL CAMPO LINEA DE PRODUCCION                 *********************
//**********************************************************************************
//**********************************************************************************

function ObtenerLineasProduccion()
{
    var request = {"Usuarios":"Lineas"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarLineasCombo(jsonArray);                          
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

function cargarLineasCombo(jsonArray)
{
    var codigoHTML =  '<option value="null"></option>';
    for (var x = 0; x < jsonArray.length; x++)
    {
        codigoHTML += '<option value="'+ jsonArray[x].nombre_linea +'">'+ jsonArray[x].nombre_linea +'</option>';
    }
    
    $('.lines').html(codigoHTML);   
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CARGA LOS DATOS EN EL COBOBOX     *********************   
//*************  DEL CAMPO MATERIAL                       *********************
//**********************************************************************************
//**********************************************************************************

function ObtenerMateriales()
{
    var request = {"Usuarios":"Materiales"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarMaterialesCombo(jsonArray);                          
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

function cargarMaterialesCombo(jsonArray)
{
    var codigoHTML =  '<option value="null"></option>';
    for (var m = 0; m < jsonArray.length; m++)
    {
        codigoHTML += '<option value="'+ jsonArray[m].material +'">'+ jsonArray[m].material +'</option>';
    }
    
    $('.maters').html(codigoHTML);   
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CARGA LOS DATOS EN EL COBOBOX     *********************   
//*************  DEL CAMPO TALLAS                              *********************
//**********************************************************************************
//**********************************************************************************

function cargarListadoTallasCombo()
{
    var request = {"Usuarios":"TallasCombo"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarTallasCombo(jsonArray);                          
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

function cargarTallasCombo(jsonArray)
{
    var codigoHTML =  '<option value="null"></option>';
    for (var t = 0; t < jsonArray.length; t++)
    {
        codigoHTML += '<option value="'+ jsonArray[t].talla +'">'+ jsonArray[t].talla +'</option>';
    }
    
    $('.talls').html(codigoHTML);   
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CARGA LOS DATOS EN EL COBOBOX     *********************   
//*************  DEL CAMPO COLOR                               *********************
//**********************************************************************************
//**********************************************************************************

function cargarColor()
{
    var request = {"Usuarios":"Color"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargColor(jsonArray);                          
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

function cargColor(jsonArray)
{
    var codigoHTML =  '<option value="null"></option>';
    for (var f = 0; f < jsonArray.length; f++)
    {
        codigoHTML += '<option value="'+ jsonArray[f].color +'">'+ jsonArray[f].color +'</option>';
    }
    
    $('.colors').html(codigoHTML);   
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CARGA LOS DATOS EN EL COBOBOX     *********************   
//*************  DEL CAMPO TIPO PRODUCTO                       *********************
//**********************************************************************************
//**********************************************************************************

function ObtenerTipoProducto()
{
    var request = {"Usuarios":"Tipo"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargTipo(jsonArray);                          
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

function cargTipo(jsonArray)
{
    var codigoHTML =  '<option value="null"></option>';
    for (var p = 0; p < jsonArray.length; p++)
    {
        codigoHTML += '<option value="'+ jsonArray[p].cod_tipo_producto +'">'+ jsonArray[p].nombre_tipo_producto +'</option>';
    }
    
    $('.tips').html(codigoHTML);   
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CARGA LOS DATOS EN EL COBOBOX     *********************   
//*************  DEL CAMPO TIPO PRODUCTO                       *********************
//**********************************************************************************
//**********************************************************************************

function cargarListadoProductos()
{
    var request = {"Usuarios":"ComboProducto"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargP(jsonArray);                          
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

function cargP(jsonArray)
{
    var codigoHTML =  '<option value="null"></option>';
    for (var ñ = 0; ñ < jsonArray.length; ñ++)
    {
        codigoHTML += '<option value="'+ jsonArray[ñ].codigo_producto +'">'+ jsonArray[ñ].codigo_producto +'</option>';
    }
    
    $('.prodt').html(codigoHTML);   
}

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
    var request = {"Usuarios":"Productos"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarListadoProducto(jsonArray);     
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

//*******************************************************************************************************
//*******************************************************************************************************
//***********************                                                         ***********************
//***********************  FUNCION PARA CARGAR LOS DATOS DE LA SECCION PRODUCTOS  ***********************
//***********************                                                         ***********************
//*******************************************************************************************************
//*******************************************************************************************************

function cargarListadoProducto(jsonArray)
{    
   var codigoHTML =  '<div class="encabezado2">Listado de Productos</div>'+
                            '<div class="tabla">'+
                               '<tr>'+
                               '<table class="tbonita">'+
                                 '<tr align="center">'+
                                   '<th><img src="images/b_insrow.png" title="Agregar" id="AProducto"/></th>'+
                                   '<th><a href="ServletInformes?informe=reporteProductosPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                                   '<th><a href="servletInformes?informe=reporteUsuariosXLS"><img src="images/iconoExcel.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                                   '<th>Id Producto</th>'+
                                   '<th>Nombre</th>'+
                                   '<th>Cantidad</th>'+
                                   '<th>Precio</th>'+
                                   '<th>Código de Barras</th>'+
                                 '</tr>';
                                 
    for (var i = 0; i < jsonArray.length; i++)
    {
            if (i % 2 === 0)
                codigoHTML+=               '<tr>';
           else
                codigoHTML+=               '<tr class="even">';
            
           codigoHTML+=                            '<td><img src="images/b_edit.png" title="Modificar" class="ModProducto" id="' + jsonArray[i].codigo_producto + '" /></td>'+
                                                               '<td><img src="images/b_drop.png" title="Eliminar" class="DelProducto" id="' + jsonArray[i].codigo_producto + '" /></td>'+
                                                               '<td><img src="images/b_search.png" title="Visualizar" class="VerProducto" id="' + jsonArray[i].codigo_producto + '" /></td>';
            codigoHTML+=                          '<td>' + jsonArray[i].codigo_producto + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].nombre + '</td>';  
            codigoHTML+=                          '<td>' + jsonArray[i].cantidad + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].precio_venta + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].codigo_barras + '</td>';
            codigoHTML+=                   '</tr>';
            
    }
    
    codigoHTML+=                '</table>'+
                                  '</div>';
    
    $("#datos").html(codigoHTML);
    $(".tbonita").css({width: 620});
    $(".content-float-datos").css({width: 630});
    $(".nav .menu li a#Productos").addClass("active");
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#listadoProductos").addClass("active");
    activadorEventosProductos();
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
}

//**********************************************************************************************
//***************                                                        ***********************
//***************               OPCION ADICIONAR PRODUCTO                ***********************
//***************                                                        ***********************
//**********************************************************************************************

function AddProducto()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Producto</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Informacion">Información</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Informacion" class="tab_content">'+
                              '<form id="form_enviar_foto"  enctype="multipart/form-data">'+
                                '<table align="center" border="0">'+
                                    '<tr>'+
                                        '<td colspan="2" rowspan="12" align="center">'+
                                            '<div class="foto">'+
                                                '<div class="imagen" id="fotoUsuarios">'+
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
                                '<form id="form_crear_producto"  enctype="multipart/form-data">'+
                                  '<tr>'+
                                      '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                      '<td><input type="text" name="nombre" value="" size="20" maxlength="10"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                      '<th align="left" style="padding-right:5px;">Linea de Producción</th>'+
                                    '<td>'+
                                        '<select name="nombre_linea" style="width:165px;" class="lines">'+
                                          //'<option value="null"></option>'+
                                        '</select>'+
                                    '</td>'+ 
                                  '</tr>'+
                                  '<tr>'+
                                      '<th align="right" style="padding-right:5px;">Material</th>'+
                                    '<td>'+
                                        '<select name="material" style="width:165px;" class="maters">'+
                                          //'<option value="null"></option>'+
                                        '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                      '<th align="right" style="padding-right:5px;">Tipo de Producto</th>'+
                                      '<td>'+
                                        '<select name="cod_tipo_producto" style="width:165px;" class="tips">'+
                                          //'<option value="null"></option>'+
                                        '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Talla</th>'+
                                    '<td>'+
                                        '<select name="talla" style="width:165px;" class="talls">'+
                                          //'<option value="null"></option>'+
                                        '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Color</th>'+
                                    '<td>'+
                                        '<select name="color" style="width:165px;" class="colors">'+
                                          //'<option value="null"></option>'+
                                        '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Código de Barras</th>'+
                                    '<td><input type="text" name="codigo_barras" value="" size="20" maxlength="10"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Cantidad</th>'+
                                    '<td><input type="text" name="cantidad" value="" size="20" maxlength="10"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Precio de Costo</th>'+
                                    '<td><input type="text" name="precio_costo" value="" size="20" maxlength="10"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Precio de Venta</th>'+
                                    '<td><input type="text" name="precio_venta" value="" size="20" maxlength="10"/></td>'+
                                    '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Precio de Descuento</th>'+
                                    '<td><input type="text" name="precio_descuento" value="" size="20" maxlength="12"/></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddProducto" />'+
                                  '<input type="submit" value="Registrar" class="button"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    ObtenerLineasProduccion();
    ObtenerMateriales();
    cargarListadoTallasCombo();
    cargarColor();
    ObtenerTipoProducto();
    IniciarTabers();
    $("#form_crear_producto").submit(enviarDatosAddProductos);
    activadorEventosProductos();
    cargarFoto();
}

//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//***********************       FUNCION PARA CARGAR LAS FOTOS DE LOS USUARIOS       ***********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

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
                var rutaFoto = "images/Usuarios/" + file;
                var htmlFoto = '<img src="' + rutaFoto + '" align="center" width="180px">';
                $('#rutaFoto').attr("value",file);
                $('#fotoUsuarios').html(htmlFoto);
        }	
    });
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

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//*********************** FUNCION PARA CARGAR LOS DATOS Y ADICIONARLOS A LA BASE DE DATOS ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosAddProductos(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray(); 
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"AddProducto","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                data: {administrador:jsonobj},
                type: 'POST',
                dataType: 'json',
                url: 'ServletAdministrador',
                success: function(jsonObj)
                {
                    verificarAddProducto(jsonObj);
                },
                error: function() 
                {
                    alert('Error al conectar con el servidor');
                }
           });
}
//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//*********************** FUNCION PARA VERIFICAR QUE LOS DATOS SE HALLAN ADICIONADO ***********************
//***********************                   CORRECTAMENTE                           **********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function verificarAddProducto(jsonObj)
{
    if (jsonObj.AddProducto  ==="true")
    {
        alert("El Producto se adicionó correctamente");
    }
    
    else
    {
        alert("El Producto no se pudo adicionar");
    }   
    
    seccionListadoProductos();
}
//*******************************************************************************************

function DatosModProductos()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosProductos","Codigo_Producto":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        ModProducto(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//*******************************************************************************************
//********************                                                   ********************
//******************** FUNCION PARA MODIFICAR LOS DATOS DE LOS PRODUCTOS ********************
//********************                                                   ********************
//*******************************************************************************************

function ModProducto(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Modificar Producto</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Informacion">Información</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Informacion" class="tab_content">'+
                              '<form id="form_enviar_foto"  enctype="multipart/form-data">'+
                                '<table align="center" border="0">'+
                                    '<tr>'+
                                        '<td colspan="2" rowspan="12" align="center">'+
                                            '<div class="foto">'+
                                                '<div class="imagen" id="fotoUsuarios">'+
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
                                '<form id="form_modificar_producto"  enctype="multipart/form-data">'+
                                  '<tr>'+
                                      '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                      '<td><input type="text" name="nombre" value="' + jsonObject.nombre + '" size="20" maxlength="10"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                      '<th align="left" style="padding-right:5px;">Linea de Producciòn</th>'+
                                    '<td>'+
                                        '<select name="nombre_linea" style="width:165px;" class="lines">'+
                                          //'<option value="null"></option>'+
                                        '</select>'+
                                    '</td>'+ 
                                  '</tr>'+
                                  '<tr>'+
                                      '<th align="right" style="padding-right:5px;">Material</th>'+
                                    '<td>'+
                                        '<select name="material" style="width:165px;" class="maters">'+
                                          //'<option value="null"></option>'+
                                        '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                      '<th align="right" style="padding-right:5px;">Tipo de Producto</th>'+
                                      '<td>'+
                                        '<select name="cod_tipo_producto" style="width:165px;" class="tips">'+
                                          //'<option value="null"></option>'+
                                        '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Talla</th>'+
                                    '<td>'+
                                        '<select name="talla" style="width:165px;" class="talls">'+
                                          //'<option value="null"></option>'+
                                        '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Color</th>'+
                                    '<td>'+
                                        '<select name="color" style="width:165px;" class="colors">'+
                                          //'<option value="null"></option>'+
                                        '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Código de Barras</th>'+
                                    '<td><input type="text" name="codigo_barras" value="' + jsonObject.codigo_barras + '" size="20" maxlength="10"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Cantidad</th>'+
                                    '<td><input type="text" name="cantidad" value="' + jsonObject.cantidad + '" size="20" maxlength="10"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Precio de Costo</th>'+
                                    '<td><input type="text" name="precio_costo" value="' + jsonObject.precio_costo + '" size="20" maxlength="10"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Precio de Venta</th>'+
                                    '<td><input type="text" name="precio_venta" value="' + jsonObject.precio_venta + '" size="20" maxlength="10"/></td>'+
                                    '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Precio de Descuento</th>'+
                                    '<td><input type="text" name="precio_descuento" value="' + jsonObject.precio_descuento + '" size="20" maxlength="12"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td><input type="hidden" name="id_productoMod" id="id_productoMod" value="' + jsonObject.codigo_producto + '" /></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddProducto" />'+
                                  '<input type="submit" value="Registrar" class="button"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    ObtenerLineasProduccion();
    ObtenerMateriales();
    cargarListadoTallasCombo();
    cargarColor();
    ObtenerTipoProducto();
    IniciarTabers();
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick({yearRange: '1980:2050'});
    $("#form_modificar_producto").submit(enviarDatosModProductos);
    activadorEventosProductos();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//*********************** FUNCION PARA ENVIAR LOS DATOS MODIFICADOS A LA BASE DE DATOS    ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosModProductos(evento)
{
    evento.preventDefault();
    var codigo_producto = $("#id_productoMod").val();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"ModProducto","Datos":datos, "Codigo_Producto":codigo_producto};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    success: function(jsonObj)
                    {
                        verificarModProducto(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//***********************************************************************************************************************
//***********************************************************************************************************************
//***********************                                                                         ***********************
//*********************** FUNCION PARA VERIFICAR QUE LOS DATOS SE HALLAN MODIFICADO CORRECTAMENTE ***********************
//***********************                                                                         ***********************
//***********************************************************************************************************************
//***********************************************************************************************************************

function verificarModProducto(jsonObj)
{
    if (jsonObj.ModProducto  ==="true")
    {
        alert("El Producto se modificó correctamente");
    }
    
    else
    {
        alert("El Producto no se pudo modificar");
    }   
    
    activadorEventosProductos();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosVerProducto()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosProductos","Codigo_Producto":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerProducto(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//********************************************************************************************
//********************                                                    ********************
//******************** FUNCION PARA VISUALIZAR LOS DATOS DE LOS PRODUCTOS ********************
//********************                                                    ********************
//********************************************************************************************

function VerProducto(jsonObject)
{
    
    var codigoHTML = '<div class="encabezado2">Visualizar Producto</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Informacion">Información</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="producto" class="tab_content">'+
                            '<form action="" method="POST" name="form_visualizar_producto">'+
                              '<table align="right" border="0" align="left">'+
                                  '<tr>'+
                                      '<td colspan="2" rowspan="12" align="center">'+
                                          '<div class="foto">'+
                                              '<div class="imagen">'+
                                                  '<img src="images/usuario.png" align="center">'+
                                              '</div>'+
                                              '<div>'+
                                                  '<input type="button" value="Cargar Foto" class="button" '+
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                  '</tr>'+
                            '<tr>'+
                                '<th align="right" style="padding-right:5px;">IdProducto</th>'+
                                '<td><input type="text" name="codigo_producto" value="' + jsonObject.codigo_producto + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                            '</tr>'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="nombre" value="' + jsonObject.nombre + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+
                                    '<td><input type="text" name="nombre_linea" value="' + jsonObject.nombre_linea + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                '</tr>'+
                                    '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Material</th>'+
                                        '<td><input type="text" name="material" value="' + jsonObject.material + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '</tr>'+
                                        '<tr>'+
                                            '<th align="right" style="padding-right:5px;">Tipo de Producto</th>'+
                                            '<td><input type="text" name="nombre_tipo_producto" value="' + jsonObject.cod_tipo_producto + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                        '</tr>'+
                                      '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Color</th>'+
                                        '<td><input type="text" name="color" value="' + jsonObject.color + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Cantidad</th>'+
                                        '<td><input type="text" name="cantidad" value="' + jsonObject.cantidad + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Talla:</th>'+
                                        '<td><input type="text" name="talla" value="' + jsonObject.talla + '" size="20" maxlength="12" readonly="readonly"/></td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Precio de Costo:</th>'+
                                        '<td><input type="text" name="precio_costo" value="' + jsonObject.precio_costo + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Precio de Venta:</th>'+
                                        '<td><input type="text" name="precio_venta" value="' + jsonObject.precio_venta + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                        '</tr>'+
                                      '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Precio de Descuento:</th>'+
                                        '<td><input type="text" name="precio_descuento" value="' + jsonObject.precio_descuento + '" size="20" maxlength="12" readonly="readonly"/></td>'+
                                      '</tr>'+
                                      '</table>'+
                                    '</div>'+
                            '</table>'+
                            '</div>'+
                            '<br>'+
                            '<table align="center">'+
                              '<tr>'+
                                '<td colspan="4" align="center">'+
                                    '<input type="button" value="Volver" class="button" id="volverAddProducto" />'+
                                '</td>'+
                              '</tr>'+
                            '</table>'+               
                        '</div>';
    $("#datos").html(codigoHTML);
    IniciarTabers();
    activadorEventosProductos();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosDelProducto()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosProductos","Codigo_Producto":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        DelProducto(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//******************************************************************************************
//********************                                                  ********************
//******************** FUNCION PARA ELIMINAR LOS DATOS DE LOS PRODUCTOS ********************
//********************                                                  ********************
//******************************************************************************************

function DelProducto(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Borrar Producto</div>'+
                    '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Informacion">Información</a><li>'+
                        '</ul>'+
                         '<div class="tab_container">'+
                            '<div id="DelProducto" class="tab_content">'+
                            '<form action="" method="POST" name="form_borrar_producto">'+
                              '<table align="right" border="0" align="left">'+
                                  '<tr>'+
                                      '<td colspan="2" rowspan="12" align="center">'+
                                          '<div class="foto">'+
                                              '<div class="imagen">'+
                                                  '<img src="images/usuario.png" align="center">'+
                                              '</div>'+
                                              '<div>'+
                                                  '<input type="button" value="Cargar Foto" class="button" '+
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th align="right" style="padding-right:5px;">IdProducto</th>'+
                                        '<td><input type="text" name="codigo_producto" value="' + jsonObject.codigo_producto + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                        '<td><input type="text" name="nombre" value="' + jsonObject.nombre + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+
                                        '<td><input type="text" name="nombre_linea" value="' + jsonObject.nombre_linea + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Material</th>'+
                                        '<td><input type="text" name="material" value="' + jsonObject.material + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Tipo de Producto</th>'+
                                        '<td><input type="text" name="cod_tipo_producto" value="' + jsonObject.cod_tipo_producto + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Color</th>'+
                                        '<td><input type="text" name="color" value="' + jsonObject.color + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Cantidad</th>'+
                                        '<td><input type="text" name="cantidad" value="' + jsonObject.cantidad + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Talla</th>'+
                                        '<td><input type="text" name="talla" value="' + jsonObject.talla + '" size="20" maxlength="12" readonly="readonly"/></td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Precio de Costo</th>'+
                                        '<td><input type="text" name="precio_costo" value="' + jsonObject.precio_costo + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Precio de Venta</th>'+
                                        '<td><input type="text" name="precio_venta" value="' + jsonObject.precio_venta + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                          '<th align="right" style="padding-right:5px;">Precio de Descuento</th>'+
                                          '<td><input type="text" name="precio_descuento" value="' + jsonObject.precio_descuento + '" size="20" maxlength="12" readonly="readonly"/></td>'+
                                        '</tr>'+
                                      '</table>'+
                                    '</div>'+
                                '</table>'+
                            '</div>'+
                            '</table>'+
                            '<table align="center">'+
                                '<tr>'+
                                  '<td colspan="4" align="center">'+
                                      '<input type="button" value="Volver" class="button" id="volverAddProducto" />'+
                                      '<a href="#DelP" class="button" name="' + jsonObject.codigo_producto + '" id="borrarProducto" style="text-decoration:none; padding:2px 4px 2px 4px;">Borrar<a/>'+
                                  '</td>'+
                                '</tr>'+
                            '</table>'+       
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    activadorEventosProductos();
}
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//************* FUNCION QUE LLAMA AL LIGHTBOX PARA CONFIRMAR  *********************
//************* LA ELIMINACION DE LOS DATOS                    *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
function ConfirmDelProducto()
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Borrar Producto</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea borrar el Producto?</th>'+
                            '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Si" class="button" id="OkDelProducto" name="' + id + '"/>'+
                                '<input type="button" value="No" class="button" id="NotDelProducto"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosProductos();
}
function DelProductoOk()
{
    var id = $(this)[0].name; 
    //alert(id);
    var request = {"Usuarios":"DelProducto","Codigo_Producto":id};
    var jsonobj=JSON.stringify(request);
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador', 
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        verificarDelProducto(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
function verificarDelProducto(jsonObj)
{
    if (jsonObj.DelProducto==="true")
    {
        alert("El Producto se ha borrado correctamente");
    }
    
    else
    {
        alert("El Producto no se pudo borrar");
    }   
    
    seccionListadoProductos();
}

function HideConfirmDelProducto()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();    
}

//##################################################################################
//##################################################################################

//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//***********************                    SECCION DE CATEGORIAS                  ***********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function seccionListadolineas()
{
    var request = {"Usuarios":"Lineas"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarListadolineas(jsonArray);     
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

//******************************************************************************************
//******************************************************************************************
//*************                                                        *********************
//************* FUNCION PARA CARGAR LOS DATOS DE LA SECCION CATEGORIAS *********************
//*************                                                        *********************
//******************************************************************************************
//******************************************************************************************

function cargarListadolineas(jsonArray, id)
{
    var codigoHTML = '<div class="encabezado2">Listado de lineas de Producción</div>'+
                     '<div class="tabla">'+
                        '<table class="tbonita">'+
                          '<tr align="left">'+
                            '<th><img src="images/b_insrow.png" title="Agregar" id="' + id + '" class="addLinea"/></th>'+
                            '<th><a href="ServletInformes?informe=reporteLineasPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th><a href="servletInformes?informe=reporteUsuariosXLS"><img src="images/iconoExcel.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th>Codigo</th>'+
                            '<th>Nombre</th>'+
                         '</tr>';
                                 
    for (var i = 0; i < jsonArray.length; i++)
    {
            if (i % 2 === 0)
                codigoHTML+=               '<tr>';
           else
                codigoHTML+=               '<tr class="even">';
            
           codigoHTML+=                            '<td><img src="images/b_edit.png" title="Modificar" class="ModLinea" id="' + jsonArray[i].cod_linea + '" /></td>'+
                                                               '<td><img src="images/b_drop.png" title="Eliminar" class="DelLinea" id="' + jsonArray[i].cod_linea + '" /></td>'+
                                                               '<td><img src="images/b_search.png" title="Visualizar" class="VerLinea" id="' + jsonArray[i].cod_linea + '" /></td>';
            codigoHTML+=                          '<td>' + jsonArray[i].cod_linea + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].nombre_linea + '</td>';  
            codigoHTML+=                   '</tr>';
            
    }
    
    codigoHTML+=                '</table>'+
                                  '</div>';

    $("#datos").html(codigoHTML);
    $(".content-float-datos").css({width: 630});
    $(".tbonita").css({width: 620});
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#lineasProd").addClass("active");
    activadorEventosProductos(); 
}
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
function ConfirmAddLinea()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosLineas","CodLinea":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        AddLinea(jsonObject); 
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
               });  
}

//*********************************************************************************************************
//***********************                                                           ***********************
//***********************         FUNCION PARA ADICIONAR A UN NUEVO USUARIO         ***********************
//***********************                                                           ***********************
//*********************************************************************************************************

function AddLinea()
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Adicionar Linea</div>'+
                        '<table align="center">'+
                            '<form id="form_crear_linea"  enctype="multipart/form-data"  align="center">'+
                                  '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="cod_linea" value="" size="20" maxlength="15" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="nombre_linea" value="" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotAddLinea"/>'+
                                '<input type="submit" value="Registrar" class="button" id="enviarDatosAddLinea" name="' + id + '"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    $("#form_crear_linea").submit(enviarDatosAddLinea);
    activadorEventosProductos();
}
function enviarDatosAddLinea(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray(); 
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"AddLinea","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({       
                data: {administrador:jsonobj},
                type: 'POST',
                dataType: 'json',
                url: 'ServletAdministrador',
                success: function(jsonObj)
                {
                    verificarAddLinea(jsonObj);
                },
                error: function() 
                {
                    alert('Error al conectar con el servidor');
                }
           });
}
function verificarAddLinea(jsonObj)
{
    if (jsonObj.AddLinea  ==="true")
    {
        alert("La Linea se ha adicionado correctamente");
    }
    
    else
    {
        alert("La Linea no se pudo adicionar");
    }   
    
    HideConfirmAddLinea();
}

function HideConfirmAddLinea()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();    
}
//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosModlinea()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosLineas","CodLinea":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        ModLinea(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA MODIFICAR LOS VIATICOS  ********************
//********************                                      ********************
//******************************************************************************

function ModLinea(jsonObject)
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Modificar Linea</div>'+
                     '<div class="tabla">'+
                            '<form id="form_modificar_linea"  enctype="multipart/form-data"  align="center">'+
                                  '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="cod_linea" value="' + jsonObject.cod_linea + '" size="20" maxlength="15" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="nombre_linea" value="' + jsonObject.nombre_linea + '" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td><input type="hidden" name="cod_lineamod" id="cod_lineamod" value="' + jsonObject.cod_linea + '" /></td>'+
                                  '</tr>'+
                                '</br>'+
                              '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotAddLinea"/>'+
                                '<input type="submit" value="Registrar" class="button" id="enviarDatosModLinea" name="' + id + '"/>'+
                            '</td>'+
                        '</table>'+
                    '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    $("#form_modificar_linea").submit(enviarDatosModLinea);
    activadorEventosProductos();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************  FUNCION PARA ENVIAR LOS DATOS MODIFICADOS A LA BASE DE DATOS   ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosModLinea(evento)
{
    evento.preventDefault();
    var cod_linea = $("#cod_lineamod").val();
    //alert(id_viaticos);
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"ModLinea","Datos":datos, "CodLinea":cod_linea};
    var jsonobj=JSON.stringify(request);
   // alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    success: function(jsonObj)
                    {
                        verificarModLinea(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************  FUNCION PARA VERIFICAR QUE LOS DATOS HALLAN SIDO MODIFICADOS   ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function verificarModLinea(jsonObj)
{
    if (jsonObj.ModLinea  ==="true")
    {
        alert("La Linea se modificó correctamente");
    }
    
    else
    {
        alert("La Linea no se pudo modificar");
    }   
    HideConfirmAddLinea();
}

function HideConfirmAddLinea()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();    
}
//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosVerLinea()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosLineas","CodLinea":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerLinea(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrado');
                    }
               });
}

//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************          FUNCION PARA ELIMINAR UN LINEA DE PRODUCCION           ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************

function VerLinea(jsonObject)
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Visualizar Linea</div>'+
                        '<table align="center">'+
                        '<form id="form_eliminar_linea"  enctype="multipart/form-data"  align="center">'+
                            '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="cod_linea" value="' + jsonObject.cod_linea + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="nombre_linea" value="' + jsonObject.nombre_linea + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotDelLinea"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosProductos();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosDelLinea()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosLineas","CodLinea":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        DelLinea(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************          FUNCION PARA ELIMINAR UN LINEA DE PRODUCCION           ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************

function DelLinea(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Borrar Linea</div>'+
                        '<table align="center">'+
                            '<tr align="center">'+
                                '<th align="right" style="padding-right:5px;">Código</th>'+
                                '<td><input type="text" name="cod_linea" value="' + jsonObject.cod_linea + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                '<td><input type="text" name="nombre_linea" value="' + jsonObject.nombre_linea + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                              '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotDelLinea"/>'+
                                '<input type="button" value="Borrar" class="button" id="OkDelLinea" name="' + jsonObject.cod_linea + '"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosProductos();
}

function DelLineaOk()
{
    var id = $(this)[0].name; 
    //alert(id);
    var request = {"Usuarios":"DelLinea","CodLinea":id};
    var jsonobj=JSON.stringify(request);
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador', 
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        verificarDelLinea(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
function verificarDelLinea(jsonObj)
{
    if (jsonObj.DelLinea  ==="true")
    {
        alert("La Linea se ha borrado correctamente");
    }
    
    else
    {
        alert("La Linea no se pudo Borrar");
    }   
    HideConfirmAddLinea();
}

function HideConfirmAddLinea()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();    
}

//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//***********************                    SECCION DE COLORES                    ***********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function seccionListadoColores()
{
    var request = {"Usuarios":"Colores"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarListadoColores(jsonArray);     
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

//******************************************************************************************
//******************************************************************************************
//*************                                                        *********************
//************* FUNCION PARA CARGAR LOS DATOS DE LA SECCION DE COLORES *********************
//*************                                                        *********************
//******************************************************************************************
//******************************************************************************************

function cargarListadoColores(jsonArray, id)
{
    var codigoHTML = '<div class="encabezado2">Listado de Colores de los productos</div>'+
                     '<div class="tabla">'+
                        '<table class="tbonita">'+
                          '<tr align="left">'+
                            '<th><img src="images/b_insrow.png" title="Agregar" id="' + id + '" class="addColor"/></th>'+
                            '<th><a href="ServletInformes?informe=reporteColorPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th><a href="servletInformes?informe=reporteUsuariosXLS"><img src="images/iconoExcel.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th>id Color</th>'+
                            '<th>Color</th>'+
                         '</tr>';
                                 
    for (var i = 0; i < jsonArray.length; i++)
    {
            if (i % 2 === 0)
                codigoHTML+=               '<tr>';
           else
                codigoHTML+=               '<tr class="even">';
            
           codigoHTML+=                            '<td><img src="images/b_edit.png" title="Modificar" class="ModColor" id="' + jsonArray[i].cod_color + '" /></td>'+
                                                               '<td><img src="images/b_drop.png" title="Eliminar" class="DelColor" id="' + jsonArray[i].cod_color + '" /></td>'+
                                                               '<td><img src="images/b_search.png" title="Visualizar" class="VerColor" id="' + jsonArray[i].cod_color + '" /></td>';
            codigoHTML+=                          '<td>' + jsonArray[i].cod_color + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].color + '</td>';  
            codigoHTML+=                   '</tr>';
            
    }
    
    codigoHTML+=                '</table>'+
                                  '</div>';

    $("#datos").html(codigoHTML);
    $(".content-float-datos").css({width: 630});
    $(".tbonita").css({width: 620});
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#coloresProductos").addClass("active");
    activadorEventosProductos(); 
}
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
function ConfirmAddColor()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosColores","CodColor":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        AddColor(jsonObject); 
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
               });  
}

//*********************************************************************************************************
//***********************                                                           ***********************
//***********************         FUNCION PARA ADICIONAR A UN NUEVO USUARIO         ***********************
//***********************                                                           ***********************
//*********************************************************************************************************

function AddColor()
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Adicionar Color</div>'+
                        '<table align="center">'+
                            '<form id="form_crear_color"  enctype="multipart/form-data"  align="center">'+
                                  '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="cod_color" value="" size="20" maxlength="15" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Color</th>'+
                                    '<td><input type="text" name="color" value="" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotAddColor"/>'+
                                '<input type="submit" value="Registrar" class="button" id="enviarDatosAddColor" name="' + id + '"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    $("#form_crear_color").submit(enviarDatosAddColor);
    activadorEventosProductos();
}
function enviarDatosAddColor(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray(); 
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"AddColor","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                data: {administrador:jsonobj},
                type: 'POST',
                dataType: 'json',
                url: 'ServletAdministrador',
                success: function(jsonObj)
                {
                    verificarAddColor(jsonObj);
                },
                error: function() 
                {
                    alert('Error al conectar con el servidor');
                }
           });
}
function verificarAddColor(jsonObj)
{
    if (jsonObj.AddColor==="true")
    {
        alert("El Color se ha adicionado correctamente");
    }
    
    else
    {
        alert("El Color no se pudo adicionar");
    }   
    
    HideConfirmAddColor();
}

function HideConfirmAddColor()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();    
}
//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosModColor()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosColores","CodColor":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        ModColor(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA MODIFICAR LOS VIATICOS  ********************
//********************                                      ********************
//******************************************************************************

function ModColor(jsonObject)
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Modificar Color</div>'+
                     '<div class="tabla">'+
                            '<form id="form_modificar_color"  enctype="multipart/form-data"  align="center">'+
                                  '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="cod_color" value="' + jsonObject.cod_color + '" size="20" maxlength="15" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Color</th>'+
                                    '<td><input type="text" name="color" value="' + jsonObject.color + '" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td><input type="hidden" name="cod_colormod" id="cod_colormod" value="' + jsonObject.cod_color + '" /></td>'+
                                  '</tr>'+
                                '</br>'+
                              '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotAddLinea"/>'+
                                '<input type="submit" value="Registrar" class="button" id="enviarDatosModColor" name="' + id + '"/>'+
                            '</td>'+
                        '</table>'+
                    '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    $("#form_modificar_color").submit(enviarDatosModColor);
    activadorEventosProductos();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************  FUNCION PARA ENVIAR LOS DATOS MODIFICADOS A LA BASE DE DATOS   ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosModColor(evento)
{
    evento.preventDefault();
    var cod_color = $("#cod_colormod").val();
    //alert(id_viaticos);
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"ModColor","Datos":datos, "CodColor":cod_color};
    var jsonobj=JSON.stringify(request);
   // alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    success: function(jsonObj)
                    {
                        verificarModColor(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************  FUNCION PARA VERIFICAR QUE LOS DATOS HALLAN SIDO MODIFICADOS   ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function verificarModColor(jsonObj)
{
    if (jsonObj.ModLinea  ==="true")
    {
        alert("El Color se modificó correctamente");
    }
    
    else
    {
        alert("El Color no se pudo modificar");
    }   
    HideConfirmAddColor();
}

function HideConfirmAddColor()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();    
}
//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosVerColor()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosColores","CodColor":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerColor(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrado');
                    }
               });
}

//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************          FUNCION PARA ELIMINAR UN LINEA DE PRODUCCION           ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************

function VerColor(jsonObject)
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Borrar Linea</div>'+
                        '<table align="center">'+
                        '<form id="form_eliminar_linea"  enctype="multipart/form-data"  align="center">'+
                            '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="cod_color" value="' + jsonObject.cod_color + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Color</th>'+
                                    '<td><input type="text" name="color" value="' + jsonObject.color + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotAddColor"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosProductos();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosDelColor()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosColores","CodColor":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        DelColor(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************          FUNCION PARA ELIMINAR UN LINEA DE PRODUCCION           ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************

function DelColor(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Borrar Linea</div>'+
                        '<table align="center">'+
                        '<form id="form_eliminar_linea"  enctype="multipart/form-data"  align="center">'+
                            '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="cod_color" value="' + jsonObject.cod_color + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="color" value="' + jsonObject.color + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotDelColor"/>'+
                                '<input type="button" value="Borrar" class="button" id="OkDelColor" name="' + jsonObject.cod_color + '"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosProductos();
}
function DelColorOk()
{
    var id = $(this)[0].name; 
    //alert(id);
    var request = {"Usuarios":"DelColor","CodColor":id};
    var jsonobj=JSON.stringify(request);
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador', 
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        verificarDelColor(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
function verificarDelColor(jsonObj)
{
    if (jsonObj.DelColor  ==="true")
    {
        alert("El Color se ha borrado correctamente");
    }
    
    else
    {
        alert("El Color no se pudo Borrar");
    }   
    HideConfirmAddLinea();
}

function HideConfirmAddLinea()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();    
}

//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//***********************                    SECCION DE TALLAS                      ***********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function seccionListadoTalla()
{
    var request = {"Usuarios":"Tallas"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarListadoTallas(jsonArray);     
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}
//
//**************************************************************************************
//**************************************************************************************
//*************                                                    *********************
//************* FUNCION PARA CARGAR LOS DATOS DE LA SECCION TALLAS *********************
//*************                                                    *********************
//**************************************************************************************
//**************************************************************************************

function cargarListadoTallas(jsonArray, id)
{
    var codigoHTML = '<div class="encabezado2">Listado de Tallas de los productos</div>'+
                     '<div class="tabla">'+
                        '<table class="tbonita">'+
                          '<tr align="left">'+
                            '<th><img src="images/b_insrow.png" title="Agregar" id="' + id + '" class="AddTalla"/></th>'+
                            '<th><a href="ServletInformes?informe=reporteTallasPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th><a href="servletInformes?informe=reporteUsuariosXLS"><img src="images/iconoExcel.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th>id Talla</th>'+
                            '<th>Talla</th>'+
                         '</tr>';
                                 
    for (var i = 0; i < jsonArray.length; i++)
    {
            if (i % 2 === 0)
                codigoHTML+=               '<tr>';
           else
                codigoHTML+=               '<tr class="even">';
            
           codigoHTML+=                            '<td><img src="images/b_edit.png" title="Modificar" class="ModTalla" id="' + jsonArray[i].cod_talla + '" /></td>'+
                                                               '<td><img src="images/b_drop.png" title="Eliminar" class="DelTalla" id="' + jsonArray[i].cod_talla + '" /></td>'+
                                                               '<td><img src="images/b_search.png" title="Visualizar" class="VerTalla" id="' + jsonArray[i].cod_talla + '" /></td>';
            codigoHTML+=                          '<td>' + jsonArray[i].cod_talla + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].talla + '</td>';  
            codigoHTML+=                   '</tr>';
            
    }
    
    codigoHTML+=                '</table>'+
                                  '</div>';

    $("#datos").html(codigoHTML);
    $(".content-float-datos").css({width: 630});
    $(".tbonita").css({width: 620});
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#tallasProductos").addClass("active");
    activadorEventosProductos();
}

function ConfirmAddTalla()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosTallas","CodTalla":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        AddTalla(jsonObject); 
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
               });  
}

//*********************************************************************************************************
//***********************                                                           ***********************
//***********************         FUNCION PARA ADICIONAR A UN NUEVO USUARIO         ***********************
//***********************                                                           ***********************
//*********************************************************************************************************

function AddTalla()
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Borrar Producto</div>'+
                        '<table align="center">'+
                            '<form id="form_crear_talla"  enctype="multipart/form-data"  align="center">'+
                                  '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="cod_talla" value="" size="20" maxlength="15" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Talla</th>'+
                                    '<td><input type="text" name="talla" value="" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotAddTalla"/>'+
                                '<input type="submit" value="Registrar" class="button" id="enviarDatosAddTalla" name="' + id + '"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    $("#form_crear_talla").submit(enviarDatosAddTalla);
    activadorEventosProductos();
}
function enviarDatosAddTalla(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray(); 
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"AddTalla","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({       
                data: {administrador:jsonobj},
                type: 'POST',
                dataType: 'json',
                url: 'ServletAdministrador',
                success: function(jsonObj)
                {
                    verificarAddTallas(jsonObj);
                },
                error: function() 
                {
                    alert('Error al conectar con el servidor');
                }
           });
}
function verificarAddTallas(jsonObj)
{
    if (jsonObj.AddTalla  ==="true")
    {
        alert("La talla se ha adicionado correctamente");
    }
    
    else
    {
        alert("La talla no se pudo adicionar");
    }   
    
    HideConfirmAddTalla();
}

function HideConfirmAddTalla()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();    
}
//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosModTalla()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosTallas","CodTalla":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        ModTalla(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA MODIFICAR LOS VIATICOS  ********************
//********************                                      ********************
//******************************************************************************

function ModTalla(jsonObject)
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Modificar Talla</div>'+
                     '<div class="tabla">'+
                            '<form id="form_modificar_talla"  enctype="multipart/form-data"  align="center">'+
                                  '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="cod_talla" value="' + jsonObject.cod_talla + '" size="20" maxlength="15" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Talla</th>'+
                                    '<td><input type="text" name="talla" value="' + jsonObject.talla + '" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td><input type="hidden" name="cod_tallamod" id="cod_tallamod" value="' + jsonObject.cod_talla + '" /></td>'+
                                  '</tr>'+
                                '</br>'+
                              '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotAddTalla"/>'+
                                '<input type="submit" value="Registrar" class="button" id="enviarDatosModTalla" name="' + id + '"/>'+
                            '</td>'+
                        '</table>'+
                    '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    $("#form_modificar_talla").submit(enviarDatosModTalla);
    activadorEventosProductos();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************  FUNCION PARA ENVIAR LOS DATOS MODIFICADOS A LA BASE DE DATOS   ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosModTalla(evento)
{
    evento.preventDefault();
    var cod_talla = $("#cod_tallamod").val();
    //alert(id_viaticos);
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"ModTalla","Datos":datos, "CodTalla":cod_talla};
    var jsonobj=JSON.stringify(request);
   // alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    success: function(jsonObj)
                    {
                        verificarModTalla(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************  FUNCION PARA VERIFICAR QUE LOS DATOS HALLAN SIDO MODIFICADOS   ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function verificarModTalla(jsonObj)
{
    if (jsonObj.ModTalla  ==="true")
    {
        alert("La talla se modificó correctamente");
    }
    
    else
    {
        alert("La talla no se pudo modificar");
    }   
    HideConfirmAddTalla();
}

function HideConfirmAddTalla()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();    
}
//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosVerTalla()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosTallas","CodTalla":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerTalla(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrado');
                    }
               });
}

//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************          FUNCION PARA ELIMINAR UN LINEA DE PRODUCCION           ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************

function VerTalla(jsonObject)
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Visualizar Tallas</div>'+
                        '<table align="center">'+
                        '<form id=""  enctype="multipart/form-data"  align="center">'+
                            '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="cod_talla" value="' + jsonObject.cod_talla + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Talla</th>'+
                                    '<td><input type="text" name="talla" value="' + jsonObject.talla + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotAddTalla"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosProductos();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosDelTallas()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosTallas","CodTalla":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        DelTalla(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************          FUNCION PARA ELIMINAR UN LINEA DE PRODUCCION           ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************

function DelTalla(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Borrar Talla</div>'+
                        '<table align="center">'+
                        '<form id="form_eliminar_linea"  enctype="multipart/form-data"  align="center">'+
                            '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="cod_talla" value="' + jsonObject.cod_talla + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="talla" value="' + jsonObject.talla + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotDelTalla"/>'+
                                '<input type="button" value="Borrar" class="button" id="OkDelTalla" name="' + jsonObject.cod_talla + '"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosProductos();
}
function DelTallaOk()
{
    var id = $(this)[0].name; 
    //alert(id);
    var request = {"Usuarios":"DelTalla","CodTalla":id};
    var jsonobj=JSON.stringify(request);
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador', 
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        verificarDelTalla(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
function verificarDelTalla(jsonObj)
{
    if (jsonObj.DelTalla  ==="true")
    {
        alert("La Talla se ha borrado correctamente");
    }
    
    else
    {
        alert("La Talla no se pudo Borrar");
    }   
    HideConfirmAddLinea();
}

function HideConfirmAddLinea()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();    
}
//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//***********************                    SECCION DE MATERIALES                  ***********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function seccionListadoMateriales()
{
    var request = {"Usuarios":"Materiales"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarMateriales(jsonArray);     
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//***********************  FUNCION PARA CARGAR LOS DATOS DE LA SECCION MATERIALES   ***********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function cargarMateriales(jsonArray, id)
{
    var codigoHTML = '<div class="encabezado2">Listado de Materiales de los productos</div>'+
                     '<div class="tabla">'+
                        '<table class="tbonita">'+
                          '<tr align="left">'+
                            '<th><img src="images/b_insrow.png" title="Agregar" id="' + id + '" class="AddMaterial"/></th>'+
                            '<th><a href="ServletInformes?informe=reporteMaterialesPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th><a href="servletInformes?informe=reporteUsuariosXLS"><img src="images/iconoExcel.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th>Codigo</th>'+
                            '<th>Material</th>'+
                         '</tr>';
                                 
    for (var i = 0; i < jsonArray.length; i++)
    {
            if (i % 2 === 0)
                codigoHTML+=               '<tr>';
           else
                codigoHTML+=               '<tr class="even">';
            
           codigoHTML+=                            '<td><img src="images/b_edit.png" title="Modificar" class="ModMaterial" id="' + jsonArray[i].codigo + '" /></td>'+
                                                               '<td><img src="images/b_drop.png" title="Eliminar" class="DelMaterial" id="' + jsonArray[i].codigo + '" /></td>'+
                                                               '<td><img src="images/b_search.png" title="Visualizar" class="VerMaterial" id="' + jsonArray[i].codigo + '" /></td>';
            codigoHTML+=                          '<td>' + jsonArray[i].codigo + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].material + '</td>';  
            codigoHTML+=                   '</tr>';
            
    }
    
    codigoHTML+=                '</table>'+
                                  '</div>';

    $("#datos").html(codigoHTML);
    $(".content-float-datos").css({width: 630});
    $(".tbonita").css({width: 620});
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#materialesProductos").addClass("active");
    activadorEventosProductos();
}

function ConfirmAddMaterial()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosMateriales","Codigo":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        AddMaterial(jsonObject); 
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletVendedor');
                    }
               });  
}

//*********************************************************************************************************
//***********************                                                           ***********************
//***********************         FUNCION PARA ADICIONAR A UN NUEVO USUARIO         ***********************
//***********************                                                           ***********************
//*********************************************************************************************************

function AddMaterial()
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Adicionar Material</div>'+
                        '<table align="center">'+
                            '<form id="form_crear_material"  enctype="multipart/form-data"  align="center">'+
                                  '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="codigo" value="" size="20" maxlength="15" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Material</th>'+
                                    '<td><input type="text" name="material" value="" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotAddMaterial"/>'+
                                '<input type="submit" value="Registrar" class="button" id="enviarDatosAddMaterial" name="' + id + '"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    $("#form_crear_material").submit(enviarDatosAddMaterial);
    activadorEventosProductos();
}
function enviarDatosAddMaterial(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray(); 
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"AddMaterial","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({       
                data: {administrador:jsonobj},
                type: 'POST',
                dataType: 'json',
                url: 'ServletAdministrador',
                success: function(jsonObj)
                {
                    verificarAddMaterial(jsonObj);
                },
                error: function() 
                {
                    alert('Error al conectar con el servidor');
                }
           });
}
function verificarAddMaterial(jsonObj)
{
    if (jsonObj.AddMaterial  ==="true")
    {
        alert("El Material se ha adicionado correctamente");
    }
    
    else
    {
        alert("El Material no se pudo adicionar");
    }   
    
    HideConfirmAddMaterial();
}

function HideConfirmAddMaterial()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();    
}
//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosModMaterial()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosMateriales","Codigo":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        ModMaterial(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA MODIFICAR LOS VIATICOS  ********************
//********************                                      ********************
//******************************************************************************

function ModMaterial(jsonObject)
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Modificar Material</div>'+
                     '<div class="tabla">'+
                            '<form id="form_modificar_material"  enctype="multipart/form-data"  align="center">'+
                                  '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="codigo" value="' + jsonObject.codigo + '" size="20" maxlength="15" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Material</th>'+
                                    '<td><input type="text" name="material" value="' + jsonObject.material + '" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td><input type="hidden" name="cod_materialmod" id="cod_materialmod" value="' + jsonObject.codigo + '" /></td>'+
                                  '</tr>'+
                                '</br>'+
                              '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotAddMaterial"/>'+
                                '<input type="submit" value="Registrar" class="button" id="enviarDatosModMaterial" name="' + id + '"/>'+
                            '</td>'+
                        '</table>'+
                    '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    $("#form_modificar_material").submit(enviarDatosModMaterial);
    activadorEventosProductos();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************  FUNCION PARA ENVIAR LOS DATOS MODIFICADOS A LA BASE DE DATOS   ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosModMaterial(evento)
{
    evento.preventDefault();
    var codigo = $("#cod_materialmod").val();
    //alert(id_viaticos);
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"ModMaterial","Datos":datos, "Codigo":codigo};
    var jsonobj=JSON.stringify(request);
   // alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    success: function(jsonObj)
                    {
                        verificarModMaterial(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************  FUNCION PARA VERIFICAR QUE LOS DATOS HALLAN SIDO MODIFICADOS   ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function verificarModMaterial(jsonObj)
{
    if (jsonObj.ModMaterial  ==="true")
    {
        alert("El Material se modificó correctamente");
    }
    
    else
    {
        alert("El Material no se pudo modificar");
    }   
    HideConfirmAddMaterial();
}

function HideConfirmAddMaterial()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();    
}
//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosVerMaterial()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosMateriales","Codigo":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerMaterial(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrado');
                    }
               });
}

//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************          FUNCION PARA ELIMINAR UN LINEA DE PRODUCCION           ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************

function VerMaterial(jsonObject)
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Visualizar Tallas</div>'+
                        '<table align="center">'+
                        '<form id=""  enctype="multipart/form-data"  align="center">'+
                            '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="codigo" value="' + jsonObject.codigo + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Material</th>'+
                                    '<td><input type="text" name="material" value="' + jsonObject.material + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotAddMaterial"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosProductos();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosDelMaterial()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosMateriales","Codigo":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        DelMaterial(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************          FUNCION PARA ELIMINAR UN LINEA DE PRODUCCION           ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************

function DelMaterial(jsonObject)
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Borrar Linea</div>'+
                        '<table align="center">'+
                            '<tr align="center">'+
                                    '<th align="right" style="padding-right:5px;">Código</th>'+
                                    '<td><input type="text" name="codigo" value="' + jsonObject.codigo + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="material" value="' + jsonObject.material + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Volver" class="button" id="NotDelMaterial"/>'+
                                '<input type="button" value="Borrar" class="button" id="OkDelMaterial" name="' + jsonObject.codigo + '"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosProductos();
}
function DelMaterialOk()
{
    var id = $(this)[0].name; 
    alert(id);
    var request = {"Usuarios":"DelMaterial","Codigo":id};
    var jsonobj=JSON.stringify(request);
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador', 
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        verificarDelMaterial(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
function verificarDelMaterial(jsonObj)
{
    if (jsonObj.DelMaterial  ==="true")
    {
        alert("El Material se ha borrado correctamente");
    }
    
    else
    {
        alert("El Material no se pudo Borrar");
    }   
    HideConfirmAddLinea();
}

function HideConfirmAddLinea()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();    
}

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DEL MENU VERTICAL DE LOS   *********************
//*************  CLIENTES                                      *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************


function seccionListadoClientes()
{
    var request = {"Usuarios":"Clientes"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarListadoClientes(jsonArray);     
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CARGAR LOS DATOS A LA SECCION CLIENTES      ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function cargarListadoClientes(jsonArray)
{    
   var codigoHTML = '<div class="encabezado2">Listado de Clientes</div>'+
                            '<div class="tabla">'+
                               '<table class="tbonita">'+
                                 '<tr align="letf">'+
                                   '<th><img src="images/b_insrow.png" title="Agregar" id="ACliente"/></th>'+
                                   '<th><a href="ServletInformes?informe=reporteClientesPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                                   '<th><a href="servletInformes?informe=reporteUsuariosXLS"><img src="images/iconoExcel.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                                   '<th>Id Cliente</th>'+
                                   '<th>Nombre</th>'+
                                   '<th>Apellido</th>'+
                                   '<th>Telefono</th>'+
                                   '<th>Celular</th>'+
                                   '<th>Email</th>'+
                                 '</tr>';
                                 
    for (var i = 0; i < jsonArray.length; i++)
    {
           if (i % 2 === 0)
                codigoHTML+=               '<tr>';
           else
                codigoHTML+=               '<tr class="even">';
            
           codigoHTML+=                            '<td><img src="images/b_edit.png" title="Modificar" class="ModCliente" id="' + jsonArray[i].id_cliente + '" /></td>'+
                                                               '<td><img src="images/b_drop.png" title="Eliminar" class="DelCliente" id="' + jsonArray[i].id_cliente + '" /></td>'+
                                                               '<td><img src="images/b_search.png" title="Visualizar" class="VerCliente" id="' + jsonArray[i].id_cliente + '" /></td>';
            codigoHTML+=                          '<td>' + jsonArray[i].id_cliente + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].nombre + '</td>'; 
            codigoHTML+=                          '<td>' + jsonArray[i].apellido + '</td>'; 
            codigoHTML+=                          '<td>' + jsonArray[i].telefono + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].celular + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].email + '</td>';
            codigoHTML+=                   '</tr>';
            
    }
    
    codigoHTML+=                '</table>'+
                                  '</div>';

    $("#datos").html(codigoHTML);
    $(".tbonita").css({width: 620});
    $(".content-float-datos").css({width: 630});
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#listadoClientes").addClass("active");
    ActivadorEventosClientes();
    
}

//***********************************************************************************
//********************                                           ********************
//******************** FUNCION PARA ADICIONAR A UN NUEVO CLIENTE ********************
//********************                                           ********************
//***********************************************************************************

function AddCliente()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Cliente</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Datos Personales</a></li>'+
                            '<li><a href="#Otros">Datos Adicionales</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                              '<form id="form_enviar_foto"  enctype="multipart/form-data">'+
                                '<table align="center" border="0">'+
                                    '<tr>'+
                                        '<td colspan="2" rowspan="10" align="center">'+
                                            '<div class="foto">'+
                                                '<div class="imagen" id="fotoUsuarios">'+
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
                                '<form id="form_crear_cliente"  enctype="multipart/form-data">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Cedula</th>'+
                                    '<td><input type="text" name="cedula" value="" size="20" maxlength="15" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Razon Social</th>'+
                                    '<td><input type="text" name="razon_social" value="" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="nombre" value="" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellido</th>'+
                                    '<td><input type="text" name="apellido" value="" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion" value="" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono" value="" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular" value="" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Email</th>'+
                                    '<td><input type="text" name="email" value="" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '</table>'+
                                  '</div>'+
                            '<div id="Otros" class="tab_content">'+
                                 '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td><input type="text" name="fecha" id="date_field9" value="" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Crédito Maximo</th>'+
                                    '<td><input type="text" name="maximo_credito" value="" size="20" maxlength="35" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre Contacto</th>'+
                                    '<td><input type="text" name="nombre_contacto" value="" size="20" maxlength="35" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Responsable</th>'+
                                    '<td><input type="text" name="responsable" value="" size="20" maxlength="35" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Estado</th>'+
                                    '<td><input type="text" name="estado" value="" size="20" maxlength="35" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Departamento:</th>'+
                                     '<td>'+
                                        '<select name="cod_departamento" class="deptos" style="width:165px;" onchange="cargarMunicipios()">'+
                                        '</select>'+
                                     '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                     '<td>'+
                                        '<select name="codMunicipio" style="width:165px;" class="municipios">'+
                                            //'<option value="null"></option>'+
                                        '</select>'+
                                     '</td>'+
                                    '<th align="right" style="padding-right:5px;">Id Usuario</th>'+
                                     '<td>'+
                                        '<select name="id_usuario" style="width:165px;" class="vendor">'+
                                            //'<option value="null"></option>'+
                                        '</select>'+
                                     '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-left:5px;">Id Ubicacion</th>'+
                                    '<td>'+
                                    '<select name="id_ubicacion" style="width:165px;" class="ubicacion">'+
                                      //'<option value="null"></option>'+
                                     '</select>'+
                                  '</td>'+ 
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Comentarios<br>'+
                                      '<textarea name="comentario" cols="74" rows="6"></textarea>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddCliente" />'+
                                  '<input type="submit" value="Registrar" class="button"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';


    $("#datos").html(codigoHTML);
    listUbicacion();
    cargarListadoVendedores();
    cargarMunicipios();
    listadoDepartamentos();
    IniciarTabers();
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_crear_cliente").submit(enviarDatosAddCliente);
    ActivadorEventosClientes();
    cargarFoto();
}

//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//***********************       FUNCION PARA CARGAR LAS FOTOS DE LOS USUARIOS       ***********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

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
                var rutaFoto = "images/Usuarios/" + file;
                var htmlFoto = '<img src="' + rutaFoto + '" align="center" width="180px">';
                $('#rutaFoto').attr("value",file);
                $('#fotoUsuarios').html(htmlFoto);
        }	
    });
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

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//*********************** FUNCION PARA ENVIAR LOS DATOS Y ADICIONARLOS A LA BASE DE DATOS ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosAddCliente(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray(); 
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"AddCliente","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                data: {administrador:jsonobj},
                type: 'POST',
                dataType: 'json',
                url: 'ServletAdministrador',
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
//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//*********************** FUNCION PARA VERIFICAR QUE LOS DATOS SE HALLAN ADICIONADO ***********************
//***********************                   CORRECTAMENTE                           **********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function verificarAddCliente(jsonObj)
{
    if (jsonObj.AddCliente  ==="true")
    {
        alert("El Cliente se adicionó correctamente");
    }
    
    else
    {
        alert("El Cliente no se pudo adicionar");
    }   
    
    seccionListadoClientes();
}

//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA MODIFICAR LOS DATOS DE  ********************
//********************            LOS CLIENTES              ********************
//********************                                      ********************
//******************************************************************************

function DatosModClientes()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosClientes","Id_Cliente":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        ModCliente(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA MODIFICAR LOS USUARIOS  ********************
//********************                                      ********************
//******************************************************************************

function ModCliente(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Modificar Usuario</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Datos Personales</a></li>'+
                            '<li><a href="#Otros">Datos Adicionales</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                              '<form id="form_enviar_foto"  enctype="multipart/form-data">'+
                                '<table align="center" border="0">'+
                                    '<tr>'+
                                        '<td colspan="2" rowspan="10" align="center">'+
                                            '<div class="foto">'+
                                                '<div class="imagen" id="fotoUsuarios">'+
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
                                '<form id="form_modificar_cliente"  enctype="multipart/form-data">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Cedula</th>'+
                                    '<td><input type="text" name="cedula" value="' + jsonObject.cedula + '" size="20" maxlength="15" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Razon Social</th>'+
                                    '<td><input type="text" name="razon_social" value="' + jsonObject.razon_social + '" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="nombre" value="' + jsonObject.nombre + '" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellido</th>'+
                                    '<td><input type="text" name="apellido" value="' + jsonObject.apellido + '" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion" value="' + jsonObject.direccion + '" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono" value="' + jsonObject.telefono + '" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular" value="' + jsonObject.celular + '" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Email</th>'+
                                    '<td><input type="text" name="email" value="' + jsonObject.email + '" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '</table>'+
                                  '</div>'+
                            '<div id="Otros" class="tab_content">'+
                                 '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td><input type="text" name="fecha" id="date_field9" value="' + jsonObject.fecha + '" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Crédito Maximo</th>'+
                                    '<td><input type="text" name="maximo_credito" value="' + jsonObject.maximo_credito + '" size="20" maxlength="35" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre Contacto</th>'+
                                    '<td><input type="text" name="nombre_contacto" value="' + jsonObject.nombre_contacto + '" size="20" maxlength="35" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Responsable</th>'+
                                    '<td><input type="text" name="responsable" value="' + jsonObject.responsable + '" size="20" maxlength="35" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Estado</th>'+
                                    '<td><input type="text" name="estado" value="' + jsonObject.estado + '" size="20" maxlength="35" required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Departamento:</th>'+
                                     '<td>'+
                                        '<select name="cod_departamento" class="deptos" style="width:165px;" onchange="cargarMunicipios()">'+
                                        '</select>'+
                                     '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                     '<td>'+
                                        '<select name="codMunicipio" style="width:165px;" class="municipios">'+
                                            //'<option value="null"></option>'+
                                        '</select>'+
                                     '</td>'+
                                    '<th align="right" style="padding-right:5px;">Id Usuario</th>'+
                                     '<td>'+
                                        '<select name="id_usuario" style="width:165px;" class="vendor">'+
                                            //'<option value="null"></option>'+
                                        '</select>'+
                                     '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-left:5px;">Id Ubicacion</th>'+
                                    '<td>'+
                                    '<select name="id_ubicacion" style="width:165px;" class="ubicacion">'+
                                      //'<option value="null"></option>'+
                                     '</select>'+
                                  '</td>'+ 
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Comentarios<br>'+
                                      '<textarea name="comentario" cols="74" rows="6">' + jsonObject.comentario + '</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                                '<tr>'+
                                    '<td><input type="hidden" name="id_clienteMod" id="id_clienteMod" value="' + jsonObject.id_cliente + '" /></td>'+
                                '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddCliente" />'+
                                  '<input type="submit" value="Registrar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    listUbicacion();
    listadoDepartamentos();
    cargarListadoVendedores();
    cargarMunicipios();
    IniciarTabers();
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_modificar_cliente").submit(enviarDatosModCliente);
    ActivadorEventosClientes();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//*********************** FUNCION PARA ENVIAR LOS DATOS MODIFICADOS A LA BASE DE DATOS    ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosModCliente(evento)
{
    evento.preventDefault();
    var id_cliente = $("#id_clienteMod").val();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"ModCliente","Datos":datos, "Id_Cliente":id_cliente};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    success: function(jsonObj)
                    {
                        verificarModCliente(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//***********************************************************************************************************************
//***********************************************************************************************************************
//***********************                                                                         ***********************
//*********************** FUNCION PARA VERIFICAR QUE LOS DATOS SE HALLAN MODIFICADO CORRECTAMENTE ***********************
//***********************                                                                         ***********************
//***********************************************************************************************************************
//***********************************************************************************************************************

function verificarModCliente(jsonObj)
{
    if (jsonObj.ModCliente  ==="true")
    {
        alert("El Cliente se modificó correctamente");
    }
    
    else
    {
        alert("El Cliente no se pudo modificar");
    }   
    
    seccionListadoClientes();
}
//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosVerCliente()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosClientes","Id_Cliente":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerCliente(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrado');
                    }
               });
}

//*******************************************************************************
//********************                                       ********************
//******************** FUNCION PARA VISUALIZAR LOS DATOS DE  ********************
//********************            LOS CLIENTES               ********************
//********************                                       ********************
//*******************************************************************************

function VerCliente(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Visualizar Cliente</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Datos Personales</a></li>'+
                            '<li><a href="#Otros">Datos Adicionales</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                              '<form id="form_enviar_foto"  enctype="multipart/form-data">'+
                                '<table align="center" border="0">'+
                                    '<tr>'+
                                        '<td colspan="2" rowspan="10" align="center">'+
                                            '<div class="foto">'+
                                                '<div class="imagen" id="fotoUsuarios">'+
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
                                '<form enctype="multipart/form-data">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Cedula</th>'+
                                    '<td><input type="text" name="cedula" value="' + jsonObject.cedula + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Razon Social</th>'+
                                    '<td><input type="text" name="razon_social" value="' + jsonObject.razon_social + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="nombre" value="' + jsonObject.nombre + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellido</th>'+
                                    '<td><input type="text" name="apellido" value="' + jsonObject.apellido + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion" value="' + jsonObject.direccion + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono" value="' + jsonObject.telefono + '" size="20" maxlength="12" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular" value="' + jsonObject.celular + '" size="20" maxlength="12" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Email</th>'+
                                    '<td><input type="text" name="email" value="' + jsonObject.email + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '</table>'+
                                  '</div>'+
                            '<div id="Otros" class="tab_content">'+
                                 '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td><input type="text" name="fecha" id="date_field9" value="' + jsonObject.fecha + '" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Crédito Maximo</th>'+
                                    '<td><input type="text" name="maximo_credito" value="' + jsonObject.maximo_credito + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre Contacto</th>'+
                                    '<td><input type="text" name="nombre_contacto" value="' + jsonObject.nombre_contacto + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Responsable</th>'+
                                    '<td><input type="text" name="responsable" value="' + jsonObject.responsable + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Estado</th>'+
                                    '<td><input type="text" name="estado" value="' + jsonObject.estado + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Departamento:</th>'+
                                    '<td><input type="text" name="nombre_depto" value="' + jsonObject.nombre_depto + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                    '<td><input type="text" name="codMunicipio" value="' + jsonObject.nombreMunicipio + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Id Usuario</th>'+
                                    '<td><input type="text" name="id_usuario" value="' + jsonObject.id_usuario + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id Ubicacion</th>'+
                                    '<td><input type="text" name="id_ubicacion" value="' + jsonObject.id_ubicacion + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Comentarios<br>'+
                                      '<textarea name="comentario" cols="74" rows="6" readonly="readonly">' + jsonObject.comentario + '</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                                    '</table>'+
                                  '</div>'+
                                '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                            '<table align="center">'+
                              '<tr>'+
                                '<td colspan="4" align="center">'+
                                    '<input type="button" value="Volver" class="button" id="volverAddCliente" />'+
                                '</td>'+
                              '</tr>'+
                            '</table>'+               
                        '</div>';
    $("#datos").html(codigoHTML);
    IniciarTabers();
    ActivadorEventosClientes();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosDelCliente()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosClientes","Id_Cliente":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        DelCliente(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************          FUNCION PARA ELIMINAR LOS DATOS DE UN CLIENTE          ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************

function DelCliente(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Eliminar Cliente</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Datos Personales</a></li>'+
                            '<li><a href="#Otros">Datos Adicionales</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                              '<form id="form_enviar_foto"  enctype="multipart/form-data">'+
                                '<table align="center" border="0">'+
                                    '<tr>'+
                                        '<td colspan="2" rowspan="10" align="center">'+
                                            '<div class="foto">'+
                                                '<div class="imagen" id="fotoUsuarios">'+
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
                                '<form enctype="multipart/form-data">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Cedula</th>'+
                                    '<td><input type="text" name="cedula" value="' + jsonObject.cedula + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Razon Social</th>'+
                                    '<td><input type="text" name="razon_social" value="' + jsonObject.razon_social + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="nombre" value="' + jsonObject.nombre + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellido</th>'+
                                    '<td><input type="text" name="apellido" value="' + jsonObject.apellido + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion" value="' + jsonObject.direccion + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono" value="' + jsonObject.telefono + '" size="20" maxlength="12" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular" value="' + jsonObject.celular + '" size="20" maxlength="12" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Email</th>'+
                                    '<td><input type="text" name="email" value="' + jsonObject.email + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '</table>'+
                                  '</div>'+
                            '<div id="Otros" class="tab_content">'+
                                 '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td><input type="text" name="fecha" id="date_field9" value="' + jsonObject.fecha + '" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Crédito Maximo</th>'+
                                    '<td><input type="text" name="maximo_credito" value="' + jsonObject.maximo_credito + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre Contacto</th>'+
                                    '<td><input type="text" name="nombre_contacto" value="' + jsonObject.nombre_contacto + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Responsable</th>'+
                                    '<td><input type="text" name="responsable" value="' + jsonObject.responsable + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Estado</th>'+
                                    '<td><input type="text" name="estado" value="' + jsonObject.estado + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Departamento:</th>'+
                                    '<td><input type="text" name="nombre_depto" value="' + jsonObject.nombre_depto + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                    '<td><input type="text" name="codMunicipio" value="' + jsonObject.nombreMunicipio + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Id Usuario</th>'+
                                    '<td><input type="text" name="id_usuario" value="' + jsonObject.id_usuario + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id Ubicacion</th>'+
                                    '<td><input type="text" name="id_ubicacion" value="' + jsonObject.id_ubicacion + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Comentarios<br>'+
                                      '<textarea name="comentario" cols="74" rows="6" readonly="readonly">' + jsonObject.comentario + '</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                                    '</table>'+
                                  '</div>'+
                                '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                            '<table align="center">'+
                              '<tr>'+
                                '<td colspan="4" align="center">'+
                                    '<input type="button" value="Volver" class="button" id="volverAddCliente" />'+
                                    '<a href="#DelC" class="button" name="' + jsonObject.id_cliente + '" id="borrarCliente" style="text-decoration:none; padding:2px 4px 2px 4px;">Borrar<a/>'+
                                '</td>'+
                              '</tr>'+
                            '</table>'+               
                        '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    ActivadorEventosClientes();
}
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//************* FUNCION QUE LLAMA AL LIGHTBOX PARA CONFIRMAR  *********************
//************* LA ELIMINACION DE LOS DATOS                    *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
function ConfirmDelCliente()
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Borrar Cliente</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea borrar al Cliente?</th>'+
                            '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Si" class="button" id="OkDelCliente" name="' + id + '"/>'+
                                '<input type="button" value="No" class="button" id="NotDelCliente"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    ActivadorEventosClientes();
}
function DelClienteOk()
{
    var id = $(this)[0].name; 
    //alert(id);
    var request = {"Usuarios":"DelCliente","Id_Cliente":id};
    var jsonobj=JSON.stringify(request);
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador', 
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        verificarDelCliente(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
function verificarDelCliente(jsonObj)
{
    if (jsonObj.DelCliente==="true")
    {
        alert("El Cliente se ha borrado correctamente");
    }
    
    else
    {
        alert("El Cliente no se pudo borrar");
    }   
    
    seccionListadoClientes();
}

function HideConfirmDelCliente()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    ActivadorEventosClientes();    
}

//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//***********************                    SECCION DE PEDIDOS                     ***********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function seccionListadoPedidos()
{
    var request = {"Usuarios":"Pedidos"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarPedidos(jsonArray);     
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

//****************************************************************************************
//****************************************************************************************
//*************                                                      *********************
//************* FUNCION PARA CARGAR LOS DATOS DE LA SECCION PEDIDOS  *********************
//*************                                                      *********************
//****************************************************************************************
//****************************************************************************************

function cargarPedidos(jsonArray)
{
    var codigoHTML = '<div class="encabezado2">Listado de Pedidos</div>'+
                     '<div class="tabla">'+
                        '<table class="tbonita">'+
                          '<tr align="left">'+
                            '<th><img src="images/b_insrow.png" title="Agregar" id="AddPedido"/></th>'+
                            '<th><a href="ServletInformes?informe=reportePedidosPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th><a href="servletInformes?informe=reporteUsuariosXLS"><img src="images/iconoExcel.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th>Id Pedido</th>'+
                            '<th>Id Cliente</th>'+
                            '<th>Fecha</th>'+
                            '<th>Hora</th>'+
                            '<th>Valor Total</th>'+
                         '</tr>';
                                 
    for (var i = 0; i < jsonArray.length; i++)
    {
            if (i % 2 === 0)
                codigoHTML+=               '<tr>';
           else
                codigoHTML+=               '<tr class="even">';
            
           codigoHTML+=                            '<td><img src="images/b_edit.png" title="Modificar" class="ModPedido" id="' + jsonArray[i].id_pedido + '" /></td>'+
                                                               '<td><img src="images/b_drop.png" title="Eliminar" class="DelPedido" id="' + jsonArray[i].id_pedido + '" /></td>'+
                                                               '<td><img src="images/b_search.png" title="Visualizar" class="VerPedido" id="' + jsonArray[i].id_pedido + '" /></td>';
            codigoHTML+=                          '<td>' + jsonArray[i].id_pedido + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].id_cliente + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].fecha + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].hora + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].valor_total + '</td>';
            codigoHTML+=                   '</tr>';
            
    }
    
    codigoHTML+=                '</table>'+
                                  '</div>';

    $("#datos").html(codigoHTML);
    $(".content-float-datos").css({width: 630});
    $(".tbonita").css({width: 620});
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#pedidosClientes").addClass("active");
    ActivadorEventosClientes(); 
}
//**********************************************************************************************
//***************                                                        ***********************
//***************               OPCION ADICIONAR PRODUCTO                ***********************
//***************                                                        ***********************
//**********************************************************************************************

function AddPedido()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Producto</div>'+
                     '<div class="tabla">'+
                            '<div id="Informacion" class="tab_content">'+
                              '<form id="form_enviar_foto"  enctype="multipart/form-data">'+
                                '<table align="center" border="0">'+
                                '</form>'+
                                '<br>'+
                                '<br>'+
                                '<form id="form_crear_pedido"  enctype="multipart/form-data">'+
                                  '<tr>'+
                                  '<th align="left" style="padding-left:5px;">Id Cliente:</th>'+
                                      '<td>'+
                                        '<select name="id_cliente" style="width:165px;" class="clients">'+
                                          //'<option value="null"></option>'+
                                         '</select>'+
                                      '</td>'+ 
                                    '<th align="left" style="padding-left:5px;">Id Usuario</th>'+
                                    '<td>'+
                                        '<select name="id_usuario" style="width:165px;" class="vendor">'+
                                          //'<option value="null"></option>'+
                                         '</select>'+
                                    '</td>'+ 
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input id="date_field9" type="text" name="fecha" value="" required/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Hora</th>'+
                                    '<td><input type="text" name="hora" value="" size="20" maxlength="12"required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Valor Iva:</th>'+
                                    '<td><input type="text" name="valor_del_iva" value="" size="20" maxlength="10"required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Valor Total:</th>'+
                                    '<td><input type="text" name="valor_total" value="" size="20" maxlength="10"required/></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddPedido" />'+
                                  '<input type="submit" value="Registrar" class="button"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    ListadoClientes();
    cargarListadoVendedores();
    IniciarTabers();
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_crear_pedido").submit(enviarDatosAddPedidos);
    ActivadorEventosClientes();
}
//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//*********************** FUNCION PARA CARGAR LOS DATOS Y ADICIONARLOS A LA BASE DE DATOS ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosAddPedidos(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray(); 
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"AddPedido","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                data: {administrador:jsonobj},
                type: 'POST',
                dataType: 'json',
                url: 'ServletAdministrador',
                success: function(jsonObj)
                {
                    verificarAddPedido(jsonObj);
                },
                error: function() 
                {
                    alert('Error al conectar con el servidor');
                }
           });
}
//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//*********************** FUNCION PARA VERIFICAR QUE LOS DATOS SE HALLAN ADICIONADO ***********************
//***********************                   CORRECTAMENTE                           **********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function verificarAddPedido(jsonObj)
{
    if (jsonObj.AddPedido  ==="true")
    {
        alert("El Pedido se adicionó correctamente");
    }
    
    else
    {
        alert("El Pedido no se pudo adicionar");
    }   
    
    seccionPedidosC();
}

//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA MODIFICAR LOS DATOS DE  ********************
//********************            LOS CLIENTES              ********************
//********************                                      ********************
//******************************************************************************

function DatosModPedido()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosPedidos","Id_Pedido":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        ModPedido(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA MODIFICAR LOS USUARIOS  ********************
//********************                                      ********************
//******************************************************************************

function ModPedido(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Modificar Pedido</div>'+
                     '<div class="tabla">'+
                            '<div id="Informacion" class="tab_content">'+
                              '<form id="form_enviar_foto"  enctype="multipart/form-data">'+
                                '<table align="center" border="0">'+
                                '</form>'+
                                '<br>'+
                                '<br>'+
                                '<form id="form_modificar_pedido"  enctype="multipart/form-data">'+
                                  '<tr>'+
                                  '<th align="left" style="padding-left:5px;">Id Cliente:</th>'+
                                      '<td>'+
                                        '<select name="id_cliente" style="width:165px;" class="clients">'+
                                          //'<option value="null"></option>'+
                                         '</select>'+
                                      '</td>'+ 
                                    '<th align="left" style="padding-left:5px;">Id Usuario</th>'+
                                    '<td>'+
                                        '<select name="id_usuario" style="width:165px;" class="vendor">'+
                                          //'<option value="null"></option>'+
                                         '</select>'+
                                    '</td>'+ 
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input id="date_field9" type="text" name="fecha" value="' + jsonObject.fecha + '" required/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Hora</th>'+
                                    '<td><input type="text" name="hora" value="' + jsonObject.hora + '" size="20" maxlength="12"required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Valor Iva:</th>'+
                                    '<td><input type="text" name="valor_del_iva" value="' + jsonObject.valor_del_iva + '" size="20" maxlength="10"required/></td>'+
                                    '<th align="right" style="padding-right:5px;">Valor Total:</th>'+
                                    '<td><input type="text" name="valor_total" value="' + jsonObject.valor_total + '" size="20" maxlength="10"required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td><input type="hidden" name="id_PedidoMod" id="id_PedidoMod" value="' + jsonObject.id_pedido + '" /></td>'+
                                '</tr>'+
                              '</table>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddPedido" />'+
                                  '<input type="submit" value="Registrar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    ListadoClientes();
    cargarListadoVendedores();
    IniciarTabers();
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_modificar_pedido").submit(enviarDatosModPedido);
    ActivadorEventosClientes();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//*********************** FUNCION PARA ENVIAR LOS DATOS MODIFICADOS A LA BASE DE DATOS    ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosModPedido(evento)
{
    evento.preventDefault();
    var id_pedido = $("#id_PedidoMod").val();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"ModPedido","Datos":datos, "Id_Pedido":id_pedido};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    success: function(jsonObj)
                    {
                        verificarModPedido(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//***********************************************************************************************************************
//***********************************************************************************************************************
//***********************                                                                         ***********************
//*********************** FUNCION PARA VERIFICAR QUE LOS DATOS SE HALLAN MODIFICADO CORRECTAMENTE ***********************
//***********************                                                                         ***********************
//***********************************************************************************************************************
//***********************************************************************************************************************

function verificarModPedido(jsonObj)
{
    if (jsonObj.ModPedido  ==="true")
    {
        alert("El Pedidos se modificó correctamente");
    }
    
    else
    {
        alert("El Pedidos no se pudo modificar");
    }   
    
    seccionPedidosC();
}
//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosVerPedido()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosPedidos","Id_Pedido":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerPedido(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrado');
                    }
               });
}

//*******************************************************************************
//********************                                       ********************
//******************** FUNCION PARA VISUALIZAR LOS DATOS DE  ********************
//********************            LOS CLIENTES               ********************
//********************                                       ********************
//*******************************************************************************

function VerPedido(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Visualizar Pedido</div>'+
                     '<div class="tabla">'+
                            '<div id="Informacion" class="tab_content">'+
                              '<form id="form_enviar_foto"  enctype="multipart/form-data">'+
                                '<table align="center" border="0">'+
                                '</form>'+
                                '<br>'+
                                '<br>'+
                                '<form id="form_ver_pedido"  enctype="multipart/form-data">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id Cliente</th>'+
                                    '<td><input type="text" name="id_cliente" value="' + jsonObject.id_cliente + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Id Usuario</th>'+
                                    '<td><input type="text" name="id_usuario" value="' + jsonObject.id_usuario + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input id="date_field9" type="text" name="fecha" value="' + jsonObject.fecha + '" readonly="readonly"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Hora</th>'+
                                    '<td><input type="text" name="hora" value="' + jsonObject.hora + '" size="20" maxlength="12" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Valor Iva:</th>'+
                                    '<td><input type="text" name="valor_del_iva" value="' + jsonObject.valor_del_iva + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Valor Total:</th>'+
                                    '<td><input type="text" name="valor_total" value="' + jsonObject.valor_total + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                              '</table>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddPedido" />'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';
                
    $("#datos").html(codigoHTML);
    IniciarTabers();
    ActivadorEventosClientes();
}
//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosDelPedido()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosPedidos","Id_Pedido":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        DelPedido(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************          FUNCION PARA ELIMINAR LOS DATOS DE UN CLIENTE          ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************

function DelPedido(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Eliminar Cliente</div>'+
                     '<div class="tabla">'+
                            '<div id="Informacion" class="tab_content">'+
                              '<form id="form_enviar_foto"  enctype="multipart/form-data">'+
                                '<table align="center" border="0">'+
                                '</form>'+
                                '<br>'+
                                '<br>'+
                                '<form id="form_ver_pedido"  enctype="multipart/form-data">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id Cliente</th>'+
                                    '<td><input type="text" name="id_cliente" value="' + jsonObject.id_cliente + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Id Usuario</th>'+
                                    '<td><input type="text" name="id_usuario" value="' + jsonObject.id_usuario + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input id="date_field9" type="text" name="fecha" value="' + jsonObject.fecha + '" readonly="readonly"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Hora</th>'+
                                    '<td><input type="text" name="hora" value="' + jsonObject.hora + '" size="20" maxlength="12" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Valor Iva:</th>'+
                                    '<td><input type="text" name="valor_del_iva" value="' + jsonObject.valor_del_iva + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Valor Total:</th>'+
                                    '<td><input type="text" name="valor_total" value="' + jsonObject.valor_total + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                              '</table>'+
                          '</div>'+
                          '<br>'+
                            '<table align="center">'+
                              '<tr>'+
                                '<td colspan="4" align="center">'+
                                    '<input type="button" value="Volver" class="button" id="volverAddPedido" />'+
                                    '<a href="#DelP" class="button" name="' + jsonObject.id_pedido + '" id="borrarPedido" style="text-decoration:none; padding:2px 4px 2px 4px;">Borrar<a/>'+
                                '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    ActivadorEventosClientes();
}
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//************* FUNCION QUE LLAMA AL LIGHTBOX PARA CONFIRMAR  *********************
//************* LA ELIMINACION DE LOS DATOS                    *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
function ConfirmDelPedido()
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Borrar Pedido</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea borrar el Pedido?</th>'+
                            '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Si" class="button" id="OkDelPedido" name="' + id + '"/>'+
                                '<input type="button" value="No" class="button" id="NotDelPedido"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    ActivadorEventosClientes();
}
function DelPedidoOk()
{
    var id = $(this)[0].name; 
    //alert(id);
    var request = {"Usuarios":"DelPedido","Id_Pedido":id};
    var jsonobj=JSON.stringify(request);
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador', 
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        verificarDelPedido(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
function verificarDelPedido(jsonObj)
{
    if (jsonObj.DelPedido==="true")
    {
        alert("El Pedido se ha borrado correctamente");
    }
    
    else
    {
        alert("El Pedido no se pudo borrar");
    }   
    
    seccionPedidosC();
}

function HideConfirmDelPedido()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    ActivadorEventosClientes();    
}
//*********************************************************************************************
//*********************************************************************************************
//*************                                                           *********************
//************* FUNCION OPCI0N DEVOLUCIONES DEL MENU VERTICAL DE CLIENTES *********************
//*************                                                           *********************
//*********************************************************************************************
//*********************************************************************************************

function seccionDevolucionesC()
{

    var codigoHTML = '<div class="encabezado">Gestión de Clientes</div>'+
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoClientes"><img src="images/IconoOpciones.png"/> Listado</a></li>'+
                        '<li><a href="#2" id="pedidosClientes"><img src="images/IconoOpciones.png"/> Pedidos</a></li>'+
                        '<li><a href="#3" id="devolucionesClientes"><img src="images/IconoOpciones.png"/> Devoluciones</a></li>'+
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".content-float-vendedores").show();
    $(".content-float-vendedores").css({height: 130});
    $(".nav .menu li a#Clientes").addClass("active");
    seccionListadoDevoluciones();
    $(".menu-vertical li a#devolucionesClientes").addClass("active");
    ActivadorEventosClientes();
}

//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//***********************                    SECCION DE DEVOLUCIONES                ***********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function seccionListadoDevoluciones()
{
    var request = {"Usuarios":"Devoluciones"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonArray)
                    {
                        cargarDevoluciones(jsonArray);     
                    },
                    error: function(jsonArray) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
           });
}

//********************************************************************************************
//********************************************************************************************
//*************                                                          *********************
//************* FUNCION PARA CARGAR LOS DATOS DE LA SECCION DEVOLUCIONES *********************
//*************                                                          *********************
//********************************************************************************************
//********************************************************************************************

function cargarDevoluciones(jsonArray)
{
    var codigoHTML = '<div class="encabezado2">Listado de Devoluciones de productos</div>'+
                     '<div class="tabla">'+
                        '<table class="tbonita">'+
                          '<tr align="left">'+
                            '<th><img src="images/b_insrow.png" title="Agregar" id="AddDevolucion"/></th>'+
                            '<th><a href="ServletInformes?informe=reporteDevolucionesPDF"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th><a href="servletInformes?informe=reporteUsuariosXLS"><img src="images/iconoExcel.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th>Id cliente</th>'+
                            '<th>Codigo Producto</th>'+
                            '<th>Id Usuario</th>'+
                            '<th>Id Devolucion</th>'+
                            '<th>Causa Devolucion</th>'+
                         '</tr>';
                                 
    for (var i = 0; i < jsonArray.length; i++)
    {
            if (i % 2 === 0)
                codigoHTML+=               '<tr>';
           else
                codigoHTML+=               '<tr class="even">';
            
           codigoHTML+=                            '<td><img src="images/b_edit.png" title="Modificar" class="ModDevolucion" id="' + jsonArray[i].id_devolucion + '" /></td>'+
                                                               '<td><img src="images/b_drop.png" title="Eliminar" class="DelDevolucion" id="' + jsonArray[i].id_devolucion + '" /></td>'+
                                                               '<td><img src="images/b_search.png" title="Visualizar" class="VerDevolucion" id="' + jsonArray[i].id_devolucion + '" /></td>';
            codigoHTML+=                          '<td>' + jsonArray[i].id_cliente + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].codigo_producto + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].id_usuario + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].id_devolucion + '</td>';
            codigoHTML+=                          '<td>' + jsonArray[i].causa_devolucion + '</td>';
            codigoHTML+=                   '</tr>';
            
    }
    
    codigoHTML+=                '</table>'+
                                  '</div>';

    $("#datos").html(codigoHTML);
    $(".content-float-datos").css({width: 630});
    $(".tbonita").css({width: 620});
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#devolucionesClientes").addClass("active");
    ActivadorEventosClientes(); 
}
//***********************************************************************************
//********************                                           ********************
//******************** FUNCION PARA ADICIONAR A UN NUEVO CLIENTE ********************
//********************                                           ********************
//***********************************************************************************

function AddDevolucion()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Devolución</div>'+
                     '<div class="tabla">'+
                     '<form id="form_crear_devolucion"  enctype="multipart/form-data">'+
                            '<div id="Dev" class="tab_content">'+
                              '<table align="center" border="0" align="center">'+
                                  '<tr>'+
                                    '<th align="left" style="padding-left:5px;">Id Cliente</th>'+
                                    '<td>'+
                                    '<select name="id_cliente" style="width:165px;" class="clients">'+
                                      //'<option value="null"></option>'+
                                     '</select>'+
                                  '</td>'+
                                  '<th align="left" style="padding-left:5px;">Codigo Producto</th>'+
                                  '<td>'+
                                    '<select name="codigo_producto" style="width:165px;" class="prodt">'+
                                      //'<option value="null"></option>'+
                                     '</select>'+
                                  '</td>'+ 
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="left" style="padding-left:5px;">Id Usuario</th>'+
                                    '<td>'+
                                    '<select name="id_usuario" style="width:165px;" class="vendor">'+
                                      //'<option value="null"></option>'+
                                     '</select>'+
                                  '</td>'+ 
                                  '</tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Causas de la Devolución<br>'+
                                      '<textarea name="causa_devolucion" cols="74" rows="6"></textarea>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                        '</div>'+
                        '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="reset" value="Volver" class="button" id="volverAddDevolucion"/>'+
                                  '<input type="submit" value="Registrar" class="button"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+ 
                      '</div>'+
                      '</form>'+
                    '</div>';


    $("#datos").html(codigoHTML);
    cargarListadoProductos();
    ListadoClientes();
    cargarListadoVendedores();
    IniciarTabers();
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_crear_devolucion").submit(enviarDatosAddDevolucion);
    ActivadorEventosClientes();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//*********************** FUNCION PARA ENVIAR LOS DATOS Y ADICIONARLOS A LA BASE DE DATOS ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosAddDevolucion(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serializeArray(); 
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"AddDevolucion","Datos":datos};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                data: {administrador:jsonobj},
                type: 'POST',
                dataType: 'json',
                url: 'ServletAdministrador',
                success: function(jsonObj)
                {
                    verificarAddDevolucion(jsonObj);
                },
                error: function() 
                {
                    alert('Error al conectar con el servidor');
                }
           });
}
//*********************************************************************************************************
//*********************************************************************************************************
//***********************                                                           ***********************
//*********************** FUNCION PARA VERIFICAR QUE LOS DATOS SE HALLAN ADICIONADO ***********************
//***********************                   CORRECTAMENTE                           **********************
//***********************                                                           ***********************
//*********************************************************************************************************
//*********************************************************************************************************

function verificarAddDevolucion(jsonObj)
{
    if (jsonObj.AddDevolucion  ==="true")
    {
        alert("La Devolución se adicionó correctamente");
    }
    
    else
    {
        alert("La Devolución no se pudo adicionar");
    }   
    
    seccionDevolucionesC();
}
//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA MODIFICAR LOS DATOS DE  ********************
//********************            LOS CLIENTES              ********************
//********************                                      ********************
//******************************************************************************

function DatosModDevolucion()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosDevoluciones","Id_Devolucion":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        ModDevolucion(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
//******************************************************************************
//********************                                      ********************
//******************** FUNCION PARA MODIFICAR LOS USUARIOS  ********************
//********************                                      ********************
//******************************************************************************

function ModDevolucion(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Modificar Prdido</div>'+
                     '<div class="tabla">'+
                     '<form id="form_modificar_devolucion"  enctype="multipart/form-data">'+
                            '<div id="Dev" class="tab_content">'+
                              '<table align="center" border="0" align="center">'+
                                  '<tr>'+
                                    '<th align="left" style="padding-left:5px;">Id Cliente</th>'+
                                    '<td>'+
                                    '<select name="id_cliente" style="width:165px;" class="clients">'+
                                      //'<option value="null"></option>'+
                                     '</select>'+
                                  '</td>'+
                                  '<th align="left" style="padding-left:5px;">Codigo Producto</th>'+
                                  '<td>'+
                                    '<select name="codigo_producto" style="width:165px;" class="prodt">'+
                                      //'<option value="null"></option>'+
                                     '</select>'+
                                  '</td>'+ 
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="left" style="padding-left:5px;">Id Usuario</th>'+
                                    '<td>'+
                                    '<select name="id_usuario" style="width:165px;" class="vendor">'+
                                      //'<option value="null"></option>'+
                                     '</select>'+
                                  '</td>'+ 
                                  '</tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Causas de la Devolución<br>'+
                                      '<textarea name="causa_devolucion" cols="74" rows="6">' + jsonObject.causa_devolucion + '</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td><input type="hidden" name="id_DevolucionMod" id="id_DevolucionMod" value="' + jsonObject.id_devolucion + '" /></td>'+
                                '</tr>'+
                              '</table>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddDevolucion" />'+
                                  '<input type="submit" value="Registrar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    cargarListadoProductos();
    ListadoClientes();
    cargarListadoVendedores();
    IniciarTabers();
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field9').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_modificar_devolucion").submit(enviarDatosModDevolucion);
    ActivadorEventosClientes();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//*********************** FUNCION PARA ENVIAR LOS DATOS MODIFICADOS A LA BASE DE DATOS    ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosModDevolucion(evento)
{
    evento.preventDefault();
    var id_devolucion = $("#id_DevolucionMod").val();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"ModDevolucion","Datos":datos, "Id_Devolucion":id_devolucion};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    success: function(jsonObj)
                    {
                        verificarModDevolucion(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//***********************************************************************************************************************
//***********************************************************************************************************************
//***********************                                                                         ***********************
//*********************** FUNCION PARA VERIFICAR QUE LOS DATOS SE HALLAN MODIFICADO CORRECTAMENTE ***********************
//***********************                                                                         ***********************
//***********************************************************************************************************************
//***********************************************************************************************************************

function verificarModDevolucion(jsonObj)
{
    if (jsonObj.ModDevolucion  ==="true")
    {
        alert("La Devolución se modificó correctamente");
    }
    
    else
    {
        alert("La Devolución no se pudo modificar");
    }   
    
    seccionDevolucionesC();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosVerDevolucion()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosDevoluciones","Id_Devolucion":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        VerDevolucion(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrado');
                    }
               });
}

//*******************************************************************************
//********************                                       ********************
//******************** FUNCION PARA VISUALIZAR LOS DATOS DE  ********************
//********************            LOS CLIENTES               ********************
//********************                                       ********************
//*******************************************************************************

function VerDevolucion(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Visualizar Devolución</div>'+
                     '<div class="tabla">'+
                     '<form id=""  enctype="multipart/form-data">'+
                            '<div id="Dev" class="tab_content">'+
                              '<table align="center" border="0" align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id Cliente</th>'+
                                    '<td><input type="text" name="Id_cliente" value="' + jsonObject.id_cliente + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Codigo Producto</th>'+
                                    '<td><input type="text" name="codigo_producto" value="' + jsonObject.codigo_producto + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id Usuario</th>'+
                                    '<td><input type="text" name="id_usuario" value="' + jsonObject.id_usuario + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '</tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Causas de la Devolución<br>'+
                                      '<textarea name="causa_devolucion" cols="74" rows="6" readonly="readonly">' + jsonObject.causa_devolucion + '</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                                    '</table>'+
                                  '</div>'+
                                '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                            '<table align="center">'+
                              '<tr>'+
                                '<td colspan="4" align="center">'+
                                    '<input type="button" value="Volver" class="button" id="volverAddDevolucion" />'+
                                '</td>'+
                              '</tr>'+
                            '</table>'+               
                        '</div>';
    $("#datos").html(codigoHTML);
    IniciarTabers();
    ActivadorEventosClientes();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************        FUNCION PARA CONECTAR EL FORMULARIO CON EL SERVLET       ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function DatosDelDevolucion()
{
    var id = $(this)[0].id;
    var request = {"Usuarios":"DatosDevoluciones","Id_Devolucion":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        DelDevolucion(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}

//***************************************************************************************************************
//***********************                                                                 ***********************
//***********************          FUNCION PARA ELIMINAR LOS DATOS DE UN CLIENTE          ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************

function DelDevolucion(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Eliminar Devolución</div>'+
                     '<div class="tabla">'+
                     '<form id="from_eliminar_devolucion"  enctype="multipart/form-data">'+
                            '<div id="Dev" class="tab_content">'+
                              '<table align="center" border="0" align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id Cliente</th>'+
                                    '<td><input type="text" name="Id_cliente" value="' + jsonObject.id_cliente + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Codigo Producto</th>'+
                                    '<td><input type="text" name="codigo_producto" value="' + jsonObject.codigo_producto + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id Usuario</th>'+
                                    '<td><input type="text" name="id_usuario" value="' + jsonObject.id_usuario + '" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '</tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Causas de la Devolución<br>'+
                                      '<textarea name="causa_devolucion" cols="74" rows="6" readonly="readonly">' + jsonObject.causa_devolucion + '</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                            '<table align="center">'+
                              '<tr>'+
                                '<td colspan="4" align="center">'+
                                    '<input type="button" value="Volver" class="button" id="volverAddCliente" />'+
                                    '<a href="#DelC" class="button" name="' + jsonObject.id_devolucion + '" id="borrarDevolucion" style="text-decoration:none; padding:2px 4px 2px 4px;">Borrar<a/>'+
                                '</td>'+
                              '</tr>'+
                            '</table>'+               
                        '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    ActivadorEventosClientes();
}
//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//************* FUNCION QUE LLAMA AL LIGHTBOX PARA CONFIRMAR  *********************
//************* LA ELIMINACION DE LOS DATOS                    *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
function ConfirmDelDevolucion()
{
    var id = $(this)[0].name;
    //alert(id);
    var codigoHTML = '<div class="encabezado2">Borrar Devolucion</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea borrar la devolución?</th>'+
                            '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Si" class="button" id="OkDelDevolucion" name="' + id + '"/>'+
                                '<input type="button" value="No" class="button" id="NotDelDevolucion"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    ActivadorEventosClientes();
}
function DelDevolucionOk()
{
    var id = $(this)[0].name; 
    //alert(id);
    var request = {"Usuarios":"DelDevolucion","Id_Devolucion":id};
    var jsonobj=JSON.stringify(request);
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador', 
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        verificarDelDevolucion(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
function verificarDelDevolucion(jsonObj)
{
    if (jsonObj.DelDevolucion==="true")
    {
        alert("La Devolución se ha borrado correctamente");
    }
    
    else
    {
        alert("La Devolución no se pudo borrar");
    }   
    
    seccionDevolucionesC();
}

function HideConfirmDelDevolucion()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    ActivadorEventosClientes();    
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
   var codigoHTML = '<div class="encabezado">Gestión del Perfil</div>'+
                    '<ul class="menu-vertical">'+
                    '</ul>';  

    $(".content-float-vendedores").html(codigoHTML);
    $(".content-float-vendedores").hide();
    $(".content-float-datos").css({width: 830});
    seccionDatosPerfil();
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    
}

/**********************************************************************************
*********************                                     *************************
*********************            SECCION PERFIL           *************************
*********************                                     *************************
**********************************************************************************/

function seccionDatosPerfil()
{
var id = $(this)[0].id;
    var request = {"Usuarios":"DatosPerfil","IdUsuario":id};
    var jsonobj=JSON.stringify(request);
    
    $.ajax({
                    data: {administrador:jsonobj},
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        ModUsuario(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletAdministrador');
                    }
               });
}
/**********************************************************************************
*********************                                     *************************
*********************   FUNCION PARA MODIFICAR EL PERFIL  *************************
*********************                                     *************************
**********************************************************************************/
function ModPerfil(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Modificar Usuario</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Personal</a></li>'+
                            '<li><a href="#Laboral">Laboral</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                            '<form id="form_modificar_perfil"  enctype="multipart/form-data">'+
                              '<table align="center" border="0" align="left">'+
                                  '<tr>'+
                                      '<td colspan="2" rowspan="10" align="center">'+
                                          '<div class="foto">'+
                                              '<div class="imagen">'+
                                                  '<img src="images/usuario.png" align="center">'+
                                              '</div>'+
                                              '<div>'+
                                                  '<input type="button" value="Cargar Foto" class="button" '+
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Identificación</th>'+
                                    '<td><input type="text" name="cedula_usuario" value="' + jsonObject.cedula_usuario + '" size="20" maxlength="15" "/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellidos_usuario" value="' + jsonObject.apellidos_usuario+ '" size="20" maxlength="25" "/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombre_usuario" value="' + jsonObject.nombre_usuario + '" size="20" maxlength="25" "/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nickname</th>'+
                                    '<td><input type="text" name="nickname_usuario" value="' + jsonObject.nickname_usuario + '" maxlength="10" "/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Contraseña</th>'+
                                    '<td><input type="password" name="password_usuario" value="' + jsonObject.password_usuario + '" size="20" maxlength="10" "/></td>'+
                                  '</tr>'+
                                    '<td align="right" style="padding-right:5px;">Tipo de Usuario</td>'+
                                  '<td>'+
                                    '<select name="tipo_usuario" style="width:168px;">'+
                                      '<option value="A">A</option>'+
                                      '<option value="G">G</option>'+
                                      '<option value="JP">JP</option>'+
                                      '<option value="JC">JC</option>'+
                                      '<option value="V">V</option>'+
                                      '<option value="S">S</option>'+
                                  '</td>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion_usuario" value="' + jsonObject.direccion_usuario + '" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono_usuario" value="' + jsonObject.telefono_usuario + '" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular_usuario" value="' + jsonObject.celular_usuario + '" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<div id="Laboral" class="tab_content">'+
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Ingreso</th>'+
                                    '<td><input type="text" name="fecha" id="date_field13" value="' + jsonObject.fecha + '" /></td>'+
                                    '<th align="right" style="padding-right:5px;">email</th>'+
                                    '<td><input type="text" name="email_usuario" value="' + jsonObject.email_usuario + '" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Cumpleaños</th>'+
                                    '<td><input type="text" name="fecha_cumpleanos" id="date_field14" value="' + jsonObject.fecha_cumpleanos + '" /></td>'+
                                    '<th align="right" style="padding-right:5px;">Tipo de Cuenta</th>'+
                                    '<td>'+
                                      '<select name="tipo_cuenta_bancaria" style="width:177px">'+
                                        '<option value="1">Ahorros</option>'+
                                        '<option value="2">Corriente</option>'+
                                      '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Numero Cuenta</th>'+
                                    '<td><input type="text" name="numero_cuenta" value="' + jsonObject.numero_cuenta + '" /></td>'+
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
                                '<th align="left" style="padding-left:5px;">Id Ubicacion</th>'+
                                    '<td>'+ 
                                        '<select name="id_ubicacion" style="width:160px;" class="ubicacion">'+
                                            //'<option value="null"></option>'+
                                        '</select>'+ 
                                    '</td>'+
                               '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Otros datos:<br>'+
                                      '<textarea name="otros_datos" cols="74" rows="6">' + jsonObject.otros_datos + '</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                                '<tr>'+
                                    '<td><input type="hidden" name="id_perfilMod" id="id_perfilMod" value="' + jsonObject.id_usuario + '" /></td>'+
                                '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddUsuario" />'+
                                  '<input type="submit" value="Registrar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    listUbicacion();
    IniciarTabers();
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field13').datepick('option', {dateFormat: $.datepick.ATOM});
    $('#date_field14').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick('option', {dateFormat: $.datepick.ATOM});
    $("#form_modificar_perfil").submit(enviarDatosModPerfil);
    activadorEventosPerfil();
}

//***************************************************************************************************************
//***************************************************************************************************************
//***********************                                                                 ***********************
//*********************** FUNCION PARA ENVIAR LOS DATOS MODIFICADOS A LA BASE DE DATOS    ***********************
//***********************                                                                 ***********************
//***************************************************************************************************************
//***************************************************************************************************************

function enviarDatosModPerfil(evento)
{
    evento.preventDefault();
    var id_usuario = $("#id_perfilMod").val();
    var datos_formulario = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_formulario));
    //alert(datos.toString());
    var request = {"Usuarios":"ModPerfil","Datos":datos, "IdUsuario":id_usuario};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    
    $.ajax({        
                    data: {administrador:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletAdministrador',
                    success: function(jsonObj)
                    {
                        verificarModPerfil(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

//***********************************************************************************************************************
//***********************************************************************************************************************
//***********************                                                                         ***********************
//*********************** FUNCION PARA VERIFICAR QUE LOS DATOS SE HALLAN MODIFICADO CORRECTAMENTE ***********************
//***********************                                                                         ***********************
//***********************************************************************************************************************
//***********************************************************************************************************************

function verificarModPerfil(jsonObj)
{
    if (jsonObj.ModPerfil  ==="true")
    {
        alert("El perfil se modificó correctamente");
    }
    
    else
    {
        alert("El perfil no se pudo modificar");
    }   
    
    seccionDatosPerfil();
}

//**********************************************************************************

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$