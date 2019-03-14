/*
 * Copyright (c) tecode-github-portfolio 2019.
 * Class: Portfolio.js
 * Author: vantolbennett
 */

import React from 'react';
import Section from '../../components/Section/Section';
import PortfolioSection from '../../components/Portfolio/PortfolioSection'

const Portfolio = (props) => {
	return (
		<Section>
			<PortfolioSection title="Demo"
			                  body="Lorem ipsum dolor sit amet, consectetur
			                  adipisicing elit. Aliquam atque ipsam nihialal.
			                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			                   Nam laudantium, provident culpa saepe. Lorem ipsum dolor sit amet,
			                   consectetur adipisicing elit. Aliquam atque ipsam nihialal.
			                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			                   Nam laudantium, provident culpa saepe.
			                   Nam laudantium, provident culpa saepe. Lorem ipsum dolor sit amet."
			/>
			<PortfolioSection title="Demo2"
			                  body="Lorem ipsum dolor sit amet, consectetur
			                  adipisicing elit. Aliquam atque ipsam nihialal.
			                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			                   Nam laudantium, provident culpa saepe. Lorem ipsum dolor sit amet,
			                   consectetur adipisicing elit. Aliquam atque ipsam nihialal.
			                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			                   Nam laudantium, provident culpa saepe.
			                   Nam laudantium, provident culpa saepe. Lorem ipsum dolor sit amet."
			/>
		</Section>
	);
};

export default Portfolio;
