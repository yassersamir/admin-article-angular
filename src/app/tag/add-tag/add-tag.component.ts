import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit {
  model:Tag={
    id:0,
    title:'',
    createAt:null
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  postTag(){
    this.apiService.postTag(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert("An error has occurred while sending article");
      }
    );
  }

}
export interface Tag {
  id:number,
  title:string,
  createAt:Date;
}
