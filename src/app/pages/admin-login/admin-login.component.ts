import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from './admin-login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  password: string="";
  constructor(private service: AdminLoginService, private router: Router) { }

  signin() {
    this.service.adminLogin(this.password).subscribe({
      next: (jwt) => {
        window.localStorage.setItem("admin", jwt);
        this.router.navigate(["/admin/configuration"]);
      }
    });
  }

  ngOnInit(): void {
  }

}
