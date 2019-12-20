import React from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap"

export default function CharacterCard(props) {
  return (
    <Card>
      <CardImg src={props.item.image} alt="Rick And Morty Characters" />
      <CardBody>
        <CardTitle>{props.item.name}</CardTitle>
        <CardSubtitle>{props.item.species}</CardSubtitle>
        <CardText>This Character Is {props.item.status}</CardText>
      </CardBody>
    </Card>
  )
}
