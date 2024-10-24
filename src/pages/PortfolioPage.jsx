import React from 'react';
import Project from '../components/Project';

const PortfolioPage = () => (
  <div>
    <Project title="Project 1" image="/assets/images/project1.png" appLink="link-to-app" repoLink="link-to-repo" />
    {/* Add more projects similarly */}
  </div>
);

export default PortfolioPage;
