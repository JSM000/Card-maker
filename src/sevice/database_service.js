import { firebaseApp } from "./firebase";

class DatabaseService {
  saveCards(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCards(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }

  syncCards(userId, onUpdate) {
    const dbRef = firebaseApp.database().ref(`${userId}/cards/`);
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => dbRef.off();
  }
}

export default DatabaseService;
