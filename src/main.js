import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

function panel(){
	ReactDOM.render(
		<App/>,
		document.getElementById('container')
	);
}

document.addEventListener('DOMContentLoaded', panel());
