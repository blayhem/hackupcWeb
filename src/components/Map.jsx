import React from 'react';

class Map extends React.Component {
	render() {
		return <div className='map'>
      <iframe width="100%" height="100%" frameBorder="0" 
      src="https://blayhem.carto.com/viz/0a1776ae-8d44-11e6-ab2b-0e233c30368f/embed_map" 
      allowFullScreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
    </div>;
	}
}

export default Map;
