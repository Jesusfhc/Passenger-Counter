let people = 0
let saveEl = document.getElementById("save-el")

function increment() {
    people = people + 1
    document.getElementById("count-el").innerText = people
}

function save() {
    let score = people + " - "
    saveEl.textContent += score
    people = 0
    document.getElementById("count-el").innerText = people
}


