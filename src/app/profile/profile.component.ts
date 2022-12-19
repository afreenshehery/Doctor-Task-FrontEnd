import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service/staff-service/service.service';
export class CommentNode {
  text: string = '';
  anwsers: CommentNode[] = [];
  isOpen!: false;
  constructor(text: string) {
    this.text = text;
  }

  addAnwser(newComment: CommentNode) {
    this.anwsers.push(newComment);
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private service: ServiceService) {}

  @Input() comments: CommentNode[] = [];
  text!: string;
  data: any = [];

  ngOnInit() {}

  addComment(comment: CommentNode) {
    this.data.push({ name: this.text });
    comment.addAnwser(new CommentNode(this.text));
    console.log(this.data);
  }
}
