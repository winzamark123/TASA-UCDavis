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