import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Scenario } from 'src/app/dtos/scenario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  getCurrentScenario(): Observable<Scenario> {
    return this.http.get<Scenario>(environment.apiURL+"/parking/current-scenario");
  }

  getOccupancy(): Observable<bigint> {
    return this.http.get<bigint>(environment.apiURL+"/parking/occupancy");
  }
}
