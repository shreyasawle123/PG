// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

  

//   register(user: any) {
//     localStorage.setItem('user', JSON.stringify(user));
//   }

//   login(email: string, password: string): boolean {
//     const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

//     if (storedUser.email === email && storedUser.password === password) {
//       localStorage.setItem('isLoggedIn', 'true');
//       return true;
//     }

//     return false;
//   }

//   isLoggedIn(): boolean {
//     return localStorage.getItem('isLoggedIn') === 'true';
//   }

//   logout() {
//     localStorage.removeItem('isLoggedIn');
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
 //https://localhost:44316/swagger/index.html
  apiUrl = 'https://localhost:44316/api/auth';

  // register(user: any) {
  //   return this.http.post(`${this.apiUrl}/register`, user);
  // }
  register(user: any) {
  return this.http.post(
    `${this.apiUrl}/register`,
    user,
    { responseType: 'text' }   // ✅ ADD THIS
  );
}

  // login(email: string, password: string) {
  //   return this.http.post(`${this.apiUrl}/login`, { email, password });
  // }
login(email: string, password: string) {
  return this.http.post(
    `${this.apiUrl}/login`,
    JSON.stringify({
      Email: email,
      Password: password
    }),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

//   login(email: string, password: string) {
//   return this.http.post(`${this.apiUrl}/login`, {
//     email,
//     password
//   });
// }
  // ✅ ADD THIS BACK
  setLogin() {
    localStorage.setItem('isLoggedIn', 'true');
  }

  // isLoggedIn(): boolean {
  //   return localStorage.getItem('isLoggedIn') === 'true';
  // }


  isLoggedIn(): boolean {
  if (typeof window !== 'undefined' && localStorage) {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  return false;
}
  logout() {
    localStorage.removeItem('isLoggedIn');
  }
  
}