import { Box, CircularProgress, Paper, Table, Typography } from "@mui/material";
import { Gauge, PieChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import { getUserDashboard } from "../services/userService";
import MacroChart from "./MacroChart";
import SearchComponent from "./SearchComponent";

const Charts = ({ data, loading }) => {
  if (!data || loading) {
    return <CircularProgress />;
  }
  return (
    <Paper style={{ width: "90%", margin: "auto", padding: "20px" }}>
      <Typography variant="h4" textAlign={"left"}>
        Dashboard
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"start"}
        alignItems={"center"}
        margin={"20px"}
      >
        <Box>
          <Typography variant="h4">Calories</Typography>
          <Gauge
            width={400}
            height={200}
            value={data.daily_macros.total_calories}
            valueMin={0}
            valueMax={
              data.daily_macros.calorie_limit
                ? data.daily_macros.caloryie_limit
                : 2000
            }
          />
          <Typography variant="caption">
            {`You have ${(data.daily_macros.calorie_limit ? data.daily_macros.calorie_limit : 2000) - data.daily_macros.total_calories} calories remaining for the day.`}
          </Typography>
        </Box>
        <MacroChart
          data={data.daily_macros}
          hidden={data.journal_entries.length === 0}
        />
      </Box>
    </Paper>
  );
};

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = () =>
    getUserDashboard()
      .then((res) => {
        setData(res.data);
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

  useEffect(() => {
    fetchDashboardData().then(setLoading(false));
  }, []);

  return (
    <Paper style={{ width: "90%", margin: "auto", padding: "20px" }}>
      <Charts data={data} loading={loading} />
      <SearchComponent onJournalUpdate={fetchDashboardData} />
    </Paper>
  );
};

export default Dashboard;
