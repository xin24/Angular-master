import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { GetphotoService } from './services/getphoto.service'
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { ChineseMovieComponent } from './components/chinese-movie/chinese-movie.component';

const appRoutes:Routes = [
  {path:"",component:UserComponent},
  {path:"about",component:AboutusComponent},
  {path:"chinesemovie",component:ChineseMovieComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    ChineseMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetphotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
