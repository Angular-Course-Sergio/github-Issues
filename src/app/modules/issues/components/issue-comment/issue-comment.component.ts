import { Component, input } from '@angular/core';
import { GithubIssue } from '../../interfaces';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'issue-comment',
  standalone: true,
  imports: [MarkdownComponent],
  templateUrl: './issue-comment.component.html',
})
export class IssueCommentComponent {
  issue = input.required<GithubIssue>();
}
