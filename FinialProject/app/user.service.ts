import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

// import {Observable} from 'rxjs/Rx';  
// BUG here: not include map function. Recommend to use strip down version
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {User} from './user.interface';

@Injectable()
export class UserService {
    private _url: string = 'https://jsonplaceholder.typicode.com/users'
    constructor(private _http: Http) {};

    getUsers() {
        return this._http.get(this._url)
            // .subscribe(data => console.log(data));
            .map(res => res.json());
    }
}