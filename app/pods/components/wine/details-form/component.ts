import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'
import Wine from 'playground/models/wine';
interface WineDetailsFormArgs {
    wine: Wine
}

export default class WineDetailsForm extends Component<WineDetailsFormArgs> {

    @tracked title?: string;
    @tracked description?: string;
    @tracked img?: string;
    @tracked price?: number | null;

    constructor(owner: unknown, args: WineDetailsFormArgs) {
        super(owner, args)
        this.title = '';
        this.description = '';
        this.img = '';
        this.price = null;
    }


    @action
    save(e: MouseEvent) {
        e.preventDefault();
        this.args.wine.description = this.description;
        this.args.wine.title = this.title || 'test title';
        this.args.wine.img = this.img
        this.args.wine.price = this.price || 0;
        this.args.wine.save()
    }

    @action
    reset(e: MouseEvent) {
        (e.target as HTMLFormElement).reset();
    }
    @action
    update() {
        this.description = this.args.wine.description;
        this.title = this.args.wine.title
        this.img = this.args.wine.img
        this.price = this.args.wine.price
    }

}
