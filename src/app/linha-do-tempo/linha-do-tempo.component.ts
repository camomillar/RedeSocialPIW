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
    this.pservice.like(post).subscribe(
      (data) => {
        console.log("like adicionado")
        this.loadPosts()
      },
      (error) => {
        console.log(error)
      }
    )
  }

  deletarPosts(id:number){
    this.pservice.removePost(id).subscribe(
      (data) => {
        console.log("post deletado")
        this.loadPosts()
      },
      (error) => {
        console.log(error)
      }
    )

  }

  ngOnInit() {
    this.loadPosts()
  }

  loadPosts(){
    this.pservice.getPosts().subscribe(
      (data) => {
        this.posts = data
      },
      (error) => {
        console.log(error)
      }
    )
  }

  editPost(post: Post){
    this.pservice.editPost(post).subscribe(
      (data) => {
        console.log("post editado")
        this.loadPosts()
      }, 
      (error) => {
        console.log(error)
      }
    )
  }

}
