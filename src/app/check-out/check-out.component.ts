import {food} from '../food';
import {foodService} from '../food.service';

import {items} from '../fooditems';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {


  public CheckOutComponent : number = null;



  lis:food[];
  constructor(private foodservice:foodService) { 
    for (var v in items)
    {
      
        items[v].tprice=items[v].Quantity*items[v].price;
      
    }
    var t=0;
    for (var v in items)
    {
      
        this.CheckOutComponent=this.CheckOutComponent+items[v].tprice;
      
    }
  }

  ngOnInit() {
    this.getitems();
  }

  getitems():void{
    this.foodservice.getitems().subscribe(food=>this.lis = food);
    
  }

  getquan(food:food)
  {
    return food.Quantity;
  }
  
  caliprice(food:food){
    for (var v in items)
    {
      if(items[v].id===food.id)
      {
        items[v].tprice=items[v].Quantity*items[v].price;
      }
    }
    var t=0;
    for (var v in items)
    {
      if(items[v].id===food.id)
      {
        this.CheckOutComponent=this.CheckOutComponent+items[v].tprice;
      }
    }
  }
}
