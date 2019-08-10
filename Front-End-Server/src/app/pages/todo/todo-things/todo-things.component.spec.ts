import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoThingsComponent } from './todo-things.component';

describe('TodoThingsComponent', () => {
  let component: TodoThingsComponent;
  let fixture: ComponentFixture<TodoThingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoThingsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
