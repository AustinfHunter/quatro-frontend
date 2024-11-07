import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { addFoodRestriction } from "../services/userService";

const AddToRestrictionDialog = ({
  fdcId,
  description,
  open,
  setOpen,
  handleDetailChange,
}) => {
  const [reason, setReason] = useState("");
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
              addFoodRestriction(fdcId, reason).then(() =>
                handleDetailChange(),
              ),
              {
                pending: "Adding to restricted foods...",
                success: "Successfully added to restricted foods!",
                error: "Failed to add to restricted foods :(",
              },
            )
            .catch((error) => {
              console.log(error);
            })
            .then(setOpen(false));
        },
      }}
    >
      <DialogTitle>Add {description} to Restricted Foods</DialogTitle>
      <DialogContent style={{}}>
        <FormControl style={{ marginTop: "10px", width: "100%" }}>
          <TextField
            label={"Reason for restriction"}
            type={"text"}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button color={"error"} onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button type={"submit"}>Add to restricted foods</Button>
      </DialogActions>
    </Dialog>
  );
};
export default AddToRestrictionDialog;
