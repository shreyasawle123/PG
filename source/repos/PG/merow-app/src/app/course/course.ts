import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.html',
  styleUrls: ['./course.css']
})
export class Course {

  course: any;
  courseId = signal<string | null>(null);

  constructor(private route: ActivatedRoute) {

    const id = this.route.snapshot.paramMap.get('id');
    this.courseId.set(id);

    const data: any = {
      'career-launch': {
        title: 'Career Launch Program',
        desc: 'Start your journey with strong fundamentals.',
        content: 'This program includes basics, guided learning, and assignments.'
      },
      'skill-boost': {
        title: 'Skill Boost Series',
        desc: 'Enhance your skills with practical work.',
        content: 'Includes projects, coding practice, and real-world examples.'
      },
      'exam-mastery': {
        title: 'Exam Mastery Track',
        desc: 'Prepare for competitive exams effectively.',
        content: 'Includes mock tests, analysis, and previous papers.'
      }
    };

    this.course = data[id!];
  }

  selectPlan(plan: string) {
    alert('Selected Plan: ' + plan);
  }
}