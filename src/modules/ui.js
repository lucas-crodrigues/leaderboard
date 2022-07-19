import { markupScores } from "./scores.js";

export const renderScores = () => {
  const scoresUl = document.querySelector('ul');
  scoresUl.innerHTML = markupScores();
}