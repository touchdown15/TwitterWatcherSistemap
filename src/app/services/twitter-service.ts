import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Tweet } from '../shared/models/tweet-model';

//ulr responsável pelas chamadas
const URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http:HttpClient) { }

  //Refresh após adicionar um novo tweet
  private _refresh$ = new Subject<void>();

  get refresh$(){
    return this._refresh$;
  }

  //Mostrar todos os 10 primeiros tweets do usuario
  showMyTweets(): Observable<Tweet[]>{
    return this.http.get<Tweet[]>(URL+'home_timeline')
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
    return this.http.get<Tweet[]>(URL+'user_timeline?user='+request)
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

  //Publicar o tweet
  postTweets(request): Observable<Tweet>{
    return this.http.post<Tweet>(URL+'post_tweet', request)
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }

}
