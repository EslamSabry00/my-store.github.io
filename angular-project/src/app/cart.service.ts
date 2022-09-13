import { items } from './models/items';
import { Injectable, OnInit } from '@angular/core';
import { productPurchased } from './models/productPurchased';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  productPurchasedItems:productPurchased[]  = [] ;
  indexOfAddedProduct: number =0.5;
  totalPrice:number = 0;
  userName: string='';

  constructor(private route:Router) {  }
 //Add to cart function
  addToCart(item:productPurchased){
    let indexOfAddedProduct =0.5
    //0.5 is an initial value for id index
    for(let i=0;i < this.productPurchasedItems.length; i++){
      if(this.productPurchasedItems[i].id == item.id){
        indexOfAddedProduct= i;
        break;
      }else{
        indexOfAddedProduct = 0.5;

      }
    }
    if(indexOfAddedProduct != 0.5){
      this.productPurchasedItems[indexOfAddedProduct].quantity =item.quantity;
      this.productPurchasedItems[indexOfAddedProduct].totalAmount = item.totalAmount;
    }else{
    this.productPurchasedItems.push({
      description: item.description,
      id: item.id,
      name: item.name,
      price: item.price,
      url: item.url,
      quantity: item.quantity,
      totalAmount: item.totalAmount
    })}
    this.productPurchasedItems = this.productPurchasedItems
  }

 //calculat total price
  totalPricecalc(){
    this.totalPrice=0
    for(let i=0; i<this.productPurchasedItems.length;i++){
      this.totalPrice += this.productPurchasedItems[i].totalAmount;
    }
    return this.totalPrice
  }

 //deleat from cart
  deleatFromCart(id:number,productPurchasedItems:productPurchased[],item:items){
    
    for(let i=0;i < productPurchasedItems.length; i++){
      
      if(productPurchasedItems[i].id == item.id){
        
        productPurchasedItems.splice(i,1);
        alert('product deleated from cart')
        break;
      }
    }
  }

// set username to service property
  setUserData(fulluserName:any){
    this.userName =fulluserName;
  }

// clear after submition
  clear(){
    this.productPurchasedItems =[];
  }
} 