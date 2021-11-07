import React from 'react'
import { Bar, BarChart, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface Props {
  data: any[]
}


const renderCustomAxisTick = ({ x, y, payload }) => {

  return (
    <svg x={x - 8} y={y + 4} width="16" height="16">
      <image href={`https://www.google.com/s2/favicons?domain=${payload.value}`} height="16" width="16"/>
    </svg>
  )
};

const OriginDistribution = ({data}: Props) => {
  return (
    <ResponsiveContainer  width="100%" height={600}>
      <BarChart
        
        width={500}
        height={300}
        data={data}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis interval={0} tick={renderCustomAxisTick}   dataKey="url" />
        <YAxis />
        <Tooltip />
        <Bar isAnimationActive={false} dataKey="minutes" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default OriginDistribution
