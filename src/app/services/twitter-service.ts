import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Tweet } from '../shared/models/tweet-model';

const url = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http:HttpClient) { }

  /*save(todolist : TodoList): Observable<TodoList> {
    return this.http.post<TodoList>(url+'api/v1/todolist', todolist);
  }*/

  //Mostrar todos os 10 primeiros tweets do usuario
  showMyTweets(): Observable<Tweet[]>{
    return this.http.get<Tweet[]>(url+'home_timeline')
      .pipe(
        map(res => res['data'].map(obj => {
          return{
            user: {
              name: obj.user.name,
              screen_name: obj.user.screen_name,
              profile_image_url: obj.user.profile_image_url
            },
            full_text: obj.full_text,
            created_at: obj.created_at
          }
        }))
      );
  }

  //Mostrar os 10 primeiros Tweets do usuario buscado
  showTweetsOfUser(request): Observable<Tweet[]>{
    return this.http.get<Tweet[]>(url+'user_timeline?user='+request)
      .pipe(
        map(res => res['data'].map(obj => {
          return{
            user: {
              name: obj.user.name,
              screen_name: obj.user.screen_name,
              profile_image_url: obj.user.profile_image_url
            },
            full_text: obj.full_text,
            created_at: obj.created_at
          }
        }))
      );
  }

  postTweets(request): Observable<Tweet>{
    return this.http.post<Tweet>(url+'post_tweet', request);
  }

}
