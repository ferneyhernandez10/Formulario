import "./App.css";
import Form from "./Components/Form";
import { Container } from "@mui/material";
import { GetImage } from "./Components/GetImage";

function App() {
  return (
    <Container style={{ maxWidth: "100%", margin: "0", padding: "0" }}>
          <GetImage />
          <Form />
    </Container>
  );
}

export default App;
