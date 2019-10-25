import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Articles } from './article/article.component';
import { Tags } from './tag/tag.component';
import { Article } from './article/add-article/add-article.component';
import { Tag } from './tag/add-tag/add-tag.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllArticles():Observable<Articles[]>{
    return this.http.get<Articles[]>('http://localhost:8080/allArticles');

  }
  getAllTags():Observable<Tags[]>{
    return this.http.get<Tags[]>('http://localhost:8080/allTags');
    
  }
  postArticle(article:Article ):Observable<any>{
    return this.http.post('http://localhost:8080/addArticle',article);
  }
  postTag(tag:Tag):Observable<any>{
    return this.http.post('http://localhost:8080/addTag',tag);
  }
  postTags(tags:Tag[]):Observable<any>{
    return this.http.post('http://localhost:8080/addArticleTags',tags);
  }
  saveArticle():Observable<any>{
    return this.http.post('http://localhost:8080/saveArticle','ok');
  }
}
