import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { TodoService } from '../../common/services/todo/todo.service';
import { SnackbarService } from '../../common/services/snackbar/snackbar.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public selected = 'option1';
  public formTodo: FormGroup;
  public List = [];

  constructor(private fb: FormBuilder, private todoService: TodoService, private snackbarService: SnackbarService) { }

  ngOnInit() {
    this.formTodo = this.fb.group({
      title: ['', [Validators.required]],
    });

    this.todoService.getTodo().subscribe((res: any) => {
      if (res.success) this.List = res.data;
    }, error => {
      this.snackbarService.createSnackbar('Could not load data from server', 'RETRY', 'error-snackbar');
    });
  }

  onAddThings(formDirective: FormGroupDirective): void {
    this.List.push({
      id: this.List.length !== 0 ? this.List[this.List.length - 1].id + 1 : 0,
      title: this.formTodo.value.title, values: []
    });
    formDirective.resetForm();
    this.formTodo.reset();
  }

  onAddThing(data: any): void {
    const things = this.List.find(el => el.id === data.idThings);
    if (data.content !== undefined) {
      things.values.push({
        id: things.values.length !== 0 ? things.values[things.values.length - 1].id + 1 : 0,
        content: data.content, isDone: false
      });
    }
  }

  onEditThings(data: any): void {
    const things = this.List.find(el => el.id === data.idThings);
    if ((things.title !== '') && (data.content !== things.title) && (data.content !== undefined)) things.title = data.content;
  }

  onEditThing(data: any): void {
    const thing = this.List.find(el => el.id === data.idThings).values
      .find(el => (el.id === data.idThing) && (el.thing !== data.content));
    if (thing && (data.content !== undefined)) {
      thing.content = data.content;
    }
  }

  onDeleteThings(id: number): void {
    this.List.splice(this.List.findIndex(el => el.id === id), 1);
  }

  onDeleteThing(data: any): void {
    const things = this.List.find(el => el.id === data.idThings);
    things.values.splice(things.values.findIndex(el => el.id === data.idThing), 1);
  }

  getErrorMessage(title: string): string {
    return this.formTodo.controls[title].errors.required ? 'You must enter a value' : '';
  }

}
