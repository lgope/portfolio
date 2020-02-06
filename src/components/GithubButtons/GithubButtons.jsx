import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/lgope/portfolio/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork lgope/portfolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/lgope/portfolio"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star lgope/portfolio on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
