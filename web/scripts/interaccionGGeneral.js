/*RUTINA QUE SE EJECUTA AL CARGARSE LA PAGINA WEB */

/*Creamos las variables utilizadas en la geolocalizacion*/

var pagina;
var map;
var latitud;
var longitud;
var precision;
pagina=$(document);
pagina.ready(inicializar);

/* FUNCION QUE INICIALIZA LAS OPERACIONES PRINCIPALES EN JQUERY */
function inicializar()
{
/* Se crea la variable (Gcomercial) y se le asigna valores */  

    var Gcomecial;
    vendedores=$("#Vendedores");
    vendedores.click(menuVendedores);
    
/* Inicializacion de los eventos */

    menuVendedores();
    $(".nav .menu li a#Vendedores").addClass("active");
    activadorEventosVendedores();
    
// Se crea la variable (clientes) */  
  
    var clientes;
    
/* Inicializacion de los eventos */

    clientes=$("#Clientes");
    clientes.click(menuClientes);
    
// Se crea la variable (productos) */  
  
    var productos;
    
/* Inicializacion de los eventos */
    
    productos=$("#Productos");
    productos.click(menuProductos);
    
// Se crea la variable perfil */  
    
    var perfil;
    
/* Inicializacion de los eventos */

    perfil=$("#Perfil");
    perfil.click(menuPerfil);
}

/*Funcion (activadorEventosvendedores) que activa los eventos principales del menu vertical*/

function activadorEventosVendedores()
{
    // Se declara las variables del menu vertical */
    
    var   VisualizarV, ubicacionV,actividadesV, viaticosV, comisionesV;
    
    /* Se le asigna eventos a las anteriores variables */
    
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
    

    /* Variables de las opciones del listado de vendedores */

    var VisualizarV,VisualizarW;
    var volverVendedor, vBorrarV, vHideDelV;
    var  ingresosV, egresosV;   
    
    /* Asignacion de evntos a las variables declaradas */
    
    VisualizarV=$(".VerVendedor");
    VisualizarV.click(VerClientes);
    VisualizarW=$(".VerClientes");
    VisualizarW.click(VerClientes);
    ingresosV=$("#IngresosFinanciera");
    ingresosV.click(VerIngreso);
    egresosV=$("#EgresosFinanciera");
    egresosV.click(VerEgreso);
    
}

/* Funciones para crear y activar eventos en los tabers(pestañas) de la aplicacion */

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

/* funciona para la asignacion de eventos a las variables de claradas  */

function menuVendedores()
{ 
    
    // Se le asigna un titulo al encabezado
    
   var codigoHTML = '<div class="encabezado">Gestion Comercial</div>'+
       
                    /*Se carga el menu vertical*/
       
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoVentas"><img src="images/IconoOpciones.png"/>Visualizar</a></li>'+
                        '<li><a href="#2" id="ventasVendedor"><img src="images/IconoOpciones.png"/> Reporte Estadistico</a></li>'+
                        '<li><a href="#3" id="ActividadesVendedor"><img src="images/IconoOpciones.png"/>Actividades Vendedores</a></li>'+
                        '<li><a href="#4" id="viaticosVendedor"><img src="images/IconoOpciones.png"/> Actividades Clientes</a></li>'+
                   '</li>'+
                    '</ul>'; 
                
    /* Se activa los eventos y propeidades */

    $(".content-float-vendedores").html(codigoHTML).css({height:"165px"});
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    
    //Le asignamos el lugar donde se ubicara mediante un activador
    
    seccionListado();    
    
    // Activador de eventos
    
    activadorEventosVendedores();
}

/* Funcion para la asignacion de eventos para las varibles declaradas */ 

function menuClientes()
{
    // Se le asigna un titulo al encabezado
    
   var codigoHTML = '<div class="encabezado">Gestión Financiera</div>'+
       
                    /*Se carga el menu vertical*/
       
                    '<ul class="menu-vertical">'+
                    '<li><a href="#2" id="IngresosFinanciera"><img src="images/IconoOpciones.png"/>Ingresos</a></li>'+  
                    '<li><a href="#1" id="EgresosFinanciera"><img src="images/IconoOpciones.png"/>Egresos</a></li>'+                   
                    '</ul>'; 

    /* Se activa los eventos y propeidades */
    
    $(".content-float-vendedores").html(codigoHTML).css({height:"100px"});
    $(".nav .menu li a").removeClass("active"); 
    $(this).addClass("active");         
    $(".menu-vertical li a#IngresosFinanciera").addClass("active");    
    
    // Activador de eventos
    
    activadorEventosVendedores();     
    
     //Le asignamos el lugar donde se ubicara mediante un activador
    
    VerIngreso();
     
}

/*Funcion para la asigancion de eventos para las variables declaradas*/

function menuProductos()
{   
    // Se le asigna un titulo al encabezado
    
   var codigoHTML = '<div class="encabezado">Gestión de Productos</div>'+
                    '<ul class="menu-vertical">'+
                        
                    '</ul>'; 
                
    /* Se activa los eventos y propeidades */
    
    $(".content-float-vendedores").html(codigoHTML);
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    
    //activador de eventos
    
    seccionListadoProductos();
    
}

/* funcion para la asignacion e eventos para las variables declaradas*/

function menuPerfil()
{
   // Se le asigna un titulo al encabezado      
    
   var codigoHTML = '<div class="encabezado">Gestión del Perfil</div>'+
                    '<ul class="menu-vertical">'+
                        
                    '</ul>'; 
    /* Se activa los eventos y propeidades */
    
    $(".content-float-vendedores").html(codigoHTML);
    $(".nav .menu li a").removeClass();
    $(this).addClass("active");
    
    //Le asignamos el lugar donde se ubicara mediante un activador
    
    seccionDatosPerfil();
}

/* Funcio que sirve para comunicarse con el servlet */

function seccionListado()
{
  var request = {"Ggeneral":"ListadoVendedoresClientes"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
            data: {gerente:jsonobj},
            dataType: 'json',
            
            /*conectamos con el servidor*/
            
            url: 'Servletggeneral',
            type: 'POST',
            
            /*funcion que comunica con cargarListado*/
            
            success: function(JSONArray)
            {
                cargarListado(JSONArray); 
            },
            error: function(JSONArray) 
            {   
                // se coloca un mensaje de alerta en caso e que encuentre un error
                
                alert('Error al conectar con Servletggeneral');
            }
          });
}

/*Funcion que recorre las posiciones "K==0" y "K==1" del arreglo K */

function cargarListado(jsonArray)
{   
    for (var k = 0; k < jsonArray.length; k++)
    {   
        /* Se recorre la posicion 0 en K */
        if (k==0)
        {                               
                                    // Se le asigna un titulo al encabezado
                                    
               var codigoHTML =     '<div class="encabezado2">Visualizar Vendedores/Clientes</div>'+
                                    '<div class="tabla">'+
                                    
                                        /*creamos dos pestañas */
                                    
                                       '<ul class="tabs">'+
                                           '<li><a href="#Laboral">Vendedores</a></li>'+
                                           '<li><a href="#Zonas">Clientes</a></li>'+
                                       '</ul>'+                       
                                       
                                       /*Creamos un contenedor donde se ubicara la primera pestaña*/
                                       
                                       '<div class="tab_container">'+                           
                                           
                                            /* Utilizamos la primera pestaña*/
                                           
                                            '<div id="Laboral" class="tab_content">'+
                                                
                                                /*Creamos una tabla para ubicar los titulos*/
                                                
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
                                              
               /* Se crea un ciclo nombrado variable "i" */
               
               for (var i = 0; i < jsonArray[k]. length; i++)
               {        
                      /* se le asigna una condicion para darle color a las filas pares  */
                     
                      if (i % 2 == 0)
                           codigoHTML+=           '<tr>';
                                                                     
                      else
                           codigoHTML+=           '<tr class="even">';    
                       
                      // se le asigna la funcion "VerVendedor" a la imagen                      
                      
                      codigoHTML+=                  '<td><img src="images/b_search.png" class="VerVendedor" id="'+jsonArray[k][i].cedula+'"/></td>';
                      codigoHTML+=                  '<td>'+ jsonArray[k][i].cedula_usuario + '</td>';
                      codigoHTML+=                  '<td>' + jsonArray[k][i].nombre_usuario + '</td>';  
                      codigoHTML+=                  '<td>' + jsonArray[k][i].direccion_usuario + '</td>'; 
                      codigoHTML+=                  '<td>' + jsonArray[k][i].telefono_usuario + '</td>';
                      codigoHTML+=                  '<td>' + jsonArray[k][i].celular_usuario + '</td>';
                      codigoHTML+=                  '<td>' + jsonArray[k][i].email_usuario + '</td>';
                      codigoHTML+=                '</tr>';

               }

                /*cerramos las tablas(table) y las capas (capas)*/

                codigoHTML+=                    '</table>'+
                                            '</div>';  
        }
        
        /* Se recorre la posicion 1 en K */
        
        if (k==1)
        {
                                            // utilizamos la segunda pestaña
            
            codigoHTML+=                    '<div id="Zonas" class="tab_content">'+									
                
                                                /*Se crea una tabla para ubicar los datos*/
                                    
                                                '<table class="tbonita">'+
                                                    '<tr align="left">'+           				                                                                                                                                                                           
                                                        '<th></th>'+
                                                        '<th>ID</th>'+
                                                        '<th>Nombre</th>'+
                                                        '<th>Apellido</th>'+
                                                        '<th>Teléfono</th>'+
                                                        '<th>Fecha</th>'+
                                                        '<th>Razón Social</th>'+
                                                    '</tr>';            													          
                          
             /* Se crea un ciclo nombrado variable "i" */
                          
            for (var j = 0; j < jsonArray[k].length; j++)
            {
                   /* se le asigna una condicion para darle color a las filas pares  */
                
                   if (j % 2 == 0)
                        codigoHTML+=               '<tr>';
                   else
                       codigoHTML+=           '<tr class="even">';
                   // se le asigna la funcion "VerClientes" a la imagen
                                      
                   
                    codigoHTML+=                        '<td><img src="images/b_search.png" class="VerVendedor" id="'+jsonArray[k][j].cedula+'"/></td>';
                    codigoHTML+=                        '<td>'+ jsonArray[k][j].id_cliente + '</td>';
                    codigoHTML+=                        '<td>' + jsonArray[k][j].nombre + '</td>';  
                    codigoHTML+=                        '<td>' + jsonArray[k][j].apellido + '</td>'; 
                    codigoHTML+=                        '<td>' + jsonArray[k][j].telefono + '</td>';
                    codigoHTML+=                        '<td>' + jsonArray[k][j].fecha + '</td>';
                    codigoHTML+=                        '<td>' + jsonArray[k][j].razon_social + '</td>';
                    codigoHTML+=                        '</tr>';

            }
        
            /*cerramos las tablas(table) y las capas (capas)*/
        
            codigoHTML+=                        '</table>'+
                                            '</div>'+
                                       '</div>'+
                                    '</div>';
       }
    }
    
    /* Se activan los eventos y se activan las pestañas */
    
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#listadoVentas").addClass("active");
    
    /*Le asignamos eventos a los botones*/
    
    $(".VerVendedor").click(VerVendedor);
    $(".VerClientes").click(VerClientes);
    
    // activador de eventos
    
    activadorEventosVendedores();    
    
    // activamos las pestañas
    
    IniciarTabers();   
       
}

/*Funcion que inicia la geolocalizacion */
    
function VerVendedor() 
{
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition(coordenadas, errores);
    }
    
    else
    {
        // Se coloca un mensaje de alerta en caso de que el navegador no soporte la geolocalizacion
        alert('Tu navegador no soporta geolocalización');
    }
}

/* Funcion que activa las variables latitud, longitud, precision */

function coordenadas(position) 
{
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;
    precision = position.coords.accuracy;  
    cargarMapa();
}

/* Funcion donde se le asigna un mensaje de alerta segun el codigo donde se halle el error*/

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

/* Funcion que le asigna atributos, ubicacion  yc aracteristicas a la geolocalizacion*/

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
}


/*Funcion para la asigancion de eventos que visualizan la ubicacion geografica del clientes*/

function VerClientes()
{
    // Le asignamos un titulo al encabezado
    
    var codigoHTML = '<div class="encabezado2">Ubicacion Geografica Cliente </div>'+
		     '<br>'+
                     
                     // creamos una tabla para ubicar contenido
                     
                     '<div class="tabla">'+
                         
                     // creamos un boton para regresar a la pagina anterior
                         
		     '<input type="button" value="Volver" class="button" id="volverAddVendedor" />'+
		     											
                     // creamos una capa para agregar un contenido                                                                                                         
                                                                                                        
                     '<div class="Ubicacion-Geografica">'+		     
                     
		     '</div>'+
		     '</div>';
                 
    // le asignamos la funcion que loc argara 
    
    VerVendedor();          
    
    /*activamos los eventos*/
    
    $("#datos").html(codigoHTML);
    
    // funcion que activa la interaccion entre el boton y otra funcion
    
    $("#volverAddVendedor").click(seccionListado);  
    
    // activador de eventos
    
    activadorEventosVendedores();
}

/* Funcio que sirve para comunicarse con el servlet */

function seccionVentas()
{
            var request = {"Ggeneral":"ReporteEstadistico"};
            var jsonobj=JSON.stringify(request);
            $.ajax({
                    data: {gerente:jsonobj},
                    dataType: 'json',
                    
                    /*conectamos con el servidor*/
                    
                    url: 'Servletggeneral',
                    type: 'POST',
                    
                    /*funcion que conecta con seccionlistadopedidos*/
                    
                    success: function(jsonArray)
                    {
                        seccionListadoPedidos(jsonArray);     
                    },
                    error: function(jsonArray) 
                    {   
                        // Se coloca un mensaje de alerta por si llegase a presentar un error
                        
                        alert('Error al conectar con Servletggeneral');
                    }
                  });
}

/* funcion para cargar datos */

function seccionListadoPedidos(jsonArray)

{                             // Se le da nombre al encabezado del contenido
    
             var codigoHTML = '<div class="encabezado2">Reporte Estadistico De Las Ventas</div>'+                 
                 
                              // Se crea un div o capa para ubicar el contenido     
                          
                               '<div class="tabla">'+                
                                   
                                   /* Se crea un contenedor o margen para ubicar dentro el contenido */
                               
                                  '<div class="tab_container">'+                                                                            
                                      '<div id="Fecha" class="tab_content">'+ 
                                          '<form id="Reporte">'+ 
                                              '<table align="center" border="0" align="left">'+ 
                                                  '<tr>'+ 
                                                      '<th align="right" style="padding-right:5px;">Vendedor</th>'+ 
                                                      '<td>'+ 
                                                          '<select name="id_usuario" id="vend" style="width:160px;">'+                                                              
                                                          '</select>'+
                                                             '</td>'+
                                                          '<th align="right" style="padding-right:5px;">Identificacion</th>'+ 
                                                      '<td>'+                                                                                                                                                                               
                                                        /*Se exporta el identificador "Ident"*/
                                                         '<input id="Ident" type="text" name="cedula_usuario" style="font-size:14px;"/>'+ 
                                                      '</td>'+ 
                                                  '</tr>'+ 					
                                                  '<tr>'+ 
                                                        '<th align="right" style="padding-right:5px;">Departamento</th>'+ 
                                                      '<td>'+ 
                                                          '<select name="cod_departamento" id="deptos" style="width:160px;" onchange="cargarMunicipios()">'+
                                                              '<option value="null"></option>';
                                            
                                            /* Se crea un ciclo declarando la variable "z" */
                                            
                                            for (var z = 0; z < jsonArray. length; z++)
                                            {
                                              // Recibe las variables "cod_departamento" y "nombre_depto"
                                              codigoHTML += '<option value="'+ jsonArray[z].cod_departamento +'">'+ jsonArray[z].nombre_depto +'</option>';
                                            }          
                                              codigoHTML += '</select>'+
                                                             '</td>'+
/*____________________________________________________________________________________________________________________________*/                                               
                                                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+ 
                                                       '<td>'+ 
                                                           '<select name="codMunicipio" style="width:160px;" id="municipios">'+
                                                           '</select>'+
                                                      '</td>'+ 
                                                  '</tr>'+ 																
/*____________________________________________________________________________________________________________________________*/                                           
                                                  '<tr>'+ 
                                                      
                                                      /* Se le asigna espacios y caracteristicas a los calendarios*/
                                                      
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
                                                        '<input type="submit" value="Generar Reporte" class="button" id="VerReporte" />'+ 
                                                      '</td>'+ 
                                                  '</tr> '+ 																
                                              '</table>'+ 											                                                      
                                             '</form>'+
                                      '</div>';

    /*Se activan los evento*/

    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#ventasVendedor").addClass("active");
    
    //activamos las pestañas
    
    IniciarTabers();
    
    // Le asignamos un lugar para ubicar el contenido
    
    CargarVendedores();
    
    
    /*Se asignan las variables a los calendarios*/
    
    $('#date_field').datepick({yearRange: '1980:2050'});
    $('#date_field2').datepick({yearRange: '1980:2050'});
    $('#date_field3').datepick({yearRange: '1980:2050'});
    $('#date_field4').datepick({yearRange: '1980:2050'});
    $('#date_field5').datepick({yearRange: '1980:2050'});
    $('#date_field6').datepick({yearRange: '1980:2050'});
    
    // Activador de eventos
    
    activadorEventosVendedores();
    
    // Se activa la interaccion que comunica el boton ".button" y la funcion "VerReporte"
    
    $(".button").click(VerReporte);       
 
}

/* Funcio que sirve para comunicarse con el servlet */

function cargarMunicipios()
{   
    var depto=$('#deptos').val(); 
    var request = {"Ggeneral":"Municipios","DatosDepto":depto};    
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {gerente:jsonobj},
                    dataType: 'json',
                    
                    /*conectamos con el servidor*/
                    
                    url: 'Servletggeneral',
                    type: 'POST',
                    
                    /*funcion que comunica con municipios*/
                    
                    success: function(jsonArray)
                    {
                        Municipios(jsonArray);    
                    },
                    error: function(jsonArray) 
                    {   
                        // Se coloca un mensaje de alerta por si llegase a presentar un error
                        alert('Error al conectar con Servlet');
                    }
           });
}

/*  funcion que carga el nombre de los municipios */

function Municipios(jsonArray)
{
       var codigoHTML;          
                                for (var N = 0; N < jsonArray.length; N++)        
                                {
           codigoHTML +=         '<option value="'+ jsonArray[N].codMunicipio +'">'+ jsonArray[N].nombreMunicipio +'</option>';                                                 
                                }
           codigoHTML+=          '<option value="null"></option>';   
           
    $("#municipios").html(codigoHTML);
}

/* Funcion que comunica con el servidor */

function CargarVendedores()
{    
    var request = {"Ggeneral":"Vendedores"};    
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {gerente:jsonobj},
                    dataType: 'json',
                    
                    /*conectamos con el servidor*/
                    
                    url: 'Servletggeneral',
                    type: 'POST',
                    
                    /*funcion que comunica con vendedores*/
                    
                    success: function(jsonArray)
                    {
                        Vendedores(jsonArray);    
                    },
                    error: function(jsonArray) 
                    {   
                        // Se coloca un mensaje de alerta por si llegase a presentar un error
                        alert('Error al conectar con Servlet');
                    }
           });
}

/*  funcion que carga el nombre de los vendedores */

function Vendedores(jsonArray)
{
       var codigoHTML;                 
           codigoHTML +=        '<option value="null"></option>';
                                for (var N = 0; N < jsonArray.length; N++)        
                                {
           codigoHTML +=         '<option value='+ jsonArray[N].id_usuario +'>'+ jsonArray[N].nombre_usuario +'</option>';                                                 
                                }
              
           
    $("#vend").html(codigoHTML);
}

/* Funcion que comunica con el servidor */

function CargarIdent()
{  
    var request = {"Ggeneral":"Identidad"};    
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {gerente:jsonobj},

                    dataType: 'json',
                    
                    /*conectamos con el servidor*/
                    
                    url: 'Servletggeneral',
                    type: 'POST',
                    
                    /*funcion que comunica con vendeores*/
                    
                    success: function(jsonArray)
                    {
                        Vendedores(jsonArray);    
                    },
                    error: function(jsonArray) 
                    {   
                        // Se coloca un mensaje de alerta por si llegase a presentar un error
                        alert('Error al conectar con Servlet');
                    }
           });
        
}

/* Funcion que carga la identificaicon de los vededores*/

function Identidad(jsonArray)
{
                        
           var codigoHTML;      for (var N = 0; N < jsonArray.length; N++)        
                                {
           codigoHTML +=         '<option value='+ jsonArray[N].id_usuario +'>'+ jsonArray[N].cedula_usuario +'</option>';                                                 
                                }
              
$("#Ident").html(codigoHTML);            
}

/*Funcion para la asigancion de eventos y visualizacion de la imagen del reporte estadistico*/

function VerReporte()
{
    /*le asignamos un titulo a el encabezado*/
    
    var codigoHTML = '<div class="encabezado2">Reporte Estadistico De Las Ventas</div>'+
					 '<br>'+
                                         
                        /*cramos una tabla para ubicar el contenido*/
                                         
                        '<div class="tabla">'+
				'<input type="button" value="Volver" class="button" id="return" />'+
				'<div class="tab_container">'+  												
				'<td align="center"><img src="images/ESTADISTICA.png"</td>'+		
			'</div>'+
                      '</div>';
    
    /*Se activan los eventos*/
                  
    $("#datos").html(codigoHTML);
    $("#return").click(seccionVentas);   
    activadorEventosVendedores();	
	
}

/*Funcion que comunica con el servidor*/

function seccionActividades()
{
       var request = {"Ggeneral":"ListadoComisionesPedidosEtc"};
            var jsonobj=JSON.stringify(request);
            $.ajax({
                    data: {gerente:jsonobj},
                    dataType: 'json',
                    
                    /*conectamos con el servidor*/
                    
                    url: 'Servletggeneral',
                    type: 'POST',
                    
                    /*funcion que nos comunica con cargaractividades*/
                    
                    success: function(JSONArray)
                    {                        
                        cargarActividades(JSONArray);     
                    },
                    error: function(JSONArray) 
                    {   
                        // Se coloca un mensaje de alerta por si llegase a presentar un error
                        alert('Error al conectar con Servletggeneral');
                    }
                  });
}

/*Funcion que crea un arreglo que recorre 5 posiciones obteniendo las actividades de los vendedores */

function cargarActividades(jsonArray)
{
    
  // Se crea un un ciclo nombrado variable "x" que recorre 3 posiciones
    
  for (var x = 0; x < jsonArray. length; x++)
  {      
      
      /* Se recorre la posicion 0 del arreglo "x"*/
      
      if (x==0)
      {    
            /*le asignamos un titulo a el encabezado*/
          
            var codigoHTML = '<div class="encabezado2">Actividad Vendedores</div>'+
                                '<div class="tabla">'+                                                                                                        
                                
                                   /*Creamos las pestañas*/
                                
                                    '<ul class="tabs">'+
                                        '<li><a href="#Pedidos">Pedidos</a></li>'+
                                        '<li><a href="#Viaticos">Viaticos</a></li>'+                                                                                    
                                        '<li><a href="#Visitas">Visitas</a></li>'+                                                                                                                                                                                                                    
                                    '</ul>'+                                                                                                                    
								    
                                    /*se crea un contenedor para ubicar el contenido*/                                
                                                                    
                                    '<div class="tab_container">'+  
                                    '<div id="Pedidos" class="tab_content">'+							                            
                                        
                                        /*Se crea una tabla para ubicar los datos*/
                                        
                                            '<table class="tbonita">'+
                                                '<tr align="left">'+           				                                       
                                                    '<th>id_pedido</th>'+
                                                    '<th>valor_del_iva</th>'+                               
                                                    '<th>valor_total</th>'+
                                                    '<th>id_usuario</th>'+
                                                    '<th>fecha</th>'+
                                                    '<th>hora</th>'+                                                                                                      
                                                    '<th>id_cliente</th>'+   
                                                '</tr>';     
                                    
            /* Se crea un ciclo nombrado variable "A" */
                                    
            for (var A = 0; A < jsonArray[x]. length; A++)
            {
                
                  /*se le asigna una condicion para darle color a las filas pares  */ 
                
                   if (A % 2 == 0)
                        codigoHTML+=    '<tr>';
                   else
                        codigoHTML+=    '<tr class="even">';                  
                        
                        /* Se llaman los siguientes campos, de la base de datos*/
                    
                        codigoHTML+=    '<td>' + jsonArray[x][A].id_pedido + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][A].valor_del_iva + '</td>'; 
                        codigoHTML+=    '<td>' + jsonArray[x][A].valor_total + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][A].id_usuario + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][A].fecha + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][A].hora + '</td>';                                                
                        codigoHTML+=    '<td>' + jsonArray[x][A].id_cliente + '</td>';  
                        codigoHTML+=    '</tr>';

            }                
            
                        /*cerramos las tablas(table) y las capas (capas)*/
                        
                        codigoHTML+=        '</table>'+											                                        
                                        '</div>';
                                    
      }           			                

      /* Se recorre la posicion 1 del arreglo "x"*/

      if(x==1)
      {                                    
                /*le asignamos un nombre para el encabezado*/
                codigoHTML+=        '<div id="Viaticos" class="tab_content">'+							
                    
                                            /*Se crea una tabla para ubicar los datos*/
                    
                                            '<table class="tbonita">'+
                                                '<tr align="left">'+           				                                         
                                                    '<th>id_viaticos</th>'+
                                                    '<th>id_usuario</th>'+
                                                    '<th>valor</th>'+
                                                    '<th>concepto</th>'+
                                                    '<th>fecha</th>'+
                                                    '<th>codMunicipio</th>'+
                                                    '<th>doc_soporte</th>'+
                                                '</tr>';             
                                    
                /* Se crea un ciclo nombrado variable "B" */
                                    
                for (var B = 0; B < jsonArray[x]. length; B++)
                {
                    
                    /*se le asigna una condicion para darle color a las filas pares  */ 
                    
                    if (B % 2 == 0)
                         codigoHTML+=    '<tr>';
                    else
                        
                        
                        /* Se llaman los siguientes campos, de la base de datos*/
                        
                         codigoHTML+=    '<tr class="even">';                  
                         codigoHTML+=    '<td>' + jsonArray[x][B].id_viaticos + '</td>';
                         codigoHTML+=    '<td>' + jsonArray[x][B].id_usuario + '</td>'; 
                         codigoHTML+=    '<td>' + jsonArray[x][B].valor + '</td>';
                         codigoHTML+=    '<td>' + jsonArray[x][B].concepto + '</td>';
                         codigoHTML+=    '<td>' + jsonArray[x][B].fecha + '</td>';
                         codigoHTML+=    '<td>' + jsonArray[x][B].codMunicipio + '</td>';
                         codigoHTML+=    '<td>' + jsonArray[x][B].doc_soporte + '</td>';
                         codigoHTML+=    '</tr>';

                }                      
                        /*cerramos las tablas(table) y las capas (capas)*/
                                    
                         codigoHTML+=       '</table>'+                            
                                    '</div>'; 
     }                                
 
     /* Se recorre la posicion 2 del arreglo "x"*/

      if (x==2)                                                       
      {    
                /*Le asignamos un titulo a el encabezado*/
          
                codigoHTML+=        '<div id="Visitas" class="tab_content">'+							
                    
                                        /*Se crea una tabla para ubicar los datos*/
                    
                                        '<table class="tbonita">'+
                                            '<tr align="left">'+           				   					
                                                '<th>id_visita</th>'+
                                                '<th>fecha</th>'+
                                                '<th>id_cliente</th>'+
                                                '<th>id_usuario</th>'+
                                                '<th>descripcion</th>'+					                                                                                                       
                                            '</tr>'; 		            																		                               
                     
                /* Se crea un ciclo nombrado variable "D" */     
                     
                for (var D = 0; D < jsonArray[x]. length; D++)
                {
                   /*se le asigna una condicion para darle color a las filas pares  */  
                    
                   if (D % 2 == 0)
                        codigoHTML+=    '<tr>';
                   else
                       
                       /* Se llaman los siguientes campos, de la base de datos*/
                       
                        codigoHTML+=    '<tr class="even">';                  
                        codigoHTML+=    '<td>' + jsonArray[x][D].id_visita + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][D].fecha + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][D].id_cliente + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][D].id_usuario + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][D].descripcion + '</td>';                                              
                        codigoHTML+=    '</tr>';
                        
                        /*cerramos las tablas(table) y las capas (capas)*/
                                               
                        codigoHTML+=    '</table>'+  
                                     '</div>'+      
                                    '</div>'+                                          
                                '</div>';
            } 
     }
     
  }
  
    /*Se activan los eventos*/
    
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#ActividadesVendedor").addClass("active"); 
    
    // Activador de eventos
    
    activadorEventosVendedores();
    
    // Activador de pestañas
    
    IniciarTabers();            
}

/* Funcion que carga la seccion de los viaticos */

/*function CargarPagos(evento)
{
    evento.preventDefault();
    var datos_pagos = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_pagos));    
    var request = {"Ggeneral":"obtenerpagos","Datos":datos};
    var jsonobj=JSON.stringify(request);
    alert(jsonobj.toString());
    
    $.ajax({        
                    data: {gerente:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'Servletggeneral',
                    success: function(jsonArray)
                    {
                        seccionViaticos(jsonArray);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}*/
function seccionViaticos()
{                    // Se le asigna un nombre al encabezado
    var codigoHTML = '<div class="encabezado2">Top 10 Clientes</div>'+                                     
			'<div class="tabla">'+
                            
                                /*Se crean tres pestañas */
                            
                                '<ul class="tabs">'+								
                                    '<li><a href="#Pagos">Pagos</a></li>'+
                                    '<li><a href="#Visitas">Visitas</a></li>'+
                                    '<li><a href="#Pedidos">Pedidos</a></li>'+
                                '</ul>'+                            
                            
                            // Se crea un contenedor en el que apareceram los datos
                            
                            '<div class="tab_container">'+                           
                                
                                /* Se crea la primera pestaña con sus caracteristicas*/
                                
                                '<div id="Pagos" class="tab_content">'+							
                                    '<table class="tbonita">'+
					'<tr align="left">'+        
                                            '<form action="" method="POST" name="form_Pagos">'+
						'<table align="center" border="0" align="left">'+
                                                    '<tr>'+
                                                    '<th align="center" style="padding-right:5px;">Categoria</th>'+
                                                    '<td>'+
                                                        '<select name="criterios" style="width:140px;">'+
                                                        '<option value="Null"></option>'+
                                                        '<option value="All">Todos</option>'+
                                                        '<option value="MasPuntual">Mas Puntual</option>'+
                                                        '<option value="MenosPuntual">Menos Puntual</option>'+
                                                        '</select>'+
                                                    '</td>'+                                   
                                                        '<tr>'+
                                                            '<td colspan="4" align="center"><input type="submit" value="Ver" class="button" />'+
                                                        '</td>'+											
                                                        '<table class="tbonita id="TablaPagos">'+
                                                         '<tr align="left">'+           				                                       
                                                            '<th></th>'+
                                                            '<th></th>'+
                                                            '<th></th>'+
                                                            '<th></th>'+
                                                            '<th>id_pago</th>'+
                                                            '<th>id_pedido</th>'+                               
                                                            '<th>id_cliente</th>'+                                                                                                                        
                                                            '<th>fecha</th>'+                                                                                                      
                                                            '<th>cantidad_de_pago</th>'+   
                                                            '<th>descripcion</th>'+                                                            
                                                            '<th></th>'+                                                            
                                                        '</tr>'+
                                                '</table>'+										
                                                
                                            '</form>'+     
					'</tr>'+       									
                                    '</table>'+
                                '</div>'+
                            
                            /*Se crea la segunda pestaña con sus caracteristicas*/
                            
                            '<div id="Visitas" class="tab_content">'+							
                                '<table class="tbonita">'+
                                    '<tr align="left">'+        
                                        '<form action="" method="POST" name="form_buscar_venta">'+
                                            '<table align="center" border="0" align="left">'+
                                                '<tr>'+
                                                    '<th align="center" style="padding-right:5px;">Categoria</th>'+
                                                        '<td>'+
                                                            '<select name="criterios" style="width:140px;">'+
                                                            '<option value="Null"></option>'+
                                                            '<option value="All">Todos</option>'+
                                                            '<option value="Masvisitas">Mas Visitados</option>'+
                                                            '<option value="MenosVisitas">Menos Visitados</option>'+
                                                            '</select>'+
                                                        '</td>'+                                   					
                                                        '<tr>'+
                                                            '<td colspan="4" align="center"><input type="submit" value="Ver" class="button" />'+
                                                        '</td>'+			                                                        
                                                        '<table class="tbonita">'+
                                                                '<tr align="left">'+           				   
                                                                    '<th></th>'+
                                                                    '<th></th>'+
                                                                    '<th></th>'+
                                                                    '<th></th>'+
                                                                    '<th></th>'+
                                                                    '<th></th>'+
                                                                    '<th>id_visita</th>'+
                                                                    '<th>fecha</th>'+
                                                                    '<th>id_cliente</th>'+
                                                                    '<th>id_usuario</th>'+
                                                                    '<th>descripcion</th>'+                                  
                                                                    '<th></th>'+
                                                                    '<th></th>'+                                                                    
                                                                    '<th></th>'+
                                                                    '<th></th>'+
                                                                    '<th></th>'+                                                                        
                                                                '</tr>'+   																			
                                                            '</form>'+     
							'</tr>'+       									
                                                    '</table>'+		
                                                        /*Se crea la tabla donde se ubicaran los datos*/
                                                        							
                                                '</tr>'+       
                                            '</table>'+										
                                        '</form>'+     
                                    '</tr>'+       									
                                '</table>'+																														
                            '</div>'+		   
                                                
                                                /*Se crea la tercera pestaña con sus propiedades y caracteristicas*/

						'<div id="Pedidos" class="tab_content">'+							
                                                    '<table class="tbonita">'+
                                                        '<tr align="left">'+        
                                                            '<form action="" method="POST" name="form_buscar_venta">'+
                                                                '<table align="center" border="0" align="left">'+
                                                                    '<tr>'+
                                                                        '<th align="center" style="padding-right:5px;">Categoria</th>'+
                                                                            '<td>'+
                                                                                '<select name="criterios" style="width:140px;">'+
                                                                                '<option value="Null"></option>'+
                                                                                '<option value="All">Todos</option>'+
                                                                                '<option value="MasPedidos">Mas Pedidos</option>'+
                                                                                '<option value="MenosPedidos">Menos Pedidos</option>'+
                                                                                '</select>'+                                                                                                                                                             
                                                                            '</td>'+                                   
                                                                            '<tr>'+
                                                                                '<td colspan="4" align="center"><input type="submit" value="Ver" class="button" />'+
                                                        '</td>'+																									
								'</table>'+	
                                                                
                                                            /*Se crea la tabla donde se ubicaran los datos*/    
                                                                
                                                            '<table class="tbonita">'+
                                                                '<tr align="left">'+           				                                                                                                                                           
                                                                    '<th></th>'+
                                                                    '<th></th>'+
                                                                    '<th>id_pedido</th>'+
                                                                    '<th>valor_del_iva</th>'+
                                                                    '<th>valor_total</th>'+
                                                                    '<th>id_usuario</th>'+
                                                                    '<th>fecha</th>'+
                                                                    '<th>hora</th>'+
                                                                    '<th>id_cliente</th>'+
                                                                    '<th></th>'+                                                                                                                                  
                                                                '</tr>'+   																			
                                                            '</form>'+     
							'</tr>'+       									
                                                    '</table>'+																											
						'</div>'+
                        '</div>'; 
                    
/* Se activan los eventos*/                    
                    
$("#datos").html(codigoHTML);
$(".menu-vertical li a").removeClass("active");
$(this).addClass("active");

// Se activan las pestañas

IniciarTabers();

// Activador de eventos

activadorEventosVendedores();
$("#form_Pagos").submit(CargarPagos);

 
}

function seccionComisiones()
{
    var codigoHTML = 
        
    /*Se activan los eventos */        
        
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
    
    /*Se activan los calendarios*/
    
    $('#date_field11').datepick({yearRange: '1980:2050'});
    $('#date_field12').datepick({yearRange: '1980:2050'});
}

/* Funcion que activa los eventos de la seccionUbicacion*/

function seccionUbicacion()
{
    var codigoHTML = 
        
    /*Se activan los eventos*/
        
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
}

/*Se carga la segunda pestaña de la barra de navegacion*/
/*Funcion que activa VerIngreso y comunica con el servlet*/

function VerIngreso()
{
  var request = {"Ggeneral":"ListadoIngresos"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
            data: {gerente:jsonobj},
            dataType: 'json',
            
            // conectamos con el servidor
            
            url: 'Servletggeneral',
            type: 'POST',
            
            /*Funcion que conecta con la funcion seccioningreso*/
            
            success: function(JSONArray)
            {   
                seccioningreso(JSONArray); 
            },
            error: function(JSONArray) 
            {
                // Se coloca un mensaje de alerta por si llegase a presentar un error
                
                alert('Error al conectar con Servletggeneral');
            }
          });
}

/*Funcion que carga seccion ingreso*/

function seccioningreso(jsonArray)
{
    // Se crea un un ciclo nombrado variable "H" que recorre 1 posiciones
    
    for (var H = 0; H < jsonArray. length; H++)
    {   
        
        
        /* Se recorre la posicion 0 del arreglo "H"*/
        
        if (H==0)
        {    
            var codigoHTML = '<div class="encabezado2">Ingresos</div>'+
                              '<div class="tabla">'+                        			                            
                              
                                         /*Se crean las pestañas */
                              
                                         '<ul class="tabs">'+								
                                             '<li><a href="#Ppedidos">Pedidos</a></li>'+                                                                             
                                         '</ul>'+     
   
                                     /*Se cre aun contenedor para ubicar la pestaña*/
   
                                     '<div class="tab_container">'+  
                                         
                                         /*Se llama la pestaña para trabajar en ella*/
                                         
                                         '<div id="Ppedidos" class="tab_content">'+
                                             '<table class="tbonita">'+
                                                 '<tr align="left">'+           				                                                                                                            
                                                    '<th>id_pedido</th>'+
                                                    '<th>valor_del_iva</th>'+                               
                                                    '<th>valor_total</th>'+
                                                    '<th>id_usuario</th>'+                                                                                                                                                         
                                                    '<th>fecha</th>'+                                                                                                                                                         
                                                    '<th>hora</th>'+                                                                                                                                                         
                                                    '<th>id_cliente</th>'+ 
                                                 '</tr>';   																											
                                                 
            /* Se crea un ciclo nombrado variable "W" */
                                                 
            for (var W = 0; W < jsonArray[H]. length; W++)                                
            {       
                    /*se le asigna una condicion para darle color a las filas pares  */ 
                    
                    if (W % 2 == 0)
                          codigoHTML+=      '<tr>';
                      
                    /* Se llaman los siguientes campos, de la base de datos*/  
                      
                    else
                          codigoHTML+=      '<tr class="even">';
                                            
                        codigoHTML+=    '<td>' + jsonArray[H][W].id_pedido + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[H][W].valor_del_iva + '</td>'; 
                        codigoHTML+=    '<td>' + jsonArray[H][W].valor_total + '</td>'; 
                        codigoHTML+=    '<td>' + jsonArray[H][W].id_usuario + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[H][W].fecha + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[H][W].hora + '</td>';                                                
                        codigoHTML+=    '<td>' + jsonArray[H][W].id_cliente + '</td>';  
                        codigoHTML+=    '</tr>';          
            }    
            
                      /*cerramos las tablas(table) y las capas (capas)*/
            
                      codigoHTML+=           '</table>'+
                                         '</div>';
       }                                 

        /* Se recorre la posicion 1 del arreglo "H"*/
  }

    
    /* Se activan los eventos*/
    
    $("#datos").html(codigoHTML);      
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#IngresosFinanciera").addClass("active");
    $(this).addClass("active"); 
    
    // Activados de eventos
    
    activadorEventosVendedores();            
    
    // Se activan las pestañas
    
    IniciarTabers();
}

/*Funcion que carga VerEgreso*/

function VerEgreso()
{   
    /*Se crean y se nombran dos variables*/
    
    var request = {"Ggeneral":"ListadoEgresos"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
            data: {gerente:jsonobj},
            dataType: 'json',
            
            //conectamos con el servidor
            
            url: 'Servletggeneral',
            type: 'POST',
            
            /*Funcion que comunica con seccioningreso*/
            
            success: function(JSONArray)
            {
                seccionegreso(JSONArray); 
            },
            error: function(JSONArray) 
            {
                // Se crea un mensaje que se visualiza al ocurrir un error
                
                alert('Error al conectar con Servletggeneral');
            }
          }); 
}   

/*Funcion que carga seccion ingraso*/

function seccionegreso(jsonArray)
{
    // Se crea un un ciclo nombrado variable "f" que recorre 4 posiciones
    
    for (var F = 0; F < jsonArray. length; F++)
    {
        /* Se recorre la posicion 0 del arreglo "F"*/
        
        if (F==0)
        {                       
            // Se le da nombre al encabezado
                                
            var codigoHTML = '<div class="encabezado2">Egresos</div>'+
                              '<div class="tabla">'+                        			                            
                              
                                         /*Se crean las pestañas*/
                              
                                         '<ul class="tabs">'+								                                                                              
                                             '<li><a href="#Pviaticos">Viaticos</a></li>'+     
                                         '</ul>'+     

                                     /*Se crea un contenedor para ubicar las pestaña*/ 
                                            
                                     '<div class="tab_container">';                                                                                   
       }                                            
                                          /*Se llama a la pestaña para trabajar con esta*/
            
           codigoHTML+=                  '<div id="Pviaticos" class="tab_content">'+
               
                                             /*Se crea una tabla para ubicar los datos*/
               
                                             '<table class="tbonita">'+
                                                 '<tr align="left">'+           				                                                        
                                                        '<th>id_viaticos</th>'+
                                                        '<th>id_usuario</th>'+
                                                        '<th>valor</th>'+
                                                        '<th>concepto</th>'+
                                                        '<th>fecha</th>'+
                                                        '<th>codMunicipio</th>'+
                                                        '<th>doc_soporte</th>'+
                                                 '</tr>';                                                          
            
            /* Se crea un ciclo nombrado variable "I" */
                                                          
            for (var I = 0; I < jsonArray[F]. length; I++)
            {      
                   /*se le asigna una condicion para darle color a las filas pares  */ 
                
                   if (I % 2 == 0)
                        codigoHTML+=               '<tr>';
                    
                   /* Se llaman los siguientes campos, de la base de datos*/
                    
                   else
                        codigoHTML+=               '<tr class="even">';
                   
                   codigoHTML+=                        '<td>' + jsonArray[F][I].id_viaticos + '</td>';
                   codigoHTML+=                        '<td>' + jsonArray[F][I].id_usuario + '</td>'; 
                   codigoHTML+=                        '<td>' + jsonArray[F][I].valor + '</td>';
                   codigoHTML+=                        '<td>' + jsonArray[F][I].concepto + '</td>';
                   codigoHTML+=                        '<td>' + jsonArray[F][I].fecha + '</td>';
                   codigoHTML+=                        '<td>' + jsonArray[F][I].codMunicipio + '</td>';
                   codigoHTML+=                        '<td>' + jsonArray[F][I].doc_soporte + '</td>';
                   codigoHTML+=                    '</tr>';
            }        
            
                  /*cerramos las tablas(table) y las capas (capas)*/
            
                   codigoHTML+=              '</table>'+                                         
                                          '</div>'+                                          
                                         '</div>'+
                                     '</div>';
                        
    }
    
    /*Se activan los eventos*/
    
    $("#datos").html(codigoHTML);  
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#EgresosFinanciera").addClass("active");
    $(this).addClass("active"); 
    
    // Activador de eventos
    
    activadorEventosVendedores();                      
    
    // Se activan los eventos
    
    IniciarTabers();
}

/*Funcion seccionListadoProductos*/

function seccionListadoProductos()
{
    var codigoHTML = '<div class="encabezado2">Listado de Productos</div>'+
                     '<div class="tabla">'+
                        
                    '</div>';

    $("#datos").html(codigoHTML);  
}

/*Funcion seccionDatosPerfil*/

function seccionDatosPerfil()
{
    var codigoHTML = '<div class="encabezado2">Datos del Jefe Comercial</div>'+
                     '<div class="tabla">'+
                        
                    '</div>';

    $("#datos").html(codigoHTML);
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
}

/*RUTINA QUE SE EJECUTA AL CARGARSE LA PAGINA WEB */

/*Creamos las variables utilizadas en la geolocalizacion*/

var pagina;
var map;
var latitud;
var longitud;
var precision;
pagina=$(document);
pagina.ready(inicializar);

/* FUNCION QUE INICIALIZA LAS OPERACIONES PRINCIPALES EN JQUERY */
function inicializar()
{
/* Se crea la variable (Gcomercial) y se le asigna valores */  

    var Gcomecial;
    vendedores=$("#Vendedores");
    vendedores.click(menuVendedores);
    
/* Inicializacion de los eventos */

    menuVendedores();
    $(".nav .menu li a#Vendedores").addClass("active");
    activadorEventosVendedores();
    
// Se crea la variable (clientes) */  
  
    var clientes;
    
/* Inicializacion de los eventos */

    clientes=$("#Clientes");
    clientes.click(menuClientes);
    
// Se crea la variable (productos) */  
  
    var productos;
    
/* Inicializacion de los eventos */
    
    productos=$("#Productos");
    productos.click(menuProductos);
    
// Se crea la variable perfil */  
    
    var perfil;
    
/* Inicializacion de los eventos */

    perfil=$("#Perfil");
    perfil.click(menuPerfil);
}

/*Funcion (activadorEventosvendedores) que activa los eventos principales del menu vertical*/

function activadorEventosVendedores()
{
    // Se declara las variables del menu vertical */
    
    var   VisualizarV, ubicacionV,actividadesV, viaticosV, comisionesV;
    
    /* Se le asigna eventos a las anteriores variables */
    
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
    

    /* Variables de las opciones del listado de vendedores */

    var VisualizarV,VisualizarW;
    var volverVendedor, vBorrarV, vHideDelV;
    var  ingresosV, egresosV;   
    
    /* Asignacion de evntos a las variables declaradas */
    
    VisualizarV=$(".VerVendedor");
    VisualizarV.click(VerClientes);
    VisualizarW=$(".VerClientes");
    VisualizarW.click(VerClientes);
    ingresosV=$("#IngresosFinanciera");
    ingresosV.click(VerIngreso);
    egresosV=$("#EgresosFinanciera");
    egresosV.click(VerEgreso);
    
}

/* Funciones para crear y activar eventos en los tabers(pestañas) de la aplicacion */

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

/* funciona para la asignacion de eventos a las variables de claradas  */

function menuVendedores()
{ 
    
    // Se le asigna un titulo al encabezado
    
   var codigoHTML = '<div class="encabezado">Gestion Comercial</div>'+
       
                    /*Se carga el menu vertical*/
       
                    '<ul class="menu-vertical">'+
                        '<li><a href="#1" id="listadoVentas"><img src="images/IconoOpciones.png"/>Visualizar</a></li>'+
                        '<li><a href="#2" id="ventasVendedor"><img src="images/IconoOpciones.png"/> Reporte Estadistico</a></li>'+
                        '<li><a href="#3" id="ActividadesVendedor"><img src="images/IconoOpciones.png"/>Actividades Vendedores</a></li>'+
                        '<li><a href="#4" id="viaticosVendedor"><img src="images/IconoOpciones.png"/> Actividades Clientes</a></li>'+
                   '</li>'+
                    '</ul>'; 
                
    /* Se activa los eventos y propeidades */

    $(".content-float-vendedores").html(codigoHTML).css({height:"165px"});
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    
    //Le asignamos el lugar donde se ubicara mediante un activador
    
    seccionListado();    
    
    // Activador de eventos
    
    activadorEventosVendedores();
}

/* Funcion para la asignacion de eventos para las varibles declaradas */ 

function menuClientes()
{
    // Se le asigna un titulo al encabezado
    
   var codigoHTML = '<div class="encabezado">Gestión Financiera</div>'+
       
                    /*Se carga el menu vertical*/
       
                    '<ul class="menu-vertical">'+
                    '<li><a href="#2" id="IngresosFinanciera"><img src="images/IconoOpciones.png"/>Ingresos</a></li>'+  
                    '<li><a href="#1" id="EgresosFinanciera"><img src="images/IconoOpciones.png"/>Egresos</a></li>'+                   
                    '</ul>'; 

    /* Se activa los eventos y propeidades */
    
    $(".content-float-vendedores").html(codigoHTML).css({height:"100px"});
    $(".nav .menu li a").removeClass("active"); 
    $(this).addClass("active");         
    $(".menu-vertical li a#IngresosFinanciera").addClass("active");    
    
    // Activador de eventos
    
    activadorEventosVendedores();     
    
     //Le asignamos el lugar donde se ubicara mediante un activador
    
    VerIngreso();
     
}

/*Funcion para la asigancion de eventos para las variables declaradas*/

function menuProductos()
{   
    // Se le asigna un titulo al encabezado
    
   var codigoHTML = '<div class="encabezado">Gestión de Productos</div>'+
                    '<ul class="menu-vertical">'+
                        
                    '</ul>'; 
                
    /* Se activa los eventos y propeidades */
    
    $(".content-float-vendedores").html(codigoHTML);
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    
    //activador de eventos
    
    seccionListadoProductos();
    
}

/* funcion para la asignacion e eventos para las variables declaradas*/

function menuPerfil()
{
   // Se le asigna un titulo al encabezado      
    
   var codigoHTML = '<div class="encabezado">Gestión del Perfil</div>'+
                    '<ul class="menu-vertical">'+
                        
                    '</ul>'; 
    /* Se activa los eventos y propeidades */
    
    $(".content-float-vendedores").html(codigoHTML);
    $(".nav .menu li a").removeClass();
    $(this).addClass("active");
    
    //Le asignamos el lugar donde se ubicara mediante un activador
    
    seccionDatosPerfil();
}

/* Funcio que sirve para comunicarse con el servlet */

function seccionListado()
{
  var request = {"Ggeneral":"ListadoVendedoresClientes"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
            data: {gerente:jsonobj},
            dataType: 'json',
            
            /*conectamos con el servidor*/
            
            url: 'Servletggeneral',
            type: 'POST',
            
            /*funcion que comunica con cargarListado*/
            
            success: function(JSONArray)
            {
                cargarListado(JSONArray); 
            },
            error: function(JSONArray) 
            {   
                // se coloca un mensaje de alerta en caso e que encuentre un error
                
                alert('Error al conectar con Servletggeneral');
            }
          });
}

/*Funcion que recorre las posiciones "K==0" y "K==1" del arreglo K */

function cargarListado(jsonArray)
{   
    for (var k = 0; k < jsonArray.length; k++)
    {   
        /* Se recorre la posicion 0 en K */
        if (k==0)
        {                               
                                    // Se le asigna un titulo al encabezado
                                    
               var codigoHTML =     '<div class="encabezado2">Visualizar Vendedores/Clientes</div>'+
                                    '<div class="tabla">'+
                                    
                                        /*creamos dos pestañas */
                                    
                                       '<ul class="tabs">'+
                                           '<li><a href="#Laboral">Vendedores</a></li>'+
                                           '<li><a href="#Zonas">Clientes</a></li>'+
                                       '</ul>'+                       
                                       
                                       /*Creamos un contenedor donde se ubicara la primera pestaña*/
                                       
                                       '<div class="tab_container">'+                           
                                           
                                            /* Utilizamos la primera pestaña*/
                                           
                                            '<div id="Laboral" class="tab_content">'+
                                                
                                                /*Creamos una tabla para ubicar los titulos*/
                                                
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
                                              
               /* Se crea un ciclo nombrado variable "i" */
               
               for (var i = 0; i < jsonArray[k]. length; i++)
               {        
                      /* se le asigna una condicion para darle color a las filas pares  */
                     
                      if (i % 2 == 0)
                           codigoHTML+=           '<tr>';
                                                                     
                      else
                           codigoHTML+=           '<tr class="even">';    
                       
                      // se le asigna la funcion "VerVendedor" a la imagen                      
                      
                      codigoHTML+=                  '<td><img src="images/b_search.png" class="VerVendedor" id="'+jsonArray[k][i].cedula_usuario+'"/></td>';
                      codigoHTML+=                  '<td>'+ jsonArray[k][i].cedula_usuario + '</td>';
                      codigoHTML+=                  '<td>' + jsonArray[k][i].nombre_usuario + '</td>';  
                      codigoHTML+=                  '<td>' + jsonArray[k][i].direccion_usuario + '</td>'; 
                      codigoHTML+=                  '<td>' + jsonArray[k][i].telefono_usuario + '</td>';
                      codigoHTML+=                  '<td>' + jsonArray[k][i].celular_usuario + '</td>';
                      codigoHTML+=                  '<td>' + jsonArray[k][i].email_usuario + '</td>';
                      codigoHTML+=                '</tr>';

               }

                /*cerramos las tablas(table) y las capas (capas)*/

                codigoHTML+=                    '</table>'+
                                            '</div>';  
        }
        
        /* Se recorre la posicion 1 en K */
        
        if (k==1)
        {
                                            // utilizamos la segunda pestaña
            
            codigoHTML+=                    '<div id="Zonas" class="tab_content">'+									
                
                                                /*Se crea una tabla para ubicar los datos*/
                                    
                                                '<table class="tbonita">'+
                                                    '<tr align="left">'+           				                                                                                                                                                                           
                                                        '<th></th>'+
                                                        '<th>ID</th>'+
                                                        '<th>Nombre</th>'+
                                                        '<th>Apellido</th>'+
                                                        '<th>Teléfono</th>'+
                                                        '<th>Fecha</th>'+
                                                        '<th>Razón Social</th>'+
                                                    '</tr>';            													          
                          
             /* Se crea un ciclo nombrado variable "i" */
                          
            for (var j = 0; j < jsonArray[k].length; j++)
            {
                   /* se le asigna una condicion para darle color a las filas pares  */
                
                   if (j % 2 == 0)
                        codigoHTML+=               '<tr>';
                   else
                       codigoHTML+=           '<tr class="even">';
                   // se le asigna la funcion "VerClientes" a la imagen
                                      
                   
                    codigoHTML+=                        '<td><img src="images/b_search.png" class="VerVendedor" id="'+jsonArray[k][j].cedula+'"/></td>';
                    codigoHTML+=                        '<td>'+ jsonArray[k][j].id_cliente + '</td>';
                    codigoHTML+=                        '<td>' + jsonArray[k][j].nombre + '</td>';  
                    codigoHTML+=                        '<td>' + jsonArray[k][j].apellido + '</td>'; 
                    codigoHTML+=                        '<td>' + jsonArray[k][j].telefono + '</td>';
                    codigoHTML+=                        '<td>' + jsonArray[k][j].fecha + '</td>';
                    codigoHTML+=                        '<td>' + jsonArray[k][j].razon_social + '</td>';
                    codigoHTML+=                        '</tr>';

            }
        
            /*cerramos las tablas(table) y las capas (capas)*/
        
            codigoHTML+=                        '</table>'+
                                            '</div>'+
                                       '</div>'+
                                    '</div>';
       }
    }
    
    /* Se activan los eventos y se activan las pestañas */
    
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#listadoVentas").addClass("active");
    
    /*Le asignamos eventos a los botones*/
    
    $(".VerVendedor").click(VerVendedor);
    $(".VerClientes").click(VerClientes);
    
    // activador de eventos
    
    activadorEventosVendedores();    
    
    // activamos las pestañas
    
    IniciarTabers();   
       
}

/*Funcion que inicia la geolocalizacion */
    
function VerVendedor() 
{
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition(coordenadas, errores);
    }
    
    else
    {
        // Se coloca un mensaje de alerta en caso de que el navegador no soporte la geolocalizacion
        alert('Tu navegador no soporta geolocalización');
    }
}

/* Funcion que activa las variables latitud, longitud, precision */

function coordenadas(position) 
{
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;
    precision = position.coords.accuracy;  
    cargarMapa();
}

/* Funcion donde se le asigna un mensaje de alerta segun el codigo donde se halle el error*/

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

/* Funcion que le asigna atributos, ubicacion  yc aracteristicas a la geolocalizacion*/

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
}


/*Funcion para la asigancion de eventos que visualizan la ubicacion geografica del clientes*/

function VerClientes()
{
    // Le asignamos un titulo al encabezado
    
    var codigoHTML = '<div class="encabezado2">Ubicacion Geografica Cliente </div>'+
		     '<br>'+
                     
                     // creamos una tabla para ubicar contenido
                     
                     '<div class="tabla">'+
                         
                     // creamos un boton para regresar a la pagina anterior
                         
		     '<input type="button" value="Volver" class="button" id="volverAddVendedor" />'+
		     											
                     // creamos una capa para agregar un contenido                                                                                                         
                                                                                                        
                     '<div class="Ubicacion-Geografica">'+		     
                     
		     '</div>'+
		     '</div>';
                 
    // le asignamos la funcion que loc argara 
    
    VerVendedor();          
    
    /*activamos los eventos*/
    
    $("#datos").html(codigoHTML);
    
    // funcion que activa la interaccion entre el boton y otra funcion
    
    $("#volverAddVendedor").click(seccionListado);  
    
    // activador de eventos
    
    activadorEventosVendedores();
}

/* Funcio que sirve para comunicarse con el servlet */

function seccionVentas()
{
            var request = {"Ggeneral":"ReporteEstadistico"};
            var jsonobj=JSON.stringify(request);
            $.ajax({
                    data: {gerente:jsonobj},
                    dataType: 'json',
                    
                    /*conectamos con el servidor*/
                    
                    url: 'Servletggeneral',
                    type: 'POST',
                    
                    /*funcion que conecta con seccionlistadopedidos*/
                    
                    success: function(jsonArray)
                    {
                        seccionListadoPedidos(jsonArray);     
                    },
                    error: function(jsonArray) 
                    {   
                        // Se coloca un mensaje de alerta por si llegase a presentar un error
                        
                        alert('Error al conectar con Servletggeneral');
                    }
                  });
}

/* funcion para cargar datos */

function seccionListadoPedidos(jsonArray)

{                             // Se le da nombre al encabezado del contenido
    
             var codigoHTML = '<div class="encabezado2">Reporte Estadistico De Las Ventas</div>'+                 
                 
                              // Se crea un div o capa para ubicar el contenido     
                          
                               '<div class="tabla">'+                
                                   
                                   /* Se crea un contenedor o margen para ubicar dentro el contenido */
                               
                                  '<div class="tab_container">'+                                                                            
                                      '<div id="Fecha" class="tab_content">'+ 
                                          '<form id="Reporte">'+ 
                                              '<table align="center" border="0" align="left">'+ 
                                                  '<tr>'+ 
                                                      '<th align="right" style="padding-right:5px;">Vendedor</th>'+ 
                                                      '<td>'+ 
                                                          '<select name="id_usuario" id="vend" style="width:160px;">'+                                                              
                                                          '</select>'+
                                                             '</td>'+
                                                          '<th align="right" style="padding-right:5px;">Identificacion</th>'+ 
                                                      '<td>'+                                                                                                                                                                               
                                                        /*Se exporta el identificador "Ident"*/
                                                         '<input id="Ident" type="text" name="cedula_usuario" style="font-size:14px;"/>'+ 
                                                      '</td>'+ 
                                                  '</tr>'+ 					
                                                  '<tr>'+ 
                                                        '<th align="right" style="padding-right:5px;">Departamento</th>'+ 
                                                      '<td>'+ 
                                                          '<select name="cod_departamento" id="deptos" style="width:160px;" onchange="cargarMunicipios()">'+
                                                              '<option value="null"></option>';
                                            
                                            /* Se crea un ciclo declarando la variable "z" */
                                            
                                            for (var z = 0; z < jsonArray. length; z++)
                                            {
                                              // Recibe las variables "cod_departamento" y "nombre_depto"
                                              codigoHTML += '<option value="'+ jsonArray[z].cod_departamento +'">'+ jsonArray[z].nombre_depto +'</option>';
                                            }          
                                              codigoHTML += '</select>'+
                                                             '</td>'+
/*____________________________________________________________________________________________________________________________*/                                               
                                                          '<th align="right" style="padding-right:5px;">Ciudad</th>'+ 
                                                       '<td>'+ 
                                                           '<select name="codMunicipio" style="width:160px;" id="municipios">'+
                                                           '</select>'+
                                                      '</td>'+ 
                                                  '</tr>'+ 																
/*____________________________________________________________________________________________________________________________*/                                           
                                                  '<tr>'+ 
                                                      
                                                      /* Se le asigna espacios y caracteristicas a los calendarios*/
                                                      
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
                                                        '<input type="submit" value="Generar Reporte" class="button" id="VerReporte" />'+ 
                                                      '</td>'+ 
                                                  '</tr> '+ 																
                                              '</table>'+ 											                                                      
                                             '</form>'+
                                      '</div>';

    /*Se activan los evento*/

    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#ventasVendedor").addClass("active");
    
    //activamos las pestañas
    
    IniciarTabers();
    
    // Le asignamos un lugar para ubicar el contenido
    
    CargarVendedores();
    
    
    /*Se asignan las variables a los calendarios*/
    
    $('#date_field').datepick({yearRange: '1980:2050'});
    $('#date_field2').datepick({yearRange: '1980:2050'});
    $('#date_field3').datepick({yearRange: '1980:2050'});
    $('#date_field4').datepick({yearRange: '1980:2050'});
    $('#date_field5').datepick({yearRange: '1980:2050'});
    $('#date_field6').datepick({yearRange: '1980:2050'});
    
    // Activador de eventos
    
    activadorEventosVendedores();
    
    // Se activa la interaccion que comunica el boton ".button" y la funcion "VerReporte"
    
    $(".button").click(VerReporte);       
 
}

/* Funcio que sirve para comunicarse con el servlet */

function cargarMunicipios()
{   
    var depto=$('#deptos').val(); 
    var request = {"Ggeneral":"Municipios","DatosDepto":depto};    
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {gerente:jsonobj},
                    dataType: 'json',
                    
                    /*conectamos con el servidor*/
                    
                    url: 'Servletggeneral',
                    type: 'POST',
                    
                    /*funcion que comunica con municipios*/
                    
                    success: function(jsonArray)
                    {
                        Municipios(jsonArray);    
                    },
                    error: function(jsonArray) 
                    {   
                        // Se coloca un mensaje de alerta por si llegase a presentar un error
                        alert('Error al conectar con Servlet');
                    }
           });
}

/*  funcion que carga el nombre de los municipios */

function Municipios(jsonArray)
{
       var codigoHTML;          
                                for (var N = 0; N < jsonArray.length; N++)        
                                {
           codigoHTML +=         '<option value="'+ jsonArray[N].codMunicipio +'">'+ jsonArray[N].nombreMunicipio +'</option>';                                                 
                                }
           codigoHTML+=          '<option value="null"></option>';   
           
    $("#municipios").html(codigoHTML);
}

/* Funcion que comunica con el servidor */

function CargarVendedores()
{    
    var request = {"Ggeneral":"Vendedores"};    
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {gerente:jsonobj},
                    dataType: 'json',
                    
                    /*conectamos con el servidor*/
                    
                    url: 'Servletggeneral',
                    type: 'POST',
                    
                    /*funcion que comunica con vendedores*/
                    
                    success: function(jsonArray)
                    {
                        Vendedores(jsonArray);    
                    },
                    error: function(jsonArray) 
                    {   
                        // Se coloca un mensaje de alerta por si llegase a presentar un error
                        alert('Error al conectar con Servlet');
                    }
           });
}

/*  funcion que carga el nombre de los vendedores */

function Vendedores(jsonArray)
{
       var codigoHTML;                 
           codigoHTML +=        '<option value="null"></option>';
                                for (var N = 0; N < jsonArray.length; N++)        
                                {
           codigoHTML +=         '<option value='+ jsonArray[N].id_usuario +'>'+ jsonArray[N].nombre_usuario +'</option>';                                                 
                                }
              
           
    $("#vend").html(codigoHTML);
}

/* Funcion que comunica con el servidor */

function CargarIdent()
{  
    var request = {"Ggeneral":"Identidad"};    
    var jsonobj=JSON.stringify(request);
    $.ajax({
                    data: {gerente:jsonobj},

                    dataType: 'json',
                    
                    /*conectamos con el servidor*/
                    
                    url: 'Servletggeneral',
                    type: 'POST',
                    
                    /*funcion que comunica con vendeores*/
                    
                    success: function(jsonArray)
                    {
                        Vendedores(jsonArray);    
                    },
                    error: function(jsonArray) 
                    {   
                        // Se coloca un mensaje de alerta por si llegase a presentar un error
                        alert('Error al conectar con Servlet');
                    }
           });
        
}

/* Funcion que carga la identificaicon de los vededores*/

function Identidad(jsonArray)
{
                        
           var codigoHTML;      for (var N = 0; N < jsonArray.length; N++)        
                                {
           codigoHTML +=         '<option value='+ jsonArray[N].id_usuario +'>'+ jsonArray[N].cedula_usuario +'</option>';                                                 
                                }
              
$("#Ident").html(codigoHTML);            
}

/*Funcion para la asigancion de eventos y visualizacion de la imagen del reporte estadistico*/

function VerReporte()
{
    /*le asignamos un titulo a el encabezado*/
    
    var codigoHTML = '<div class="encabezado2">Reporte Estadistico De Las Ventas</div>'+
					 '<br>'+
                                         
                        /*cramos una tabla para ubicar el contenido*/
                                         
                        '<div class="tabla">'+
				'<input type="button" value="Volver" class="button" id="return" />'+
				'<div class="tab_container">'+  												
				'<td align="center"><img src="images/ESTADISTICA.png"</td>'+		
			'</div>'+
                      '</div>';
    
    /*Se activan los eventos*/
                  
    $("#datos").html(codigoHTML);
    $("#return").click(seccionVentas);   
    activadorEventosVendedores();	
	
}

/*Funcion que comunica con el servidor*/

function seccionActividades()
{
       var request = {"Ggeneral":"ListadoComisionesPedidosEtc"};
            var jsonobj=JSON.stringify(request);
            $.ajax({
                    data: {gerente:jsonobj},
                    dataType: 'json',
                    
                    /*conectamos con el servidor*/
                    
                    url: 'Servletggeneral',
                    type: 'POST',
                    
                    /*funcion que nos comunica con cargaractividades*/
                    
                    success: function(JSONArray)
                    {                        
                        cargarActividades(JSONArray);     
                    },
                    error: function(JSONArray) 
                    {   
                        // Se coloca un mensaje de alerta por si llegase a presentar un error
                        alert('Error al conectar con Servletggeneral');
                    }
                  });
}

/*Funcion que crea un arreglo que recorre 5 posiciones obteniendo las actividades de los vendedores */

function cargarActividades(jsonArray)
{
    
  // Se crea un un ciclo nombrado variable "x" que recorre 3 posiciones
    
  for (var x = 0; x < jsonArray. length; x++)
  {      
      
      /* Se recorre la posicion 0 del arreglo "x"*/
      
      if (x==0)
      {    
            /*le asignamos un titulo a el encabezado*/
          
            var codigoHTML = '<div class="encabezado2">Actividad Vendedores</div>'+
                                '<div class="tabla">'+                                                                                                        
                                
                                   /*Creamos las pestañas*/
                                
                                    '<ul class="tabs">'+
                                        '<li><a href="#Pedidos">Pedidos</a></li>'+
                                        '<li><a href="#Viaticos">Viaticos</a></li>'+                                                                                    
                                        '<li><a href="#Visitas">Visitas</a></li>'+                                                                                                                                                                                                                    
                                    '</ul>'+                                                                                                                    
								    
                                    /*se crea un contenedor para ubicar el contenido*/                                
                                                                    
                                    '<div class="tab_container">'+  
                                    '<div id="Pedidos" class="tab_content">'+							                            
                                        
                                        /*Se crea una tabla para ubicar los datos*/
                                        
                                            '<table class="tbonita">'+
                                                '<tr align="left">'+           				                                       
                                                    '<th>id_pedido</th>'+
                                                    '<th>valor_del_iva</th>'+                               
                                                    '<th>valor_total</th>'+
                                                    '<th>id_usuario</th>'+
                                                    '<th>fecha</th>'+
                                                    '<th>hora</th>'+                                                                                                      
                                                    '<th>id_cliente</th>'+   
                                                '</tr>';     
                                    
            /* Se crea un ciclo nombrado variable "A" */
                                    
            for (var A = 0; A < jsonArray[x]. length; A++)
            {
                
                  /*se le asigna una condicion para darle color a las filas pares  */ 
                
                   if (A % 2 == 0)
                        codigoHTML+=    '<tr>';
                   else
                        codigoHTML+=    '<tr class="even">';                  
                        
                        /* Se llaman los siguientes campos, de la base de datos*/
                    
                        codigoHTML+=    '<td>' + jsonArray[x][A].id_pedido + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][A].valor_del_iva + '</td>'; 
                        codigoHTML+=    '<td>' + jsonArray[x][A].valor_total + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][A].id_usuario + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][A].fecha + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][A].hora + '</td>';                                                
                        codigoHTML+=    '<td>' + jsonArray[x][A].id_cliente + '</td>';  
                        codigoHTML+=    '</tr>';

            }                
            
                        /*cerramos las tablas(table) y las capas (capas)*/
                        
                        codigoHTML+=        '</table>'+											                                        
                                        '</div>';
                                    
      }           			                

      /* Se recorre la posicion 1 del arreglo "x"*/

      if(x==1)
      {                                    
                /*le asignamos un nombre para el encabezado*/
                codigoHTML+=        '<div id="Viaticos" class="tab_content">'+							
                    
                                            /*Se crea una tabla para ubicar los datos*/
                    
                                            '<table class="tbonita">'+
                                                '<tr align="left">'+           				                                         
                                                    '<th>id_viaticos</th>'+
                                                    '<th>id_usuario</th>'+
                                                    '<th>valor</th>'+
                                                    '<th>concepto</th>'+
                                                    '<th>fecha</th>'+
                                                    '<th>codMunicipio</th>'+
                                                    '<th>doc_soporte</th>'+
                                                '</tr>';             
                                    
                /* Se crea un ciclo nombrado variable "B" */
                                    
                for (var B = 0; B < jsonArray[x]. length; B++)
                {
                    
                    /*se le asigna una condicion para darle color a las filas pares  */ 
                    
                    if (B % 2 == 0)
                         codigoHTML+=    '<tr>';
                    else
                        
                        
                        /* Se llaman los siguientes campos, de la base de datos*/
                        
                         codigoHTML+=    '<tr class="even">';                  
                         codigoHTML+=    '<td>' + jsonArray[x][B].id_viaticos + '</td>';
                         codigoHTML+=    '<td>' + jsonArray[x][B].id_usuario + '</td>'; 
                         codigoHTML+=    '<td>' + jsonArray[x][B].valor + '</td>';
                         codigoHTML+=    '<td>' + jsonArray[x][B].concepto + '</td>';
                         codigoHTML+=    '<td>' + jsonArray[x][B].fecha + '</td>';
                         codigoHTML+=    '<td>' + jsonArray[x][B].codMunicipio + '</td>';
                         codigoHTML+=    '<td>' + jsonArray[x][B].doc_soporte + '</td>';
                         codigoHTML+=    '</tr>';

                }                      
                        /*cerramos las tablas(table) y las capas (capas)*/
                                    
                         codigoHTML+=       '</table>'+                            
                                    '</div>'; 
     }                                
 
     /* Se recorre la posicion 2 del arreglo "x"*/

      if (x==2)                                                       
      {    
                /*Le asignamos un titulo a el encabezado*/
          
                codigoHTML+=        '<div id="Visitas" class="tab_content">'+							
                    
                                        /*Se crea una tabla para ubicar los datos*/
                    
                                        '<table class="tbonita">'+
                                            '<tr align="left">'+           				   					
                                                '<th>id_visita</th>'+
                                                '<th>fecha</th>'+
                                                '<th>id_cliente</th>'+
                                                '<th>id_usuario</th>'+
                                                '<th>descripcion</th>'+					                                                                                                       
                                            '</tr>'; 		            																		                               
                     
                /* Se crea un ciclo nombrado variable "D" */     
                     
                for (var D = 0; D < jsonArray[x]. length; D++)
                {
                   /*se le asigna una condicion para darle color a las filas pares  */  
                    
                   if (D % 2 == 0)
                        codigoHTML+=    '<tr>';
                   else
                       
                       /* Se llaman los siguientes campos, de la base de datos*/
                       
                        codigoHTML+=    '<tr class="even">';                  
                        codigoHTML+=    '<td>' + jsonArray[x][D].id_visita + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][D].fecha + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][D].id_cliente + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][D].id_usuario + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[x][D].descripcion + '</td>';                                              
                        codigoHTML+=    '</tr>';
                        
                        /*cerramos las tablas(table) y las capas (capas)*/
                                               
                        codigoHTML+=    '</table>'+  
                                     '</div>'+      
                                    '</div>'+                                          
                                '</div>';
            } 
     }
     
  }
  
    /*Se activan los eventos*/
    
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#ActividadesVendedor").addClass("active"); 
    
    // Activador de eventos
    
    activadorEventosVendedores();
    
    // Activador de pestañas
    
    IniciarTabers();            
}

/* Funcion que carga la seccion de los viaticos */

/*function CargarPagos(evento)
{
    evento.preventDefault();
    var datos_pagos = $(this).serializeArray();   
    var datos = JSON.stringify(SerializeToJson(datos_pagos));    
    var request = {"Ggeneral":"obtenerpagos","Datos":datos};
    var jsonobj=JSON.stringify(request);
    alert(jsonobj.toString());
    
    $.ajax({        
                    data: {gerente:jsonobj},
                    type: 'POST',
                    dataType: 'json',
                    url: 'Servletggeneral',
                    success: function(jsonArray)
                    {
                        seccionViaticos(jsonArray);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}*/
function seccionViaticos()
{                    // Se le asigna un nombre al encabezado
    var codigoHTML = '<div class="encabezado2">Top 10 Clientes</div>'+                                     
			'<div class="tabla">'+
                            
                                /*Se crean tres pestañas */
                            
                                '<ul class="tabs">'+								
                                    '<li><a href="#Pagos">Pagos</a></li>'+
                                    '<li><a href="#Visitas">Visitas</a></li>'+
                                    '<li><a href="#Pedidos">Pedidos</a></li>'+
                                '</ul>'+                            
                            
                            // Se crea un contenedor en el que apareceram los datos
                            
                            '<div class="tab_container">'+                           
                                
                                /* Se crea la primera pestaña con sus caracteristicas*/
                                
                                '<div id="Pagos" class="tab_content">'+							
                                    '<table class="tbonita">'+
					'<tr align="left">'+        
                                            '<form action="" method="POST" name="form_Pagos">'+
						'<table align="center" border="0" align="left">'+
                                                    '<tr>'+
                                                    '<th align="center" style="padding-right:5px;">Categoria</th>'+
                                                    '<td>'+
                                                        '<select name="criterios" style="width:140px;">'+
                                                        '<option value="Null"></option>'+
                                                        '<option value="All">Todos</option>'+
                                                        '<option value="MasPuntual">Mas Puntual</option>'+
                                                        '<option value="MenosPuntual">Menos Puntual</option>'+
                                                        '</select>'+
                                                    '</td>'+                                   
                                                        '<tr>'+
                                                            '<td colspan="4" align="center"><input type="submit" value="Ver" class="button" />'+
                                                        '</td>'+											
                                                        '<table class="tbonita id="TablaPagos">'+
                                                         '<tr align="left">'+           				                                       
                                                            '<th>id_pago</th>'+
                                                            '<th>id_pedido</th>'+                               
                                                            '<th>id_cliente</th>'+                                                                                                                        
                                                            '<th>fecha</th>'+                                                                                                      
                                                            '<th>cantidad_de_pago</th>'+   
                                                            '<th>descripcion</th>'+
                                                        '</tr>'+
                                                '</table>'+										
                                                
                                            '</form>'+     
					'</tr>'+       									
                                    '</table>'+
                                '</div>'+
                            
                            /*Se crea la segunda pestaña con sus caracteristicas*/
                            
                            '<div id="Visitas" class="tab_content">'+							
                                '<table class="tbonita">'+
                                    '<tr align="left">'+        
                                        '<form action="" method="POST" name="form_buscar_venta">'+
                                            '<table align="center" border="0" align="left">'+
                                                '<tr>'+
                                                    '<th align="center" style="padding-right:5px;">Categoria</th>'+
                                                        '<td>'+
                                                            '<select name="criterios" style="width:140px;">'+
                                                            '<option value="Null"></option>'+
                                                            '<option value="All">Todos</option>'+
                                                            '<option value="Masvisitas">Mas Visitados</option>'+
                                                            '<option value="MenosVisitas">Menos Visitados</option>'+
                                                            '</select>'+
                                                        '</td>'+                                   					
                                                        '<tr>'+
                                                            '<td colspan="4" align="center"><input type="submit" value="Ver" class="button" />'+
                                                        '</td>'+			
                                                        
                                                        /*Se crea la tabla donde se ubicaran los datos*/
                                                        							
                                                                    '</tr>'+       
                                                                '</table>'+										
                                                                '<table class="tbonita">'+
                                                                   '<tr align="left">'+           				   
                                                                        '<th></th>'+
                                                                        '<th>id_visita</th>'+
                                                                        '<th>fecha</th>'+
                                                                        '<th>id_cliente</th>'+
                                                                        '<th>id_usuario</th>'+
                                                                        '<th>descripcion</th>'+
                                                                    '</tr>'+   																			                                                                                                                                         									
                                                                '</table>'+     		   
                                                
                                                /*Se crea la tercera pestaña con sus propiedades y caracteristicas*/

						'<div id="Pedidos" class="tab_content">'+							
                                                    '<table class="tbonita">'+
                                                        '<tr align="left">'+        
                                                            '<form action="" method="POST" name="form_buscar_venta">'+
                                                                '<table align="center" border="0" align="left">'+
                                                                    '<tr>'+
                                                                        '<th align="center" style="padding-right:5px;">Categoria</th>'+
                                                                            '<td>'+
                                                                                '<select name="criterios" style="width:140px;">'+
                                                                                '<option value="Null"></option>'+
                                                                                '<option value="All">Todos</option>'+
                                                                                '<option value="MasPedidos">Mas Pedidos</option>'+
                                                                                '<option value="MenosPedidos">Menos Pedidos</option>'+
                                                                                '</select>'+
                                                                                '<th align="right" style="padding-right:5px;">Valor</th>'+                                                                                
                                                                            '</td>'+                                   
                                                                            '<tr>'+
                                                                                '<td colspan="4" align="center"><input type="submit" value="Ver" class="button" />'+
                                                        '</td>'+																									
								'</table>'+	
                                                                
                                                            /*Se crea la tabla donde se ubicaran los datos*/    
                                                                
                                                            '<table class="tbonita">'+
                                                                '<tr align="left">'+           				   
                                                                    '<th></th>'+
                                                                    '<th>id_pedido</th>'+
                                                                    '<th>valor_del_iva</th>'+
                                                                    '<th>valor_total</th>'+
                                                                    '<th>id_usuario</th>'+
                                                                    '<th>fecha</th>'+
                                                                    '<th>hora</th>'+
                                                                    '<th>id_cliente</th>'+
                                                                '</tr>'+   																			
                                                            '</form>'+     
							'</tr>'+       									
                                                    '</table>'+																											
						'</div>'+
                        '</div>'; 
                    
/* Se activan los eventos*/                    
                    
$("#datos").html(codigoHTML);
$(".menu-vertical li a").removeClass("active");
$(this).addClass("active");

// Se activan las pestañas

IniciarTabers();

// Activador de eventos

activadorEventosVendedores();
$("#form_Pagos").submit(CargarPagos);

 
}

function seccionComisiones()
{
    var codigoHTML = 
        
    /*Se activan los eventos */        
        
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
    
    /*Se activan los calendarios*/
    
    $('#date_field11').datepick({yearRange: '1980:2050'});
    $('#date_field12').datepick({yearRange: '1980:2050'});
}

/* Funcion que activa los eventos de la seccionUbicacion*/

function seccionUbicacion()
{
    var codigoHTML = 
        
    /*Se activan los eventos*/
        
    $("#datos").html(codigoHTML);
    $(".menu-vertical li a").removeClass("active");
    $(this).addClass("active");
}

/*Se carga la segunda pestaña de la barra de navegacion*/
/*Funcion que activa VerIngreso y comunica con el servlet*/

function VerIngreso()
{
  var request = {"Ggeneral":"ListadoIngresos"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
            data: {gerente:jsonobj},
            dataType: 'json',
            
            // conectamos con el servidor
            
            url: 'Servletggeneral',
            type: 'POST',
            
            /*Funcion que conecta con la funcion seccioningreso*/
            
            success: function(JSONArray)
            {   
                seccioningreso(JSONArray); 
            },
            error: function(JSONArray) 
            {
                // Se coloca un mensaje de alerta por si llegase a presentar un error
                
                alert('Error al conectar con Servletggeneral');
            }
          });
}

/*Funcion que carga seccion ingreso*/

function seccioningreso(jsonArray)
{
    // Se crea un un ciclo nombrado variable "H" que recorre 1 posiciones
    
    for (var H = 0; H < jsonArray. length; H++)
    {   
        
        
        /* Se recorre la posicion 0 del arreglo "H"*/
        
        if (H==0)
        {    
            var codigoHTML = '<div class="encabezado2">Ingresos</div>'+
                              '<div class="tabla">'+                        			                            
                              
                                         /*Se crean las pestañas */
                              
                                         '<ul class="tabs">'+								
                                             '<li><a href="#Ppedidos">Pedidos</a></li>'+                                                                             
                                         '</ul>'+     
   
                                     /*Se cre aun contenedor para ubicar la pestaña*/
   
                                     '<div class="tab_container">'+  
                                         
                                         /*Se llama la pestaña para trabajar en ella*/
                                         
                                         '<div id="Ppedidos" class="tab_content">'+
                                             '<table class="tbonita">'+
                                                 '<tr align="left">'+           				                                                                                                            
                                                    '<th>id_pedido</th>'+
                                                    '<th>valor_del_iva</th>'+                               
                                                    '<th>valor_total</th>'+
                                                    '<th>id_usuario</th>'+                                                                                                                                                         
                                                    '<th>fecha</th>'+                                                                                                                                                         
                                                    '<th>hora</th>'+                                                                                                                                                         
                                                    '<th>id_cliente</th>'+ 
                                                 '</tr>';   																											
                                                 
            /* Se crea un ciclo nombrado variable "W" */
                                                 
            for (var W = 0; W < jsonArray[H]. length; W++)                                
            {       
                    /*se le asigna una condicion para darle color a las filas pares  */ 
                    
                    if (W % 2 == 0)
                          codigoHTML+=      '<tr>';
                      
                    /* Se llaman los siguientes campos, de la base de datos*/  
                      
                    else
                          codigoHTML+=      '<tr class="even">';
                                            
                        codigoHTML+=    '<td>' + jsonArray[H][W].id_pedido + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[H][W].valor_del_iva + '</td>'; 
                        codigoHTML+=    '<td>' + jsonArray[H][W].valor_total + '</td>'; 
                        codigoHTML+=    '<td>' + jsonArray[H][W].id_usuario + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[H][W].fecha + '</td>';
                        codigoHTML+=    '<td>' + jsonArray[H][W].hora + '</td>';                                                
                        codigoHTML+=    '<td>' + jsonArray[H][W].id_cliente + '</td>';  
                        codigoHTML+=    '</tr>';          
            }    
            
                      /*cerramos las tablas(table) y las capas (capas)*/
            
                      codigoHTML+=           '</table>'+
                                         '</div>';
       }                                 

        /* Se recorre la posicion 1 del arreglo "H"*/
  }

    
    /* Se activan los eventos*/
    
    $("#datos").html(codigoHTML);      
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#IngresosFinanciera").addClass("active");
    $(this).addClass("active"); 
    
    // Activados de eventos
    
    activadorEventosVendedores();            
    
    // Se activan las pestañas
    
    IniciarTabers();
}

/*Funcion que carga VerEgreso*/

function VerEgreso()
{   
    /*Se crean y se nombran dos variables*/
    
    var request = {"Ggeneral":"ListadoEgresos"};
    var jsonobj=JSON.stringify(request);
    $.ajax({
            data: {gerente:jsonobj},
            dataType: 'json',
            
            //conectamos con el servidor
            
            url: 'Servletggeneral',
            type: 'POST',
            
            /*Funcion que comunica con seccioningreso*/
            
            success: function(JSONArray)
            {
                seccionegreso(JSONArray); 
            },
            error: function(JSONArray) 
            {
                // Se crea un mensaje que se visualiza al ocurrir un error
                
                alert('Error al conectar con Servletggeneral');
            }
          }); 
}   

/*Funcion que carga seccion ingraso*/

function seccionegreso(jsonArray)
{
    // Se crea un un ciclo nombrado variable "f" que recorre 4 posiciones
    
    for (var F = 0; F < jsonArray. length; F++)
    {
        /* Se recorre la posicion 0 del arreglo "F"*/
        
        if (F==0)
        {                       
            // Se le da nombre al encabezado
                                
            var codigoHTML = '<div class="encabezado2">Egresos</div>'+
                              '<div class="tabla">'+                        			                            
                              
                                         /*Se crean las pestañas*/
                              
                                         '<ul class="tabs">'+								                                                                              
                                             '<li><a href="#Pviaticos">Viaticos</a></li>'+     
                                         '</ul>'+     

                                     /*Se crea un contenedor para ubicar las pestaña*/ 
                                            
                                     '<div class="tab_container">';                                                                                   
       }                                            
                                          /*Se llama a la pestaña para trabajar con esta*/
            
           codigoHTML+=                  '<div id="Pviaticos" class="tab_content">'+
               
                                             /*Se crea una tabla para ubicar los datos*/
               
                                             '<table class="tbonita">'+
                                                 '<tr align="left">'+           				                                                        
                                                        '<th>id_viaticos</th>'+
                                                        '<th>id_usuario</th>'+
                                                        '<th>valor</th>'+
                                                        '<th>concepto</th>'+
                                                        '<th>fecha</th>'+
                                                        '<th>codMunicipio</th>'+
                                                        '<th>doc_soporte</th>'+
                                                 '</tr>';                                                          
            
            /* Se crea un ciclo nombrado variable "I" */
                                                          
            for (var I = 0; I < jsonArray[F]. length; I++)
            {      
                   /*se le asigna una condicion para darle color a las filas pares  */ 
                
                   if (I % 2 == 0)
                        codigoHTML+=               '<tr>';
                    
                   /* Se llaman los siguientes campos, de la base de datos*/
                    
                   else
                        codigoHTML+=               '<tr class="even">';
                   
                   codigoHTML+=                        '<td>' + jsonArray[F][I].id_viaticos + '</td>';
                   codigoHTML+=                        '<td>' + jsonArray[F][I].id_usuario + '</td>'; 
                   codigoHTML+=                        '<td>' + jsonArray[F][I].valor + '</td>';
                   codigoHTML+=                        '<td>' + jsonArray[F][I].concepto + '</td>';
                   codigoHTML+=                        '<td>' + jsonArray[F][I].fecha + '</td>';
                   codigoHTML+=                        '<td>' + jsonArray[F][I].codMunicipio + '</td>';
                   codigoHTML+=                        '<td>' + jsonArray[F][I].doc_soporte + '</td>';
                   codigoHTML+=                    '</tr>';
            }        
            
                  /*cerramos las tablas(table) y las capas (capas)*/
            
                   codigoHTML+=              '</table>'+                                         
                                          '</div>'+                                          
                                         '</div>'+
                                     '</div>';
                        
    }
    
    /*Se activan los eventos*/
    
    $("#datos").html(codigoHTML);  
    $(".menu-vertical li a").removeClass("active");
    $(".menu-vertical li a#EgresosFinanciera").addClass("active");
    $(this).addClass("active"); 
    
    // Activador de eventos
    
    activadorEventosVendedores();                      
    
    // Se activan los eventos
    
    IniciarTabers();
}

/*Funcion seccionListadoProductos*/

function seccionListadoProductos()
{
    var codigoHTML = '<div class="encabezado2">Listado de Productos</div>'+
                     '<div class="tabla">'+
                        
                    '</div>';

    $("#datos").html(codigoHTML);  
}

/*Funcion seccionDatosPerfil*/

function seccionDatosPerfil()
{
    var codigoHTML = '<div class="encabezado2">Datos del Jefe Comercial</div>'+
                     '<div class="tabla">'+
                        
                    '</div>';

    $("#datos").html(codigoHTML);
    //$(".menu-vertical li a").removeClass("active");
    //$(this).addClass("active");
}
