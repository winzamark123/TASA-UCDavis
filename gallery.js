let previewContainer = document.querySelector('.profile-preview');
let previewBox = previewContainer.querySelector('.preview');

document.querySelectorAll('.row .column').forEach(column => {
    column.onclick = () =>{
        let name = column.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            };
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('active');
      preveiwContainer.style.display = 'none';
    };
  });