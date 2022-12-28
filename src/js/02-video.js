// Напиши скрипт который будет сохранять текущее время воспроизведения видео в локальное хранилище и,
// при перезагрузке страницы, продолжать воспроизводить видео с этого времени.

// ✅ 1. Добавь библиотеку Vimeo как зависимость проекта через npm.
// ✅ 2. Инициализируй плеер в файле скрипта как это описано в секции pre-existing player,
// но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
// ✅ 3. Разбери документацию метода on(),
// и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// ✅ 4. Сохраняй время воспроизведения в локальное хранилище.
// Пусть ключом для хранилища будет строка "videoplayer-current-time".
// ✅ 5. При перезагрузке страницы воспользуйся методом setCurrentTime()
// для того, чтобы возобновить воспроизведение с сохраненной позиции.
// ✅ 6. Добавь в проект библиотеку lodash.throttle и сделай так,
// чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_TIME = 'videoplayer-current-time';

setCurrentPlaybackTime();
player.on('timeupdate', throttle(setTimeToLocal, 1000));

function setTimeToLocal(e) {
  const time = e.seconds;
  localStorage.setItem(KEY_TIME, JSON.stringify(time));
}
function getTimeFromLocal() {
  return JSON.parse(localStorage.getItem(KEY_TIME));
}
function setCurrentPlaybackTime() {
  player
    .setCurrentTime(getTimeFromLocal())
    .then(function (seconds) {
      const min = Math.round(seconds / 60);
      console.log(`Start watching from ${min} minutes`);
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          alert(
            'The time was less than 0 or greater than the video’s duration??!'
          );
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
