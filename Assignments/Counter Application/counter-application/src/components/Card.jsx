import React, { useState } from "react";
import { Button, Grid, Segment } from "semantic-ui-react";

const Card = (Props) => {
  const [isNegative, setIsNegative] = useState(true);
  return (
    <Segment raised>
      <Grid>
        <Grid.Row centered>
          <Grid.Column textAlign="center" as={"h1"}>
            Count
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column textAlign="center" as={"h2"}>
            {Props.counts}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column textAlign="center">
            <Button
              size="medium"
              color="green"
              onClick={() => {
                let count = Props.counts;
                Props.setCounts(++count);
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
                let count = Props.counts;
                Props.setCounts(--count);
                count <= 0 ? setIsNegative(true) : setIsNegative(false);
              }}
            >
              Decrement
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Card;
