const primary_Nav = document.querySelector('.nav_links');
const nav_Toggle = document.querySelector('.mobile-nav-toggle');

nav_Toggle.addEventListener('click', () => {
    const visibility = primary_Nav.getAttribute('data-visible');

    if (visibility === "false"){
        primary_Nav.setAttribute('data-visible', true); 
        nav_Toggle.setAttribute('aria-expanded', true);
    } else {
        nav_Toggle.setAttribute('aria-expanded', false);
        primary_Nav.setAttribute('data-visible', false);
    }

});