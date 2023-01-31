import React, { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Card from "./components/Card";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Grid verticalAlign={"middle"} style={{ height: "100vh" }}>
        <Grid.Row centered color={"teal"}>
          <Grid.Column width={"6"}>
            <Card counts={count} setCounts={setCount} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered color={"teal"}>
          <Grid.Column>
            <Header as="h2" textAlign="center" color={"pink"}>
              Done By: Vijay Kumar Yadav 12020077
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default App;
