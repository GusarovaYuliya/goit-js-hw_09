import '../css/common.css';
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
  
  for (let i = 0; i < amountInput; i++) {
    const delay = delayInput + i * stepInput;
    const promise = createPromise(i + 1, delay);

    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    promises.push(promise);
  };

  });