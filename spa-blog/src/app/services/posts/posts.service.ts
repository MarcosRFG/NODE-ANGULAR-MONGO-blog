import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private urlListPosts: string = 'http://localhost:8081/posts/list';
  private urlSendPost: string = 'http://localhost:8081/posts/insert';
  public $sincListPosts: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private http: HttpClient) { }

  public listPosts(): Observable<any> {
    return this.http.get(this.urlListPosts).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => of('Error Service', err))
    );
  }

  public sendPost(post:any): Observable<any> {
    console.log('post', post)
    return this.http.post(this.urlSendPost, post).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => of('Error Service', err))
    );
  }

  public setSincListPosts(value: boolean): void {
    this.$sincListPosts.next(value);
  }

}
