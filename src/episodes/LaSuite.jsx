import React from 'react';

export default function LaSuite(props) {
  const { setEpisode } = props;
  return (
    <div>
      la suite<br /><br />
    <div onClick={() => setEpisode('trouverstylo')}>marcher dans la rue</div>
    </div>
  );
}
