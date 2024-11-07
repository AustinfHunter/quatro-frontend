import {Box} from "@mui/material"
import {LineChart} from "@mui/x-charts";
import dayjs from "dayjs";


const CalorieLineChart = ({dateData, selectedDate}) => {


    const last7Days = Array.from({length: 7}, (_, i) =>
        dayjs(selectedDate.current).subtract(6 - i, 'day').format('YYYY-MM-DD')
        );

    const chartData = last7Days.map(date => ({
        x: date,
        y: dateData.current.get(date)?.daily_macros.total_calories || 0,
    }));
    
    return (
        <Box>
            <LineChart
                dataset={chartData}
                series={[{ dataKey: 'y', label: 'Calories' }]}
                xAxis={[
                    {
                        dataKey: 'x',
                        label: 'Date',
                        scaleType: 'band',
                        valueFormatter: (date) => dayjs(date).format('MM-DD')
                    },
                    ]}
                width={500}
                height={300}
            />
        </Box>
    );

};

export default CalorieLineChart;