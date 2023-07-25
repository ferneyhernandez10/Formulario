import { Form } from "react-hook-form";
import smart from "../Images/Image.png";
import { Container } from "@mui/material";

export const GetImage = () => {
  return (
    <Container style={{
      backgroundImage:`url(${smart})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      // backgroundAttachment: 'fixed',
      width: '100%',
      height: '600px'
    }}>
      Hello World
    </Container>
  );
};
