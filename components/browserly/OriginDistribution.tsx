import React from 'react'
import { Bar, BarChart, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface Props {
  data: any[]
}


const renderCustomAxisTick = ({ x, y, payload }: any) => {

  return (
    <svg x={x - 8} y={y + 4} width="16" height="16">
      <image href={`https://www.google.com/s2/favicons?domain=${payload.value}`} height="16" width="16"/>
    </svg>
  )
};

const OriginDistribution = ({data}: Props) => {
  return (
    <div className="flex-1 h-0 overflow-auto">
      <ResponsiveContainer minWidth={640} height="100%" width="100%" >
      <BarChart
        data={data}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis height={60} tickLine={false} interval={0} tick={renderCustomAxisTick}   dataKey="url" />
        <YAxis width={30} tickLine={false} />
        <Bar barSize={4}  dataKey="minutes" fill="#D1D5DB" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default OriginDistribution
