import {Component, Input} from 'angular2/core'

@Component({
    selector: 'bs-panel',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <ng-content select=".heading"></ng-content>
            </div>
            <div class="panel-body">
                <ng-content select=".body"></ng-content>
            </div>
            <div class="panel-footer">
                <ng-content select=".footer"></ng-content>
            </div>
        </div>
    `
})

export class BootstrapPanel {
    @Input() header: string = '';
    @Input() body: string = '';
    @Input() footer: string = '';
}