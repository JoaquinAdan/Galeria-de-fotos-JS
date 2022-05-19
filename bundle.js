// daniel
const arrowAlbum = document.getElementById('arrowAlbum');

arrowAlbum.onclick=() => {
    const table = document.getElementById('table');

    table.classList.toggle('active');
}

// adan
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
    darkMode();
    navegacionFija();
    crearCarrousel();
});

function crearGaleria() {
	const galeria = document.querySelector(".galeria-imagenes");
	for (let i = 1; i <= 17; i++) {
		const imagen = document.createElement("IMG");
        imagen.setAttribute('loading', 'lazy')
		imagen.src = `build/img/${i}.webp`;
		imagen.dataset.imagenId = i;

		// añadir funcion mostrar imagen
		imagen.onclick = mostrarImagen;

		const lista = document.createElement("LI");
		lista.appendChild(imagen);
		galeria.appendChild(lista);
	}
}
function crearCarrousel() {
    const carrouselImagenes = document.querySelector(".imagenesCarrousel");
	for (let i = 1; i <= 17; i++) {
		const imagen = document.createElement("IMG");
        imagen.setAttribute('loading', 'lazy')
        imagen.classList.add('carrouselImg')
		imagen.src = `build/img/${i}.webp`;
		imagen.dataset.imagenId = i;

		// añadir funcion mostrar imagen
		imagen.onclick = mostrarImagen;
        
        const listado = document.createElement("div");
        listado.classList.add('imagenCarrousel')
        listado.appendChild(imagen)
        carrouselImagenes.appendChild(listado)
	}
    const carrousel = document.querySelector(".imagenesCarrousel");
    const atras = document.querySelector(".atras")
    const adelante = document.querySelector(".adelante")
    
    let maxScrollLeft = carrousel.scrollWidth - carrousel.clientWidth;
    let intervalo = null;
    let step = 2;
    const start = () => {
        intervalo = setInterval(function () {
            carrousel.scrollLeft = carrousel.scrollLeft + step;
            if (carrousel.scrollLeft === maxScrollLeft) {
                step = step * - 1;
            } else if (carrousel.scrollLeft === 0) {
                step = step * - 1;
            }
        }, 10);
    };

    const startAdelante = () => {
        intervalo = setInterval(function () {
            carrousel.scrollLeft = carrousel.scrollLeft + 5;
        }, 10);
    }
    const startAtras = () => {
        intervalo = setInterval(function () {
            carrousel.scrollLeft = carrousel.scrollLeft - 15;
        }, 10);
    }

    const stop = () => {
        clearInterval(intervalo)
    }

    document.querySelector(".atras").addEventListener("mousedown", mouseDown)
    document.querySelector(".atras").addEventListener("mouseup", mouseUp)
   
    document.querySelector(".adelante").addEventListener("mousedown", mouseDown1)
    document.querySelector(".adelante").addEventListener("mouseup", mouseUp1)
   
    function mouseDown() {
        startAtras()
    }
    function mouseUp() {
        stop()
    }
    function mouseDown1() {
        startAdelante()
    }
    function mouseUp1() {
        stop()
    }
    // carrousel.addEventListener("mouseover",() => {
    //     stop()
    // })
    // carrousel.addEventListener("mouseout",() => {
    //     start()
    // })
    
    // atras.addEventListener('click', startAtras)
    // atras.removeEventListener('click', startAdelante)
    // adelante.addEventListener('click', startAdelante)
    // adelante.removeEventListener('click', startAtras)
    start();

}

//Mostrar imagenes
function mostrarImagen(e) {
    const id = parseInt( e.target.dataset.imagenId);

    // Carrusel
   

	// Div hijo
	const pieFoto = document.createElement('DIV');
	pieFoto.classList.add('pieFoto');
	
    
    
    //generar la imagen
    const imagen  = document.createElement('IMG');
    imagen.setAttribute('id','div');
    imagen.classList.add('img-tamaño')
    imagen.src = `build/img/${id}.webp`;
    console.log(imagen.id)
    
    //DIV OVERLAY
    const fondo = document.createElement('DIV');
    fondo.classList.add('fondo')
    const overlay = document.createElement('DIV');
    overlay.classList.add('overlay');

    //overlayHijo
    const overlayHijo = document.createElement('DIV');
    overlayHijo.classList.add('overlayHijo')
    overlayHijo.appendChild(imagen);
    overlayHijo.appendChild(pieFoto);
    overlay.append(overlayHijo)
    //boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    // cerrarImagen.textContent = 'X';
    // cerrarImagen.classList.add('btn-cerrar');

	//guardar
	const guardar = document.createElement('A');
    guardar.setAttribute("href", "#");
    guardar.textContent = "Guardar";
    guardar.classList.add('boton', 'grid-guardar');
    pieFoto.appendChild(guardar)
	
    //share
    const share = document.createElement('A');
    share.setAttribute("href", "#");
    share.classList.add('grid-share')
    pieFoto.appendChild(share)
    const shareImg = document.createElement('IMG');
    shareImg.src = `build/img/icon/share.webp`
    shareImg.classList.add('icon')
    share.appendChild(shareImg)

    //download
	const download = document.createElement('A');
    download.setAttribute("href", "#");
    download.classList.add('grid-download');
    pieFoto.appendChild(download)
    const downloadImg = document.createElement('IMG');
    downloadImg.src = `build/img/icon/download.webp`
    downloadImg.classList.add('icon')
    download.appendChild(downloadImg)

    //cuando se da click cerrar la imagen
    fondo.onclick = function() {
        overlay.remove();
        fondo.remove();
        body.classList.remove('fijar-body');
    }

    // Cuando se presiona, se cierra la imagen
    // cerrarImagen.onclick = function() {
    //     overlay.remove();
    //     body.classList.remove('fijar-body');
    // }
    overlay.appendChild(cerrarImagen);
	console.log(cerrarImagen.textContent)
    //contenido para fondo
  
    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.appendChild(fondo);
    body.classList.add('fijar-body');
}

// Dark mode
function darkMode() {

    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    // console.log(prefiereDarkMode.matches);
    if(prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change', function() {
        if(prefiereDarkMode.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }    
    });

    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode')
    });
}
// Navegacion fija
function navegacionFija() {

    const barra = document.querySelector('.header');

    //Registrar el intersection observer
    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo')
        } else {
            barra.classList.add('fijo')
        }
    });

    //Elemento a observar
    observer.observe(document.querySelector('.main-img-container-section'));
}


