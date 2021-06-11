document.getElementById('button').addEventListener('click', multiply)
let answer = 0

function multiply () {
  let number1 = parseInt(document.getElementById('number1').value)
  let number2 = parseInt(document.getElementById('number2').value)
  for (let i = 0; i < number1; i++) {
    answer += number2
  }
  document.getElementById('answer').innerHTML = answer
}
