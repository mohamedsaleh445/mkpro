const toggleclick = document.querySelector("#toggle-click")
const toggle = document.querySelector("#toggle")
const faq =document.querySelectorAll(".faq")
const dropdownfaq = document.getElementsByClassName("dropdwon-faq")
const uls = document.querySelectorAll("#toggle ul li a")

toggleclick.addEventListener("click",()=>{
    toggle.classList.toggle("hidden")

})


for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click",()=>{
        dropdownfaq[i].classList.toggle("hidden")
    });
    
}
for (let i = 0; i < uls.length; i++) {
    uls[i].addEventListener("click",()=>{
        toggle.classList.toggle("hidden")
    })
    
}

