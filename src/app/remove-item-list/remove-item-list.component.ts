import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-remove-item-list',
  templateUrl: './remove-item-list.component.html',
  styleUrls: ['./remove-item-list.component.scss']
})
export class RemoveItemListComponent implements OnInit {
  @Input() taskList = [];
  @Output() emitTaskDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  remove(task) { 
      this.emitTaskDelete.emit(task);
  }
}
