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
import { editJournalEntry } from "../services/userService";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const EditJournalEntryDialog = ({
  entryId,
  fdcId,
  description,
  initialDate,
  initialAmountConsumed,
  open,
  setOpen,
  onJournalUpdate,
}) => {
  const [date, setDate] = useState(dayjs(initialDate));
  const [amountConsumed, setAmountConsumed] = useState(initialAmountConsumed);
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
              editJournalEntry(
                entryId,
                fdcId,
                date.format("YYYY-MM-DD"),
                amountConsumed,
              ).then(() => onJournalUpdate()),
              {
                pending: `Updating journal...`,
                success: "Successfully updated journal!",
                error: "Failed to update journal :(",
              },
            )
            .catch((error) => {
              console.log(error);
            })
            .then(setOpen(false));
        },
      }}
    >
      <DialogTitle>Edit entry for {description} in journal</DialogTitle>
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
        <Button type={"submit"}>Update Entry</Button>
      </DialogActions>
    </Dialog>
  );
};
export default EditJournalEntryDialog;
