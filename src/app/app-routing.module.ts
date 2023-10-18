import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { ImportantTasksComponent } from './important-tasks/important-tasks.component';

const routes: Routes = [
  { path: 'tasks', component: TodoListComponent },
  { path: 'important-tasks', component: ImportantTasksComponent },
  // Other routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }