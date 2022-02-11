function crearEstadisticasHabilidades (habilidades, bonificador){
    let noRepeticion = true;
    while (noRepeticion){
        let habilidad = sacarHabilidadRandom(20);
        if(Array.isArray(habilidad)){
          for (let i = 0; i < habilidad.length; i++) {
            for (var key of Object.keys(habilidades["habilidades"])) {
              if(habilidad[i] == key){
                let sumaHabilidad = parseInt(habilidades["habilidades"][key])+bonificador;
                if( sumaHabilidad > 10){
                  noRepeticion = true;
                  break;
                }else{
                  habilidades["habilidades"][key]= sumaHabilidad;
                  noRepeticion = false;
                  break;
                }
              } 
            }
           
          }
  
        }else{
          
          for (var key of Object.keys(habilidades["habilidades"])) {
            if(habilidad == key){
              let sumaHabilidad = parseInt(habilidades["habilidades"][key])+bonificador;
              if( sumaHabilidad > 10){
                noRepeticion = true;
                break;
              }else{
                habilidades["habilidades"][key]= sumaHabilidad;
                noRepeticion = false;
                break;
              }
            } 
          }
        }
        
    }
    
    return habilidades;
  }
  