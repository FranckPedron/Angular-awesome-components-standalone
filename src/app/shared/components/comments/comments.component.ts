import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {Comment} from "../../../core/models/comment.model";
import {MatLineModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-comments',
  standalone: true,
    imports: [CommonModule, MatListModule, MatLineModule, MatInputModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit{

  @Input()
  comments!: Comment[];

  @Output()
  newComment = new EventEmitter<string>();

  commentCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.commentCtrl = this.formBuilder.control('',[Validators.required, Validators.minLength(10)]);
  }

  onLeaveComment() {
    if (this.commentCtrl.invalid) {
      return;
    }
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
  }
}
