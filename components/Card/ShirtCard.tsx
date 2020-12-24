import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
export const ShirtCard = ({ name, description, price, image }) => (
  <Card>
    <Image src={`/${image}`} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="money" />
      {price}
    </Card.Content>
  </Card>
);
