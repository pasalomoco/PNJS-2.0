function crearEstadisticasHabilidades (habilidades, bonificador){
   let sumaHabilidad;
    let noRepeticion = true;
    while (noRepeticion){
        let habilidad = sacarHabilidadRandom(20);
        if(Array.isArray(habilidad)){
          for (let i = 0; i < habilidad.length; i++) {
            for (var key of Object.keys(habilidades["habilidades"])) {
              if(habilidad[i] == key){
                sumaHabilidad = parseInt(habilidades["habilidades"][key])+bonificador;
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
    
    return habilidades
  
}

function sacarHabilidadRandom (tirada){
  let habilidad = new Array();
  var dadoHabilidad = new Dice (tirada); 
  
  switch (dadoHabilidad.roll()) {
    case 1: habilidad= "Vigor"; 
    break;
    case 2:  habilidad= "Esquivar"; 
    break;
    case 3:  habilidad= "Pelea"; 
    break;
    case 4:  habilidad= "Puntería"; 
    break;
    case 5:  habilidad= "Umbral_del_dolor"; 
    break;
    case 6:  habilidad= "Lógica"; 
    break;
    case 7:  habilidad= "Memoria"; 
    break;
    case 8:  habilidad= "Invención"; 
    break;
    case 9:  habilidad= "Manipular"; 
    break;
    case 10:  habilidad= "Sangre_fría"; 
    break;
    case 11:  habilidad= "Concentración"; 
    break;
    case 12:  habilidad= "Observar"; 
    break;
    case 13:  habilidad= "Empatía"; 
    break; 
    case 14:  habilidad= "Encanto"; 
    break;
    case 15:  habilidad= "Intimidar"; 
    break;
    case 16:  habilidad= "Convencer"; 
    break;
    case 17:  habilidad= "Acechar"; 
    break;
    case 18:  habilidad= "Lucha"; 
    break;
    case 19:  
            for (let i = 0; i < 2; i++) {
              habilidad.push(sacarHabilidadRandom(18));
            }
    break;
    case 20:  
            for (let i = 0; i < 3; i++) {
              habilidad.push(sacarHabilidadRandom(18));
            }
    break;
}

return habilidad;
}
