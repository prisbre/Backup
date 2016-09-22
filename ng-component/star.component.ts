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
    @Input() isStar = false;
    @Output() beClicked = new EventEmitter();

    onClick() {
        console.log('Click');
        this.isStar = !this.isStar;
        this.beClicked.emit({newvalue: this.isStar});
    };
};
