import { Box, CircularProgress, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getJournalTrends } from "../services/userService";

const CalorieLineChart = ({ shouldUpdate, setShouldUpdate }) => {
  const [chartData, setChartData] = useState(null);
  const fetchData = () =>
    getJournalTrends(dayjs().subtract(14, "days").format("YYYY-MM-DD")).then(
      (res) => {
        console.log(res.data);
        setChartData(
          res.data
            .sort((a, b) => dayjs(a.date).diff(dayjs(b.date), "day"))
            .map((d) => ({ x: d.date, y: d.calories })),
        );
      },
    );

  useEffect(() => {
    fetchData();
    setShouldUpdate(false);
  }, [shouldUpdate, setShouldUpdate]);

  if (chartData === null) {
    return <CircularProgress />;
  }

  return (
    <Box textAlign={"left"}>
      <Typography variant={"h4"}>Your daily trends</Typography>
      <LineChart
        dataset={chartData}
        series={[{ dataKey: "y", label: "Calories" }]}
        xAxis={[
          {
            dataKey: "x",
            label: "Date",
            scaleType: "band",
            valueFormatter: (date) => dayjs(date).format("MM-DD"),
          },
        ]}
        width={500}
        height={300}
      />
    </Box>
  );
};

export default CalorieLineChart;
