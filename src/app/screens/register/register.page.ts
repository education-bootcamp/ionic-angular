import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  email!:string;
  fullName!:string;
  password!:string;

  constructor(private firebaseAuth:AngularFireAuth) { }

  ngOnInit() {
  }


  create(){
    if(this.email && this.password && this.fullName){
      
      this.firebaseAuth.createUserWithEmailAndPassword(
        this.email,this.password
      ).then(response=>{
        console.log(response);
        
      }).catch(error=>{
        console.log(error);
        
      });

    }else{
      alert('try again!');
    }
  }

}
