import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowTwitterComponent } from './twitter-watcher/show-twitter/show-twitter';
import { TwitterWatcherModule } from './twitter-watcher/twitter-watcher.module';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'twitterwatcher',
    pathMatch: 'full'
  },
  {
    path: 'twitterwatcher',
    children: [
      {
        path: '',
        component: ShowTwitterComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'twitterwatcher'
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    TwitterWatcherModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
