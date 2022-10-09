import React, { Component } from 'react';

const cardStyle = {padding: "15px 0px 20px 20px", margin: "10px 0px 10px 0px"}

class Experience extends Component {
	render() {
		return (
			<div className="condiv">
				<h1>experience</h1>
				<div className = "card" style = {cardStyle}>
					<h2>associate software engineer</h2>
					<p><em>liberty mutual insurance, 9/2022 - present</em></p>
					<p>
						Full-stack development on Cloud Engineering and Services Team; build cloud infrastructure and products to support application teams.
					</p>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>software engineer intern</h2>
					<p><em>liberty mutual insurance, 6/2022 - 9/2022</em></p>
					<p>
						Full-stack development on Cloud Engineering and Services Team; build cloud products to support application teams.
					</p>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>software development co-op</h2>
					<p><em>liberty mutual insurance, 1/2022 - 6/2022</em></p>
					<p>
						Full-stack development in Dwellbeing app, an Android and iOS application for personalized home maintenance tasks; implemented/debugged multiple frontend and backend features.
					</p>
				</div>
			</div>
		)
	}
}
export default Experience