$("#cargarPnj").click(function() {
    let cargar = prompt("¿Estás seguro de que quieres cargar un archivo? Asegúrate de que esté en la misma carpeta que este archivo. Teclea s");
    if(cargar == "s" ){
      let archivo = prompt("Escribe el nombre del archivo, no hace falta la extensión");
      console.log(archivo)
      if(isNaN(archivo)){
            $("#generadorDePNJs").load(archivo+".htm", function() {
              $(".botonesSubirBajar").on("click", function() {
                funcionBotonSubir()
                funcionBotonBajar()
              });
            });
        }

      }
 
  });

function download(filename, personajes) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(personajes));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

$("#descargarPnj").click(function(){
  $(".botones-ocultar").hide();
  let personajes = document.getElementById("generadorDePNJs").innerHTML;
  let filename = prompt("Escoge un nombre para tu archivo (sin extensión)")
  download(filename, personajes);
});
