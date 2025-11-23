import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { HistoryComponent } from './pages/history/history.component';
import { AdminConfigurationComponent } from './pages/admin-configuration/admin-configuration.component';

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
    path: "history",
    component: HistoryComponent
  },
  {
    path: "admin/login",
    component: AdminLoginComponent
  },
  {
    path: "admin/configuration",
    component: AdminConfigurationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
