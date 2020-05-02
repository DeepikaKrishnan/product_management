import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  addItem(item) {
      return this.db.collection("item").add(
        {
          userId: item.userId,
          item_name: item.name,
          price: item.price,
          tax: item.tax
        }
      )
  }

  getItem(userId) {
      return this.db.collection('item', ref => ref.where('userId', '==' , userId)).snapshotChanges();
  }

  deleteItem(id) {
    return this.db.collection('item').doc(id).delete();
  }

  updateItem(id, data) {
    return this.db.collection('item').doc(id).update(data);
  }

  doLogin(user) {
    return this.db.collection('user').add({
      name: user.name,
      password: user.password
    });
  }

  getUser() {
    return this.db.collection('user').get();
}
}
