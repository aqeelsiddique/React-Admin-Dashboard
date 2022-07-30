import React from 'react';
import { useState} from 'react';
import "./Card.css"
import { AnimateSharedLayout, motion } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Close from "@material-ui/icons/Close";
import StudentReview from "../StudentReview/StudentReview"
// import Close from "@material-ui/Button";
const Card = (props) => {

    const [expanded, setExpanded]= useState(false)
  return (
    <AnimateSharedLayout>
        {
            expanded? 
                <ExpandedCard param={props} setExpanded = {()=> setExpanded(false)}/>:
            <CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>
        }
    
    </AnimateSharedLayout>
  )
}
// CompactedCard
function CompactCard ({param, setExpanded}){
    const png = param.png;
    return(
        <motion.div className='CompactedCard'
        style={{
            background : param.color.background,
            boxShadow: param.color.boxShadow
        }}
        onClick={setExpanded}
        

        layoutId='expanableCard'
        
        >

          <div className='radialBar'>
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>

            </div>
            <div className='deatils'>
                <png/>
                <span>{param.value}</span>
                <span>Last 24hours</span>
            </div>
        </motion.div>
    )
}
///////////////////////////////Expanded card /////////////////////////////////////////////

// function ExpandedCard ({param, setExpanded}){

//     const series =[
//         {
//         name: 'series1',
//         data: [31, 40, 28, 51, 42, 109, 100]
//       }, 
//       {
//         name: 'series2',
//         data: [11, 32, 45, 32, 34, 52, 41]
//       }];
//       const options = {
//         chart: {
//           height: 350,
//           type: 'bar'
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           curve: 'smooth'
//         },
//         xaxis: {
//           type: 'datetime',
//           categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//         },
//         tooltip: {
//           x: {
//             format: 'dd/MM/yy HH:mm'
//           },
//         },
//       }

//       return (
//         <div 
//         style={{
//             background: param.color.background,
//             boxShadow: param.color.boxShadow,
//         }}
//         >
//               <div>
//             <Close onClick={setExpanded} />

//         </div>
//         <span>{param.titlle}</span>
//             <div className='chartContainer'>
          
//         <Grap series={series} type="bar" options={options} />


        
          
            
//         </div>
//         <span>
//             last 24 hours
//         </span>
            
          
//         </div>
//       );
    
    
//     }
  
  







////////////////////////////////////////////////////////////////////////////////////////////
//  function ExpandedCard ({param, setExpanded}) {
    
    
//       const options = {
//             chart: {
//                 type: "area",
//                 heigth:"auto"
//             },

//             dropShadow: {
//                 enabled: false,
//                 enabledOnSeries: undefined,
//                 top:0,
//                 left:0,
//                 blur: 3,
//                 color: "#000",
//                 opacity: 0.35,

//             },
//             fill: {
//                 color:["#fff"],
//                 type: "gradient",

//             },
//             dataLables: {
//                 enable: false,
//             },
//             stroke: {
//                 curve: "smooth",
//                 colors:["white"],


//             },
//             tooltip: {
//                 x: {
//                     format: "dd/MM/yy HH:mm"
//                 }

//             },
//             grid: {
//                 show: true,
//             }, 
//             Xaxis: {
//                 type:"datetime",
//                 categories: [
//                     "2019-09-19T00:00.000Z",
//                     "2019-09-19T01:30.000Z",
//                     "2019-09-19T02:30.000Z",
//                     "2019-09-19T03:30.000Z",
//                     "2019-09-19T04:30.000Z",
//                     "2019-09-19T05:30.000Z",
//                     "2019-09-19T06:30.000Z",
                    
//                 ]
//             },

//         }
    
//     return(
        
//         <div 
//         className='ExpandedCard'
//         style={{
//             background: param.color.background,
//             boxShadow: param.color.boxShadow,

//         }}
//         >
//         <div>
//             <Close onClick={setExpanded} />

//         </div>
//         <span>{param.titlle}</span>
//         <Grap />
//         <div className='chartContainer'>
          
//         <Apexcharts series={param.series} type="area" options={options} />


        
          
            
//         </div>
//         <span>
//             last 24 hours
//         </span>



//         </div>
    

        


       
//     );
// }

function ExpandedCard({ param, setExpanded }) {
    const data = {
      options: {
        chart: {
          type: "area",
          height: "auto",
        },
  
        dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.35,
        },
  
        fill: {
          colors: ["#fff"],
          type: "gradient",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["white"],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        grid: {
          show: true,
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
      },
    };
  
    return (
      <motion.div
        className="ExpandedCard"
        style={{
          background: param.color.background,
          boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
      >
        <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
          <Close onClick={setExpanded} />

        </div>
          <span>{param.title}</span>
        <div className="chartContainer">

          <StudentReview  />
        </div>
        <span>Last 24 hours</span>
      </motion.div>
    );
  }
export default Card 