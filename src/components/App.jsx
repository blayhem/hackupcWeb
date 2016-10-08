import React from 'react';

class Papp extends React.Component {
	constructor(props){
		super(props);
		this.state = {showWorkWindow: false, circle: true, bar: false};
	}
	setStore(store){
		this.setState(store);
	}
	showThing(newState){
		let mergedState = Object.assign(this.state, newState);
		this.setState(mergedState);
	}
	render() {

	}
}

export default Papp;
