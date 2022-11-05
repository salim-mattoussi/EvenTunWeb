import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,AbstractControl,ValidatorFn} from "@angular/forms";
import { user } from './../model/user';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public showPassword: boolean = false;
  
  public showPassword1: boolean = false;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  //passwordFormControl = new  FormControl('', [Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),Validators.minLength(6),
  //Validators.maxLength(25), matchValidator('passwordFormControl1', true)]);
  //passwordFormControl1 = new  FormControl('', [Validators.required, matchValidator('passwordFormControl')]);
  firstnameFormControl= new  FormControl('', [Validators.required]);
  lastnameFormControl= new  FormControl('', [Validators.required]);
  telephoneFormControl= new  FormControl('', [Validators.required]);
  userControl = new FormControl(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  

  

  user: user[] = [


  ];
  constructor() {
  }

  ngOnInit(): void {

  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  public toggleRepeatPasswordVisibility(): void {
    this.showPassword1 = !this.showPassword1;
  }
  password = new FormControl("", [
    Validators.required,
    Validators.pattern(
      "^((?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9]).{8,255})\\S$"
    )
  ]);
  confirmPassword = new FormControl("", [
    Validators.required,
    this.confirmEquals() 
  ]); 

  confirmEquals(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null =>  
        control.value?.toLowerCase() === this.passwordValue.toLowerCase() 
            ? null : {noMatch: true};
  }

  get passwordValue() {
    return this.password.value;
  }
}

