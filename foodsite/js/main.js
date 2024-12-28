let nav =document.querySelector(".navigation-wrap");
window.onscroll =function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
};
// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
});


document.addEventListener("DOMContentLoaded", ()=> {
    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end-start,
        increment = end > start ? 1 : -1,
        stop = Math.abs(Math.floor(duration / range)),
        timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current == end ){
                clearInterval(timer);
            }
        },stop);
    }
    counter("count1",150,200,500);
    counter("count2",280,350,2500);
    counter("count3",300,400,2500);
    counter("count4",150,200,3000);
});