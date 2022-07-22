const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yNLjqEafBIwNI7YgMLpw/scores/';

const submitScore = () => {
  const userInput = document.querySelector('.user-input').value;
  const scoreInput = document.querySelector('.score-input').value;

  fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      user: userInput,
      score: Number(scoreInput),
    }),
  });
};

export default submitScore;
