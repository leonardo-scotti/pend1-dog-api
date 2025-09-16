'use strict';
const searching = document.getElementById('searching');
const inputBreed = document.getElementById('search');

async function searchingDog() {
    const main = document.getElementById('main');
    const search = document.getElementById('search').value;

    main.replaceChildren()

    const photos = await buscarImagens(search);

    photos.forEach((url) => {
        const a = document.createElement('a');
        const img = document.createElement('img');
        img.src = url;

        a.setAttribute('target', '_blank');
        a.href = url;
        a.appendChild(img);

        main.appendChild(a);
    });
}

async function buscarImagens(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images`;
    const response = await fetch(url);
    const photos = await response.json();
    console.log
    return photos.message;
};

searching.addEventListener('click', searchingDog)
inputBreed.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        searchingDog();
    }
});