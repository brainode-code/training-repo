import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  public dummyData: number;
  public dummyRemovedData: any;

  constructor() { }

  ngOnInit(): void {
  }

  showData(data: number) {
    this.dummyData = data;
  }

  showRemovedData(removedData: any) {
    this.dummyRemovedData = removedData;
  }

}
