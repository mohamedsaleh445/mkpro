let icon = document.getElementById("icon")
window.onscroll= function(){
    if(scrollY >=350){
        icon.style.display ="block";
    }else{
        icon.style.display = "none";
    }
}
function bttop(){
    scroll({
        left : 0,
        top : 0,
        behavior : "smooth"
    })} 
    /*
$(function(){
    $(window).on("resize",function(){
        $("img").width($(window).width())
    })

})*/




var images=[
    "./newimg/1.jpg",
    "./newimg/2.jpg",
    "./newimg/3.jpg",
    "./newimg/4.jpg",

    ];
    var num = 0;
    function next() {
        var slider = document.getElementById('slider');
        num++;
        if(num >= images.length) {
            num = 0;
        }
        slider.src = images[num];
    }
    function prev() {
        var slider = document.getElementById('slider');
        num--;
        if(num < 0) {
            num = images.length-1;
        }
        slider.src = images[num];
    }
    

function value2(){
    scroll({ 
    top : 970 ,
    behavior : "smooth"
    })
}
function mission(){
    scroll({ 
    top :  1267 ,
    behavior : "smooth"
    })
}
function vision(){
    scroll({ 
    top :  1478 ,
    behavior : "smooth"
    })
}