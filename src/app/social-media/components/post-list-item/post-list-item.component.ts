import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Post} from "../../models/post.model";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-post-list-item',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.scss'
})
export class PostListItemComponent implements OnInit{

  @Input()
  post!: Post;

  ngOnInit(): void {
  }

}