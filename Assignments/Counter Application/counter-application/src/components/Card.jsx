import React, { useState } from "react";
import { Button, Grid, Header, Segment } from "semantic-ui-react";

const Card = (Props) => {
  const [multiple, setMultiple] = useState(1);
  const [isNegative, setIsNegative] = useState(true);
  const setCountZero = () => {
    Props.setCounts(0);
    setIsNegative(true);
  };
  return (
    <Segment raised>
      <Grid>
        <Grid.Row color="orange" centered>
          <Grid.Column textAlign="center" as={"h1"}>
            Count
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column textAlign="center">
            <Header as={"h2"} color="blue">
              {Props.counts}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column textAlign="center">
            <Button
              size="medium"
              color="green"
              onClick={() => {
                let count = Props.counts + multiple;
                Props.setCounts(count);
                count > 0 ? setIsNegative(false) : setIsNegative(true);
              }}
            >
              Increment
            </Button>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Button
              color="red"
              size="medium"
              disabled={isNegative}
              onClick={() => {
                let count = Props.counts - multiple;
                Props.setCounts(count);
                count <= 0 ? setIsNegative(true) : setIsNegative(false);
              }}
            >
              Decrement
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={4} color="green">
          <Grid.Column textAlign="center">
            <Button
              inverted={multiple === 1 ? false : true}
              color={"black"}
              onClick={() => {
                setCountZero();
                setMultiple(1);
              }}
            >
              1x
            </Button>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Button
              inverted={multiple === 2 ? false : true}
              color={"black"}
              onClick={() => {
                setCountZero();
                setMultiple(2);
              }}
            >
              2x
            </Button>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Button
              inverted={multiple === 3 ? false : true}
              color={"black"}
              onClick={() => {
                setCountZero();
                setMultiple(3);
              }}
            >
              3x
            </Button>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Button
              inverted={multiple === 4 ? false : true}
              color={"black"}
              onClick={() => {
                setCountZero();
                setMultiple(4);
              }}
            >
              4x
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Card;
