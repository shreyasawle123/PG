// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { Header } from './header/header';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterModule, Header],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {}
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Header], 
  templateUrl: './app.html'
})
export class App {}


