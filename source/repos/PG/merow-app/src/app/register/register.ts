// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   imports: [],
//   templateUrl: './register.html',
//   styleUrl: './register.css',
// })
// export class Register {}

// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './register.html'
// })
// export class Register {
//   email = '';
//   password = '';

//   constructor(private auth: AuthService, private router: Router) {}

//   registerUser() {
//     const user = {
//       email: this.email,
//       password: this.password
//     };

//     this.auth.register(user);
//     alert('User Registered Successfully');

//     this.router.navigate(['/login']);
//   }
// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';  // ✅ IMPORTANT
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {

  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  registerUser() {

    if (!this.name || !this.email || !this.password) {
      alert('Please fill all fields');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(this.email)) {
      alert('Enter valid email');
      return;
    }

    if (this.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(user).subscribe({
      next: (res: any) => {
        // alert('Registration successful');
        this.router.navigate(['/dashboard']);
        console.log(res);
      },
      error: (err: any) => {
        alert('Registration failed');
        console.error(err);
      }
    });
  }
}

// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';   // ✅ ADD THIS
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [CommonModule, FormsModule],   // ✅ ADD HERE
//   templateUrl: './register.html',
//   styleUrls: ['./register.css']
// })
// export class Register {
//   name: string = '';
//   email: string = '';
//   password: string = '';

//   constructor(private authService: AuthService) {}
// }