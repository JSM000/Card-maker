import {database} from "./firebase";

class DatabaseService {
  storeCards(userId, cards) {
    database.ref(`cards/${userId}`).set(cards)
  }
}

export default DatabaseService;