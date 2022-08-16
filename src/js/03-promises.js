import Notiflix from 'notiflix';

const form = document.querySelector('.form')
const promiseDelay = document.querySelector('[name="delay"]');
const promiseStep = document.querySelector('[name="step"]');
const promiseAmount = document.querySelector('[name="amount"]');
const buttonStart = document.querySelector('button')
let startPosition = null;
let delay = null;
let amount = null;
let position = 1;

form.addEventListener('input', onFormInput)
buttonStart.addEventListener('click', onStartClick);

function onFormInput() {
  onDelayInputValue();
  onStepInputValue();
  onAmountInputValue();
}
function onDelayInputValue() {
  startPosition = Number(promiseDelay.value);
  if (promiseDelay.value === '') {
    startPosition = 0;
  }
  console.log(startPosition);
}


function onStepInputValue() {
  delay = Number(promiseStep.value);
  if (promiseStep.value === '') {
    delay = 0;
  }
  console.log(delay)
}


function onAmountInputValue() {
  amount = Number(promiseAmount.value);
  if (promiseAmount.value === '') {
    amount = 0;
    
  }
  console.log(amount)
}


function onStartClick(e) {
  e.PreventDefault();
for (let i = 1; i <= amount; i ++){
    position = i;
    if (i === 1) {
      delay += startPosition;
      console.log(delay);
    }
    else {
      delay += step;
      console.log(delay);
    
    }
    
    createPromise(position,delay).then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  })
      .catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
    
  });
    
  }
  // e.target.reset()
  // console.log(delay);
}

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
        resolve({ position, delay });
      } else {
        reject({ position, delay});
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`)
    }
    },delay )
  }
  )

}
