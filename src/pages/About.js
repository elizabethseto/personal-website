import React, { Component } from 'react';

const pStyle = {marginBottom: "25px"};

class About extends Component {
	render() {
		return (
			<div className="condiv">
				<h1>about</h1>
				<div className = "card" style = {{padding: "30px 20px 20px 20px"}}>
					<p style = {pStyle}>
						Hello, I'm Liz! 
					</p>
					<p style = {pStyle}>
					I am a recent graduate from the University of Massachusetts Amherst with full-stack development and team management skills. My goal as a developer is to make solutions that makes lives easier and technology more accessible. 
					</p>
				</div>
			</div>
		)
	}
}
export default About