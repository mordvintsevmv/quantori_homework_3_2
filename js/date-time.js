const checkTime = () => {
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    document.getElementById('watch-digital-hm').textContent = minutes <  10 ? hours + ":0"  + minutes : hours + ":"  + minutes
    document.getElementById('watch-digital-seconds').textContent = seconds < 10 ? "0"+seconds : seconds

    setTimeout(checkTime, 1000)

}

const setTime = () =>{
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const delay_seconds = hours*60*60 + minutes*60 + seconds

    document.getElementById('watch-hand-hours').style.animation = `animate-watch-hand 43200s linear -${delay_seconds}s infinite`;
    document.getElementById('watch-hand-minutes').style.animation = `animate-watch-hand 3600s linear -${delay_seconds}s infinite`;
    document.getElementById('watch-hand-seconds').style.animation = `animate-watch-hand 60s steps(60) -${delay_seconds}s infinite`;

}

// Creating 60 strokes for every minute
for (let i=0; i<60; i++){

    let stroke = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    if (i%5 === 0){
        stroke.setAttribute('href', '#watch-12-stroke')
        stroke.setAttribute("transform", `rotate(${i*6} 0 0)`)
    }
    else {
        stroke.setAttribute('href', '#watch-60-stroke')
        stroke.setAttribute("transform", `rotate(${i*6} 0 0)`)
    }

    document.getElementById('watch').appendChild(stroke)
}

setTime();
checkTime();
