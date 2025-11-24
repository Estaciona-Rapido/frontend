import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Scenario } from 'src/app/dtos/scenario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly API: string="https://localhost:8080";
  constructor(private http: HttpClient) { }

  getCurrentScenario(): Observable<Scenario> {
    return this.http.get<Scenario>(this.API+"/parking/current-scenario");
  }

  getOccupancy() {
    return this.http.get<bigint>(this.API+"/parking/occupancy");
  }

  
}
