import {Component, OnInit} from 'angular2/core';
import {UsersService} from './users.service';
import {HTTP_PROVIDERS} from 'angular2/http';    

@Component({
    selector: 'users',
    template: `
        <h1>Users here</h1>
        <table class="table table-bordered" >
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tr *ngFor="let user of userList">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td><i class="glyphicon glyphicon-edit"></i></td>
                <td><i class="glyphicon glyphicon-delete"></i></td>
            </tr>
        </table>
    `,
    providers: [UsersService, HTTP_PROVIDERS]
})
export class UsersComponent implements OnInit {
    public userList;
    constructor(private _users: UsersService) {};

    ngOnInit() {
        this._users.getUsers()
            .subscribe(data => {
                this.userList = data;
            })
    }
}