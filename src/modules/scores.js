const scores = [
  { name: 'name', score: 100, id: 1 },
  { name: 'name', score: 80, id: 2 },
  { name: 'name', score: 135, id: 3 },
  { name: 'name', score: 115, id: 4 },
  { name: 'name', score: 130, id: 5 },
];

const markupScores = () => {
  let allScores = '';
  scores.forEach((item) => {
    allScores += `
    <li class="user-input" id="u_${item.id}">
      <p class="name" id="n_${item.id}">${item.name}: </p>
      <p class="score" id="s_${item.id}">${item.score}</p>
    </li>
    `;
  });
  return allScores;
};

export default markupScores;
