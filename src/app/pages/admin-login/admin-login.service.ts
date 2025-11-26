import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http: HttpClient) { }

  adminLogin(password: string): Observable<string> {
    return this.http.post(environment.authURL+"/login", password, {responseType: "text"}); // does not include <string> in post.
  }
}
