import React from 'react';
import './Update.css';
import {UpdatesData} from '../../Data/Data';

const Update = () => {
  return (
<div className="Updatedata">
  {UpdatesData.map((update)=>{
    return(
      <div className="update">
        <img src={update.img} alt="" />
        <dib className="des">
          <div style={{marginBottom: "0.5rem"}}>
            <span>
              {update.name}
            </span>
            <span>
              {update.des}
            </span>
          </div>
        </dib>

      </div>

    )
  })}

</div>  
)
}

export default Update