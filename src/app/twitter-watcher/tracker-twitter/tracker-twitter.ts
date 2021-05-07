import { Component, OnInit } from '@angular/core';

import { Tweet } from '../../shared/models/tweet-model'
import { TwitterService } from '../../services/twitter-service'

import { debounceTime } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'tracker-twitter',
  templateUrl: './tracker-twitter.html',
  styleUrls: ['./tracker-twitter.css']
})
export class TrackerTwitterComponent implements OnInit {

  tweetsOfUser: Tweet[];
  searchFilter: FormGroup;

  constructor(
    private twitterService: TwitterService,
    private fb: FormBuilder
  ){}

  ngOnInit(): void{
    this.searchFilter = this.fb.group({
      twitterUser: ['']
    });

    this.searchFilter.get('twitterUser').valueChanges
    .pipe(debounceTime(2000))
    .subscribe((val:string) =>{
      this.getTweetsOfUser(val);
    });


  }

  getTweetsOfUser(request){
    this.twitterService.showTweetsOfUser(request).subscribe((res: Tweet[]) => {
      this.tweetsOfUser = res;
    });
  }

}
