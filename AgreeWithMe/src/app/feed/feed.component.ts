import { Component, OnInit } from '@angular/core';
import { IPost } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  public posts: IPost[] = [];

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts()
        .subscribe(posts => {
            this.posts = posts;
        });
  }

}
