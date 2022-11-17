var navbar = document.querySelector('header .navbar');
document.querySelector('.toggle i').addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    document.querySelector('.toggle i').classList.toggle('fa-times');
})

window.addEventListener('scroll',()=>{
    navbar.classList.remove('active');
    document.querySelector('.toggle i').classList.remove('fa-times');
})