import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output()
  select = new EventEmitter<string>();

  public get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  public onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
