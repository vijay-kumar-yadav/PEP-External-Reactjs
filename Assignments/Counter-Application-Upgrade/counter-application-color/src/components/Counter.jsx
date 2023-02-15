import React, { useState } from "react";
import { Button, Grid, Header } from "semantic-ui-react";

const Counter = ({ counters, setCounters }) => {
  const [disable, setDisable] = useState({ inc: false, dec: true });
  const getColor = (count) => {
    let color;
    switch (true) {
      case count >= 0 && count <= 4: {
        color = "green";
        break;
      }
      case count >= 5 && count <= 9: {
        color = "blue";
        break;
      }
      case count === 10: {
        color = "red";
        break;
      }
      default: {
        color = "grey";
      }
    }
    return color;
  };
  return (
    <>
      <Grid>
        <Grid.Row centered color={counters.color}>
          <Grid.Column textAlign="center" as={"h1"}>
            Count
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column textAlign="center">
            <Header color={counters.color} as="h1">
              {counters.count}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column textAlign="center">
            <Button
              color="green"
              disabled={disable.inc}
              style={{ width: "100%" }}
              onClick={() => {
                let count = counters.count + 1;
                const color = getColor(count);
                setCounters({ count: count, color: color });
                count > 0 && count < 10
                  ? setDisable({ inc: false, dec: false })
                  : setDisable({ inc: true, dec: false });
              }}
            >
              <i class="plus icon" />
            </Button>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Button
              color="red"
              disabled={disable.dec}
              style={{ width: "100%" }}
              onClick={() => {
                let count = counters.count - 1;
                const color = getColor(count);
                setCounters({ count: count, color: color });

                count <= 0
                  ? setDisable({ inc: false, dec: true })
                  : setDisable({ inc: false, dec: false });
              }}
            >
              <i class="minus icon" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Counter;
