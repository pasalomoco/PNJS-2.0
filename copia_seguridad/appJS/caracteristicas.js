
function crearEstadisticasCaracteristicas (caracteristicas, bonificador, base){
  let sumaCaracteristica;
  let noRepeticion = true;
  while (noRepeticion){
      let caracteristicaRandom = sacarCaracteristicaRandom(12);
      for (var key of Object.keys(caracteristicas["caracteristicas"]["cuerpo"])) {
        if(caracteristicaRandom == key){
          sumaCaracteristica = parseInt(caracteristicas["caracteristicas"]["cuerpo"][key])+bonificador;
          if( sumaCaracteristica > 10){
            noRepeticion = true;
            break;
          }else{
            caracteristicas["caracteristicas"]["cuerpo"][key]= sumaCaracteristica;
            noRepeticion = false;
            break;
          }
        } 
      
      }
      for (var key of Object.keys(caracteristicas["caracteristicas"]["mente"])) {
        if(caracteristicaRandom == key){
          sumaCaracteristica = parseInt(caracteristicas["caracteristicas"]["mente"][key])+bonificador;
          if( sumaCaracteristica > 10){
            noRepeticion = true;
            break;
          }else{
            caracteristicas["caracteristicas"]["mente"][key]= sumaCaracteristica;
            noRepeticion = false;
            break;
          }
        } 
      
      }
      for (var key of Object.keys(caracteristicas["caracteristicas"]["espíritu"])) {
        if(caracteristicaRandom == key){
          console.log("Te ha tocado "+key+" con un bonificador de "+bonificador+" y una base de "+base);
          let suma ;
          switch (caracteristicaRandom) {
            case "Extrovertido":  
             suma = caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] = parseInt(caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"]) +bonificador;
             console.log("Ahora vale "+ caracteristicas["caracteristicas"]["espíritu"][key]);
             console.log("La suma es "+suma);
             while ( caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] + caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] > 10){
              caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] = caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] -1;
             }
             if(caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] < base){
              noRepeticion = true;
             }else{
              noRepeticion = false;
             }
            break;
            case "Introvertido":  
            suma = caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] =  parseInt(caracteristicas["caracteristicas"]["espíritu"]["Introvertido"]) +bonificador;
            console.log("Ahora vale "+ caracteristicas["caracteristicas"]["espíritu"][key]);
            console.log("La suma es "+suma);
             while ( caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] + caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] > 10){
              caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] = caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] -1;
             }
             if(caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] < base){
              noRepeticion = true;
             }else{
              noRepeticion = false;
             }
            break;
            case "Pasión":  
            suma = caracteristicas["caracteristicas"]["espíritu"]["Pasión"] =  parseInt(caracteristicas["caracteristicas"]["espíritu"]["Calma"]) +bonificador;
            console.log("Ahora vale "+ caracteristicas["caracteristicas"]["espíritu"][key]);
            console.log("La suma es "+suma);
            while ( caracteristicas["caracteristicas"]["espíritu"]["Pasión"] + caracteristicas["caracteristicas"]["espíritu"]["Calma"] > 10){
             caracteristicas["caracteristicas"]["espíritu"]["Calma"] = caracteristicas["caracteristicas"]["espíritu"]["Calma"] -1;
            }
            if(caracteristicas["caracteristicas"]["espíritu"]["Calma"] < base){
              noRepeticion = true;
             }else{
              noRepeticion = false;
             }
            break;
            case "Calma":  
            suma = caracteristicas["caracteristicas"]["espíritu"]["Pasión"] =  parseInt(caracteristicas["caracteristicas"]["espíritu"]["Calma"]) +bonificador;
            console.log("Ahora vale "+ caracteristicas["caracteristicas"]["espíritu"][key]);
            console.log("La suma es "+suma);
            while ( caracteristicas["caracteristicas"]["espíritu"]["Pasión"] + caracteristicas["caracteristicas"]["espíritu"]["Calma"] > 10){
             caracteristicas["caracteristicas"]["espíritu"]["Pasión"] = caracteristicas["caracteristicas"]["espíritu"]["Pasión"] -1;
            }
            if(caracteristicas["caracteristicas"]["espíritu"]["Pasión"] < base){
              noRepeticion = true;
             }else{
              noRepeticion = false;
             }
            break;
            case "Fe": 
            caracteristicas["caracteristicas"]["espíritu"]["Fe"] =  parseInt(caracteristicas["caracteristicas"]["espíritu"]["Ego"]) +bonificador;
            console.log("Ahora vale "+ caracteristicas["caracteristicas"]["espíritu"][key]);
            console.log("La suma es "+suma);
            while ( caracteristicas["caracteristicas"]["espíritu"]["Fe"] + caracteristicas["caracteristicas"]["espíritu"]["Ego"] > 10){
             caracteristicas["caracteristicas"]["espíritu"]["Ego"] = caracteristicas["caracteristicas"]["espíritu"]["Ego"] -1;
            }
            if(caracteristicas["caracteristicas"]["espíritu"]["Ego"] < base){
              noRepeticion = true;
             }else{
              noRepeticion = false;
             }
            break;
            case "Ego":  
            suma = caracteristicas["caracteristicas"]["espíritu"]["Fe"] =  parseInt(caracteristicas["caracteristicas"]["espíritu"]["Ego"]) +bonificador;
            console.log("Ahora vale "+ caracteristicas["caracteristicas"]["espíritu"][key]);
            console.log("La suma es "+suma);
            while ( caracteristicas["caracteristicas"]["espíritu"]["Fe"] + caracteristicas["caracteristicas"]["espíritu"]["Ego"] > 10){
             caracteristicas["caracteristicas"]["espíritu"]["Fe"] = caracteristicas["caracteristicas"]["espíritu"]["Fe"] -1;
            }
            if(caracteristicas["caracteristicas"]["espíritu"]["Fe"] < base){
              noRepeticion = true;
             }else{
              noRepeticion = false;
             }
            break;
          }                     
         
        } 
      
      }
  }
  
  return caracteristicas;
}

function sacarCaracteristicaRandom (tirada){
  let caracteristica;
  let dadoCaracteristica = new Dice (tirada);

    switch ( dadoCaracteristica.roll()) {
      case 1: caracteristica= "Fuerza"; 
      break;
      case 2:  caracteristica= "Destreza"; 
      break;
      case 3:  caracteristica= "Resistencia"; 
      break;
      case 4:  caracteristica= "Inteligencia"; 
      break;
      case 5:  caracteristica= "Percepción"; 
      break;
      case 6:  caracteristica= "Ingenio"; 
      break;
      case 7:  caracteristica= "Extrovertido"; 
      break;
      case 8:  caracteristica= "Introvertido"; 
      break;
      case 9:  caracteristica= "Pasión"; 
      break;
      case 10:  caracteristica= "Calma"; 
      break;
      case 11:  caracteristica= "Fe"; 
      break;
      case 12:  caracteristica= "Ego"; 
      break;
  }
  return caracteristica;
}
