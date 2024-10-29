import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import SearchComponent from "./SearchComponent";

const FoodSearchDialog = ({ open, setOpen, date, onJournalUpdate }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth={"80%"}
      style={{ minHeight: "80%" }}
      fullWidth
    >
      <DialogTitle>Search for Foods</DialogTitle>
      <DialogContent
        style={{
          padding: "20px",
          margin: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SearchComponent date={date} onJournalUpdate={onJournalUpdate} />
      </DialogContent>
      <DialogActions>
        <Button color={"error"} onClick={() => setOpen(false)}>
          close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default FoodSearchDialog;
