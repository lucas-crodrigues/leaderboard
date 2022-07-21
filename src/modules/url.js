export default class URL {
  static api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

  static gameId = 'yNLjqEafBIwNI7YgMLpw';

  static gameUrl = `${this.api}/games/${this.gameId}/scores/`;
}