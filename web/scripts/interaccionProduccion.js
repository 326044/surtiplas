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
    var ventasV, listadoV, actividadesV, viaticosV, comisionesV, ubicacionV;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    ventasV=$("#ProdBuscar");
    ventasV.click(seccionVentas);
    listadoV=$("#listadoProductos");
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
    var adicionarV, modificarV, cod_tipo_productoV, visualizarV, reporteV;
    var volverVendedor, vBorrarV, vHideDelV,vBorrarOk;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    adicionarV=$("#AVendedor");
    adicionarV.click(AddVendedor);
    modificarV=$(".ModVendedor");
    modificarV.click(ModVendedor);
    visualizarV=$(".VerVendedor");
    visualizarV.click(cargarVerProd);
    
    cod_tipo_productoV=$(".DelVendedor");
    cod_tipo_productoV.click(delPro);
    
    volverVendedor=$("#volverAddVendedor");
    volverVendedor.click(seccionListado);
    vBorrarV=$("#cod_tipo_productoVendedor");
    vBorrarV.click(ConfirmDelVendedor);
    vBorrarOk=$("#OkDelVendedor");
    vBorrarOk.click(DelVendedorOk);
    vHideDelV=$("#NotDelVendedor");
    vHideDelV.click(HideConfirmDelVendedor); 
    
    //*****************************************************
    //** VARIABLES DE LAS OPCIONES DEL LISTADO DE VENTAS **
    //*****************************************************
    var addVenta, modVenta, delVentas, verVentas, reporteVentas;
    var volverVentas, addProducto, modVenta, verVenta, delVenta, hideDelVenta, hideAddProducto;
    // ASIGNACION DE EVENTOS A LAS VARIABLES DECLARADAS
    addVenta=$(".AdicionarVenta");
    addVenta.click(AddVenta);
    modVenta=$(".ModVenta");
    modVenta.click(DatosModVendedor);
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
    //Son las tres opciones que tiene el opcion vertical.
   var codigoHTML = '<div class="encabezado">Gestión de Productos</div>'+
                    '<ul class="menu-vertical">'+

                        '<li><a href="#1" id="listadoProductos"><img src="images/IconoOpciones.png"/> Listado</a></li>'+
                        '<li><a href="#2" id="ProdBuscar"><img src="images/IconoOpciones.png"/> Buscar</a></li>'+
                        '<li><a href="#3" id="ActividadesVendedor"><img src="images/IconoOpciones.png"/> Rastrear</a></li>'+
                    '</ul>'; 
    //Estamos agregando y colocando valore en el content-float-vendedores
    $(".content-float-vendedores").html(codigoHTML);
    //Estamos inicializando que quede subraya la casilla "Productos"
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionListado();
    $(".menu-vertical li a#listadoProductos").addClass("active");
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

/*function menuClientes()
{
   var codigoHTML = '<div class="encabezado">Gestión de Clientes</div>'+
                    '<ul class="menu-vertical">'+
                        
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionListadoClientes();
    //$(".menu-vertical li a#listadoProductos").addClass("active");
}
*/
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
                        
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionListadoProductos();
    //$(".menu-vertical li a#listadoProductos").addClass("active");
}

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCION QUE CREA LOS COMPONENTES DEL MENU     *********************
//*************  VERTICAL DE LA SECCION PERFIL                 *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************
//Esta sera la funcion la cual llame al perfil.
function menuPerfil()
{
   var codigoHTML = '<div class="encabezado">Gestión del Perfil</div>'+
                    '<ul class="menu-vertical">'+
                        
                    '</ul>'; 

    $(".content-float-vendedores").html(codigoHTML);
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionDatosPerfil();
    //$(".menu-vertical li a#listadoProductos").addClass("active");
}


//##################################################################################
//##################################################################################

//**********************************************************************************
//**********************************************************************************
//*************                                                *********************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DEL MENU VERTICAL DE LOS   *********************
//*************  PRODUCTOS.                                    *********************
//*************                                                *********************
//**********************************************************************************
//**********************************************************************************

//Estamos comunicando al servelt eh indicando cual es la consulta que aremos en este caso sera seleccionar listado.
function seccionListado()
{
    var request = {"Pproduccion":"ListadoProductos"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
            data: {produccion:jsonobj},
            dataType: 'json',
            url: 'ServletProduccion',
            type: 'POST',
            success: function(jsonArray)
            {
                cargarListado(jsonArray);     
            },
//Esto es una alerta la cual capturara si hay un error al conectar a el serveltProduccion 
            error: function(jsonArray) 
            {
                alert('Error al conectar con serveltProduccion');
            }
          });
}

function cargarListado(jsonArray)
{    
    //Este es el encabezado de la tabala.
    var codigoHTML =     '<div class="encabezado2">Visualizar La Ubicacion Geografica</div>'+
                         '<div class="tabla">'+
                            '<ul class="tabs">'+
                                '<li><a href="#producto">produccion</a></li>'+
                            '</ul>'+                       
                            '<div class="tab_container">'+                           
                                 '<div id="producto" class="tabcontent">'+
                                     '<table class="tbonita">'+
                                       '<tr align="left">'+           				   
                                         '<th colspan="3"></th>'+			                            
                                         '<th>Nombre</th>'+
                                         '<th>foto</th>'+
                                         '<th>Precio costo</th>'+
                                         '<th>Precio venta</th>'+
                                         '<th>Precio descuento</th>'+
                                         '<th>Codigo de barras</th>'+
                                       '</tr>';      
                                   
//Aca estaremos rellenando la tabla con los datos que hay en la base de datos.
    for (var i = 0; i < jsonArray.length; i++)
    {
//Este es el arreglo que usaremos para "colorear" las columbnas de dos colores distintos al intervalo de cada una.
           if (i % 2 == 0)
                codigoHTML+=           '<tr>';
           else
                codigoHTML+=           '<tr class="even">';


           codigoHTML+=                 '<td><img src="images/b_drop.png" title="Eliminar" class="DelVendedor" id="'+ jsonArray[i].codigo_producto +'" /></td>';
           codigoHTML+=                 '<td><img src="images/b_search.png" title="Visualizar" class="VerVendedor" id="'+ jsonArray[i].codigo_producto +'" /></td>';
           codigoHTML+=                 '<td><img src="images/b_edit.png" title="Modificar" class="ModVendedor" id="'+ jsonArray[i].codigo_producto +'" /></td>';
           codigoHTML+=                  '<td>' + jsonArray[i].nombre + '</td>';  
           codigoHTML+=                  '<td>' + jsonArray[i].foto + '</td>'; 
           codigoHTML+=                  '<td>' + jsonArray[i].precio_costo + '</td>';
           codigoHTML+=                  '<td>' + jsonArray[i].precio_venta + '</td>';
           codigoHTML+=                  '<td>' + jsonArray[i].precio_descuento + '</td>';
           codigoHTML+=                  '<td>' + jsonArray[i].codigo_barras + '</td>';
           codigoHTML+=                  '<td>' + jsonArray[i].cod_tipo_producto + '</td>';
           codigoHTML+=                '</tr>';
           
    }

     codigoHTML+=                    '</table>'+
                                 '</div>'+
                             '</div>'+
                         '</div>';  
        
    //Estamos rellenando "Datos" del codigo HTML 
    $("#datos").html(codigoHTML);
     //estamos indicando que se subraye al undirle click en el boton.
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#listadoVentas").addClass("active");
    activadorEventosVendedores();
    IniciarTabers();
    $("#listadoProductos").addClass("active");
}

//**********************************************************************************
//*************  FUNCIONES QUE MODIFICAN LA INTERFAZ GRAFICA   *********************
//*************  SEGUN LAS OPCIONES DE ADICIONAR, MODIFICAR,   *********************
//*************  VISUALIZAR, BORRAR Y GENERAR INFORME EN LA    *********************
//*************  OPCION LISTADO DE LOS PRODUCTOS               *********************
//**********************************************************************************

//Estara sera la funcion la cual adicione productos nuevos.

function AddVendedor()
{
    var codigoHTML = '<div class="encabezado2">Adicionar Producto</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Crear </a></li>'+
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
                                                  '<input type="button" value="Cargar Imagen Producto" class="button" '+
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                  '</tr>'+
								   '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre Producto</th>'+
                                    '<td><input type="text" name="id_usuario" value="" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id Producto</th>'+
                                    '<td><input type="text" name="id_usuario" value="" size="20" maxlength="15" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Color Producto</th>'+
                                    '<td><input type="text" name="apellidos" value="" size="20" maxlength="25" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Tallas disponibles del producto</th>'+
                                    '<td><input type="text" name="nombres" value="" size="20" maxlength="25" /></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Cantidad a Crear</th>'+
                                    '<td><input type="text" name="nickname" value="" size="20" maxlength="10" /></td>'+
                                  '</tr>'+
                                  '<tr>'+

                                  '</tr>'+
                              '</table>'+
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
    //Estos son los calendarios despegables
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick({yearRange: '1980:2050'});
    activadorEventosVendedores();
}
function DatosModVendedor()
{
    var id = $(this)[0].id;
    alert(id); 
    var request = {"Pproduccion":"ModVendedor","Id_producto":id};
    var jsonobj=JSON.stringify(request);
    alert(jsonobj.toString());
    $.ajax({
            data: {produccion:jsonobj},
            dataType: 'json',
            url: 'ServletProduccion',
            type: 'POST',
            success: function(jsonObject)
            {
                ModVendedor(jsonObject);     
            },
            error: function(jsonObject) 
            {
                alert('Error al conectar con Servletggeneral');
            }
          });  
}

//Funcion que usaremos para modificar los productos.
function ModVendedor()
{
    var codigoHTML = '<div class="encabezado2">Modificar Productos BLA BLA BLA </div>';
    
                    
    $("#datos").html(codigoHTML);
    IniciarTabers();
    $('#date_field13').datepick({yearRange: '1980:2050'});
    $('#date_field14').datepick({yearRange: '1980:2050'});
    activadorEventosVendedores();
}

//Esta funcion cargará las consultas del ServeletProduccion.
function cargarVerProd()
{
    var id = $(this)[0].id;
    //alert(id); 
    var request = {"Pproduccion":"DatosVendedor","Id_producto":id};
    var jsonobj=JSON.stringify(request);
    //alert(jsonobj.toString());
    $.ajax({
            data: {produccion:jsonobj},
            dataType: 'json',
            url: 'ServletProduccion',
            type: 'POST',
            success: function(JSONArray)
            {
                //llamaremos la funcion "VerVendedor"
                VerVendedor(JSONArray);     
            },
            error: function(JSONArray) 
            {
                //Esto es una alerta la cual capturara los posibles errores del servlet 
                alert('Error al conectar con Servletggeneral');
            }
          });  
}

//Aca con el jsonobj relleanremos los campos de labase de datos.
function VerVendedor(jsonobj)
{
   var codigoHTML = '<div class="encabezado2">Visualizar Producto</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Personal">Producto</a></li>'+
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
                                                  '<input type="button" value="Cargar Imagen" class="button" '+
                                                 
                                              '</div>'+   
                                          '</div>'+
                                      '</td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Nombre Producto</th>'+
                                    '<td><input type="text" name="id_usuario" value="'+jsonobj.nombre+'" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id Producto</th>'+
                                    '<td><input type="text" name="apellidos" value="'+jsonobj.foto+'" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Color Producto</th>'+
                                    '<td><input type="text" name="nombres" value="'+jsonobj.precio_costo+'" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Tallas Disponibles</th>'+
                                    '<td><input type="text" name="nickname" value="'+jsonobj.precio_venta+'" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Cantidad a crear</th>'+
                                    '<td><input type="text" name="direccion" value="'+jsonobj.precio_descuento+'" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha de Creacion</th>'+
                                    '<td><input type="text" name="telefono" value="'+jsonobj.codigo_barras+'" size="20" maxlength="12" readonly="readonly"/></td>'+
                                  '</tr>'+
                                   '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha de Creacion</th>'+
                                    '<td><input type="text" name="telefono" value="'+jsonobj.cod_tipo_producto+'" size="20" maxlength="12" readonly="readonly"/></td>'+
                                  '</tr>'+
                              '</table>'+
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
}//Con esta funcion tomaremos la consulta.
function delPro()
{
    var id = $(this)[0].id;
    //alert(id); 
    var request = {"Pproduccion":"DelVendedor","Id_producto":id};
    var jsonobj=JSON.stringify(request);
    alert(jsonobj.toString());
    $.ajax({
            data: {produccion:jsonobj},
            dataType: 'json',
            url: 'ServletProduccion',
            type: 'POST',
            success: function(jsonObject)
            {
                DelVendedor(jsonObject);     
            },
            error: function(jsonObject) 
            {
                alert('Error al conectar con Servletggeneral');
            }
          });  
}
//Relelnamos los campos de la tabla del producto.
function DelVendedor(jsonObject)
{
    var codigoHTML = '<div class="encabezado2">Borrar Producto</div>'+
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
                                    '<th align="right" style="padding-right:5px;">Nombre Producto</th>'+
                                    '<td><input type="text" name="id_usuario" value="'+jsonObject.nombre+'" size="20" maxlength="15" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Id Producto</th>'+
                                    '<td><input type="text" name="apellidos" value="'+jsonObject.foto+'" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Color Producto</th>'+
                                    '<td><input type="text" name="nombres" value="'+jsonObject.precio_costo+'" size="20" maxlength="25" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Tallas Disponibles</th>'+
                                    '<td><input type="text" name="nickname" value="'+jsonObject.precio_venta+'" size="20" maxlength="10" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Cantidad a crear</th>'+
                                    '<td><input type="text" name="direccion" value="'+jsonObject.precio_descuento+'" size="20" maxlength="35" readonly="readonly"/></td>'+
                                  '</tr>'+
                                  '<tr>'+
                                    '<th align="right" style="padding-right:5px;">Fecha de Creacion</th>'+
                                    '<td><input type="text" name="telefono" value="'+jsonObject.codigo_barras+'" size="20" maxlength="12" readonly="readonly"/></td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td colspan="4" align="center">'+
                                      '<input type="button" value="Volver" class="button" id="volverAddVendedor" />'+
                                      '<a href="#DelV" class="button" id="' + jsonObject.id_usuario + '" style="text-decoration:none; padding:2px 4px 2px 4px;">Borrar<a/>'+
                                  '</td>'+
                                '</tr>'+
                            '</table>'+       
                        '</form>'+
                    '</div>';
      $("#").click();            
    $("#datos").html(codigoHTML);
    activadorEventosVendedores();
}
//Confirmaremos que estamos seguros de que queremos borrar el producto, saldra una ventana emergente la cual tendra dos opciones "Borrar" y "Eliminar"
function ConfirmDelVendedor()
{
   var id = $(this)[0].name;
    var codigoHTML = '<div class="encabezado2">Borrar Vendedor</div>'+
                        '<table align="center">'+
                            '<tr>'+
                              '<th>Está seguro que desea cod_tipo_producto el vendedor?</th>'+
                            '</tr>'+
                            '<td colspan="4" align="center">'+
                                '<input type="button" value="Si" class="button" id="OkDelVendedor" name="' + id + '"/>'+
                                '<input type="button" value="No" class="button" id="NotDelVendedor"/>'+
                            '</td>'+
                        '</table>'+
                     '</div>';
    //Estaremos blokeando que no se pueda mover nada solo la ventana emergente,
    $("#overDelItem").css({display: "block"});
    $("#overDelItem").html(codigoHTML);
    $("#fadeDelItem").css({display: "block"});
    activadorEventosVendedores();
    
}
//hemos mandado la ultima consulta la cual nos elimina.
function DelVendedorOk()
{
    var id = $(this)[0].name; 
    var request = {"Pproduccion":"DelVendedor","Id_producto":id};
    var jsonobj=JSON.stringify(request);
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    
    $.ajax({
                    data: {produccion:jsonobj},
                    dataType: 'json',
                    url: 'ServletProduccion',
                    type: 'POST',
                    success: function(jsonObject)
                    {
                        verificarDelVendedor(jsonObject);     
                    },
                    error: function(jsonObject) 
                    {
                        alert('Error al conectar con ServletComercial');
                    }
               });
}
//Esta funcion genera un mensaje correcto o incorercto. 
function verificarDelVendedor(jsonObj)
{
    if (jsonObj.DelVendedor  =="true")
    {
        
        alert("El vendedor se ha borrado correctamente");
    }
    
    else
    {
        alert("El vendedor no se pudo cod_tipo_producto");
    }   
    
    seccionListado();
}

function HideConfirmDelVendedor()
{
    $("#overDelItem").css({display: "none"});
    $("#fadeDelItem").css({display: "none"});
    activadorEventosVendedores();  
}

//**********************************************************************************

function seccionVentas()
{
    var codigoHTML = '<div class="encabezado2">Listado de Ventas</div>'+
                     '<div class="tabla">'+
                        '<ul class="tabs">'+
                            '<li><a href="#Fecha">Fecha</a></li>'+
                            '<li><a href="#Cliente">Cliente</a></li>'+
                            '<li><a href="#Producto">Id Producto</a></li>'+
                        '</ul>'+
                        '<div class="tab_container">'+
                            '<div id="Fecha" class="tab_content">'+ 
                                '<form action="" method="POST" name="form_buscar_venta">'+ 
                                    '<table align="center" border="0" align="left">'+ 
                                        '<tr>'+ 
										     '<th align="right" style="padding-right:5px;">Fecha Exacta</th>'+ 
                                            '<td>'+ 
                                              '<input id="date_field1" type="text" name="fechaExacta" value="" style="font-size:14px;"/>'+ 
                                            '</td>'+ 
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
                                    '<th>Nombre Producto</th>'+ 
                                    '<th>Id Producto</th>'+ 
                                    '<th>Color Producto</th>'+ 
                                    '<th>Tallas Producto</th>'+ 
                                    '<th>Cantidad</th>'+ 
									'<th>Fecha</th>'+ 
                                  '</tr>'+ 
                         
                                  '<tr>'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta"/></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta"/></td>'+ 
                                    '<td><img src="images/b_search.png" title="Visualizar" class="VerVenta"/></td>'+ 
                                    '<td>IguanoPato</td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>Verde</td>'+ 
                                    '<td> S,M y L</td>'+ 
                                    '<td>400</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>IguanoPato</td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>Verde</td>'+ 
                                    '<td> S,M y L</td>'+ 
                                    '<td>400</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                  '</tr>'+ 

                                  '<tr>'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>iguanocabra</td>'+ 
                                    '<td>22222</td>'+ 
                                    '<td>Azul</td>'+ 
                                    '<td>S y L </td>'+ 
                                    '<td>500</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>TortuPez</td>'+ 
                                    '<td>33333</td>'+ 
                                    '<td>Rosa</td>'+ 
                                    '<td>L</td>'+ 
                                    '<td>200</td>'+ 
                                    '<td>18/06/2012</td>'+ 
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
										 '<th align="right" style="padding-right:5px;">Departamento</th>'+ 
											'<td>'+ 
                                          '<select name="tipoCuenta" style="width:177px">'+ 
										   '<option value="LI">------------</option>'+ 
                                           '<option value="LF">Antioquia</option>'+ 
                                           '<option value="LM">Caldas</option>'+ 
										  '<option value="LH">Risaralda</option>'+ 
                                          '</select>'+ 
										  
										  '<th align="right" style="padding-right:5px;">Ciudad</th>'+ 
											'<td>'+ 
                                          '<select name="tipoCuenta" style="width:177px">'+ 
										   '<option value="LI">------------</option>'+ 
                                            '<option value="LI">Mercurio</option>'+ 
                                            '<option value="LM">Venus</option>'+ 
                                            '<option value="LH">Tierra</option>'+ 
                                            '<option value="LF">Jupiter</option>'+ 
                                            '<option value="LF">Saturno </option>'+ 
                                            '<option value="LF">PVC Urano PVC</option>'+ 
                                          '</select>'+ 
                                        '</tr>'+ 
                                        '<tr>'+ 
                                            '<td colspan="4" align="center"><br>'+ 
                                              '<input type="submit" value="Buscar" class="button" />'+ 
                                            '</td>'+ 
                                        '</tr>'+ 
                                    '</table>'+ 
                                '</form>'+ 
                                '<br>'+ 
                                 '</table>'+ 
                                '</form>'+ 
                                '<br>'+ 
                                '<table class="tbonita">'+ 
                                  '<tr align="left">'+ 
                                    '<th colspan="2"><img src="images/b_insrow.png" title="Adicionar Venta" class="AdicionarVenta" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReporteVentas" /></th>'+ 
                                    '<th>Nombre Producto</th>'+ 
                                    '<th>Id Producto</th>'+ 
                                    '<th>Color Producto</th>'+ 
                                    '<th>Tallas Producto</th>'+ 
                                    '<th>Cantidad</th>'+ 
									'<th>Fecha</th>'+ 
                                  '</tr>'+ 
                         
                                  '<tr>'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta"/></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta"/></td>'+ 
                                    '<td><img src="images/b_search.png" title="Visualizar" class="VerVenta"/></td>'+ 
                                    '<td>IguanoPato</td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>Verde</td>'+ 
                                    '<td> S,M y L</td>'+ 
                                    '<td>400</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>IguanoPato</td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>Verde</td>'+ 
                                    '<td> S,M y L</td>'+ 
                                    '<td>400</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                  '</tr>'+ 

                                  '<tr>'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>iguanocabra</td>'+ 
                                    '<td>22222</td>'+ 
                                    '<td>Azul</td>'+ 
                                    '<td>S y L </td>'+ 
                                    '<td>500</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>TortuPez</td>'+ 
                                    '<td>33333</td>'+ 
                                    '<td>Rosa</td>'+ 
                                    '<td>L</td>'+ 
                                    '<td>200</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                  '</tr>'+ 

                                '</table>'+ 
                            '</div>'+ 

                            '<div id="Producto" class="tab_content">'+ 
                                '<form action="" method="POST" name="form_buscar_venta_cliente">'+ 
                                    '<table align="center" border="0" align="left">'+ 
                                        '<tr colspan="4">'+ 
										 '<th align="right" style="padding-right:5px;">Id Producto</th>'+
                                    '<td>'+
                                      '<input type="text" name="nit" value="" />'+
                                      '<input type="submit" value="Buscar" class="button" />'+ 
                                    '</td>'+
									
		
                               '</table>'+ 
                                '</form>'+ 
                                '<br>'+ 
                                '<table class="tbonita">'+ 
                                  '<tr align="left">'+ 
                                    '<th colspan="2"><img src="images/b_insrow.png" title="Adicionar Venta" class="AdicionarVenta" /></th>'+ 
                                    '<th colspan="1"><img src="images/PDF-05.png" title="Generar Reporte" class="ReporteVentas" /></th>'+ 
                                    '<th>Nombre Producto</th>'+ 
                                    '<th>Id Producto</th>'+ 
                                    '<th>Color Producto</th>'+ 
                                    '<th>Tallas Producto</th>'+ 
                                    '<th>Cantidad</th>'+ 
									'<th>Fecha</th>'+ 
                                  '</tr>'+ 
                         
                                  '<tr>'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta"/></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta"/></td>'+ 
                                    '<td><img src="images/b_search.png" title="Visualizar" class="VerVenta"/></td>'+ 
                                    '<td>IguanoPato</td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>Verde</td>'+ 
                                    '<td> S,M y L</td>'+ 
                                    '<td>400</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>IguanoPato</td>'+ 
                                    '<td>11111</td>'+ 
                                    '<td>Verde</td>'+ 
                                    '<td> S,M y L</td>'+ 
                                    '<td>400</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                  '</tr>'+ 

                                  '<tr>'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>iguanocabra</td>'+ 
                                    '<td>22222</td>'+ 
                                    '<td>Azul</td>'+ 
                                    '<td>S y L </td>'+ 
                                    '<td>500</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                  '</tr>'+ 

                                  '<tr class="even">'+ 
                                    '<td><img src="images/b_edit.png" title="Modificar" class="ModVenta" /></td>'+ 
                                    '<td><img src="images/b_drop.png" title="Eliminar" class="DelVenta" /></td>'+ 
                                    '<td><img src="images/b_search.png" title="Ampliar" class="VerVenta" /></td>'+ 
                                    '<td>TortuPez</td>'+ 
                                    '<td>33333</td>'+ 
                                    '<td>Rosa</td>'+ 
                                    '<td>L</td>'+ 
                                    '<td>200</td>'+ 
                                    '<td>18/06/2012</td>'+ 
                                  '</tr>'+ 

                                '</table>'+ 
                            '</div>'+ 
                        '</div>'+
                    '</div>';

	$("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#ProdBuscar").addClass("active");
    IniciarTabers();
    $('#date_field').datepick({yearRange: '1980:2050'});
	$('#date_field1').datepick({yearRange: '1980:2050'});
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
                              '<th>Está seguro que desea cod_tipo_producto la Venta?</th>'+
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
              
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
    $('#date_field9').datepick({yearRange: '1980:2050'});
    $('#date_field10').datepick({yearRange: '1980:2050'});
}

//**********************************************************************************

function seccionComisiones()
{
 

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
                        
                    '</div>';

    $("#datos").html(codigoHTML);
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
    var codigoHTML = '<div class="encabezado2">Datos del Jefe Comercial</div>'+
                     '<div class="tabla">'+
                        
                    '</div>';

    $("#datos").html(codigoHTML);
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
