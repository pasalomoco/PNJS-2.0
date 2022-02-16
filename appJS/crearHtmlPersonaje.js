$(document).ready(function(){ 
    $("#iniciar").click(function(){

        $("#generadorDePNJs").show()  
        $(".contenido-aplicacion").show()
        $("#iniciar").hide();
        $(".sidebar").show();
        var numeroTotalPersonajes = prompt("¿Cuantos PNJs quieres hacer? Mínimo 1 máximo 8");
        if (isNaN(numeroTotalPersonajes) || numeroTotalPersonajes == "" || numeroTotalPersonajes > 8 ) {
            numeroTotalPersonajes = 8
        }else{
            numeroTotalPersonajes = parseInt(numeroTotalPersonajes);
        }
        switch (numeroTotalPersonajes) {
          case 1: 
              for (let u = 2; u <= 8; u++){
                $("#PNJ"+u).hide()
              }
          break;
          case 2: 
                for (let u = 3; u <= 8; u++){
                  $("#PNJ"+u).hide()
                }
          break;
          case 3:  
                for (let u = 4; u <= 8; u++){
                  $("#PNJ"+u).hide()
                }
          break;
          case 4:   
                for (let u = 5; u <= 8; u++){
                  $("#PNJ"+u).hide()
                }
          break;
          case 5:  
                for (let u = 6; u <= 8; u++){
                  $("#PNJ"+u).hide()
                }
                 
          break;
          case 6:  
                for (let u = 7; u <= 8; u++){
                  $("#PNJ"+u).hide()
                }
          break;
      }
     
        for (let h =1; h <= numeroTotalPersonajes; h++){

         
         
            let personaje
            alert("Creando el personaje número: "+h)
            var bonificacion = prompt("Introduce una bonificación del 0 al 100");
            console.log(bonificacion)
            if (isNaN(bonificacion) || bonificacion == "" ) {
                bonificacion = parseInt(0);
            }else{
                bonificacion = parseInt(bonificacion);
            }
            personaje = new Personaje(bonificacion);
            let contadorHabilidades = 0;
            let contadorConocimientos =0;
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
                  let nombre =   key.replace(/_|#|-|@|<>/g, " ")
                  $('#listado-cuerpo'+h).append("<br><span id='cuerpo"+key+h+"'>"+nombre+"</span><span style='margin-right:1px' id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
                  $(".boton" +key+h).append(botonSubir); 
                  $(".boton" +key+h).append(botonBajar);
                }else{
                  $('#listado-cuerpo'+h).append("&nbsp;");
                }
              }else if (key == "Inteligencia" || key == "Ingenio" || key == "Percepción"){
                if(personaje.caracteristicas[key] > personaje.baseMente){
                    let nombre =   key.replace(/_|#|-|@|<>/g, " ")
                  $('#listado-mente'+h).append("<br><span id='mente"+key+h+"'>"+nombre+"</span><span style='margin-right:1px' id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
                  $(".boton" +key+h).append(botonSubir);
                  $(".boton" +key+h).append(botonBajar);
                }else{
                  $('#listado-mente'+h).append("&nbsp;");
                }
              }else{
                if(personaje.caracteristicas[key] > personaje.baseEspiritu){
                    let nombre =   key.replace(/_|#|-|@|<>/g, " ")
                  $('#listado-espiritu'+h).append("<br><span id='espiritu"+key+h+"'>"+nombre+"</span><span style='margin-right:1px' id='"+key+h+"'> " +personaje.caracteristicas[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
                  $(".boton" +key+h).append(botonSubir);
                  $(".boton" +key+h).append(botonBajar);
                }else{
                  $('#listado-espíritu'+h).append("&nbsp;");
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
                  $('#listado-habilidades'+h+"1").append("<br><span id='habilidad"+id+h+"'>"+nombre+"</span><span style='margin-right:1px' id='"+id+h+"'> " +personaje.habilidades.habilidades[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
                  $(".boton" +key+h).append(botonSubir);
                  $(".boton" +key+h).append(botonBajar);
                }else if(contadorHabilidades >= 5 && contadorHabilidades <= 8) {
                    let nombre =   key.replace(/_|#|-|@|<>/g, " ")
                  $('#listado-habilidades'+h+"2").append("<br><span id='habilidad"+id+h+"'>"+nombre+"</span><span style='margin-right:1px' id='"+id+h+"'> " +personaje.habilidades.habilidades[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
                  $(".boton" +key+h).append(botonSubir);
                  $(".boton" +key+h).append(botonBajar);
                }else if(contadorHabilidades >= 9 && contadorHabilidades <= 12) {
                    let nombre =   key.replace(/_|#|-|@|<>/g, " ")
                  $('#listado-habilidades'+h+"3").append("<br><span id='habilidad"+id+h+"'>"+nombre+"</span><span style='margin-right:1px' id='"+id+h+"'> " +personaje.habilidades.habilidades[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span>");
                  $(".boton" +key+h).append(botonSubir);
                  $(".boton" +key+h).append(botonBajar);
                }
              
              }
       
            }
            if(contadorHabilidades <= 8){
                $('#listado-habilidades'+h+"3").append("<span id='conocimientosAgregar"+h+"'><b>Conocimientos:</b></span><br>");
                for (var key of Object.keys(personaje.conocimientos)) {
                    contadorConocimientos++;
                    let botonSubir = crearBotonSubir(h, key)
                    let botonBajar = crearBotonBajar(h, key)
                    let nombre =   key.replace(/_|#|-|@|<>/g, " ")
                    let id = key.replace(/ /g,"_").replace(":","_").replace("/","_").replace(".","_");
                    if(contadorConocimientos > 4){
                        $('#listado-conocimientos'+h).append("<span id='conocimiento"+id+h+"'>"+nombre+"</span><span style='margin-right:1px' id='"+id+h+"'> " +personaje.conocimientos[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span><br>");   
                        $(".boton" +key+h).append(botonSubir);
                        $(".boton" +key+h).append(botonBajar);
                    }else{
                        $('#listado-habilidades'+h+"3").append("<span id='habilidad"+id+h+"'>"+nombre+"</span><span style='margin-right:1px' id='"+id+h+"'> " +personaje.conocimientos[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span><br>");   
                        $(".boton" +key+h).append(botonSubir);
                        $(".boton" +key+h).append(botonBajar);
                    }
                  
                }
            }else{
                $('#conocimientos'+h).append("<span id='conocimientosAgregar"+h+"'><b>Conocimientos:</b></span><br>");
                for (var key of Object.keys(personaje.conocimientos)) {
                    let botonSubir = crearBotonSubir(h, key)
                    let botonBajar = crearBotonBajar(h, key)
                    let nombre =   key.replace(/_|#|-|@|<>/g, " ")
                    let id = key.replace(/ /g,"_").replace(":","_").replace("/","_").replace(".","_");
                    $('#listado-conocimientos'+h).append("<span id='conocimiento"+id+h+"'>"+nombre+"</span><span style='margin-right:1px' id='"+id+h+"'> " +personaje.conocimientos[key]+"</span><span class='botones-ocultar boton"+key+h+"'></span><br>");   
                    $(".boton" +key+h).append(botonSubir);
                    $(".boton" +key+h).append(botonBajar);
                }
            }
         
         
            $('#rasgos-adicionales'+h).append("Rasgos adicionales:");
            personaje.rasgosAdicionales.forEach(function(rasgo, index) {
                  let botonSubir = crearBotonSubir(h, Object.keys(rasgo))
                  let botonBajar = crearBotonBajar(h, Object.keys(rasgo))
                  let nombre = Object.keys(rasgo)[0].replace(/_|#|-|@|<>/g, " ");
                  let id = Object.keys(rasgo)[0].replace(/ /g,"_").replace(":","_").replace("/","_").replace(".","_");   
                  $('#listado-rasgos'+h).append("<span id='rasgo"+id+h+"'>"+nombre+"</span><span style='margin-right:1px' id='"+id+h+"'>" +Object.values(rasgo)+" "+" "+"</span><span class='botones-ocultar boton"+Object.keys(rasgo)+h+"'></span>");   
                  $(".boton" +Object.keys(rasgo)+h).append(botonSubir);
                  $(".boton" +Object.keys(rasgo)+h).append(botonBajar);
            });

        }
   
          
            
    });
    
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

});
  


