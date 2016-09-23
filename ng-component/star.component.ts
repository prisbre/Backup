import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: "star-it",
    template: `
        <i class="glyphicon"
            [class.glyphicon-star-empty]="!isStar"
            [class.glyphicon-star]="isStar"
            (click)="onClick()"></i>`
})

export class StarComponent {
    @Input() isStar: boolean = false;
    @Output() beClicked: EventEmitter<{}> = new EventEmitter();

    onClick(): void {
        console.log('Click');
        this.isStar = !this.isStar;
        this.beClicked.emit({newvalue: this.isStar});
    };
};
