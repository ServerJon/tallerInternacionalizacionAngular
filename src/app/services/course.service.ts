import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  public getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>('assets/json/courses.json');
  }
}
