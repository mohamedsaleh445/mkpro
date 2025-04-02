const menubtn = document.querySelector("#menu")
const menuitem = document.querySelector("#menuitem")

menubtn.addEventListener("click",()=>{
    menuitem.classList.toggle("hidden")
    menuitem.classList.toggle("flex")
})