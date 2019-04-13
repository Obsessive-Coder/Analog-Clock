import React from 'react';

// Font Awesome Icon Component.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialLink(props) {
  const { location, text, icon } = props.socialLink;
  return (
    <a
      target="_blank"
      href={location}
      rel="noopener noreferrer"
      className="social-link"
    >
      <FontAwesomeIcon fixedWidth icon={icon} size="2x" />
      <small>
        {text}
      </small>
    </a>
  );
}
