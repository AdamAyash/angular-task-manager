import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) public userId!: string;
  @Output() public close = new EventEmitter();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  private tasksService = inject(TasksService);

  public onCancel(): void {
    this.close.emit();
  }

  public onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId,
    );

    this.close.emit();
  }
}
