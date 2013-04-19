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
    activadorEventosMenuPrincipal();
    menuVendedores();
    //$(".nav .menu li a#Vendedores").addClass("active");
    
}

//#&&#&#&#&&#&#&&$&$&&%&%&&%&%/%/&/&%&&$&$&$&%$%#%#%##%%#%#%#&&&"%&"%%#%#&%$$&$&&$&$&$
//#&&#&#&#&&#&#&&$&$&&%&%&&%&%/%/&/&%&&$&$&$&%$%#%#%##%%#%#%#&&&"%&"%%#%#&%$$&$&&$&$&$
// 						Ley de insolvencia económica
//#&&#&#&#&&#&#&&$&$&&%&%&&%&%/%/&/&%&&$&$&$&%$%#%#%##%%#%#%#&&&"%&"%%#%#&%$$&$&&$&$&$
//#&&#&#&#&&#&#&&$&$&&%&%&&%&%/%/&/&%&&$&$&$&%$%#%#%##%%#%#%#&&&"%&"%%#%#&%$$&$&&$&$&$

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE ACTIVA LOS EVENTOS PRINCIPALES    *********************
//*************  DE LA SECCION VENDEDORES                      *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

function activadorEventosMenuPrincipal()
{
    var vendedores;
    vendedores=$("#Vendedores");
    vendedores.click(menuVendedores);
    
    var clientes;
    clientes=$("#Clientes");
    clientes.click(menuClientes);
    
    var productos;
    productos=$("#Productos");
    productos.click(menuProductos);

    var perfil;
    perfil=$("#Perfil");
    perfil.click(menuPerfil);
    
}

function activadorEventosVendedores()
{
   
    // VARIABLES DEL MENU VERTICAL DE LA OPCION VENDEDORES
    var ventasV, listadoV, actividadesV, viaticosV, comisionesV, ubicacionV;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    ventasV=$("#ventasVendedor");
    ventasV.click(seccionVentas);
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
    //** VARIABLES DE LAS OPCIONES DEL LISTADO DE VENDEDORES **
    //*********************************************************
    var adicionarV, modificarV, borrarV, visualizarV, reporteV;
    var volverVendedor, vBorrarV, vHideDelV;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    adicionarV=$("#AVendedor");
    adicionarV.click(AddVendedor);
    modificarV=$(".ModVendedor");
    modificarV.click(ModVendedor);
    
    borrarV=$(".DelVendedor");
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
                        '<li><a href="#ListaVendedores" id="listadoVentas"><img src="images/IconoOpciones.png"/> Listado</a></li>'+
                        '<li><a href="#VentasVendedores" id="ventasVendedor"><img src="images/IconoOpciones.png"/> Ventas</a></li>'+
                        '<li><a href="#Actividades" id="ActividadesVendedor"><img src="images/IconoOpciones.png"/> Actividades</a></li>'+
                        '<li><a href="#ViaticosVendedores" id="viaticosVendedor"><img src="images/IconoOpciones.png"/> Viáticos</a></li>'+
                        '<li><a href="#ComisionesVendedores" id="comisionesVendedor"><img src="images/IconoOpciones.png"/> Comisiones</a></li>'+
                        '<li><a href="#UbicacionVendedores" id="ubicacionVendedor"><img src="images/IconoOpciones.png"/> Ubicación Geográfica</a></li>'+
                    '</ul>';

    $(".content-float-vendedores").html(codigoHTML);
    $(".nav .menu li a").removeClass("active");
    $(".nav .menu li a#Vendedores").addClass("active");
    seccionListado();
    $(".menu-vertical li a#listadoVentas").addClass("active");
    activadorEventosMenuPrincipal();
    activadorEventosVendedores();
    
}

/* +++++++++++++++ SECCION LISTADO DE VENDEDORES ++++++++ */

function seccionListado()
{
    var request = {"ecretaria":"ListadoVendedores"};
	var jsonobj=JSON.stringify(request);
	$.ajax({
		data: {Secretaria:jsonobj},
		dataType:"json",
		url:"ServletSecretaria",
		type:'POST',
		success: function(JSONArray)
		{
			cargarListado(JSONArray);
		},
		error: function(JSONArray)
		{
			alert('Error al conectar con ServletSecretaria');
		}
	});
}

function cargarListado(JSONArray)
{    
    for (var k = 0; k < JSONArray.length; k++)
    {
        if (k==0)
        {
               var codigoHTML =     '<div class="encabezado2">Visualizar Los Vendedores</div>'+
                                    '<div class="tabla">'+
                                       '<ul class="tabs">'+
                                           '<li><a href="#PVendedoresLi">Vendedores</a></li>'+
                                       '</ul>'+                       
                                       '<div class="tab_container">'+                           
                                            '<div id="PVendedoresLi" class="tab_content">'+
                                                '<table class="tbonita">'+
                                                  '<tr align="left">'+           				   
                                                    '<th></th>'+
                                                    '<th>Cedula</th>'+
                                                    '<th>Nombre</th>'+
                                                    '<th>Direccion</th>'+
                                                    '<th>Teléfono</th>'+
                                                    '<th>Celular</th>'+
                                                    '<th>email</th>'+
                                                  '</tr>';                                

               for (var i = 0; i < JSONArray[k].length; i++)
               {
                      if (i % 2 == 0)
                           codigoHTML+=           '<tr>';
                      else
							codigoHTML+=           '<tr class="even">';
							codigoHTML+=                  '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" id="' + JSONArray[k][i].id_usuario + '" /></td>';
							codigoHTML+=                  '<td>' + JSONArray[k][i].cedula_usuario + '</td>';
							codigoHTML+=                  '<td>' + JSONArray[k][i].nombre_usuario + '</td>';  
							codigoHTML+=                  '<td>' + JSONArray[k][i].apellidos_usuario + '</td>'; 
							codigoHTML+=                  '<td>' + JSONArray[k][i].telefono_usuario + '</td>';
							codigoHTML+=                  '<td>' + JSONArray[k][i].celular_usuario + '</td>';
							codigoHTML+=                  '<td>' + JSONArray[k][i].email_usuario + '</td>';
							codigoHTML+=                '</tr>'; 

               }
                codigoHTML+=                    '</table>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>';  
        }
    }
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#listadoVentas").addClass("active");   
    $(".VerVendedor").click(DatosVerVendedor);
    activadorEventosVendedores();
    IniciarTabers();
}  


function DatosVerVendedor()
{
    var id = $(this)[0].id;
    var request = {"ecretaria":"DatosVendedor","Id_vendedor":id};
    var jsonobj = JSON.stringify(request);
    
    $.ajax({
        data: {Secretaria:jsonobj},
        dataType: 'json',
        url: 'ServletSecretaria',
        type: 'POST',
        success: function(jsonObject)
        {
            VerVendedor1(jsonObject);
        },
        error: function(jsonObject)
        {
            alert('Error al conectar con ServletSecretaria');
        }
    })
}

function VerVendedor1(jsonObject)
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
                            '<form id="form_visualizar_usuario"  enctype="multipart/form-data">'+
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
                                    '<th align="right" style="padding-right:5px;">Identificación</th>'+
                                    '<td><input type="text" name="cedula" value="' + jsonObject.cedula + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellidos" value="' + jsonObject.apellidos + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombres" value="' + jsonObject.nombres + '" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nickname</th>'+
                                    '<td><input type="text" name="nickname" value="' + jsonObject.nickname + '" size="20" maxlength="10" readonly="readonly"/></td>'+
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
                                    '<td><input type="text" name="celular" value="' + jsonObject.celular + '" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<div id="Laboral" class="tab_content">'+
                              '<table>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Ingreso</th>'+
                                    '<td><input type="text" name="fecha" id="date_field13" value="' + jsonObject.fechaIngreso + '" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">email</th>'+
                                    '<td><input type="text" name="email" value="' + jsonObject.email + '" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha Cumpleaños</th>'+
                                    '<td><input type="text" name="cumpleanos" id="date_field14" value="' + jsonObject.fechaCumple + '" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Tipo de Cuenta</th>'+
                                    '<td><input type="text" name="tipoCuenta"  value="' + jsonObject.tipoCuenta + '" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Numero Cuenta</th>'+
                                    '<td><input type="text" name="num_cuenta" value="' + jsonObject.numCuenta + '" readonly="readonly"/></td>'+
                                    '<th align="right" style="padding-right:5px;">Banco</th>'+
                                    '<td><input type="text" name="banco" value="' + jsonObject.Banco + '" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td colspan="4" align="left">'+
                                      'Otros datos:<br>'+
                                      '<textarea name="otrosDatos" cols="74" rows="6" readonly="readonly">' + jsonObject.otrosDatos + '</textarea>'+
                                    '</td>'+
                                  '</tr>'+
                              '</table>'+
                            '</div>'+
                            '<div id="Zonas" class="tab_content">'+
                              '<table>'+
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
                              '</td>'+
                            '</tr>'+
                          '</table> '+      
                        '</form>'+
                    '</div>';

    $("#datos").html(codigoHTML);
    IniciarTabers();
    activadorEventosVendedores();
}

//*************  Seccion Ventas     *********************

function seccionVentas()
{
    var request = {"ecretaria":"ListadoPedidos"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
        data:{Secretaria:jsonobj},
        dataType:"json",
        url:"ServletSecretaria",
        type:'POST',
        success: function(JSONArray)
        {
            cargarListadoVentas(JSONArray);
        },
        error: function(JSONArray)
        {
            alert('Error al conectar con ServletSecretaria');
        }
    });
}

function cargarListadoVentas(JSONArray)
{
    for(var k = 0; k < JSONArray.length; k++)
    {
        if(k==0)
        {
            var codigoHTML =    '<div class="encabezado2">Pedidos de Cliente</div>'+
                                '<div class="tabla">'+ 
                                    '<ul class="tabs">'+
                                        '<li><a href="#Pedidos">Pedidos</a></li>'+
                                    '</ul>'+
                                    '<div class="tab_container">'+
                                        '<div id="Pedidos" class="tab_content">'+
                                            '<table class="tbonita">'+
                                              '<tr align="left">'+           				   
                                                '<th></th>'+
                                                '<th>Id Pedido</th>'+
                                                '<th>Id Vendedor</th>'+
                                                '<th>Id Cliente</th>'+
                                                '<th>Cliente</th>'+
                                                '<th>Fecha</th>'+
                                                '<th>Total</th>'+
                                              '</tr>';       
    
            for(var i = 0; i < JSONArray[k].length; i++)
            {
                if(i % 2 == 0)
                    codigoHTML+= '<tr>';
                else
                    codigoHTML+=           '<tr class="even">';
                    codigoHTML+=                  '<td><img src="images/b_search.png" title="Visualizar" class="DatosVerVenta" id="' + JSONArray[k][i].id_pedido + '" /></td>';
                    codigoHTML+=                  '<td>' + JSONArray[k][i].id_pedido + '</td>';
                    codigoHTML+=                  '<td>' + JSONArray[k][i].id_vendedor + '</td>';  
                    codigoHTML+=                  '<td>' + JSONArray[k][i].id_cliente + '</td>'; 
                    codigoHTML+=                  '<td>' + JSONArray[k][i].nombre_del_cliente + '</td>';
                    codigoHTML+=                  '<td>' + JSONArray[k][i].fecha + '</td>';
                    codigoHTML+=                  '<td>' + JSONArray[k][i].valor_total + '</td>';
                    codigoHTML+=                '</tr>';
            }
                codigoHTML+=                    '</table>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>';
        }
    }
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#ventasVendedor").addClass("active");   
    $(".DatosVerVenta").click(DatosVerVenta);
    activadorEventosVendedores();
    IniciarTabers();
}

function DatosVerVenta()
{
    var id = $(this)[0].id;
    var request = {"ecretaria":"DatosPedido","id_pedido":id};
    var jsonobj = JSON.stringify(request);
    
    $.ajax({
        data: {Secretaria:jsonobj},
        dataType: 'json',
        url: 'ServletSecretaria',
        type: 'POST',
        success: function(jsonObject)
        {
            VerVenta1(jsonObject);
        },
        error: function(jsonObject)
        {
            alert('Error al conectar con ServletSecretaria');
        }
    })
}

function VerVenta1(jsonObject)
{
    var codigoHTML  =   '<section>'+
                            '<article>'+
                                '<br /><br /><form id="form1" name="form1" method="post" action="">'+
                                  '&nbsp;&nbsp;&nbsp;<label for="numbox">Pedido&nbsp;&nbsp;</label>'+
                                  '<input type="number" value="' + jsonObject.id_pedido +'" name="numbox" size="3" maxlength="6" readonly="readonly"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
                                  '<label for="Fecha">Fecha&nbsp;&nbsp;</label>'+
                                  '<input type="date" name="Fecha" id="Fecha" size="10" maxlength="10" value="' + jsonObject.fecha +'" readonly="readonly"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
                                  '<label for="time">Hora&nbsp;&nbsp;</label>'+
                                  '<input type="time" name="time" id="time" size="8" maxlength="5" value="' + jsonObject.hora +'" readonly="readonly"/>'+
                                '</form>'+
                            '</article><br />'+
                            '<article>'+
                                '<fieldset style="border-width:6px"><legend>Datos Generales</legend><form action="" method="get"><br /><table width="511" border="0">'+
                                  '<tr>'+
                                    '<td width="80"><label for="id_cliente">Id Cliente</label></td>'+
                                    '<td width="424"><input name="id_cliente" type="number" id="id_cliente" readonly="readonly" size="3" value="' + jsonObject.id_cliente + '"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td width="88"><label for="id_vendedor">Id Vendedor</label></td>'+
                                    '<td><input name="id_vendedor" type="number" id="id_vendedor" readonly="readonly" size="3" value="' + jsonObject.id_vendedor + '"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td width="80"><label for="nombre">Nombre</label>'+
                                    '</td>'+
                                    '<td><input name="nombre" type="text" id="nombre" size="37" readonly="readonly" value="' + jsonObject.nombre_del_cliente + '"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td width="80"><label for="address">Direcci&oacute;n</label></td>'+
                                    '<td>'+
                                        '<input name="address" id="address" type="text" size="37" value="' + jsonObject.direccion + '" readonly="readonly"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td width="80"><label for="barrio">Barrio</label></td>'+
                                    '<td>'+
                                        '<input name="barrio" id="barrio" type="text" size="37" readonly="readonly" value="' + jsonObject.barrio + '"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td width="80"><label for="ciudad">Ciudad</label></td>'+
                                    '<td>'+
                                        '<input name="ciudad" id="ciudad" type="text" size="37" readonly="readonly" value="' + jsonObject.ciudad + '"/>'+
                                    '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td width="80"><label for="tel">Tel&eacute;fono</label></td>'+
                                    '<td><input name="tel" type="tel" id="tel" size="9" readonly="readonly" value="' + jsonObject.telefono + '"/></td>'+
                                  '</tr>'+
                                '</table><br /></form></fieldset>'+
                          '</article>'+
                          '<article>'+
                                '<fieldset style="border-width:6px"><legend>Productos</legend><form action="" method="get"><br /><table width="511" border="0">'+
                                  '<tr>'+
                                    '<td>Art&iacute;culo</td>'+
                                    '<td>Descripci&oacute;n</td>'+
                                    '<td>Unidades</td>'+
                                    '<td>Precio Ud.</td>'+
                                    '<td>IVA</td>'+
                                    '<td>Importe</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td>&nbsp;</td>'+
                                    '<td>&nbsp;</td>'+
                                    '<td>&nbsp;</td>'+
                                    '<td>&nbsp;</td>'+
                                    '<td>&nbsp;</td>'+
                                    '<td>&nbsp;</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<td>&nbsp;</td>'+
                                    '<td>&nbsp;</td>'+
                                    '<td>&nbsp;</td>'+
                                    '<td>&nbsp;</td>'+
                                    '<td>Total:&nbsp;</td>'+
                                    '<td>&nbsp;</td>'+
                                  '</tr>'+
                                '</table></form></fieldset>'+
                            '</article>'+
                        '</section>';
    $("#datos").html(codigoHTML);
    activadorEventosVendedores();
    IniciarTabers();
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
   var codigoHTML = ''; 

    $(".content-float-vendedores").html(codigoHTML);
    $("#datos").html(codigoHTML);
    $(".nav .menu li a").removeClass("active");
    $(".nav .menu li a#Clientes").addClass("active");
    activadorEventosMenuPrincipal();
    //seccionListadoClientes();
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
    var codigoHTML = ''; 

    $(".content-float-vendedores").html(codigoHTML);
    $("#datos").html(codigoHTML);
    $(".nav .menu li a").removeClass("active");
    $(".nav .menu li a#Productos").addClass("active");
    activadorEventosMenuPrincipal();
    //seccionListadoProductos();
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
    var codigoHTML = ''; 

    $(".content-float-vendedores").html(codigoHTML);
    $("#datos").html(codigoHTML);
    $(".nav .menu li a").removeClass("active");
    $(".nav .menu li a#Perfil").addClass("active");
    activadorEventosMenuPrincipal();
    //$(".menu-vertical li a#listadoVentas").addClass("active");
}


//##################################################################################
//##################################################################################







//**************************************************************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DE ADICIONAR, Sin Permiso,   *********************
//*************  VISUALIZAR, BORRAR Y GENERAR INFORME EN LA    *********************
//*************  OPCION LISTADO DE LOS VENDEDORES              *********************
//**********************************************************************************

function AddVendedor()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Vendedor</div>'+
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
                                    '<td><input type="text" name="id_usuario" value="" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Apellidos</th>'+
                                    '<td><input type="text" name="apellidos" value="" size="20" maxlength="25" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombres</th>'+
                                    '<td><input type="text" name="nombres" value="" size="20" maxlength="25" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nickname</th>'+
                                    '<td><input type="text" name="nickname" value="" size="20" maxlength="10" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Contraseña</th>'+
                                    '<td><input type="password" name="contrasena" value="" size="20" maxlength="10" /></td>'+
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
                                    '<td><input type="text" name="celular" value="" size="20" maxlength="15" /></td>'+
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
    activadorEventosVendedores();
}

function ModVendedor()
{
    var codigoHTML = '<div class="encabezado2">Sin Permiso Vendedor</div>'+
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

function DelVendedor()
{
    var codigoHTML = '<div class="encabezado2">Borrar Vendedor</div>'+
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
    activadorEventosVendedores();
}

function ConfirmDelVendedor()
{
    var codigoHTML = '<div class="encabezado2">Borrar Vendedor</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea borrar el vendedor?</th>'+
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
    activadorEventosVendedores();
}

function HideConfirmDelVendedor()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosVendedores();  
}

//**********************************************************************************



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
    activadorEventosVendedores();
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
    activadorEventosVendedores();
}

function HideConfirmAddProducto()
{
    $("#overAddProducto").css({display: "none"});
    $("#fadeAddProducto").css({display: "none"});
    activadorEventosVendedores();  
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
    activadorEventosVendedores();
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
    activadorEventosVendedores();
}

function ConfirmDelVenta()
{
    var codigoHTML = '<div class="encabezado2">Borrar Venta</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea borrar la Venta?</th>'+
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
    activadorEventosVendedores();
}

function HideConfirmDelVenta()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosVendedores();  
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
                            '<td><img src="images/b_no_edit.png" title="Sin Permiso" /></td>'+
                            '<td><img src="images/b_no_drop.png" title="Sin Permiso"/></td>'+
                            '<td><img src="images/b_search.png" title="Visualizar" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_no_edit.png" title="Sin Permiso" /></td>'+
                            '<td><img src="images/b_no_drop.png" title="Sin Permiso" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                          '<tr>'+
                            '<td><img src="images/b_no_edit.png" title="Sin Permiso" /></td>'+
                            '<td><img src="images/b_no_drop.png" title="Sin Permiso" /></td>'+
                            '<td><img src="images/b_search.png" title="Ampliar" onclick="" /></td>'+
                            '<td>11111</td>'+
                            '<td>18/06/2012</td>'+
                            '<td>Ingenio Risaralda</td>'+
                            '<td>Risaralda</td>'+
                            '<td>Pereira</td>'+
                            '<td>Compras</td>'+
                          '</tr>'+

                          '<tr class="even">'+
                            '<td><img src="images/b_no_edit.png" title="Sin Permiso" /></td>'+
                            '<td><img src="images/b_no_drop.png" title="Sin Permiso" /></td>'+
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