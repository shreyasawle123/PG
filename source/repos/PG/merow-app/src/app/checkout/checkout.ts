import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  price = signal<number>(0);
  planName = signal<string>('');
  courseId = signal<string>('');

  buyNow() {
    alert('Purchase successful!');
  }
}
