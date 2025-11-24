import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingRecord } from 'src/app/dtos/parking-record';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  getHistory(): Observable<ParkingRecord[]> {
    return this.http.get<ParkingRecord[]>(environment.apiURL+"/parking/history")
  }
}
