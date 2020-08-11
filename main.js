
import { suma, resta } from './data.js';


const numberOne = document.getElementById('num1');
const numbreTwo = document.getElementById('num2');
const btnSumar = document.getElementById('btnS');
const btnRestar = document.getElementById('btnR');

btnSumar.addEventListener('click', () => {
  const a = parseInt(numberOne.value);
  const b = parseInt(numbreTwo.value);
  result = suma(a,b);
  document.getElementById('result').innerHTML= result;
});

btnRestar.addEventListener('click', () => {
  const a = parseInt(numberOne.value);
  const b = parseInt(numbreTwo.value);
  result = resta(a,b);
  document.getElementById('result').innerHTML= result;
});
