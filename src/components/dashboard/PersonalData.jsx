import React from 'react'
import { PieChart, pieArcLabelClasses  } from '@mui/x-charts/PieChart';

export default function PersonalData() {
    const data = [
        { id: 0, value: 10, label: 'Public Data' },
        { id: 1, value: 15, label: 'Private Data' },
        { id: 2, value: 20, label: 'Sensitive Data' },
      ]
      const size = {
        width: 400,
        height: 200,
      };
  return (
    <div> <PieChart
    series={[
        {
          arcLabel: (item) => ` ${item.value}%`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
  /></div>
  )
}
