import { items } from './models/items';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }
  // get data from json file
  getData():Observable<any>{
    return this._HttpClient.get('../assets/data.json')
  }
//search item by id
  getItem(itemId: number){
    return this._HttpClient.get<items[]>('/assets/data.json'). pipe(map(res=>{
      return res.find((item :any)=> item.id == itemId)
  }))}
}
