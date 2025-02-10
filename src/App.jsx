import { Box, Divider, Grid2, Typography } from "@mui/material";
import TodoCard from "./components/card";
import { useSelector } from "react-redux";
import DefaultCard from "./components/defaultCard";
import Navbar from "./components/navBar";
import Footer from "./components/footer";

function App() {
  const arr = useSelector((state) => state.todoReducer);
  return (
    <>
      <Box sx={{ width: "100vw", textAlign: "center" }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          m: 7,
          mt: 10,
        }}
      >
        <Grid2
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 1, sm: 5, md: 10 }}
          maxWidth="100vw"
        >
          {arr
            .filter((val) => val.isCompleted == false)
            .map((val) => (
              <Grid2 key={val.id} size={{ xs: 1, sm: 2, md: 2 }}>
                <TodoCard id={val.id} title={val.title} isCompleted={val.isCompleted} />
              </Grid2>
            ))}
          <DefaultCard />
        </Grid2>
        <Divider sx={{ mt: 4, mb: 2 }} textAlign="center">
          <Typography variant="h6" color="textSecondary">
            Completed Tasks
          </Typography>
        </Divider>
        <Grid2
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 1, sm: 5, md: 8 }}
          maxWidth="100vw"
        >
          {arr.filter((val) => val.isCompleted != false).length == 0 ? (
            <Box sx={{ textAlign: "center", width: "100%", mt: 2 }}>
              <Typography variant="h6" color="textSecondary">
                Nothing here... yet! Time to get things done! ⏳
              </Typography>
            </Box>
          ) : (
            arr
              .filter((val) => val.isCompleted != false)
              .map((val) => (
                <Grid2 key={val.id} size={{ xs: 1, sm: 2, md: 2 }}>
                  <TodoCard id={val.id} title={val.title} isCompleted={val.isCompleted} />
                </Grid2>
              ))
          )}
        </Grid2>
      </Box>
      <Footer />
    </>
  );
}

export default App;
