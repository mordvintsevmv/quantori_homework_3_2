const date = new Date()

const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()

const delay_seconds = hours*60*60 + minutes*60 + seconds

document.getElementById('clock-hand-hours').style.animation = `animate-clock-hand 43200s linear -${delay_seconds}s infinite`;
document.getElementById('clock-hand-minutes').style.animation = `animate-clock-hand 3600s linear -${delay_seconds}s infinite`;
document.getElementById('clock-hand-seconds').style.animation = `animate-clock-hand 60s steps(60) -${delay_seconds}s infinite`;

const checkTime = () => {
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    document.getElementById('clock-digital-hm').textContent = hours + ":"  + minutes
    document.getElementById('clock-digital-seconds').textContent = seconds < 10 ? "0"+seconds : seconds

    setTimeout(checkTime, 1000)

}
checkTime()

// Creating 60 strokes for every minute
for (let i=0; i<60; i++){

    let stroke = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    if (i%5 === 0){
        stroke.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#clock-12-stroke')
        stroke.setAttribute("transform", `rotate(${i*6}, 0, 0)`)
    }
    else {
        stroke.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#clock-60-stroke')
        stroke.setAttribute("transform", `rotate(${i*6}, 0, 0)`)
    }

    document.getElementById('clock').appendChild(stroke)

}