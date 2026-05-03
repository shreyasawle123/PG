//import { Routes } from '@angular/router';

//export const routes: Routes = [];
import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Home } from './home/home';
import { About} from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Course } from './course/course';
import { Register } from './register/register';
import { authGuard } from './auth.guard';
import { Dashboard } from './dashboard/dashboard';
import { Checkout } from './checkout/checkout';
import { CourseDetailsComponent } from './course-details/course-details';
// import { CourseDetails } from './course-details/course-details';
import { PlanPageComponent } from './plan-page/plan-page';
// import { EditProfile } from './edit-profile/edit-profile';



export const routes: Routes = [
  { path: '', component: Landing },   // 👈 landing page
  //{ path: 'home', component: Home },  // 👈 courses page
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'course/:id', component: Course },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
   { path: '', redirectTo: 'login', pathMatch: 'full' },
     { path: 'dashboard', component: Dashboard },
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: 'plan/:courseId/:planId', component: PlanPageComponent },
   { path: 'checkout', component: Checkout},
      // { path: 'edit-profile', component: EditProfile },
  { path: 'home', component: Home, canActivate: [authGuard] }
];
