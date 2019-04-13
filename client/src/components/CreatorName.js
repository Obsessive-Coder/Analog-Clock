import React from 'react';

export default function CreatorName(props) {
  return (
    <div className="creator-name">
      <p>
        Created by&nbsp;
        <a
          target="_blank"
          href="http://www.jaredhuffstutler.com"
        >
          Jared Huffstutler
        </a>
      </p>
      <small>
        <a
          href="mailto:jaredhuffstutler@email.arizona.edu"
          className="email-link"
        >
          jaredhuff85@gmail.com
        </a>
      </small>
    </div>
  );
}
