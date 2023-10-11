import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone:string

  rol:string;

  constructor() {}
  ngOnInit(): void {
    this.rol = 'Log in AS';
  }

  registerCustomer() {
    console.log(this.username)
    console.log(this.email);
    console.log(this.password);
    console.log(this.phone)
  }
  
  registerAdmin() {
    throw new Error('Method not implemented.');
    }
}
