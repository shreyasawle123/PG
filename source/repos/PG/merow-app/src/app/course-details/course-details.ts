import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.html',
  styleUrls: ['./course-details.css']
})
export class CourseDetailsComponent implements OnInit {

  courseId: string | null = '';
  selectedPlan: string = '';
  course: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');

    this.course = {
      title: 'Medical Entrance Course',
      desc: 'Complete preparation for NEET',
      content: 'Videos + QBank + Test Series included'
    };
  }

  // ✅ REQUIRED METHOD (this is missing in your case)
  enroll() {
    if (!this.selectedPlan) {
      alert('Please select a plan');
      return;
    }

    alert('Enrolled in Plan ' + this.selectedPlan);
  }

  // plan select
  selectPlan(plan: string) {
    this.selectedPlan = plan;
  }
}