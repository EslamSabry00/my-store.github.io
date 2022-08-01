import { items } from './../models/items';
import { CartService } from './../cart.service';
import { animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { productPurchased } from '../models/productPurchased';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  //@input ddecorator using
  @Input() dataFromParent:any;
  constructor(private _cart:CartService) { }
  quantity: any=1;
  
  
  //@output ddecorator using
  @Output() productname =new EventEmitter


  //add items to cart
  setToCart(selecteditem:any){
    this._cart.addToCart(
      {
        description:this.dataFromParent.description,
        id :this.dataFromParent.id,
        name :this.dataFromParent.name,
        price :this.dataFromParent.price,
        url :this.dataFromParent.url,
        quantity:this.dataFromParent.quantity,
        totalAmount:this.dataFromParent.price*selecteditem.value
      }
    )
      this.sendData(this.dataFromParent.name)
  } 

  sendData(x:any){
this.productname.emit(x)
  }
  
  cartData: productPurchased[] = this._cart.productPurchasedItems
  ngOnInit(): void {
    console.log(this._cart.productPurchasedItems.find(x=>x.id ===this.dataFromParent.id))
    if(this._cart.productPurchasedItems.find(x=>x.id ===this.dataFromParent.id)!= undefined){
      this.quantity=this._cart.productPurchasedItems.find(x=>x.id ===this.dataFromParent.id)?.quantity
    }
    if(this.dataFromParent.id.fi){
      this.quantity=7
    }
  }

}