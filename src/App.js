import "./App.css";
import Form from "./Components/Form";
import { Container } from "@mui/material";
import { MainBackground } from "./Components/MainBackground";

function App() {
  return (
    <Container style={{ maxWidth: "100%", margin: "0", padding: "0" }}>
          {/* <MainBackground /> */}
          <Form />
    </Container>
  );
}

export default App;
