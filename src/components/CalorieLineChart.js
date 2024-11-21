import { Box, CircularProgress, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getJournalTrends } from "../services/userService";

const CalorieLineChart = ({ currentDate }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setChartData(null);
    getJournalTrends(currentDate.subtract(14, "day").format("YYYY-MM-DD")).then(
      (res) => {
        setChartData(
          res.data.sort((a, b) => dayjs(a.date).diff(dayjs(b.date), "day")),
        );
      },
    );
  }, [currentDate]);

  if (chartData === null) {
    return <CircularProgress />;
  }

  return (
    <Box textAlign={"left"}>
      <Typography variant={"h4"}>Your Nutrition Trends</Typography>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"left"}>
        <Box>
          <LineChart
            title="Calories"
            dataset={chartData}
            series={[{ dataKey: "calories", label: "Calories" }]}
            xAxis={[
              {
                dataKey: "date",
                label: "Date",
                scaleType: "band",
                valueFormatter: (date) => dayjs(date).format("MM-DD"),
              },
            ]}
            width={500}
            height={300}
          />
        </Box>
        <Box>
          <LineChart
            title="Macros"
            dataset={chartData}
            series={[
              {
                dataKey: "protein",
                label: "Protein",
                valueFormatter: (p) => (p ? `${p.toFixed(2)}g` : `0.00g`),
              },
              {
                dataKey: "fat",
                label: "Fat",
                valueFormatter: (f) => (f ? `${f.toFixed(2)}g` : "0.00g"),
              },
              {
                dataKey: "carbs",
                label: "Carbs",
                valueFormatter: (c) => (c ? `${c.toFixed(2)}g` : "0.00g"),
              },
            ]}
            xAxis={[
              {
                dataKey: "date",
                label: "Date",
                scaleType: "band",
                valueFormatter: (date) => dayjs(date).format("MM-DD"),
              },
            ]}
            width={500}
            height={300}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CalorieLineChart;
