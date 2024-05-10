import React from "react";
import Timer from "../Components/Timer";
const TimerPage = () => {
    return(
        <div className='flex flex-col gap-y-2 px-2'>
            <h2 className='text-[14px] font-medium mt-2'>Mon Timer</h2>
            <Timer />
        </div>
    );
};

export default TimerPage;