import ipads from "./data/ipads.js"

let x = 0
let y = 0
let frames = ''

for( let i = 0; i < 60; i+=1){
    frames += `${(100 / 60 * i).toFixed(2)}% { background-position: ${x}px ${y}px }<br/>`
    if (x <= -500){
        x = 0
        y -= 100
        continue
    }
    x-= 100
}

// document.body.innerHTML = frames


const testsEl = document.querySelector('.test')
ipads.forEach(function(ipad){
    const testEl = document.createElement('div')
    testEl.classList.add('hi')
    testEl.textContent = ipad.name

    testsEl.append(testEl)
    console.log(testEl)
})