import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminRegister } from '../models/admin-register';
import { AdminLogin } from '../models/admin-login';
import { CustomerLogin } from '../models/customer-login';
import { CustomerRegister } from '../models/customer-register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private http: HttpClient) { }

  public registerAdmin(registerAdmin: AdminRegister): Observable<any>{
    return this.http.post<any>(`${this.authURL}`+ `registerAdmin`, registerAdmin);
  }

  public loginAdmin(loginAdmin: AdminLogin): Observable<any>{
    return this.http.post<any>(`${this.authURL}`+ `loginAdmin`, loginAdmin);
  }


  public loginCustomer(loginCustomer: CustomerLogin): Observable<any>{
    return this.http.post<any>(`${this.authURL}` + `loginCustomer`, loginCustomer);
  }

  public registerCustomer(registerCustomer: CustomerRegister): Observable<any>{
    return this.http.post<any>(`${this.authURL}`+ `registerCustomer`, registerCustomer);
  }
}
