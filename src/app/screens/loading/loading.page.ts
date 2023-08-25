import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private navController:NavController, private router: Router) { }

  ngOnInit() {
    

    setTimeout(()=>{
      this.navController.navigateForward('/login');
    }, 1000);

    //this.router.navigate(['/login']);
  }

}
