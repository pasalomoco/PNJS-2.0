$("#sidebar-modificando-personaje").hide();

$('#finalizarPersonaje').click(function(){
    let seguro = prompt("¿Estás seguro que quieres terminar de hacer los PNJs? Pulsa s");
    ocultarModificarPersonaje();
    if( seguro == "s"){
        $(".sidebar").hide();
        $(".botones-ocultar").hide();
        $(".sidebarRight").hide();
        $(".sidebarLeft").hide();
    }
});
$('.close-btn.random').click(function(){
  $(".content-pop.random").hide();
});
$('.close-btn.danger').click(function(){
  $(".content-pop.danger-pop").hide();
});

$('#generarNuevoPNJaleatorio').click(function(){
  console.log(numeroTotalPersonajes)
  
});


$('#sacarConocimientoAleatorio').click(function(){
  ocultarModificarPersonaje();
  $(".content-pop.random").toggle();
  let  conocimientoRandom = crearConocimientosRandom(20);
  conocimientoTocado = sacarValoresArrayRecursive(conocimientoRandom);
  conocimientoTocado = conocimientoTocado.replace(/_|#|-|@|<>/g, " ");
  $(".card-title.random").html("Conocimiento Random");
  $("#generandoAleatoriedad").html(conocimientoTocado);
  
});

$('#sacarRasgoAleatorio').click(function(){
  ocultarModificarPersonaje();
  $(".content-pop.random").toggle();
  let rasgoRandom = sacarRasgosAdicionalesRandom();
  let key = Object.keys(rasgoRandom)[0].replace(/_|#|-|@|<>/g, " ");
  let valor =Object.values(rasgoRandom);
  $(".card-title.random").html("Rasgo Random");
  $("#generandoAleatoriedad").html(key+" "+valor);
  
});


$('#modificarPersonaje').click(function(){
  ocultarModificarPersonaje();
  $(".botones-ocultar").hide();
  $(".content-pop.danger-pop").toggle();
});

$('#agregarCampos').click(function(){     
  $(".content-pop.danger-pop").hide();
  $(".sidebarRight").show();
  $(".sidebarLeft").show();
  $("#sidebar-modificando-personaje").html(" ");
  $("#sidebar-modificando-personaje").html("<b>AÑADIENDO CAMPOS</b>");
  $("#sidebar-modificando-personaje").show();
  alert("Haz click en el elemento a agregar")
  window.setTimeout( agregarCamposNuevos, 1000 );
});

$('#eliminarCampos').click(function(){
  $(".content-pop.danger-pop").hide();
  $(".sidebarRight").show();
  $(".sidebarLeft").show();
  $("#sidebar-modificando-personaje").html(" ");
  $("#sidebar-modificando-personaje").html("<b>ELIMINANDO CAMPOS</b>");
  $("#sidebar-modificando-personaje").show();
  alert("Haz click en el elemento a eliminar")
  window.setTimeout( eliminarCamposNuevos, 1000 );
});

function agregarCamposNuevos (){
  $("#generadorDePNJs").mouseover(function(event) {
    $("#"+event.target.id).addClass("mouse-border");
    console.log(event)
  });
  $("#generadorDePNJs").mouseout(function(event) {
    $("#"+event.target.id).removeClass("mouse-border");
    console.log(event)
  });
  $("#generadorDePNJs").click(function(event) {
   
    var campoAgregado = prompt("Introduce el campo a añadir");
    let idCampoAgregado = campoAgregado.replace(/ /g,"_").replace(":","_").replace("/","_").replace(".","_");
    $("#"+event.target.id).append("<span id='"+idCampoAgregado+"'>"+" "+campoAgregado+" "+" "+"</span>");
  });
}

function eliminarCamposNuevos (){
  $("#generadorDePNJs").mouseover(function(event) {
    $("#"+event.target.id).addClass("mouse-border");
    console.log(event)
  });
  $("#generadorDePNJs").mouseout(function(event) {
    $("#"+event.target.id).removeClass("mouse-border");
    console.log(event)
  });
  $("#generadorDePNJs").click(function(event) {
   
    $("#"+event.target.id).html(" ");
  });
}

$('#finalizarAgregarCampos').click(function(event) {
  ocultarModificarPersonaje();
});


$('.ocultarBotones').click(function(){
    ocultarModificarPersonaje();
    $(".botones-ocultar").toggle();
});


function ocultarModificarPersonaje (){
  $(".sidebarRight").hide();
  $(".sidebarLeft").hide();
  $("#sidebar-modificando-personaje").hide();
  $("#generadorDePNJs").unbind("click");
  $("#generadorDePNJs").unbind("mouseover");
  $("#generadorDePNJs").unbind("mouseout");
}