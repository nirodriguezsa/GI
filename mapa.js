//Función para cambiar los textos, imagen y gif para que quede como aparece al inicio.
function reinicio() {
    //estructura para todas las funciones:
    
    //Cambio en el título (Titulo)
    document.getElementById("Titulo").innerHTML = 'Información sobre los sitios';
    
    //Cambio en el texto descriptivo del primer cuadro contenedor
	document.getElementById("Texto").innerHTML = '<p id="Texto" class="Letras"> Según su descripción en Halo 2, Encerrona es una extraña y antigua base o fortaleza construida por los Forerunners, hecha para almacenar, investigar y estudiar al Flood (además de ser una de las muchas construidas para almacenarlo) cuando estos fueron descubiertos por los mismos. Este extraño lugar se encuentra en los recónditos lugares de la Instalación 05. Toda la estructura está totalmente rodeada por la nieve que cae de lo que parece ser el cielo del anillo, si ve detenidamente el paisaje se ve una gran cantidad de nieve, las montañas (caso algo extraño), y Halo. Aparentemente también una vez en la cima de la enorme estructura, es desplegable en la primera parte y se sigue caminando por la ladera hasta llegar a la parte posterior de la estructura.</p>';
    
    //Cambio en el texto descriptivo del segundo cuadro contenedor
    document.getElementById("Texto2").innerHTML = '<p id="Texto2" class="Letras">La cuidad posee además muchos otros sitios y caracterísitcas que la hacen única respecto a muchos programas, por lo cual le invito a verla.</p>';
    
    //Cambio en la imagen final sobre el elemento.
    document.getElementById("Imagen").innerHTML = '<p><img class="image-index" src="assets/map-folder/reboot.jpeg" alt="INICIO"/> </p>';
    alert('Pagina refrescada con exito!');
	document.getElementById("Info").scrollIntoView();
}

//funciones para el cambio de escenario en caso de presionar el boton indicado desde 

function Punto1() {
    document.getElementById("Titulo").innerHTML = 'PASARELA';
	document.getElementById("Texto").innerHTML = '<p id="Texto" class="Letras">Es la primera de las 5 zonas principales, pasarela tal y como su nombre lo indica es una pasillo o camino enorme (el más grande del mapa); está equipada con Granadas de Fragmentación y se conecta al ascensor y la zona de los laboratorios. </p>';
    document.getElementById("Texto2").innerHTML = '<p id="Texto2" class="Letras">   Encerrona aunque parece un mapa asimétrico aparentemente no lo es, si bien es lo bastante grande pero limitante para partidas grandes por lo que es un mapa considerablemente cerrado y en donde no se podrá sacar todo el provecho del mismo para enormes batallas. Este mapa está aparentemente fuertemente favorecido por la MLG de cualificados y francotiradores. El supersaltos en este mapa que para un juego interesante y táctico debido a que nos saca a zonas inéditas de Encerrona.</p>';
    document.getElementById("Imagen").innerHTML = '<p><img class="image-index" src="assets/map-folder/map1.webp" alt="INICIO"/> </p>';
	document.getElementById("Info").scrollIntoView();
}

function Punto2() {
    document.getElementById("Titulo").innerHTML = 'ASCENSOR';
    
	document.getElementById("Texto").innerHTML = '<p id="Texto" class="Letras"> Es la segunda zona, ascensor se compone de la torre elevada la cual se llega mediante el Ascensor Gravitatorio y está equipado con un Subfusil sin Cartucho/M7. Ascensor se une con pasarela en su trayectoria además de estar muy unida de la zona de los laboratorios. </p>';
    
    
    document.getElementById("Texto2").innerHTML ='<p id="Texto2" class="Letras"> Encerrona es un mapa cerrado y corto, en general, un mapa bastante sencillo de ahí su popularidad entre los jugadores MLG, y las armas por defecto del mapa son en general de aproximación excesiva y con una mentalidad de armas de mayor alcance en calidad de selecciones de poder, si se usan correctamente por lo que sólo un jugador lo bastante adiestrado puede sacar el provecho de estas armas en un mapa considerablemente cerrado. </p>';
    document.getElementById("Imagen").innerHTML = '<p><img class="image-index" src="assets/map-folder/map2.jpeg" alt="Ayuntamiento"/> </p>';
	document.getElementById("Info").scrollIntoView();
}

function Punto3() {
    document.getElementById("Titulo").innerHTML = 'AZOTEA';
    
	document.getElementById("Texto").innerHTML = '<p id="Texto" class="Letras">Es la tercera zona principal de las 5 zonas de Encerrona, la azotea o también apodada como Torre del BR es la zona más próxima al ascensor después de la sala del acantilado y en ella podremos encontrar un Rifle de Batalla BR55.</p>';
    
    
    document.getElementById("Texto2").innerHTML ='<p id="Texto2" class="Letras"> Encerrona al igual que los demás mapas Multijugador de Halo 2, posee un super salto que le da al jugador la capacidad de llegar a zonas o lugares inaccesibles por medios convencionales. Lo primero para realizar el salto es colocarse en la rampa del lado izquierdo desde la posición del puente que sube hacia la zona de la azotea, después caminamos agachados debajo de la posición de la misma placa, después de esto brincamos la barda del camino recorrido anteriormente y caemos en la segunda línea de la misma con el stick analógico hacia delante y al ser realizado todo el procedimiento, se habrá llegado hasta la estructura más alta en el mapa (un lugar perfecto para un francotirador adiestrado). </p>';
    document.getElementById("Imagen").innerHTML = '<p><img class="image-index" src="assets/map-folder/map3.jpg" alt="Lago Springfield"/> </p>';
	document.getElementById("Info").scrollIntoView();
}

function Punto4() {
    document.getElementById("Titulo").innerHTML = 'SALA CENTRAL';
    
	document.getElementById("Texto").innerHTML = '<p id="Texto" class="Letras">Es la cuarta zona de Encerrona, Sala Central es una sala pequeña pero que se caracteriza por ser la principal sala y a diferencia de las otras no esta equipada con ninguna arma. La sala central a pesar de ser la cuarta zona se encuentra más próxima al ascensor y la zona de los laboratorios y se ubica justo por de bajo del patio principal y la azotea.</p>';
    
    
    document.getElementById("Texto2").innerHTML ='<p id="Texto2" class="Letras">    Una de las cámaras de color verde de la zona de los laboratorios está abierta, lo que podría significar que algo o alguien ha escapado o salió de la cámara, también se dice que la versión final del mapa iba a tener esa misma cámara cerrada, pero por alguna razón terminó abierta. El diseño de Encerrona tal vez se pudo haber basado en el nivel Zona en Cuarentena de la Campaña. <br></br>En el escenario se pueden apreciar contenedores de gas de un diseño diferente al de los contenedores de gas del nivel Inquisidor en Campaña.</p>';
    document.getElementById("Imagen").innerHTML = '<p><img class="image-index" src="assets/map-folder/map4.jpeg" alt="Penitenciaria"/> </p>';
	document.getElementById("Info").scrollIntoView();
}

function Punto5() {
    document.getElementById("Titulo").innerHTML = 'SALA DEL ACANTILADO';
    
	document.getElementById("Texto").innerHTML = '<p id="Texto" class="Letras">    Es la última de las 5 zonas principales de Encerrona, Sala del Acantilado debe su nombre a que ésta se encuentra de bajo de un acantilado en Encerrona y está equipada con una Magnum y Granadas de Fragmentación. Sala del Acantilado está próxima a la azotea, el ascensor y el patio principal. </p>';
    
    
    document.getElementById("Texto2").innerHTML ='<p id="Texto2" class="Letras"> Encerrona está dividida en 5 zonas principales además de múltiples pasillos y cámaras vacías. Es un mapa bastante largo pero a pesar de esto no es lo suficientemente grande para un Matchmaking completo. Encerrona puede parecer un laberinto en una partida interna (desde una misma consola).    </p>';
    document.getElementById("Imagen").innerHTML = '<p><img class="image-index" src="assets/map-folder/map5.jpeg" alt="Hospital"/> </p>';
	document.getElementById("Info").scrollIntoView();
}
//
//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el segundo punto.
