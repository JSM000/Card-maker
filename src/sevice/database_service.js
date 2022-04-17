import { database } from "./firebase";

class DatabaseService {
  storeCards(userId, cards) {
    database.ref(`cards/${userId}`).set(cards);
  }

  readCards(userId, onUpdate) {
    const dbRef = database.ref(`cards/${userId}`);
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return dbRef.off;
  }
}

export default DatabaseService;
