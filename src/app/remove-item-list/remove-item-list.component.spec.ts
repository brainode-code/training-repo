import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveItemListComponent } from './remove-item-list.component';

describe('RemoveItemListComponent', () => {
  let component: RemoveItemListComponent;
  let fixture: ComponentFixture<RemoveItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
