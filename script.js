const arrowAlbum = document.getElementById('arrowAlbum');

arrowAlbum.onclick=() => {
    const table = document.getElementById('table');

    table.classList.toggle('active');
}
