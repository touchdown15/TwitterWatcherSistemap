import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material/material-module';
import { MyTwitterComponent } from './my-twitter/my-twitter';
import { PostTwitterComponent } from './post-twitter/post-twitter';
import { ShowTwitterComponent } from './show-twitter/show-twitter';
import { TrackerTwitterComponent } from './tracker-twitter/tracker-twitter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostTwitterComponent,
    MyTwitterComponent,
    ShowTwitterComponent,
    TrackerTwitterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TwitterWatcherModule { }
