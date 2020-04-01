import Component from '@glimmer/component';
import {action} from '@ember/object';
import { tracked} from '@glimmer/tracking';
interface UiSelectUiArgs {
    select:any
}

export default class UiSelectUi extends Component<UiSelectUiArgs> {
    @tracked
    isOptionsListVisible : Boolean = false;
    @tracked
    seletedValue?: unknown;
    @action
    toggle(e:MouseEvent){
        e.preventDefault();
        this.isOptionsListVisible = !this.isOptionsListVisible;
    }
    @action
    sendValue(value:number){
        this.toggle(new MouseEvent('click'))
        this.seletedValue = value;
        this.selectValueEvent();
    }
    selectValueEvent(){
        this.args.select(this.seletedValue);
    }


}
