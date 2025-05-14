const menuDes = document.getElementById('menu-des');
const lista = document.getElementById('lista');

menuDes.addEventListener('click', ()=>{
    lista.classList.toggle('show');
});