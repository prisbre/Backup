import {Component, OnInit} from 'angular2/core';
import {UserService} from './user.service';
import {HTTP_PROVIDERS} from 'angular2/http';    

@Component({
    selector: 'users',
    template: `
        <h1>Users</h1>
        <div class="row">
            <div class="col-md-6 well" >
                <table class="table table-bordered" >
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tr *ngFor="#user of users">
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td><i class="glyphicon glyphicon-edit"></i></td>
                        <td><i class="glyphicon glyphicon-remove"></i></td>
                    </tr>
                </table>
            </div>
            <div class="col-md-6">
                Other content...
            </div>
        </div>
         

    `,
    providers: [UserService, HTTP_PROVIDERS]
})
export class UsersComponent implements OnInit {
    public users;
    constructor(private _service: UserService) {};

    ngOnInit() {
        this._service.getUsers()
            .subscribe(
                users => {
                    // console.log(users);
                    this.users = users;
                },
                error => console.log(error)
            )
    }
}