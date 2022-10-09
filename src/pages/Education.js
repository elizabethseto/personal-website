import React, { Component } from 'react';

const cardStyle = {padding: "30px 20px 35px 20px"}

const courses = [
	'cs121 - intro to problem solving',
	'cs187 - data structures',
	'cs220 - programming methodology',
	'cs230 - computer system principles',
	'cs240 - reasoning under uncertainty',
	'cs250 - discrete mathematics',,
	'cs311 - algorithms',
	'cs326 - web programming',
	'cs345 - practice and applications of data management',
	'cs377 - operating systems',
	'cs383 - artifical intelligence',
	'cs453 - computer networks',
	'cs446 - search engines',
	'cs563 - internet law and policy',
	'cics305 - social issues in computing'
]

const liStyle = {paddingLeft: "30px", marginTop: "10px"}

class Education extends Component {
	render() {
		return (
			<div className="condiv">
				<h1>education</h1>
				<div className = "card" style = {cardStyle}>
					<h2 style = {{marginBottom: "15px"}}>university of massachusetts amherst, 2019 - 2022</h2>
					<p><em>bachelor of science, computer science</em></p>
				</div>
				<h1>coursework</h1>
				<ul style = {{listStyleType: "none"}}>
					{courses.map(course => 
						<li className = "card" style = {{padding: "10px 0px 10px 20px", margin: "10px 0px 10px 0px"}}>
							{course}
						</li>
					)}
				</ul>	
			</div>
		)
	}
}
export default Education