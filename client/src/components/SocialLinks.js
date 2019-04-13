import React from 'react';
import SocialLink from './SocialLink';
// Font Awesome Icons.
import { faGlobe, faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin as fabLInkedin, faGithubSquare as fabGithubSquare } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  {
    location: 'http://www.jaredhuffstutler.com',
    text: 'portfolio',
    icon: faGlobe
  },
  {
    location: 'http://www.jaredhuffstutler.com/resume.html',
    text: 'resume',
    icon: faFile
  },
  {
    location: 'https://www.linkedin.com/in/jared-huffstutler/',
    text: 'linkedin',
    icon: fabLInkedin
  },
  {
    location: 'https://github.com/Obsessive-Coder',
    text: 'github',
    icon: fabGithubSquare
  }
]

export default function SocialLinks(props) {
  return (
    <div className="social-links">
      {socialLinks.map((socialLink, index) => (
        <SocialLink key={socialLink.text + index} socialLink={socialLink} />
      ))}
    </div>
  );
}
