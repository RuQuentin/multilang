import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

  private baseApiUrl = 'http://localhost:4200';

  constructor(
    private httpClient: HttpClient
  ) { }

  get<T>(url: string, params?: HttpParams | { [param: string]: string }): Observable<any> {
    const options: any = {};
    options.headers = {
      'Accept':  'text/html,application/xhtml+xml,application/xml',
      'Content-Type':  'text/html,application/xhtml+xml,application/xml',
    };

    if (params) {
      options.params = params;
    }

    return this.httpClient.get<T>(this.baseApiUrl + url, options).pipe(
      catchError(error => {
        if (error.status === 200) {
          return of(error.error.text);
        }

        return throwError(error);
      })
    );
  }
}
