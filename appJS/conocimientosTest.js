function crearEstadisticasConocimientos(tipo){
    let conocimientos = crearConocimientosRandom(20);
    var conocimientosFinal = {};
    let noRepeticion = true;
      while(noRepeticion){
        if(Array.isArray(conocimientos)){
            conocimientos.forEach(function(conocimiento, indice, array) {
                if(Array.isArray(conocimiento)){
                    conocimiento.forEach(function(conocimiento2, indice2, array) {
                        if(conocimientosFinal.hasOwnProperty(conocimiento2)){
                            if(tipo == "Inútil" || tipo == "Pringao"){
                                if(conocimientosFinal[conocimiento2] > 1){
                                    noRepeticion = true;
                                }else{
                                    conocimientosFinal[conocimiento2] = conocimientosFinal[conocimiento2]+1;
                                    noRepeticion = false;
                                }
  
                            }else if(tipo == "Del montón"){
                                if(conocimientosFinal[conocimiento2] > 2){
                                    noRepeticion = true;
                                }else{
                                    conocimientosFinal[conocimiento2] = conocimientosFinal[conocimiento2]+1;
                                    noRepeticion = false;
                                }
  
                            }else if(tipo == "Especialista" || tipo == "Héroe"){
                                if(conocimientosFinal[conocimiento2] > 3){
                                    noRepeticion = true;
                                }else{
                                    conocimientosFinal[conocimiento2] = conocimientosFinal[conocimiento2]+1;
                                    noRepeticion = false;
                                }
                            }
                            
                        }else{
                            conocimientosFinal[conocimiento2] = 1;
                            noRepeticion = false;
                        }
                        
                    })
                }else{
                    if(conocimientosFinal.hasOwnProperty(conocimiento)){
  
                        if(tipo == "Inútil" || tipo == "Pringao"){
                            if(conocimientosFinal[conocimiento] > 1){
                                noRepeticion = true;
                            }else{
                                conocimientosFinal[conocimiento] = conocimientosFinal[conocimiento]+1;
                                noRepeticion = false;
                            }
                        }else if(tipo == "Del montón"){
                            if(conocimientosFinal[conocimiento] > 2){
                            noRepeticion = true;
                            }else{
                                conocimientosFinal[conocimiento] = conocimientosFinal[conocimiento]+1;
                                noRepeticion = false;
                            }
                        }else if(tipo == "Especialista" || tipo == "Héroe"){
                            if(conocimientosFinal[conocimiento] > 3){
                            noRepeticion = true;
                            }else{
                                conocimientosFinal[conocimiento] = conocimientosFinal[conocimiento]+1;
                                noRepeticion = false;
                            }
                        }
                    
                    }else{
                        conocimientosFinal[conocimiento] = 1;
                        noRepeticion = false;
                    }
                }
            
            })
  
        }else{
            if(conocimientosFinal.hasOwnProperty(conocimientos)){
  
                if(tipo == "Inútil" || tipo == "Pringao"){
                    if(conocimientosFinal[conocimientos] > 1){
                        noRepeticion = true;
                    }else{
                        conocimientosFinal[conocimientos] = conocimientosFinal[conocimientos]+1;
                        noRepeticion = false;
                    }
                }else if(tipo == "Del montón"){
                    if(conocimientosFinal[conocimientos] > 2){
                        noRepeticion = true;
                    }else{
                        conocimientosFinal[conocimientos] = conocimientosFinal[conocimientos]+1;
                        noRepeticion = false;
                    }
                }else if(tipo == "Especialista" || tipo == "Héroe"){
                    if(conocimientosFinal[conocimientos] > 3){
                        noRepeticion = true;
                    }else{
                        conocimientosFinal[conocimientos] = conocimientosFinal[conocimientos]+1;
                        noRepeticion = false;
                    }
                }
            
            }else{
                
                conocimientosFinal[conocimientos] = 1;
                noRepeticion = false;
            }           
        }    
    }
  
    return conocimientosFinal
  }
  function sacarConocimientoRandom (tirada){
      let conocimientoRandom = new Array();
      let dadoConocimiento = new Dice (tirada); 
      switch (dadoConocimiento.roll()) {
        case 1: conocimientoRandom= "Redenciones"; 
        break;
        case 2:  conocimientoRandom= "Analíticas"; 
        break;
        case 3:  conocimientoRandom= "Ciencia"; 
        break;
        case 4:  conocimientoRandom= "Pilotaje"; 
        break;
        case 5:  conocimientoRandom= "Física"; 
        break;
        case 6:  conocimientoRandom= "Física"; 
        break;
        case 7:  conocimientoRandom= "Creativa"; 
        break;
        case 8:  conocimientoRandom= "Creativa"; 
        break;
        case 9:  conocimientoRandom= "Criminal"; 
        break;
        case 10:  conocimientoRandom= "Maniobras"; 
        break;
        case 11:  conocimientoRandom= "Combate"; 
        break;
        case 12:  conocimientoRandom= "Combate"; 
        break;
        case 13:  conocimientoRandom= "Saber"; 
        break;
        case 14:  conocimientoRandom= "Saber"; 
        break;
        case 15:  conocimientoRandom= "Médica"; 
        break;
        case 16:  conocimientoRandom= "Ingenierías"; 
        break;
        case 17:  conocimientoRandom= "Ingenierías"; 
        break;
        case 18:  conocimientoRandom= "Idioma"; 
        break;
        case 19: 
                  for (let i = 0; i < 2; i++) {
                    conocimientoRandom.push(sacarConocimientoRandom(18));
                  }
        break;
        case 20:  
                  for (let i = 0; i < 2; i++) {
                    conocimientoRandom.push(sacarConocimientoRandom(18));
                  }
        break;
    }
    return conocimientoRandom;
    }
  
  
    function crearConocimientosRandom (tirada){
      let conocimientoRandom = sacarConocimientoRandom(tirada);
      let conocimientosTotales = new Array();
      if (typeof conocimientoRandom === 'string') {
        switch (conocimientoRandom) {
          case "Redenciones":  conocimientosTotales.push(sacarRedencionesRandom(6));
          break;
          case "Analíticas":  conocimientosTotales.push(sacarAnaliticasRandom(6)); 
          break;
          case "Ciencia":   conocimientosTotales.push(sacarCienciaRandom(6));
          break;
          case "Pilotaje":  conocimientosTotales.push(sacarPilotajeRandom(6));
          break;
          case "Física":  conocimientosTotales.push(sacarFisicoRandom(6)); 
          break;
          case "Creativa":  conocimientosTotales.push(sacarCreativaRandom(6));
          break;
          case "Criminal":  conocimientosTotales.push(sacarCriminalRandom(6)); 
          break;
          case "Maniobras":   conocimientosTotales.push(sacarManiobraRandom(6));  
          break;
          case "Combate":   conocimientosTotales.push(sacarCombateRandom(6)); 
          break;
          case "Saber":   conocimientosTotales.push(sacarSaberRandom(6)); 
          break;
          case "Médica":   conocimientosTotales.push(sacarMedicaRandom(6));  
          break;
          case "Ingenierías":   conocimientosTotales.push(sacarIngenieriaRandom(6)); 
          break;
          case "Idioma":   conocimientosTotales.push(sacarIdiomaRandom(6)); 
          break;
        }
      }else{
        if(Array.isArray(conocimientoRandom)){
          conocimientoRandom.forEach(function(conocimiento, indice, array) {
            console.log("¡Te han tocado dos conocimientos! Rama: "+conocimiento+"!");
            switch (conocimiento) {
              case "Redenciones":  conocimientosTotales.push(sacarRedencionesRandom(6));
              break;
              case "Analíticas":  conocimientosTotales.push(sacarAnaliticasRandom(6)); 
              break;
              case "Ciencia":   conocimientosTotales.push(sacarCienciaRandom(6));
              break;
              case "Pilotaje":  conocimientosTotales.push(sacarPilotajeRandom(6));
              break;
              case "Física":  conocimientosTotales.push(sacarFisicoRandom(6)); 
              break;
              case "Creativa":  conocimientosTotales.push(sacarCreativaRandom(6));
              break;
              case "Criminal":  conocimientosTotales.push(sacarCriminalRandom(6)); 
              break;
              case "Maniobras":   conocimientosTotales.push(sacarManiobraRandom(6));  
              break;
              case "Combate":   conocimientosTotales.push(sacarCombateRandom(6)); 
              break;
              case "Saber":   conocimientosTotales.push(sacarSaberRandom(6)); 
              break;
              case "Médica":   conocimientosTotales.push(sacarMedicaRandom(6));  
              break;
              case "Ingenierías":   conocimientosTotales.push(sacarIngenieriaRandom(6)); 
              break;
              case "Idioma":   conocimientosTotales.push(sacarIdiomaRandom(6)); 
              break;
            }
        })}
        
      }  
    return conocimientosTotales;   
    }
    
    function sacarRedencionesRandom (tirada){
      var redenciones = new Array();
      var dadoRedenciones = new Dice (tirada); 
      switch (dadoRedenciones.roll()) {
        case 1: redenciones= "Mecánica"; 
        break;
        case 2:  redenciones= "Voltios"; 
        break;
        case 3:  
                redenciones= "Alta tecnología"; 
        break;
        case 4:   
                redenciones.push("Mecánica"); 
                redenciones.push("Voltios"); 
        break;
        case 5:  
                redenciones.push( "Voltios"); 
                redenciones.push("Alta tecnología");  
        break;
        case 6:  
                redenciones.push ("Mecánica");  
                redenciones.push ("Voltios");  
                redenciones.push ("Alta tecnología");  
    
        break;
    }
    return redenciones;
    }
    
    function sacarAnaliticasRandom (tirada){
      var analiticas = new Array();
      var dadoAnaliticas = new Dice (tirada); 
      switch (dadoAnaliticas.roll()) {
        case 1: analiticas= "Burocracia"; 
        break;
        case 2: analiticas= "Academia"; 
        break;
        case 3: analiticas= "Guerra"; 
        break;
        case 4: analiticas= "Investigar";  
        break;
        case 5:  
                for (let i = 0; i < 2; i++) {
                  analiticas.push(sacarAnaliticasRandom(4));
                }  
        break;
        case 6:  
                for (let i = 0; i < 3; i++) {
                  analiticas.push(sacarAnaliticasRandom(4));
                } 
        break;
    }
    return analiticas;
    }
    
    function sacarCienciaRandom (tirada){
      var ciencia = new Array();
      var dadoCiencia = new Dice (tirada); 
      switch (dadoCiencia.roll()) {
        case 1: ciencia= "Química"; 
        break;
        case 2: ciencia= "Social"; 
        break;
        case 3: ciencia= "Física"; 
        break;
        case 4: ciencia= "Biología";  
        break;
        case 5: ciencia= "Terraformación";  
        break;
        case 6:  
                for (let i = 0; i < 2; i++) {
                  ciencia.push(sacarCienciaRandom(5));
                } 
        break;
    }
    return ciencia;
    }
    
    function sacarPilotajeRandom (tirada){
      var pilotaje = new Array();
      var dadoPilotaje = new Dice (tirada); 
      switch (dadoPilotaje.roll()) {
        case 1: pilotaje= "Cabalgar"; 
        break;
        case 2: pilotaje= "Terrestre"; 
        break;
        case 3: pilotaje= "Marino"; 
        break;
        case 4: pilotaje= "Atmósfera";  
        break;
        case 5: pilotaje= "Vacío";  
        break;
        case 6:  
                for (let i = 0; i < 2; i++) {
                  pilotaje.push(sacarPilotajeRandom(5));
                } 
        break;
    }
    return pilotaje;
    }
    
    function sacarFisicoRandom (tirada){
      var fisico = new Array();
      var dadoFisico = new Dice (tirada); 
      switch (dadoFisico.roll()) {
        case 1: fisico= "Atletismo"; 
        break;
        case 2: fisico= "Escalar"; 
        break;
        case 3: fisico= "Nadar"; 
        break;
        case 4: fisico= "Traje de vacío";  
        break;
        case 5:   
              for (let i = 0; i < 2; i++) {
                fisico.push(sacarFisicoRandom(4));
              }
        break;
        case 6:  
               for (let i = 0; i < 3; i++) {
                fisico.push(sacarFisicoRandom(4));
               } 
        break;
    }
    return fisico;
    }
    
    function sacarCreativaRandom (tirada){
      var creativa = new Array();
      var dadoCreativa = new Dice (tirada); 
      switch (dadoCreativa.roll()) {
        case 1: creativa= "Arte"; 
        break;
        case 2: creativa= "Artesanía"; 
        break;
        case 3: creativa= "Disfraz"; 
        break;
        case 4: creativa= "Interpretar";  
        break;
        case 5: creativa= "Juego"; 
        break;
        case 6:  
               for (let i = 0; i < 2; i++) {
                creativa.push(sacarCreativaRandom(5));
               } 
        break;
    }
    return creativa;
    }
    
    function sacarCriminalRandom (tirada){
      var criminal = new Array();
      var dadoCriminal = new Dice (tirada); 
      switch (dadoCriminal.roll()) {
        case 1: criminal= "Abrir cerraduras"; 
        break;
        case 2: criminal= "Callejeo"; 
        break;
        case 3: criminal= "Juego de manos"; 
        break;
        case 4: criminal= "Tortura";  
        break;
        case 5: criminal= "Subterfugio"; 
        break;
        case 6:  
               for (let i = 0; i < 2; i++) {
                criminal.push(sacarCriminalRandom(5));
               } 
        break;
    }
    return criminal;
    }
  
    function sacarManiobraRandom (tirada){
      var maniobra = new Array();
      var dadoManiobra = new Dice (tirada); 
      switch (dadoManiobra.roll()) {
        case 1: maniobra= "Cuerpo a cuerpo"; 
        break;
        case 2: maniobra= "Esgrima"; 
        break;
        case 3: maniobra= "A distancia"; 
        break;
        case 4: 
              maniobra.push("Cuerpo a cuerpo");  
              maniobra.push( "Esgrima");  
        break;
        case 5: 
              maniobra.push( "Esgrima"); 
              maniobra.push("A distancia"); 
        break;
        case 6:  
              maniobra.push("Esgrima"); 
              maniobra.push( "A distancia"); 
              maniobra.push("Cuerpo a cuerpo"); 
        break;
    }
    return maniobra;
    }
  
    function sacarCombateRandom (tirada){
      var combate = new Array();
      var dadoCombate = new Dice (tirada); 
      switch (dadoCombate.roll()) {
        case 1: combate= "Cuerpo a cuerpo"; 
        break;
        case 2: combate= "Arco"; 
        break;
        case 3: combate= "Lanzar"; 
        break;
        case 4: combate= "Armas de fuego";  
        break;
        case 5:  combate = sacarCombate2Random(6);
        break;
        case 6:  
                 combate = sacarCombate2Random(6);
        break;
    }
    return combate;
    }
  
    function sacarCombate2Random (tirada){
      var combate2 = new Array();
      var dadoCombate2 = new Dice (tirada); 
      switch (dadoCombate2.roll()) {
        case 1: combate2= "Energía"; 
        break;
        case 2: combate2= "Armas pesadas"; 
        break;
        case 3: combate2= "Demoliciones"; 
        break;
        case 4: combate2= "Artefacto C.aC";  
        break;
        case 5: 
              for (let i = 0; i < 2; i++) {
                  combate2.push(sacarCombate2Random(4));
              } 
        break;
        case 6:  
               for (let i = 0; i < 3; i++) {
                combate2.push(sacarCombate2Random(4));
               } 
        break;
    }
    return combate2;
    }
  
    function sacarSaberRandom (tirada){
      var saber = new Array();
      var dadoSaber = new Dice (tirada); 
      switch (dadoSaber.roll()) {
        case 1: saber= "Local"; 
        break;
        case 2: saber= "Planetario"; 
        break;
        case 3: saber= "Sistema"; 
        break;
        case 4: saber= "Facción";  
        break;
        case 5: saber= "Red de salto"; 
        break;
        case 6:  
               for (let i = 0; i < 2; i++) {
                saber.push(sacarSaberRandom(5));
               } 
        break;
    }
    return saber;
    }
  
    function sacarMedicaRandom (tirada){
      var medica = new Array();
      var dadoMedica = new Dice (tirada); 
      switch (dadoMedica.roll()) {
          case 1: medica= "Curar"; 
          break;
          case 2: medica= "Medicina"; 
          break;
          case 3: medica= "Anatomía"; 
          break;
          case 4: 
                medica.push("Curar");  
                medica.push("Medicina");  
          break;
          case 5: 
                medica.push( "Medicina"); 
                medica.push("Anatomía"); 
          break;
          case 6:  
                medica.push( "Medicina"); 
                medica.push("Anatomía"); 
                medica.push( "Curar"); 
          break;
      }
    return medica;
    }
  
    function sacarIngenieriaRandom (tirada){
      var ingenieria = new Array();
      var dadoIngenieria = new Dice (tirada); 
      switch (dadoIngenieria.roll()) {
        case 1: ingenieria= "Implantes"; 
        break;
        case 2: ingenieria= "Armas"; 
        break;
        case 3: ingenieria= "Naves"; 
        break;
        case 4: ingenieria= "Golems";  
        break;
        case 5: ingenieria= "Biotecnología"; 
        break;
        case 6:  
               for (let i = 0; i < 2; i++) {
                ingenieria.push(sacarIngenieriaRandom(5));
               } 
        break;
    }
    return ingenieria;
    }
  
    function sacarIdiomaRandom (tirada){
      var idioma = new Array();
      var dadoIdioma = new Dice (tirada); 
      switch (dadoIdioma.roll()) {
        case 1: idioma= "Terratec"; 
        break;
        case 2: idioma= "Obum"; 
        break;
        case 3: idioma= "Ukar"; 
        break;
        case 4: idioma= "Vuldrok";  
        break;
        case 5: idioma= "Kurgano"; 
        break;
        case 6:  
               for (let i = 0; i < 2; i++) {
                idioma.push(sacarIdiomaRandom(5));
               } 
        break;
    }
    return idioma;
    }
  
  