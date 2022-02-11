class Personaje {

  constructor (bonus){
   
    this.bonus = bonus;
    this.crearTipoPNJ();
    this.tipoPNJ;
    this.baseEspiritu;
    this.baseCuerpo;
    this.baseMente;
    this.baseHabilidades;
    this.puntosTotalesCaracteristicas;
    this.puntosConocimientos;
    this.porcentajeRepeticion;
    this.puntosHabilidades;
    this.puntosRagosAdicionales;
    this.caracteristicas = this.generarCaracteristicasPNJ();
    this.rasgosAdicionales;
    this.habilidades;
    this.generarHabilidadesPNJ ();
    this.generarRasgosAdicionales();
    this.conocimientos = crearEstadisticasConocimientos(this.tipoPNJ, this.puntosConocimientos)
    this.Fuerza = this.caracteristicas.Fuerza;
    this.Destreza = this.caracteristicas.Destreza;
    this.Resistencia = this.caracteristicas.Resistencia;
    this.Inteligencia = this.caracteristicas.Inteligencia;
    this.Ingenio = this.caracteristicas.Ingenio;
    this.Percepción = this.caracteristicas.Percepción;
    this.Calma = this.caracteristicas.  Calma;
    this.Pasión = this.caracteristicas. Pasión;
    this.Fe = this.caracteristicas. Fe;
    this.Ego = this.caracteristicas.  Ego;
    this.Introvertido = this.caracteristicas. Introvertido;
    this.Extrovertido = this.caracteristicas. Extrovertido;
    this.Vigor = this.habilidades.habilidades.Vigor;
    this.Esquivar = this.habilidades.habilidades.Esquivar;
    this.Pelea = this.habilidades.habilidades.Pelea;
    this.Puntería = this.habilidades.habilidades.Puntería;
    this.Umbral_del_dolor = this.habilidades.habilidades.Umbral_del_dolor;
    this.Lógica = this.habilidades.habilidades.Lógica;
    this.Memoria = this.habilidades.habilidades.Memoria;
    this.Invención = this.habilidades.habilidades.Invención;
    this.Manipular = this.habilidades.habilidades.Manipular;
    this.Sangre_fría = this.habilidades.habilidades.Sangre_fría;
    this.Concentración = this.habilidades.habilidades.Concentración;
    this.Observar = this.habilidades.habilidades.Observar;
    this.Empatía = this.habilidades.habilidades.Empatía;
    this.Encanto = this.habilidades.habilidades.Encanto;
    this.Intimidar = this.habilidades.habilidades.Intimidar;
    this.Convencer = this.habilidades.habilidades.Convencer;
    this.Acechar = this.habilidades.habilidades.Acechar;
    this.Lucha = this.habilidades.habilidades.Lucha;
  }

  crearTipoPNJ () {
    let dado100 = new Dice (100);
    let dado3 = new Dice (3)
    let dado4 = new Dice (4);
    let dado6 = new Dice (6);
    let dado8 = new Dice (8);
    let dado10 = new Dice (10);
    let tirada = dado100.roll();
    tirada = tirada + parseInt(this.bonus);
    if(tirada >= 0 && tirada <= 10){
      this.tipoPNJ="Inútil";
      this.baseEspiritu = 3;
      this.baseCuerpo = 3;
      this.baseMente = 3;
      this.baseHabilidades = 3;
      this.puntosTotalesCaracteristicas =  [0, 1 , 1, 0, 0]
      this.puntosConocimientos = dado6.roll() +1
      this.puntosRagosAdicionales = dado4.roll();
      this.puntosHabilidades = dado3.roll () +1;
      this.porcentajeRepeticion = 0;
    } else if (tirada >= 11 && tirada <= 30){
      this.tipoPNJ="Pringao";
      this.baseEspiritu = 3;
      this.baseCuerpo = 3;
      this.baseMente = 3;
      this.baseHabilidades = 3;
      this.puntosTotalesCaracteristicas =  [0,2 , 1, 1, 0]
      this.puntosConocimientos = dado6.roll() +2
      this.puntosRagosAdicionales = dado4.roll();
      this.puntosHabilidades = dado4.roll () +2;
      this.porcentajeRepeticion = 0;
    }else if (tirada >= 31 && tirada <= 70){
      this.tipoPNJ="Del montón";
      this.baseEspiritu = 3;
      this.baseCuerpo = 4;
      this.baseMente = 4;
      this.baseHabilidades = 4;
      this.puntosTotalesCaracteristicas =  [0,2 , 2, 1, 0]
      this.puntosConocimientos = dado6.roll() +3
      this.puntosRagosAdicionales = dado4.roll();
      this.puntosHabilidades = dado6.roll () +3;
      this.porcentajeRepeticion = 50;
    }else if (tirada >= 71 && tirada <= 90){
      this.tipoPNJ="Especialista";
      this.baseEspiritu = 4;
      let menteCuerpo;
      menteCuerpo = prompt("Te ha tocado especialista. Escribe 'm' o 'c' para ser especialista en cuerpo o mente");
      if(menteCuerpo == "c" || menteCuerpo == "m"){
        menteCuerpo = menteCuerpo.toLowerCase();
      }else{
        menteCuerpo = "c";
        alert("Te jodes, por tocar los huevos y no introducir lo que te pedía se queda en especialista de... Tendrás que mirarlo por tu cuenta")
      }
      
      if(menteCuerpo == "m"){
        this.baseCuerpo = 4;
        this.baseMente = 5;
      }else if (menteCuerpo == "c"){
        this.baseCuerpo = 5;
        this.baseMente = 4;
      }
      this.baseHabilidades = 5;
      this.puntosTotalesCaracteristicas =  [0,2 , 2, 2,  1]
      this.puntosConocimientos = dado6.roll() +4
      this.puntosRagosAdicionales = dado4.roll();
      this.puntosHabilidades = dado8.roll () +4;
      this.porcentajeRepeticion = 75;
    }else if (tirada >= 91 && tirada <= 100000){
      this.tipoPNJ="Héroe";
      this.baseEspiritu = 4;
      this.baseCuerpo = 5;
      this.baseMente = 5;
      this.baseHabilidades = 5;
      this.puntosTotalesCaracteristicas =  [0, 3 , 3, 2,  2]
      this.puntosConocimientos = dado6.roll() +5
      this.puntosRagosAdicionales = dado4.roll();
      this.puntosHabilidades = dado10.roll () +5;
      this.porcentajeRepeticion = 50;
    }
 
  }

  generarRasgosAdicionales (){
    let rasgosAdicionales = [];
    let auxRasgo; var keyRasgoRandom;
    for (let i = this.puntosRagosAdicionales; i >= 1; i--) {
          auxRasgo = sacarRasgosAdicionalesRandom();
          keyRasgoRandom =  Object.keys(auxRasgo);
          var rasgoExiste = rasgosAdicionales.filter(function (rasgo) {
            return rasgo.hasOwnProperty(keyRasgoRandom);
          }).length > 0;

          if (rasgoExiste) {
            console.log(auxRasgo)
            console.log("Ya existe")
            i++
          } else {
            rasgosAdicionales.push(auxRasgo)
          }
        }
      
    this.rasgosAdicionales = rasgosAdicionales;
  }


  generarHabilidadesPNJ (){
    var habilidades = 
    {habilidades:{
          Vigor: 3,
          Esquivar: 3,
          Pelea: 3,
          Lucha: 3,
          Puntería: 3,
          Umbral_del_dolor: 3, 
          Lógica: 3, 
          Memoria: 3, 
          Invención: 3, 
          Manipular: 3, 
          Sangre_fría: 3, 
          Concentración: 3, 
          Observar: 3, 
          Empatía: 3 ,
          Encanto: 3,
          Intimidar: 3,
          Convencer: 3,
          Acechar: 3,
      },
    };
    switch (this.tipoPNJ) {
      case "Inútil":
        for (let i = this.puntosHabilidades; i >= 1; i--) {
          habilidades = crearEstadisticasHabilidades(habilidades, 1);
        }
      break;
      case "Pringao":
        for (let i = this.puntosHabilidades; i >= 1; i--) {
          habilidades = crearEstadisticasHabilidades(habilidades, 1);
        }
      break;
      case "Del montón":  
        for (var key of Object.keys(habilidades["habilidades"])) {
          habilidades["habilidades"][key]=parseInt(habilidades["habilidades"][key])+1;
        }
        for (let i = this.puntosHabilidades; i >= 1; i--) {
          habilidades = crearEstadisticasHabilidades(habilidades, 1);
        }
      break;
      case "Especialista":  
        for (var key of Object.keys(habilidades["habilidades"])) {
          habilidades["habilidades"][key]=parseInt(habilidades["habilidades"][key])+1;
        }
        for (let i = this.puntosHabilidades; i >= 1; i--) {
          habilidades = crearEstadisticasHabilidades(habilidades, 1);
        }
      break;
      case "Héroe":  
        for (var key of Object.keys(habilidades["habilidades"])) {
          habilidades["habilidades"][key]=parseInt(habilidades["habilidades"][key])+2;
        }
        for (let i = this.puntosHabilidades; i >= 1; i--) {
          habilidades = crearEstadisticasHabilidades(habilidades, 1);
        }
      break;
    }
    this.habilidades = habilidades;

  }


  generarCaracteristicasPNJ () {
    var caracteristicas = new Array();
    var copiaCaracteristicas = new Array();
    let tiposDeBonificadores = 4;
    caracteristicas["Fuerza"] = parseInt(this.baseCuerpo);
    caracteristicas["Destreza"] = parseInt(this.baseCuerpo);
    caracteristicas["Resistencia"] = parseInt(this.baseCuerpo);
    caracteristicas["Inteligencia"] = parseInt(this.baseMente);
    caracteristicas["Ingenio"] = parseInt(this.baseMente);
    caracteristicas["Percepción"] = parseInt(this.baseMente);
    caracteristicas["Extrovertido"] = parseInt(this.baseEspiritu);
    caracteristicas["Introvertido"] = parseInt(this.baseEspiritu);
    caracteristicas["Pasión"] = parseInt(this.baseEspiritu);
    caracteristicas["Calma"] = parseInt(this.baseEspiritu);
    caracteristicas["Ego"] = parseInt(this.baseEspiritu);
    caracteristicas["Fe"] = parseInt(this.baseEspiritu);
    let espiritu = new Array (6); espiritu["Extrovertido"]="Introvertido";espiritu["Introvertido"]="Extrovertido";
    espiritu["Pasión"]="Calma";espiritu["Calma"]="Pasión";espiritu["Fe"]="Ego";espiritu["Ego"]="Fe";
    let sumaCaracteristica = 0; let noRepeticion = true; let caracteristicaRandom;   let contraria;
    let checkEspiritu = false; let caracteristicasEspirituTocadas = new Array();

    for(let i = 1 ; i <= tiposDeBonificadores; i++){
      for(let j=0; j < this.puntosTotalesCaracteristicas[i]; j++){
        caracteristicaRandom = sacarCaracteristicaRandom(12);
        if(caracteristicas[caracteristicaRandom]  + i > 10  ){
          j--
        }else{
            if(caracteristicaRandom in espiritu){ 
              contraria = espiritu[caracteristicaRandom]
              if(caracteristicas[caracteristicaRandom] + caracteristicas[contraria] == 10 ||
                caracteristicas[contraria] > this.baseEspiritu && (caracteristicas[caracteristicaRandom]+caracteristicas[contraria]+i >10) ){
                  j--
              }else{
                //  console.log("Repartir "+i+" en "+caracteristicaRandom)
                 caracteristicas[caracteristicaRandom] = caracteristicas[caracteristicaRandom]  + i;
                 while( (caracteristicas[caracteristicaRandom] + caracteristicas[contraria]) >10) {
                    caracteristicas[contraria] = caracteristicas[contraria]-1;
                 }   
              }
            }else{
              // console.log("Repartir "+i+" en "+caracteristicaRandom)
              caracteristicas[caracteristicaRandom] = caracteristicas[caracteristicaRandom]  + i;
            }
        }

      }
    
   }
    
   return caracteristicas
    
  }


 


};

  

