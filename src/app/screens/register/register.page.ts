import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  email!:string;
  fullName!:string;
  password!:string;

  constructor() { }

  ngOnInit() {
  }


  create(){
    if(this.email && this.password && this.fullName){
        // save
    }else{
      alert('try again!');
    }
  }

}
