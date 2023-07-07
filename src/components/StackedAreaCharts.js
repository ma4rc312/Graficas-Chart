import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const data = [
    {name: "María", age: 10, weight: 60},
    {name: 'Karina', age: 25, weight: 70},
    {name: 'Susana', age: 15, weight: 65},
    {name: 'Pedro', age: 35, weight: 85},
    {name: 'Felipe', age: 12, weight: 48},
    {name: 'Laura', age: 30, weight: 69},
    {name: 'Adrián', age: 15, weight: 78},
]

const StackedAreaCharts = () => {
  return (
    <ResponsiveContainer width="50%" aspect={2} >
     <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
            top: 100,
            right:30,
            left:0,
            bottom:0
        }}
     >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="age" stroke='#8884d8' fill='#8884d8'/>
        <Area type="monotone" dataKey="weight" stroke='#8884d8' fill='#8884d8'/>

     </AreaChart>

    </ResponsiveContainer>
  )
}

export default StackedAreaCharts