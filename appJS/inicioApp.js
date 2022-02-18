$(document).ready(function(){ 
    $("#iniciar").click(function(){

        $("#generadorDePNJs").show()  
        $(".contenido-aplicacion").show()
        $("#iniciar").hide();
        var numeroTotalPersonajes = prompt("¿Cuantos PNJs quieres hacer? Mínimo 1 máximo 8");
        if (isNaN(numeroTotalPersonajes) || numeroTotalPersonajes == "" ) {
            numeroTotalPersonajes = parseInt(1);
        }else{
            numeroTotalPersonajes = parseInt(numeroTotalPersonajes);
        }

        for (let h =1; h <= numeroTotalPersonajes; h++){
         
            alert("Creando el personaje número: "+h)
            var bonificacion = prompt("Introduce una bonificación del 0 al 100");
            if (isNaN(bonificacion) || bonificacion == "" ) {
                bonificacion = parseInt(0);
            }else{
                bonificacion = parseInt(bonificacion);
            }
            crearPNJ(h, bonificacion, "random")
           
        }    
            
    });

});
  


