import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { toast } from "react-toastify";
import { addToJournal } from "../services/userService";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const today = new Date().toLocaleDateString();

const AddToJournalDialog = ({
  fdcId,
  description,
  open,
  setOpen,
  onJournalUpdate,
}) => {
  const [date, setDate] = useState(dayjs(today));
  const [amountConsumed, setAmountConsumed] = useState(0);
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        component: "form",
        onSubmit: (e) => {
          e.preventDefault();
          toast
            .promise(
              addToJournal(fdcId, date.format("YYYY-MM-DD"), amountConsumed),
              {
                pending: "Adding to journal...",
                success: "Successfully added to journal!",
                error: "Failed to add food to journal :(",
              },
            )
            .catch((error) => {
              console.log(error);
            })
            .then(onJournalUpdate())
            .then(setOpen(false));
        },
      }}
    >
      <DialogTitle>Add {description} to journal</DialogTitle>
      <DialogContent
        style={{
          padding: "20px",
          margin: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en"}>
            <DatePicker
              label="Date"
              value={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </LocalizationProvider>
        </FormControl>
        <FormControl style={{ marginTop: "20px" }}>
          <TextField
            label={"Amount Consumed (grams)"}
            type={"number"}
            value={amountConsumed}
            onChange={(e) => setAmountConsumed(e.target.value)}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button color={"error"} onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button type={"submit"}>Add to journal</Button>
      </DialogActions>
    </Dialog>
  );
};
export default AddToJournalDialog;
