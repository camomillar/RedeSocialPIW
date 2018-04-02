import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-postinput',
  templateUrl: './postinput.component.html',
  styleUrls: ['./postinput.component.css'],
  providers: [PostService]
})
export class PostinputComponent implements OnInit {
  id: number;
  nomePessoa: string = ''
  qtdLikes: number = 0
  texto: string = ''
  constructor(private pservice: PostService){ 

  }
  
  submeterPost(event){
    event.preventDefault() 
    if(this.nomePessoa != '' && this.texto != ''){
      this.id = this.pservice.getPosts().length +1;
      let p = new Post(this.id, this.nomePessoa, this.texto, this.qtdLikes)
      console.log(p)
      this.pservice.addPost(p)
    }
  }
  ngOnInit() {
    
  }

}
