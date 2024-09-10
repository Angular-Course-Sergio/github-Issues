import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GithubIssue, State } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'issue-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './issue-item.component.html',
})
export class IssueItemComponent {
  issue = input.required<GithubIssue>();

  get isOpen() {
    return this.issue().state === State.Open;
  }
}
