import {
  Box,
  Button,
  Card,
  CardActions,
  FormGroup,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { add_todo } from "../store/reducers/todo";
import { useState } from "react";

const DefaultCard = ({ bg }) => {
  const [showForm, setShowForm] = useState(false);

  const closeForm = () => {
    setShowForm(false);
  };
  return (
    <Card
      sx={{
        border: "solid",
        borderRadius: 4,
        borderColor: "red",
        borderWidth: 2,
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        width: "100%",
        maxWidth: "250px",
        // backgroundColor : bg(),
        backgroundImage: 'linear-gradient(135deg,rgb(255, 126, 131) ,rgb(245, 164, 142) , rgb(240, 226, 222))',
        boxShadow: 10,
      }}
    >
      {showForm ? (
        <Form fn={closeForm} />
      ) : (
        <CardActions
          sx={{
            position: "absolute",
            top: 90,
            right: 90,
          }}
        >
            <Tooltip title={'Add new Todo'} leaveDelay={200}>
          <IconButton onClick={() => setShowForm((prev) => !prev)}>
            <AddIcon fontSize="large" />
          </IconButton>
          </Tooltip>
        </CardActions>
      )}
    </Card>
  );
};

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
            color="secondary"
            id="outlined-textarea"
            label="Todo Title"
            height="100%"
            value={formdata.title}
            multiline
            rows={6}
            onChange={handleChange}
            name="title"
            required
          />
          <br />
          <Box>
            <Button
              sx={{ width: "100%" }}
              color="secondary"
              variant="contained"
              onClick={handleSubmit}
              disabled={enableSubmitBtn}
            >
              Sumbit
            </Button>
          </Box>
        </FormGroup>
      </CardActions>
    </>
  );
};

export default DefaultCard;
