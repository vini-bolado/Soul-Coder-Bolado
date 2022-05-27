let btnEl = document.getElementById('btn-el')
let lampEl = document.getElementById('lamp-el')
let i = 0


btnEl.addEventListener('click', () =>{
    if (i==0) {
        lampEl.src = "img/liagada.png"
        i++
    } else{
        lampEl.src = "img/apagada.png"
        i--
    }

})
