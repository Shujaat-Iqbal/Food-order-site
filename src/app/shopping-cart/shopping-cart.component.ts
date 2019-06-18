
import {food} from '../food';
import {foodService} from '../food.service';

import {items} from '../fooditems';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  lis:food[];
  constructor(private foodservice:foodService) { }

  ngOnInit() {
    this.getitems();
  }

  getitems():void{
    this.foodservice.getitems().subscribe(food=>this.lis = food);
    
  }

  caliprice(food:food){
    for (var v in items)
    {
      if(items[v].id===food.id)
      {
        items[v].tprice=items[v].Quantity*items[v].price;
      }
    }
  }
}

