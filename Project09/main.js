const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector("#btnImg")
const btnReset = document.querySelector("#btnAgain")
const phrase = document.querySelector("section")

const phrases = [
  `Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.`,
  `A vida trará coisas boas se tiver paciência.`,
  `Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.`,
  `Não compense na ira o que lhe falta na razão.`,
  `Defeitos e virtudes são apenas dois lados da mesma moeda.`,
  `A maior de todas as torres começa no solo.`,
]

btnOpen.addEventListener('click', randomPhrase)
btnReset.addEventListener('click', toggleScreen)
document.addEventListener('keydown', keyEnter)

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function randomPhrase() {
  let index = Math.round(Math.random() * (phrases.length-1))
  phrase.innerText = phrases[index]

  console.log(index)  
  toggleScreen()
}

function keyEnter (e) {
  if (e.key == 'Enter' && screen2.classList.contains('hide')) {
    randomPhrase()
  } else if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    toggleScreen()
  }

}