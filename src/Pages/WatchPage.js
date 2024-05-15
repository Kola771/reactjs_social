import React from "react";
import WatchComponent from "../Components/WatchComponent";

const WatchPage = () =>  {
    return (
        <div className='flex flex-col gap-y-2 px-2'>
            <h2 className='text-[14px] font-medium mt-2'>Utilisation du useEffect</h2>
            <WatchComponent />
        </div>
    );
};

export default WatchPage;