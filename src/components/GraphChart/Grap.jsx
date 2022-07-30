import React from 'react';
import ApexCharts from 'react-apexcharts'

function Grap() {

    const series =[
        {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, 
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }];
      const options = {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }

      return (
        <div 
        style={{
            background:  "white",
            textAlign:"center"
        }}
        >
            <br />
            <h2>GRAPH</h2>
            <ApexCharts
            options={options}
            series={series}
            type="area"
            height={350}
            />
            
          
        </div>
      );
    
    
    }
  
  



export default Grap
