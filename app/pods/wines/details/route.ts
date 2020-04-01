import Route from '@ember/routing/route';
import Wine from 'playground/models/wine';

export default class WinesDetails extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  model({slug}:{slug:string}){
   return  (this.modelFor('wines') as [Wine]).find((wine:Wine)=>wine.slug === slug)  
  }
}
