import React, { Fragment } from 'react';
import Sushi from '../components/Sushi';
import MoreButton from '../components/MoreButton';

const SushiContainer = (props) => {
	return (
		<Fragment>
			<div className="belt">
				{props.sushis.map((sushi) => {
					return (
						<Sushi
							key={sushi.id}
							sushi={sushi}
							eatSushi={props.eatSushi}
							finished={props.eatenSushi.includes(sushi)}
						/>
					);
				})}
				<MoreButton addMoreSushi={props.addMoreSushi} />
			</div>
		</Fragment>
	);
};

export default SushiContainer;
