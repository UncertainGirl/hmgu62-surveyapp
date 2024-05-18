import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';

  constructor(private afs: AngularFirestore) {}

  //Create
  create(user: User) {
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }
  //Read
  getAll() {
    return this.afs.collection<User>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<User>(this.collectionName).doc(id).valueChanges();
  }
  //Update
  update(user: User) {
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }
  //Delete
  delete(id: string) {
    return this.afs.collection<User>(this.collectionName).doc(id).delete();
  }
}
