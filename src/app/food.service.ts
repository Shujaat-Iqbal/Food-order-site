import { Injectable } from '@angular/core';
import {food} from './food';
import {items} from './fooditems';
import  {Observable,of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
/**Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service. */
export class foodService {
/**The previous version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
That won't work when the HeroService is actually making requests of a remote server.
The new version waits for the Observable to emit the array of heroes— which could happen now or several minutes from now. Then subscribe passes the emitted array to the callback, which sets the component's heroes property. */
 constructor() { }
getitems():Observable<food[]>{
  return of(items);
}  
getitem(id: number): Observable<food> {
  // TODO: send the message _after_ fetching the hero
  return of(items.find(hero => hero.id === id));
}

incre(food:food){
  for (var v in items)
  {
    if(items[v].id===food.id)
    {
      items[v].Quantity=items[v].Quantity+1;
    }
  }

}


}
