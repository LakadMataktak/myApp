import { Component } from '@angular/core';

import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  loader: any;
  constructor( public auth : AuthProvider, public loadingCtrl: LoadingController) {
      this.presentLoading();
  		this.auth.isset_login().then(isLoggedIn => {
      this.loader.dismiss();
        if(isLoggedIn == "FALSE")
        {
          this.rootPage = LoginPage;
        } else {

         this.rootPage = TabsPage;
	  	}
        
      });
  }


    presentLoading() {
        this.loader = this.loadingCtrl.create({
          content: 'Please wait...',
        });

        this.loader.present();
      }


}
