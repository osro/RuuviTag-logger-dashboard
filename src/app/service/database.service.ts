import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class Response {
  message: String
  data: any
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  endPoint = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getBatteryStatus(mac: String): Observable<Response> {
    return this.httpClient.get<Response>(this.endPoint + '/api/tag/' + mac + '/battery');
  }

  httpError(error) {
    return throwError(error.message);
  }
}
