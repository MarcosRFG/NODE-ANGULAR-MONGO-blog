import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private listPosts: Array<any> = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.$sincListPosts.subscribe((data: boolean) => {
      if (data) {
        this.callListPosts();
      }
    });
  }

  private callListPosts(): void {
    this.postsService.listPosts().subscribe(
      (res: any) => {
        console.log('res', res);
        this.listPosts = res;
      },
      (err: any) => {
        console.log('err', err);
      }
    );
  }

}
