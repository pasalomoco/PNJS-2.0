function generarCaracteristicasPNJs (tipo) {
  var caracteristicas = { 
    caracteristicas: {
      cuerpo: {
        Fuerza: 3,
        Destreza: 3,
        Resistencia: 3
        },
      mente:{
        Inteligencia: 3,
        Percepción: 3,
        Ingenio: 3 
      },
      espíritu:{
        Extrovertido: 3,
        Introvertido: 3,
        Pasión: 3,
        Calma: 3,
        Fe: 3,
        Ego: 3,
      },
    },
  };

  switch (tipo) {
    case "Inútil":
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 1,  this.baseEspiritu);
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 2 , this.baseEspiritu);
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 3,  this.baseEspiritu);
    break;
    case "Pringao":
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 1,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 1,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 2,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 3,  this.baseEspiritu)
    break;
    case "Del montón":  
      for (var key of Object.keys(caracteristicas["caracteristicas"]["mente"])) {
        caracteristicas["caracteristicas"]["mente"][key]=parseInt(caracteristicas["caracteristicas"]["mente"][key])+1;
      }
      for (var key of Object.keys(caracteristicas["caracteristicas"]["cuerpo"])) {
        caracteristicas["caracteristicas"]["cuerpo"][key]=parseInt(caracteristicas["caracteristicas"]["cuerpo"][key])+1;
      }
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 1,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 1,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 2,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 2,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 3 , this.baseEspiritu)
    break;
    case "Especialista":  
      let menteCuerpo = prompt("Te ha tocado especialista. Escribe m o c para ser especialista en cuerpo o mente");
      menteCuerpo = menteCuerpo.toLowerCase();
      if(menteCuerpo == "m"){
        for (var key of Object.keys(caracteristicas["caracteristicas"]["mente"])) {
          caracteristicas["caracteristicas"]["mente"][key]=parseInt(caracteristicas["caracteristicas"]["mente"][key])+2;
        }
        for (var key of Object.keys(caracteristicas["caracteristicas"]["cuerpo"])) {
          caracteristicas["caracteristicas"]["cuerpo"][key]=parseInt(caracteristicas["caracteristicas"]["cuerpo"][key])+1;
        }
      }else if (menteCuerpo == "c"){
        for (var key of Object.keys(caracteristicas["caracteristicas"]["cuerpo"])) {
          caracteristicas["caracteristicas"]["cuerpo"][key]=parseInt(caracteristicas["caracteristicas"]["cuerpo"][key])+2;
        }
        for (var key of Object.keys(caracteristicas["caracteristicas"]["mente"])) {
          caracteristicas["caracteristicas"]["mente"][key]=parseInt(caracteristicas["caracteristicas"]["mente"][key])+1;
        }
      }
      for (var key of Object.keys(caracteristicas["caracteristicas"]["espíritu"])) {
        caracteristicas["caracteristicas"]["espíritu"][key]=parseInt(caracteristicas["caracteristicas"]["espíritu"][key])+1;
      }
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 1,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 1,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 2,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 2,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 3,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 3,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 4,  this.baseEspiritu)
    break;
    case "Héroe":  
      for (var key of Object.keys(caracteristicas["caracteristicas"]["cuerpo"])) {
        caracteristicas["caracteristicas"]["cuerpo"][key]=parseInt(caracteristicas["caracteristicas"]["cuerpo"][key])+2;
      }
      for (var key of Object.keys(caracteristicas["caracteristicas"]["mente"])) {
        caracteristicas["caracteristicas"]["mente"][key]=parseInt(caracteristicas["caracteristicas"]["mente"][key])+2;
      }
      for (var key of Object.keys(caracteristicas["caracteristicas"]["espíritu"])) {
        caracteristicas["caracteristicas"]["espíritu"][key]=parseInt(caracteristicas["caracteristicas"]["espíritu"][key])+1;
      }
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 1,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 1,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 1,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 2,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 2,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 2,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 3,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 3,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 4,  this.baseEspiritu)
      caracteristicas = crearEstadisticasCaracteristicas(caracteristicas, 4,  this.baseEspiritu)
    break;
  }
  
  return caracteristicas;
}

function controlEspiritu(caracteristicas, caracteristicaRandom, bonificador){
    console.log(caracteristicas["caracteristicas"]["espíritu"])
    let sumaTotalEspiritu = 0;
    switch (caracteristicaRandom) {
      case "Extrovertido":  
       sumaTotalEspiritu = parseInt(caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"]) + parseInt(caracteristicas["caracteristicas"]["espíritu"]["Introvertido"]) +bonificador;
       console.log("Extrovertido+Introvertido"+sumaTotalEspiritu);
       if(sumaTotalEspiritu >= 12){
        caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] = 8;
        caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] = 2;
       }else if (sumaTotalEspiritu == 11){
        caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] = 7;
        caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] = 3;
       }else if(sumaTotalEspiritu == 10 ){
        caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] = 6;
        caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] = 4;
       }else{
        caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] = parseInt(caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"]) + bonificador;
       }
      break;
      case "Introvertido":  
      sumaTotalEspiritu = parseInt(caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"]) + parseInt(caracteristicas["caracteristicas"]["espíritu"]["Introvertido"]) +bonificador;
      console.log("Introvertido+Extrovertido"+sumaTotalEspiritu);
      if(sumaTotalEspiritu >= 12){
       caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] = 8
       caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] = 2
      }else if (sumaTotalEspiritu == 11){
       caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] = 7
       caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] = 3
      }else if(sumaTotalEspiritu == 10 ){
        caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] = 4;
        caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] = 6;
      } else{
        caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] = parseInt(caracteristicas["caracteristicas"]["espíritu"]["Introvertido"]) + bonificador;
      }
      break;
      case "Pasión":  
      sumaTotalEspiritu = parseInt(caracteristicas["caracteristicas"]["espíritu"]["Pasión"]) + parseInt(caracteristicas["caracteristicas"]["espíritu"]["Calma"]) +bonificador;
      console.log("Pasión+Calma"+sumaTotalEspiritu);
      if(sumaTotalEspiritu >= 12){
       caracteristicas["caracteristicas"]["espíritu"]["Pasión"] = 8;
       caracteristicas["caracteristicas"]["espíritu"]["Calma"] = 2;
      }else if (sumaTotalEspiritu == 11){
       caracteristicas["caracteristicas"]["espíritu"]["Pasión"] = 7;
       caracteristicas["caracteristicas"]["espíritu"]["Calma"] = 3;
      }else if(sumaTotalEspiritu == 10 ){
        caracteristicas["caracteristicas"]["espíritu"]["Pasión"] = 6;
        caracteristicas["caracteristicas"]["espíritu"]["Calma"] = 4;
      } else{
        caracteristicas["caracteristicas"]["espíritu"]["Pasión"] = parseInt(caracteristicas["caracteristicas"]["espíritu"]["Pasión"]) + bonificador;
      }
      break;
      case "Calma":  
      sumaTotalEspiritu = parseInt(caracteristicas["caracteristicas"]["espíritu"]["Pasión"]) + parseInt(caracteristicas["caracteristicas"]["espíritu"]["Calma"] )+bonificador;
      console.log("Calma+Pasión"+sumaTotalEspiritu);
      if(sumaTotalEspiritu >= 12){
       caracteristicas["caracteristicas"]["espíritu"]["Calma"] = 8;
       caracteristicas["caracteristicas"]["espíritu"]["Pasión"] = 2;
      }else if (sumaTotalEspiritu == 11){
       caracteristicas["caracteristicas"]["espíritu"]["Calma"] = 7;
       caracteristicas["caracteristicas"]["espíritu"]["Pasión"] = 3;
      }else if(sumaTotalEspiritu == 10 ){
        caracteristicas["caracteristicas"]["espíritu"]["Calma"] = 6;
        caracteristicas["caracteristicas"]["espíritu"]["Pasión"] = 4;
      }else{
        caracteristicas["caracteristicas"]["espíritu"]["Calma"] = parseInt(caracteristicas["caracteristicas"]["espíritu"]["Calma"]) + bonificador;
      }
      break;
      case "Fe": 
      sumaTotalEspiritu = parseInt(caracteristicas["caracteristicas"]["espíritu"]["Fe"]) + parseInt(caracteristicas["caracteristicas"]["espíritu"]["Ego"] ) + bonificador;
      console.log("Fe+Ego"+sumaTotalEspiritu);
      if(sumaTotalEspiritu >= 12){
        caracteristicas["caracteristicas"]["espíritu"]["Fe"] = 8;
        caracteristicas["caracteristicas"]["espíritu"]["Ego"] = 2;
      }else if (sumaTotalEspiritu == 11){
        caracteristicas["caracteristicas"]["espíritu"]["Fe"] = 7;
        caracteristicas["caracteristicas"]["espíritu"]["Ego"] = 3;
      }else if(sumaTotalEspiritu == 10 ){
        caracteristicas["caracteristicas"]["espíritu"]["Fe"] = 6;
        caracteristicas["caracteristicas"]["espíritu"]["Ego"] = 4;
      }else{
        caracteristicas["caracteristicas"]["espíritu"]["Fe"] = parseInt(caracteristicas["caracteristicas"]["espíritu"]["Fe"]) + bonificador;
      }
      break;
      case "Ego":  
      sumaTotalEspiritu = parseInt(caracteristicas["caracteristicas"]["espíritu"]["Fe"]) + parseInt(caracteristicas["caracteristicas"]["espíritu"]["Ego"] ) +bonificador;
      console.log("Ego+Fe"+sumaTotalEspiritu);
      if(sumaTotalEspiritu >= 12){
       caracteristicas["caracteristicas"]["espíritu"]["Ego"] = 8;
       caracteristicas["caracteristicas"]["espíritu"]["Fe"] = 2;
      }else if (sumaTotalEspiritu == 11){
       caracteristicas["caracteristicas"]["espíritu"]["Ego"] = 7;
       caracteristicas["caracteristicas"]["espíritu"]["Fe"] = 3;
      }else if (sumaTotalEspiritu == 10 ){
        caracteristicas["caracteristicas"]["espíritu"]["Fe"] = 4;
        caracteristicas["caracteristicas"]["espíritu"]["Ego"] = 6;
      }else{
        caracteristicas["caracteristicas"]["espíritu"]["Ego"] = parseInt(caracteristicas["caracteristicas"]["espíritu"]["Ego"]) + bonificador;
      }
      break;
    }
  
    return caracteristicas
  
  }


  
function controlEspiritu(caracteristicas, caracteristicaRandom, bonificador){
  let sumaTotalEspiritu = 0;
  switch (caracteristicaRandom) {
    case "Extrovertido":  
     caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] = + parseInt(caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"]) +bonificador;
     while ( caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] + caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] >= 10){
      caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] = caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] -1
     }
    break;
    case "Introvertido":  
    caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] = + parseInt(caracteristicas["caracteristicas"]["espíritu"]["Introvertido"]) +bonificador;
     while ( caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] + caracteristicas["caracteristicas"]["espíritu"]["Introvertido"] >= 10){
      caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] = caracteristicas["caracteristicas"]["espíritu"]["Extrovertido"] -1
     }
    break;
    case "Pasión":  
    caracteristicas["caracteristicas"]["espíritu"]["Pasión"] = + parseInt(caracteristicas["caracteristicas"]["espíritu"]["Calma"]) +bonificador;
    while ( caracteristicas["caracteristicas"]["espíritu"]["Pasión"] + caracteristicas["caracteristicas"]["espíritu"]["Calma"] >= 10){
     caracteristicas["caracteristicas"]["espíritu"]["Calma"] = caracteristicas["caracteristicas"]["espíritu"]["Calma"] -1
    }
    break;
    case "Calma":  
    caracteristicas["caracteristicas"]["espíritu"]["Pasión"] = + parseInt(caracteristicas["caracteristicas"]["espíritu"]["Calma"]) +bonificador;
    while ( caracteristicas["caracteristicas"]["espíritu"]["Pasión"] + caracteristicas["caracteristicas"]["espíritu"]["Calma"] >= 10){
     caracteristicas["caracteristicas"]["espíritu"]["Pasión"] = caracteristicas["caracteristicas"]["espíritu"]["Pasión"] -1
    }
    break;
    case "Fe": 
    caracteristicas["caracteristicas"]["espíritu"]["Fe"] = + parseInt(caracteristicas["caracteristicas"]["espíritu"]["Ego"]) +bonificador;
    while ( caracteristicas["caracteristicas"]["espíritu"]["Fe"] + caracteristicas["caracteristicas"]["espíritu"]["Ego"] >= 10){
     caracteristicas["caracteristicas"]["espíritu"]["Ego"] = caracteristicas["caracteristicas"]["espíritu"]["Ego"] -1
    }
    break;
    case "Ego":  
    caracteristicas["caracteristicas"]["espíritu"]["Fe"] = + parseInt(caracteristicas["caracteristicas"]["espíritu"]["Ego"]) +bonificador;
    while ( caracteristicas["caracteristicas"]["espíritu"]["Fe"] + caracteristicas["caracteristicas"]["espíritu"]["Ego"] >= 10){
     caracteristicas["caracteristicas"]["espíritu"]["Fe"] = caracteristicas["caracteristicas"]["espíritu"]["Fe"] -1
    }
    break;
  }

  return caracteristicas

}
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
