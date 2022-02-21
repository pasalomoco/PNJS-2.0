var body = $("body");
$("#sidebar-modificando-personaje").hide();
$('.close-btn.random').click(function(){
  $(".content-pop.random").hide();
});
$('.close-btn.danger').click(function(){
  $(".content-pop.danger-pop").hide();
});
$('.close-btn.modificarPNJ').click(function(){
  $(".content-pop.modificarPNJ").hide();
});

$('#aumentarFuente').click(function(){
  var sizeFuenteActual = body.css('font-size');
  var sizeFuenteActualNum = parseInt(sizeFuenteActual, 10);
  var sizeFuenteNuevo = sizeFuenteActualNum+1;
  body.css('font-size', sizeFuenteNuevo);
  return false;
});

$('#disminuirFuente').click(function(){
  var sizeFuenteActual = body.css('font-size');
  var sizeFuenteActualNum = parseInt(sizeFuenteActual, 10);
  var sizeFuenteNuevo = sizeFuenteActualNum-1;
  body.css('font-size', sizeFuenteNuevo);
  return false;
});

$('#borrarPNJespecifico').click(function(){
  $(".botones-ocultar").hide();
  $(".content-pop.modificarPNJ").hide();
  let numero = prompt("Selecciona el número del personaje a borrar. Del 1-8.")
 
  if (isNaN(numero) || numero == "" || numero == undefined ) {
  }else{
      $("#PNJ"+numero).remove()
      $('.numerosPNJs').each(function(i, obj) {
        console.log(i+1)
      });
  }
 
});

$('#limpiarPantalla').click(function(){
  let borrarSeguro = prompt("¿Estás seguro de que quieres borrar todo? s" );
  $(".content-pop.modificarPNJ").hide();
  if (isNaN(borrarSeguro) && borrarSeguro == "s" ) {
    $("#generadorDePNJs").html(" ");
  }
 
});



$('#crearPNJs').click(function(){
  ocultarModificarPersonaje();
  $(".content-pop.modificarPNJ").toggle();
  
});

$('#sacarConocimientoAleatorio').click(function(){
  ocultarModificarPersonaje();
  $(".content-pop.random").show();
  let  conocimientoRandom = crearConocimientosRandom(20);
  conocimientoTocado = sacarValoresArrayRecursive(conocimientoRandom);
  conocimientoTocado = conocimientoTocado.replace(/_|#|-|@|<>/g, " ");
  $(".card-title.random").html("Conocimiento Random");
  $("#generandoAleatoriedad").html(conocimientoTocado);
  
});

$('#sacarRasgoAleatorio').click(function(){
  ocultarModificarPersonaje();
  $(".content-pop.random").show();
  let rasgoRandom = sacarRasgosAdicionalesRandom();
  let key = Object.keys(rasgoRandom)[0].replace(/_|#|-|@|<>/g, " ");
  let valor =Object.values(rasgoRandom);
  $(".card-title.random").html("Rasgo Random");
  $("#generandoAleatoriedad").html(key+" "+valor);
  
});


$('#modificarPersonaje').click(function(){
  ocultarModificarPersonaje();
  let cambio =  $("#modificarPersonaje").children("span.nav-text").text()
  if(cambio == "Modificar PNJ"){
    $("#modificarPersonaje").children("span.nav-text").text("Finalizar modificar PNJ")
    $("#modificarPersonaje").children("span.fa").text("FPNJ")
  }else{
    $("#modificarPersonaje").children("span.nav-text").text("Modificar PNJ")
    $("#modificarPersonaje").children("span.fa").text("MPNJ")
  }
  $(".botones-ocultar").hide();
  $(".sidebarModificando").show();
  $(".content-pop.danger-pop").toggle();
});


$('#modificarMargen').click(function(){    
  $("body").css("background-color", "red"); 
  $(".content-pop.danger-pop").hide();
  $(".sidebarRight").show();
  $(".sidebarLeft").show();
  $("#sidebar-modificando-personaje").html(" ");
  $("#sidebar-modificando-personaje").html("<b>MODIFICAR MÁRGENES</b>");
  $("#sidebar-modificando-personaje").show();
  alert("Haz click en el elemento")
  window.setTimeout( modificarMargen, 1000 );
});

$('#agregarCampos').click(function(){    
  $(".content-pop.danger-pop").hide();
  $(".sidebarRight").show();
  $(".sidebarLeft").show();
  $("#sidebar-modificando-personaje").html(" ");
  $("#sidebar-modificando-personaje").html("<b>AÑADIENDO CAMPOS</b>");
  $("#sidebar-modificando-personaje").show();
  alert("Haz click en el elemento a agregar")
  window.setTimeout( agregarCamposNuevos, 500 );
});

$('#eliminarCampos').click(function(){
  $(".content-pop.danger-pop").hide();
  $(".sidebarRight").show();
  $(".sidebarLeft").show();
  $("#sidebar-modificando-personaje").html(" ");
  $("#sidebar-modificando-personaje").html("<b>ELIMINANDO CAMPOS</b>");
  $("#sidebar-modificando-personaje").show();
  alert("Haz click en el elemento a eliminar")
  window.setTimeout( eliminarCamposNuevos, 500 );
});

function modificarMargen(){
  $("body").css("background-color", "red");
  $("#generadorDePNJs").css('cursor', 'crosshair');

  $("#generadorDePNJs").mouseover(function(event) {
    $("#"+event.target.id).addClass("mouse-border");
    console.log(event)
  });
  $("#generadorDePNJs").mouseout(function(event) {
    $("#"+event.target.id).removeClass("mouse-border");
    console.log(event)
  });
  $("#generadorDePNJs").click(function(event) {
   
    let margenAgregado = prompt("Introduce el margen en px");
    console.log(margenAgregado)
    $("#"+event.target.id).css({ 'margin-top' : '' });
    $("#"+event.target.id).css('margin-top', "20px !important");
  });
}


function agregarCamposNuevos (){
  $("body").css("background-color", "red"); 
  $("#generadorDePNJs").css('cursor', 'crosshair');

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
    $("#"+event.target.id).append("<div id='"+idCampoAgregado+"'>"+" "+campoAgregado+" "+" "+"</div>");
  });
}

function eliminarCamposNuevos (){
  $("body").css("background-color", "red"); 
  $("#generadorDePNJs").css('cursor', 'crosshair');

  $("#generadorDePNJs").mouseover(function(event) {
    $("#"+event.target.id).addClass("mouse-border");
    console.log(event)
  });
  $("#generadorDePNJs").mouseout(function(event) {
    $("#"+event.target.id).removeClass("mouse-border");
    console.log(event)
  });
  $("#generadorDePNJs").click(function(event) {
    let check = true;
    let clases = $("#"+event.target.id).attr('class').split(/\s+/);
    for(let i = 1; i <= 8; i++){

      console.log($("#"+event.target.id))
      if( $("#"+event.target.id) == "nombre"+i || $("#"+event.target.id) == "raza"+i 
          ||$("#"+event.target.id) == "tipoPNJ"+i ||$("#"+event.target.id) == "puesto"+i 
          ||$("#"+event.target.id) == "cuerpo"+i ||$("#"+event.target.id) == "mente"+i 
          ||$("#"+event.target.id) == "espiritu"+i ||$("#"+event.target.id) == "habilidades"+i 
          ||$("#"+event.target.id) == "conocimientos"+i ||$("#"+event.target.id) == "rasgos-adicionales"+i 
          ||$("#"+event.target.id) == "equipo"+i ||$("#"+event.target.id) == "especial"+i ){
        alert("No puedes eliminar este elemento")
        check = false;
      }
    }
    $.each(clases, function(index, item) {
        if (item == 'col-1' || item== 'col-2' || item== 'col-3' || item== 'col-4' || item== 'col-5'|| item== 'col-6'|| item== 'col-7' || item== 'col-8' || item== 'col-9' || item== 'col-10' || item== 'col-11' || item== 'col-12') {
            alert("No puedes eliminar este elemento")
            check = false;
        }
    });
    if(check){
      $("#"+event.target.id).remove();
    }
   
  });
}

$('#finalizarAgregarCampos').click(function() {
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
  $("#generadorDePNJs").css('cursor', 'default');
  $(".sidebarModificando").hide();
  $("body").css("background-color", "#FAFAFA");
  
}

$('#finalizarPersonaje').click(function(){
  let seguro = prompt("¿Estás seguro que quieres terminar de hacer los PNJs? Pulsa s");
  ocultarModificarPersonaje();
  if( seguro == "s"){
      $(".content-pop.modificarPNJ").hide();
      $(".content-pop.random").hide();
      $(".content-pop.danger-pop").hide();
      $("#openNav").hide();
      $(".sidebar").hide();
      $(".botones-ocultar").hide();
      $(".sidebarRight").hide();
      $(".sidebarLeft").hide();
      $(".main-menu").hide();
      $("#scroll-up").hide();
      $(".numerosPNJs").hide();
      $(".sidebarModificando").hide();
  }
});