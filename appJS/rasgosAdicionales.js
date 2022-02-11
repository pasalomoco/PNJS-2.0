function sacarRasgosAdicionalesRandom (){
    var rasgo = [];
    var dadoRasgo = new Dice (100); 
    switch (dadoRasgo.roll()) {
      case 1: rasgo["Adicción_Tabaco"]= 1; 
      break;
      case 2:  rasgo["Adicción_Tabaco"]= 2; 
      break;
      case 3:  rasgo["Adicción_Tabaco"]= 3; 
      break;
      case 4:  rasgo["Adicción_Tabaco"]= 4;  
      break;
      case 5:  rasgo["Adicción_Tabaco"]= 5; 
      break;
      case 6:  rasgo["Adicción_Tozuma"]= 1;  
      break;
      case 7:  rasgo["Adicción_Tozuma"]= 2; 
      break;
      case 8:  rasgo["Adicción_Tozuma"]= 3;
      break;
      case 9:  rasgo["Adicción_Tozuma"]= 4; 
      break;
      case 10: rasgo["Adicción_Tozuma"]= 5; 
      break;
      case 11: rasgo["Adicción_Alcohol"]= 1; 
      break;
      case 12: rasgo["Adicción_Alcohol"]= 2; 
      break;
      case 13: rasgo["Adicción_Alcohol"]= 3; 
      break;
      case 14: rasgo["Adicción_Alcohol"]= 4;  
      break;
      case 15: rasgo["Adicción_Alcohol"]= 5; 
      break;
      case 16: rasgo["Adicción_Selchelkalah"]= 1; 
      break;
      case 17: rasgo["Adicción_Selchelkalah"]= 2; 
      break;
      case 18: rasgo["Adicción_Selchelkalah"]= 3;  
      break;
      case 19: rasgo["Adicción_Selchelkalah"]= 4;   
      break;
      case 20: rasgo["Adicción_Selchelkalah"]= 5;     
      break;
      case 21: rasgo["Adicción_Droga"]= 1;     
      break;
      case 22: rasgo["Adicción_Droga"]= 2;      
      break;
      case 23: rasgo["Adicción_Droga"]= 3;      
      break;
      case 24: rasgo["Adicción_Droga"]= 4;      
      break;
      case 25: rasgo["Adicción_Droga"]= 5;      
      break;
      case 26: rasgo["Trastorno_Fobia"]= 1;     
      break;
      case 27: rasgo["Trastorno_Fobia"]= 2;      
      break;
      case 28: rasgo["Trastorno_Fobia"]= 3;      
      break;
      case 29: rasgo["Trastorno_Fobia"]= 4;      
      break;
      case 30: rasgo["Trastorno_Fobia"]= 5;       
      break;
      case 31: rasgo["Vista_deficiente"]= -2;     
      break;
      case 32: rasgo["Oído_deficiente"]= -2;        
      break;
      case 33: rasgo["Manos_temblorosas"]= -2;        
      break;
      case 34: rasgo["Cojera"]= -2;        
      break;
      case 35: rasgo["Cojera"]= -4;      
      break;
      case 36: rasgo["Cojera"]= -6;      
      break;
      case 37: rasgo["Vista_deficiente"]= -4;     
      break;
      case 38: rasgo["Vista_deficiente"]= -6;     
      break;
      case 39: rasgo["Oído_deficiente"]= -4;      
      break;
      case 40: rasgo["Oído_deficiente"]= -6;      
      break;
      case 41: rasgo["Manos_temblorosas"]= -4;      
      break;
      case 42: rasgo["Manos_temblorosas"]= -6;       
      break;
      case 43: rasgo["Bajo"]= -2;      
      break;
      case 44: rasgo["Enano"]= -4;       
      break;
      case 45: rasgo["Hígado_débil"]= -2;     
      break;
      case 46: rasgo["Hígado_débil"]= -4;     
      break;
      case 47: rasgo["Hígado_débil"]= -6;    
      break;
      case 48: rasgo["Corazón_débil"]= -2;     
      break;
      case 49: rasgo["Corazón_débil"]= -4;     
      break;
      case 50: rasgo["Corazón_débil"]= -6;     
      break;
      case 51: rasgo["Pulmones_débiles"]= -2;     
      break;
      case 52: rasgo["Pulmones_débiles"]= -4;     
      break;
      case 53: rasgo["Pulmones_débiles"]= -6;    
      break;
      case 54: rasgo["Trastorno_Paranoia"]= 1;      
      break;
      case 55: rasgo["Trastorno_Paranoia"]= 2;      
      break;
      case 56: rasgo["Trastorno_Paranoia"]= 3;       
      break;
      case 57: rasgo["Trastorno_Paranoia"]= 4;      
      break;
      case 58: rasgo["Trastorno_Paranoia"]= 5;      
      break;
      case 59: rasgo["Trastorno_Voces"]= 1;       
      break;
      case 60: rasgo["Trastorno_Voces"]= 2;      
      break;
      case 61: rasgo["Trastorno_Voces"]= 3;      
      break;
      case 62: rasgo["Trastorno_Voces"]= 4;      
      break;
      case 63: rasgo["Trastorno_Voces"]= 5;       
      break;
      case 64:  rasgo["Enemigos"]= 1;       
      break;
      case 65: rasgo["Enemigos"]= 2;        
      break;
      case 66:  rasgo["Enemigos"]= 3;       
      break;
      case 67:  rasgo["Enemigos"]= 4;       
      break;
      case 68:  rasgo["Deuda"]= 1;       
      break;
      case 69:  rasgo["Deuda"]= 2;      
      break;
      case 70:  rasgo["Deuda"]= 3;      
      break;
      case 71:  rasgo["Deuda"]= 4;      
      break;
      case 72:   rasgo["Hosco"]= -2;     
      break;
      case 73:  rasgo["Avaricioso"]= -2;      
      break;
      case 74: rasgo["Envidioso"]= -2;         
      break;
      case 75: rasgo["Criminal"]= 1;     
      break;
      case 76: rasgo["Criminal"]= 2;     
      break;
      case 77: rasgo["Criminal"]= 3;     
      break;
      case 78: rasgo["Criminal"]= 4;      
      break;
      case 79: rasgo["Transtorno_Ira"]= 1;     
      break;
      case 80: rasgo["Transtorno_Ira"]= 2;      
      break;
      case 81: rasgo["Transtorno_Ira"]= 3;     
      break;
      case 82: rasgo["Transtorno_Ira"]= 4;     
      break;
      case 83: rasgo["Transtorno_Ira"]= 5;     
      break;
      case 84: rasgo["Vista_Aguda"]= 2;     
      break;
      case 85: rasgo["Oído_Agudo"]= 2;     
      break;
      case 86: rasgo["Afortunado"]= 1;     
      break;
      case 87: rasgo["Salud"]= 1;     
      break;
      case 88: rasgo["Salud"]= 2;     
      break;
      case 89: rasgo["Salud"]= 3;     
      break;
      case 90: rasgo["Belleza"]= 2;     
      break;
      case 91: rasgo["Belleza"]= 4;      
      break;
      case 92: rasgo["Belleza"]= 6;      
      break;
      case 93: rasgo["Atleta"]= 2;      
      break;
      case 94: rasgo["Tirador_Aventajado"]= 2;      
      break;
      case 95: rasgo["Esgrimista_Aventajado"]= 2;      
      break;
      case 96: rasgo["Médico_Aventajado"]= 2;       
      break;
      case 97: rasgo["Inventor"]= 2;       
      break;
      case 98: rasgo["Mecánico_Aventajado"]= 2;        
      break;
      case 99: rasgo["Piloto_Aventajado"]= 2;       
      break;
      case 100: rasgo["Psíquico_latente"]= "";        
      break;
  }
  return rasgo;
}