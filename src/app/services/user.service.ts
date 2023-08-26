import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore:AngularFirestore, private firebaseAuth:AngularFireAuth) { }

  register(email:string, password:string):Promise<any>{
     return this.firebaseAuth.createUserWithEmailAndPassword(
       email,password
      )
  }
  
  login(email:string, password:string):Promise<any>{
    return this.firebaseAuth.signInWithEmailAndPassword(
      email,password
     )
 }

  createUser(email:string, name:string):Promise<any>{
    return this.firestore.collection('users').add({
      email:email,
      name:name
    });
  }

}
