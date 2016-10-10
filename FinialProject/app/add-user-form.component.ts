import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';

@Component({
    selector: 'add-user',
    templateUrl: 'app/add-user-form.component.html'
})
export class AddUserFormComponent {
    form: ControlGroup;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({

        })
    }


}