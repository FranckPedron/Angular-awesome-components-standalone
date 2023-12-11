import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Post} from "../../models/post.model";
import {MatCardModule} from "@angular/material/card";
import {CommentsComponent} from "../../../shared/components/comments/comments.component";
import {ShortenPipe} from "../../../shared/pipes/shorten.pipe";
import {UsernamePipe} from "../../../shared/pipes/username.pipe";
import {TimeAgoPipe} from "../../../shared/pipes/time-ago.pipe";
import {HighlightDirective} from "../../../shared/directives/highlight.directive";

@Component({
  selector: 'app-post-list-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, CommentsComponent, ShortenPipe, UsernamePipe, TimeAgoPipe, HighlightDirective],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.scss'
})
export class PostListItemComponent implements OnInit {

  @Input()
  post!: Post;

  @Output()
  postCommented = new EventEmitter<{ comment: string, postId: number }>();

  ngOnInit(): void {
  }

  onNewComment(comment: string) {
    this.postCommented.emit({comment, postId: this.post.id});
  }
}
