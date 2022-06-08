let home = document.querySelector('.link-home-page');
home.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.replace('./home.html')
})