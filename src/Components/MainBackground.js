import { Form } from "react-hook-form";
import smart from "../Images/Image.png";
import { Card, CardContent, Container } from "@mui/material";

export const MainBackground = () => {
  return (
    <Container style={{
      backgroundImage:`url(${smart})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      maxWidth: '100%',
      height: '673px',
      padding: '0',
    }}>
      <Card sx={{ ml: 119, width: "auto", height: "auto" }}>
        <CardContent>
          {/* <Form/> */}
        </CardContent>
      </Card>
    </Container>
  );
};
