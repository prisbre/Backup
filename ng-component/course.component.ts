import {Component} from 'angular2/core';
import {CourseService} from './course.service'

@Component({
    selector: "course",
    template: "My first course",
    providers: [CourseService]
})
export class CourseComponent {
    public courses: string[];
    constructor(private courseService : CourseService) {
        this.courses = courseService.courses();
    }
}                             