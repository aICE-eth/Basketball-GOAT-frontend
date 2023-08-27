import { Box } from "@mui/material";
import React from "react";
import { PieChart, Pie, Cell, LabelList } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const CustomPieChart = ({ data }) => {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    }}>
    <PieChart width={900} height={600} style={{display:'flex', justifyContent:'center'}}>
      <Pie
        data={data}
        cx={525}
        cy={300}
        labelLine={false}
        outerRadius={200}
        fill="#8884d8"
        dataKey="value"
        nameKey="label" 
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

    {/* <Box style={{
      backgroundColor:'lightgray', 
      height:'100px',
      borderRadius:'15px',
      width:'500px'
      }}>

    </Box> */}
    </div>
  );
};

export default CustomPieChart;