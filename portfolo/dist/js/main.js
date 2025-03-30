const huberger = document.querySelector("#huberger")
const menu = document.querySelector("#menu")
const hLinks = document.querySelectorAll("#hLink")
const body = document.querySelector("body")
const moon = document.querySelector("#moon")
huberger.addEventListener("click",function(){
    menu.classList.toggle("hidden")
    huberger.classList.toggle("bg-white")
})

hLinks.forEach(link =>{
    link.addEventListener("click",()=>{
        menu.classList.toggle("hidden")
        huberger.classList.toggle("bg-white")
    })
})

moon.addEventListener("click" , ()=>{
    body.classList.toggle("dark")
})
