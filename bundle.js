// daniel

// const arrowAlbum = document.getElementById('arrowAlbum');

// arrowAlbum.onclick=() => {
//     const table = document.getElementById('table');

//     table.classList.toggle('active');
// }

//contenedores
const AllAbumContainer = document.querySelector('.album-save-galerie');
const AllAlbumsUl = document.querySelector('.All-albums-conteiner');

//eventos
//const crearAlbum = document.getElementById('crearAlbum'); //aca
const arrowImage = document.querySelector('.arrowImage');
const imagesContainer = document.querySelector('.album-img');
const saveImage = document.querySelector('.Album-container-img');
let bookmark = document.querySelector('.bookmark');
const html = document.querySelector('.html');

//objeto de imagens
let objetosIMG = [];
let =  contador = 1;

//html con js
// let albumnname = document.createElement('div');
// let albumInput = document.createElement('input');
// let submitebtn = document.createElement('div');
// submitebtn.textContent = 'crear album'


// albumnname.className = 'albumn-name';
// albumInput.className = 'album-input';
// submitebtn.className = 'submite-btn';


// AllAbumContainer.appendChild(albumnname);
// albumnname.appendChild(albumInput);
// albumnname.appendChild(submitebtn);

// mis funciones
createEventLisetener();
function createEventLisetener() {
    crearAlbum.addEventListener('click', activeDiv)
}

function activeDiv() {
    if (contador == 0) {
        albumnname.style.display = 'none';
        contador = 1;
    }else{
        albumnname.style.display = 'block'
        contador = 0;
    }
    
}

arrowImage.onclick=()=>{
    if (contador == 0) {
        imagesContainer.style.display = 'none';
        contador = 1;
    }else {
        imagesContainer.style.display = 'block'
        contador = 0;
    }
}


function guardarelementosimg(overlayHijo, guardar) {
    overlayHijo.appendChild(AllAbumContainer);
    guardar.onclick=()=> {
        if (contador == 0) {
            AllAbumContainer.style.display = 'none';
            contador = 1;
        }else {
            AllAbumContainer.style.display = 'grid'
            contador = 0;
        }
    }
}


function gurdarImgAlbum(imagen, overlay){
    let liContainerImg = document.createElement('li');
    liContainerImg.className = 'li-Container-Img';

    let btnborrar = document.createElement('span');
    btnborrar.textContent = 'delete';
    btnborrar.className = "material-symbols-outlined";

    borrarImagenes(btnborrar, objetosIMG, liContainerImg)
    bookmark.onclick=()=>{
        imagesContainer.appendChild(liContainerImg);
        liContainerImg.appendChild(imagen);
        liContainerImg.appendChild(btnborrar);
        overlay.style.display = 'none'
        AllAbumContainer.style.display = 'none';
    }
}

function borrarImagenes(btnborrar, objetosIMG, liContainerImg) {
    btnborrar.onclick=()=>{
        liContainerImg.style.display = 'none'
    }
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
    //guardar.setAttribute("href", '#');
    guardar.textContent = "Guardar";
    guardar.classList.add('boton', 'grid-guardar');
    pieFoto.appendChild(guardar)
    guardar.style.cursor = 'pointer';
	
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

    //funcion daniel
    guardarelementosimg(overlayHijo, guardar);
    gurdarImgAlbum(imagen, overlay); 
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
