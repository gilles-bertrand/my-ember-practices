import Component from '@glimmer/component';
import Wine from 'playground/models/wine';
import {action} from '@ember/object'
import { queryParam } from 'ember-query-params-service';

interface ShopUiArgs {
    items:Wine[]
}

export default class ShopUi extends Component<ShopUiArgs> {
    possibleSortFields:string[] = ['title','price'];
    possibleDirections:string[] = ['asc','desc'];
    
    @queryParam sortField?:string;
    @queryParam sortDirection?:string;
    // @alias('queryParams.current.sortField') sortField?:string;
    // @alias('queryParams.current.sortDirection') sortDirection?:string;
    
    selectOptions=[
        {name:'sort by title asc' , value:1},
        {name:'sort by title desc' , value:2},
        {name:'sort by price asc' , value:3},
        {name:'sort by price desc' , value:4},
    ]
    
    get sortedItems(){
       if(this.sortField && this.possibleSortFields.includes(this.sortField)){
           if(this.sortDirection ==='asc'){
            return this.args.items.sortBy(this.sortField)
           } else{
            return this.args.items.sortBy(this.sortField).reverse()
           }

       }
       return this.args.items;
    }
    @action
    onSelectOption(value:number){
        switch (value) {
            case 1:
                this.sortField='title';
                this.sortDirection='asc';
                break;
            case 2:
                this.sortField='title'
                this.sortDirection='desc';
                break;
            case 3:
                this.sortField='price'
                this.sortDirection='asc';
                break;
            case 4:
                this.sortField='price'
                this.sortDirection='desc';
                break;
            default:
                console.log('default')
                break;
        }
    }

}
