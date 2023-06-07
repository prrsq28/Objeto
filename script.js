
//Declaracion del Objeto movil
var movil = {
//Propiedades del Objeto movil
    dimensiones: {
        alto:  "140 mm",
        ancho: "75 mm",
        grosor: "6 mm",
    },
    pantalla: '6"',
    memoria: "64 GB",
//Métodos del Objeto movil
    musica: sonido(),
    imgen: video(),
};



function sonido(){
    const audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src = "media/bang.mp3"
    audio.play();
    document.body.appendChild(audio);
};

function video(){
    const video = document.getElementById("olas");
    video.src = "media/ocean.mp4"
    video.play();
   
};

function valorPropiedades(){
    document.getElementById("alto").innerHTML = movil.dimensiones.alto;
    document.getElementById("ancho").innerHTML = movil.dimensiones.ancho;
    document.getElementById("grosor").innerHTML = movil.dimensiones.grosor;
    document.getElementById("pantalla").innerHTML = movil.pantalla;
    document.getElementById("memoria").innerHTML = movil.memoria;
}


