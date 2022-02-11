function seleccionarPNJaCambiar(){
let pnjSeleccionado = $( "#selectChangePnj" ).val();
console.log(pnjSeleccionado)
crearCampos(pnjSeleccionado)
}

function seleccionarCampoaCambiar(){
    let campoSeleccionado = $( "#selectChangeCampo" ).val();
        $('#formModificarPnj3')
        .find('input')
        .remove()
        .end()
    ;
    if(campoSeleccionado !== ""){
        console.log(campoSeleccionado) 
        $('#formModificarPnj3').append($("<input type='text' id='textoAgregado' name='"+campoSeleccionado+"' onChange='agregarCampos()'></input>")); 
    }
}

function crearCampos (personajeSeleccionado){
    $('#selectChangeCampo')
        .find('option')
        .remove()
        .end()
    ;

    $('#selectChangeCampo').append($('<option>', {
        value: "",
        text: 'Campo a añadir',
    }));
    $('#selectChangeCampo').append($('<option>', {
        value: "listado-cuerpo"+personajeSeleccionado,
        text: 'Cuerpo PNJ'+personajeSeleccionado,
    }));
    $('#selectChangeCampo').append($('<option>', {
        value: "listado-mente"+personajeSeleccionado,
        text: 'Mente PNJ'+personajeSeleccionado,
    }));
    $('#selectChangeCampo').append($('<option>', {
        value: "listado-espiritu"+personajeSeleccionado,
        text: 'Espíritu PNJ'+personajeSeleccionado,
    }));
    $('#selectChangeCampo').append($('<option>', {
        value: "habilidad"+personajeSeleccionado,
        text: 'Habilidad PNJ'+personajeSeleccionado,
    }));
    $('#selectChangeCampo').append($('<option>', {
        value: "conocimiento"+personajeSeleccionado,
        text: 'Conocimiento PNJ'+personajeSeleccionado,
    }));
    $('#selectChangeCampo').append($('<option>', {
        value: "equipo"+personajeSeleccionado,
        text: 'Equipo PNJ'+personajeSeleccionado,
    }));
    $('#selectChangeCampo').append($('<option>', {
        value: "especial"+personajeSeleccionado,
        text: 'Especial PNJ'+personajeSeleccionado,
    }));

    
}

function agregarCampos(){
    let textoAgregado = $( "#textoAgregado" ).val()
    let campoSeleccionado = $( "#textoAgregado" ).attr('name');
    let withNoDigits = campoSeleccionado.replace(/[0-9]/g, '');
    let withDigits = campoSeleccionado.replace(/\D/g, "");
    console.log(textoAgregado) 
    console.log(campoSeleccionado) 
    console.log(withNoDigits) 
    console.log(withDigits) 
}