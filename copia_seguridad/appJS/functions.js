function sacarValoresArrayRecursive (arrayRecursive){
    let sacado;
    if(Array.isArray(arrayRecursive)){
      arrayRecursive.forEach( function(valor, indice, array) {
        if(Array.isArray(valor)){
          sacado = sacarValoresArrayRecursive(valor);
        } else{
           sacado = valor
        }
      });
    }else{
      sacado = arrayRecursive
    }
    return sacado
}

function inArray(needle, haystack) {
  var length = haystack.length;
  for(var i = 0; i < length; i++) {
      if(haystack[i] == needle) return true;
  }
  return false;
}