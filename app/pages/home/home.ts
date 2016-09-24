import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContractListPage} from '../contract-list/contract-list';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  
  }
  go2contractPage() {
    this.navCtrl.push(ContractListPage)
  }


}
