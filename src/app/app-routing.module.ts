import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnglishComponent } from './english/english.component';
import { TeluguComponent } from './telugu/telugu.component';
import { SongsComponent } from './songs/songs.component';


const routes: Routes = [
  { path: 'Home',component: HomeComponent },
  { path: 'English',component: EnglishComponent },
  { path: 'Telugu',component: TeluguComponent },
  { path: 'Songs',component: SongsComponent },
  { path: '',   redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
