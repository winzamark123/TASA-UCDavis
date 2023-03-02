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


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll(".events-hidden");
hiddenElements.forEach((el) => observer.observe(el));

// ========================= Officers ====================================
let preveiwContainer = document.querySelector('.profile-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

function CloseFunction(){
    let preview = document.querySelector('.active');
    preview.classList.remove('active');

}

function OpenFunction(){
    let name = this.getAttribute('data-name');
    previewBox.forEach(preview => {
        let target = preview.getAttribute('data-target');
        if(name == target){
            preview.classList.add('active');
        }
    })


}


document.getElementById('Chin').onclick = OpenFunction;
document.getElementById('Gavin').onclick = OpenFunction;
document.getElementById('Glory').onclick = OpenFunction;
document.getElementById('Win').onclick = OpenFunction;
document.getElementById('Bow').onclick = OpenFunction;
document.getElementById('Minnie').onclick = OpenFunction;
document.getElementById('Summer').onclick = OpenFunction;
document.getElementById('Eik').onclick = OpenFunction;

// =============================================================
// ===================Parralax Officers================================

let officers = document.getElementById('officers-title');
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    officers.style.marginRight = value * 4 +'px';
})

// =============================================================

