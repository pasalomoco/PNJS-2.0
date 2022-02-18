function crearHTMLPnjEspecifico (tipo){
    $(".botones-ocultar").show();
    let check = true;
    let posicion = prompt("Selecciona el número del personaje. Del 1-8. No repitas si ya existe el número")
    if (isNaN(posicion) || posicion == "" || posicion == undefined ) {
        
    }else{
        $('.numerosPNJs').each(function(i, obj) {
            if (i+1 == posicion){
                alert("El PNJ ya existe, no puedes crear un PNJ encima de otro.")
                check = false;
                return false;
            }
        });
    
        if(check){
            posicion = parseInt(posicion);
            crearPNJ(posicion, 0, tipo)
            $("#PNJ"+posicion).show()
        }
    }
}
$("#crearInutil").click(function(){
    crearHTMLPnjEspecifico("inutil")
});
$("#crearPringao").click(function(){
    crearHTMLPnjEspecifico("pringao")
});

$("#crearDelMonton").click(function(){
    crearHTMLPnjEspecifico("monton")
});

$("#crearEspecialista").click(function(){
    crearHTMLPnjEspecifico("especialista")
});

$("#crearHeroe").click(function(){
    crearHTMLPnjEspecifico("heroe")
}); 

$("#crearRandomPnj").click(function(){
    $(".botones-ocultar").show();
    let check = true;
    let posicion = prompt("Selecciona el número del personaje. Del 1-8. No repitas si ya existe el número")
    if (isNaN(posicion) || posicion == "" || posicion == undefined ) {
    }else{
        $('.numerosPNJs').each(function(i, obj) {
            if (i+1 == posicion){
                alert("El PNJ ya existe, no puedes crear un PNJ encima de otro.")
                check = false;
                return false;
            }
        });
    
        if(check){
            let bonificacion = prompt("Introduce una bonificación del 1 al 100")
            if (isNaN(bonificacion) || bonificacion == "" || bonificacion == undefined) { 
                posicion = parseInt(posicion);
                crearPNJ(posicion, 0, "random")
                $("#PNJ"+posicion).show()
            }else{
                posicion = parseInt(posicion);
                crearPNJ(posicion, bonificacion, "random")
                $("#PNJ"+posicion).show()
               
            }
        }
        
    }
    
});


