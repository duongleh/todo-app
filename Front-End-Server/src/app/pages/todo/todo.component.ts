import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Constants } from 'src/app/common/constant';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public selected = 'option1';
  public formTodo: FormGroup;
  public objectKeys = Object.keys;
  public Things = Constants.Things;

  onAddThings(formDirective: FormGroupDirective): void {
    this.Things[this.objectKeys(this.Things).length + 1] = { title: this.formTodo.value.title, values: [] };
    formDirective.resetForm();
    this.formTodo.reset();
  }

  onAddThing(data: any): void {
    if (data.content !== undefined) this.Things[data.idThings].values.push({ id: this.Things[data.idThings].values.length + 1, thing: data.content, isDone: false });
  }

  onEditThings(data: any): void {
    const title = this.Things[data.idThings].title;
    if ((title !== '') && (data.content !== title) && (data.content !== undefined)) this.Things[data.idThings].title = data.content;
  }

  onEditThing(data: any): void {
    const thing = this.Things[data.idThings].values;
    if (thing.filter(el => (el.id === data.idThing) && (el.thing !== data.content) && (data.content !== undefined)).length === 1) {
      for (const el of thing) {
        if (el.id === data.idThing) el.thing = data.content;
      }
    }
  }

  onDeleteThings(id: number): void {
    delete this.Things[id];
  }

  onDeleteThing(data: any): void {
    this.Things[data.idThings].values.splice(this.Things[data.idThings].values.findIndex(el => el.id === data.idThing), 1);
  }

  getErrorMessage(title: string): string {
    return this.formTodo.controls[title].errors.required ? 'You must enter a value' : '';
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formTodo = this.fb.group({
      title: ['', [Validators.required]],
    });
  }

}
