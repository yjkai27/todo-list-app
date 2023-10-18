import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskService, Task } from '../services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: Task[] = [];
  importantTasks: Task[] = [];
  todayTasks: Task[] = [];
  newTaskTitle: string = '';
  newTaskImportant: boolean = false;
  selectedTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  dropTask(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  addTask(): void {
    if (this.newTaskTitle.trim() === '') {
      return;
    }

    const newTask: Task = {
      title: this.newTaskTitle,
      completed: false,
      important: this.newTaskImportant
    };

    this.taskService.addTask(newTask);

    if (newTask.important) {
      this.importantTasks.push(newTask);
    }

    this.clearForm();
  }

  toggleCompleted(task: Task): void {
    task.completed = !task.completed;
  }

  toggleImportance(task: Task): void {
    task.important = !task.important;
  }

  editTask(task: Task): void {
    this.selectedTask = task;
    this.newTaskTitle = task.title;
    this.newTaskImportant = task.important;
  }

  updateTask(event: any): void {
    const target = event.target || event.srcElement;
    if (this.selectedTask) {
      this.selectedTask.title = target.textContent || '';
      this.selectedTask.important = this.newTaskImportant;
      this.selectedTask = null;
      this.clearForm();
    }
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
      if (task.important) {
        const importantIndex = this.importantTasks.indexOf(task);
        if (importantIndex > -1) {
          this.importantTasks.splice(importantIndex, 1);
        }
      }
    }
  }

  clearForm(): void {
    this.newTaskTitle = '';
    this.newTaskImportant = false;
  }
}