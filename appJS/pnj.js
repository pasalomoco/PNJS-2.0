class Personaje {

  constructor (bonus, tipo){
   
    switch (tipo) {
      case "random":
        this.bonus = bonus;
        this.crearTipoPNJ();
      break;
      case "inutil":
        this.bonus = bonus;
        this.crearInutil()
      break;
      case "pringao":
        this.bonus = bonus;
        this.crearPringao()
      break;
      case "monton":
        this.bonus = bonus;
        this.crearDelmonton()
      break;

      case "especialista":
        this.bonus = bonus;
        this.crearEspecialista()
      break;

      case "heroe":
        this.bonus = bonus;
        this.crearHeroe();
      break;
    }
  
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
    this.Umbral = this.habilidades.habilidades.Umbral;
    this.Lógica = this.habilidades.habilidades.Lógica;
    this.Memoria = this.habilidades.habilidades.Memoria;
    this.Invención = this.habilidades.habilidades.Invención;
    this.Manipular = this.habilidades.habilidades.Manipular;
    this.Sangre_fría = this.habilidades.habilidades.Sangre_fría;
    this.Concen = this.habilidades.habilidades.Concen;
    this.Observar = this.habilidades.habilidades.Observar;
    this.Empatía = this.habilidades.habilidades.Empatía;
    this.Encanto = this.habilidades.habilidades.Encanto;
    this.Intimidar = this.habilidades.habilidades.Intimidar;
    this.Convencer = this.habilidades.habilidades.Convencer;
    this.Acechar = this.habilidades.habilidades.Acechar;
    this.Lucha = this.habilidades.habilidades.Lucha;
  }

 
  crearInutil(){
    this.tipoPNJ="Inútil";
    let dado4 = new Dice (4);
    let dado6 = new Dice (6);
    let dado3 = new Dice (3);
    this.baseEspiritu = 3;
    this.baseCuerpo = 3;
    this.baseMente = 3;
    this.baseHabilidades = 3;
    this.puntosTotalesCaracteristicas =  [0, 1 , 1, 0, 0]
    this.puntosConocimientos = dado6.roll() +1
    this.puntosRagosAdicionales = dado4.roll();
    this.puntosHabilidades = dado3.roll () +1;
    this.porcentajeRepeticion = 0;
  }
  
  crearPringao(){
    this.tipoPNJ="Pringao";
    let dado4 = new Dice (4);
    let dado6 = new Dice (6);
    this.baseEspiritu = 3;
    this.baseCuerpo = 3;
    this.baseMente = 3;
    this.baseHabilidades = 3;
    this.puntosTotalesCaracteristicas =  [0,2 , 1, 1, 0]
    this.puntosConocimientos = dado6.roll() +2
    this.puntosRagosAdicionales = dado4.roll();
    this.puntosHabilidades = dado4.roll () +2;
    this.porcentajeRepeticion = 0;
  }


  crearDelmonton(){
    this.tipoPNJ="Del montón";
    let dado4 = new Dice (4);
    let dado6 = new Dice (6);
    this.baseEspiritu = 3;
    this.baseCuerpo = 4;
    this.baseMente = 4;
    this.baseHabilidades = 4;
    this.puntosTotalesCaracteristicas =  [0,2 , 2, 1, 0]
    this.puntosConocimientos = dado6.roll() +3
    this.puntosRagosAdicionales = dado4.roll();
    this.puntosHabilidades = dado6.roll () +3;
    this.porcentajeRepeticion = 50;
  }
  crearEspecialista(){
    this.tipoPNJ="Especialista";
    this.baseEspiritu = 4;
    let menteCuerpo;
    let dado4 = new Dice (4);
    let dado6 = new Dice (6);
    let dado8 = new Dice (8);
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
    this.puntosTotalesCaracteristicas =  [0, 2 , 2, 2,  1]
    this.puntosConocimientos = dado6.roll() +4
    this.puntosRagosAdicionales = dado4.roll();
    this.puntosHabilidades = dado8.roll () +4;
    this.porcentajeRepeticion = 75;
  }


  crearHeroe(){
    let dado4 = new Dice (4);
    let dado6 = new Dice (6);
    let dado10 = new Dice (10);
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


  crearTipoPNJ () {
    let dado100 = new Dice (100);
    let tirada = dado100.roll();
    tirada = tirada + parseInt(this.bonus);
    if(tirada >= 0 && tirada <= 10){
      this.crearInutil()
    } else if (tirada >= 11 && tirada <= 30){
      this.crearPringao()
    
    }else if (tirada >= 31 && tirada <= 70){
      this.crearDelmonton()
     
    }else if (tirada >= 71 && tirada <= 90){
      this.crearEspecialista();
    
    }else if (tirada >= 91 && tirada <= 100000){
     this.crearHeroe()
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
          Vigor: this.baseHabilidades,
          Esquivar: this.baseHabilidades,
          Pelea: this.baseHabilidades,
          Lucha: this.baseHabilidades,
          Puntería: this.baseHabilidades,
          Umbral: this.baseHabilidades, 
          Lógica: this.baseHabilidades, 
          Memoria: this.baseHabilidades, 
          Invención: this.baseHabilidades, 
          Manipular: this.baseHabilidades, 
          Sangre_fría: this.baseHabilidades, 
          Concen: this.baseHabilidades, 
          Observar: this.baseHabilidades, 
          Empatía: this.baseHabilidades ,
          Encanto: this.baseHabilidades,
          Intimidar: this.baseHabilidades,
          Convencer: this.baseHabilidades,
          Acechar: this.baseHabilidades,
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

  

