import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverComponent } from '../../components/popover/popover';
import { OrderlistPage } from '../../pages/orderlist/orderlist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
  }

  presentpop(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
    	ev: myEvent
    });
    
    popover.onDidDismiss(popoverData => {
    console.log(popoverData);
  });

  }

  nav_assignmentlist()
  {
   this.navCtrl.push(OrderlistPage);
  }


}
