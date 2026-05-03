// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-plan-page',
//   imports: [],
//   templateUrl: './plan-page.html',
//   styleUrl: './plan-page.css',
// })
// export class PlanPage {}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan-page',
  templateUrl: './plan-page.html'
})
export class PlanPageComponent {

  courseId: string = '';
  planId: string = '';

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('courseId') || '';
    this.planId = this.route.snapshot.paramMap.get('planId') || '';
  }

  constructor(private route: ActivatedRoute) {}
}