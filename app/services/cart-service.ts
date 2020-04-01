import Service from '@ember/service';
import {tracked} from '@glimmer/tracking'
import { set } from '@ember/object';
import Wine from 'playground/models/wine';
interface CartItem{
  wine:Wine,
  qt:number
}
export default class CartService extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  @tracked _items:CartItem[]= [];
 
  get numberOfItems(){
    return this._items.reduce((prev:number,next:CartItem)=>{
      return prev+next.qt;
    },0)
  }

  get total(){
    return this._items.reduce((prev:number,next:CartItem)=>{
      return prev+(next.qt * next.wine.price);
    },0)
  }
  
  get items(){
    return this._items;
  }

  addToCart(wine:Wine)
  {
    let item = this._items.find((item:CartItem) => item.wine === wine);
    item ? set(item,'qt',item.qt+1) :this._items.push({wine,qt:1})
    this._items=[...this._items]
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'cart-service': CartService;
  }
}
