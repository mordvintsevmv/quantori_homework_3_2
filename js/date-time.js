const date = new Date()

const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
const day = date.getDate()

const delay_seconds = hours*60*60 + minutes*60 + seconds

document.getElementById('clock-hand-hours').style.animation = `animate-clock-hand 43200s linear -${delay_seconds}s infinite`;
document.getElementById('clock-hand-minutes').style.animation = `animate-clock-hand 3600s linear -${delay_seconds}s infinite`;
document.getElementById('clock-hand-seconds').style.animation = `animate-clock-hand 60s steps(60) -${delay_seconds}s infinite`;

document.getElementById('clock-date-text').textContent = day.toString()