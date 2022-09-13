import { productPurchased } from './../models/productPurchased';
import { items } from './../models/items';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  itemId:any;
  quantity!: number;
  itemToShow:any;
  constructor(private route: ActivatedRoute,private _dataService:DataService,private _cart:CartService) { }

  //add to cart
  setToCart(selecteditem:any){
    console.log(selecteditem.value)
    this._cart.addToCart(
      {
        description:this.itemToShow.description,
        id :this.itemToShow.id,
        name :this.itemToShow.name,
        price :this.itemToShow.price,
        url :this.itemToShow.url,
        quantity:this.itemToShow.quantity,
        totalAmount:this.itemToShow.price*selecteditem.value
      }
    )

  } 
  cartData: productPurchased[] = this._cart.productPurchasedItems
  
  ngOnInit(): void {
    this.itemId=this.route.snapshot.paramMap.get("id");
    this._dataService.getItem(this.itemId).subscribe(res=>{
      this.itemToShow = res
       console.log(this.itemToShow)
    })
  }
  
}
