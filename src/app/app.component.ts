import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { CourseService } from './services/course.service';
import { Course } from './models/course.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Taller i18n, Internacionalización en Angular';
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource!: MatTableDataSource<Course>;
  amount: number;

  constructor(private courseService: CourseService) {
    this.amount = 0;
  }

  ngOnInit(): void {
    this.getCourses();
  }

  public currentDate(): Date {
    return new Date();
  }

  public getAmount(): number {
    return this.dataSource.data.reduce((acc, curr) => acc + curr.price, 0);
  }

  private getCourses(): void {
    this.courseService.getCourses().subscribe(
      {
        next: (courses: Course[]) => {
          this.dataSource = new MatTableDataSource(courses);
        }
      }
    )
  }
}
