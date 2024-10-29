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
import { toast } from "react-toastify";
import { deleteJournalEntry } from "../services/userService";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DeleteJournalEntryDialog = ({
  entryId,
  description,
  date,
  amountConsumed,
  open,
  setOpen,
  onJournalUpdate,
}) => {
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
              deleteJournalEntry(entryId).then(() => onJournalUpdate()),
              {
                pending: `Removing ${description} from journal...`,
                success: `Successfully removed ${description} from journal!`,
                error: `Failed to remove ${description} from journal :(`,
              },
            )
            .catch((error) => {
              console.log(error);
            })
            .then(setOpen(false));
        },
      }}
    >
      <DialogTitle>
        Are you sure you want to remove {description} from your journal?
      </DialogTitle>
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
            <DatePicker label="Date" value={date} disabled />
          </LocalizationProvider>
        </FormControl>
        <FormControl style={{ marginTop: "20px" }}>
          <TextField
            label={"Amount Consumed (grams)"}
            type={"number"}
            value={amountConsumed}
            disabled
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button color={"error"} onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button type={"submit"}>Delete Entry</Button>
      </DialogActions>
    </Dialog>
  );
};
export default DeleteJournalEntryDialog;
