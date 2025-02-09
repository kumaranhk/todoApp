import {
  Box,
  Card,
  CardActions,
  Checkbox,
  FormControlLabel,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { remove_todo } from "../store/reducers/todo";
import { toggle_todo } from "../store/reducers/todo";

function TodoCard({ id, title, status }) {
  const dispatch = useDispatch();

  function changeStatus() {
    dispatch({
      type: toggle_todo,
      payload: { id },
    });
  }
  const removeTodo = () => {
    dispatch({
      type: remove_todo,
      payload: { id },
    });
  };
  return (
    <>
      <Card
        sx={{
          border: "solid",
          borderColor: "red",
          borderRadius: 4,
          borderWidth: 2,
          height: "40vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          width: "100%",
          maxWidth: "250px",
          boxShadow: 10,
          backgroundImage:
            "linear-gradient(135deg,rgb(255, 126, 131) ,rgb(245, 164, 142) , rgb(240, 226, 222))",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          {/* Todo titile  */}
          <Typography
            variant="h6"
            sx={{ textDecoration: status ? "line-through" : "none", pt: 2 }}
            color={status && "textSecondary"}
          >
            {title}
          </Typography>
          {/* Check box */}
          <Tooltip title={'Mark as Completed'} leaveDelay={200}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={status}
                  onChange={changeStatus}
                  color="success"
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                />
              }
            />
          </Tooltip>
        </Box>
        {/* Action button */}
        <CardActions sx={{ px: 2, pb: 2, justifyContent: "flex-end" }}>
          <Tooltip title={"Edit"} leaveDelay={200}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Delete"} leaveDelay={200}>
            <IconButton onClick={removeTodo}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </>
  );
}
export default TodoCard;
