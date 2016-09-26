import {Component} from 'angular2/core';
// import {CourseComponent} from './course.component'
import {StarComponent} from './star.component'
import {FavoriteComponent} from './favorite.component'
import {VoteComponent} from './vote.component'
import {SummaryPipe} from './summary.pipe'

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        // <course></course>    
        <star-it [isStar]="post.isStar"
            (beClicked)="onState($event)"></star-it>
        <favorite [totalLikes]="post.totalLikes"
            [isFavorite]="user.isFavorite"
            (beFavorite)="onFavorite($event)"></favorite>
        <vote [userVote]="user.vote"
            [totalVotes]="post.totalVotes"
            (beVoted)="onVote($event)"></vote>
        <br>
        <p>{{post.body | summary}}</p>`,
    directives: [
        // CourseComponent,
        StarComponent,
        FavoriteComponent,
        VoteComponent
    ],
    pipes: [
        SummaryPipe
    ]
})
export class AppComponent { 
    user: Object = {
        isFavorite: true,
        vote: 1
    }
    post: Object = {
        title: "Title",
        isStar: true,
        totalLikes: 1000,
        totalVotes: 1802,
        body: `Non minim adipisicing laborum reprehenderit excepteur quis irure minim laborum ut. Eu minim ea magna sint. Dolor aliqua ad aliquip officia nulla. Id voluptate velit quis incididunt enim ea esse. Officia exercitation sit exercitation ea in esse nisi deserunt aute cillum aute officia amet. Pariatur occaecat do tempor laborum. Ut adipisicing veniam proident commodo ex laborum veniam commodo incididunt aute cupidatat mollit consectetur elit.`

    }
    onState($event) {
        console.log($event);
    }
    onFavorite($event) {
        console.log($event);
    }
    onVote($event) {
        console.log($event);
    }
    
}