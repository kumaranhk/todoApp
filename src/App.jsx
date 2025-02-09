import { Box, Grid2, Typography } from "@mui/material";
import TodoCard from "./components/card";
import { useDispatch, useSelector } from "react-redux";
import DefaultCard from "./components/defaultCard";

function App() {
  const arr = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ width: "100vw", textAlign: "center" }}>
        <Typography variant="h5">Todo Application</Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          m: 5,
          mt: 2,
        }}
      >
        <Grid2
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 1, sm: 5, md: 8 }}
          maxWidth="1200px"
        >
          {arr.map((val) => (
            <Grid2 key={val.id} size={{ xs: 1, sm: 2, md: 2 }}>
              <TodoCard id={val.id} title={val.title} status={val.status} />
            </Grid2>
          ))}
          <DefaultCard />
        </Grid2>
      </Box>
    </>
  );
}

export default App;
