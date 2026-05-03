import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}

// import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   standalone: true,
//   selector: 'app-dashboard',
//   imports: [CommonModule],
//   templateUrl: './dashboard.html'
// })
// export class Dashboard {

//   user: any = {};

//   constructor(private authService: AuthService, private router: Router) {}

//   ngOnInit() {
//     this.user = this.authService.getUser();
//   }

//   goToEdit() {
//     this.router.navigate(['/edit-profile']);
//   }
// }