import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportantTasksComponent } from './important-tasks/important-tasks.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskService } from './services/task.service';

const routes: Routes = [
  { path: 'important-tasks', component: ImportantTasksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ImportantTasksComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    DragDropModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }