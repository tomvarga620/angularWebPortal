import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import * as zxcvbn from 'zxcvbn';
import { User } from '../entities/User';
import { UserServerService } from '../../service.user-server/user-server.service';
import { Router } from '@angular/router';
import { CanDeactivateComponent } from '../guard/deactivate-guard.guard';
import { Observable } from 'rxjs';
import { SnackbarService } from '../../service.user-server/snackbar.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit,CanDeactivateComponent {

  passwordMessage = '';
  toServer = false;

  constructor(private userServerService: UserServerService, private router: Router, private message: SnackbarService) { }

  regForm = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}')
    ]),
    password: new FormControl('', this.passValidator()),
    password2: new FormControl('')
    },
      this.passwordsMatchValidator
  );

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

  formSubmit() {
    this.toServer = true;
    const user = new User(
      this.name.value,
      this.email.value,
      this.password.value
    );
    return this.userServerService.register(user)
    .subscribe(() => {
     this.message.successMessage(`Successful registration, ${this.name.value}`);
     this.router.navigateByUrl('/login');
    });
  }

  passValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const passTest = zxcvbn(control.value);
      const message = `Password strength / 4 - must be 3 or 4,
      ${passTest.feedback.warning}`;
      this.passwordMessage = message;
      return passTest.score > 3 ? { weakPassword : message} : null;
    };
  }

  passwordsMatchValidator(control: FormGroup): ValidationErrors {
    const password = control.get('password');
    const password2 = control.get('password2');
    if (password.value === password2.value) {
      password2.setErrors(null);
      return null;
    } else {
      password2.setErrors({ differentPasswords: 'Passwords do not match' });
      return { differentPasswords: 'Passwords do not match' };
    }
  }

  canDeactivate(): boolean | Observable<boolean> {
      console.log("Guard Ide");
      if (this.toServer) { return true; }

      if (this.name.value && this.email.value && this.password.value && this.password2.value) {
        return true;
      }
      if (!this.name.value && !this.email.value && !this.password.value && !this.password2.value) {
        return true;
      }
      const result = window.confirm("Form is not completed wanna leave?");
      return result;
  }

}
