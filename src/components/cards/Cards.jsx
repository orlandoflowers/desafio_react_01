import { Card, Badge } from "react-bootstrap";

export const Cards = ({ url, name, description, tagName, color }) => {
  return (
    <Card className="singleCard">
      <img height={200} src={url} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <Badge bg={color}>{tagName}</Badge>
    </Card>
  );
};
