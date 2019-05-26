import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';
import * as moment from 'moment';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  private textPost: string = '';

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  private sendNewPost(): void {
    const date = new Date();
    const requestPost: any = {
      'user': 'Marcos',
      'date': moment().format('DD/MM/YYYY'),
      'message': this.textPost
    };

    this.postsService.sendPost(requestPost).subscribe(
      (res: any) => {
        console.log('res', res);
        this.postsService.setSincListPosts(true);
        this.textPost = '';
      },
      (err: any) => {
        console.log('err', err)
      }
    );
  }

}
