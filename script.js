const btn = document.getElementById('btn');
const containerAll = document.getElementById('container-all');
const title = document.querySelectorAll('.title-icon');
btn.addEventListener('click', activate)
function activate (){
    btn.classList.toggle('active')
    containerAll.classList.toggle('active')
}

