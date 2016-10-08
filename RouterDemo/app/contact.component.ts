import {Component} from 'angular2/core';
import {Router, CanDeactivate, CanActivate} from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    constructor(private _router: Router) {};
    
    // template-driven form, can't implement dirty checking 
    // because nowhere refer to form 
    // in t-d form, it's too late to execute dirty check when clicking submit
    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);    // redirect to Albums page after submit
    }

    routerCanDeactivate(next, previous) {
        console.log("next", next);
        console.log("previous", previous);

        // in model-driven form, can execute dirty check like this
        // if (this.form.dirty) {}
        return confirm('Are you sure?');
    }
}