import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const CustomPieChart = ({ data }) => {
  return (
    <PieChart width={900} height={800} style={{display:'flex', justifyContent:'center'}}>
      <Pie
        data={data}
        cx={525}
        cy={300}
        labelLine={false}
        outerRadius={200}
        fill="#8884d8"
        dataKey="value"
        nameKey="label" // Set the nameKey to use the label property for segment names
        label={({ percent, index }) => (
        
          `${data[index].label}\n${(percent * 100).toFixed(0)}%`
          
        )}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default CustomPieChart;