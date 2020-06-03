export class User {
  constructor(
              public id: number,
              public firstName: string,
              public lastName: string,
              public email: string,
              public gender: string,
              public totalClicks: number,
              public totalPageViews: number,
              public ipAddress: string) {}
}
