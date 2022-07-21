const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yNLjqEafBIwNI7YgMLpw/scores/';

const listUl = document.querySelector('ul');

const getScores = () => {
  fetch(url).then(async (response) => {
    const data = await response.json();
    const resultArr = data.result;
    console.log(resultArr);
    return resultArr;
  })
  .then((resultArr) => {
    for (let i = 0; i < 11; i += 1) {
      const newscore = document.createElement('li');
      newscore.textContent = `${resultArr[i].user} : ${resultArr[i].score}`;
      listUl.appendChild(newscore);
    }
  });
};

export default getScores;