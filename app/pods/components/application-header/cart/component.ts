import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import CartService from 'playground/services/cart-service';
import {action } from '@ember/object';
import { tracked } from '@glimmer/tracking'; 
 
interface ApplicationHeaderCartArgs {}

export default class ApplicationHeaderCart extends Component<ApplicationHeaderCartArgs> {
    @service('cart-service')
    cart!: CartService;
    @tracked isMenuActive: Boolean = false;
    @action
    open(e:MouseEvent){
        e.preventDefault();
        this.isMenuActive = !this.isMenuActive;
    } 
}
