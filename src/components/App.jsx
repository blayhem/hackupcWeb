import React from 'react';
import Header from './Header.jsx';
import Map from './Map.jsx';
import Menu from './Menu.jsx';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	setStore(store){
		this.setState(store);
	}
	render() {
		return <div>
			<Header/>
			<Menu/>
			<Map/>
		</div>;
	}
}

export default App;
