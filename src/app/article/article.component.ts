import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ApiService } from '../api.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit ,OnDestroy{
  
  articles:Articles[]=[];
  dtTrigger: Subject<any> = new Subject();
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllarticles();
  }
  
  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
  getAllarticles(){
    this.apiService.getAllArticles().subscribe(
      res => {
        this.articles=res;
        this.dtTrigger.next();
      },
      err => {
        alert("An error has occurred while getting articles");
      }
    );
  }

}
export interface Articles{
  id:number,
  title:string,
  descreption:string,
  image:string,
  categories:string,
  createdate:Date
}
