import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../shared/service/users.service';
import * as moment from 'moment';
import { UserResponse } from '../shared/models/users.response.model';

@Component({
  selector: 'app-charts-page',
  templateUrl: './charts-page.component.html',
  styleUrls: ['./charts-page.component.scss']
})
export class ChartsPageComponent implements OnInit {

  firstName: string;
  lastName: string;
  userId: number;

  fromDateM: string;
  toDateM: string;

  type = 'line';
  chartDataClicks = {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: ['transparent'],
        borderColor: ['#3A80BA'],
        pointColor: ['#3A80BA'],
        borderWidth: 3,
        fontColor: ['#CCCCCC']
      }
    ]
  };

  optionsClicks = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true,
          }
      }],
      xAxes: [{
        gridLines : {
            display : false
        }
      }]
    },
    legend: {
      display: false
    },
    title: {
      display: false,
      text: 'Clicks Chart'
    }
  };
  chartDataViews = {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: ['transparent'],
        borderColor: ['#3A80BA'],
        pointColor: ['#3A80BA'],
        borderWidth: 3,
        fontColor: ['#CCCCCC']
      }
    ]
  };

  optionsViews = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }],
      xAxes: [{
        gridLines : {
            display : false
        }
      }]
    },
    legend: {
      display: false
    },
    title: {
      display: false,
      text: 'Views Chart'
    }
  };

  constructor(private route: ActivatedRoute,
              private usersService: UsersService) {
              const dateM = moment();
              this.toDateM = dateM.format('YYYY.MM.DD');
                // tslint:disable-next-line: deprecation
              this.fromDateM = dateM.subtract( 6, 'days').format('YYYY.MM.DD');
              this.usersService.getUsersStatistics(this.userId, this.fromDateM, this.toDateM).subscribe(userStatisticsRes => {
                  const clicksArray = userStatisticsRes.map(value => value.clicks);
                  const dates = userStatisticsRes.map(x => x.date);
                  const datesM = dates.map(x => moment(x).format('YYYY:MM:DD'));
                  const viewsArray = userStatisticsRes.map(value => value.page_views);
                  this.chartDataClicks.datasets[0].data = [clicksArray[0], ...clicksArray];
                  this.chartDataClicks.labels = ['', ...datesM];

                  this.chartDataViews.datasets[0].data = [viewsArray[0], ... viewsArray];
                  this.chartDataViews.labels = ['', ...datesM];
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params.id;
    });

    this.route.queryParams.subscribe(
      (queryParams: any) => {
          // tslint:disable-next-line: no-string-literal
          this.firstName = queryParams['firstName'];
          // tslint:disable-next-line: no-string-literal
          this.lastName = queryParams['lastName'];
    });
  }
}
