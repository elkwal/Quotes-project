import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { TimeCounterPipe } from './time-count.pipe';
import { GithubDetailsComponent } from './github-details/github-details.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    TimeCounterPipe,
    GithubDetailsComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
