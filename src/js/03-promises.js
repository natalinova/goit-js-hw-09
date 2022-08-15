const promiseDelay = document.querySelector('[name="delay"]');
const promiseStep = document.querySelector('[name="step"]');
const promiseAmount = document.querySelector('[name="amount"]');
const buttonStart = document.querySelector('button')


buttonStart.addEventListener('click', onStartClick);
function onStartClick(e) {
  e.PreventDefault();
  const startPosition = promiseDelay.value;
  // console.log(startPosition)
  const step = promiseStep.value;
  console.log(step)
  const amount = promiseAmount.value;
  console.log(amount)
  let delay = 0;
  for (i = 1; i <= amount; i ++){
    const position = i;
    console.log(position)
    if ((i === 1)) {
      delay += startPosition;
    }
    else {
      delay += step;
    }
    console.log(delay);
    
    createPromise(position,delay)
  .then(({position, delay}) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    
  }
  e.target.reset()
  console.log(delay);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (shouldResolve) {
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`)
    }
    }, delay )
    
  }
  )
  return promise
}
