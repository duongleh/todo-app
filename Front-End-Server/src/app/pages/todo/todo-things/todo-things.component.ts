import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ThingDialogComponent } from './thing-dialog/thing-dialog.component';

@Component({
  selector: 'app-todo-things',
  templateUrl: './todo-things.component.html',
  styleUrls: ['./todo-things.component.scss'],
})
export class TodoThingsComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() values: any;
  @Input() selected: string;

  @Output() addThing = new EventEmitter();
  @Output() editThings = new EventEmitter();
  @Output() editThing = new EventEmitter();
  @Output() deleteThings = new EventEmitter();
  @Output() deleteThing = new EventEmitter();

  onAddThing() {
    this.openDialog('', this.addThing);
  }

  onEditThings() {
    this.openDialog(this.title, this.editThings);
  }

  onEditThing(thing: string, id: number) {
    this.openDialog(thing, this.editThing, id);
  }

  onDeleteThings() {
    this.deleteThings.emit(this.id);
  }

  onDeleteThing(id: number) {
    this.deleteThing.emit({ idThings: this.id, idThing: id });
  }

  openDialog(content: string, event: EventEmitter<unknown>, idThing?: number): void {
    const dialogRef = this.dialog.open(ThingDialogComponent, {
      width: '500px',
      data: { content }
    });

    dialogRef.afterClosed().subscribe(result => {
      event.emit({ content: result, idThings: this.id, idThing });
    });
  }

  getCompletedSatus() {
    const completed = this.values.filter(el => el.isDone).length;
    const all = this.values.length;
    return this.selected === 'option1' ? `Status: ${completed}/${all}` : (this.selected === 'option2' ? `Status: ${completed}/${completed}` : `Status: 0/${all - completed}`);
  }

  getDisplayStatus(status: boolean) {
    return this.selected === 'option2' ? status : (this.selected === 'option3' ? !status : true);
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
