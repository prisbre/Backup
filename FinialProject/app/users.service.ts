import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {User} from './user.interface';

@Injectable()
export class UsersService {
    private _url: string = 'https://jsonplaceholder.typicode.com/users'
    constructor(private _http: Http) {};

    getUsers(): Observable<User[]> {
        return this._http.get(this._url)
            .map(res => {console.log(res); return res.json()});
    }
}