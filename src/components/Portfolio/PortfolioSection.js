/*
 * Copyright (c) tecode-github-portfolio 2019.
 * Class: PortfolioSection.js
 * Author: vantolbennett
 */

import React from 'react';

const PortfolioSection = (props) => {
	return (
		<div>
			<div className="image-box style-3-b">
				<div className="row">
					<div className="col-md-6">
						<div className="overlay-container">
							<img src="images/portfolio-1.jpg" alt=""/>
								<div className="overlay-to-top">
									<p className="small margin-clear"><em>{props.information}</em></p>
								</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="body">
							<h3 className="title"><a href="portfolio-item.html">{props.title}</a></h3>
							<p className="small mb-10"><i className="fa fa-calendar-o pr-1"></i>{props.date}<i
								className="pl-10 pr-1 fa fa-tag"></i>{props.type}</p>
							<div className="separator-2"></div>
							<p className="mb-4 mt-4">{props.body}</p>
							<a href="portfolio-item.html"
							   className="btn btn-default-transparent btn-animation btn-animation--slide-horizontal margin-clear">Read
								More<i className="fa fa-arrow-right pl-10"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioSection;
