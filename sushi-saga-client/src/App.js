import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/sushis';

class App extends Component {
	state = {
		sushis: [],
		displayIndex: 0,
		eaten: [],
		budget: 100
	};
	displayOnlyFourSushi = () => {
		return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex + 4);
	};
	addMoreSushi = (event) => {
		// console.log(event);

		let newDisplayIndex = this.state.displayIndex + 4;
		this.setState({
			displayIndex: newDisplayIndex
		});
	};
	eatSushi = (sushi) => {
		const budgetLeft = this.state.budget - sushi.price;
		if (!this.state.eaten.includes(sushi) && budgetLeft >= 0) {
			this.setState({
				eaten: [ ...this.state.eaten, sushi ],
				budget: budgetLeft
			});
		}
	};
	render() {
		return (
			<div className="app">
				<SushiContainer
					sushis={this.displayOnlyFourSushi()}
					addMoreSushi={this.addMoreSushi}
					eatSushi={this.eatSushi}
					eatenSushi={this.state.eaten}
				/>
				<Table budgetRemaining={this.state.budget} />
			</div>
		);
	}
	componentDidMount() {
		fetch(API).then((res) => res.json()).then((data) => {
			this.setState({
				sushis: data
			});
		});
	}
}

export default App;
