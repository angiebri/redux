import './styles.css'

import './styles.css'

const coonter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')

let state = 0

function render() {
    counter.textContent = state.toString()
}

addBtn.addEventListener('click', () => {
    state++
    render()
})

addBtn.addEventListener('click', () => {
    state--
    render()
})

render()