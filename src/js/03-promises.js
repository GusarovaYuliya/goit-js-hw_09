import Notiflix from 'notiflix';

const form = document.querySelector(".form");

  const delayInput = null;
  const stepInput = null;
  const amountInput = null;
  
  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
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

  const value = delay.value + step.value;

  for (let i = 1; i <= amount.value; i+= 1) {
    createPromise(i, value)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }  
  };

form.addEventListener('submit', submitHandler);



