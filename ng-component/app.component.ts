import {Component} from 'angular2/core';
// import {CourseComponent} from './course.component'
import {StarComponent} from './star.component'
import {FavoriteComponent} from './favorite.component'
import {VoteComponent} from './vote.component'
import {BootstrapPanel} from './bootstrap.panel.component'
import {SummaryPipe} from './summary.pipe'
import {ZippyComponent} from './zippy.component'
import {ContactFormComponent} from './contact-form.component'
import {SignUpFormComponent} from './signup-form.t-d.component'

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
        <bs-panel> 
            <div class="heading">{{post.title}}</div> 
            <div class="body">{{post.body | summary: 100}}</div>
            <div class="body">{{post.body | summary: 100}}</div>    
            <div class="footer">{{post.assignee?.name | uppercase}}</div>
        </bs-panel>
        <zippy class="zippy-title" [title]="post.title">
            {{post.body}}
        </zippy>
        <contact-form></contact-form>
        <signup-form></signup-form>`,


    directives: [
        // CourseComponent,
        StarComponent,
        FavoriteComponent,
        VoteComponent,
        BootstrapPanel,
        ZippyComponent,
        ContactFormComponent,
        SignUpFormComponent
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
        title: "Little Title Big Big Ball",
        isStar: true,
        totalLikes: 1000,
        totalVotes: 1802,
        assignee: {name: "John Gates"},
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