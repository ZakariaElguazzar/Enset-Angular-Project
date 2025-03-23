import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // ✅ Import DashboardComponent
import { LoginFormComponent } from './login-signup/login-signup.component'; // ✅ Import LoginFormComponent

export const routes: Routes = [ 
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent,title:"Dashboard"},
  {path:'login',component:LoginFormComponent,title:"Login"} // ✅ Define dashboard route
];
