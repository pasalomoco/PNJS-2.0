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
         "<span id='espiritu"+h+"' >"+
         "</span>"+
          "<div id='listado-espiritu"+h+"2'  class='margin-top-20'>"+
         "</div>"+
        "</div>"+
     "</div>"+

     "<div class='col-8'>"+
         "<span id='habilidades"+h+"''>"+
         "</span>"+
         "<div class='row margin-top-20'>"+
           "<div class='col-4' id='addHabilidades"+h+"1'>"+
              "<div id='listado-habilidades"+h+"1'>"+
             "</div> "+
            "</div>"+
            "<div class='col-4' id='addHabilidades"+h+"2'>"+
              "<div id='listado-habilidades"+h+"2'>"+
             " </div> "+
           "</div>"+
            "<div class='col-4' id='addHabilidades"+h+"3'>"+
             "<div id='listado-habilidades"+h+"3'>"+
              "</div> "+
           "</div>"+
          "</div>"+
    "</div>"+
      "<div class='col-4' id='addConocimientos"+h+"'>"+
        "<div>"+
         "<span id='conocimientos"+h+"'>"+
         "</span>"+
           "<div id='listado-conocimientos"+h+"'>"+
           "</div>"+
       "</div>"+
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