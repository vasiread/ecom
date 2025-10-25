import { createContext, react, useState } from "react";


export const SegmentContext = createContext();


export const SegmentProvider = ({ children }) => {
    const [isSegmentOpen, setIsSegmentOpen] = useState(true);



    return (
        <SegmentContext.Provider value={{ isSegmentOpen, setIsSegmentOpen }}>
            {children}
        </SegmentContext.Provider>
    );

};




