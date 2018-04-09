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
  @Output() editPost = new EventEmitter();
  
  edicao:boolean = false;
  textoEdit:string = "";

  constructor() { }

  Likou(){
    this.recebeuLike.emit(this.posts[this.index]);
  }

  ClickRemover(id:number){
    this.removePost.emit(id)
  }

  edit(post: Post){
    post.texto = this.textoEdit
    this.edicao = false;
    this.textoEdit = "";
    this.editPost.emit(post)
  }

  cancelar(){
    this.edicao = false;
    this.textoEdit = "";
  }

  ativarEdicao(){
    this.edicao = true;
    this.textoEdit = this.posts[this.index].texto
  }

  ngOnInit() {

  }

}
