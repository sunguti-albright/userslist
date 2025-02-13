import { Component } from '@angular/core';
import { UserslistComponent } from './components/userslist/userslist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserslistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'users';
}
