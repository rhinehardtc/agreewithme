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
  public postBarClass: string = "post-bar";

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts()
        .subscribe(posts => {
            this.posts = posts;
        });
  }

  togglePostBar(){
    this.postBarClass === "post-bar" ? this.postBarClass = "collapsed-post-bar" : this.postBarClass = "post-bar";
  }

}
