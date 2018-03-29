import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-detail',
  templateUrl: 'view-detail.html',
})
export class ViewDetailPage {
 public orderjson;
 itemview:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.orderjson = navParams.get("orderjson");
  	console.log(this.orderjson);
  	this.itemview = [this.orderjson];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewDetailPage');
  }

}
