import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';


const GraphicEditorial = ({currentManga}) =>{

    let contPlaneta = 0;
    let contEcc = 0;
    let contGlenat =0;
    let contNorma = 0;
    let contOtros = 0;

    currentManga.forEach(item => {
        if (item.editorial.toLowerCase() === "planeta de agostini") {
          contPlaneta++;
        } else if (item.editorial.toLowerCase() === "norma") {
          contNorma++;
        }
        else if (item.editorial.toLowerCase() === "ecc") {
          contEcc++;
        }
        else if (item.editorial.toLowerCase() === "glenat") {
          contGlenat++;
        }
        else  {
          contOtros++;
        }
      });
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const data = [
      {
        name: 'P.Agostini',
        uv: contPlaneta,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Norma',
        uv: contNorma,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Glenat',
        uv: contGlenat,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Ecc',
        uv: contEcc,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Otros',
        uv: contOtros,
        pv: 4800,
        amt: 2181,
      },
    
    ];
    
    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };
    
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <BarChart
      width={450}
      height={300}
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 20,
        bottom: 10,
      }}
      style={{
        background: " #ffffff",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    )
}

export default GraphicEditorial;