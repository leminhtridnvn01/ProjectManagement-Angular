import { Injectable } from '@angular/core';
import { UserLogin, UserToken } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = "https://dev.cleeksy.com";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private currentUser = new BehaviorSubject<UserToken>(null as unknown as UserToken);
  currentUser$ = this.currentUser.asObservable();
  
  constructor(private httpClient: HttpClient) { }

  login(userLogin: UserLogin): Observable<any> {
    return this.httpClient
      .post<any>(`${this.baseUrl}/api/iam/authentication`, userLogin, this.httpOptions)
  }
  
}
