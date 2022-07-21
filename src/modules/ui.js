import getScores from './getScores.js';

const renderScores = () => {
  const scoresUl = document.querySelector('ul');
  scoresUl.innerHTML = getScores();
};

export default renderScores;