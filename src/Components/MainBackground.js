import smart from "../Images/Image.png";
import { Box, Card, CardContent, Grid } from "@mui/material";
import { Form } from "../Components/Form";

export const MainBackground = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${smart})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignSelf="center"
        xs={12}
      >
        <Card>
          <CardContent>
            <Form />
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};
