window.setInterval(runningCounter, 1000)
let gameRunning = true
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const l = {}
let i = 0
const submitButton = document.getElementById('comment-form')[1]


plus.addEventListener('click', increment)
minus.addEventListener('click', decrement)
heart.addEventListener('click', like)
pause.addEventListener('click', pauseGame)
submitButton.addEventListener('click', stopReload)
submitButton.addEventListener('click', addComment)


function runningCounter() {
    if (gameRunning === true){
     counter.innerHTML++
   }
  };

function increment() {
   let counterNumber = parseInt(document.getElementById("counter").innerHTML, 10) 
   counterNumber ++
   document.getElementById("counter").innerHTML = counterNumber
}
function decrement() {
    let counterNumber = parseInt(document.getElementById("counter").innerHTML, 10) 
    counterNumber --
    document.getElementById("counter").innerHTML = counterNumber
}
function like() {
    const number = document.getElementById("counter").innerHTML
    if (l[number]) {
        l[number]++
        const element = document.getElementById(number)
        element.innerHTML = `${number} has ${l[number]} likes`
    }
    else {
        l[number] = 1
        let newElement = document.createElement('li')
        newElement.setAttribute('id', number)
        document.body.appendChild(newElement)
        newElement.innerHTML = `${number} has 1 like`
    }
}
function pauseGame() {
    if (gameRunning === true){
        gameRunning = false
        heart.disabled = true;
        minus.disabled = true;
        plus.disabled = true;
        submitButton.disabled = true;
        pause.innerHTML = "resume";
    }
    else {
        gameRunning = true;
        pause.innerHTML = "pause"
        heart.disabled = false;
        minus.disabled = false;
        plus.disabled = false;
        submitButton.disabled = false;
       
    }
}
function stopReload() {
    event.preventDefault()
}

function addComment() {
    let newElement = document.createElement('li')
    document.body.appendChild(newElement)
    const comment = document.getElementById('comment-form')[0].value
    newElement.innerHTML = comment
}