document.getElementById('button').addEventListener('click', multiply)
answer = 0

function multiply () {
  number1 = parseInt(document.getElementById('number1').value)
  number2 = parseInt(document.getElementById('number2').value)
  for (let i = 0; i < number1; i++) {
  answer += number2
  }
  document.getElementById('answer').innerHTML = answer
}
