import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: String, password: String) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDm7ENm_2UdT6mMblDj6dDCUAK_D8rdjBc',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
  }
}
