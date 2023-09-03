// all modules
import Notiflix from 'notiflix';

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

const delayInput =
const stepInput = 
const amountInput =
  
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

const promises = [];

for (let i = 0; i < amountInput; i++) {
      const delay = delayInput + i * stepInput;
      const promise = createPromise(i + 1, delay);

      promise
        .then(({ position, delay }) => {
          Notiflix.Notify.Success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.Failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });

      promises.push(promise);
    }



