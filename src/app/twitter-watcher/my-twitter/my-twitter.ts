import { Component, OnInit } from '@angular/core';

import { Tweet } from '../../shared/models/tweet-model'
import { TwitterService } from '../../services/twitter-service'

@Component({
  selector: 'my-twitter',
  templateUrl: './my-twitter.html',
  styleUrls: ['./my-twitter.css']
})
export class MyTwitterComponent  implements OnInit  {

  tweets: Tweet[];

  constructor(
    private twitterService: TwitterService
  ){}

  ngOnInit(): void{
    this.twitterService.refresh$
      .subscribe(() => {
        this.getTweets();
      });

    this.getTweets();
  }

  getTweets(){
    this.twitterService.showMyTweets().subscribe((res: Tweet[]) => {
      this.tweets = res;
    });
  }

}
