import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseId: string | null = '';
  selectedPlan: string = '';
  course: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    // Get course id from URL
    this.courseId = this.route.snapshot.paramMap.get('id');

    // Dummy data (replace with API later)
    this.course = {
      title: 'Medical Entrance Course',
      desc: 'Complete preparation for NEET exam with structured content.',
      content: 'This course includes video lectures, question bank, mock tests, and performance tracking.'
    };
  }

  // Select Plan
  selectPlan(plan: string) {
    this.selectedPlan = plan;
    console.log('Selected Plan:', plan);
  }

  // Enroll Action
  enroll() {
    if (!this.selectedPlan) {
      alert('Please select a plan');
      return;
    }

    alert(`Enrolled in Plan ${this.selectedPlan} for Course ID: ${this.courseId}`);
  }
}