import {
  Box,
  Button,
  Card,
  CardActions,
  FormGroup,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { add_todo } from "../store/reducers/todo";
import { useState } from "react";
import PropTypes from "prop-types";

const DefaultCard = () => {
  const [showForm, setShowForm] = useState(false);

  const closeForm = () => {
    setShowForm(false);
  };
  return (
    <Card
      sx={{
        border: "solid",
        borderRadius: 4,
        borderColor: "#6B7AA1",
        borderWidth: 2,
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        maxWidth: "250px",
        backgroundImage: "linear-gradient(135deg, #E0EAF3 0%, #C2D1F0 100%)",
        boxShadow: 10,
        "&:hover": {
          boxShadow: 20,
        },
      }}
    >
      {showForm ? (
        <Form fn={closeForm} />
      ) : (
        <>
        {/* Card title */}
          <Typography variant="h6" sx={{ mb: 1 ,textWrap : 'wrap', textAlign: 'center'}} >
            Got something on your mind? Add it here! 🚀
          </Typography>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Tooltip title="Add New Task" leaveDelay={200}>
              <IconButton
                onClick={() => setShowForm((prev) => !prev)}
                sx={{
                  backgroundColor: "#4A5B82",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#3B4B6A",
                  },
                  border: "1px solid choclate",
                  boxShadow: 5,
                  borderRadius: 3,
                }}
              >
                <AddIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
          </CardActions>
        </>
      )}
    </Card>
  );
};

// New task form 
const Form = ({ fn }) => {
  const [formdata, setFormdata] = useState({ title: "" });
  const [enableSubmitBtn, setEnableSubmitBtn] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: add_todo,
      payload: { ...formdata },
    });
    fn();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
    switchmode();
  };
  const switchmode = () => {
    if (formdata.title.split("").filter((val) => val != " ").length > 0) {
      setEnableSubmitBtn(false);
    }
  };

  return (
    <>
      <CardActions sx={{ p: 3 }}>
        <FormGroup>
          <TextField
            color="info"
            id="outlined-textarea"
            label="Todo Title"
            height="100%"
            value={formdata.title}
            multiline
            rows={8}
            onChange={handleChange}
            name="title"
            required
          />
          <br />
          <Box>
            <Button
              sx={{
                width: "100%",
                backgroundColor: "#4A5B82",
              }}
              variant="contained"
              onClick={handleSubmit}
              disabled={enableSubmitBtn}
            >
              Add task
            </Button>
          </Box>
        </FormGroup>
      </CardActions>
    </>
  );
};

Form.propTypes = {
  fn: PropTypes.func,
};
export default DefaultCard;
