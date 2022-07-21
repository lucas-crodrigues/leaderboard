const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yNLjqEafBIwNI7YgMLpw/scores/';

const submitScore = () => {
  const userInput = document.querySelector('.user-input').value;
  const scoreInput = document.querySelector('.score-input').value;

  fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      user: userInput,
      score: scoreInput,
    }),
  });
};

export default submitScore;









// const submitScore = async (score) => {
//   const response = await fetch(URL.gameUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: score,
//   });
//   const responseData = await response.json();
//   return responseData;
// }

// export default () => {
//   const form = document.querySelector('form');
//   const userInput = document.querySelector('.user-input');
//   const scoreInput = document.querySelector('.score-input');
//   const warning = document.querySelector('.warning');

//   form.onsubmit = (e) => {
//     e.preventDefault();

//     const scoreIn = JSON.stringify({
//       user: userInput.value,
//       score: Number(scoreInput.value),
//     });

//     warning.classList.remove('success');
//     warning.classList.remove('danger');
//     warning.innerText = '';

//     submitScore(scoreIn).then(
//       (response) => {
//         console.log('sucess');
//         warning.classList.add('success');
//         warning.innerText = `${response.result} \nClick Refresh for updates`;
//         form.reset();
//       },
//       (error) => {
//         console.log('error');
//         warning.classList.add('danger');
//         warning.innerText = error;
//       },
//     );
//   };
// }


