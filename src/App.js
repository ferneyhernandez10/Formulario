import "./App.css";
import { Container, Grid } from "@mui/material";
import { MainBackground } from "./Components/MainBackground";

function App() {
  return (
    <Container style={{ maxWidth: "100%", margin: "0", padding: "0" }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <MainBackground />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
