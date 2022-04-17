import { firebaseDatabase } from "./firebase";

class DatabaseService {
  saveCards(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCards(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }

  syncCards(userId, onUpdate) {
    const dbRef = firebaseDatabase.ref(`${userId}/cards/`);
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => dbRef.off();
  }
}

export default DatabaseService;
