import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessHour } from 'src/app/dtos/business-hour';
import { PriceModel } from 'src/app/dtos/price-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminConfigurationService {
  headers:HttpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ window.localStorage.getItem("admin"));
  constructor(private http: HttpClient) { }

  getDefaultScenarioCapacity(): Observable<number> {
    return this.http.get<number>(environment.apiURL+"/configuration/rules/default/capacity", {headers: this.headers});
  }

  getBusinessHoursAtDefaultScenario() {
    return this.http.get<BusinessHour[]>(environment.apiURL+"/configuration/rules/default/business-hours", {headers: this.headers});
  }

  getPriceModelsAtDefaultScenario() {
    return this.http.get<PriceModel[]>(environment.apiURL+"/configuration/rules/default/price-model", {headers: this.headers});
  }

  deleteBusinessHourAtDefaultScenario(id:bigint): Observable<Object> {
    return this.http.delete(environment.apiURL+"/configuration/rules/default/business-hours" + "?" + "id="+ id, {headers: this.headers});
  }

  changePassword(oldPassword: string, newPassword: string): Observable<Object> {
    return this.http.post(environment.authURL+"/configuration/admin/change-password", {oldPassword: oldPassword, newPassword: newPassword, headers: this.headers});
  }
}
