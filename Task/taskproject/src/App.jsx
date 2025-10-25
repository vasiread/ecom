
import { useContext } from 'react';
import './App.css'
import SegmentComp from './Components/SegmentComp/SegmentComp'
import SegmentDetails from './Components/SegmentDetails/SegmentDetails';
import { SegmentContext } from './Context/segmentContext';

function App() {
  const { isSegmentOpen } = useContext(SegmentContext);
 


  return (
    <div id='wholecontainer'>
      <div className="segmentgroup">
        <SegmentComp />
      { isSegmentOpen &&  < SegmentDetails /> }   </div>


    </div>
  );
}

export default App
