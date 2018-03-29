import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {
  items:any;
  text: string;
  rootPage: any;
  constructor(public navCtrl: NavController) {
    this.items = [{item:'Version'},{item:'Logout'}];
  }
  itemclick(item) {
    if(item.item == "Logout")
    {
      localStorage.removeItem("userData");
      this.navCtrl.push(LoginPage);
      
      
    }
  
  }

}
