import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
// import Verticlcar from './Verticlcar';
import '../Components/styles.css'


class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinned: false // initial state of pin button
    };
    this.handlePin = this.handlePin.bind(this);
  }

  handlePin() {
    this.setState(prevState => ({
      pinned: !prevState.pinned
    }));
  }

  render() {
    const { imageUrl, name, description, price,view_more } = this.props;
    const { pinned } = this.state;

    return (
      <Card>
        <div className="d-flex">
          <CardImg src={imageUrl} />
          <CardBody className="CardBody">
            <CardTitle>{name}</CardTitle>
            <CardText>${price}</CardText>
            <CardText>{view_more}</CardText>
            <CardText>{description}</CardText>
            <Button onClick={this.handlePin} color={pinned ? 'danger' : 'primary'}>
              {pinned ? 'Unpin' : 'Pin'}
            </Button>
          </CardBody>
        </div>
      </Card>
    );
  }
}




export default ProductCard;
