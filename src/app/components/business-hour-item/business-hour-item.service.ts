import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessHour } from 'src/app/dtos/business-hour';
import { BusinessHourProposal } from 'src/app/dtos/business-hour-proposal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessHourItemService {
  headers:HttpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ window.localStorage.getItem("admin"));
  
  constructor(private http: HttpClient) { }

  createBusinessHourAtDefaultScenario(businessHourProposal: BusinessHourProposal): Observable<Object> {
    return this.http.post(environment.apiURL+"/configuration/rules/default/business-hours", businessHourProposal, {headers: this.headers});
  }

  setBusinessHourAtDefaultScenario(id:bigint, businessHourProposal: BusinessHourProposal): Observable<Object> {
    return this.http.patch(environment.apiURL+"/configuration/rules/default/business-hours" + "?" + "id="+ id, businessHourProposal, {headers: this.headers});
  }
}
