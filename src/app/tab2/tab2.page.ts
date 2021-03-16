import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  num : number;
  test : string;
  rand : number;
  betul : boolean;
  constructor() {}
  result(){
    var randNumber = Math.floor(Math.random() * 11)
    randNumber = randNumber % 10;
    this.rand = randNumber;
    if(this.num == randNumber){
      this.test = "win"
      this.betul = true;
    }
    else{
      this.test = "noob"
      this.betul = false;
    }
  }

}
