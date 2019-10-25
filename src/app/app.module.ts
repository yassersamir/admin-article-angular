import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleComponent } from './article/article.component';
import { TagComponent } from './tag/tag.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { AddTagComponent } from './tag/add-tag/add-tag.component';
import { MatFormFieldModule, MatSelectModule, MatOptionModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ArticleComponent,
    TagComponent,
    AddArticleComponent,
    AddTagComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule,
    FroalaEditorModule.forRoot(),
     FroalaViewModule.forRoot(),
     MatFormFieldModule,
     MatSelectModule,
     MatOptionModule ,
     BrowserAnimationsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
