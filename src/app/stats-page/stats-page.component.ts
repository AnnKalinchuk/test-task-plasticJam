import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/service/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit, OnDestroy {
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
  sub1: Subscription;
  sub2: Subscription;

  constructor(
              private usersService: UsersService) { }

  ngOnInit() {
    this.sub1 = this.usersService.getUsers(0, this.usersCountOnPage).subscribe(usersResponseData => {
      this.usersCountTotal = usersResponseData.totalElements;
      this.dataSource = new MatTableDataSource<User>(usersResponseData.content);
    });
  }

  onChangePage(page) {
    this.sub2 = this.usersService.getUsers(page - 1, this.usersCountOnPage).subscribe(usersResponseData => {
      this.dataSource = new MatTableDataSource<User>(usersResponseData.content);
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}
