import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  const generateSushi = () => {
    const { sushis } = props;
    return sushis.map(sushi => (
      <Sushi
        sushi={sushi}
        key={sushi.id}
        eatSushi={props.eatSushi}
        eaten={props.eaten.includes(sushi)}
      />
    ));
  };
  return (
    <Fragment>
      <div className="belt">
        {generateSushi()}
        <MoreButton more={props.more} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
