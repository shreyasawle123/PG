// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { Checkout } from './checkout';

// describe('Checkout', () => {
//   let component: Checkout;
//   let fixture: ComponentFixture<Checkout>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [Checkout],
//     }).compileComponents();

//     fixture = TestBed.createComponent(Checkout);
//     component = fixture.componentInstance;
//     await fixture.whenStable();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class CheckoutComponent implements OnInit {

  plan: string = '';
  courseId: string | null = '';

  price: number = 0;
  planName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.plan = this.route.snapshot.queryParamMap.get('plan') || '';
    this.courseId = this.route.snapshot.queryParamMap.get('courseId');

    // Set plan details
    if (this.plan === 'A') {
      this.planName = 'Plan A';
      this.price = 4999;
    } else if (this.plan === 'B') {
      this.planName = 'Plan B';
      this.price = 2999;
    } else if (this.plan === 'C') {
      this.planName = 'Plan C';
      this.price = 999;
    }
  }

  buyNow() {
    alert(`Proceeding to payment for ₹${this.price}`);
    
  }
}