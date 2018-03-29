import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../../pages/tabs/tabs';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
formgroup:FormGroup;
username:AbstractControl;
password:AbstractControl;
responseData: any;
loader: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public formbuilder: FormBuilder) {
  		   
          this.formgroup = formbuilder.group({
          username:['', Validators.required],
          password:['', Validators.required]
        });
      


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  login(){
    this.username = this.formgroup.controls['username'];
    this.password = this.formgroup.controls['password'];

  	let loginData = "username="+ this.username.value + "&password=" + this.password.value;
    this.presentLoading();
  	this.auth.postData(loginData, "req_login.php").then((result) => {
 
  	this.responseData = result;
 
  	  this.loader.dismiss();
  		if(this.responseData.err == 0)
  		{
  		localStorage.setItem("userData", this.responseData);
  		this.navCtrl.push(TabsPage);
  		} else {
  			this.showAlert(this.responseData.msg);
  		}
  	}, (err) => {
  		
  		this.showAlert("Please Turn on Your Internet.");
  	});
  }

  showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  presentLoading() {
        this.loader = this.loadingCtrl.create({
          content: 'Please wait...',
        });

        this.loader.present();
      }


}
