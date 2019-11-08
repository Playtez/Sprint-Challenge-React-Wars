import React from "react";
import styled from "styled-components";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap"; //  .. this is the actual card

const StarWarsCard = props => {
  const Wrapper = styled.section`
    padding: 2rem;
    background: papayawhip;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 150px;
    margin: 5%;
    border: 1px solid black;
    border-radius: 15px;
  `;

  return (
    <div>
      <Wrapper>
        <Card>
          <CardBody>
            <CardTitle>Name: {props.user.name}</CardTitle>
            <CardSubtitle>Mass: {props.user.mass}kg</CardSubtitle>
            <CardText>
              Being {props.user.height} in height, {props.user.name} birth year
              is:
              {props.user.birth_year}. Another interesting fact ... this
              character has been in<br></br>
              {props.user.films.length} movies.
            </CardText>
          </CardBody>
        </Card>
      </Wrapper>
    </div>
  );
};

export default StarWarsCard;
