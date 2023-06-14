import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
  posts!: any[]; // Utilizamos el operador ! para indicar que la propiedad será inicializada en ngOnInit

  ngOnInit() {
    this.posts = [
      { id: 1, title: 'Post 1', content: 'Detalles de Post 1' },
      { id: 2, title: 'Post 2', content: 'Detalles de Post 2' },
      { id: 3, title: 'Post 3', content: 'Detalles de Post 3' }
    ];
  }
  selectedPost: any;

  showPostDetails(post: any) {
    this.selectedPost = post;
  }
}
