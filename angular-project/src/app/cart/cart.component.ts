import { items } from './../models/items';
import { productPurchased } from './../models/productPurchased';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Router,Route } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  submitForm =new FormGroup({
    username: new FormControl('', [Validators.required,Validators.minLength(3)]),
    address: new FormControl('', [Validators.required,Validators.minLength(6)]),
    credit: new FormControl('', [Validators.required,Validators.minLength(16), Validators.maxLength(16),Validators.pattern("^[0-9]*$") ])
  })
  constructor(private _cart:CartService,private route:Router) { }
  data: productPurchased[] =this._cart.productPurchasedItems
  calcTotalPrice:number = this._cart.totalPricecalc()
  deleatFromCart:Function = this._cart.deleatFromCart
  newQuantity: number= 1;
  totalPrice:number=0

  //oninit
  ngOnInit(): void {
console.log()
  }
  
  //function run when user submit order
  onSubmit(){
    this._cart.setUserData(this.submitForm.get('username')?.value);
    this.route.navigate(['/confirm']);
    this._cart.clear();
  }


  //function on change in quantity input
  onChange(quantity:any, item:productPurchased){
    if(quantity>=0 ){
    this._cart.addToCart(
      {
        description:item.description,
        id :item.id,
        name :item.name,
        price :item.price,
        url :item.url,
        quantity:item.quantity,
        totalAmount:item.price*quantity
      }
    )
    this._cart.totalPrice=this._cart.totalPricecalc();
    this.calcTotalPrice= this._cart.totalPricecalc();
  }else{
    alert('quantity should be positive numper')
  }
  }

}

