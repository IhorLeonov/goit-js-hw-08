// Напиши скрипт который будет сохранять значения полей в локальное хранилище
// когда пользователь что - то печатает.

// ✅ 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект
// с полями email и message, в которых сохраняй текущие значения полей формы.
// Пусть ключом для хранилища будет строка "feedback-form-state".
// ✅ 2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные,
// заполняй ими поля формы.В противном случае поля должны быть пустыми.
// ✅ 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email,
// message и текущими их значениями в консоль.
// ✅ 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
// Для этого добавь в проект и используй библиотеку lodash.throttle.

import {
  saveKeyToLocal,
  loadKeyFromLocal,
  removeKeyFromLocal,
} from './storage.js';

const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const KEY_DATA = 'feedback-form-state';

form.addEventListener('input', throttle(saveDataToLocal, 500));
form.addEventListener('submit', onFormSubmit);

let storage = {
  email: '',
  message: '',
};

loadDataFromLocal();

function saveDataToLocal(e) {
  if (e.target.tagName === 'INPUT') {
    storage.email = e.target.value;
  }
  if (e.target.tagName === 'TEXTAREA') {
    storage.message = e.target.value;
  }
  saveKeyToLocal(KEY_DATA, storage);
}

function loadDataFromLocal() {
  if (loadKeyFromLocal(KEY_DATA)) {
    storage = loadKeyFromLocal(KEY_DATA);
  }

  if (storage.email !== '') {
    input.value = storage.email;
  }

  if (storage.message !== '') {
    textarea.value = storage.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  removeKeyFromLocal(KEY_DATA);
  storage.email = '';
  storage.message = '';
  console.log(storage);
}
