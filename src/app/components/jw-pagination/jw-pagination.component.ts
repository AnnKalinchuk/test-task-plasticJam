import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
const paginate = require('jw-paginate');

@Component({
  moduleId: module.id,
  selector: 'app-jw-pagination',
  templateUrl: './jw-pagination.component.html',
  styleUrls: ['./jw-pagination.component.scss']
})
export class JwPaginationComponent implements OnInit {


  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() itemsCountOnPage = 0;
  @Input() itemsCountTotal = 0;
  @Input() maxPages = 5;
  pager: any = {};

  ngOnInit() {
      this.setPage(this.initialPage);
  }

  setPage(page: number) {
    this.pager = paginate(this.itemsCountTotal, page, this.itemsCountOnPage, this.maxPages);
    this.changePage.emit(page);
  }
}
