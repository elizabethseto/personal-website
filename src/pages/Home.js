import React, { Component } from 'react';
import profilepic from '.././resources/profilepicture.JPG';

class Home extends Component {
	render() {
		return (
			<div className="condiv home">
				<img src={profilepic} className="profilepic"></img>
				<h1> elizabeth seto </h1>
				<p> software engineer based in seattle </p>
			</div>
		)
	}
}
export default Home