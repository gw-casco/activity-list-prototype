import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { filter, first, flow, includes, orderBy, some } from 'lodash-es';
import { testActivityListData } from './data';

@Component({
  selector: 'sv-acitivity-list',
  templateUrl: './acitivity-list.component.html',
  styleUrls: ['./acitivity-list.component.scss'],
})
export class AcitivityListComponent implements OnInit {
  data = new CustomStore({
    load: (lo: any) => {
      const filterArray = first(lo.filter) as string[];
      const searchString = filterArray?.[2];
      const sortColumns = lo.sort.map((s: any) => s.selector);
      const sortOrders = lo.sort.map((s: any) => (s.desc ? 'desc' : 'asc'));

      let data = testActivityListData;
      if (searchString) {
        data = filter(
          data,
          (obj) =>
            obj.rowType === 'future' &&
            some(obj, (v: any) => includes(v, searchString))
        );
      }
      data = orderBy(
        data,
        ['sortOrder', ...sortColumns],
        ['asc', ...sortOrders]
      );

      return Promise.resolve(data);
    },
  });

  constructor() {}

  ngOnInit(): void {}

  log = console.debug;
}
