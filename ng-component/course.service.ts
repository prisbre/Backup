import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
    public title: string;
    public course: string[];
    constructor() {
        this.title = 'The title of courses page';
        this.course = ['math', 'physics', 'english'];
        
    }
    get courses(): string[] {
        return this.course;
    }
}





