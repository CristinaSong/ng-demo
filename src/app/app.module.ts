import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TodoComponent } from './components/todo/todo.component';
import { SearchComponent } from './components/search/search.component';

import { HeroService } from './service/hero.service'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TodoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

