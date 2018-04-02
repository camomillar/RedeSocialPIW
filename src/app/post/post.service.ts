import { Injectable } from '@angular/core';
import { Post } from './post.model'

@Injectable()
export class PostService {
    
    posts = [
        new Post(1, "Milla","Eu gosto da série Fargo, é muito legal!",10),
        new Post(2, "Kimberly", "Eu não conheço essa série...",5),
        new Post(3, "Adonai", "Essa série é muito boa!",16)
    ]

    getPosts(){
        return this.posts
    }

    removePost(id:number){
        let indice = null;
        for (let i in this.posts){
            if (id == this.posts[i].id){
                indice = i;
            }
        }
        this.posts.splice(indice,1)
    }

    addPost(post: Post){
        this.posts.push(post)
        console.log(this.posts)
    }

    like(post: Post){
        let indice = this.posts.indexOf(post)
        this.posts[indice].qtdLikes +=1
    }

}