/// <reference path="../typings/tsd.d.ts" />

import {Component, OnInit, JSONP_PROVIDERS} from 'angular2/core';
// strip down version of  Observable by Angular team
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs/Rx';
// for best practice
import {FormBuilder, ControlGroup} from 'angular2/common';
// inject service
import {PostService} from './post.service';
import {HTTP_PROVIDERS, Headers, RequestOptions} from 'angular2/http';

@Component({
    selector: 'my-app',
    template: `
        <form [ngFormModel]="form">
            <input id="search" type="text" class="form-control"
                ngControl="search">
            <!-- <div class="btn btn-primary" (click)="showDates()">button</div> -->
            
        </form>
    `,
    providers: [
        PostService,
        HTTP_PROVIDERS,
        JSONP_PROVIDERS
    ]
})
export class AppComponent implements OnInit {
    // constructor(){
        // Callback Hell version
        // var debounced = _.debounce(function(text) {
        //     var url = 'https://api.spotify.com/v1/search?type=artist&q=' + text;
        //     $.getJSON(url, function (artists) {
        //         console.log(artists);
        //     })
        // }, 400);
        // 
        // $('#search').keyup(function(e) {    
        //     var text = e.target.value;            
        //     // control request ammount 
        //     if (text.length < 3) 
        //         return;
        // 
        //     debounced(text);
        // });

        // Observable version
        // the following code Far from reach the BEST practice 
        // as manipulate DOM in component
        
        // let keyups = Observable.fromEvent($('#search'), 'keyup')
        //     .map(e => e.target.value)
        //     .filter(text => text.length >=3)
        //     .debounceTime(400)
        //     .distinctUntilChanged()
        //     // logic in flatMap can wrap in service as API call, 
        //     // like spotifyService.searchArtists
        //     // here just expose to illustrate Rxjs usage
        //     .flatMap(searchTerm => {
        //         let url = 'https://api.spotify.com/v1/search?type=artist&q=' + searchTerm;
        //         let promise = $.getJSON(url);
        //         return Observable.fromPromise(promise);
        //     });
        // keyups.subscribe(data => console.log(data));      
    // }

    // Angular2 best practice version in property binding 
    form: ControlGroup;
    headers: Headers;
    constructor(fb: FormBuilder, private _postService: PostService) {
        this.form = fb.group({
            search: []
        })

        let search = this.form.find('search');
        search.valueChanges
            .filter(text => text.length >=3)
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(searchTerm => {
                let url = 'https://api.spotify.com/v1/search?type=artist&q=' + searchTerm;
                let promise = $.getJSON(url);
                return Observable.fromPromise(promise);
            })
            .subscribe(x => console.log(x));

        // CORS include JSONP_PROVIDERS
        let headers = new Headers({
            'key': 'value'
        });
        let options = new RequestOptions({headers: headers});
        http.post(url, options);
    
    }

    ngOnInit() {
         this._postService.getPosts()
            .subscribe(post => console.log(post[0].body));
    }
    
    




    // a few Observable feature test:
    // startDates = [];
    // startDate = new Date();
    
    // showDates() {
        // let day: number;
        // for (day = 1; day <= 2; day++) {
        //     var date = new Date(
        //         this.startDate.getFullYear(),
        //         this.startDate.getMonth(),
        //         this.startDate.getDate() + day
        //     );
        //     this.startDates.push(date);
        // };

        // let a = Observable
        //     .fromArray(this.startDates)
        //     .map(date => {
        //         console.log("Getting deals for date" + date);
        //         return [1, 2, 3];
        //     });
            
    
        // Observable.of(['a', 'b'])
        //     .subscribe(x => console.log(x));

        // a.subscribe(x => console.log(x));


        // Observable.interval(1000)
        //     .subscribe(x => console.log(x));

        // let b = Observable.throw(new Error('fasdf'));
        // b.subscribe(
        //     x => console.log(x), 
        //     error => console.log(error)
        // );

        // b.retry(2);
        // let count = 0;
        // let ajax = Observable.of('url')
        //     .flatMap(() => {
        //         if (++count < 2) {
        //             return Observable.throw(new Error('Request later'));
        //         }
        //         return Observable.of('afds');

        //     });
        // ajax.retry(3)
        //     .subscribe(
        //     x => console.log(x),
        //     error => console.log(error)
        // )

        // let remoteDateStream = Observable.throw(
        //     new Error('Something failed')
        // );

        // let remoteDateStream = Observable.of('ewrfd');
        // remoteDateStream
        //     .catch(error => {
        //         let localDateStream = Observable.of('34wrf');
        //         return localDateStream;
        //     })
        //     .subscribe(
        //         x => console.log(x),
        //         error => console.log(error),
        //         () => console.log('completed'));
    // };


}





