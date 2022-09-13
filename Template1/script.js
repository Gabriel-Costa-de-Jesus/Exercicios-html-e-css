(function() {
    const menu = document.querySelector('.menu')
    menu.onclick = () => {
        menu.classList.toggle('open')
    }
})()
var area =window.document.querySelector(".mostrar")
var sair =window.document.querySelector("#divx")
var elementoshiddem = window.document.querySelector('.displaynone')
area.addEventListener('mouseenter', entrar)
sair.addEventListener('click', saiu)

function entrar(){
    elementoshiddem.style.display= 'block'

}
function saiu(){
    elementoshiddem.style.display= 'none'
    

}

let count = 1
document.getElementById("radio1").checked = true

setInterval(function (){
    nextImage()
}, 3000)

function nextImage(){
    count++
    if(count>4){
        count =1
    }
    document.getElementById("radio"+count).checked = true
}
// Responsividade
// let barrapq = document.querySelector("#barra")
// barrapq.style.width = '100px'

// document.removeEventListener()
// let sliderpq = document.querySelector(".slider")
// sliderpq.style.height = '85px'