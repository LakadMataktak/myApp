import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoadingController } from 'ionic-angular';
import { ViewDetailPage } from '../../pages/view-detail/view-detail';


@IonicPage()
@Component({
  selector: 'page-orderlist',
  templateUrl: 'orderlist.html',
})
export class OrderlistPage {
items:any;
 text: string;
 responseData: any;
 loader: any;
 errors: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider,  public loadingCtrl: LoadingController,) {

  	this.getorderlist();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderlistPage');
  }

  getorderlist()
  {
  	  	let params = "";
    this.presentLoading();
  	this.auth.postData(params, "req_orderlist.php").then((result) => {
 
  		this.responseData = result;
 
  	  this.loader.dismiss();
  	
  		this.items = this.responseData;
  		
  	}, (err) => {
  		this.loader.dismiss();
  		this.errors = [{"msg" : "Please Connect to internet."}]
  		
  	});
  }

  onInput($event)
  {

  }

  onCancel($event)
  {

  }

  view_detail($param)
  {
  	this.navCtrl.push(ViewDetailPage, {
  		orderjson : $param
  	});
  }

  presentLoading() {
        this.loader = this.loadingCtrl.create({
          content: 'Please wait...',
        });

        this.loader.present();
      }

}
