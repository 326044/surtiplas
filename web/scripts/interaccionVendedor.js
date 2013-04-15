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
    var pedidoV, viaticosV, actividadesV;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    pedidoV=$("#pedidoVendedor");
    pedidoV.click(seccionPedido);    
    viaticosV=$("#viaticosVendedor");
    viaticosV.click(seccionViaticos);
    actividadesV=$("#ActividadesVendedor");
    actividadesV.click(seccionActividades);

     //*****************************************************
    //** VARIABLES DE LAS OPCIONES DEL LISTADO DE PEDIDOS **
    //*****************************************************
    var addPedido, reportePedido, addProducto, hideAddProducto;
    var volverPedido,  verPedido;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    addPedido=$(".AdicionarPedido");
    addPedido.click(AddPedido);    
    verPedido=$(".VerPedido");
    verPedido.click(VerPedido);
       
    volverPedido=$("#volverPedido");
    volverPedido.click(seccionPedido);
    addProducto=$(".VentanaAddProducto");
    addProducto.click(ConfirmAddProducto);
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
    verViatico.click(VerViatico);
    
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
    var volverCliente,  verCliente, verVisita, addVisita, hideAddVisita, hideVerVisita;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    addCliente=$(".AdicionarCliente");
    addCliente.click(AddCliente);    
    verCliente=$(".VerCliente");
    verCliente.click(VerCliente);
       
    volverCliente=$("#volverCliente");
    volverCliente.click(seccionListadoClientes);
    verVisita=$(".VerVisita");
    verVisita.click(VerVisita);
    addVisita=$("#VentanaAddVisita");
    addVisita.click(ConfirmAddVisita);
    hideAddVisita=$("#NotAddVisita");
    hideAddVisita.click(HideConfirmAddProducto);

    //*****************************************************
    //** VARIABLES DE LA PESTAÑA QUEJAS **
    //*****************************************************
    var verQuejas, addQuejas, hideAddQuejas, hideVerQuejas;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS

    verQuejas=$(".VerQuejas");
    verQuejas.click(VerQuejas);
    addQuejas=$("#VentanaAddQuejas");
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
    addRecaudo=$("#VentanaAddRecaudo");
    addRecaudo.click(ConfirmAddRecaudo);
    hideAddRecaudo=$("#NotAddRecaudo");
    hideAddRecaudo.click(HideConfirmAddRecaudo);                          
}


function activadorEventosProductos ()
{
    //*****************************************************
    //** VARIABLES PRINCIPALES DE LA SECCION PRODUCTOS **
    //*****************************************************
    var verProducto, volverProducto;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS

    verProducto=$(".VerProducto");
    verProducto.click(VerProducto);
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


//##################################################################################
//##################################################################################

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DEL MENU VERTICAL DE LOS   *********************
//*************  VENDEDORES                                    *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************



   

//**********************************************************************************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DE ADICIONAR, MODIFICAR,   *********************
//*************  VISUALIZAR, BORRAR Y GENERAR INFORME EN LA    *********************
//*************  OPCION LISTADO DE LOS VENDEDORES              *********************
//**********************************************************************************



function ModVendedor() 
{
    var codigoHTML = '<div class="encabezado2">Modificar Vendedor</div>'+
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
                                      '<td colspan="2" rowspan="9" align="center">'+
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
    activadorEventosVendedores();
}

function VerVendedor()
{
    var codigoHTML = '<div class="encabezado2">Visualizar Vendedor</div>'+
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
                                      '<td colspan="2" rowspan="9" align="center">'+
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
    activadorEventosVendedores();
}


//**********************************************************************************

function seccionPedido()
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
                                '<form action="" method="POST" name="form_buscar_Pedido">'+ 
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
                                              '<input type="submit" value="Buscar" class="button" />'+ 
                                            '</td>'+ 
                                        '</tr> '+ 
                                    '</table>'+ 
                                '</form>'+ 
                                '<br>'+ 
                                '<table class="tbonita" align="center">'+ 
                                  '<tr align="left">'+ 
                                    '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Pedido" class="AdicionarPedido" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReportePedido" /></th>'+ 
                                    '<th>IdPedido</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Cuidad</th>'+ 
                                    '<th>Total</th>'+ 
                                  '</tr>'+ 
                         
                                  '<tr>'+                                     
                                    '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerPedido"/></td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                    '<td>Ingenio Risaralda</td>'+ 
                                    '<td>Carlos Jaramillo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>45000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerPedido"/></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>5000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr>'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerPedido"/></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>5000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerPedido"/></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>5000000</td>'+ 
                                  '</tr>'+ 

                                '</table>'+ 
                            '</div>'+ 
                        
                            '<div id="Cliente" class="tab_content">'+ 
                                '<form action="" method="POST" name="form_buscar_Pedido_cliente">'+ 
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
                                '<table class="tbonita" align="center">'+ 
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
                         
                                  '<tr>'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerPedido"/></td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                    '<td>Ingenio Risaralda</td>'+ 
                                    '<td>Carlos Jaramillo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>45000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerPedido"/></td>'+
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>5000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr>'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerPedido"/></td>'+
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>5000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerPedido"/></td>'+
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
                                '<form action="" method="POST" name="form_buscar_Pedido_cliente">'+ 
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
                                '<table class="tbonita" align="center">'+ 
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
                         
                                  '<tr>'+                                    
                                    '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerPedido" /></td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                    '<td>Ingenio Risaralda</td>'+ 
                                    '<td>Carlos Jaramillo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>45000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerPedido" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>5000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr>'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerPedido" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>5000000</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerPedido" /></td>'+ 
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
    $(".menu-vertical li a#pedidoVendedor").addClass("active");
    IniciarTabers();
    $('#date_field').datepick({yearRange: '1980:2050'});
    $('#date_field2').datepick({yearRange: '1980:2050'});
    $('#date_field3').datepick({yearRange: '1980:2050'});
    $('#date_field4').datepick({yearRange: '1980:2050'});
    $('#date_field5').datepick({yearRange: '1980:2050'});
    $('#date_field6').datepick({yearRange: '1980:2050'});
    activadorEventosVendedores();
}

//**********************************************************************************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DE ADICIONAR, MODIFICAR,   *********************
//*************  VISUALIZAR, BORRAR Y GENERAR INFORME EN LA    *********************
//*************  OPCION VENTAS DE LOS VENDEDORES               *********************
//**********************************************************************************

function AddPedido()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Pedido</div>'+
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
                                  '<input type="reset" value="Volver" class="button" id="volverPedido"/>'+
                                  '<input type="submit" value="Guardar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table>'+     
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabersAnidados();
    activadorEventosVendedores();
}

function ConfirmAddProducto()
{
    var codigoHTML='<div class="encabezado2">Adicionar Pedido</div>'+
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
                            'DATOS DEL Pedido:'+
                          '</th>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Precio de Pedido</th>'+
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
    activadorEventosVendedores();
}

function HideConfirmAddProducto()
{
    $("#overAddProducto").css({display: "none"});
    $("#fadeAddProducto").css({display: "none"});
    activadorEventosVendedores();  
}

function ModPedido()
{
    var codigoHTML = '<div class="encabezado2">Modificar Pedido</div>'+
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
                                  '<input type="reset" value="Volver" class="button" id="volverPedido"/>'+
                                  '<input type="submit" value="Guardar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table>'+     
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabersAnidados();
    activadorEventosVendedores();
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
                        '<form action="" method="POST" name="form_buscar_venta">'+
                            '<table align="center" border="0" align="left">'+
                                '<tr>'+                                   
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
                        '<table class="tbonita" align="center">'+
                          '<tr align="left">'+
                            '<th colspan="1"><img src="images/b_insrow.png" title="agregar" class="VerVisita"/></th>'+
                            '<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
                            '<th>IdAct.</th>'+
                            '<th>Fecha</th>'+
                            '<th>Cliente</th>'+
                            '<th>Departamento</th>'+
                            '<th>Cuidad</th>'+
                            '<th>Tema</th>'+
                          '</tr>'+
                 
                          '<tr>'+                            
                            '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerVisita" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                          '<tr class="even">'+                            
                            '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerVisita" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                          '<tr>'+                            
                            '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerVisita" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                          '<tr class="even">'+                           
                            '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerVisita"/></td>'+
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
    activadorEventosVendedores();
    activadorEventosClientes();
}

//**********************************************************************************

function seccionViaticos()
{
    var codigoHTML = '<div class="encabezado2">Listado de Viáticos</div>'+
                     '<div class="tabla">'+
                        '<form action="" method="POST" name="form_buscar_Pedido">'+
                            '<table align="center" border="0" align="left">'+
                                '<tr>'+                                    
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
                                      '<input type="button" value="Buscar" class="button"/>'+
                                    '</td>'+
                                '</tr>'+
                            '</table>'+
                        '</form>'+
                        '<br>'+
                        '<table class="tbonita" align="center">'+
                          '<tr align="left">'+
                            '<th colspan="1"><img src="images/b_insrow.png" title="agregar" class="AdicionarViatico" /></th>'+
                            '<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento" class="reporteViatico" /></th>'+
                            '<th>IdViatico</th>'+
                            '<th>Fecha</th>'+
                            '<th>Departamento</th>'+
                            '<th>Ciudad</th>'+
                            '<th>Concepto</th>'+
                            '<th>Valor</th>'+
                          '</tr>'+
                 
                          '<tr>'+                            
                            '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerViatico" /></td>'+                            
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>Hospedaje</td>'+
                            '<td>60000</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerViatico" /></td>'+  
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>Hospedaje</td>'+
                            '<td>60000</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerViatico" /></td>'+  
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>Hospedaje</td>'+
                            '<td>60000</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td colspan="2"><img src="images/b_search.png" title="Visualizar" class="VerViatico" /></td>'+  
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>Hospedaje</td>'+
                            '<td>60000</td>'+
                          '</tr>'+

                        '</table>'+ 
                        '<br>'+
                        '<br>'+
                        '<table>'+
                            '<tr>'+
                                  '<th colspan="2" align="right" style="padding-right:5px; font-weight: bold; font-size: 20px;">TOTAL VIÁTICOS</th>'+
                                  '<td colspan="2"><input type="text" name="totalSinIva" value="1000000" readonly="readonly" style="padding-right:5px; font-weight: bold; font-size: 20px;"/></td>'+
                            '</tr>'+
                        '</table>'+  
                    '</div>';

    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#viaticosVendedor").addClass("active");
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field10').datepick({yearRange: '1980:2050'});
    activadorEventosVendedores();
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
    var codigoHTML = '<div class="encabezado2">Listado De Clientes</div>'+
                     '<div class="tabla">'+
                        '<form action="" method="POST" name="form_adicionar_visita">'+
                            '<table align="center" border="0" >'+
                                '<tr>'+ 
                                    '<th align="right" style="padding-right:5px;">NIT</th>'+
                                       '<td>'+                                        
                                        '<input type="text" name="nit_cliente" value="" >'+
                                       '</td>'+
                                    '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                       '<td>'+
                                        '<select name="sDepartamento" style="width:160px;">'+
                                            '<option value="">Antioquia</option>'+
                                            '<option value="">Cundinamarca</option>'+
                                            '<option value="">Risaralda</option>'+
                                            '<option value="">Quindio</option>'+
                                            '<option value="">Atlantico</option>'+
                                        '</select>'+ 
                                    '</td>'+  

                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                       '<td>'+
                                        '<select name="sCiudad" style="width:160px;">'+
                                            '<option value="">Medellin</option>'+
                                            '<option value="">Bogotá</option>'+
                                            '<option value="">Pereira</option>'+
                                            '<option value="">Armenia</option>'+
                                            '<option value="">Barranquilla</option>'+
                                        '</select>'+ 
                                    '</td>'+ 
                                '</tr>'+

                                '<tr>'+                                
                                    '<td colspan="6" align="center"><br>'+
                                      '<input type="button" value="Buscar" class="button" />'+
                                    '</td>'+
                                '</tr>'+
                            '</table>'+
                        '</form>'+
                        '<br>'+


                        '<table align="center" border="0"  width="800" class="tbonita">'+
                          '<tr align="left">'+
                            '<th colspan="1"><img src="images/b_insrow.png" title="agregar" class="AdicionarCliente" /></th>'+
                            '<th colspan="1"><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
                            '<th>NIT</th>'+
                            '<th>Razón Social</th>'+
                            '<th>Departamento</th>'+
                            '<th>Ciudad</th>'+
                            '<th>Dirección</th>'+
                            '<th>Telefono</th>'+
                          '</tr>'+
                 
                          '<tr>'+                            
                            '<td colspan="2" ><img src="images/b_search.png" title="Visualizar"/ class="VerCliente"></td>'+                            
                            '<td>12125</td>'+
                            '<td>Suzuki</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>cr 52 N 23-32</td>'+
                            '<td>3218590</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                           '<td colspan="2" ><img src="images/b_search.png" title="Visualizar"/ class="VerCliente"></td>'+
                            '<td>12125</td>'+
                            '<td>Suzuki</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>cr 52 N 23-32</td>'+
                            '<td>3218590</td>'+
                          '</tr>'+

                          '<tr>'+
                           '<td colspan="2" ><img src="images/b_search.png" title="Visualizar"/ class="VerCliente"></td>'+
                            '<td>12125</td>'+
                            '<td>Suzuki</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>cr 52 N 23-32</td>'+
                            '<td>3218590</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                           '<td colspan="2"><img src="images/b_search.png" title="Visualizar"/ class="VerCliente"></td>'+
                            '<td>12125</td>'+
                            '<td>Suzuki</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>cr 52 N 23-32</td>'+
                            '<td>3218590</td>'+
                          '</tr>'+


                          '<tr>'+
                            '<td colspan="2" ><img src="images/b_search.png" title="Visualizar"/ class="VerCliente"></td>'+
                            '<td>12125</td>'+
                            '<td>Suzuki</td>'+
                            '<td>Antioquia</td>'+
                            '<td>Medellin</td>'+
                            '<td>cr 52 N 23-32</td>'+
                            '<td>3218590</td>'+
                          '</tr>'+

                        '</table>'+ 
                        '<br>'+
                        '<br>'+
                        
                    '</div>';

    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");    
    activadorEventosClientes();  
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
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
   var codigoHTML = '<div class="encabezado2">Listado Productos</div>'+
                     '<div class="tabla">'+
                        '<form action="" method="POST" name="form_buscar_producto">'+
                            '<table align="center" border="0" >'+
                                '<tr>'+                                    
                                    '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+ 
                                       '<td>'+
                                        '<select name="tipoCuenta" style="width:177px">'+ 
                                            '<option value="LI">Linea Industrial</option>'+ 
                                            '<option value="LM">Linea Motociclista</option>'+ 
                                            '<option value="LH">Linea Hogar</option>'+ 
                                            '<option value="LF">Linea Infantil</option>'+ 
                                          '</select>'+ 
                                    '</td>'+  

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
                                    '<td colspan="6" align="center"><br>'+
                                      '<input type="submit" value="Buscar" class="button"  />'+
                                    '</td>'+
                                '</tr>'+
                            '</table>'+
                        '</form>'+
                        '<br>'+


                        '<table align="center" border="0"  width="800" class="tbonita" ">'+
                          '<tr align="left">'+                            
                            '<th border="1"><img src="images/PDF-05.png" title="Crear Documento" /></th>'+
                            '<th>Codigo</th>'+
                            '<th>Nombre</th>'+
                            '<th>Cantidad</th>'+
                            '<th>Color</th>'+
                            '<th>Talla</th>'+
                            '<th>Precio C/U</th>'+
                          '</tr>'+
                 
                          '<tr>'+
                            
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerProducto"/ ></td>'+
                            
                            '<td>12125</td>'+
                            '<td>vestido Motociclista</td>'+
                            '<td>50</td>'+
                            '<td>Amarillo</td>'+
                            '<td>XL</td>'+
                            '<td>50000</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            
                            '<td ><img src="images/b_search.png" title="Visualizar" class="VerProducto" /></td>'+
                            
                            '<td>12125</td>'+
                            '<td>vestido Motociclista</td>'+
                            '<td>50</td>'+
                            '<td>Amarillo</td>'+
                            '<td>L</td>'+
                            '<td>40000</td>'+
                          '</tr>'+

                          '<tr>'+
                            
                            '<td ><img src="images/b_search.png" title="Visualizar" class="VerProducto" /></td>'+
                            
                            '<td>12125</td>'+
                            '<td>vestido Motociclista</td>'+
                            '<td>50</td>'+
                            '<td>Amarillo</td>'+
                            '<td>XL</td>'+
                            '<td>50000</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                           
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerProducto" /></td>'+
                            
                            '<td>12125</td>'+
                            '<td>vestido Motociclista</td>'+
                            '<td>50</td>'+
                            '<td>Amarillo</td>'+
                            '<td>XL</td>'+
                            '<td>50000</td>'+
                          '</tr>'+


                          '<tr>'+
                            
                            '<td><img src="images/b_search.png" title="Visualizar" class="VerProducto" /></td>'+
                            
                            '<td>12125</td>'+
                            '<td>vestido Motociclista</td>'+
                            '<td>50</td>'+
                            '<td>Amarillo</td>'+
                            '<td>XL</td>'+
                            '<td>50000</td>'+
                          '</tr>'+

                        '</table>'+ 
                        '<br>'+
                        '<br>'+
                        
                    '</div>';
                        
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
    activadorEventosProductos();
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
     

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
   var codigoHTML = '<div class="encabezado2">Perfil</div>'+
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
                                      '<td colspan="2" rowspan="9" align="center">'+
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
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Ingreso</th>'+
                                    '<td><input type="text" name="fecha" id="date_field13" value="01/01/2012" readonly="readonly"/></td>'+
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
    activadorEventosVendedores();
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


function AgrViatico()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Viatico</div>'+
                     '<div class="tabla">'+                                           
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input type="text" name="fecha_viatico" id="date_field15" value="" />'+                                      
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                              '<br>'+
                              '<br>'+
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Concepto</th>'+
                                    '<td>'+
                                        '<select name="tipoActividad" style="width:160px;">'+
                                            '<option value="">Transporte</option>'+
                                            '<option value="">Alimentación</option>'+
                                            '<option value="">Urbanos</option>'+
                                            '<option value="">Hospedaje</option>'+
                                            '<option value="">Otros</option>'+
                                        '</select>'+                                      
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Valor $</th>'+
                                    '<td>'+
                                      '<input type="text" name="vlr" value="" readonly="readonly"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                    '<td>'+
                                      '<input type="text" name="ciud" value="" readonly="readonly"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                    '<td>'+
                                      '<input type="text" name="depto" value="" readonly="readonly"/>'+
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
                                  '<input type="submit" value="Guardar" class="button" />'+
                              '</td>'+
                            '</tr>'+
                          '</table>'+     
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    $('#date_field15').datepick({yearRange: '1980:2050'});
    activadorEventosVendedores();
}


function VerViatico()
{
    var codigoHTML = '<div class="encabezado2">Visualizar Viatico</div>'+
                     '<div class="tabla">'+                                           
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha</th>'+
                                    '<td>'+
                                      '<input type="text" name="fecha_viatico" value="15/06/2012" readonly="readonly"/>'+                                      
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                              '<br>'+
                              '<br>'+
                              '<table align="center">'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Concepto</th>'+
                                    '<td>'+
                                        '<select name="tipoActividad" style="width:160px;" readonly="readonly">'+
                                            '<option value="">Transporte</option>'+
                                            '<option value="">Alimentación</option>'+
                                            '<option value="">Urbanos</option>'+
                                            '<option value="">Hospedaje</option>'+
                                            '<option value="">Otros</option>'+
                                        '</select>'+                                      
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Valor $</th>'+
                                    '<td>'+
                                      '<input type="text" name="vlr" value="50000" readonly="readonly" readonly="readonly"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                    '<td>'+
                                      '<input type="text" name="ciud" value="Pereira" readonly="readonly" readonly="readonly"/>'+
                                    '</td>'+
                                    '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                    '<td>'+
                                      '<input type="text" name="depto" value="Risaralda" readonly="readonly" readonly="readonly"/>'+
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


function AddCliente()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Cliente</div>'+
                        '<div class="tabla">'+
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
                                    '<td><input type="text" name="fecha_Icliente" id="date_field16" value="" size="20"/></td>'+                                                                   
                                    '<th align="right" style="padding-right:10px;">NIT</th>'+
                                    '<td><input type="text" name="nit" value="" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombres_cliente" value="" size="20"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellido_cliente" value="" size="20"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Razón Social</th>'+
                                    '<td><input type="text" name="Razon_social" value="" size="20" maxlength="35" /></td>'+                                  
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion" value="" size="20" maxlength="35" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                       '<td>'+
                                        '<select name="sDepartamento" style="width:160px;">'+
                                            '<option value="">Antioquia</option>'+
                                            '<option value="">Cundinamarca</option>'+
                                            '<option value="">Risaralda</option>'+
                                            '<option value="">Quindio</option>'+
                                            '<option value="">Atlantico</option>'+
                                        '</select>'+ 
                                    '</td>'+  

                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                       '<td>'+
                                        '<select name="sCiudad" style="width:160px;">'+
                                            '<option value="">Medellin</option>'+
                                            '<option value="">Bogotá</option>'+
                                            '<option value="">Pereira</option>'+
                                            '<option value="">Armenia</option>'+
                                            '<option value="">Barranquilla</option>'+
                                        '</select>'+ 
                                    '</td>'+ 
                                  '</tr>'+                                 
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono_cliente" value="" size="20" maxlength="12" /></td>'+                                 
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular_cliente" value="" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">E-mail</th>'+
                                    '<td><input type="text" name="correo_cliente" value="" size="20" maxlength="12" /></td>'+                                                                                                                                                          
                                 '</tr>'+                                 
                              '</table>'+                                                           
                            '</div>'+
                            '<div id="zona" class="tab_content">'+
                            '<table align="center" border="0" align="left">'+                                  
                                  '<tr>'+
                                    '<th align="right" style="padding-right:10px;">Latitud</th>'+
                                    '<td><input type="text" name="lalitudC" value="4.81333" size="15" maxlength="15"/ ></td>'+                                                                   
                                    '<th align="right" style="padding-right:10px;">Longitud</th>'+
                                    '<td><input type="text" name="longitudC" value="-75.69611" size="15" maxlength="15" /></td>'+                                   
                                  '</tr>'+                                                                    
                                  '<tr>'+
                                     '<th align="right" style="padding-right:5px;">Pais</th>'+
                                       '<td>'+
                                        '<select name="sCiudad" style="width:160px;">'+
                                            '<option value="">Colombia</option>'+
                                            '<option value="">Argentina</option>'+
                                            '<option value="">Chile</option>'+
                                            '<option value="">Mexico</option>'+
                                            '<option value="">Brasil</option>'+
                                        '</select>'+ 
                                    '</td>'+ 
                                    '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                       '<td>'+
                                        '<select name="sDepartamento" style="width:160px;">'+
                                            '<option value="">Antioquia</option>'+
                                            '<option value="">Cundinamarca</option>'+
                                            '<option value="">Risaralda</option>'+
                                            '<option value="">Quindio</option>'+
                                            '<option value="">Atlantico</option>'+
                                        '</select>'+ 
                                    '</td>'+  

                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                       '<td>'+
                                        '<select name="sCiudad" style="width:160px;">'+
                                            '<option value="">Medellin</option>'+
                                            '<option value="">Bogotá</option>'+
                                            '<option value="">Pereira</option>'+
                                            '<option value="">Armenia</option>'+
                                            '<option value="">Barranquilla</option>'+
                                        '</select>'+ 
                                    '</td>'+ 
                                  '</tr>'+
                                  '<tr>'+                                   
                                    '<td colspan="6" align="center"><br>'+
                                      '<input type="submit" value="Ubicar" class="button" />'+
                                    '</td>'+
                                  '</tr>'+                                                                                                                                                                      
                              '</table>'+
                              '<div class="Ubicacion-Geografica">'+
                                '<img src="images/mapaUbicacion.png" />'+
                              '</div>'+                                              
                            '</div>'+                                                                                                               
                            '</div>'+                            
                          '</div>'+
                          '</div>'+                         
                          '<table align="center">'+                                
                                  '<tr>'+                                    
                                   '<td align="center">'+
                                    '<input type="button" value="Volver" class="button" id="volverCliente">'+
                                    '<input type="button" value="Registrar" class="button">'+
                                   '</td>'+                             
                                 '</tr>'+
                            '</table>'+    
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML); 
    $(".Ubicacion-Geografica").css({width: 840});   
    $('#date_field16').datepick({yearRange: '1980:2050'});
    IniciarTabers();  
    activadorEventosClientes();
}


function VerCliente()
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
                                    '<td><input type="text" name="fecha_Icliente" id="date_field16" value="05/09/2012" size="10"/ readonly="readonly"></td>'+                                                                   
                                    '<th align="right" style="padding-right:10px;">NIT</th>'+
                                    '<td><input type="text" name="nit" value="125-1523" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombres_cliente" value="Juan" size="20" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellido_cliente" value="Castaño" size="20" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Razón Social</th>'+
                                    '<td><input type="text" name="Razon_social" value="Suzuki s.a" size="20" maxlength="35" readonly="readonly" /></td>'+                                  
                                    '<th align="right" style="padding-right:5px;">Dirección</th>'+
                                    '<td><input type="text" name="direccion" value="Cr-7 #32-65" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                    '<td><input type="text" name="depto_cliente" value="Risaralda" size="20" maxlength="15" readonly="readonly" /></td>'+                                 
                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                    '<td><input type="text" name="ciudad_cliente" value="Pereira" size="20" maxlength="15" readonly="readonly" /></td>'+
                                  '</tr>'+
                                  
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Teléfono</th>'+
                                    '<td><input type="text" name="telefono_cliente" value="3219080" size="20" maxlength="12"  readonly="readonly"/></td>'+                                 
                                    '<th align="right" style="padding-right:5px;">Celular</th>'+
                                    '<td><input type="text" name="celular_cliente" value="3153631519" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">E-mail</th>'+
                                    '<td><input type="text" name="correo_cliente" value="juan_01@hotmail.com" size="20" maxlength="12" readonly="readonly"/></td>'+                                                                                                               
                                 '</tr>'+                                 
                              '</table>'+
                            '</div>'+
                            '<div id="zona" class="tab_content">'+
                            '<table align="center" border="0" align="left">'+                                  
                                  '<tr>'+
                                    '<th align="right" style="padding-right:10px;">Latitud</th>'+
                                    '<td><input type="text" name="lalitudC" value="4.81333" size="15" maxlength="15"/ ></td>'+                                                                   
                                    '<th align="right" style="padding-right:10px;">Longitud</th>'+
                                    '<td><input type="text" name="longitudC" value="-75.69611" size="15" maxlength="15" /></td>'+                                   
                                  '</tr>'+                                                                    
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Pais</th>'+
                                    '<td><input type="text" name="pais" value="Colombia" size="15" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Departamento</th>'+
                                    '<td><input type="text" name="deptoC" value="Risaralda" size="15" maxlength="35" readonly="readonly" /></td>'+                                  
                                    '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                                    '<td><input type="text" name="ciudadC" value="Pereira" size="15" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+                                                                                                                                                                      
                              '</table>'+
                              '<br>'+
                              '<div class="Ubicacion-Geografica">'+
                                '<img src="images/mapaUbicacion.png"/>'+
                              '</div>'+                                              
                            '</div>'+

                            '<div id="actividad" class="tab_content">'+
                              '<ul class="tabs2">'+
                                '<li><a href="#visitas">Visitas</a></li>'+
                                '<li><a href="#quejas">Quejas</a></li>'+
                                '<li><a href="#recaudo">Recaudos</a></li>'+
                              '</ul>'+
                              '<div class="tab_container2">'+
                                '<div id="visitas" class="tab_content2">'+
                                    '<form action="" method="POST" name="form_buscar_visita_cliente">'+ 
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

                                        '<tr>'+ 
                                            '<td colspan="4" align="center"><br>'+ 
                                              '<input type="submit" value="Buscar" class="button" />'+ 
                                            '</td>'+ 
                                        '</tr> '+ 
                                    '</table>'+ 
                                '</form>'+
                                '<br>'+  
                                '<table class="tbonita" align="center" width="700">'+ 
                                  '<tr align="left">'+ 
                                    '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Visita" id="VentanaAddVisita" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReporteVisitaCliente" /></th>'+ 
                                    '<th>IdVisita</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Cuidad</th>'+ 
                                    '<th>Asunto</th>'+ 
                                  '</tr>'+ 
                         
                                  '<tr>'+ 
                                    
                                    '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerVisita" align="center" /></td>'+ 
                                    
                                    '<td align="left">11111</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                    '<td>Ingenio Risaralda</td>'+ 
                                    '<td>Carlos Jaramillo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>Visita por....</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                   '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerVisita" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>Visita por....</td>'+ 
                                  '</tr>'+ 

                                  '<tr>'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerVisita" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>Visita por....</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerPedido" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>Visita por....</td>'+ 
                                  '</tr>'+ 
                                '</table>'+                                   
                                '</div>'+
                                
                                '<div id="quejas" class="tab_content2">'+
                                    '<form action="" method="POST" name="form_buscar_quejas_cliente">'+ 
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
                                    '</table>'+ 
                                '</form>'+ 
                                '<br>'+                                 
                                '<table class="tbonita" align="center" width="700">'+ 
                                  '<tr align="left">'+ 
                                    '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Queja" id="VentanaAddQuejas" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReporteQuejasCliente" /></th>'+ 
                                    '<th>IdQueja</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Cuidad</th>'+ 
                                    '<th>Asunto</th>'+ 
                                  '</tr>'+ 
                         
                                  '<tr>'+ 
                                    
                                    '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerQuejas" align="center" /></td>'+ 
                                    
                                    '<td align="left">11111</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                    '<td>Ingenio Risaralda</td>'+ 
                                    '<td>Carlos Jaramillo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>Visita por....</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                   '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerQuejas" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>Visita por....</td>'+ 
                                  '</tr>'+ 

                                  '<tr>'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerQuejas" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>Visita por....</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerQuejas" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>Visita por....</td>'+ 
                                  '</tr>'+ 
                                '</table>'+
                                '</div>'+ 
                                '<div id="recaudo" class="tab_content2">'+
                                    '<form action="" method="POST" name="form_buscar_recaudo_cliente">'+ 
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
                                    '</table>'+ 
                                '</form>'+ 
                                '<br>'+ 
                                '<table class="tbonita" align="center" width="700">'+ 
                                  '<tr align="left">'+ 
                                    '<th colspan="1"><img src="images/b_insrow.png" title="Adicionar Recaudo" id="VentanaAddRecaudo" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReporteRecaudoCliente" /></th>'+ 
                                    '<th>IdRecaudo</th>'+ 
                                    '<th>Fecha</th>'+ 
                                    '<th>Cliente</th>'+ 
                                    '<th>Vendedor</th>'+ 
                                    '<th>Cuidad</th>'+ 
                                    '<th>Asunto</th>'+ 
                                  '</tr>'+ 
                         
                                  '<tr>'+ 
                                    
                                    '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerRecaudo" align="center" /></td>'+ 
                                    
                                    '<td align="left">11111</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                    '<td>Ingenio Risaralda</td>'+ 
                                    '<td>Carlos Jaramillo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>Visita por....</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                   '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerRecaudo" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>Visita por....</td>'+ 
                                  '</tr>'+ 

                                  '<tr>'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerRecaudo" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>Visita por....</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td colspan="2"><img src="images/b_search.png" title="Ampliar" class="VerRecaudo" /></td>'+ 
                                    '<td>11112</td>'+ 
                                    '<td>16/06/2012</td>'+ 
                                    '<td>InduMotos</td>'+ 
                                    '<td>Sandra Giraldo</td>'+ 
                                    '<td>Medellin</td>'+ 
                                    '<td>Visita por....</td>'+ 
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



    $("#datos").html(codigoHTML);
    $(".Ubicacion-Geografica").css({width: 840});
    IniciarTabersAnidados();
    $('#date_field17').datepick({yearRange: '1980:2050'});
    $('#date_field18').datepick({yearRange: '1980:2050'});
    $('#date_field19').datepick({yearRange: '1980:2050'});
    $('#date_field20').datepick({yearRange: '1980:2050'});
    $('#date_field21').datepick({yearRange: '1980:2050'});
    $('#date_field22').datepick({yearRange: '1980:2050'});
    activadorEventosClientes();
}



////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



function ConfirmAddVisita()
{
    var codigoHTML='<div class="encabezado2">Adicionar Visita</div>'+
                    '<br>'+
                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">IdVisita</th>'+
                          '<td>'+
                            '<input type="text" name="id_vis" value="11111" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input type="text" name="fecha_vis" value="18/06/2012" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="cliente_vis" value="Ingenio Risaralda" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad" value="Carlos Jaramillo" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad_vis" value="Pereira" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<input type="text" name="depto_vis" value="Risaralda" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="nit_vis" value="125-1523" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="3219080" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td colspan="4" align="left">'+
                              'Descripcion:<br>'+
                              '<textarea name="mensaje" cols="67" rows="6"></textarea>'+
                            '</td>'+
                        '</tr>'+                              
                    '</table>'+                

                    '<br>'+
                    '<table align="center">'+
                      '<tr>'+
                        '<td colspan="4" align="center">'+
                            '<input type="button" value="Aceptar" class="button" id="OkAddVisita"/>'+
                            '<input type="button" value="cancelar" class="button" id="NotAddVisita"/>'+
                        '</td>'+
                      '</tr>'+
                    '</table>'+               
                '</div>';

    $("#overAddProducto").css({display: "block"});
    $("#overAddProducto").html(codigoHTML);
    $("#fadeAddProducto").css({display: "block"});
    activadorEventosClientes();
}

function HideConfirmAddVisita()
{
    $("#overAddProducto").css({display: "none"});
    $("#fadeAddProducto").css({display: "none"});
    activadorEventosClientes();  
}


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////



function VerVisita()
{
    var codigoHTML='<div class="encabezado2">Visualizar Visita</div>'+
                    '<br>'+
                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">IdVisita</th>'+
                          '<td>'+
                            '<input type="text" name="id_vis" value="11111" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input type="text" name="fecha_vis" value="18/06/2012" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="cliente_vis" value="Ingenio Risaralda" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad" value="Carlos Jaramillo" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad_vis" value="Pereira" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<input type="text" name="depto_vis" value="Risaralda" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="nit_vis" value="125-1523" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="3219080" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td colspan="4" align="left">'+
                              'Descripcion:<br>'+
                              '<textarea name="mensaje" cols="67" rows="6"  readonly="readonly">El cliente desea saber que productos estan en promocion</textarea>'+
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


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

function ConfirmAddQuejas()
{
    var codigoHTML='<div class="encabezado2">Adicionar Queja</div>'+
                    '<br>'+
                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">IdQuejas</th>'+
                          '<td>'+
                            '<input type="text" name="id_vis" value="11111" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input type="text" name="fecha_vis" value="18/06/2012" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="cliente_vis" value="Ingenio Risaralda" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad" value="Carlos Jaramillo" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad_vis" value="Pereira" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<input type="text" name="depto_vis" value="Risaralda" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="nit_vis" value="125-1523" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="3219080" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" colspan="2" style="padding-right:5px;">estado cliente</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value=" No Debe" />'+
                          '</td>'+
                          '</tr>'+
                        '<tr>'+
                            '<td colspan="4" align="left">'+
                              'Queja o Reclamo:<br>'+
                              '<textarea name="mensaje" cols="67" rows="6"></textarea>'+
                            '</td>'+
                        '</tr>'+                              
                    '</table>'+                

                    '<br>'+
                    '<table align="center">'+
                      '<tr>'+
                        '<td colspan="4" align="center">'+
                            '<input type="button" value="Aceptar" class="button" id="OkAddQuejas"/>'+
                            '<input type="button" value="cancelar" class="button" id="NotAddQuejas"/>'+
                        '</td>'+
                      '</tr>'+
                    '</table>'+               
                '</div>';

    $("#overAddProducto").css({display: "block"});
    $("#overAddProducto").html(codigoHTML);
    $("#fadeAddProducto").css({display: "block"});
    activadorEventosClientes();
}

function HideConfirmAddQuejas()
{
    $("#overAddProducto").css({display: "none"});
    $("#fadeAddProducto").css({display: "none"});
    activadorEventosClientes();  
}

function VerQuejas()
{
    var codigoHTML='<div class="encabezado2">Visualizar Quejas</div>'+
                    '<br>'+
                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">IdQueja</th>'+
                          '<td>'+
                            '<input type="text" name="id_vis" value="11111" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input type="text" name="fecha_vis" value="18/06/2012" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="cliente_vis" value="Ingenio Risaralda" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad" value="Carlos Jaramillo" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad_vis" value="Pereira" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<input type="text" name="depto_vis" value="Risaralda" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="nit_vis" value="125-1523" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="3219080" readonly="readonly"/>'+
                          '</td>'+
                          '<tr>'+
                          '<th align="right" colspan="2" style="padding-right:5px;">estado cliente</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="debe" readonly="readonly"/>'+
                          '</td>'+
                          '</tr>'+
                        '</tr>'+
                        '<tr>'+
                            '<td colspan="4" align="left">'+
                              'Queja o Reclamo:<br>'+
                              '<textarea name="mensaje" cols="67" rows="6"  readonly="readonly">El cliente desea saber que productos estan en promocion</textarea>'+
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
    var codigoHTML='<div class="encabezado2">Adicionar Recaudo</div>'+
                    '<br>'+
                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">IdRecaudo</th>'+
                          '<td>'+
                            '<input type="text" name="id_vis" value="11111" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input type="text" name="fecha_vis" value="18/06/2012" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="cliente_vis" value="Ingenio Risaralda" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad" value="Carlos Jaramillo" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad_vis" value="Pereira" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<input type="text" name="depto_vis" value="Risaralda" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="nit_vis" value="125-1523" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="3219080" readonly="readonly"/>'+
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
                        '<tr>'+
                            '<td colspan="4" align="left">'+
                              'Comentario:<br>'+
                              '<textarea name="mensaje" cols="67" rows="6"></textarea>'+
                            '</td>'+
                        '</tr>'+                              
                    '</table>'+                

                    '<br>'+
                    '<table align="center">'+
                      '<tr>'+
                        '<td colspan="4" align="center">'+
                            '<input type="button" value="Aceptar" class="button" id="OkAddRecaudo"/>'+
                            '<input type="button" value="cancelar" class="button" id="NotAddRecaudo"/>'+
                        '</td>'+
                      '</tr>'+
                    '</table>'+               
                '</div>';

    $("#overAddProducto").css({display: "block"});
    $("#overAddProducto").html(codigoHTML);
    $("#fadeAddProducto").css({display: "block"});

    activadorEventosClientes();
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
    var codigoHTML='<div class="encabezado2">Visualizar Recaudo</div>'+
                    '<br>'+
                    '<table align="center">'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">IdRecaudo</th>'+
                          '<td>'+
                            '<input type="text" name="id_vis" value="11111" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Fecha</th>'+
                          '<td>'+
                            '<input type="text" name="fecha_vis" value="18/06/2012" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Cliente</th>'+
                          '<td>'+
                            '<input type="text" name="cliente_vis" value="Ingenio Risaralda" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Vendedor</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad" value="Carlos Jaramillo" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+
                          '<td>'+
                            '<input type="text" name="ciudad_vis" value="Pereira" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Departamento</th>'+
                          '<td>'+
                            '<input type="text" name="depto_vis" value="Risaralda" readonly="readonly"/>'+
                          '</td>'+
                        '</tr>'+
                        '<tr>'+
                          '<th align="right" style="padding-right:5px;">NIT</th>'+
                          '<td>'+
                            '<input type="text" name="nit_vis" value="125-1523" readonly="readonly"/>'+
                          '</td>'+
                          '<th align="right" style="padding-right:5px;">Telefono</th>'+
                          '<td>'+
                            '<input type="text" name="telefono_vis" value="3219080" readonly="readonly"/>'+
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
                        '<tr>'+
                            '<td colspan="4" align="left">'+
                              'Comentario:<br>'+
                              '<textarea name="mensaje" cols="67" rows="6"  readonly="readonly">El cliente desea saber que productos estan en promocion</textarea>'+
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

function VerProducto()
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
                            '<td><input type="text" name="id_producto" value="12345" size="20"/ readonly="readonly"></td>'+                                                                   
                            '<th align="right" style="padding-right:10px;">Nombre</th>'+
                            '<td><input type="text" name="nombre_producto" value="Carpa" size="20" maxlength="35" readonly="readonly"/></td>'+
                          '</tr>'+
                          '<tr>'+
                            '<th align="right" style="padding-right:5px;">Linea de Producción</th>'+
                            '<td><input type="text" name="linea_produccion" value="Industrial" size="20" readonly="readonly"/></td>'+
                            '<th align="right" style="padding-right:5px;">Cantidad</th>'+
                            '<td><input type="text" name="cantidad_producto" value="50" size="20" readonly="readonly"/></td>'+
                          '</tr>'+
                          '<tr>'+
                            '<th align="right" style="padding-right:5px;">Material</th>'+
                            '<td><input type="text" name="material_producto" value="Econoflex" size="20" maxlength="15" readonly="readonly" /></td>'+                                  
                            '<th align="right" style="padding-right:5px;">Color</th>'+
                            '<td><input type="text" name="color_producto" value="Negro" size="20" maxlength="15" readonly="readonly"/></td>'+
                          '</tr>'+
                          '<tr>'+
                            '<th align="right" style="padding-right:5px;">Talla</th>'+
                            '<td><input type="text" name="talla_producto" value="XL" size="20" maxlength="10" readonly="readonly" /></td>'+                                 
                            '<th align="right" style="padding-right:5px;">Precio $</th>'+
                            '<td><input type="text" name="precio_producto" value="75000" size="20" maxlength="15" readonly="readonly" /></td>'+
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

