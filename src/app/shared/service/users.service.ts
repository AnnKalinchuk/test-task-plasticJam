import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { usersResponse0, usersResponse1, usersResponse2 } from './users.mock';
import { UserStatistics } from '../models/userStatistics.module';
import { userStatisticsResponse } from './users.statistics.mock';

@Injectable({
  providedIn: 'root',
})

export class UsersService {
    url = 'http://159.65.233.178:8080/task/api/v1/';
    constructor(private http: HttpClient) {}

    /* getUsers(page: number = 0, range = 50 ): Observable<any> {
      return this.http.get<any>(`${this.url}users?page=${page}&range=${range}`);
    } */

    getUsers(page: number = 1, range = 50): Observable<any> {
      if (page === 0) {
        return of(usersResponse0);
      } else if (page === 1) {
        return of(usersResponse1);
      } else {
        return of(usersResponse2);
      }
    }

   /*  getUsersStatistics(id: number, from, to): Observable<UserStatistics[]> {
      return this.http.get<UserStatistics[]>(`${this.url}users/statistics?id=${id}&from=${from}&to=${to}`);
    } */

    getUsersStatistics(id: number, from, to): Observable<any> {
      return of(userStatisticsResponse);
    }
}
