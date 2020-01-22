import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatSelectModule,
  MatExpansionModule,
  MatDividerModule,
  MatListModule,
  MatCheckboxModule,
  MatDialogModule
} from "@angular/material";
import { ThingsComponent } from './things/things.component';
import { DialogComponent } from './things/dialog/dialog.component';

@NgModule({
  declarations: [TodoComponent, ThingsComponent, DialogComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogComponent
  ],
})
export class TodoModule { }
