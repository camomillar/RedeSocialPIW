import { Post } from './../post/post.model';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css'],
  providers: [PostService]
})

export class LinhaDoTempoComponent implements OnInit {

  posts: Post[]

  constructor(private pservice:PostService) { 
  }

  capturarLike(post: Post) {
    this.pservice.like(post)
  }

  deletarPosts(id:number){
    this.pservice.removePost(id)

  }

  ngOnInit() {
    this.posts = this.pservice.getPosts()
  }

}
