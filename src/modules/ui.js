import markupScores from './scores.js';

const renderScores = () => {
  const scoresUl = document.querySelector('ul');
  scoresUl.innerHTML = markupScores();
};

export default renderScores;