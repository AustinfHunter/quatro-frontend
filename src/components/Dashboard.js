import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { getDashboardByDate } from "../services/userService";
import JournalEntries from "./JournalEntries";
import MacroChart from "./MacroChart";
import CalorieLineChart from "./CalorieLineChart";

const Charts = ({ data, loading }) => {
  useEffect(() => {}, [data]);
  if (!data || loading) {
    return <CircularProgress />;
  }
  return (
    <>
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
                ? data.daily_macros.daily_calorie_limit
                : 2000
            }
          />
          <Typography variant="caption">
            {data.daily_macros.calories >= data.daily_macros.daily_calorie_limit
              ? `You have no calories remaining for today`
              : `You have ${Math.round((data.daily_macros.daily_calorie_limit ? data.daily_macros.daily_calorie_limit : 2000) - data.daily_macros.total_calories)} calories remaining for the day.`}
          </Typography>
        </Box>
        <MacroChart
          data={data.daily_macros}
          hidden={data.journal_entries.length === 0}
        />
      </Box>
    </>
  );
};

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const selectedDate = useRef(dayjs(new Date()));
  const dateData = useRef(new Map());

  const handleDateChange = (newDate) => {
    selectedDate.current = newDate;
    if (dateData.current.has(selectedDate.current.format("YYYY-MM-DD"))) {
      setData(dateData.current.get(selectedDate.current.format("YYYY-MM-DD")));
    } else {
      fetchDailyData(newDate);
    }
  };

  const fetchDailyData = (date) =>
    getDashboardByDate(date.format("YYYY-MM-DD"))
      .then((res) => {
        setData(res.data);
        dateData.current.set(date.format("YYYY-MM-DD"), res.data);
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    fetchDailyData(selectedDate.current).then(() => setLoading(false));
  }, []);

  return (
    <Paper
      style={{
        width: "90%",
        margin: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
      }}
    >
      <Typography variant="h4" textAlign={"left"}>
        {selectedDate.current.format("YYYY-MM-DD") ===
        dayjs(new Date()).format("YYYY-MM-DD")
          ? "Today's Journal"
          : `Journal From ${selectedDate.current.format("dddd, MMMM D, YYYY")}`}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en"}>
        <DatePicker
          sx={{ marginTop: "1rem", maxWidth: "10%" }}
          label="Date"
          value={selectedDate.current}
          onChange={(newDate) => handleDateChange(newDate)}
        />
      </LocalizationProvider>
      <Charts data={data} loading={loading} />
      <CalorieLineChart currentDate={selectedDate.current} />
      <JournalEntries
        data={data}
        date={selectedDate.current}
        onJournalUpdate={() => fetchDailyData(selectedDate.current)}
        loading={loading}
      />
    </Paper>
  );
};

export default Dashboard;
