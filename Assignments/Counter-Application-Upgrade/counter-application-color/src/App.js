import React, { useState } from "react";
import Counter from "./components/Counter";
import "semantic-ui-css/semantic.min.css";
import { Grid, Header } from "semantic-ui-react";

const App = () => {
  const [counter, setCounter] = useState({ count: 0, color: "green" });
  return (
    <Grid verticalAlign={"middle"} style={{ height: "100vh" }}>
      <Grid.Row centered>
        <Grid.Column width={"12"}>
          <Counter setCounters={setCounter} counters={counter} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column>
          <Header as="h2" textAlign="center" color={"pink"}>
            Done By: Vijay Kumar Yadav 12020077
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;
