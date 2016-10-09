import React from 'react';
import Footer from './Footer.jsx';

class Menu extends React.Component {
	render() {
		let hours = [...Array(24).keys()].map((num) => {
			return <option key={num} value={num}>{num}:00</option>;
		});
		return <div className='menu'>
			<i className="fa fa-calendar" aria-hidden="true"></i>
			<select className='styled-select' id='weekday' name='Day of the week'>
				<option key="mon" value="1">Monday</option>
				<option key="tue" value="2">Tuesday</option>
				<option key="wed" value="3">Wednesday</option>
				<option key="thu" value="4">Thursday</option>
				<option key="fri" value="5">Friday</option>
				<option key="sat" value="6">Saturday</option>
				<option key="sun" value="0">Sunday</option>
		</select>
		<br></br>
		<i className="fa fa-clock-o" aria-hidden="true"></i>
		<select className='styled-select' id="hour" name='Hour'>
			{hours}
		</select>
		<br></br>
		<img src='./hat.png'></img>
		<p>Select the day of the week and period of time if you want to see where
		the magic happens!</p>
		<Footer/>
		</div>;
	}
}

export default Menu;
