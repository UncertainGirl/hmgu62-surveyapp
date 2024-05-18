import { Component } from '@angular/core';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrl: './opinion.component.scss'
})
export class OpinionComponent {
  commentObject: any = {};
  comments: Array<any> = [];

  addComment(){
    if (this.commentObject.username && this.commentObject.comment){
      this.commentObject['date'] = new Date();
      this.comments.push({...this.commentObject});
    }
  }
}
