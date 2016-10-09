import React from 'react';

class Footer extends React.Component {
	render() {
    return <div className='footer'>
      <p className='att'>A project by:</p>
      <p>Daniel Fernández</p>
      <i className="fa fa-github" aria-hidden="true"></i>
      <i className="fa fa-twitter" aria-hidden="true"></i>
      <p>Adrián Gallego</p>
      <i className="fa fa-github" aria-hidden="true"></i>
      <p>Andrés Sanchez</p>
      <i className="fa fa-github" aria-hidden="true"></i>
    </div>;
	}
}

export default Footer;
