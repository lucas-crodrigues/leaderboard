import './styles.css';

import submitScore from './modules/submitScore';

import getScores from './modules/getScores.js';

window.addEventListener('DOMContentLoaded', () => getScores());

document.querySelector('.score-head button').addEventListener('click', () => {
  document.querySelector('ul').innerHTML = '';
  getScores();
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitScore();
  form.reset();
});