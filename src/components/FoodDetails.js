import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addFoodPreference,
  deleteFoodPreference,
  deleteFoodRestriction,
  getFoodDetail,
} from "../services/userService";
import AddToRestrictionDialog from "./AddToRestrictedDialog";

const RestrictionButton = ({
  fdcId,
  description,
  isRestricted,
  handleDetailChange,
}) => {
  const [open, setOpen] = useState(false);

  const deleteRestriction = () =>
    toast.promise(
      deleteFoodRestriction(fdcId)
        .then(handleDetailChange)
        .catch((err) => console.log(err)),
      {
        pending: "Removing restriction...",
        success: "Successfully removed restriction!",
        error: "Failed to remove restriction :(",
      },
    );

  return (
    <>
      {isRestricted ? (
        <Button onClick={deleteRestriction}>
          Remove from restricted foods
        </Button>
      ) : (
        <Button onClick={() => setOpen(true)}>Add to restricted foods</Button>
      )}
      <AddToRestrictionDialog
        fdcId={fdcId}
        description={description}
        open={open}
        setOpen={setOpen}
        handleDetailChange={handleDetailChange}
      />
    </>
  );
};

const PreferencesButton = ({
  fdcId,
  isLiked,
  isDisliked,
  handleDetailChange,
}) => {
  const deletePreference = () =>
    toast.promise(
      deleteFoodPreference(fdcId).then(() => handleDetailChange()),
      {
        pending: "Removing from liked foods",
        success: "Successfully removed from liked foods",
        error: "Failed to remove from liked foods :(",
      },
    );
  const addToLiked = () =>
    toast.promise(
      addFoodPreference(fdcId, false).then(() => handleDetailChange()),
      {
        pending: "Adding to liked foods",
        success: "Successfully added to liked foods!",
        error: "Failed to add to liked foods :(",
      },
    );

  const addToDisliked = () =>
    toast.promise(
      addFoodPreference(fdcId, true).then(() => handleDetailChange()),
      {
        pending: "Adding to disliked foods",
        success: "Successfully added to disliked foods!",
        error: "Failed to add to disliked foods :(",
      },
    );

  if (!isLiked && !isDisliked) {
    return (
      <>
        <Button onClick={addToLiked}>Add to liked foods</Button>
        <Button onClick={addToDisliked}>Add to disliked foods</Button>
      </>
    );
  } else if (isLiked) {
    return <Button onClick={deletePreference}>Remove from liked foods</Button>;
  }
  return <Button onClick={deletePreference}>Remove from disliked foods</Button>;
};

const FoodDetails = ({ fdcId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getFoodDetail(fdcId).then((res) => setData(res.data));
  }, [fdcId]);

  const handleChange = () =>
    getFoodDetail(fdcId).then((res) => setData(res.data));

  if (!data) {
    return <CircularProgress />;
  }

  console.log(data);

  return (
    <Box>
      <Box>
        <Typography variant={"h4"}>Ingredients:</Typography>
        {data.food_details.ingrediants !== "" && (
          <Typography variant={"p"}>{data.food_details.ingredients}</Typography>
        )}
      </Box>
      <RestrictionButton
        fdcId={fdcId}
        isRestricted={data.is_restricted}
        description={data.food_details.description}
        handleDetailChange={handleChange}
      />
      <PreferencesButton
        fdcId={fdcId}
        isLiked={data.is_liked}
        isDisliked={data.is_disliked}
        isRestricted={data.is_restricted}
        handleDetailChange={handleChange}
      />
    </Box>
  );
};
export default FoodDetails;
