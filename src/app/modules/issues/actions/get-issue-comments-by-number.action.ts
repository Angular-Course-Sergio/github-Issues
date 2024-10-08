import { sleep } from '@helpers/sleep';
import { GithubIssue } from '../interfaces';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getIssueCommentsByNumber = async (
  issueNumber: string
): Promise<GithubIssue[]> => {
  try {
    const resp = await fetch(`${BASE_URL}/issues/${issueNumber}/comments`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw "Can't load comments";

    const comments: GithubIssue[] = await resp.json();

    return comments;
  } catch (_) {
    throw "Can't load comments";
  }
};
