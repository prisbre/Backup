import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: "vote",
    template: `
        <div class="container"
            (click)="userVote($event)">
            <div class="btn btn-default"
                [class.active]="vote === 1">
                <i class="glyphicon glyphicon-menu-up" id="up"></i>
            </div>
            <div class="number">{{totalVotes + vote}}</div>
            <div class="btn btn-default"
                [class.active]="vote === -1">
                <i class="glyphicon glyphicon-menu-down" id="down"></i>
            </div>
        </div>`,
    styles: [`
        * {
            margin: 0;
            padding: 0;
        }
        .container {
            display: block;
            width: 42px;
        }
        .btn {
            width: 40px;
            height: 40px;
            background-color: #ddd;
            border-radius: 5px;
            margin: 1px;
        }
        .glyphicon {            
            color: #bbb;            
            font-size: 20px;
            line-height: 40px;
            text-align: center;
        }
        .number {
            width: 40px;
            height: 60px;
            background-color: #ddd;
            font-size: 14px;
            font-weight: bold;
            line-height: 60px;
            text-align: center;
            border-radius: 5px;
            margin: 1px;
            
        }
        .btn:hover,
        .active {
            background-color: #99ccff;
        }
    `]

})

export class VoteComponent {
    @Input() totalVotes: number = 0;
    @Input("userVote: vote") vote: number = 0;
    @Output() beVoted: EventEmitter<{}> = new EventEmitter();

    // 保证投票正确、唯一
    // 注意模板处的 totalVotes + vote
    voteToggle(id: string, vote: number): void {
        if (id === "up" && vote === 0) {
            this.vote = 1;
        } else if (id === "down" && vote === 0) {
            this.vote = -1;
        } else if ((id === "up" && vote === 1)
            || (id === "down" && vote === -1)) {
            this.vote = 0;
        } else if ((id === "up" && vote === -1) 
            || (id === "down" && vote === 1)) {
            this.vote = -this.vote;
        }
    }
    
    userVote($event) {
        let id: string = $event.target.id;
        this.voteToggle(id, this.vote);
    }
}