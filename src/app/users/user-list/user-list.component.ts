import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { id: 1, name: 'Usuario 1', title: 'Usuario 1', content: 'Detalles de Usuario 1' },
    { id: 2, name: 'Usuario 2', title: 'Usuario 2', content: 'Detalles de Usuario 2' },
    { id: 3, name: 'Usuario 3', title: 'Usuario 3', content: 'Detalles de Usuario 3' }
  ];

  selectedUser: any;

  showUserDetails(user: any) {
    this.selectedUser = user;
  }
}
