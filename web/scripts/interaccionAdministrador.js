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
    /************************************************************************************/
    /********************       OPCION USUARIOS      **********************************/
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
	productos=$("#Productos")
	productos.click(menuProductos);

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
//*************  DE LA SECCION USUARIOS                      *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function activadorEventosUsuarios()
{
    // VARIABLES DEL MENU VERTICAL DE LA OPCION USUARIOS
    var visitasV, listadoV, actividadesV, viaticosV, comisionesV, ubicacionV;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    visitasV=$("#ventasVendedor");
    visitasV.click(seccionVentas);
    listadoV=$("#listadoVentas");
    listadoV.click(seccionListado); 
    actividadesV=$("#ActividadesVendedor");
    actividadesV.click(seccionActividades);
    viaticosV=$("#viaticosVendedor");
    viaticosV.click(seccionViaticos);
    comisionesV=$("#comisionesVendedor");
    comisionesV.click(seccionComisiones);
    ubicacionV=$("#ubicacionVendedor");
    ubicacionV.click(seccionUbicacion);
    //*********************************************************
    //** VARIABLES DE LAS OPCIONES DEL LISTADO DE USUARIOS **
    //*********************************************************
    var adicionarV, modificarV, borrarV, visualizarV, reporteV;
    var volverVendedor, vBorrarV, vHideDelV;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    adicionarV=$("#AVendedor");
    adicionarV.click(AddVendedor);
    modificarV=$(".ModVendedor");
    modificarV.click(ModVendedor);
    visualizarV=$(".VerVendedor");
    visualizarV.click(VerVendedor);
    borrarV=$(".DelUsuario");
    borrarV.click(DelVendedor);

    volverVendedor=$("#volverAddVendedor");
    volverVendedor.click(seccionListado);
    vBorrarV=$("#borrarVendedor");
    vBorrarV.click(ConfirmDelVendedor);
    vHideDelV=$("#NotDelVendedor");
    vHideDelV.click(HideConfirmDelVendedor); 
    //*****************************************************
    //** VARIABLES DE LAS OPCIONES DEL LISTADO DE VENTAS **
    //*****************************************************
    var addVenta, modVenta, delVentas, verVentas, reporteVentas;
    var volverVenta, addProducto, modVenta, verVenta, delVenta, hideDelVenta, hideAddProducto;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    addVenta=$(".AdicionarVenta");
    addVenta.click(AddVenta);
    modVenta=$(".ModVenta");
    modVenta.click(ModVenta);
    verVenta=$(".VerVenta");
    verVenta.click(VerVenta);
    delVenta=$(".DelVenta");
    delVenta.click(ConfirmDelVenta);

    hideDelVenta=$("#NotDelVenta")
    hideDelVenta.click(HideConfirmDelVenta);
    volverVentas=$("#volverVenta");
    volverVentas.click(seccionVentas);
    addProducto=$(".VentanaAddProducto");
    addProducto.click(ConfirmAddProducto);
    hideAddProducto=$("#NotAddProducto");
    hideAddProducto.click(HideConfirmAddProducto); 

}
function activadorEventosClientes()
{
    // VARIABLES DEL MENU VERTICAL DE LA OPCION VENDEDORES
    var listadoC, pedidosC, devolucionesC, recaudoC, ubicacionC;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    listadoC=$("#listadoClientes");
    listadoC.click(seccionListadoClientes);
	/*pedidosC=$("#pedidosClientes");
    pedidosC.click(seccionPedidosClientes); 
    devolucionesC=$("#devolucionesClientes");
    devolucionesC.click(seccionDevolucionesC);
    recaudoC=$("#recaudoClientes");
    recaudoC.click(seccionRecaudoClientes);
    ubicacionC=$("#ubicacionClientes");
    ubicacionC.click(seccionUbicacionCLientes);*/
	
	//*********************************************************
    //** VARIABLES DE LAS OPCIONES DEL LISTADO DE VENDEDORES **
    //*********************************************************
    var adicionarC, modificarC, borrarC, visualizarC, reporteP;
    var volverCliente, vBorrarC,registrarCliente, vHideDelC;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    adicionarC=$("#ACliente");
    adicionarC.click(AddCliente);
    modificarC=$(".ModCliente");
    modificarC.click(ModCliente);
    visualizarC=$(".VerCliente");
    visualizarC.click(VerCliente);
    borrarC=$(".DelCliente");
    borrarC.click(DelCliente);
    
    volverCliente=$("#volverAddCliente");
    volverCliente.click(seccionListadoClientes);
    registrarCliente=$("#registrarAddCliente");
    registrarCliente.click(seccionListadoClientes);
    vBorrarC=$("#borrarCliente");
    vBorrarC.click(ConfirmDelCliente);
    vHideDelC=$("#NotDelCliente");
    vHideDelC.click(HideConfirmDelCliente); 
}

function  activadorEventosProductos()
{
    // VARIABLES DEL MENU VERTICAL DE LA OPCION PRODUCTOS
    var listadoP, categoriaP, dimencionesP, coloresP, tallasP, materialesP;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    listadoP=$("#listadoProductos");
    listadoP.click(seccionListadoProductos);
    categoriaP=$("#categoriasProductos");
    categoriaP.click(seccionCategorias); 
    /*dimencionesP=$("#dimensionesProducto");
    dimencionesP.click(seccionDimensiones);
    coloresP=$("#coloresProductos");
    coloresP.click(seccionColores);
    tallasP=$("#tallasProductos");
    tallasP.click(seccionTallas);
    materialesP=$("#materialesProductos");
    materialesP.click(seccionMateriales);*/
	//*********************************************************
    //** VARIABLES DE LAS OPCIONES DEL LISTADO DE PRODUCTOS **
    //*********************************************************
    var adicionarP, modificarP, borrarP, visualizarP, reporteP;
    var hideDelProducto, volverProducto, registrarProducto, vBorrarP, vHideDelP;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    adicionarP=$("#AProducto");
    adicionarP.click(AddProducto);
    modificarP=$(".ModProducto");
    modificarP.click(ModProducto);
    visualizarP=$(".VerProducto");
    visualizarP.click(VerProducto);
    borrarP=$(".DelProducto");
    borrarP.click(DelProducto);
    
    volverProducto=$("#volverAddProducto");
    volverProducto.click(seccionListadoProductos);
    registrarProducto=$("#registrarAddProducto");
    registrarProducto.click(seccionListadoProductos);
    vBorrarP=$("#borrarProducto");
    vBorrarP.click(ConfirmDelProducto);
    vHideDelP=$("#NotDelProducto");
    vHideDelP.click(HideConfirmDelProducto); 
    //*****************************************************
    //** VARIABLES DE LAS OPCIONES DEL LISTADO DE ATEGORIAS **
    //*****************************************************
    var addCategoria, modCategoria, delCategoria, verCategoria, reporteVentas;
    var volverCategoria, hideDelCategoria, hideAddCategoria;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    /*addCategoria=$(".AdicionarCategoria");
    addCategoria.click(AddCategoria);
    modCategoria=$(".ModCategoria");
    modCategoria.click(ModCategoria);
    verCategoria=$(".VerCategoria");
    verCategoria.click(VerCategoria);
    delCategoria=$(".DelCategoria");
    delCategoria.click(ConfirmDelCategoria);



    hideDelCategoria=$("#NotDelCategoria")
    hideDelCategoria.click(HideConfirmDelVenta);
    volverCategoria=$("#volverCategoria");
    volverCategoria.click(seccionCategorias);
    hideAddCategoria=$("#NotAddCategoria");
    hideAddCategoria.click(HideConfirmAddCategoria);*/
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

function menuUsuarios()
{
   var codigoHTML = '<div class="encabezado">Gestión de Usuarios</div>'+
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoVentas"><img src="images/IconoOpciones.png"/> Listado</a></li>'+
                        '<li><a href="#2" id="ventasVendedor"><img src="images/IconoOpciones.png"/> Visitas</a></li>'+
                        '<li><a href="#4" id="viaticosVendedor"><img src="images/IconoOpciones.png"/> Viáticos</a></li>'+
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
	$(".content-float-vendedores").show();
	$(".content-float-vendedores").css({height: 140});
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionListado();
    $(".menu-vertical li a#listadoVisitas").addClass("active");
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
                        '<li><a href="#1" id="listadoClientes"><img src="images/IconoOpciones.png"/> Clientes</a></li>'+
                        '<li><a href="#2" id="pedidosClientes"><img src="images/IconoOpciones.png"/> Pedidos</a></li>'+
                        '<li><a href="#3" id="devolucionesClientes"><img src="images/IconoOpciones.png"/> Devoluciones</a></li>'+
						'<li><a href="#4" id="recaudoClientes"><img src="images/IconoOpciones.png"/> Recaudos</a></li>'+
                        '<li><a href="#5" id="ubicacionClientes"><img src="images/IconoOpciones.png"/> Ubicación Geografica</a></li>'+
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
	$(".content-float-vendedores").show();
    $(".content-float-vendedores").css({height: 200});
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionListadoClientes();
    $(".menu-vertical li a#listadoClientes").addClass("active");
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
   var codigoHTML = '<div class="encabezado">Gestión de Productos</div>'+
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoProductos"><img src="images/IconoOpciones.png"/> Productos</a></li>'+
                        '<li><a href="#2" id="catedoriasProductos"><img src="images/IconoOpciones.png"/> Categorias</a></li>'+
                        '<li><a href="#3" id="dimencionesProductos"><img src="images/IconoOpciones.png"/> Dimenciones</a></li>'+
						'<li><a href="#4" id="coloresProductos"><img src="images/IconoOpciones.png"/> Colores</a></li>'+
                        '<li><a href="#5" id="tallasProductos"><img src="images/IconoOpciones.png"/> Tallas</a></li>'+
                        '<li><a href="#6" id="materialesProductos"><img src="images/IconoOpciones.png"/> Materiales</a></li>'+
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".content-float-vendedores").show();
    $(".content-float-vendedores").css({height: 230});
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    $(".menu-vertical li a#listadoProductos").addClass("active");
    seccionListadoProductos();
}

//**********************************************************************************
//**********************************************************************************

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DEL MENU VERTICAL DE LOS   *********************
//*************  VENDEDORES                                    *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function seccionListado()
{
    var codigoHTML = '<div class="encabezado2">Listado de Usuarios</div>'+
                     '<div class="tabla">'+
                        '<table class="tbonita">'+
                          '<tr align="left">'+
                            '<th colspan="2"><img src="images/b_insrow.png" title="Agregar" id="AVendedor"/></th>'+
                            '<th colspan="1"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th>Cedula</th>'+
                            '<th>Nombre</th>'+
                            '<th>Teléfono</th>'+
                            '<th>Celular</th>'+
                            '<th>email</th>'+
                          '</tr>'+
                 
                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor"/></td>'+
                            '<td>9867024</td>'+
                            '<td>Carlos Andres Jaramillo</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>cajaramillov@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>111111</td>'+
                            '<td>Juan Sebastian Jaramillo</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>sebas@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>25180450</td>'+
                            '<td>Sandra Milena Giraldo</td>'+
                            '<td>3325618</td>'+
                            '<td>3012740919</td>'+
                            '<td>sanmigita@gmail.com</td>'+
                          '</tr>'+
                        '</table>'+
                    '</div>';

    $("#datos").html(codigoHTML);
	$(".content-float-datos").css({width: 630});
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#listadoVentas").addClass("active");
    activadorEventosUsuarios();
}

//**********************************************************************************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DE ADICIONAR, MODIFICAR,   *********************
//*************  VISUALIZAR, BORRAR Y GENERAR INFORME EN LA    *********************
//*************  OPCION LISTADO DE LOS VENDEDORES              *********************
//**********************************************************************************

function AddVendedor()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Usuario</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Personal</a></li>'+
                            '<li><a href="#Laboral">Laboral</a></li>'+
                            '<li><a href="#Zonas">Zonas</a></li>'+
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
                                    '<td><input type="text" name="id_usuario" value="" size="20" maxlength="15" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellidos" value="" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombres" value="" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nickname</th>'+
                                    '<td><input type="text" name="nickname" value="" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Contraseña</th>'+
                                    '<td><input type="password" name="contrasena" value="" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
								  '<td align="right" style="padding-right:5px;">Tipo de Usuario</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:168px;">'+
                                      '<option value="Ap">Administrador</option>'+
                                      '<option value="Sr">Gerente</option>'+
                                      '<option value="Dq">Jefe de Producción</option>'+
                                      '<option value="Pr">Jefe Comercial</option>'+
                                      '<option value="Lv">Vendedor</option>'+
									  '<option value="Tg">Cliente</option>'+
                                      '<option value="St">Secretaria</option>'+
								  '</td>'+
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
                              '</table>'+
                            '</div>'+
                            '<div id="Laboral" class="tab_content">'+
                              '<table>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Ingreso</th>'+
                                    '<td><input type="text" name="fecha" id="date_field13" value="" /></td>'+
                                    '<th align="right" style="padding-right:5px;">email</th>'+
                                    '<td><input type="text" name="email" value="" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Cumpleaños</th>'+
                                    '<td><input type="text" name="cumpleanos" id="date_field14" value="" /></td>'+
                                    '<th align="right" style="padding-right:5px;">Tipo de Cuenta</th>'+
                                    '<td>'+
                                      '<select name="tipoCuenta" style="width:177px">'+
                                        '<option value="Ah">Ahorros</option>'+
                                        '<option value="Crr">Corriente</option>'+
                                      '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Numero Cuenta</th>'+
                                    '<td><input type="text" name="num_cuenta" value="" /></td>'+
                                    '<th align="right" style="padding-right:5px;">Banco</th>'+
                                    '<td>'+
                                      '<select name="banco" style="width:177px">'+
                                        '<option value="">Bancafé</option>'+
                                        '<option value="">Banco AV Villas</option>'+
                                        '<option value="">BBVA</option>'+
                                        '<option value="">Banco Caja Social BCSC</option>'+
                                        '<option value="">Banco de Bogotá</option>'+
                                        '<option value="">Banco de Credito</option>'+
                                        '<option value="">Banco de la República de Colombia</option>'+
                                        '<option value="">Banco de Occidente</option>'+
                                        '<option value="">Banco GNB Sudameris</option>'+
                                        '<option value="">Banco Granahorrar</option>'+
                                        '<option value="">Banco Popular</option>'+
                                        '<option value="">Banco Santander Colombia</option>'+
                                        '<option value="">Bancoldex</option>'+
                                        '<option value="">Bancolombia</option>'+
                                        '<option value="">BBVA Banco Ganadero</option>'+
                                        '<option value="">Citi Bank</option>'+
                                        '<option value="">Colmena BCSC</option>'+
                                        '<option value="">Colpatria</option>'+
                                        '<option value="">Conavi</option>'+
                                        '<option value="">Davivienda</option>'+
                                        '<option value="">Megabanco</option>'+
                                        '<option value="">Banco Finandino</option>'+
                                        '<option value="">Banco Falabella</option>'+
                                        '<option value="">Banco Coomeva</option>'+
                                      '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Otros datos:<br>'+
                                      '<textarea name="mensaje" cols="74" rows="6"></textarea>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<div id="Zonas" class="tab_content">'+
                              '<table>'+
                                '<tr>'+
                                  '<td align="right" style="padding-right:5px;">Departamentos</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:177px;">'+
                                      '<option value="Ah">Amazonas</option>'+
                                      '<option value="Crr">Antioquia</option>'+
                                      '<option value="Ah">Bolivar</option>'+
                                      '<option value="Crr">Caldas</option>'+
                                      '<option value="Ah">Cauca</option>'+
                                      '<option value="Crr">Casanare</option><option value="Ah">Guania</option>'+
                                      '<option value="Crr">Cundinamarca</option><option value="Ah">Santander</option>'+
                                      '<option value="Crr">Atlantico</option><option value="Ah">Sucre</option>'+
                                    '</select>'+
                                  '</td>'+
                                  '<td align="right" style="padding-right:5px;">Ciudades</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:177px;">'+
                                      '<option value="Ap">Apia</option>'+
                                      '<option value="Sr">Santa Rosa</option>'+
                                      '<option value="Dq">Dosquebradas</option>'+
                                      '<option value="Pr">Pereira</option>'+
                                      '<option value="Lv">La Virginia</option>'+
                                      '<option value="St">Santuario</option>'+
                                    '</select>'+
                                  '</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td colspan="4" align="center"><br>'+
                                    '<input type="button" value="Agregar" class="button" />'+
                                  '</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td colspan="4" align="left">'+
                                    'Ciudades Asignadas:<br>'+
                                    '<textarea name="mensaje" cols="72" rows="5" readonly="readonly"></textarea>'+
                                  '</td>'+
                                  '<br>'+
                                '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddVendedor" />'+
                                  '<input type="submit" value="Registrar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick({yearRange: '1980:2050'});
    activadorEventosUsuarios();
}

function ModVendedor()
{
    var codigoHTML = '<div class="encabezado2">Modificar Usuario</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Personal</a></li>'+
                            '<li><a href="#Laboral">Laboral</a></li>'+
                            '<li><a href="#Zonas">Zonas</a></li>'+
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
                                    '<td><input type="text" name="id_usuario" value="9867024" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellidos" value="Jaramillo Villegas" size="20" maxlength="25" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombres" value="Carlos Andres" size="20" maxlength="25" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nickname</th>'+
                                    '<td><input type="text" name="nickname" value="cajaramillov" size="20" maxlength="10" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Contraseña</th>'+
                                    '<td><input type="password" name="contrasena" value="c4rl05" size="20" maxlength="10" /></td>'+
                                  '</tr>'+
								  '<td align="right" style="padding-right:5px;">Tipo de Usuario</td>'+
								  '<td>'+
                                    '<select name="tipoCuenta" style="width:168px;">'+
                                      '<option value="Ap">Administrador</option>'+
                                      '<option value="Sr">Gerente</option>'+
                                      '<option value="Dq">Jefe de Producción</option>'+
                                      '<option value="Pr">Jefe Comercial</option>'+
                                      '<option value="Lv">Vendedor</option>'+
									  '<option value="Tg">Cliente</option>'+
                                      '<option value="St">Secretaria</option>'+
								  '</td>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion" value="Coomnes Casa 17" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono" value="3006731512" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular" value="3006731512" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<div id="Laboral" class="tab_content">'+
                              '<table>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Ingreso</th>'+
                                    '<td><input type="text" name="fecha" id="date_field13" value="01/01/2012" /></td>'+
                                    '<th align="right" style="padding-right:5px;">email</th>'+
                                    '<td><input type="text" name="email" value="cajaramillov@gmail.com" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Cumpleaños</th>'+
                                    '<td><input type="text" name="cumpleanos" id="date_field14" value="09/11/1982" /></td>'+
                                    '<th align="right" style="padding-right:5px;">Tipo de Cuenta</th>'+
                                    '<td>'+
                                      '<select name="tipoCuenta" style="width:177px">'+
                                        '<option value="Ah">Ahorros</option>'+
                                        '<option value="Crr">Corriente</option>'+
                                      '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Numero Cuenta</th>'+
                                    '<td><input type="text" name="num_cuenta" value="1122334455" /></td>'+
                                    '<th align="right" style="padding-right:5px;">Banco</th>'+
                                    '<td>'+
                                      '<select name="banco" style="width:177px">'+
                                        '<option value="">Bancafé</option>'+
                                        '<option value="">Banco AV Villas</option>'+
                                        '<option value="">BBVA</option>'+
                                        '<option value="">Banco Caja Social BCSC</option>'+
                                        '<option value="">Banco de Bogotá</option>'+
                                        '<option value="">Banco de Credito</option>'+
                                        '<option value="">Banco de la República de Colombia</option>'+
                                        '<option value="">Banco de Occidente</option>'+
                                        '<option value="">Banco GNB Sudameris</option>'+
                                        '<option value="">Banco Granahorrar</option>'+
                                        '<option value="">Banco Popular</option>'+
                                        '<option value="">Banco Santander Colombia</option>'+
                                        '<option value="">Bancoldex</option>'+
                                        '<option value="">Bancolombia</option>'+
                                        '<option value="">BBVA Banco Ganadero</option>'+
                                        '<option value="">Citi Bank</option>'+
                                        '<option value="">Colmena BCSC</option>'+
                                        '<option value="">Colpatria</option>'+
                                        '<option value="">Conavi</option>'+
                                        '<option value="">Davivienda</option>'+
                                        '<option value="">Megabanco</option>'+
                                        '<option value="">Banco Finandino</option>'+
                                        '<option value="">Banco Falabella</option>'+
                                        '<option value="">Banco Coomeva</option>'+
                                      '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Otros datos:<br>'+
                                      '<textarea name="mensaje" cols="74" rows="6">Ingeniero de Sitemas y Computacion</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<div id="Zonas" class="tab_content">'+
                              '<table>'+
                                '<tr>'+
                                  '<td align="right" style="padding-right:5px;">Departamentos</td>'+
                                  '<td>'+
                                    '<select name="departamento" style="width:177px;">'+
                                      '<option value="Ah">Amazonas</option>'+
                                      '<option value="Crr">Antioquia</option>'+
                                      '<option value="Ah">Bolivar</option>'+
                                      '<option value="Crr">Caldas</option>'+
                                      '<option value="Ah">Cauca</option>'+
                                      '<option value="Crr">Casanare</option><option value="Ah">Guania</option>'+
                                      '<option value="Crr">Cundinamarca</option><option value="Ah">Santander</option>'+
                                      '<option value="Crr">Atlantico</option><option value="Ah">Sucre</option>'+
                                    '</select>'+
                                  '</td>'+
                                  '<td align="right" style="padding-right:5px;">Ciudades</td>'+
                                  '<td>'+
                                    '<select name="municipio" style="width:177px;">'+
                                      '<option value="Ap">Apia</option>'+
                                      '<option value="Sr">Santa Rosa</option>'+
                                      '<option value="Dq">Dosquebradas</option>'+
                                      '<option value="Pr">Pereira</option>'+
                                      '<option value="Lv">La Virginia</option>'+
                                      '<option value="St">Santuario</option>'+
                                    '</select>'+
                                  '</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td colspan="4" align="center"><br>'+
                                    '<input type="button" value="Agregar" class="button" />'+
                                  '</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td colspan="4" align="left">'+
                                    'Ciudades Asignadas:<br>'+
                                    '<textarea name="mensaje" cols="72" rows="5" readonly="readonly">Apia, Medellin, Santa Marta</textarea>'+
                                  '</td>'+
                                  '<br>'+
                                '</tr>'+
                              '</table>'+
                            '</div>'+
                          '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddVendedor" />'+
                                  '<input type="submit" value="Registrar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick({yearRange: '1980:2050'});
    activadorEventosUsuarios();
}

function VerVendedor()
{
    var codigoHTML = '<div class="encabezado2">Visualizar Usuario</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Personal</a></li>'+
                            '<li><a href="#Laboral">Laboral</a></li>'+
                            '<li><a href="#Zonas">Zonas</a></li>'+
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
                                    '<td><input type="text" name="id_usuario" value="9867024" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellidos" value="Jaramillo Villegas" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombres" value="Carlos Andres" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nickname</th>'+
                                    '<td><input type="text" name="nickname" value="cajaramillov" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Contraseña</th>'+
                                    '<td><input type="password" name="contrasena" value="c4rl05" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
								  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Tipo de Usuario</th>'+
                                    '<td><input type="text" name="contrasena" value="Vendedor" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion" value="Coomnes Casa 17" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono" value="3006731512" size="20" maxlength="12" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular" value="3006731512" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<div id="Laboral" class="tab_content">'+
                              '<table>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Ingreso</th>'+
                                    '<td><input type="text" name="fecha" id="date_field13" value="01/01/2012" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">email</th>'+
                                    '<td><input type="text" name="email" value="cajaramillov@gmail.com" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Cumpleaños</th>'+
                                    '<td><input type="text" name="cumpleanos" id="date_field14" value="09/11/1982" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Tipo de Cuenta</th>'+
                                    '<td><input type="text" name="tipoCuenta" value="Ahorros" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Numero Cuenta</th>'+
                                    '<td><input type="text" name="num_cuenta" value="1122334455" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Banco</th>'+
                                    '<td><input type="text" name="nomBanco" value="Caja Social" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Otros datos:<br>'+
                                      '<textarea name="mensaje" cols="74" rows="6" readonly="readonly">Ingeniero de Sitemas y Computacion</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<div id="Zonas" class="tab_content">'+
                              '<table>'+
                                '<tr>'+
                                  '<td colspan="4" align="left">'+
                                    'Departamentos Asignados:<br>'+
                                    '<textarea style="font-size: 14px;" name="mensaje" cols="75" rows="3" readonly="readonly">Risaralda, Quindio, Caldas</textarea>'+
                                  '</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td colspan="4" align="left">'+
                                    'Ciudades Asignadas:<br>'+
                                    '<textarea style="font-size: 14px;"name="mensaje" cols="75" rows="3" readonly="readonly">Pereira, Manizales, Armenia</textarea>'+
                                  '</td>'+
                                '</tr>'+
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
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick({yearRange: '1980:2050'});
    activadorEventosUsuarios();
}

function DelVendedor()
{
    var codigoHTML = '<div class="encabezado2">Borrar Usuario</div>'+
                     '<div class="tabla">'+
                        '<form action="" method="POST" name="form_crear_usuario">'+
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
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">9867024</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Apellidos:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">Jaramillo Villegas</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Nombres:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">Carlos Andres</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Nickname:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">cajaramillov</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Contraseña:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">#######</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Dirección:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">Barrio Milan Coomnes Casa 17</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Teléfono:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">3325618</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Celular:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">3006731512</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Fecha Ingreso:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">2012-06-10</td>'+
                                  '<th align="right" style="padding-right:5px;">email:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">cajaramillov@gmail.com</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td colspan="4" align="center">'+
                                      '<input type="button" value="Volver" class="button" id="volverAddVendedor" />'+
                                      '<a href="#DelV" class="button" id="borrarVendedor" style="text-decoration:none; padding:2px 4px 2px 4px;">Borrar<a/>'+
                                  '</td>'+
                                '</tr>'+
                            '</table>'+       
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    activadorEventosUsuarios();
}

function ConfirmDelVendedor()
{
    var codigoHTML = '<div class="encabezado2">Borrar Usuario</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea borrar el Usuario?</th>'+
                            '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Si" class="button" id="OkDelVendedor"/>'+
                                '<input type="button" value="No" class="button" id="NotDelVendedor"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosUsuarios();
}

function HideConfirmDelVendedor()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosUsuarios();  
}

//**********************************************************************************

function seccionVentas()
{
    var codigoHTML = '<div class="encabezado2">Listado de Visitas</div>'+
                            '<div id="Fecha" class="tab_content">'+ 
                                '<form action="" method="POST" name="form_buscar_venta">'+ 
                                    '<table align="center" border="0" align="left" >'+ 
                                         '<tr>'+
										 '<th align="left" style="padding-left:5px;">Vendedor</th>'+ 
                                            '<td>'+ 
                                                '<select name="vendedor" style="width:160px;">'+ 
                                                    '<option value="">Edison</option>'+ 
                                                    '<option value="">Juan Pablo</option>'+ 
                                                    '<option value="">Orlando</option>'+ 
                                                    '<option value="">Sandra Giraldo</option>'+ 
                                                '</select>'+ 
                                            '</td>'+

                                          	'<td align="right" style="padding-right:5px;">NIT</td>'+ 
											'<td><input type="text" name="nit" value="" size="20" maxlength="10" required/></td>'+
                                        '</tr>'+ 
										
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
                                              '<input type="submit" value="Buscar" class="button" />'+ 
                                            '</td>'+ 
                                        '</tr> '+ 
                                    '</table>'+ 
                                '</form>'+ 
                                '<br>'+ 
                                '<table class="tbonita">'+ 
                                  '<tr align="left">'+ 
                                    '<th colspan="2"><img src="images/b_insrow.png" title="Adicionar Venta" class="AdicionarVenta" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReporteVentas" /></th>'+ 
                                    '<th>IdVisita</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+
								    '<th>Asunto</th>'+ 
                                    '<th>Cuidad</th>'+ 
                                  '</tr>'+ 
                         
                                  '<tr>'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta"/></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta"/></td>'+ 
                                    '<td><img src="images/b_search.png" title="Visualizar" class="VerVenta"/></td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                    '<td>Ingenio Risaralda</td>'+ 
                                    '<td>Carlos Jaramillo</td>'+ 
                                    '<td>Recaudo</td>'+ 
									'<td>Medellin</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Pedido</td>'+
									'<td>Medellin</td>'+ 
                                  '</tr>'+ 

                                  '<tr>'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta"/></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta"/></td>'+ 
                                    '<td><img src="images/b_search.png" title="Visualizar" class="VerVenta"/></td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                    '<td>Ingenio Risaralda</td>'+ 
                                    '<td>Carlos Jaramillo</td>'+ 
                                    '<td>Recaudo</td>'+ 
									'<td>Medellin</td>'+ 
                                  '</tr>'+ 
								  
								  '<tr class="even">'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Pedido</td>'+
									'<td>Medellin</td>'+ 
                                  '</tr>'+ 

                                  '<tr>'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta"/></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta"/></td>'+ 
                                    '<td><img src="images/b_search.png" title="Visualizar" class="VerVenta"/></td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                    '<td>Ingenio Risaralda</td>'+ 
                                    '<td>Carlos Jaramillo</td>'+ 
                                    '<td>Recaudo</td>'+ 
									'<td>Medellin</td>'+ 
                                  '</tr>'+
                                '</table>'+ 
                            '</div>'+ 
                        
                            '<div id="Cliente" class="tab_content">'+ 
                                '<form action="" method="POST" name="form_buscar_venta_cliente">'+ 
                                    '<table align="center" border="0" align="left">'+ 
                                        '<tr>'+ 
                                            '<th align="right" style="padding-right:5px;">NIT</th>'+ 
                                            '<td>'+ 
                                              '<input type="text" name="nit" value=""/>'+ 
                                            '</td>'+ 
                                            '<th align="right" style="padding-right:5px;">Nombre</th>'+ 
                                            '<td>'+ 
                                              '<input type="text" name="nomCliente" value=""/>'+ 
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
                                '<table class="tbonita">'+ 
                                  '<tr align="left">'+ 
                                    '<th colspan="2"><img src="images/b_insrow.png" title="agregar" class="AdicionarVenta" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento"  /></th>'+ 
                                    '<th>IdVisita</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Cuidad</th>'+ 
                                    '<th>Total</th>'+ 
                                  '</tr>'+ 
                         
                                  '<tr>'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta"/></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Visualizar" class="VerVenta" /></td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                    '<td>Ingenio Risaralda</td>'+ 
                                    '<td>Carlos Jaramillo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>45000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>5000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr>'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>5000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>5000000</td>'+ 
                                  '</tr>'+ 

                                '</table>'+ 
                            '</div>'+ 

                            '<div id="Producto" class="tab_content">'+ 
                                '<form action="" method="POST" name="form_buscar_venta_cliente">'+ 
                                    '<table align="center" border="0" align="left">'+ 
                                        '<tr colspan="4">'+ 
                                        '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+ 
                                        '<td>'+ 
                                          '<select name="tipoCuenta" style="width:177px">'+ 
                                            '<option value="LI">Linea Industrial</option>'+ 
                                            '<option value="LM">Linea Motociclista</option>'+ 
                                            '<option value="LH">Linea Hogar</option>'+ 
                                            '<option value="LF">Linea Infantil</option>'+ 
                                          '</select>'+ 
                                        '</td>'+ 
                                      '</tr>'+ 
                                      '<tr>'+ 
                                        '<th align="right" style="padding-right:5px;">Material</th>'+ 
                                        '<td>'+ 
                                          '<select name="tipoCuenta" style="width:177px">'+ 
                                            '<option value="LI">Econoflex</option>'+ 
                                            '<option value="LM">Greenflex</option>'+ 
                                            '<option value="LH">Natuflex</option>'+ 
                                            '<option value="LF">Oxiflex</option>'+ 
                                            '<option value="LF">Poliester PVC</option>'+ 
                                            '<option value="LF">PVC Poliester PVC</option>'+ 
                                          '</select>'+ 
                                        '</td>'+ 
                                        '<th align="right" style="padding-right:5px;">Tipo Producto</th>'+ 
                                        '<td>'+ 
                                          '<select name="tipoCuenta" style="width:177px">'+ 
                                            '<option value="LI">Abrigos</option>'+ 
                                            '<option value="LM">Capas</option>'+ 
                                            '<option value="LH">Pantalón y Vestido</option>'+ 
                                            '<option value="LF">Gabardinas</option>'+ 
                                          '</select>'+ 
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
                                          '<input type="submit" value="Buscar" class="button" onclick=""/>'+ 
                                        '</td>'+ 
                                      '</tr>'+ 
                                    '</table>'+ 
                                '</form>'+ 
                                '<br>'+ 
                                '<table class="tbonita">'+ 
                                  '<tr align="left">'+ 
                                    '<th colspan="2"><img src="images/b_insrow.png" title="agregar" class="AdicionarVenta" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento"  /></th>'+ 
                                    '<th>IdVisita</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Cuidad</th>'+ 
                                    '<th>Total</th>'+ 
                                  '</tr>'+ 
                         
                                  '<tr>'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta"/></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Visualizar" class="VerVenta" /></td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                    '<td>Ingenio Risaralda</td>'+ 
                                    '<td>Carlos Jaramillo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>45000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>5000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr>'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>5000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>5000000</td>'+ 
                                  '</tr>'+ 
                                '</table>'+ 
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
    activadorEventosUsuarios();
}

//**********************************************************************************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DE ADICIONAR, MODIFICAR,   *********************
//*************  VISUALIZAR, BORRAR Y GENERAR INFORME EN LA    *********************
//*************  OPCION VENTAS DE LOS VENDEDORES               *********************
//**********************************************************************************

function AddVenta()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Ventas</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Prod">Productos</a></li>'+
                            '<li><a href="#Cliente">Cliente</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Prod" class="tab_content">'+
                            '<form action="" method="POST" name="form_crear_venta">'+
                              '<table align="left" border="0" align="left">'+
                                  '<tr colspan="4">'+
                                    '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+
                                    '<td>'+
                                      '<select name="tipoCuenta" style="width:177px;">'+
                                        '<option value="LI">Linea Industrial</option>'+
                                        '<option value="LM">Linea Motociclista</option>'+
                                        '<option value="LH">Linea Hogar</option>'+
                                        '<option value="LF">Linea Infantil</option>'+
                                      '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Material</th>'+
                                    '<td>'+
                                      '<select name="tipoCuenta" style="width:177px">'+
                                        '<option value="LI">Econoflex</option>'+
                                        '<option value="LM">Greenflex</option>'+
                                        '<option value="LH">Natuflex</option>'+
                                        '<option value="LF">Oxiflex</option>'+
                                        '<option value="LF">Poliester PVC</option>'+
                                        '<option value="LF">PVC Poliester PVC</option>'+
                                      '</select>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Tipo Producto</th>'+
                                    '<td>'+
                                      '<select name="tipoCuenta" style="width:177px">'+
                                        '<option value="LI">Abrigos</option>'+
                                        '<option value="LM">Capas</option>'+
                                        '<option value="LH">Pantalón y Vestido</option>'+
                                        '<option value="LF">Gabardinas</option>'+
                                      '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="center"><br>'+
                                      '<input type="button" value="Buscar" class="button" />'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                              
                              '<ul class="tabs2">'+
                                '<li><a href="#ListProductos">Listado</a></li>'+
                                '<li><a href="#SelProductos">Seleccionados</a></li>'+
                              '</ul>'+
                              '<div class="tab_container2">'+
                                '<div id="ListProductos" class="tab_content2">'+
                                    '<table class="tbonita">'+
                                      '<tr>'+
                                        '<th></th>'+
                                        '<th>Codigo</th>'+
                                        '<th>Nombre</th>'+
                                        '<th>Cantidad</th>'+
                                        '<th>Color</th>'+
                                        '<th>Talla</th>'+
                                        '<th>Precio</th>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/check-button.png" title="Visualizar" class="VentanaAddProducto" /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">50</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">50000</td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/check-button.png" title="Visualizar" class="VentanaAddProducto" /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">50</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">50000</td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/check-button.png" title="Visualizar" class="VentanaAddProducto" /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">50</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">50000</td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/check-button.png" title="Visualizar" class="VentanaAddProducto" /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">50</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">50000</td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/check-button.png" title="Visualizar" class="VentanaAddProducto" /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">50</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">50000</td>'+
                                      '</tr>'+
                                    '</table>'+
                                  '</tr>'+
                                '</div>'+
                                '<div id="SelProductos" class="tab_content2">'+
                                    '<table class="tbonita">'+
                                      '<tr align="right">'+
                                        '<th></th>'+
                                        '<th>Codigo</th>'+
                                        '<th>Nombre</th>'+
                                        '<th>Cantidad</th>'+
                                        '<th>Color</th>'+
                                        '<th>Talla</th>'+
                                        '<th>Total</th>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/b_drop.png" title="Visualizar"  /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">3</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">150000</td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/b_drop.png" title="Visualizar"  /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">3</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">150000</td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/b_drop.png" title="Visualizar"  /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">1</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">100000</td>'+
                                      '</tr>'+
                                    '</table>'+
                                '</div>'+
                              '</div>'+
                            '</div>'+
                            '<div id="Cliente" class="tab_content">'+
                              '<br>'+
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">NIT</th>'+
                                    '<td>'+
                                      '<input type="text" name="nit" value="" />'+
                                      '<input type="botton" value="Buscar" class="button" style="text-align:center; width:50px;"/>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                              '<br>'+
                              '<br>'+
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Razón Social</th>'+
                                    '<td>'+
                                      '<input type="text" name="cumpleanos" value="" readonly="readonly"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                    '<td>'+
                                      '<input type="text" name="ciudad" value="" readonly="readonly"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td>'+
                                      '<input type="text" name="dir" value="" readonly="readonly"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Telefono</th>'+
                                    '<td>'+
                                      '<input type="text" name="telefono" value="" readonly="readonly"/>'+
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
                                      '<input type="text" name="nomAutoriza" value=""/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Cargo</th>'+
                                    '<td>'+
                                      '<input type="text" name="cargoAutoriza" value=""/>'+
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
                                  '<tr>'+
                                    '<td colspan="4" align="left"><br>'+
                                    'Otros datos:<br />'+
                                      '<textarea name="mensaje" cols="60" rows="4"></textarea>'+
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
                                  '<input type="reset" value="Volver" class="button" id="volverVenta"/>'+
                                  '<input type="submit" value="Guardar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table>'+     
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabersAnidados();
    activadorEventosUsuarios();
}

function ConfirmAddProducto()
{
    var codigoHTML='<div class="encabezado2">Adicionar Ventas</div>'+
                    '<br>'+
                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+
                          '<td>'+
                            '<input type="text" name="dir" value="Linea Industrial" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Material</th>'+
                          '<td>'+
                            '<input type="text" name="telefono" value="Econoflex" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Codigo</th>'+
                          '<td>'+
                            '<input type="text" name="cumpleanos" value="111111" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Nombre</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad" value="Vestido de Motociclista" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cantidad</th>'+
                          '<td>'+
                            '<input type="text" name="dir" value="50" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Color</th>'+
                          '<td>'+
                            '<input type="text" name="telefono" value="Negro" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Talla</th>'+
                          '<td>'+
                            '<input type="text" name="dir" value="XL" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Precio Sugerido</th>'+
                          '<td>'+
                            '<input type="text" name="telefono" value="45000" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th colspan="2" align="left" style="padding-right:5px; font-weight: bold; font-size: 15px;"><br>'+
                            'DATOS DE LA VENTA:'+
                          '</th>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Precio de Venta</th>'+
                          '<td>'+
                            '<input type="text" name="nomAutoriza" value=""/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Cantidad</th>'+
                          '<td>'+
                            '<input type="text" name="cargoAutoriza" value=""/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<td colspan="4" align="center"><br>'+
                            '<input type="button" value="Calcular" class="button" /><br><br>'+
                          '</td>'+
                        '</tr>'+
                    '</table>'+

                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Total sin IVA</th>'+
                          '<td><input type="text" name="totalSinIva" value="2500000" readonly="readonly"/></td>'+
                          '<th align="right" style="padding-right:5px;">Valor IVA</th>'+
                          '<td><input type="text" name="iva" value="100000" size="20" maxlength="35" readonly="readonly" /></td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">TOTAL</th>'+
                          '<td colspan="2"><input type="text" name="totalSinIva" value="2600000" readonly="readonly" style="padding-right:5px; font-weight: bold; font-size: 20px;"/></td>'+
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
    activadorEventosUsuarios();
}

function HideConfirmAddProducto()
{
    $("#overAddProducto").css({display: "none"});
    $("#fadeAddProducto").css({display: "none"});
    activadorEventosUsuarios();  
}

function ModVenta()
{
    var codigoHTML = '<div class="encabezado2">Modificar Ventas</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Prod">Productos</a></li>'+
                            '<li><a href="#Cliente">Cliente</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Prod" class="tab_content">'+
                            '<form action="" method="POST" name="form_crear_venta">'+
                              '<table align="left" border="0" align="left">'+
                                  '<tr colspan="4">'+
                                    '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+
                                    '<td>'+
                                      '<select name="tipoCuenta" style="width:177px;">'+
                                        '<option value="LI">Linea Industrial</option>'+
                                        '<option value="LM">Linea Motociclista</option>'+
                                        '<option value="LH">Linea Hogar</option>'+
                                        '<option value="LF">Linea Infantil</option>'+
                                      '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Material</th>'+
                                    '<td>'+
                                      '<select name="tipoCuenta" style="width:177px">'+
                                        '<option value="LI">Econoflex</option>'+
                                        '<option value="LM">Greenflex</option>'+
                                        '<option value="LH">Natuflex</option>'+
                                        '<option value="LF">Oxiflex</option>'+
                                        '<option value="LF">Poliester PVC</option>'+
                                        '<option value="LF">PVC Poliester PVC</option>'+
                                      '</select>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Tipo Producto</th>'+
                                    '<td>'+
                                      '<select name="tipoCuenta" style="width:177px">'+
                                        '<option value="LI">Abrigos</option>'+
                                        '<option value="LM">Capas</option>'+
                                        '<option value="LH">Pantalón y Vestido</option>'+
                                        '<option value="LF">Gabardinas</option>'+
                                      '</select>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="center"><br>'+
                                      '<input type="button" value="Buscar" class="button" />'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                              
                              '<ul class="tabs2">'+
                                '<li><a href="#ListProductos">Listado</a></li>'+
                                '<li><a href="#SelProductos">Seleccionados</a></li>'+
                              '</ul>'+
                              '<div class="tab_container2">'+
                                '<div id="ListProductos" class="tab_content2">'+
                                    '<table class="tbonita">'+
                                      '<tr>'+
                                        '<th></th>'+
                                        '<th>Codigo</th>'+
                                        '<th>Nombre</th>'+
                                        '<th>Cantidad</th>'+
                                        '<th>Color</th>'+
                                        '<th>Talla</th>'+
                                        '<th>Precio</th>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/check-button.png" title="Visualizar" class="VentanaAddProducto" /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">50</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">50000</td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/check-button.png" title="Visualizar" class="VentanaAddProducto" /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">50</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">50000</td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/check-button.png" title="Visualizar" class="VentanaAddProducto" /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">50</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">50000</td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/check-button.png" title="Visualizar" class="VentanaAddProducto" /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">50</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">50000</td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/check-button.png" title="Visualizar" class="VentanaAddProducto" /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">50</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">50000</td>'+
                                      '</tr>'+
                                    '</table>'+
                                  '</tr>'+
                                '</div>'+
                                '<div id="SelProductos" class="tab_content2">'+
                                    '<table class="tbonita">'+
                                      '<tr align="right">'+
                                        '<th></th>'+
                                        '<th>Codigo</th>'+
                                        '<th>Nombre</th>'+
                                        '<th>Cantidad</th>'+
                                        '<th>Color</th>'+
                                        '<th>Talla</th>'+
                                        '<th>Total</th>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/b_drop.png" title="Visualizar"  /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">3</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">150000</td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/b_drop.png" title="Visualizar"  /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">3</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">150000</td>'+
                                      '</tr>'+
                                      '<tr>'+
                                        '<td><img src="images/b_drop.png" title="Visualizar"  /></td>'+
                                        '<td style="text-align: center;">11111</td>'+
                                        '<td>vestido Motociclista</td>'+
                                        '<td style="text-align: center;">1</td>'+
                                        '<td>Amarillo</td>'+
                                        '<td style="text-align: center;">XL</td>'+
                                        '<td style="text-align: center;">100000</td>'+
                                      '</tr>'+
                                    '</table>'+
                                '</div>'+
                              '</div>'+
                            '</div>'+
                            '<div id="Cliente" class="tab_content">'+
                              '<br>'+
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">NIT</th>'+
                                    '<td>'+
                                      '<input type="text" name="nit" value="123456" />'+
                                      '<input type="botton" value="Buscar" class="button" style="text-align:center; width:50px;"/>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                              '<br>'+
                              '<br>'+
                              '<table align="center">'+
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
                                      '<input type="text" name="nomAutoriza" value="Pedro Perez"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Cargo</th>'+
                                    '<td>'+
                                      '<input type="text" name="cargoAutoriza" value="Jefe de Compras"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Telefono fijo</th>'+
                                    '<td>'+
                                      '<input type="text" name="telAutoriza" value="3122324"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td>'+
                                      '<input type="text" name="celAutoriza" value="310456789"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left"><br>'+
                                    'Otros datos:<br />'+
                                      '<textarea name="mensaje" cols="60" rows="4">Entregar maximo en 10 dias</textarea>'+
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
                                  '<input type="reset" value="Volver" class="button" id="volverVenta"/>'+
                                  '<input type="submit" value="Guardar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table>'+     
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabersAnidados();
    activadorEventosUsuarios();
}

function VerVenta()
{
    var codigoHTML = '<div class="encabezado2">Datos Ventas</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Prod">Productos</a></li>'+
                            '<li><a href="#Cliente">Cliente</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Prod" class="tab_content">'+
                            '<form action="" method="POST" name="form_crear_venta">'+
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
                                      '<input type="text" value="Abrigos" readonly="readonly" />'+
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
                                  '<input type="reset" value="Volver" class="button" id="volverVenta"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table>'+     
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabersAnidados();
    activadorEventosUsuarios();
}

function ConfirmDelVenta()
{
    var codigoHTML = '<div class="encabezado2">Borrar Visita</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea borrar la Visita?</th>'+
                            '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Si" class="button" id="OkDelVenta"/>'+
                                '<input type="button" value="No" class="button" id="NotDelVenta"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosUsuarios();
}

function HideConfirmDelVenta()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosUsuarios();  
}

//**********************************************************************************

function seccionActividades()
{
    var codigoHTML = '<div class="encabezado2">Listado de Actividades de los Vendedores</div>'+
                     '<div class="tabla">'+
                        '<form action="" method="POST" name="form_buscar_venta">'+
                            '<table align="center" border="0" align="left">'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                                    '<td>'+
                                        '<select name="vendedor" style="width:160px;">'+
                                            '<option value="">Edison</option>'+
                                            '<option value="">Juan Pablo</option>'+
                                            '<option value="">Orlando</option>'+
                                            '<option value="">Sandra Giraldo</option>'+
                                        '</select>'+
                                    '</td>'+

                                    '<th align="right" style="padding-right:5px;">Tipo Actividad</th>'+
                                    '<td>'+
                                        '<select name="tipoActividad" style="width:160px;">'+
                                            '<option value="">Visitas</option>'+
                                            '<option value="">Recaudos</option>'+
                                            '<option value="">Quejas</option>'+
                                        '</select>'+
                                    '</td>'+
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
                        '<table class="tbonita">'+
                          '<tr align="left">'+
                            '<th colspan="2"><img src="images/b_insrow.png" title="agregar" /></th>'+
                            '<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
                            '<th>IdAct.</th>'+
                            '<th>Fecha</th>'+
                            '<th>Cliente</th>'+
                            '<th>Departamento</th>'+
                            '<th>Cuidad</th>'+
                            '<th>Tema</th>'+
                          '</tr>'+
                 
                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar"/></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar"/></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" onclick="" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" onclick="" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" onclick="" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" onclick="" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" onclick="" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" onclick="" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                        '</table>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
    $('#date_field7').datepick({yearRange: '1980:2050'});
    $('#date_field8').datepick({yearRange: '1980:2050'});
}

//**********************************************************************************

function seccionViaticos()
{
    var codigoHTML = '<div class="encabezado2">Listado de Viáticos de los Vendedores</div>'+
                     '<div class="tabla">'+
                        '<form action="" method="POST" name="form_buscar_venta">'+
                            '<table align="center" border="0" align="left">'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                                    '<td>'+
                                        '<select name="vendedor" style="width:160px;">'+
                                            '<option value="">Edison</option>'+
                                            '<option value="">Juan Pablo</option>'+
                                            '<option value="">Orlando</option>'+
                                            '<option value="">Sandra Giraldo</option>'+
                                        '</select>'+
                                    '</td>'+

                                    '<th align="right" style="padding-right:5px;">Tipo Viático</th>'+
                                    '<td>'+
                                        '<select name="tipoActividad" style="width:160px;">'+
                                            '<option value="">Transporte</option>'+
                                            '<option value="">Alimentación</option>'+
                                            '<option value="">Urbanos</option>'+
                                            '<option value="">Hospedaje</option>'+
                                            '<option value="">Otros</option>'+
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
                                      '<input type="submit" value="Buscar" class="button" />'+
                                    '</td>'+
                                '</tr>'+
                            '</table>'+
                        '</form>'+
                        '<br>'+
                        '<table class="tbonita">'+
                          '<tr align="left">'+
                            '<th colspan="2"><img src="images/b_insrow.png" title="agregar" /></th>'+
                            '<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
                            '<th>IdViatico</th>'+
                            '<th>Fecha</th>'+
                            '<th>Departamento</th>'+
                            '<th>Ciudad</th>'+
                            '<th>Concepto</th>'+
                            '<th>Valor</th>'+
                          '</tr>'+
                 
                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>Hospedaje</td>'+
                            '<td>60000</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" onclick="" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" onclick="" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>Hospedaje</td>'+
                            '<td>60000</td>'+
                          '</tr>'+

						  '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>Hospedaje</td>'+
                            '<td>60000</td>'+
                          '</tr>'+
						  
						  '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" onclick="" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" onclick="" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>Hospedaje</td>'+
                            '<td>60000</td>'+
                          '</tr>'+
						  
                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" onclick="" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" onclick="" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>Hospedaje</td>'+
                            '<td>60000</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" onclick="" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" onclick="" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>Hospedaje</td>'+
                            '<td>60000</td>'+
                          '</tr>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field10').datepick({yearRange: '1980:2050'});
}

//**********************************************************************************

function seccionComisiones()
{
    var codigoHTML = '<div class="encabezado2">Listado de Comisiones de los Vendedores</div>'+
                     '<div class="tabla">'+
                        '<form action="" method="POST" name="form_buscar_venta">'+
                            '<table align="center" border="0" align="left">'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                                    '<td>'+
                                        '<select name="vendedor" style="width:160px;">'+
                                            '<option value="">Edison</option>'+
                                            '<option value="">Juan Pablo</option>'+
                                            '<option value="">Orlando</option>'+
                                            '<option value="">Sandra Giraldo</option>'+
                                        '</select>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Inicial</th>'+
                                    '<td>'+
                                      '<input id="date_field11" type="text" name="fechaInicio" value=""/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Final</th>'+
                                    '<td>'+
                                      '<input id="date_field12" type="text" name="fechaFin" value=""/>'+
                                    '</td>'+
                                '</tr>'+

                                '<tr>'+
                                    '<td colspan="4" align="center"><br>'+
                                      '<input type="submit" value="Buscar" class="button" />'+
                                    '</td>'+
                                '</tr> '+
                            '</table>'+
                        '</form>'+
                        '<br>'+
                        '<table class="tbonita">'+
                          '<tr align="left">'+
                            '<th colspan="2"><img src="images/b_insrow.png" title="agregar" /></th>'+
                            '<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
                            '<th>IdVenta</th>'+
                            '<th>Idfactura</th>'+
                            '<th>Cliente</th>'+
                            '<th>Departamento</th>'+
                            '<th>Cuidad</th>'+
                            '<th>Dias</th>'+
                            '<th>Valor</th>'+
                          '</tr>'+
                 
                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar"/></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar"/></td>'+
                            '<td>11111</td>'+
                            '<td>22-444</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>20</td>'+
                            '<td>100000</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" onclick="" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" onclick="" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>22-444</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>20</td>'+
                            '<td>100000</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" onclick="" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" onclick="" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>22-444</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>20</td>'+
                            '<td>100000</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" onclick="" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" onclick="" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>22-444</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>20</td>'+
                            '<td>100000</td>'+
                          '</tr>'+
                        '</table>'+
                        '<br>'+
                        '<br>'+
                        '<table>'+
                            '<tr>'+
                                  '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">TOTAL COMISIONES</th>'+
                                  '<td colspan="2"><input type="text" name="totalSinIva" value="1000000" readonly="readonly" style="padding-right:5px; font-weight: bold; font-size: 20px;"/></td>'+
                            '</tr> '+
                        '</table> '+ 
                    '</div>';

    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
    $('#date_field11').datepick({yearRange: '1980:2050'});
    $('#date_field12').datepick({yearRange: '1980:2050'});
}

//**********************************************************************************

function seccionUbicacion()
{
    var codigoHTML = '<div class="encabezado2">Ubicación Geográfica de los Vendedores</div>'+
                     '<div class="tabla">'+
                        '<form action="" method="POST" name="form_buscar_venta">'+
                            '<table align="center" border="0" align="left">'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                                    '<td>'+
                                        '<select name="vendedor" style="width:160px;">'+
                                            '<option value="">Edison</option>'+
                                            '<option value="">Juan Pablo</option>'+
                                            '<option value="">Orlando</option>'+
                                            '<option value="">Sandra Giraldo</option>'+
                                        '</select>'+
                                    '</td>'+
                                    '<td>'+
                                      '<input type="submit" value="Localizar" class="button" />'+
                                    '</td>'+
                                '</tr>'+
                            '</table>'+
                        '</form>'+
                     '</div>'+
                     '<div class="Ubicacion-Geografica">'+
                        '<img src="images/mapaUbicacion.png"/>'+
                     '</div>';

    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
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
    var codigoHTML = '<div class="encabezado2">Listado de Productos</div>'+
                     '<div class="tabla">'+
                        '<tr>'+
                        '<table class="tbonita">'+
                          '<tr align="center">'+
                            '<th colspan="2"><img src="images/b_insrow.png" title="Agregar" id="AProducto"/></th>'+
                            '<th colspan="1"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th>IdProducto</th>'+
                            '<th>Nombre</th>'+
                            '<th>Cantidad</th>'+
                            '<th>Peso</th>'+
                            '<th>Precio</th>'+
                          '</tr>'+
                 
                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModProducto" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelProducto" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerProducto"/></td>'+
                            '<td>111222</td>'+
                            '<td>Vestido Impermeable moticiclista</td>'+
                            '<td>50</td>'+
                            '<td>2.5kg - 4kg 1.8kg</td>'+
                            '<td>2600000</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModProducto" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelProducto" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerProducto"/></td>'+
                            '<td>111222</td>'+
                            '<td>Vestido Impermeable moticiclista</td>'+
                            '<td>50</td>'+
                            '<td>2.5kg - 4kg 1.8kg</td>'+
                            '<td>2600000</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModProducto" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelProducto" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerProducto"/></td>'+
                            '<td>111222</td>'+
                            '<td>Vestido Impermeable moticiclista</td>'+
                            '<td>50</td>'+
                            '<td>2.5kg - 4kg 1.8kg</td>'+
                            '<td>2600000</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModProducto" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelProducto" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerProducto"/></td>'+
                            '<td>111222</td>'+
                            '<td>Vestido Impermeable moticiclista</td>'+
                            '<td>50</td>'+
                            '<td>2.5kg - 4kg 1.8kg</td>'+
                            '<td>2600000</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModProducto" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelProducto" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerProducto"/></td>'+
                            '<td>111222</td>'+
                            '<td>Vestido Impermeable moticiclista</td>'+
                            '<td>50</td>'+
                            '<td>2.5kg - 4kg 1.8kg</td>'+
                            '<td>2600000</td>'+
                          '</tr>'+

                         '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModProducto" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelProducto" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerProducto"/></td>'+
                            '<td>111222</td>'+
                            '<td>Vestido Impermeable moticiclista</td>'+
                            '<td>50</td>'+
                            '<td>2.5kg - 4kg 1.8kg</td>'+
                            '<td>2600000</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModProducto" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelProducto" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerProducto"/></td>'+
                            '<td>111222</td>'+
                            '<td>Vestido Impermeable moticiclista</td>'+
                            '<td>50</td>'+
                            '<td>2.5kg - 4kg 1.8kg</td>'+
                            '<td>2600000</td>'+
                          '</tr>'+
                          
                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModProducto" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelProducto" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerProducto"/></td>'+
                            '<td>111222</td>'+
                            '<td>Vestido Impermeable moticiclista</td>'+
                            '<td>50</td>'+
                            '<td>2.5kg - 4kg 1.8kg</td>'+
                            '<td>2600000</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModProducto" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelProducto" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerProducto"/></td>'+
                            '<td>111222</td>'+
                            '<td>Vestido Impermeable moticiclista</td>'+
                            '<td>50</td>'+
                            '<td>2.5kg - 4kg 1.8kg</td>'+
                            '<td>2600000</td>'+
                          '</tr>'+
                        '</table>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    $(".content-float-datos").css({width: 630});
    activadorEventosProductos();
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
}

//**********************************************************************************************
//***************OPCION ADICIONAR PRODUCTO***************************************
//**********************************************************************************************

function AddProducto()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Producto</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Producto</a></li>'+
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
                                    '<th align="right" style="padding-right:5px;">IdProducto</th>'+
                                    '<td><input type="text" name="id" value="" size="20" maxlength="15" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td align="right" style="padding-right:5px;">Linea de Producción</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:168px;">'+
                                      '<option value="Ap">Linea Industrial</option>'+
                                      '<option value="Sr">Linea Motociclista</option>'+
                                      '<option value="Dq">Linea Hogar</option>'+
                                      '<option value="Pr">Linea Infantil</option>'+
                                  '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td align="right" style="padding-right:5px;">Material</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:168px;">'+
                                      '<option value="Ap">Econoflex</option>'+
                                      '<option value="Sr">Greenflex</option>'+
                                      '<option value="Dq">Natuflex</option>'+
                                      '<option value="Pr">Oxiflex</option>'+
                                      '<option value="Dq">Poliester PVC</option>'+
                                      '<option value="Pr">PVC Poliester PVC</option>'+
                                  '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td align="right" style="padding-right:5px;">Tipo de Producto</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:168px;">'+
                                      '<option value="Ap">Vestido de Motociclista</option>'+
                                      '<option value="Sr">Abrigos</option>'+
                                      '<option value="Dq">Capas</option>'+
                                      '<option value="Pr">Pantalón y Vestido</option>'+
                                      '<option value="Dq">Gabardinas</option>'+
                                  '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Cantidad</th>'+
                                    '<td><input type="text" name="cantidad" value="" size="20" maxlength="10" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Peso</th>'+
                                    '<td><input type="text" name="peso" value="" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Color</th>'+
                                    '<td><input type="text" name="color" value="" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Talla</th>'+
                                    '<td><input type="text" name="talla" value="" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<table align="center">'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Total sin IVA</th>'+
                                    '<td><input type="text" name="color" value="" size="20" maxlength="15" /></td>'+
                                    '<th align="right" style="padding-right:5px;">Valor IVA</th>'+
                                    '<td><input type="text" name="talla" value="" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                                '<tr>'+
                                  '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">TOTAL</th>'+
                                  '<td colspan="2"><input type="text" name="totalSinIva" value="" style="padding-right:5px; font-weight: bold; font-size: 20px;"/></td>'+
                                '</tr>'+
                            '</table>'+
                            '</div>'+
                           '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddProducto" />'+
                                  '<input type="submit" value="Registrar" class="button" id="registrarAddProducto"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
              '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick({yearRange: '1980:2050'});
	activadorEventosProductos();
}
function ModProducto()
{
    var codigoHTML = '<div class="encabezado2">Modificar Producto</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Información</a></li>'+
                        '</ul>'+
                        
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                            '<form action="" method="POST" name="form_crear_usuario">'+
                              '<table align="center" border="0" align="left">'+
                                  '<tr>'+
                                      '<td colspan="2" rowspan="12" align="center">'+
                                          '<div class="foto">'+
                                              '<div class="imagen">'+
                                                  '<img src="images/surtiplas1.png" align="center">'+
                                              '</div>'+
                                              '<div>'+
                                                  '<input type="button" value="Cargar Foto" class="button" '+
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">IdProducto</th>'+
                                    '<td><input type="text" name="id" value="111222" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td align="right" style="padding-right:5px;">Linea de Producción</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:168px;">'+
                                      '<option value="Ap">Linea Industrial</option>'+
                                      '<option value="Sr">Linea Motociclista</option>'+
                                      '<option value="Dq">Linea Hogar</option>'+
                                      '<option value="Pr">Linea Infantil</option>'+
                                  '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td align="right" style="padding-right:5px;">Material</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:168px;">'+
                                      '<option value="Ap">Econoflex</option>'+
                                      '<option value="Sr">Greenflex</option>'+
                                      '<option value="Dq">Natuflex</option>'+
                                      '<option value="Pr">Oxiflex</option>'+
                                      '<option value="Dq">Poliester PVC</option>'+
                                      '<option value="Pr">PVC Poliester PVC</option>'+
                                  '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td align="right" style="padding-right:5px;">Tipo de Producto</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:168px;">'+
                                      '<option value="Ap">Vestido de Motociclista</option>'+
                                      '<option value="Sr">Abrigos</option>'+
                                      '<option value="Dq">Capas</option>'+
                                      '<option value="Pr">Pantalón y Vestido</option>'+
                                      '<option value="Dq">Gabardinas</option>'+
                                  '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Cantidad</th>'+
                                    '<td><input type="text" name="cantidad" value="50" size="20" maxlength="10" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Peso</th>'+
                                    '<td><input type="text" name="peso" value="2.5kg-4kg-1.8kg" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Color</th>'+
                                    '<td><input type="text" name="color" value="Negro" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Talla</th>'+
                                    '<td><input type="text" name="talla" value="XL" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<table align="center">'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Total sin IVA</th>'+
                                    '<td><input type="text" name="color" value="250000" size="20" maxlength="15" /></td>'+
                                    '<th align="right" style="padding-right:5px;">Valor IVA</th>'+
                                    '<td><input type="text" name="talla" value="100000" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                                '<tr>'+
                                  '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">TOTAL</th>'+
                                  '<td colspan="2"><input type="text" name="totalSinIva" value="2600000" style="padding-right:5px; font-weight: bold; font-size: 20px;"/></td>'+
                                '</tr>'+
                            '</table>'+
                            '</div>'+
                           '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddProducto" />'+
                                  '<input type="submit" value="Registrar" class="button" id="registrarAddProducto"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick({yearRange: '1980:2050'});
    activadorEventosProductos();
}
function VerProducto()
{
    var codigoHTML = '<div class="encabezado2">Visualizar Producto</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Informacion">Información</a></li>'+
                        '</ul>'+
                        
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                            '<form action="" method="POST" name="form_crear_usuario">'+
                              '<table align="right" border="0" align="left">'+
                                  '<tr>'+
                                      '<td colspan="2" rowspan="9" align="center">'+
                                          '<div class="foto">'+
                                              '<div class="imagen">'+
                                                  '<img src="images/surtiplas1.png" align="center">'+
                                              '</div>'+
                                              '<div>'+
                                                  '<input type="button" value="Cargar Foto" class="button" '+
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                  '</tr>'+
                            '<br>'+
                            '<tr>'+
                                '<th align="right" style="padding-right:5px;">IdProducto</th>'+
                                '<td><input type="text" name="id_producto" value="111222" size="20" maxlength="15" readonly="readonly"/></td>'+
                            '</tr>'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+
                                    '<td><input type="text" name="Linea" value="Linea Industrial" size="20" maxlength="10" readonly="readonly"/></td>'+
                                '</tr>'+
                                    '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Material</th>'+
                                        '<td><input type="text" name="material" value="Econoflex" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '</tr>'+
                                        '<tr>'+
                                            '<th align="right" style="padding-right:5px;">Tipo de Producto</th>'+
                                            '<td><input type="text" name="tipo" value="Vestido de Moticiclista" size="20" maxlength="10" readonly="readonly"/></td>'+
                                        '</tr>'+
                                          '<tr>'+
                                            '<th align="right" style="padding-right:5px;">Cantidad</th>'+
                                            '<td><input type="text" name="cantidad" value="50" size="20" maxlength="10" readonly="readonly"/></td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<th align="right" style="padding-right:5px;">Peso</th>'+
                                            '<td><input type="text" name="peso" value="2.5kg-4kg-1.8kg" size="20" maxlength="10" readonly="readonly"/></td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<th align="right" style="padding-right:5px;">Color</th>'+
                                            '<td><input type="text" name="color" value="Negro" size="20" maxlength="10" readonly="readonly"/></td>'+
                                            '</tr>'+
                                          '<tr>'+
                                            '<th align="right" style="padding-right:5px;">Talla</th>'+
                                            '<td><input type="text" name="talla" value="XL" size="20" maxlength="12" readonly="readonly"/></td>'+
                                          '</tr>'+
                                      '</table>'+
                                    '</div>'+
                            '</table>'+
                            '<br>'+
                            '<table align="center">'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Total sin IVA</th>'+
                                  '<td><input type="text" name="totalSinIva" value="2500000" readonly="readonly"/></td>'+
                                  '<th align="left" style="padding-left:90px;">Valor IVA</th>'+
                                  '<td><input type="text" name="iva" value="100000" size="20" maxlength="35" readonly="readonly" /></td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">TOTAL</th>'+
                                  '<td colspan="2"><input type="text" name="totalSinIva" value="2600000" readonly="readonly" style="padding-right:5px; font-weight: bold; font-size: 20px;"/></td>'+
                                '</tr>'+
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
function DelProducto()
{
    var codigoHTML = '<div class="encabezado2">Borrar Producto</div>'+
                    '<div class="tabla">'+
                        '<form action="" method="POST" name="form_crear_usuario">'+
                            '<table align="center" border="0" align="left">'+
                                '<tr>'+
                                    '<td colspan="2" rowspan="9" align="center">'+
                                        '<div class="foto">'+
                                            '<div class="imagen">'+
                                                '<img src="images/surtiplas1.png" align="center">'+
                                            '</div>'+
                                        '</div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+
                                   '<th align="right" style="padding-right:5px;">IdProducto:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">111222</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Linea de Producción:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">Linea Industrial</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Material:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">Econoflex</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Tipo de Producto:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">Vestido de Motociclista</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Cantidad:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">50</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Peso:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">2.5kg-4kg-1.8kg</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">color:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">Negro</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Talla:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">XL</td>'+
                                '</tr>'+
                    '</table>'+

                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Valor sin IVA:</th>'+
                          '<td style="font-size:15px; color: #000; font-weight:bold;">250000</td>'+
                          '<th align="right" style="padding-right:5px;">Valor IVA:</th>'+
                          '<td style="font-size:15px; color: #000; font-weight:bold;">100000</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">TOTAL:</th>'+
                          '<td style="font-size:15px; color: #000; font-weight:bold;">2600000</td>'+
                        '</tr>'+
                    '</table>'+
                        '<br>'+
                            '<table align="center">'+
                                '<tr>'+
                                  '<td colspan="4" align="center">'+
                                      '<input type="button" value="Volver" class="button" id="volverAddProducto" />'+
                                      '<a href="#DelV" class="button" id="borrarProducto" style="text-decoration:none; padding:2px 4px 2px 4px;">Borrar<a/>'+
                                  '</td>'+
                                '</tr>'+
                            '</table>'+       
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    activadorEventosProductos();
}

function ConfirmDelProducto()
{
    var codigoHTML = '<div class="encabezado2">Borrar Producto</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea borrar el Producto?</th>'+
                            '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Si" class="button" id="OkDelProducto"/>'+
                                '<input type="button" value="No" class="button" id="NotDelProducto"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosProductos();
}

function HideConfirmDelProducto()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosProductos();  
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

function seccionCategorias()
{
    var codigoHTML = '<div class="encabezado2">Listado de Productos</div>'+
                     '<div class="tabla">'+
                        '<form action="" method="POST" name="form_buscar_venta">'+
                            '<table align="center" border="0" align="left">'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                                    '<td>'+
                                        '<select name="vendedor" style="width:160px;">'+
                                            '<option value="">Edison</option>'+
                                            '<option value="">Juan Pablo</option>'+
                                            '<option value="">Orlando</option>'+
                                            '<option value="">Sandra Giraldo</option>'+
                                        '</select>'+
                                    '</td>'+

                                    '<th align="right" style="padding-right:5px;">Tipo Actividad</th>'+
                                    '<td>'+
                                        '<select name="tipoActividad" style="width:160px;">'+
                                            '<option value="">Visitas</option>'+
                                            '<option value="">Recaudos</option>'+
                                            '<option value="">Quejas</option>'+
                                        '</select>'+
                                    '</td>'+
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
                        '<table class="tbonita">'+
                          '<tr align="left">'+
                            '<th colspan="2"><img src="images/b_insrow.png" title="agregar" /></th>'+
                            '<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
                            '<th>IdAct.</th>'+
                            '<th>Fecha</th>'+
                            '<th>Cliente</th>'+
                            '<th>Departamento</th>'+
                            '<th>Cuidad</th>'+
                            '<th>Tema</th>'+
                          '</tr>'+
                 
                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar"/></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar"/></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" onclick="" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" onclick="" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" onclick="" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" onclick="" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" onclick="" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" onclick="" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                        '</table>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    $(".content-float-datos").css({width: 630});
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#catedoriasProductos").addClass("active");
    activadorEventosProductos();
}
//##################################################################################
//##################################################################################

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
    var codigoHTML = '<div class="encabezado2">Listado de Clientes</div>'+
                     '<div class="tabla">'+
                        '<table class="tbonita">'+
                          '<tr align="left">'+
                            '<th colspan="2"><img src="images/b_insrow.png" title="Agregar" id="ACliente"/></th>'+
                            '<th colspan="1"><img src="images/PDF-05.png" title="Generar Informe" id="GenerarReporte" /></th>'+
                            '<th>IdCliente</th>'+
                            '<th>Nombre</th>'+
                            '<th>Teléfono</th>'+
                            '<th>Celular</th>'+
                            '<th>email</th>'+
                          '</tr>'+
                 
                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor"/></td>'+
                            '<td>9867024</td>'+
                            '<td>InduMotos</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>indium@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>111111</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>ingenior02@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor"/></td>'+
                            '<td>9867024</td>'+
                            '<td>InduMotos</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>indium@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>111111</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>ingenior02@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor"/></td>'+
                            '<td>9867024</td>'+
                            '<td>InduMotos</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>indium@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>111111</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>ingenior02@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor"/></td>'+
                            '<td>9867024</td>'+
                            '<td>InduMotos</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>indium@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>111111</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>ingenior02@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor"/></td>'+
                            '<td>9867024</td>'+
                            '<td>InduMotos</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>indium@gmail.com</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" /></td>'+
                            '<td>111111</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>ingenior02@gmail.com</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" /></td>'+
                            '<td><img src="images/b_drop.png" title="Eliminar" class="DelUsuario" /></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor"/></td>'+
                            '<td>9867024</td>'+
                            '<td>InduMotos</td>'+
                            '<td>3325618</td>'+
                            '<td>3006731512</td>'+
                            '<td>indium@gmail.com</td>'+
                          '</tr>'+
                        '</table>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    $(".content-float-datos").css({width: 630});
    activadorEventosClientes();
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
}
function AddCliente()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Cliente</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Datos</a></li>'+
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
                                    '<th align="right" style="padding-right:5px;">IdCliente</th>'+
                                    '<td><input type="text" name="id_usuario" value="" size="20" maxlength="15" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre</th>'+
                                    '<td><input type="text" name="nombre" value="" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nickname</th>'+
                                    '<td><input type="text" name="nickname" value="" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Contraseña</th>'+
                                    '<td><input type="password" name="contrasena" value="" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '<td align="right" style="padding-right:5px;">Tipo de Cliente</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:168px;">'+
                                      '<option value="Ap">Mayorista</option>'+
                                      '<option value="Sr">Minorista</option>'+
                                  '</td>'+
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
                                  '<input type="submit" value="Registrar" class="button" id="registrarAddCliente"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    activadorEventosClientes();
}
function ModCliente()
{
   var codigoHTML = '<div class="encabezado2">Modificar Producto</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Información</a></li>'+
                        '</ul>'+
                        
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                            '<form action="" method="POST" name="form_crear_usuario">'+
                              '<table align="center" border="0" align="left">'+
                                  '<tr>'+
                                      '<td colspan="2" rowspan="12" align="center">'+
                                          '<div class="foto">'+
                                              '<div class="imagen">'+
                                                  '<img src="images/surtiplas1.png" align="center">'+
                                              '</div>'+
                                              '<div>'+
                                                  '<input type="button" value="Cargar Foto" class="button" '+
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">IdProducto</th>'+
                                    '<td><input type="text" name="id" value="111222" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td align="right" style="padding-right:5px;">Linea de Producción</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:168px;">'+
                                      '<option value="Ap">Linea Industrial</option>'+
                                      '<option value="Sr">Linea Motociclista</option>'+
                                      '<option value="Dq">Linea Hogar</option>'+
                                      '<option value="Pr">Linea Infantil</option>'+
                                  '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td align="right" style="padding-right:5px;">Material</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:168px;">'+
                                      '<option value="Ap">Econoflex</option>'+
                                      '<option value="Sr">Greenflex</option>'+
                                      '<option value="Dq">Natuflex</option>'+
                                      '<option value="Pr">Oxiflex</option>'+
                                      '<option value="Dq">Poliester PVC</option>'+
                                      '<option value="Pr">PVC Poliester PVC</option>'+
                                  '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td align="right" style="padding-right:5px;">Tipo de Producto</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:168px;">'+
                                      '<option value="Ap">Vestido de Motociclista</option>'+
                                      '<option value="Sr">Abrigos</option>'+
                                      '<option value="Dq">Capas</option>'+
                                      '<option value="Pr">Pantalón y Vestido</option>'+
                                      '<option value="Dq">Gabardinas</option>'+
                                  '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Cantidad</th>'+
                                    '<td><input type="text" name="cantidad" value="50" size="20" maxlength="10" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Peso</th>'+
                                    '<td><input type="text" name="peso" value="2.5kg-4kg-1.8kg" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Color</th>'+
                                    '<td><input type="text" name="color" value="Negro" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Talla</th>'+
                                    '<td><input type="text" name="talla" value="XL" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<table align="center">'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Total sin IVA</th>'+
                                    '<td><input type="text" name="color" value="250000" size="20" maxlength="15" /></td>'+
                                    '<th align="right" style="padding-right:5px;">Valor IVA</th>'+
                                    '<td><input type="text" name="talla" value="100000" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                                '<tr>'+
                                  '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">TOTAL</th>'+
                                  '<td colspan="2"><input type="text" name="totalSinIva" value="2600000" style="padding-right:5px; font-weight: bold; font-size: 20px;"/></td>'+
                                '</tr>'+
                            '</table>'+
                            '</div>'+
                           '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="button" value="Volver" class="button" id="volverAddProducto" />'+
                                  '<input type="submit" value="Registrar" class="button" id="registrarAddProducto"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick({yearRange: '1980:2050'});
    activadorEventosClientes();
}
function VerCliente()
{
    var codigoHTML = '<div class="encabezado2">Visualizar Cliente</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Informacion">Información</a></li>'+
                        '</ul>'+
                        
                        '<div class="tab_container">'+
                            '<div id="Personal" class="tab_content">'+
                            '<form action="" method="POST" name="form_crear_usuario">'+
                              '<table align="right" border="0" align="left">'+
                                  '<tr>'+
                                      '<td colspan="2" rowspan="9" align="center">'+
                                          '<div class="foto">'+
                                              '<div class="imagen">'+
                                                  '<img src="images/surtiplas1.png" align="center">'+
                                              '</div>'+
                                              '<div>'+
                                                  '<input type="button" value="Cargar Foto" class="button" '+
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                  '</tr>'+
                            '<br>'+
                            '<tr>'+
                                '<th align="right" style="padding-right:5px;">IdProducto</th>'+
                                '<td><input type="text" name="id_producto" value="111222" size="20" maxlength="15" readonly="readonly"/></td>'+
                            '</tr>'+
                                '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+
                                    '<td><input type="text" name="Linea" value="Linea Industrial" size="20" maxlength="10" readonly="readonly"/></td>'+
                                '</tr>'+
                                    '<tr>'+
                                        '<th align="right" style="padding-right:5px;">Material</th>'+
                                        '<td><input type="text" name="material" value="Econoflex" size="20" maxlength="10" readonly="readonly"/></td>'+
                                    '</tr>'+
                                        '<tr>'+
                                            '<th align="right" style="padding-right:5px;">Tipo de Producto</th>'+
                                            '<td><input type="text" name="tipo" value="Vestido de Moticiclista" size="20" maxlength="10" readonly="readonly"/></td>'+
                                        '</tr>'+
                                          '<tr>'+
                                            '<th align="right" style="padding-right:5px;">Cantidad</th>'+
                                            '<td><input type="text" name="cantidad" value="50" size="20" maxlength="10" readonly="readonly"/></td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<th align="right" style="padding-right:5px;">Peso</th>'+
                                            '<td><input type="text" name="peso" value="2.5kg-4kg-1.8kg" size="20" maxlength="10" readonly="readonly"/></td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<th align="right" style="padding-right:5px;">Color</th>'+
                                            '<td><input type="text" name="color" value="Negro" size="20" maxlength="10" readonly="readonly"/></td>'+
                                            '</tr>'+
                                          '<tr>'+
                                            '<th align="right" style="padding-right:5px;">Talla</th>'+
                                            '<td><input type="text" name="talla" value="XL" size="20" maxlength="12" readonly="readonly"/></td>'+
                                          '</tr>'+
                                      '</table>'+
                                    '</div>'+
                            '</table>'+
                            '<br>'+
                            '<table align="center">'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Total sin IVA</th>'+
                                  '<td><input type="text" name="totalSinIva" value="2500000" readonly="readonly"/></td>'+
                                  '<th align="left" style="padding-left:90px;">Valor IVA</th>'+
                                  '<td><input type="text" name="iva" value="100000" size="20" maxlength="35" readonly="readonly" /></td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">TOTAL</th>'+
                                  '<td colspan="2"><input type="text" name="totalSinIva" value="2600000" readonly="readonly" style="padding-right:5px; font-weight: bold; font-size: 20px;"/></td>'+
                                '</tr>'+
                            '</table>'+
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
    activadorEventosClientes();
}
function DelCliente()
{
    var codigoHTML = '<div class="encabezado2">Borrar Producto</div>'+
                    '<div class="tabla">'+
                        '<form action="" method="POST" name="form_crear_usuario">'+
                            '<table align="center" border="0" align="left">'+
                                '<tr>'+
                                    '<td colspan="2" rowspan="9" align="center">'+
                                        '<div class="foto">'+
                                            '<div class="imagen">'+
                                                '<img src="images/surtiplas1.png" align="center">'+
                                            '</div>'+
                                        '</div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+
                                   '<th align="right" style="padding-right:5px;">IdProducto:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">111222</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Linea de Producción:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">Linea Industrial</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Material:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">Econoflex</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Tipo de Producto:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">Vestido de Motociclista</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Cantidad:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">50</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Peso:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">2.5kg-4kg-1.8kg</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">color:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">Negro</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<th align="right" style="padding-right:5px;">Talla:</th>'+
                                  '<td style="font-size:15px; color: #000; font-weight:bold;">XL</td>'+
                                '</tr>'+
                    '</table>'+

                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Valor sin IVA:</th>'+
                          '<td style="font-size:15px; color: #000; font-weight:bold;">250000</td>'+
                          '<th align="right" style="padding-right:5px;">Valor IVA:</th>'+
                          '<td style="font-size:15px; color: #000; font-weight:bold;">100000</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">TOTAL:</th>'+
                          '<td style="font-size:15px; color: #000; font-weight:bold;">2600000</td>'+
                        '</tr>'+
                    '</table>'+
                        '<br>'+
                            '<table align="center">'+
                                '<tr>'+
                                  '<td colspan="4" align="center">'+
                                      '<input type="button" value="Volver" class="button" id="volverAddProducto" />'+
                                      '<a href="#DelV" class="button" id="borrarProducto" style="text-decoration:none; padding:2px 4px 2px 4px;">Borrar<a/>'+
                                  '</td>'+
                                '</tr>'+
                            '</table>'+       
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    activadorEventosClientes();
}

function ConfirmDelCliente()
{
    var codigoHTML = '<div class="encabezado2">Borrar Producto</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea borrar el Producto?</th>'+
                            '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Si" class="button" id="OkDelProducto"/>'+
                                '<input type="button" value="No" class="button" id="NotDelProducto"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';

    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosClientes();
}

function HideConfirmDelCliente()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosClientes();  
}
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************                OPCION PERFIL                   *********************
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
    $(".content-float-datos").css({width: 860});
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionDatosPerfil();
    //$(".menu-vertical li a#listadoVentas").addClass("active");
}
function seccionDatosPerfil()
{
    var codigoHTML = '<div class="encabezado2">Datos del Administrador</div>'+
                    '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Información</a></li>'+
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
                                    '<td><input type="text" name="id_usuario" value="396030312" size="20" maxlength="15" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellidos" value="Jaramillo Gómez" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombres" value="Cristhian David" size="20" maxlength="25" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nickname</th>'+
                                    '<td><input type="text" name="nickname" value="Crissdav52" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Contraseña</th>'+
                                    '<td><input type="password" name="contrasena" value="CDDJJJL" size="20" maxlength="10" required/></td>'+
                                  '</tr>'+
                                  '<td align="right" style="padding-right:5px;">Tipo de Usuario</td>'+
                                  '<td>'+
                                    '<select name="tipoCuenta" style="width:168px;">'+
                                      '<option value="Ap">Administrador</option>'+
                                      '<option value="Sr">Gerente</option>'+
                                      '<option value="Dq">Jefe de Producción</option>'+
                                      '<option value="Pr">Jefe Comercial</option>'+
                                      '<option value="Lv">Vendedor</option>'+
                                      '<option value="Tg">Cliente</option>'+
                                      '<option value="St">Secretaria</option>'+
                                  '</td>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion" value="Cr.8 #5 Frailes" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono" value="3263360" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular" value="3218628151" size="20" maxlength="12" /></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '</div>'+
                          '<br>'+
                          '<table align="center">'+
                            '<tr>'+
                              '<td colspan="4" align="center">'+
                                  '<input type="submit" value="Registrar" class="button"/>'+
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
              '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
}
//**********************************************************************************

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


