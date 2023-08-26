import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  email!:string;
  fullName!:string;
  password!:string;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }


  create(){
    if(this.email && this.password && this.fullName){
     this.userService.register(this.email, this.password).then(registerData=>{
      this.userService.createUser(this.email,this.fullName).then(userData=>{
        this.router.navigateByUrl('/dashboard');
       }).catch(error=>{
        console.log(error);
       });
     }).catch(error=>{
      console.log(error);
     });

    }else{
      alert('try again!');
    }
  }

}
