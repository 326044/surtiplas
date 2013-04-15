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
//*************                                                                                               *********************
//*************  FUNCION QUE INICIALIZA LAS OPERACIONES        *********************
//*************  PRINCIPALES EN JQUERY                                               *********************
//*************                                                                                               *********************
//**********************************************************************************
//**********************************************************************************

function inicializar()
{
    //*******************************************************************************
    //********************        OPCION INICIO                         ****************************
    //*******************************************************************************
    var inicio;
    inicio=$("#Inicio");
    inicio.click(menuInicio);
    menuInicio();
    crearFormulario()
    $(".nav .menu li a#Inicio").addClass("active");
    //*******************************************************************************
    //********************       OPCION INSTITUCIONAL               *************************
    //*******************************************************************************
    var institucional;
    institucional=$("#Institucional");
    institucional.click(menuInstitucional);
}

//**********************************************************************************
//**********************************************************************************
//*************                                                                                                   ********************
//*************  FUNCION QUE MODIFICAN LA INTERFAZ GRAFICA     ********************
//*************  CON LOS COMPONENTES DE LA OPCION INICIO           ********************
//*************                                                                                                   ********************
//**********************************************************************************
//**********************************************************************************

function menuInicio()
{
    $(".nav .menu li a").removeClass("active");
    seccionInicio();
}

//**********************************************************************************
//**********************************************************************************
//*************                                                                                                         ****************
//*************  FUNCION QUE MODIFICAN LA INTERFAZ GRAFICA CON  ****************
//*************  LOS COMPONENTES DE LA OPCION INSTITUCIONAL         ****************
//*************                                                                                                         ****************
//**********************************************************************************
//**********************************************************************************

function menuInstitucional()
{
    $(".nav .menu li a").removeClass("active");
    $(this).addClass("active");
    seccionInstitucional();
}

//**********************************************************************************
//**********************************************************************************
//*************                                                                                                   *******************
//*************  FUNCION QUE MODIFICAN LA INTERFAZ GRAFICA     *******************
//*************  SEGUN LAS CARACTERISTICAS DEL MENU INICIO       *******************
//*************                                                                                                   *******************
//**********************************************************************************
//**********************************************************************************

function seccionInicio()
{
    var codigoHTML = '<br/>'+
                     '<h2 class="ppostheader" style="margin-left:20px;">RESEÑA HISTÓRICA</h2>'+
                     '<p align="justify">La empresa Surtiplas inició labores en 1985 en el país de Colombia, departamento Risaralda y el municipio de Dosquebradas, bajo la razón social de SURTIPLAS Y/O HUMBERTO GIRALDO; la producción en el momento estaba dedicada a la fabricación de capas y pañales de amarrar, con una maquina plana, un escaso capital, mucho entusiasmo y fe en Dios de salir adelante, para lo cual se debían realizar largas jornadas de trabajo y sostener un cumplimiento oportuno a los diferentes clientes.</p>'+    
                     '<p align="justify">El sitio Inicialmente solo se fabricaban pocos productos, los cuales eran vendidos por algunos familiares nuestros empleando la estrategia de venta “puerta a puerta” en barrios de Pereira y Dosquebradas, logrando la buena acogida de este producto.</p>'+
                     '<p align="justify">Los procesos de apalancamiento iniciaron con la materia prima empleada recurriendo a un préstamo; el segundo apalancamiento se obtuvo de una empresa de plásticos, a la cual se compraba de contado pequeñas cantidades y esta nos otorgó un crédito; la planta física empleada al principio, fue la misma vivienda familiar.</p>'+
                     '<p align="justify">Nos dimos cuenta que las capas impermeables quedaban mejor elaboradas con el cuello sellado al calor donde quedaba completamente impermeabilizada. Nos vimos en la necesidad de tomar un crédito para adquirir una máquina electrónica de sellado al calor, compromiso que nos demandó trabajar en exceso, así mismo nos vimos obligados a cambiar de sitio de trabajo, puesto que la maquina era de un consumo fuerte de energía, tuvimos la necesidad de ubicarnos en una zona industrial.</p>'+
                     '<p align="justify">Siempre se ha trabajado  con una visión positiva a futuro de crecer y lograr estabilidad en el mercado, esta proyección se ha ido realizando debido a los productos de buena calidad que fabricamos, al buen servicio y a los buenos precios, lo que ha permitido a la empresa ser pionera a nivel local y regional. Con el transcurso de los años se ha incrementado en forma razonable nuestro capital de trabajo y la mano de obra empleada. </p>'+
                     '<p align="justify">De acuerdo al crecimiento de la empresa y la importancia en la región, el portafolio de servicios se amplió para lograr un resultado excelente, se buscaba un sitio para pagar arrendamiento, pero por el tamaño de nuestra empresa y capacidad no podía ser un canon demasiado alto. Encontramos el sitio donde actualmente estamos, de propiedad del señor Jaime Giraldo, que obtuvimos gracias primeramente a Dios y luego de él, que nos entregó el sitio a crédito pagando en cuotas muy favorables y allí nos ubicamos.</p>'+
                     '<p align="justify">Después de cancelar el terreno empezamos la edificación que actualmente existe. Se ha ido creciendo de forma lenta, pero segura, hoy en día contamos con 15 empleados y clientes en casi todo el territorio nacional. Con una buena planta de producción, varias maquinas de sellado, maquinas planas y con la mira de ser mejores día a día. </p>'+
                     '<p align="justify">Nos encontramos ubicados en el municipio de Dosquebradas, calle 40 Numero 12-50 Barrio Guadalupe en el departamento de Risaralda (Colombia). Nuestros teléfonos son (096)3220874 - (096)3326869 - (096)3225736 Fax (096)3230439 y correo electrónico contacto@surtiplas.com.co.</p>';

    $(".content-float3").html(codigoHTML);                    
}

//*********************************************************************************
//*********************************************************************************
//*************                                                                                                  *******************
//*************  FUNCION QUE MODIFICAN LA INTERFAZ GRAFICA    *******************
//*************  SEGUN LAS CARACTERISTICAS DEL MENU                     *******************
//*************  INSTITUCIONAL                                                                  *******************
//*************                                                                                                   *******************
//**********************************************************************************
//**********************************************************************************

function seccionInstitucional()
{
    var codigoHTML ='<br/>'+
                    '<h2 class="ppostheader" style="margin-left:20px;">MISIÓN</h2>'+
                    '<p align="justify">Somos una organización dedicada a la producción y comercialización de confecciones plásticas, comprometida con el mejoramiento continuo de los procesos de evaluación y control para garantizar al cliente un producto de excelente calidad que proporcione su satisfacción total. Para tal propósito estamos apoyados por excelentes recursos humanos y tecnológicos y sobre todo por los mejores proveedores del país.</p>'+    
                    '<p align="justify">Nos caracteriza el respeto hacia nuestros clientes internos y externos, por ser un equipo cimentado en sólidos principios y valores que generan confiabilidad hacia la organización.</p>'+    
                    '<p align="justify">Nos orientamos a incrementar nuestro mercado, de manera que se genere una mayor rentabilidad de la inversión.</p>'+    
                    '<br/>'+
                    '<h2 class="ppostheader" style="margin-left:20px;">VISIÓN</h2>'+
                    '<p align="justify">Surtiplas se proyecta en el futuro como la empresa líder en producción y comercialización de confecciones en plástico a nivel regional, desarrollando productos de excelente calidad e innovadores que cubran todas las necesidades del mercado. Adquirir tecnología de punta para lograr una producción eficaz y eficiente con la cual se pueda incursionar en nuevos mercados nacionales e internacionales y de esta manera fomentar la creación de empleo y desarrollo para la región.</p>'+
                    '<br/>'+
                    '<h2 class="ppostheader" style="margin-left:20px;">POLÍTICA DE CALIDAD</h2>'+
                    '<p align="justify">Surtiplas es una organización dedicada al diseño, producción y comercialización de confecciones plásticas, donde la filosofía está enfocada en la satisfacción de los requisitos de clientes y de las partes interesadas; por medio de un producto de la más alta calidad.</p>'+    
                    '<p align="justify">En la organización se encuentran comprometidos en el mejoramiento continuo de cada proceso todo el equipo humano de la organización conformado por la gerencia, los clientes internos y los proveedores, apoyados en la mejor tecnología y logrando obtener así rentabilidad para sus socios.</p>';

    $(".content-float3").html(codigoHTML);                  
}

//**********************************************************************************
//**********************************************************************************
//*************                                                                                                    *******************
//*************  FUNCION QUE CREA LOS COMPONENTES DEL LOGIN    *******************
//*************                                                                                                    *******************
//**********************************************************************************
//**********************************************************************************

function crearFormulario()
{
    var codigoHTML ='<form id="loginForm">'+
                        '<table cellspacing="5">'+
                            '<tr>'+
                                '<td colspan="2" align="center"><h2>Log In</h2></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<th align="right">Usuario</th>'+
                                '<td><input type="text" name="usuario" value="" id="Usuario" size="10" required /></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<th align="right">Contraseña</th>'+
                                '<td><input type="password" name="password" value="" id="Password" size="10" required /></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td  colspan="2" align="right">'+
                                    '<input type="submit" class="button" value="Ingresar" id="Ingresar"/>'+
                                '</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td colspan="2" align="center">&nbsp;</td>'+
                            '</tr>'+
                        '</table>'+
                    '</form>';

    $(".content-float2").html(codigoHTML); 
    $("#loginForm").submit(verificarUsuario);
}

//**********************************************************************************
//**********************************************************************************
//*************                                                                                                       ******************
//************* FUNCION QUE VERIFICA EL FORMULARIO DE INGRESO  ******************
//*************                                                                                                       ******************
//**********************************************************************************
//**********************************************************************************

function verificarUsuario(evento)
{
    evento.preventDefault();
    var datos_formulario = $(this).serialize();     
    $.ajax({
                    data: datos_formulario,
                    type: 'POST',
                    dataType: 'json',
                    url: 'ServletLogin',
                    success: function(jsonObj)
                    {
                        cargarUsuario(jsonObj);
                    },
                    error: function() 
                    {
                        alert('Error al conectar con el servidor');
                    }
                });
}

function cargarUsuario(jsonObj)
{
    if (jsonObj.TipoUsuario =="false")
    {
        alert("El usuario no existe en el sistema");
    }
    
    if (jsonObj.TipoUsuario =="C")
    {
        window.location = "comercial.jsp";
    }  
	
	if (jsonObj.TipoUsuario =="S")
    {
        window.location = "secretaria.jsp";
    } 
}
