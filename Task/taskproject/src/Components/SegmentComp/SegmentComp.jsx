import React, { useContext, useState } from 'react';
import "./SegmentComp.css";
import { SegmentContext } from '../../Context/segmentContext.jsx';


const SegmentComp = () => {

    const { setIsSegmentOpen } = useContext(SegmentContext);
    const segmentTrigger = () => {

        setIsSegmentOpen(prev => !prev);



    }

    return (
        <div>
            <button id='segmentsave' onClick={segmentTrigger}>Save Segment</button>
            
        </div>
    );
};


export default SegmentComp;
