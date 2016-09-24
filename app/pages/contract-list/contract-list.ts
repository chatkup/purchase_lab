import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ContractListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/contract-list/contract-list.html',
})
export class ContractListPage {
  main: any[]
  submain: any[]
  allsubmain: any[]
  contract: any[]
  lnmain: number
  lnsubmain: number

  constructor(private navCtrl: NavController) {
    // ให้เลือกว่าจะลง chem หรือ CBC หรือ DTX
    this.main = [
      { id: 1, name: 'สัญญา Chemistry' },
      { id: 2, name: 'สัญญา CBC' },
      { id: 3, name: 'สัญญา แถบตรวจน้ำตาลปลายนิ้ว' },
    ]
    // ต่อไปต้องดึงสัญญามาตามคนที่ login ว่าอยู่ รพ.ไหน ระดับ S/M/L/XL 
    this.allsubmain = [
      { id: 1, mainId: 1, name: 'S' },
      { id: 2, mainId: 1, name: 'M' },
      { id: 3, mainId: 1, name: 'L' },
      { id: 4, mainId: 1, name: 'XL' },
      { id: 5, mainId: 2, name: 'S' },
      { id: 6, mainId: 2, name: 'M' },
      { id: 7, mainId: 2, name: 'L' },
      { id: 8, mainId: 2, name: 'XL' },
    ]
  }

  getsubmain() {
    this.submain = [];
    let lnmain = this.lnmain;
    this.allsubmain.forEach(v => {
      if (v.mainId == lnmain) {
        this.submain.push(v)
      }
    })
  }

  showselected() {
    console.log(this.lnmain)
    console.log(this.lnsubmain)
  }
}
