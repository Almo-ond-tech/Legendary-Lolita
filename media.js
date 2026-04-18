const sefiNav = document.querySelector (".sefi-nav");
const sefiToggle = document.querySelector(".sefi-toggle");

sefiToggle.addEventListener('click', () => {
    const visibility = sefiNav.getAttribute('data-visible');

    

    if (visibility === "false") {
        sefiNav.setAttribute('data-visible', true);
    } else if (visibility === "true"){
        sefiNav.setAttribute('data-visible', false);
    }
    console.log(visibility);
})

const sefiOne = document.querySelector(".sefi-1");
const sefiTwo = document.querySelector(".sefi-2");
const cwSefiBtn = document.querySelector(".cw-sefi-btn");
const recSefiBtn = document.querySelector(".rec-sefi-btn");

cwSefiBtn.addEventListener('click', () => {
    const visibilityOne = sefiOne.getAttribute('data-visible');

    if (visibilityOne === "false") {
        sefiOne.setAttribute('data-visible', true);
        sefiTwo.setAttribute('data-visible', false);
    }
})

recSefiBtn.addEventListener('click', () => {
    const visibilityTwo = sefiTwo.getAttribute('data-visible');

    if (visibilityTwo === "false") {
        sefiTwo.setAttribute('data-visible', true);
        sefiOne.setAttribute('data-visible', false);
    }
})


// webtoons starts here

const webNav = document.querySelector(".web-nav");
const webToggle = document.querySelector(".web-toggle");

webToggle.addEventListener('click', () => {
    const visibility = webNav.getAttribute('data-visible');

    

    if (visibility === "false") {
        webNav.setAttribute('data-visible', true);
    } else if (visibility === "true"){
        webNav.setAttribute('data-visible', false);
    }
    console.log(visibility);
})

const webOne = document.querySelector(".web-1");
const webTwo = document.querySelector(".web-2");
const cwWebBtn = document.querySelector(".cw-web-btn");
const recWebBtn = document.querySelector(".rec-web-btn");

cwWebBtn.addEventListener('click', () => {
    const visibilityOne = webOne.getAttribute('data-visible');

    if (visibilityOne === "false") {
        webOne.setAttribute('data-visible', true);
        webTwo.setAttribute('data-visible', false);
    }
})

recWebBtn.addEventListener('click', () => {
    const visibilityTwo = webTwo.getAttribute('data-visible');

    if (visibilityTwo === "false") {
        webTwo.setAttribute('data-visible', true);
        webOne.setAttribute('data-visible', false);
    }
})




// function sum(a, b) {
//     return  a + b;
// }

// console.log(sum(5,5));
