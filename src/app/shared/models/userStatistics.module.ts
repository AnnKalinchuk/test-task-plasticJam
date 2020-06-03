export class UserStatistics {
  constructor(
    public id: number,
    // tslint:disable-next-line: variable-name
    public page_views: number,
    public date: string,
    public clicks: number,
    public userId: number) {}
  }
