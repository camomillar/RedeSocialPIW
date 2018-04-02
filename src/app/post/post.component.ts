import { Post } from './post.model'
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() posts: Post[];
  @Input() index: number;
  @Output() recebeuLike = new EventEmitter<any>();
  @Output() removePost = new EventEmitter();
   
  constructor() { }

  Likou(){
    this.recebeuLike.emit(this.posts[this.index]);
  }

  ClickRemover(id:number){
    this.removePost.emit(id)
    
  }

  ngOnInit() {
  }

}
