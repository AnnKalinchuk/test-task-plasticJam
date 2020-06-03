import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/service/users.service';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit {
  usersCountOnPage = 50;
  usersCountTotal = 0;
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'gender',
    'totalClicks',
    'totalPageViews',
    'ipAddress'
  ];

  dataSource = new MatTableDataSource<User>();

  constructor(
              private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers(0, this.usersCountOnPage).subscribe(usersResponseData => {
      this.usersCountTotal = usersResponseData.totalElements;
      this.dataSource = new MatTableDataSource<User>(usersResponseData.content);
    });
  }

  onChangePage(page) {
    this.usersService.getUsers(page - 1, this.usersCountOnPage).subscribe(usersResponseData => {
      this.dataSource = new MatTableDataSource<User>(usersResponseData.content);
    });
  }

}
