import Notiflix from 'notiflix';

const form = document.querySelector(".form");

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

  const initialDelay = Number(delay.value);
  const stepDelay = Number(step.value);
  const totalAmount = Number(amount.value);

  let currentDelay = initialDelay;

  for (let i = 1; i <= totalAmount; i+= 1) {
    createPromise(i, currentDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    currentDelay += stepDelay;
  }  
  };

form.addEventListener('submit', submitHandler);



