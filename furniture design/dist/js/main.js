const menubar = document.querySelector("#menubar")
const menu = document.querySelector("#menu")

menu.addEventListener("click",function(){
        menubar.classList.toggle("hidden")
        menubar.classList.toggle("flex")
})