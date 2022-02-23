var plantilla =
"<div id='PNJ"+h+"' class='col-6 borderFichasPnjs 'PNJ"+h+"'>"+
    "<div class='row'>"+

      "<div class='col-5' id='addNombre"+h+"''>"+
        "<div id='nombre"+h+"''>"+
          "<span class=''> <b> Nombre:</b> </span>"+
        "</div>"+
      "</div>"+
      "<div class='col-3' id='addRaza"+h+"''>"+
        "<div id='raza"+h+"''>"+
          "<span class=''>"+
            "<b>Raza:</b>"+
          "</span>"+
        "</div>"+
      "</div>"+
      "<div class='col-4' id='addTipo"+h+"''>"+
        "<span class='' id='tipoPNJ"+h+"''>"+
          "<b>Tipo: </b></span>" +
      "</div>"+
     "<div class='col-8' id='addPuesto"+h+"''>"+
       "<div id='puesto"+h+"''>"+
          "<span class=''>"+
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
          "<span class='' id='cuerpo"+h+"''>"+
          "</span>"+
          "<div id='listado-cuerpo"+h+"' class='margin-top-20'>"+
          "</div> " +
        "</div>"+
      "</div>"+

     "<div class='col-3' id='addMente"+h+"''>"+
        "<div>"+
         " <span class='fontFamilyCoalition' id='mente"+h+"''>"+
          "</span>"+
         "<div id='listado-mente"+h+"' class='margin-top-20'>"+
          "</div> " +
        "</div>"+
      "</div>"+

      "<div class='col-3' id='addEspiritu"+h+"1'>"+
        "<div>"+
         "<span class='fontFamilyCoalition' id='espiritu"+h+"' >"+
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

      "<div class='col-1 numerosPNJs' id='addPNJNumero"+h+"''><span id='PNJnumero"+h+"'>"+h+"º</span></div>"+

   "</div>";

    $("#generadorDePNJs").append(plantilla);
    $("#tipoPNJ"+h).append(personaje.tipoPNJ);
    $("#cuerpo"+h).append("<b>Cuerpo:</b> "+personaje.baseCuerpo);
    $("#mente"+h).append("<b>Mente:</b> "+personaje.baseMente);
    $("#espiritu"+h).append("<b>Espíritu:</b> "+personaje.baseEspiritu);
    for (var key in personaje.caracteristicas) {
        let nombre =   key.replace(/_|#|-|@|<>/g, " ")
        let botonSubir = crearBotonSubir(h, key)
        let botonBajar = crearBotonBajar(h, key)
      if(key == "Fuerza" || key == "Destreza" || key == "Resistencia"){
        if(personaje.caracteristicas[key] > personaje.baseCuerpo){
          contadorCuerpo++
          $('#listado-cuerpo'+h).append("<span class='d' id='elemento"+key+h+"'>"+nombre+"</span><span class='' id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
          $(".boton" +key+h).append(botonSubir); 
          $(".boton" +key+h).append(botonBajar);
        }
      }else if (key == "Inteligencia" || key == "Ingenio" || key == "Percepción"){
        if(personaje.caracteristicas[key] > personaje.baseMente){
          contadorMente++
          $('#listado-mente'+h).append("<span class='d' id='elemento"+key+h+"'>"+nombre+"</span><span class='' id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
          $(".boton" +key+h).append(botonSubir);
          $(".boton" +key+h).append(botonBajar);
        }
      }else{
        if(personaje.caracteristicas[key] > personaje.baseEspiritu){
            contadorEspiritu++
            if(contadorEspiritu == 4){
              $('#listado-espiritu'+h+"2").append("<span class='d' id='elemento"+key+h+"'>"+nombre+"</span><span class='' id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
              $(".boton" +key+h).append(botonSubir);
              $(".boton" +key+h).append(botonBajar);
            }else{
              $('#listado-espiritu'+h+"1").append("<span class='d' id='elemento"+key+h+"'>"+nombre+"</span><span class='' id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
              $(".boton" +key+h).append(botonSubir);
              $(".boton" +key+h).append(botonBajar);
            }
        }
      }

    }

    // if(contadorMente == 1){
    //   $("#addHabilidades"+h+"2").addClass("margin-top-15");
    // }else if (contadorMente == 2){
    //   $("#addHabilidades"+h+"2").addClass("margin-top-5");
    // } else if(contadorMente == 0){
    //   $("#addHabilidades"+h+"2").addClass("margin-top-30");
    // }
    // if(contadorCuerpo < 1){
    //   $("#addHabilidades"+h+"1").addClass("margin-top-15");
    // }
    $("#habilidades"+h).html("<b>Habilidades:</b> "+personaje.baseHabilidades);
    for (var key in personaje.habilidades.habilidades) {
      if(personaje.habilidades.habilidades[key] > personaje.baseHabilidades){
        contadorHabilidades++;
        let nombre =   key.replace(/_|#|-|@|<>/g, " ")
        let id = key.replace(/ /g,"_").replace(":","_").replace("/","_").replace(".","_");
        id = id.split('.').join("p");
        let botonSubir = crearBotonSubir(h, id)
        let botonBajar = crearBotonBajar(h, id)
        if(contadorCuerpo < 1){
          if(contadorHabilidades >= 0 && contadorHabilidades <= 7){
          $('#listado-habilidades'+h+"1").append("<br><span id='elemento"+id+h+"'>"+nombre+ "</span><span id='"+id+h+"'> "+personaje.habilidades.habilidades[key]+"</span><span class='botones-ocultar boton"+id+h+"'></span>");
          $(".boton" +id+h).append(botonSubir);
          $(".boton" +id+h).append(botonBajar);
        }else if(contadorHabilidades >= 8 && contadorHabilidades <= 14) {
          $('#listado-habilidades'+h+"2").append("<br><span id='elemento"+id+h+"'>"+nombre+ "</span><span id='"+id+h+"'> "+personaje.habilidades.habilidades[key]+"</span><span class='botones-ocultar boton"+id+h+"'></span>");
          $(".boton" +id+h).append(botonSubir);
          $(".boton" +id+h).append(botonBajar);
        }else if(contadorHabilidades >= 15 && contadorHabilidades <= 18) {
          $('#listado-habilidades'+h+"3").append("<br><span id='v"+id+h+"'>"+nombre+ "</span><span id='"+id+h+"'> "+personaje.habilidades.habilidades[key]+"</span><span class='botones-ocultar boton"+id+h+"'></span>");
          $(".boton" +id+h).append(botonSubir);
          $(".boton" +id+h).append(botonBajar);
        }
        }else{
          if(contadorHabilidades >= 0 && contadorHabilidades <= 5){
          $('#listado-habilidades'+h+"1").append("<br><span id='elemento"+id+h+"'>"+nombre+ "</span><span id='"+id+h+"'> "+personaje.habilidades.habilidades[key]+"</span><span class='botones-ocultar boton"+id+h+"'></span>");
          $(".boton" +id+h).append(botonSubir);
          $(".boton" +id+h).append(botonBajar);
        }else if(contadorHabilidades >= 6 && contadorHabilidades <= 12) {
          $('#listado-habilidades'+h+"2").append("<br><span id='elemento"+id+h+"'>"+nombre+ "</span><span id='"+id+h+"'> "+personaje.habilidades.habilidades[key]+"</span><span class='botones-ocultar boton"+id+h+"'></span>");
          $(".boton" +id+h).append(botonSubir);
          $(".boton" +id+h).append(botonBajar);
        }else if(contadorHabilidades >= 13 && contadorHabilidades <= 18) {
          $('#listado-habilidades'+h+"3").append("<br><span id='elemento"+id+h+"'>"+nombre+ "</span><span id='"+id+h+"'> "+personaje.habilidades.habilidades[key]+"</span><span class='botones-ocultar boton"+id+h+"'></span>");
          $(".boton" +id+h).append(botonSubir);
          $(".boton" +id+h).append(botonBajar);
        }
        }
        
      
      }

    }
    $("#conocimientos"+h).append("<span id='conocimientosAgregar"+h+"'><b>Conocimientos:</b></span><br>");
    for (var key of Object.keys(personaje.conocimientos)) {
      let nombre =   key.replace(/_|#|-|@|<>/g, " ")
      let id = key.replace(/ /g,"_").replace(":","_").replace("/","_").replace("/\./g","p");  
      id = id.split('.').join("p");
      let botonSubir = crearBotonSubir(h, id)
      let botonBajar = crearBotonBajar(h, id)
      $('#listado-conocimientos'+h).append("<span id='elemento"+id+h+"'>"+nombre+"</span><span id='"+id+h+"'> " +personaje.conocimientos[key]+"</span><span class='botones-ocultar boton"+id+h+"'></span><br>");   
      $(".boton" +id+h).append(botonSubir);
      $(".boton" +id+h).append(botonBajar);
     }  

    if(contadorEspiritu == 4){
      $("#addEspiritu"+h+"2").html("");
      $("#addConocimientos"+h).addClass("margin-top-30");
    }else{
      if(personaje.tipoPNJ == "Inútil" || personaje.tipoPNJ == "Pringao"){
        $("#addEspiritu"+h+"2").html("");
        $("#addConocimientos"+h).addClass("margin-top-40");
      }else{
        $("#addEspiritu"+h+"2").html("");
        $("#addConocimientos"+h).addClass("margin-top-50");
      }
 
    }

    $('#rasgos-adicionales'+h).append("Rasgos: ");
    personaje.rasgosAdicionales.forEach(function(rasgo, index) {
          let botonSubir = crearBotonSubir(h, Object.keys(rasgo))
          let botonBajar = crearBotonBajar(h, Object.keys(rasgo))
          let nombre = Object.keys(rasgo)[0].replace(/_|#|-|@|<>/g, " ");
          let id = Object.keys(rasgo)[0].replace(/ /g,"_").replace(":","_").replace("/","_").replace("/\./g","p");   
          $('#listado-rasgos'+h).append("<span id='elemento"+id+h+"'>"+nombre+" "+" "+"</span><span id='"+id+h+"'>" +Object.values(rasgo)+" "+" "+"</span><span class='botones-ocultar boton"+id+h+"'></span>");   
          $(".boton" +Object.keys(rasgo)+h).append(botonSubir);
          $(".boton" +Object.keys(rasgo)+h).append(botonBajar);
    });