function crearPNJ (h, bonificacion, tipo) {
  var plantilla =
"<div id='PNJ"+h+"' class='col-6 borderFichasPnjs 'PNJ"+h+"'>"+
    "<div class='row'>"+

      "<div class='col-8' id='addNombre"+h+"''>"+
        "<div class='campoAgregar' id='nombre"+h+"''>"+
          "<span class=''> <b> Nombre:</b> </span>"+
        "</div>"+
      "</div>"+

      "<div class='col-4' id='addTipo"+h+"''>"+
        "<div class='campoAgregar' id='tipoPNJ"+h+"''>"+
          "<span class=''> <b> Tipo:</b> </span>"+
        "</div>"+
      "</div>"+

     "<div class='col-5' id='addPuesto"+h+"''>"+
       "<div class='campoAgregar' id='puesto"+h+"''>"+
          "<span class=''>"+
           " <b>Puesto:</b>"+
          "</span>"+
        "</div>"+
     "</div>"+

     "<div class='col-4' id='addRaza"+h+"''>"+
        "<div class='campoAgregar' id='raza"+h+"''>"+
          "<span class=''>"+
            "<b>Raza:</b>"+
          "</span>"+
        "</div>"+
      "</div>"+

     "<div class='col-3'>"+
        "<div id='cuadradosvitalidad"+h+"'>"+
          "<div class='cuadradosVitalidad'></div>"+
          "<div class='cuadradosVitalidad'></div>"+
          "<div class='cuadradosVitalidad'></div>"+
          "<div class='cuadradosVitalidad'></div>"+
          "<div class='cuadradosVitalidad'></div>"+
        "</div>"+
      "</div>"+

      "<div class='campoAgregar border-top col-12'>"+
        "<span id='rasgos-adicionales"+h+"'>"+
        "</span>"+
        "<span id='listado-rasgos"+h+"'>"+
        "</span>"+
      "</div>"+
      
      "<div class='campoAgregar border-top col-3' id='listadoCuerpo"+h+"''>"+
      
      "</div>"+

      "<div class='campoAgregar border-top col-3' id='listadoMente"+h+"''>"+
      
      "</div>"+

      "<div class='campoAgregar border-top col-3' id='listadoEspiritu"+h+"''>"+
      
      "</div>"+

      "<div class='campoAgregar border-top col-3' id='listadoEspiritu"+h+"2' >"+
      
      "</div>"+

      

      "<div class='campoAgregar border-top col-12' id='listadoHabilidades"+h+"''>"+
      
      "</div>"+

      "<div class='campoAgregar border-top col-12' id='listadoConocimientos"+h+"''>"+
      
      "</div>"+

    

      "<div class='border-top col-12'>"+
        "<div>"+
          "<div>"+
            "Vitalidad:"+
                "<div class='cuadradosVitalidad'></div>"+
                "<div class='cuadradosVitalidad'></div>"+
                "<div class='cuadradosVitalidad'></div>"+
                "<div class='cuadradosVitalidad'></div>"+
                "<div class='cuadradosVitalidad'></div>"+
                "&nbsp;5&nbsp;"+
               "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
              "&nbsp;10&nbsp;"+
              "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "&nbsp;15&nbsp;"+
               "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "&nbsp;20&nbsp;"+
               "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "</div>"+
       "</div>"+
     "</div>"+

      "<div class='col-12' id='addEspecial"+h+"''>"+
        "<div id='especial"+h+"' class='campoAgregar especial'>"+
        "<span>"+
        "Especial:"+
        "</span>"+
        "</div>"+
      "</div>"+

      "<div class='border-top col-11' id='addEquipo"+h+"''>"+
        "<div class='campoAgregar equipo' id='equipo"+h+"'>"+
          "<span>"+
            "Equipo:"+
          "</span>"+
        "</div>"+
      "</div>"+

      "<div class='col-1 numerosPNJs' id='addPNJNumero"+h+"''><span id='PNJnumero"+h+"'>"+h+"º</span></div>"+
      

   "</div>";

    $("#generadorDePNJs").append(plantilla);

    personaje = new Personaje(bonificacion, tipo);
    let contadorHabilidades = 0;
    let contadorConocimientos =0;
    let contadorEspiritu = 0; 
    let contadorCuerpo = 0;
    let contadorMente = 0;
    console.log(personaje)
    $("#tipoPNJ"+h).append(personaje.tipoPNJ);
    $("#listadoCuerpo"+h).append("<span><b>Cuerpo:</b> "+personaje.baseCuerpo+" </span> ");
    $("#listadoMente"+h).append("<span><b>Mente:</b> "+personaje.baseMente+" </span> ");
    $("#listadoEspiritu"+h).append("<span><b>Espíritu:</b> "+personaje.baseEspiritu+" </span> ");
    for (var key in personaje.caracteristicas) {
        let nombre =   key.replace(/_|#|-|@|<>/g, " ")
        let botonSubir = crearBotonSubir(h, key)
        let botonBajar = crearBotonBajar(h, key)
      if(key == "Fuerza" || key == "Destreza" || key == "Resistencia"){
        if(personaje.caracteristicas[key] > personaje.baseCuerpo){
          contadorCuerpo++
          $("#listadoCuerpo"+h).append("<div><span class='d' id='elemento"+key+h+"'>"+nombre+"</span><span class='' id='"+key+h+"'> " +personaje.caracteristicas[key]+" </span><span class='botones-ocultar boton"+key+h+"'></span></div>");
          $(".boton" +key+h).append(botonSubir); 
          $(".boton" +key+h).append(botonBajar);
        }
      }else if (key == "Inteligencia" || key == "Ingenio" || key == "Percepción"){
        if(personaje.caracteristicas[key] > personaje.baseMente){
          contadorMente++
          $("#listadoMente"+h).append("<div><span class='d' id='elemento"+key+h+"'>"+nombre+"</span><span class='' id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span></div>");
          $(".boton" +key+h).append(botonSubir);
          $(".boton" +key+h).append(botonBajar);
        }
      }else{
        if(personaje.caracteristicas[key] > personaje.baseEspiritu){
            contadorEspiritu++
            console.log(contadorEspiritu)
            if(contadorEspiritu <= 2){
              $("#listadoEspiritu"+h).append("<div><span id='elemento"+key+h+"'>"+nombre+"</span><span class='' id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span></div>");
              $(".boton" +key+h).append(botonSubir);
              $(".boton" +key+h).append(botonBajar);
            }else {
              $("#listadoEspiritu"+h+"2").append("<div><span id='elemento"+key+h+"'>"+nombre+"</span><span class='' id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span></div>");
              $(".boton" +key+h).append(botonSubir);
              $(".boton" +key+h).append(botonBajar);
            }
        
        }
      }

    }


    $("#listadoHabilidades"+h).append("<div class='d-inline-block'> <b> Habilidades: </b> "+personaje.baseHabilidades+"&nbsp;&nbsp;&nbsp;</div>");
    for (var key in personaje.habilidades.habilidades) {
      if(personaje.habilidades.habilidades[key] > personaje.baseHabilidades){
        contadorHabilidades++;
        let nombre =   key.replace(/_|#|-|@|<>/g, " ")
        let id = key.replace(/ /g,"_").replace(":","_").replace("/","_").replace(".","_");
        id = id.split('.').join("p");
        let botonSubir = crearBotonSubir(h, id)
        let botonBajar = crearBotonBajar(h, id)
        $('#listadoHabilidades'+h).append("<div class='d-inline-block'><span id='elemento"+id+h+"'> "+nombre+" </span><span id='"+id+h+"'> "+personaje.habilidades.habilidades[key]+"</span> <span class='botones-ocultar boton"+id+h+"'></span>&nbsp;&nbsp;</div>");
        $(".boton" +id+h).append(botonSubir);
        $(".boton" +id+h).append(botonBajar);
      }

    }
    $("#listadoConocimientos"+h).append("<div class='d-inline-block'> <b>Conocimientos:</b> &nbsp;&nbsp;&nbsp;</div>");
    for (var key of Object.keys(personaje.conocimientos)) {
      let nombre =   key.replace(/_|#|-|@|<>/g, " ")
      let id = key.replace(/ /g,"_").replace(":","_").replace("/","_").replace("/\./g","p");  
      id = id.split('.').join("p");
      let botonSubir = crearBotonSubir(h, id)
      let botonBajar = crearBotonBajar(h, id)
      $('#listadoConocimientos'+h).append("<div class='d-inline-block'><span id='elemento"+id+h+"'> "+nombre+"</span><span id='"+id+h+"'> " +personaje.conocimientos[key]+"</span> <span class='botones-ocultar boton"+id+h+"'></span>&nbsp;&nbsp;</div>");   
      $(".boton" +id+h).append(botonSubir);
      $(".boton" +id+h).append(botonBajar);
     }  

  
    $('#rasgos-adicionales'+h).append("<b>Rasgos: </b>");
    personaje.rasgosAdicionales.forEach(function(rasgo, index) {
          let botonSubir = crearBotonSubir(h, Object.keys(rasgo))
          let botonBajar = crearBotonBajar(h, Object.keys(rasgo))
          let nombre = Object.keys(rasgo)[0].replace(/_|#|-|@|<>/g, " ");
          let id = Object.keys(rasgo)[0].replace(/ /g,"_").replace(":","_").replace("/","_").replace("/\./g","p");   
          $('#listado-rasgos'+h).append("<div class='d-inline-block'><span id='elemento"+id+h+"'> "+nombre+"</span>&nbsp;<span id='"+id+h+"'>" +Object.values(rasgo)+"</span> <span class='botones-ocultar boton"+id+h+"'></span>&nbsp;&nbsp;&nbsp;</div>");   
          $(".boton" +Object.keys(rasgo)+h).append(botonSubir);
          $(".boton" +Object.keys(rasgo)+h).append(botonBajar);
    });


}

// $("<a/>", {
//   href: '#',
//    name: 'link_html_edit',
//    id: 'link_html_edit',
//    html: 'input HTML text',
//  click: function(){
//     test();
//  }
// }).appendTo("#generadorDePNJs");


function crearBotonSubir (contadorPersonajesCreados, id){
  let botonSubir = document.createElement("span");
  botonSubir.innerText = "+";
  botonSubir.id = 'span-' +contadorPersonajesCreados+ id;
  botonSubir.setAttribute('id', "subir"+id+contadorPersonajesCreados);
  botonSubir.setAttribute('class', "botonesSubirBajar");
  botonSubir.addEventListener("click", funcionBotonSubir)
  return botonSubir;
}

function crearBotonBajar (contadorPersonajesCreados, key){
  let botonBajar = document.createElement("span");
  botonBajar.innerText = "-";
  botonBajar.id = 'span-' +contadorPersonajesCreados+ key;
  botonBajar.setAttribute('id', "bajar"+key+contadorPersonajesCreados);
  botonBajar.setAttribute('class', "botonesSubirBajar");
  botonBajar.addEventListener("click", funcionBotonBajar)
  return botonBajar;
}


function funcionBotonSubir(e) {
  console.log(this);
  console.log(e);
  let quitarSubir = e.target.id.replace('subir','');
  let valor = parseInt($("#"+quitarSubir).text()) +1;
  $("#"+quitarSubir).html(" " +valor) 
  e.preventDefault(); 
}

function funcionBotonBajar(e) {
  let quitarBajar = e.target.id.replace('bajar','');
  let elementoAeliminar = e.target.id.replace('bajar','elemento');
  let botonesAeliminar = e.target.id.replace('bajar','boton');
  let valor = parseInt($("#"+quitarBajar).text()) -1;
  if(valor == 0){
    $("#"+elementoAeliminar).remove() 
    $("#"+quitarBajar).remove() 
    $("."+botonesAeliminar).remove() 
  }else{
    $("#"+quitarBajar).html(" " +valor) 
  }
 
  e.preventDefault();
}



