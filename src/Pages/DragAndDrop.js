import React from "react";
import Drag from "../Components/Drag";

const DragAndDrop = () => {
    return (
        <div className='flex flex-col gap-y-2 px-2'>
            <h2 className='text-[14px] font-medium mt-2'>Mon drag and drop</h2>
            <Drag />
        </div>
    );
};

export default DragAndDrop;