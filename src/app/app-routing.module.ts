import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component:  HomeComponent
  },
  {
    path: "admin-login",
    component: AdminLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
