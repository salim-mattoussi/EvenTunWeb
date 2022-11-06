import { Component, OnInit } from '@angular/core';
import { Payement } from '../model/pay';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {
  pay : Payement;
  constructor() { }

  ngOnInit(): void {
    this.pay= new Payement();
  }
  send(){
    
  }

}
