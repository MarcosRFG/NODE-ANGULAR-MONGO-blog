import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelModule } from 'primeng/panel';

import { HomeComponent } from './components/views/home/home.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AppRoutingModule } from './components/app.routing';
import { PostsComponent } from './components/shared/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { NewPostComponent } from './components/shared/new-post/new-post.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    PostsComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabMenuModule,
    PanelModule,
    InputTextareaModule,
    ButtonModule,
    FieldsetModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
