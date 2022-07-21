const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yNLjqEafBIwNI7YgMLpw/scores/';

const listUl = document.querySelector('ul');

const getScores = () => {
  fetch(url).then(async (response) => {
    const data = await response.json();
    const resultArr = data.result;
    resultArr.sort((a, b) => b.score - a.score);
    return resultArr;
  })
    .then((resultArr) => {
      if (resultArr.length > 30) {
        resultArr.length = 30;
      }
      resultArr.forEach((result, index) => {
        const newscore = document.createElement('li');
        newscore.textContent = `${index + 1} - ${result.user} : ${result.score}`;
        listUl.appendChild(newscore);
      }
    )});
};

export default getScores;