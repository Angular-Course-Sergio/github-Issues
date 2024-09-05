import { GithubLabel } from '../interfaces';

export const getLabels = async (): Promise<GithubLabel[]> => {
  try {
    const resp = await fetch(
      'https://api.github.com/repos/angular/angular/labels'
    );

    if (!resp.ok) throw "Can't load labels";

    const labels: GithubLabel[] = await resp.json();
    console.log({ labels });

    return labels;
  } catch (_) {
    throw "Can't load labels";
  }
};
