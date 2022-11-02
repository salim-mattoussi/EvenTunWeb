import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new  FormControl('', [Validators.required]);
  constructor() {
  }

  ngOnInit(): void {

  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}

