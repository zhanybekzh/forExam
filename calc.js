const calcSquare = (a) => {
  return Number(a)*Number(a);
}
const calcPerimeter = (a, b) => {
  return (Number(a) +Number(b)) * 2 ;
}       
const squareBtn = document.querySelector('#calcSquareBtn');
const perimeterBtn = document.querySelector('#calcPerimeterBtn');

const perimterValue = document.querySelector('#perimeterValue');
const squareValue = document.querySelector('#squareValue');

squareBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const form = e.target.closest('form');
  const formData = new FormData(form);
  const rebroA = formData.get('rebroA');
  if(!rebroA) {
      alert('Введите длину ребра А');
  } else {
      const result = calcSquare(rebroA);
      squareValue.textContent = result;
  }  
})
perimeterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const form = e.target.closest('form');
  const formData = new FormData(form);
  const rebroA = formData.get('rebroA');
  const rebroB = formData.get('rebroB');
  if(!rebroA) {
      alert('Введите длину ребра А');
  } else if(!rebroB) {
      alert('Введите длину ребра B');
  } else {
      const result = calcPerimeter(rebroA, rebroB);
      perimterValue.textContent = result;
  }
})
const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', () => {
  squareValue.textContent = 0;
  perimterValue.textContent = 0;
})