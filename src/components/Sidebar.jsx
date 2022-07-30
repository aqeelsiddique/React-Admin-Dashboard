import React from 'react'
import './sidebar.css'
import { motion } from 'framer-motion';
import { useState } from "react";
import logo from '../imgs/logo.png';
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import Menu from "@material-ui/icons/Menu";

import { SidebarData } from '../Data/Data';


const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const sidebarVariants = {
    true:{
      left:"0"
    },
    false:{
      left:"-60%"
    }
  }

  return (

    <>
    <div className="bars" style={expanded ? {
      left:"60%"} : {left:"5%"}}  
      onClick={() => setExpanded(!expanded)}
      >
        <Menu />

    </div>

     <motion.div className='sidebar'
     variants={sidebarVariants}
     animate = {window.innerWidth<=768? `${expanded}`: ''
    }
     >
        {/* logo */}
        <div className='logo'>
          {/* <Grap /> */}
            <img src={logo} alt="logo" />
            <span>QuiZ <span>App</span>
            </span>
        </div>
         {/* menu */}
         <div className='menu'>
          {SidebarData.map((item, index)=>{
            return(
              <div className= {selected===index?"menuitem active": "menuitem" }
              key={index}
              onClick={()=>setSelected(index)}
              >
                <item.icon/>
                <span>
                  {item.heading}
                </span>
              </div>
            )
          })}
          <div className='menuitem'>
            <KeyboardBackspace />

          </div>
           </div>
      
      </motion.div>
    </>
   
  )
}

export default Sidebar
