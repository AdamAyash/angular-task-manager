import { Component, EventEmitter, Input, input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   @Input({required: true}) public id!: string;
   @Input({required: true}) public avatar!: string; 
   @Input({required: true}) public name!: string;
   @Output() select = new EventEmitter<string>();

  public get imagePath()  {
      return 'assets/users/' + this.avatar
    }

  public onSelectUser(): void {
    this.select.emit(this.id);
  }
}
