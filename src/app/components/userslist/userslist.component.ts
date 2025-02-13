import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.scss',
})
export class UserslistComponent implements OnInit {
  usersList: any[] = [];
  filteredUsers: any[] = [];
  filterBy: string = '';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  //list all users oninit
  fetchUsers() {
    this.usersService.getUsers().subscribe((users) => {
      this.usersList = users;
      this.filteredUsers = [...this.usersList]; 
    });
  }

  filter() {
    if (!this.filterBy) {
      this.filteredUsers = [...this.usersList]; // If search bar is empty, show all users
    } else {
      this.filteredUsers = this.usersList.filter((user: any) =>
        user.name.toLowerCase().includes(this.filterBy.toLowerCase())
      );
    }
  }
}