import {
  Box,
  Button,
  Card,
  CardActions,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { edit_todo, remove_todo } from "../store/reducers/todo";
import { toggle_todo } from "../store/reducers/todo";
import { useState } from "react";
import PropTypes from "prop-types";

function TodoCard({ id, title, isCompleted }) {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const [updatedTitle, setUpdatedTitle] = useState(title);

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

  const updateTodo = () => {
    dispatch({
      type: edit_todo,
      payload: { id, title: updatedTitle },
    });
    setEditMode(false);
  };

  return (
    <>
      <Card
        sx={{
          border: "solid",
          borderColor: "#6B7AA1",
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
          backgroundImage: "linear-gradient(135deg, #E0EAF3 0%, #C2D1F0 100%)",
          "&:hover": {
            p: 0.1,
            boxShadow: 20,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
            pb : 0 
          }}
        >
          {/* Card titile  */}
          {editMode ? (
            <>
              <TextField
                color="warning"
                variant="h5"
                id="outlined-textarea"
                label="Todo Title"
                height="100%"
                value={updatedTitle}
                multiline
                rows={6}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                name="title"
                required
              />
            </>
          ) : (
            <Typography
              variant="h5"
              sx={{
                textDecoration: isCompleted ? "line-through" : "none",
                pt: 2,
                lineHeight: "4vh",
              }}
              color={isCompleted && "textSecondary"}
            >
              {title}
            </Typography>
          )}
          {/* Check box */}
          {editMode ? (
            <></>
          ) : (
            <Tooltip
              // title={isCompleted ? "Mark as not completed" : "Mark as Completed"}
              leaveDelay={200}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isCompleted}
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
          )}
        </Box>
        {/* Action button */}
        { !isCompleted && 
          <CardActions sx={{ p: 2,pt : 0, justifyContent: "flex-end" }}>
            {editMode ? (
              <>
                <Button
                  onClick={updateTodo}
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "#4A5B82" }}
                >
                  Save
                </Button>
                <Button
                  onClick={() => setEditMode(false)}
                  variant="outlined"
                  size="small"
                  color="primary"
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Tooltip title={"Edit Task"} leaveDelay={200}>
                  <IconButton onClick={() => setEditMode(true)}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title={"Delete Task"} leaveDelay={200}>
                  <IconButton onClick={removeTodo}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </>
            )}
          </CardActions>
        }
      </Card>
    </>
  );
}

TodoCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  isCompleted: PropTypes.bool,
};
export default TodoCard;
