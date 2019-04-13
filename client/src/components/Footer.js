import React from 'react';
import CreatorName from './CreatorName';
import SocialLinks from './SocialLinks';

export default function Footer(props) {
  return (
    <footer className="footer">
      <CreatorName />
      <SocialLinks />
    </footer>
  );
}
