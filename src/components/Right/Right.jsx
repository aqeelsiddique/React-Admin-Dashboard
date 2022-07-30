import React from 'react';
import '../Right/Right.css'
import Updates from '../../components/Updates/Update';
import StudentReview from '../StudentReview/StudentReview';

const Right = () => {
  return (
    <div className='RightSide'>
        <div>
        <h3>Updates</h3>
        <Updates />

      

        </div>
        <div>
            <h3>Student Reviews</h3>
            <StudentReview />
        </div>
        
    </div>
    

    )
}

export default Right