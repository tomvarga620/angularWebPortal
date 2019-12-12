import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import * as zxcvbn from 'zxcvbn';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  passwordMessage = '';

  constructor() { }

  regForm = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}')
    ]),
    password: new FormControl('', this.passValidator()),
    password2: new FormControl('')

  });

  get name() {
    return this.regForm.get('name');
  }

  get email() {
    return this.regForm.get('email');
  }

  get password() {
    return this.regForm.get('password');
  }

  get password2() {
    return this.regForm.get('password2');
  }

  ngOnInit() {
  }

  formSubmit() {}

  passValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const passTest = zxcvbn(control.value);
      const message = `Password strength / 4 - must be 3 or 4,
      ${passTest.feedback.warning}`;
      this.passwordMessage = message;
      return passTest.score > 3 ? { weakPassword : message} : null;
    };
  }

}
