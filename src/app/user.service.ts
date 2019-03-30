import { Injectable } from '@angular/core';
// import { Post } from '../posts/post.model';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( public http: HttpClient) { }

  getPosts() {
    // this.http.get<{ message: string; posts: any}>('http://localhost:3000/api/posts')
    // .pipe(map( (postData) => {
    //   return postData.posts.map( post => {
    //     return {
    //       title: post.name,
    //       content: post.content,
    //       id: post._id
    //     };
    //   });
    // }))
    // .subscribe(( transformedPosts) => {
    //   this.posts = transformedPosts;
    //   this.postsUpdated.next([...this.posts]);
    // });
  }


}
