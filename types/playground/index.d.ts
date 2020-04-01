import Ember from 'ember';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  // interface Function extends Ember.FunctionPrototypeExtensions {}
  // interface Wine {
  //   title:string;
  //   description: string;
  //   img:string;
  //   price:number;
  //   id:string;
  // }
}

export {};
