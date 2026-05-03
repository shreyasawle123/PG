// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-edit-profile',
// //   imports: [],
// //   templateUrl: './edit-profile.html',
// //   styleUrl: './edit-profile.css',
// // })
// // export class EditProfile {}

// import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './edit-profile.html'
// })
// export class EditProfile {

//   user: any = {};

//   constructor(private authService: AuthService) {}

//   ngOnInit() {
//     this.user = this.authService.getUser();
//   }

//   updateProfile() {
//     this.authService.setUser(this.user);
//     alert('Profile updated ✅');
//   }
// }