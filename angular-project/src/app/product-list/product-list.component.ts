import { items } from './../models/items';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   
  
  constructor(private _dataService:DataService) {   }
  dataset: items[] =[]; 
  ngOnInit(): void {
    
    this._dataService.getData().subscribe({
      next:(data)=>{
      this.dataset=data
      console.log(data)
      console.log(this.dataset)
      },
      error:()=>{

      }
    }) 
  }
   addToCartMessage(x:any){
      alert(x+" added successfully")
    }

}
