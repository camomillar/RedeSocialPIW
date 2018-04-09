import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { PostinputComponent } from './postinput/postinput.component';
import { routing } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    LinhaDoTempoComponent,
    PostinputComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
