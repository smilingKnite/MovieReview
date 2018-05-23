import { ViewComponent } from './view/view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: 'movies/new', component: AddComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: 'back', pathMatch: 'full', redirectTo: '/movies' },
  { path: 'movies', pathMatch: 'full', component: HomeComponent },

  { path: 'find-movie/:id', pathMatch: 'full', redirectTo: 'found-movie/:id' },
  { path: 'found-movie/:id', pathMatch: 'full', component: ViewComponent },

  { path: 'write-rev/:id', pathMatch: 'full', redirectTo: 'reviewer/:id' },
  { path: 'reviewer/:id', pathMatch: 'full', component: ReviewComponent },

  // { path: 'edit-pet/:id', pathMatch: 'full', redirectTo: 'editing-pet/:id' },
  // { path: 'editing-pet/:id', pathMatch: 'full', component: EditComponent },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
