import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) public userId!: string;
  @Input({ required: true }) public name!: string;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  public get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  public onCompeteTask(taskId: string) {
    this.tasksService.removeTask(taskId);
  }

  public onAddTask() {
    this.isAddingTask = true;
  }

  public onNewAddTask(taskData: NewTaskData) {
    this.isAddingTask = false;
  }

  public onCloseTask() {
    this.isAddingTask = false;
  }
}
