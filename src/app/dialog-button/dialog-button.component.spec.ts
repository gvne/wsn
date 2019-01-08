import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogButtonComponent } from './dialog-button.component';

describe('DialogButtonComponent', () => {
  let component: DialogButtonComponent;
  let fixture: ComponentFixture<DialogButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
