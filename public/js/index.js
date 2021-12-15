window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    
    subtitulo.style.textTransform = 'uppercase';    
    fondo.classList.add('fondo');
    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    

    container.style.display = 'block';

console.log(window)    
    let logo = document.querySelector('.logoDH');
    logo.addEventListener('click',function(){
        document.querySelector("#menu").classList.toggle('mostrar');
    });
    
    document.querySelector("#menu").addEventListener('mouseleave',function(){
        this.classList.remove('mostrar');
    })
}