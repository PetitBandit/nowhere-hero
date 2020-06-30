import React from 'react';

export default function LeDepart(props) {
  const { setEpisode } = props;
  return (
    <div>
      le depart
      <br />

      <div onClick={() => setEpisode('suite')}>voir ldiv suite</div>
    </div>
  );
}
