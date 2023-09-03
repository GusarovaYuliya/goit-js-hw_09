import '../css/common.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';

const form = document.querySelector(".form");

  const delayInput = null;
  const stepInput = null;
  const amountInput = null;
  

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
  
const submitHandler = e => {
  e.preventDefault();

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  // delayInput += (delay.value);
  // stepInput += (step.value);
  // amountInput += (amount.value);

  for (let i = 1; i <= amountInput; i+= 1) {
    createPromise(i, delayInput)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayInput += stepInput;
  }
      
  };

form.addEventListener('submit', submitHandler);



