import {Component} from 'angular2/core';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';

@Component({
    selector: 'add-user',
    templateUrl: 'app/add-user-form.component.html'
})
export class AddUserFormComponent {
    form: ControlGroup;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            user: fb.group({
                name: ['', Validators.required],
                email: ['', Validators.required],
                phone: ['', Validators.required]
            }),
            address: fb.group({
                street: ['', Validators.required],
                suite: ['', Validators.required],
                city: ['', Validators.required],
                zipcode: ['', Validators.required]
            })
        });
    }


}