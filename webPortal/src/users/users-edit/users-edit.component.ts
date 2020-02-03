import { Component, OnInit } from '@angular/core';
import { UserServerService } from '../../service.user-server/user-server.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  constructor(private userServerService: UserServerService) { }

  ngOnInit() {
    console.log(this.userServerService.loadUser);
  }
}
