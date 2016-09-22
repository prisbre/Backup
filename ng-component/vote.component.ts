import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: "vote",
    template: `
        <div class="container" (click)="userVote()">
            <div class="btn">
            <span class="glyphicon glyphicon-menu-up" id="up" 
                [class.active]="upVote"></span>
            </div>
            <span class="number">{{totalVotes}}</span>
            <div class="btn">
            <span class="glyphicon glyphicon-menu-down" id="down"
                [class.active]="downVote"></span>
            </div>
        </div>`,
    styles: [`
        .container {
            display: block;
            width: 40px;
            height: auto;
        }
        .btn {
            width: 100%;
            height: 40px;
            background-color: #ddd;
            border-radius: 5px;
            margin: 2px 0;
            text-align: center;
            line-height: 40px;
        }
        .glyphicon {            
            color: #bbb;            
            font-size: 20px;
            line-height: 40px;
            text-align: center;
        }
        .number {
            width: 100%;
            height: 60px;
            font-size: 14px;
            font-weight: bold;
            line-height: 60px;
            text-align: center;
            background-color: #ddd;
        }
        .active {
            color: lightblue;
        }
    `]

})

export class VoteComponent {
    @Input() totalVotes: number = 0;
    @Input() vote: number = 0;
    @Output() beVoted: EventEmitter<{}> = new EventEmitter();

    upVote: boolean = this.vote === 1 ? true : false;
    downVote: boolean = this.vote === -1 ? true : false;

    // isValid(vote: number): boolean {
    //     if (vote === 1 || vote === 0 || vote === -1) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    activeToggle(id: string, vote: number): void {
        if (id === "up" && this.vote === 1) {
            this.upVote = true;
            this.downVote = !this.upVote;
        } else if (id === "down" && this.vote === -1) {
            this.downVote = true;
            this.upVote = !this.upVote;
        }
    }
    
    userVote($event) {
        let id: string = $event.target.id;

        if (id === "up" && this.vote !== 1) {
            this.vote = 1;            
        } else if (id === "down" && this.vote !== -1) {
            this.vote = -1;
        }
        this.totalVotes += this.vote;  // no need to check valid now, vote = 1 | -1 | 0;
        this.beVoted.emit({method: console.log(this.vote)});
        this.activeToggle(id, this.vote);
    }
}