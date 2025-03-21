const initApp = ()=>{
    const hamburgerBtn = document.getElementById("hamburger-button")
    const mobilMenu = document.getElementById("mobile-menu")
        const toggleMenu = ()=>{
            mobilMenu.classList.toggle("hidden")
            mobilMenu.classList.toggle('flex')
        }

        
        hamburgerBtn.addEventListener('click',toggleMenu)
        mobilMenu.addEventListener('click' , toggleMenu)
}

document.addEventListener('DOMContentLoaded' , initApp)
