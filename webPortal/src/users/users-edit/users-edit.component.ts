import { Component, OnInit } from '@angular/core';
import { UserServerService } from '../../service.user-server/user-server.service';
import { User } from 'src/app/entities/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  user: User;

  editForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.min(3)]),
    password: new FormControl('', [Validators.required, Validators.min(6)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}')
      ]),
    privilage: new FormControl('', [Validators.required, Validators.pattern('0|1')]),
  });

  get name() {
    return this.editForm.get('name');
  }

  get password() {
    return this.editForm.get('password');
  }

  get email() {
    return this.editForm.get('email');
  }

  get privilage() {
    return this.editForm.get('privilage');
  }

  constructor(private userServerService: UserServerService) { }

  ngOnInit() {
    // console.log(this.userServerService.loadUser());
    this.user = this.userServerService.loadUser();
    console.log(this.user);
    this.name.setValue(this.user.name);
    this.password.setValue(this.user.password);
    this.email.setValue(this.user.email);
    this.privilage.setValue(this.user.privilage);
  }

  submitForm() {
    const userTosend = new User(
      this.user.name,
      this.user.password,
      this.user.email,
      this.user.privilage,
      this.user.id
    );

    console.log(userTosend);

    this.userServerService.editUser2(userTosend).subscribe((response) => {
      console.log(response);
    });
  }

}
