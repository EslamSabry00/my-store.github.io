import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private _cart:CartService) { }

  ngOnInit(): void {
    
  }
fullname:string =this._cart.userName;
totalprice:number =this._cart.totalPrice
}
