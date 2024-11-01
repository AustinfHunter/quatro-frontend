import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";

const MacroChart = ({ data, hidden }) => {
  const chartData = Object.entries(data).map(([k, v], i) => {
    if (k === "total_calories" || k === "daily_calorie_limit") {
      return null;
    }
    return { id: i, value: v, label: k.split("_")[1] };
  });

  if (hidden === true) {
    return null;
  }

  return (
    <Box>
      <Typography variant="h4">Macro Nutrients</Typography>
      <PieChart series={[{ data: chartData }]} width={400} height={200} />
    </Box>
  );
};

export default MacroChart;
