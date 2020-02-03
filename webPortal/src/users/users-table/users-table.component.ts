import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/entities/User';
import { UserServerService } from '../../service.user-server/user-server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'email',
    'name'
  ];
  dataSource = new MatTableDataSource<User>();

  constructor(private userServerService: UserServerService, private router: Router) { }
  user: User;
  ngOnInit() {
    console.log('table work');
  }

  ngAfterViewInit(): void {
    this.userServerService.getUsers().subscribe(users => {
      this.dataSource.data = users;
    });
  }

  deleteUser(user: User){
      this.userServerService.deleteUser(user).subscribe(() => {
          this.dataSource.data = this.dataSource.data.filter(u => u !== user);
      });
  }
  openEdit(user: User) {
    if (user != null) {
      this.userServerService.saveUser(user);
      this.router.navigateByUrl('/useredit/' + user.id);
    } else {
      return null;
    }
  }

}
