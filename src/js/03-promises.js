// all modules
import Notiflix from 'notiflix';

const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const delayInput = document.querySelector(".delay");
  const stepInput = document.querySelector(".step");
  const amountInput = document.querySelector(".amount");
  const submitButton = document.querySelector(".submit");

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