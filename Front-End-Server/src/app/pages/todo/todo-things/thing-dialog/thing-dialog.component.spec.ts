import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingDialogComponent } from './thing-dialog.component';

describe('ThingDialogComponent', () => {
  let component: ThingDialogComponent;
  let fixture: ComponentFixture<ThingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
