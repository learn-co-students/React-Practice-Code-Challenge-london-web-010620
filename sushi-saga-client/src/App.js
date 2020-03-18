import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import { getSushis } from "./api";

class App extends Component {
  state = {
    sushis: [],
    displayIndex: 0,
    money: 100,
    eaten: []
  };

  eatSushi = sushi => {
    const newMoney = this.state.money - sushi.price;
    if (!this.state.eaten.includes(sushi.id) && newMoney >= 0) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney
      });
    }
  };

  updateMoney = () => {
    let newMoney = this.state.money + 20;
    this.setState({ money: newMoney });
  };

  componentDidMount() {
    this.updateSushiState();
  }

  updateSushiState = () => {
    getSushis().then(sushis => {
      this.setState({ sushis });
    });
  };

  chooseFourSushis = () => {
    let fourSushis = this.state.sushis.slice(
      this.state.displayIndex,
      this.state.displayIndex + 4
    );

    return fourSushis;
  };

  more = () => {
    let nextFour = this.state.displayIndex + 4;
    this.setState({
      displayIndex: nextFour
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.chooseFourSushis()}
          more={this.more}
          eaten={this.state.eaten}
          eatSushi={this.eatSushi}
        />
        <Table
          money={this.state.money}
          updateMoney={this.updateMoney}
          eaten={this.state.eaten}
        />
      </div>
    );
  }
}

export default App;
