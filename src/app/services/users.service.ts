
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersUrl).pipe(
      catchError((error:HttpErrorResponse)=>{
        console.error('API Error', error.message);
        return throwError(()=>new Error('Failed to fetch users. Please try again'))
      })
    );
  }
}