import { Component, OnInit ,OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit ,OnDestroy {
  
  tags:Tags[]=[];
  dtTrigger: Subject<any> = new Subject();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllTags();
  }
  getAllTags(){
    this.apiService.getAllTags().subscribe(
      res => {
        this.tags=res;
        this.dtTrigger.next();
      },
      err => {
        alert("An error has occurred while getting tags");
      }
    );
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

}
export interface Tags{
  id:number,
  title:string,
  createdAt:Date
}
