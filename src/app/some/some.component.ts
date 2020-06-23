import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent implements OnInit {
  num: number = 2;
  @Input() public data: number;
  @Input() public removedData: any;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.num = this.num + 1
  }

}
