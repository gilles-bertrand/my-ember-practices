import Route from '@ember/routing/route';

export default class Wines extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  model(){
    return this.store.query('wine', { fields:'title' });
  }
}
