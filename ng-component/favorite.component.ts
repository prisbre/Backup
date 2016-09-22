import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: "favorite",
    template: `
        <i class="glyphicon glyphicon-heart" 
                [class.active]="isFavorite"
                (click)="onClick($event)"></i>
        <span>{{totalFavorites}}</span>`,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        .active {
            color: deeppink;
        }
    `]
})
export class FavoriteComponent {
    @Input("totalLikes: totalFavorites") totalFavorites: number = 0;
    @Input() isFavorite: boolean = false;
    @Output() beFavorited: EventEmitter<{}> = new EventEmitter();
    

    onClick($event): void {
        this.isFavorite = !this.isFavorite;
        this.totalFavorites += this.isFavorite ? 1 : -1;
        this.beFavorited.emit({method: console.log(this.totalFavorites, this.isFavorite)});
    }

}