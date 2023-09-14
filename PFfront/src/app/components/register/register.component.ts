import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string;
  password: string;
  confirmPassword: string;
  phone:string
  constructor() {}

  register() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.phone)
  }

}
