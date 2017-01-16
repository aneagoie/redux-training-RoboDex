import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (nextProps.robots !== this.props.robots)
  // }
  render() {
    const cardsArray = this.props.robots.map(
    robot =>
      <Card key={robot.id} name={robot.name} email={robot.email} id={
        robot.id
      } />
  );

    return (
      <div>
        {cardsArray}
      </div>
    );
  };
}
CardList.propTypes = { robots: React.PropTypes.array.isRequired };

export default CardList