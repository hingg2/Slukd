let secret = Math.floor(Math.random() * 100) + 1;
let tries = 0;
const guess = document.getElementById('guess');
const message = document.getElementById('message');
const triesEl = document.getElementById('tries');

document.getElementById('check').addEventListener('click', () => {
  const n = Number(guess.value);
  if (!n || n < 1 || n > 100) { message.textContent = 'Введіть число від 1 до 100'; return; }
  tries++;
  triesEl.textContent = tries;
  if (n === secret) message.textContent = 'Правильно! 🎉';
  else if (n < secret) message.textContent = 'Більше ⬆️';
  else message.textContent = 'Менше ⬇️';
});

document.getElementById('restart').addEventListener('click', () => {
  secret = Math.floor(Math.random() * 100) + 1;
  tries = 0;
  triesEl.textContent = 0;
  message.textContent = '';
  guess.value = '';
});
