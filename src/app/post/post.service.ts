import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
import { Post } from './post.model'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

@Injectable()
export class PostService {

    constructor(private http:Http){

    }
    
    url:string = 'http://rest.learncode.academy/api/camilla/posts'

    posts:Post[] = [];

    getPosts(){
        console.log("get")
        return this.http.get(this.url)
            .map((response:Response) => {
                    this.posts = []
                    for(let p of response.json()){
                        this.posts.push(new Post(p.id,p.nomePessoa, 
                            p.texto, p.qtdLikes))
                    }
                    return this.posts
                }
            )
            .catch((error:Response) => Observable.throw(error))
    }

    removePost(id:number){
       return this.http.delete(this.url + "/" + id)
            .map((response:Response) => response.text)
            .catch((error:Response) => Observable.throw(error))
    }

    addPost(post){
        console.log("adiciona")
        return this.http.post(this.url, post)
            .map((response:Response) =>  response.json())
            .catch((error:Response) => Observable.throw(error))
    }

    editPost(post:Post){
        return this.http.put(this.url + "/" + post.id, post)
            .map((response:Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    }

    like(post: Post){
        post.qtdLikes += 1;
        return this.http.put(this.url + "/" + post.id, post)
            .map((response:Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    }

}