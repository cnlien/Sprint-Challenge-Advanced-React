import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const SearchCard = props => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.searches}</CardText>
      </CardBody>
    </Card>
  );
};

export default SearchCard;

