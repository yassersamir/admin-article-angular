import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { TagComponent } from './tag/tag.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { AddTagComponent } from './tag/add-tag/add-tag.component';


const routes: Routes = [
  {
    path:'articles',
    component:ArticleComponent
  },
  {
    path:'tags',
    component:TagComponent
  },
  {
    path:'addarticle',
    component:AddArticleComponent
  }
  ,
  {
    path:'addtag',
    component:AddTagComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
