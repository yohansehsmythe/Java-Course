let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
passenger = 0 

function increment() {
    passenger += 1
    countEl.textContent = passenger
}

function save() {
    let saveCount = passenger + " - "
    saveEl.textContent += saveCount
    passenger = 0
    countEl.textContent = passenger
}
