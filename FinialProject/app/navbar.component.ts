import {Component} from 'angular2/core';
import {RouterLink, Router} from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: '/app/navbar.component.html',
    directives: [
        RouterLink
    ]
})
export class NavBarComponent {
    constructor(private _router: Router) {};
    
    // get current routing directory
    // compare with parameter
    isCurrentRoute(router): Boolean {
        let instruction = this._router.generate(router);
        return this._router.isRouteActive(instruction);
    };
    
}