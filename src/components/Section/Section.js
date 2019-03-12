import React from 'react';

const Section = (props) => {
	return (
		<section className="main-container">
			<div className="container">
				<div className="row">
					{props.children}
				</div>
			</div>
		</section>
	);
};

export default Section;
