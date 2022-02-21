function crearHTMLPnjEspecifico (bonificacion,tipo){
    $(".botones-ocultar").show();
    var posicionAcrear;
    if($('.numerosPNJs').length == 8){
        alert("No puedes añadir más personajes")
        return false;
    }
    if($('.numerosPNJs').length == 0){
        crearPNJ(1, 0, tipo)
        $("#PNJ1").show()
    } else {
        for (let i=1; i<=8; i++){
            if($('#PNJ'+i).length == 0){
                console.log("Personaje "+i+" No existe")
                posicionAcrear = i;
                break;
            }
        }
        console.log("Posicion a crear "+posicionAcrear)
        crearPNJ( posicionAcrear , bonificacion, tipo)
        $("#PNJ"+ posicionAcrear ).show()
    }        
}
$("#crearInutil").click(function(){
    crearHTMLPnjEspecifico(0,"inutil")
});
$("#crearPringao").click(function(){
    crearHTMLPnjEspecifico(0,"pringao")
});

$("#crearDelMonton").click(function(){
    crearHTMLPnjEspecifico(0,"monton")
});

$("#crearEspecialista").click(function(){
    crearHTMLPnjEspecifico(0,"especialista")
});

$("#crearHeroe").click(function(){
    crearHTMLPnjEspecifico(0,"heroe")
}); 

$("#crearRandomPnj").click(function(){
    let bonificacion = prompt("Introduce una bonificación del 1 al 100")
    if (isNaN(bonificacion) || bonificacion == "" || bonificacion == undefined) { 
       bonificacion = 0;
    }else{
        bonificacion = parseInt(bonificacion);
    }
    crearHTMLPnjEspecifico(bonificacion,"random")
});


