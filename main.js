// http://websamuraj.pl/examples/js/projekt11/

const btnStart = document.querySelector(".main")
const btnReset = document.querySelector(".reset")
const div = document.querySelector(".time div")

let ms = 0
let min = 0
let hours = 0
let days = 0
let active = false
let activeMinutes = false
let activeHours = false
let activeDays = false
let interval

const timer = () => {
    if (active === false) {
        active = true
        btnStart.textContent = "Pauza"
        interval = setInterval(start, 10)
    }
    else {
        active = false
        btnStart.textContent = "Start"
        clearInterval(interval)
    }
}

const start = () => {
    if (ms/100 < 60) {
    ms++
    } else {
        min++
        ms = 0
       activeMinutes = true }

    if (activeMinutes === true) {
        div.textContent = (min < 10 ? "0" + min : min) + ":" + ((ms/100).toFixed(2) < 10 ? "0" + (ms/100).toFixed(2) : (ms/100).toFixed(2)) 
    } else {
        div.textContent = (ms/100).toFixed(2) < 10 ? + "0" +(ms/100).toFixed(2) : (ms/100).toFixed(2)
    }

    if (min >= 60) {
        min = 0
        hours++
        activeHours = true
    }

    if (activeHours === true) {
        div.textContent = (hours < 10 ? "0" + hours : hours) + ":" + (min < 10 ? "0" + min : min) + ":" + ((ms/100).toFixed(2) < 10 ? "0" + (ms/100).toFixed(2) : (ms/100).toFixed(2))
    }

    if (hours >= 24) {
        hours = 0
        days++
        activeDays = true
    }

    if (activeDays === true) {
        div.textContent = days + (hours < 10 ? "0" + hours : hours) + ":" + (min < 10 ? "0" + min : min) + ":" + ((ms/100).toFixed(2) < 10 ? "0" + (ms/100).toFixed(2) : (ms/100).toFixed(2))
    }
    
}

const reset = () => {
    btnStart.textContent = "Start"
    clearInterval(interval)
    div.textContent = "---"
    active = false
    activeMinutes = false
    ms = 0
}

btnStart.addEventListener('click', timer)
btnReset.addEventListener('click', reset)

