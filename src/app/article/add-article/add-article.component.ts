import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Tags } from 'src/app/tag/tag.component';
import { FormControl } from '@angular/forms';
import { Tag } from 'src/app/tag/add-tag/add-tag.component';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  toppings = new FormControl();
  tags: Tags[] = [];
  selected: Tag[] = [];
  model: Article = {
    id: 0,
    title: '',
    descreption: '',
    image: '',
    createdate: '',
    user_name: ''

  };
  url: any;
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;

      }
    }
  }
  postArticle() {
    this.apiService.postArticle(this.model).subscribe(
      res => {
        this.apiService.postTags(this.selected).subscribe(
          res => {
            location.reload();
          },
          err => {
            alert("An error has occurred while sending article");
          }
        )
      }
    );
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getAllTags().subscribe(
      res => {
        this.tags = res;
      },
      err => {
        alert("An error has occurred while getting tags");
      }
    );
  }

}
export interface Article {
  id: number,
  title: string,
  descreption: string,
  image: string,
  createdate: string,
  user_name: string

}
