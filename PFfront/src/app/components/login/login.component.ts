import { Component,ElementRef,NgModule, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLogin } from 'src/app/models/admin-login';
import { CustomerLogin } from 'src/app/models/customer-login';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string;
  password: string;
  loginAdmin: AdminLogin;
  loginCustomer: CustomerLogin;

  errMsg: string;
  isLogged = false;
  isLoginFail = false;
  rol: string;

  constructor( private tokenService: TokenService,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
    }
    this.rol = 'Log in AS';
    console.log(this.rol);
  }

  onLoginAdmin(): void{
    this.loginAdmin = new AdminLogin(this.username, this.password);
    this.authService.loginAdmin(this.loginAdmin).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.router.navigate([`/`]); //te manda al index, ACOMODARLO;
      }, err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsg = err.error.errMsg;

      }
    )
  }

  onLoginCustomer(): void{
    this.loginCustomer = new CustomerLogin(this.username, this.password);
    this.authService.loginCustomer(this.loginCustomer).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.router.navigate([`/`]);
      }, err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsg = err.error.errMsg;
      }
    )
  }

}


