let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boot = document.getElementById('boot');
let novil = document.querySelector(".novil");

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value  + 'px';
    moon.style.top = value*3     + "px";
    mountains3.style.top = value*2 + 'px';  
    mountains4.style.top = value * 1.5 + 'px'  ;
    river.style.top = value + 'px';
    boot.style.top = value + 'px';
    boot.style.left = value*4 + 'px';
    novil.style.fontSize = value + 'px';
    if(scrollY >= 70 )
    {
        novil.style.fontSize = 70 + 'px';
        novil.style.position = "fixed";
        if(scrollY >= 420)
        {
            novil.style.display = 'none'
        }else{novil.style.display = 'block'}  
    }
    if(scrollY >= 210){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
    }else{
        document.querySelector('.main').style.background= 'linear-gradient(#d79ad1,#fff)'

    }
    

}



