function crearPNJ (h, bonificacion, tipo) {
  var plantilla =
"<div id='PNJ"+h+"' class='col-6 borderFichasPnjs'>"+
    "<div class='row'>"+

      "<div class='col-5' id='addNombre"+h+"''>"+
        "<div id='nombre"+h+"''>"+
          "<span> <b> Nombre:</b> </span>"+
        "</div>"+
      "</div>"+
      "<div class='col-3' id='addRaza"+h+"''>"+
        "<div id='raza"+h+"''>"+
          "<span>"+
            "<b>Raza:</b>"+
          "</span>"+
        "</div>"+
      "</div>"+
      "<div class='col-4' id='addTipo"+h+"''>"+
        "<span id='tipoPNJ"+h+"''>"+
          "<b>Tipo: </b></span>" +
      "</div>"+
     "<div class='col-8' id='addPuesto"+h+"''>"+
       "<div id='puesto"+h+"''>"+
          "<span>"+
           " <b>Puesto:</b>"+
          "</span>"+
        "</div>"+
     "</div>"+
     "<div class='col-4'>"+
        "<div class='cuadradosVitalidad'></div>"+
        "<div class='cuadradosVitalidad'></div>"+
        "<div class='cuadradosVitalidad'></div>"+
        "<div class='cuadradosVitalidad'></div>"+
        "<div class='cuadradosVitalidad'></div>"+
        "<div class='cuadradosVitalidad'></div>"+
        "<div class='cuadradosVitalidad'></div>"+
        "<div class='cuadradosVitalidad'></div>"+
        "<div class='cuadradosVitalidad'></div>"+
        "<div class='cuadradosVitalidad'></div>"+
      "</div>"+
      
      "<div class='col-3' id='addCuerpo"+h+"''>"+
       "<div>"+
          "<span id='cuerpo"+h+"''>"+
          "</span>"+
          "<div id='listado-cuerpo"+h+"' class='margin-top-20'>"+
          "</div> " +
        "</div>"+
      "</div>"+

     "<div class='col-3' id='addMente"+h+"''>"+
        "<div>"+
         " <span id='mente"+h+"''>"+
          "</span>"+
         "<div id='listado-mente"+h+"' class='margin-top-20'>"+
          "</div> " +
        "</div>"+
      "</div>"+

      "<div class='col-3' id='addEspiritu"+h+"1'>"+
        "<div>"+
         "<span id='espiritu"+h+"' >"+
         "</span>"+
          "<div id='listado-espiritu"+h+"1' class='margin-top-20'>"+
         "</div>"+
        "</div>"+
     "</div>"+

     "<div class='col-3' id='addEspiritu"+h+"2''>"+
        "<div>"+
          "<div id='listado-espiritu"+h+"2' class='margin-top-20'>"+
         "</div>"+
        "</div>"+
     "</div>"+

      "<div class='col-3' id='addHabilidades"+h+"1'>"+
          "<span id='habilidades"+h+"''></span>"+
          "<div class='margin-top-17' id='listado-habilidades"+h+"1'></div> "+
      "</div>"+
      "<div class='col-3' id='addHabilidades"+h+"2'>"+
          "<div class='margin-top-17' id='listado-habilidades"+h+"2'></div> "+
      "</div>"+
      "<div class='col-3' id='addHabilidades"+h+"3'>"+
          "<div class='margin-top-17' id='listado-habilidades"+h+"3'></div> "+
      "</div>"+

      "<div class='col-3' id='addConocimientos"+h+"'>"+
         "<span id='conocimientos"+h+"'></span>"+
           "<div id='listado-conocimientos"+h+"'></div>"+
      "</div>"+

      "<div class='col-12'>"+
       "<span id='rasgos-adicionales"+h+"'>"+
          
       "</span>"+
        "<span id='listado-rasgos"+h+"'>"+

        "</span>"+
     "</div>"+

      "<div class='col-12'>"+
        "<div>"+
          "<div>"+
            "Vitalidad:"+
                "<div class='cuadradosVitalidad'></div>"+
                "<div class='cuadradosVitalidad'></div>"+
                "<div class='cuadradosVitalidad'></div>"+
                "<div class='cuadradosVitalidad'></div>"+
                "<div class='cuadradosVitalidad'></div>"+
                "5"+
               "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
              "10"+
              "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "15"+
               "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "20"+
               "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
              "<div class='cuadradosVitalidad'></div>"+
               "<div class='cuadradosVitalidad'></div>"+
               "</div>"+
       "</div>"+
     "</div>"+

      "<div class='col-12' id='addEquipo"+h+"''>"+
        "<div class='equipo'>"+
          "<span id='equipo"+h+"''>"+
            "Equipo:"+
          "</span>"+
        "</div>"+
      "</div>"+

      "<div class='col-11' id='addEspecial"+h+"''>"+
        "<div class='especial'>"+
        "<span id='especial"+h+"''>"+
        "Especial:"+
        "</span>"+
        "</div>"+
      "</div>"+

      "<div class='col-1 numerosPNJs' id='pnjNumero"+h+"''>"+
        +h+"º"
      "</div>"+

   "</div>";

    $("#generadorDePNJs").append(plantilla);

    personaje = new Personaje(bonificacion, tipo);
    let contadorHabilidades = 0;
    let contadorConocimientos =0;
    let contadorEspiritu = 0; 
    let contadorCuerpo = 0;
    let contadorMente = 0;
    console.log(personaje)
    alert("Te ha tocado un "+personaje.tipoPNJ)
    $("#tipoPNJ"+h).append(personaje.tipoPNJ);
    $("#cuerpo"+h).append("<b>Cuerpo:</b> "+personaje.baseCuerpo);
    $("#mente"+h).append("<b>Mente:</b> "+personaje.baseMente);
    $("#espiritu"+h).append("<b>Espíritu:</b> "+personaje.baseEspiritu);
    for (var key in personaje.caracteristicas) {
        let botonSubir = crearBotonSubir(h, key)
        let botonBajar = crearBotonBajar(h, key)
      if(key == "Fuerza" || key == "Destreza" || key == "Resistencia"){
        if(personaje.caracteristicas[key] > personaje.baseCuerpo){
          contadorCuerpo++
          let nombre =   key.replace(/_|#|-|@|<>/g, " ")
          $('#listado-cuerpo'+h).append("<br><span id='cuerpo"+key+h+"'>"+nombre+"</span><span id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
          $(".boton" +key+h).append(botonSubir); 
          $(".boton" +key+h).append(botonBajar);
        }
      }else if (key == "Inteligencia" || key == "Ingenio" || key == "Percepción"){
        if(personaje.caracteristicas[key] > personaje.baseMente){
          contadorMente++
            let nombre =   key.replace(/_|#|-|@|<>/g, " ")
          $('#listado-mente'+h).append("<br><span id='mente"+key+h+"'>"+nombre+"</span><span id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
          $(".boton" +key+h).append(botonSubir);
          $(".boton" +key+h).append(botonBajar);
        }
      }else{
        if(personaje.caracteristicas[key] > personaje.baseEspiritu){
            contadorEspiritu++
            let nombre =   key.replace(/_|#|-|@|<>/g, " ")
            console.log("Contador de espíritu en el for "+contadorEspiritu)
            console.log(nombre + " : "+ personaje.caracteristicas[key])
            if(contadorEspiritu == 4){
              $('#listado-espiritu'+h+"2").append("<br><span id='espiritu"+key+h+"'>"+nombre+"</span><span id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
              $(".boton" +key+h).append(botonSubir);
              $(".boton" +key+h).append(botonBajar);
            }else{
              $('#listado-espiritu'+h+"1").append("<br><span id='espiritu"+key+h+"'>"+nombre+"</span><span id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
              $(".boton" +key+h).append(botonSubir);
              $(".boton" +key+h).append(botonBajar);
            }
        }
      }

    }
    $("#habilidades"+h).html("<b>Habilidades:</b> "+personaje.baseHabilidades);
    for (var key in personaje.habilidades.habilidades) {
      if(personaje.habilidades.habilidades[key] > personaje.baseHabilidades){
        contadorHabilidades++;
        let botonSubir = crearBotonSubir(h, key)
        let botonBajar = crearBotonBajar(h, key)
        let id = key.replace(/ /g,"_").replace(":","_").replace("/","_").replace(".","_");
        if(contadorHabilidades >= 0 && contadorHabilidades <= 4){
            let nombre =   key.replace(/_|#|-|@|<>/g, " ")
          $('#listado-habilidades'+h+"1").append("<br><span style='margin-right:1px' id='"+id+h+"'>"+nombre+" " +personaje.habilidades.habilidades[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
          $(".boton" +key+h).append(botonSubir);
          $(".boton" +key+h).append(botonBajar);
        }else if(contadorHabilidades >= 5 && contadorHabilidades <= 10) {
            let nombre =   key.replace(/_|#|-|@|<>/g, " ")
          $('#listado-habilidades'+h+"2").append("<br><span style='margin-right:1px' id='"+id+h+"'>"+nombre+" " +personaje.habilidades.habilidades[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
          $(".boton" +key+h).append(botonSubir);
          $(".boton" +key+h).append(botonBajar);
        }else if(contadorHabilidades >= 10 && contadorHabilidades <= 15) {
            let nombre =   key.replace(/_|#|-|@|<>/g, " ")
          $('#listado-habilidades'+h+"3").append("<br><span style='margin-right:1px' id='"+id+h+"'>"+nombre+" " +personaje.habilidades.habilidades[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
          $(".boton" +key+h).append(botonSubir);
          $(".boton" +key+h).append(botonBajar);
        }
      
      }

    }
    $("#conocimientos"+h).append("<span id='conocimientosAgregar"+h+"'><b>Conocimientos:</b></span><br>");
    for (var key of Object.keys(personaje.conocimientos)) {
      let botonSubir = crearBotonSubir(h, key)
      let botonBajar = crearBotonBajar(h, key)
      let nombre =   key.replace(/_|#|-|@|<>/g, " ")
      let id = key.replace(/ /g,"_").replace(":","_").replace("/","_").replace(".","_");
      $('#listado-conocimientos'+h).append("<span style='margin-right:1px' id='"+id+h+"'>"+nombre+" " +personaje.conocimientos[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span><br>");   
      $(".boton" +key+h).append(botonSubir);
      $(".boton" +key+h).append(botonBajar);
     }  

     console.log("Contador espiritu")
     console.log(contadorEspiritu)
    if(contadorEspiritu == 4){
      $("#addEspiritu"+h+"2").html("");
      $("#addConocimientos"+h).addClass("margin-top-30");
    }else{
      $("#addEspiritu"+h+"2").html("");
      $("#addConocimientos"+h).addClass("margin-top-60");
    }

    $('#rasgos-adicionales'+h).append("Rasgos: ");
    personaje.rasgosAdicionales.forEach(function(rasgo, index) {
          let botonSubir = crearBotonSubir(h, Object.keys(rasgo))
          let botonBajar = crearBotonBajar(h, Object.keys(rasgo))
          let nombre = Object.keys(rasgo)[0].replace(/_|#|-|@|<>/g, " ");
          let id = Object.keys(rasgo)[0].replace(/ /g,"_").replace(":","_").replace("/","_").replace(".","_");   
          $('#listado-rasgos'+h).append("<span id='rasgo"+id+h+"'>"+nombre+" "+" "+"</span><span id='"+id+h+"'>" +Object.values(rasgo)+" "+" "+"</span><span class='botones-ocultar boton"+id+h+"'></span>");   
          $(".boton" +Object.keys(rasgo)+h).append(botonSubir);
          $(".boton" +Object.keys(rasgo)+h).append(botonBajar);
    });


}

function funcionContadorEspiritu (personaje){
  let contador;
  for (var key in personaje.caracteristicas) {
    if(personaje.caracteristicas[key] > personaje.baseEspiritu){
        contador++;
    }
  }
  return contador;
}

function crearBotonSubir (contadorPersonajesCreados, key){
  let botonSubir = document.createElement("span");
  botonSubir.innerText = "+";
  botonSubir.id = 'span-' +contadorPersonajesCreados+ key;
  botonSubir.setAttribute('id', "subir"+key+contadorPersonajesCreados);
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
  var quitarSubir = e.target.id.replace('subir','');
  var idaSubir = document.getElementById(quitarSubir);
  var withNoDigits = quitarSubir.replace(/[0-9]/g, '').replace(/_|#|-|@|<>/g, " ");;
  var valor = document.getElementById(quitarSubir).textContent;
  var quitarString = valor.replace ( /[^\d.]/g, '' );
  quitarString = parseInt(quitarString)+1;
  idaSubir.textContent = " "+quitarString;
  e.preventDefault(); 
}

function funcionBotonBajar(e) {
  var quitarBajar = e.target.id.replace('bajar','');
  var idaBajar = document.getElementById(quitarBajar);
  var withNoDigits = quitarBajar.replace(/[0-9]/g, '').replace(/_|#|-|@|<>/g, " ");
  var valor = document.getElementById(quitarBajar).textContent;
  var quitarString = valor.replace ( /[^\d.]/g, '' );
  quitarString = parseInt(quitarString)-1;
  if(quitarString == 0){
      $("#"+quitarBajar).remove();
      let eliminarSubir = e.target.id.replace('bajar','subir');
      $("#"+eliminarSubir).remove();  
      $("#"+e.target.id).remove();  
      $(".boton"+e.target.id).remove(); 
  }else{
    idaBajar.textContent = " "+quitarString;
  }
 
  e.preventDefault(); 
}

