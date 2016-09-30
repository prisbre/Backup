/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
// limit version of Observable by Angular team
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
    `
})
export class AppComponent {
    constructor(){
        // the Callback Hell version
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
        

        let keyups = Observable.fromEvent($('#search'), 'keyup')
            .map(e => e.target.value)
            .filter(text => text.length >=3)
            .debounceTime(400)
            .distinctUntilChanged()
            // logic in flatMap can wrap in service as API call, 
            // like spotifyService.searchArtists
            // here just expose to illustrate Rxjs usage
            .flatMap(searchTerm => {
                let url = 'https://api.spotify.com/v1/search?type=artist&q=' + searchTerm;
                let promise = $.getJSON(url);
                return Observable.fromPromise(promise);
            });

        keyups.subscribe(data => console.log(data));
        
        console.log(new Observable());
        
        
    }
}

