const audio = new Audio()
var numberinput = document.querySelector('.box')
var Btn = document.querySelector('.calc')
var ecinput = document.querySelector('.ec')

Btn.addEventListener('click', () => {
    if (numberinput.value){
        ecinput.innerText = `${ 2022 - numberinput.value} years`
        ecinput.style.color = "#67DB00"

}
})


Btn.addEventListener('click', () => {
    if (!numberinput.value){
        ecinput.innerText = "Enter your birth year"
        ecinput.style.color = "red"
}
})

audio.src = "sound.mp3";


