const fashionNav = document.querySelector (".fashion-nav");
const fashionToggle = document.querySelector(".fashion-toggle");

fashionToggle.addEventListener('click', () => {
    const visibility = fashionNav.getAttribute('data-visible');

    

    if (visibility === "false") {
        fashionNav.setAttribute('data-visible', true);
    } else if (visibility === "true"){
        fashionNav.setAttribute('data-visible', false);
    }
    console.log(visibility);
})