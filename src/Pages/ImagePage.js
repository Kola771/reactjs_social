import React from "react";
import Image from "../Components/ImageFormComponent";

const ImagePage = () => {

    return (
        <div>
            <div className='flex flex-col gap-y-2 px-2'>
            <h2 className='text-[14px] font-medium mt-2'>Télécharger une image</h2>

            <Image />
            </div>
        </div>
    );
};

export default ImagePage;