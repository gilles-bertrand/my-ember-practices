import Model, { attr } from '@ember-data/model';
import { dasherize } from '@ember/string';
export default class Wine extends Model{
  // normal class body definition here
  @attr()
  title!: string;
  @attr()
  description?: string;
  @attr()
  img?:string;
  @attr()
  price?:number
  get slug():string{
    return dasherize(this.title);
  }
}
declare module "ember-data" {
  interface ModelRegistry {
    person: Wine;
  }
}
 