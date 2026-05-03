// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './login.html',
//   styleUrls: ['./login.css'],
// })
// export class Login {

//   // UI control
//   isEmailLogin: boolean = false;

//   // Phone
//   phoneNumber: string = '';

//   // Email
//   email: string = '';
//   password: string = '';

//   // Switch to email login
//   showEmailLogin() {
//     this.isEmailLogin = true;
//   }

//   // Dummy validation
//   loginWithEmail() {
//     if (!this.email || !this.password) {
//       alert('Please enter email and password');
//       return;
//     }

//     // simple email format check
//     if (!this.email.includes('@')) {
//       alert('Invalid email format');
//       return;
//     }

//     // dummy credentials
//     if (this.email === 'test@gmail.com' && this.password === '123456') {
//       alert('Login successful ✅');
//     } else {
//       alert('Invalid email or password ❌');
//     }
//   }
// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
   

  isEmailLogin = false;

  phoneNumber = '';
  email = '';
  password = '';
   constructor(private authService: AuthService, private router: Router) {}

  // SWITCH TO EMAIL LOGIN
  showEmailLogin() {
    this.isEmailLogin = true;
  }

  // LOGIN FUNCTION (dummy for now)
//   loginWithEmail() {
//     if (this.email === 'test@gmail.com' && this.password === '1234') {
//       alert('Login Success ✅');
//     } else {
//       alert('Invalid credentials ❌');
//     }
//   }
// }

loginWithEmail() {

  if (!this.email || !this.password) {
    alert('Enter email & password');
    return;
  }

  this.authService.login(this.email, this.password).subscribe({

    // next: (res: any) => {
    //   console.log(res);

    //   if (res) {
    //     this.authService.setLogin(); // ✅ no error now
    //     alert('Login Success ✅');
    //   } else {
    //     alert('Invalid credentials ❌');
    //   }
    // },
    next: (res: any) => {
  console.log('API Response:', res);

  if (res && res.success) {
    this.authService.setLogin();
     // ✅ REDIRECT HERE
        this.router.navigate(['/dashboard']);
    // alert('Login Success ✅');
  } else {
    alert('Invalid credentials ❌');
  }
},

    error: (err: any) => {  // ✅ FIXED
      console.error(err);
      alert('Invalid credentials ❌');
    }
  });
}}
