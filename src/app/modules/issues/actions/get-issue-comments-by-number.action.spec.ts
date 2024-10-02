import { environment } from 'src/environments/environment';
import { getIssueCommentsByNumber } from './get-issue-comments-by-number.action';

const issueNumber = '123';
const mockComments: any[] = [
  { id: 1, body: 'First comment', user: { login: 'user1' } },
  { id: 2, body: 'Second comment', user: { login: 'user2' } },
];

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

describe('getIssueComments', () => {
  it('should fetch issue comments succesfully', async () => {
    const requestUrl = `${BASE_URL}/issues/${issueNumber}/comments`;
    const issueCommentsResponse = new Response(JSON.stringify(mockComments), {
      status: 200,
      statusText: 'OK',
    });

    spyOn(window, 'fetch').and.resolveTo(issueCommentsResponse);

    const comments = await getIssueCommentsByNumber(issueNumber);

    expect(window.fetch).toHaveBeenCalledWith(requestUrl, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
  });

  it('should throw an error if the response is not ok', async () => {
    const requestUrl = `${BASE_URL}/issues/${issueNumber}/comments`;
    const issueCommentsResponse = new Response(null, {
      status: 404,
      statusText: 'OK',
    });

    spyOn(window, 'fetch').and.resolveTo(issueCommentsResponse);

    try {
      const comments = await getIssueCommentsByNumber(issueNumber);
      expect(true).toBeFalse();
    } catch (error) {
      expect(error).toBe("Can't load comments");
    }
  });
});
