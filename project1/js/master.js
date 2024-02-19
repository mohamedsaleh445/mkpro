// check for local storage
let backgroundimg = true;
let theinterval;

let maincolor = localStorage.getItem("color_option")
if(maincolor!==null){
    document.documentElement.style.setProperty("--main--color",localStorage.getItem("color_option"))
    document.querySelectorAll(".color-list li").forEach(element =>{
        element.classList.remove("active")
        if(element.dataset.color===maincolor){
            element.classList.add("active")
        }
    })
}
let backgrounlocalitem = localStorage.getItem("background-option")
if(backgrounlocalitem !== null){
if(backgrounlocalitem === "true"){
    backgroundimg === true;
    randomeize()

}else{
    backgroundimg === false;
}
document.querySelectorAll(".random-background span").forEach(element =>{
    element.classList.remove("active")
})
if(backgrounlocalitem === "true"){
    document.querySelector(".random-background .yes").classList.add("active")
}else{
    document.querySelector(".random-background .no").classList.add("active")

}
}


// toggle sping
document.querySelector(".toggle-setting i").onclick = function(){
 this.classList.toggle("fa-spin")
 document.querySelector(".setting-box").classList.toggle("open")
}


//switch colors
const colorsli = document.querySelectorAll(".color-list li")
colorsli.forEach(li =>{
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty("--main--color",e.target.dataset.color)
        localStorage.setItem("color_option",e.target.dataset.color)
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active")
        })
        e.target.classList.add("active")
    })

})

//switch background
const randombackground = document.querySelectorAll(".random-background span")

randombackground.forEach(span =>{
    span.addEventListener("click",(e) =>{
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active")
        })
        e.target.classList.add("active")
        if(e.target.dataset.background === "yes"){
                backgroundimg = true
                randomeize()
                localStorage.setItem("background-option",true)
        }else{
            backgroundimg = false
            clearInterval(theinterval)
            localStorage.setItem("background-option",false)


        }
    })
})

let page = document.querySelector(".landing-page")

let img = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"]




function randomeize(){
    if(backgroundimg === true){
        
theinterval= setInterval(() => {
    let rand = Math.floor(Math.random()*img.length)
    page.style.backgroundImage = 'url("img/'  +img[rand]  +  '")';
}, 10000);
    }
}

//skill progress
let ourskills = document.querySelector(".skills")

window.onscroll = function(){
    let skillsofsettop = ourskills.offsetTop;
    let skillsouterheight = ourskills.offsetHeight
    let windowheight = this.innerHeight
    let windowtop = this.scrollY;
console.log()
    if(windowtop >(skillsofsettop + skillsouterheight - windowheight)){
        let allskills = document.querySelectorAll(".skill-box .skill-progres span")
        allskills.forEach(skill =>{
            skill.style.width = skill.dataset.progress
        })
    }

}

// creat pop up woth image
let ourgalary = document.querySelectorAll(".gallary img")
ourgalary.forEach(  img =>{
    img.addEventListener('click' , (e)=>{
        // creat over lay
        let overlay = document.createElement("div")
        overlay.className = 'popup-overlay'
        document.body.appendChild(overlay)

        // creat popup
        let popupbox = document.createElement("div")

        if(img.alt !== null){
            //creat hedding
            let imageheding = document.createElement("h3")
            let imagetex = document.createTextNode(img.alt)
            imageheding.appendChild(imagetex)
            
            popupbox.appendChild(imageheding)
        }  popupbox.className = "popup-box"

        // creat image
        let popupimage = document.createElement("img")
        popupimage.src = img.src

        // add image to popup box
        popupbox.appendChild(popupimage)
        document.body.appendChild(popupbox)

        // creat close span
        let closespan = document.createElement("span")
        let closebutext = document.createTextNode("X")
        closespan.appendChild(closebutext)
        closespan.className = "close-buttom"
        popupbox.appendChild(closespan)

    })
})

// close popup
document.addEventListener("click" ,function (e){
    if(e.target.className == 'close-buttom'){
        e.target.parentElement.remove()
        document.querySelector(".popup-overlay").remove()
    }
})
//select all bullets
const allbullets = document.querySelectorAll(".nav-bullets .bullets")
const alllinks = document.querySelectorAll(".links a")

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

scrolltosection(alllinks);
scrolltosection(allbullets);

//show hide bullets
let bulletsspan = document.querySelectorAll(".bullets-option span")
let bulltscintainer = document.querySelector(".nav-bullets")

bulletsspan.forEach(span =>{
    span.addEventListener("click",(e) =>{
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active")
        })
        e.target.classList.add("active")
    })
span.addEventListener("click",(e)=>{
    if(span.dataset.display === "show"){
        bulltscintainer.style.display = "block"
    }else{
        bulltscintainer.style.display = "none"
    }
})
})
let toggkebtn = document.querySelector(".toggle-manue")

let tlinks = document.querySelector(".links")

toggkebtn.onclick = function(){
    this.classList.toggle("manue-active")
    tlinks.classList.toggle("open")
}
