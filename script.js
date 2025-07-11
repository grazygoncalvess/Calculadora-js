function insertToDisplay(data){
  document.getElementById('display-screen').value += data
}

function cleanDisplay(){
  document.getElementById('display-screen').value = ''
}

function backspace(){
  const display = document.getElementById('display-screen')
  display.value = display.value.slice(0, -1)
}

function calc(){
  const display = document.getElementById('display-screen')

  try {
    let expression = display.value;

     if (expression.startsWith('√')) {
      const number = parseFloat(expression.slice(1));
      display.value = Math.sqrt(number);
    } else {
      display.value = eval(expression);
    }
    
  } catch {
    display.value = 'error'
  }

}