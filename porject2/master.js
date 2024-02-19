const allbullets = document.querySelectorAll(".logo a")
const alllinks = document.querySelectorAll(".logo a")

function scrolltosection(elements){
    elements.forEach(ele => {
        ele.addEventListener("click" , (e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}