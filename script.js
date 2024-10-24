function inputValue(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteDigit() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    const display = document.getElementById('display').value;
  
    try {
      document.getElementById('display').value = eval(display);
    } catch (error) {
      document.getElementById('display').value = 'Erro';
    }
  }
  