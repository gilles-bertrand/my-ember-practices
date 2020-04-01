import Component from '@glimmer/component';
import CartService from 'playground/services/cart-service';
import {inject as service} from '@ember/service'
import {action } from '@ember/object';
import Wine from 'playground/models/wine';

interface ShopUiWineCardArgs {
    item:Wine
}

export default class ShopUiWineCard extends Component<ShopUiWineCardArgs> {
    @service('cart-service') cart!:CartService
    @action
    addToCart(e:MouseEvent){
        e.preventDefault()
        this.cart.addToCart(this.args.item)
    }

}