import {
  Paper,
  TextField,
  Button,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Typography,
} from "@mui/material";
import { useState } from "react";

const tmpProfile = {
  height: 177.8,
  current_weight: 83.9146,
  goal_weight: 88.4505,
  activity_level: 300,
  goal_weight_velocity: 0.8,
  sex: "M",
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(tmpProfile);

  const handleProfileChange = (e) =>
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleEditClicked = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Paper
      style={{
        width: "60%",
        margin: "auto",
        display: "flex",
        padding: "1rem",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Fitness Profile</Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        margin={"auto"}
        width={"70%"}
      >
        <Box margin={"5%"} display="flex" flexDirection={"column"} gap={"1rem"}>
          <FormControl>
            <TextField
              label="Height (cm)"
              name="height"
              onChange={handleProfileChange}
              disabled={!isEditing}
              type="number"
              step={0.1}
              defaultValue={profile.height}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Weight (kg)"
              name="current_weight"
              onChange={handleProfileChange}
              type="number"
              step={0.1}
              disabled={!isEditing}
              defaultValue={profile.current_weight}
            />
          </FormControl>
          <FormControl style={{ paddingTop: "0.5rem" }}>
            <InputLabel id="user-sex-label">Sex</InputLabel>
            <Select
              labelId="user-sex-label"
              name="sex"
              onChange={handleProfileChange}
              disabled={!isEditing}
              value={profile.sex}
            >
              <MenuItem value={"F"}>Female</MenuItem>
              <MenuItem value={"M"}>Male</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box margin={"5%"} display="flex" flexDirection={"column"} gap={"1rem"}>
          <FormControl>
            <TextField
              label="Goal Weight (kg)"
              name="goal_weight"
              onChange={handleProfileChange}
              type="number"
              step={0.1}
              disabled={!isEditing}
              defaultValue={profile.goal_weight}
            />
          </FormControl>
          <FormControl>
            <TextField
              label={`Goal weight ${tmpProfile.goal_weight_velocity >= 0 ? "gain" : "Loss"} per week (kg)`}
              name="goal_weight_velocity"
              onChange={handleProfileChange}
              type="number"
              step={0.1}
              disabled={!isEditing}
              defaultValue={profile.goal_weight_velocity}
            />
          </FormControl>
          <FormControl style={{ paddingTop: "0.5rem" }}>
            <InputLabel id="activity-level-label" hidden>
              Activity Level
            </InputLabel>
            <Select
              labelId="activity-level-label"
              name="activity_level"
              onChange={handleProfileChange}
              disabled={!isEditing}
              value={profile.activity_level}
            >
              <MenuItem value={0}>Sedentary</MenuItem>
              <MenuItem value={300}>Lightly Active</MenuItem>
              <MenuItem value={500}>Moderately Active</MenuItem>
              <MenuItem value={700}>Very Active</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleEditClicked}>
            {isEditing ? "Save Changes" : "Edit"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Profile;
