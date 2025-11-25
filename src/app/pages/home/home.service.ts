import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';
import { Scenario } from 'src/app/dtos/scenario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ParkingRegisterProposal } from 'src/app/dtos/parking-register-proposal'

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

  register(parkingRegisterProposal: ParkingRegisterProposal): Observable<HttpResponse<Object>>  {
    return this.http.post(environment.apiURL+"/parking/register", parkingRegisterProposal, {observe: "response"});
  }

  checkout(plate: string): Observable<number> {
    return this.http.post<number>(environment.apiURL+"/parking/checkout" + "?" + "plate=" + plate, null);
  }

  confirmCheckout(plate: string): Observable<Object> {
    return this.http.post(environment.apiURL+"/parking/confirmCheckout" + '?' + "plate=" + plate, null);
  }
}
