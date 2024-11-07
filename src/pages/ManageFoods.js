import { CircularProgress, Paper, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FoodOptionsTable from "../components/FoodOptionsTable";
import {
  deleteFoodPreference,
  deleteFoodRestriction,
  getPreferences,
  getRestrictions,
} from "../services/userService";

const TabPanel = ({ value, index, data, handleDelete }) => {
  console.log(`in tab ${index}`);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`foods-tabpanel-${index}`}
      aria-labelledby={`food-tab-${index}`}
    >
      <FoodOptionsTable data={data} handleDelete={handleDelete} />
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `food-tab-${index}`,
    "aria-controls": `foods-tabpanel-${index}`,
  };
}

const ManageFoods = () => {
  const [value, setValue] = useState(0);
  const [preferences, setPreferences] = useState(null);
  const [restrictions, setRestrictions] = useState(null);

  useEffect(() => {
    getPreferences()
      .then((res) => setPreferences(res.data.preferences))
      .catch((err) => console.log(err));
    getRestrictions()
      .then((res) => setRestrictions(res.data.restrictions))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const fetchPreferences = () =>
    getPreferences()
      .then((res) => setPreferences(res.data.preferences))
      .catch((err) => console.log(err));

  const fetchRestrictions = () =>
    getPreferences()
      .then((res) => setPreferences(res.data.preferences))
      .catch((err) => console.log(err));

  const handleDeletePreference = (fdcId) =>
    toast.promise(
      deleteFoodPreference(fdcId).then(() => fetchPreferences()),
      {
        pending: "Deleting preference...",
        success: "Successfully deleted preference!",
        error: "Failed to delete preference :(",
      },
    );

  const handleDeleteRestriction = (fdcId) =>
    toast.promise(deleteFoodRestriction(fdcId).then(fetchRestrictions), {
      pending: "Deleting restriction...",
      success: "Successfully deleted restriction!",
      error: "Failed to delete restriction :(",
    });

  if (!preferences || !restrictions) {
    return <CircularProgress />;
  }

  return (
    <Paper
      style={{
        width: "90%",
        margin: "auto",
        padding: "10px",
        minHeight: "20vh",
      }}
    >
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Liked Foods" {...a11yProps(0)} />
        <Tab label="Disliked Foods" {...a11yProps(1)} />
        <Tab label="Restricted Foods" {...a11yProps(2)} />
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        data={preferences.filter((p) => !p.dislikes).map((p) => p.food_details)}
        handleDelete={handleDeletePreference}
      />
      <TabPanel
        value={value}
        index={1}
        data={preferences.filter((p) => p.dislikes).map((p) => p.food_details)}
        handleDelete={handleDeletePreference}
      />
      <TabPanel
        value={value}
        index={2}
        data={restrictions.map((p) => p.food_details)}
        handleDelete={handleDeleteRestriction}
      />
    </Paper>
  );
};

export default ManageFoods;
