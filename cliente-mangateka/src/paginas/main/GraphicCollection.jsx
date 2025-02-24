import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,

} from "recharts";


const GraphicCollection = ({ currentManga }) => {

  let contShojo = 0
  let contShonen = 0
  let contSeinen=0
  let contKodomo =0
  let contJosei =0
 
  currentManga.forEach(item => {
    if (item.coleccion === "shonen") {
      contShonen++;
    } else if (item.coleccion === "shojo") {
      contShojo++;
    }
    else if (item.coleccion === "seinen") {
      contSeinen++;
    }
    else if (item.coleccion === "josei") {
      contJosei++;
    }
    else if (item.coleccion === "kodomo") {
      contKodomo++;
    }
  });

  const dataColeccion =[
    {name:"shojo", uv: contShojo,pv: 2400, fill: "#8884d8",},
    {name:"shonen", uv: contShonen, pv: 4567, fill: "#83a6ed"},
    {name:"josei", uv: contJosei, pv: 1398, fill: "#8dd1e1"},
    {name:"seinen", uv: contSeinen, pv: 9800, fill: "#82ca9d"},
    {name:"kodomo", uv: contKodomo,  pv: 4800, fill: "#ffc658"},
  ]

  return (
    <RadialBarChart
      width={450}
      height={300}
      cx="50%"
      cy="50%"
      innerRadius="10%"
      outerRadius="80%"
      barSize={10}
      data={dataColeccion}
      style={{
        background: " #ffffff",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
     
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={{
          top: 60,
          left: 350,
          lineHeight: "24px",
        }}
      />
    </RadialBarChart>
  )


}

export default GraphicCollection