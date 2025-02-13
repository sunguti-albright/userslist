import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.scss'
})
export class UserslistComponent implements OnInit {
usersList:any=[]
  constructor(private usersService : UsersService){}

  ngOnInit(): void {
    this.fetchUsers()
  }

fetchUsers(){
  return this.usersService.getUsers().subscribe(users =>{
    this.usersList = users
    console.log('users>>>>>', this.usersList)
  })
}
}
