import { Component, OnInit } from '@angular/core';
import {food} from '../food';
import {foodService} from '../food.service';


import {items} from '../fooditems';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



  public ProductsComponent : string = "";



  


  lis:food[];
  constructor(private foodservice:foodService) {
   }

  ngOnInit() {
    this.getitems();
  }

  getitems():void{
    this.foodservice.getitems().subscribe(food=>this.lis = food);
    
  }
  incrementitem(food:food){
    for (var v in items)
    {
      if(items[v].id===food.id)
      {
        items[v].Quantity=items[v].Quantity+1;
      }
    }
    // this.foodservice.incre(food);
  }
  decrementitem(food:food){
    for (var v in items)
    {
      if(items[v].id===food.id)
      {
        items[v].Quantity=items[v].Quantity-1;
      }
    }
    // this.foodservice.incre(food);
  }  
  getquan(food:food)
  {
    return food.Quantity;
  }

  getstat(food: food){

   
        return food.day.some(e => e === this.ProductsComponent);
   
    
  }

  setval(st:string){
    this.ProductsComponent="";
    this.ProductsComponent=st;

  }

  add(){

  }
}

