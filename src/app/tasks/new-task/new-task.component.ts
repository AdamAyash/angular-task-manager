import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() public canceled = new EventEmitter();
  @Output() public add = new EventEmitter<NewTaskData>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  public onCancel(): void {
    this.canceled.emit();
  }

  public onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
