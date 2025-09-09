'use strict';
const searching = document.getElementById('searching');

async function searchingDog() {
    const main = document.getElementById('main');
    const search = document.getElementById('search').value;

    main.textContent = ''

    const photos = await buscarImagens(search);

    photos.forEach((url) => {
        const img = document.createElement('img');
        img.src = url;

        main.appendChild(img);
    });

    console.log(search)

}

async function buscarImagens(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images`;
    const response = await fetch(url);
    const photos = await response.json();
    console.log
    return photos.message;
};

searching.addEventListener('click', searchingDog)