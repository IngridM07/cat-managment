import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

import { Cat } from './cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiURL= "http://localhost:8000/api/cats/";
  httpOptions= {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  create(cat: any): Observable<Cat> {
    return this.httpClient.post<Cat>(this.apiURL, JSON.stringify(cat), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  find(id: any): Observable<Cat> {
    return this.httpClient.get<Cat>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  update(id: any, cat: any): Observable<Cat> {
    return this.httpClient.put<Cat>(this.apiURL + id, JSON.stringify(cat), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  delete(id: any){
    return this.httpClient.delete<Cat>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
