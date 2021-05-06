import { Component } from '@angular/core';

import { TwitterService } from '../../services/twitter-service'

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'post-twitter',
  templateUrl: './post-twitter.html',
  styleUrls: ['./post-twitter.css']
})
export class PostTwitterComponent {
  textForPost: FormGroup;

  constructor(
    private twitterService: TwitterService,
    private fb: FormBuilder
  ){}

  ngOnInit(): void{
    this.textForPost = this.fb.group({
      status: ['']
    });
  }

  submit(): void {
    const text = this.textForPost.getRawValue();
    this.postTweet(text);

  }


  postTweet(request){
    this.twitterService.postTweets(request).subscribe(data => console.log(data));
  }

}
