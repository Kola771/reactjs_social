import React from "react";
// Importe l'image
import img5 from "../images/img5.jpg"; 
import img1 from "../images/img1.jpg"; 
import img2 from "../images/img2.jpg"; 
import img3 from "../images/img3.jpg"; 
import img4 from "../images/img4.png"; 
import DownloadImg from "./Icons/DownloadImg"; 

const ImageFormComponent = (e) => {


    return(
        <div>
            <div className="flex flex-col gap-y-4 px-4 py-5">
                <div className="h-48 w-full relative">
                    <img src={img5} className="h-48 w-full object-cover rounded" />
                    <a href={img5} className="border-white border-2 rounded-full w-8 h-8 flex justify-center items-center absolute bottom-2 right-2" download="image.jpg"><DownloadImg /></a>
                </div>
                <div className="h-48 w-full relative">
                    <img src={img2} className="h-48 w-full object-cover rounded" />
                    <a href={img2} className="border-white border-2 rounded-full w-8 h-8 flex justify-center items-center absolute bottom-2 right-2" download="image.jpg"><DownloadImg /></a>
                </div>
                <div className="h-48 w-full relative">
                    <img src={img1} className="h-48 w-full object-cover rounded" />
                    <a href={img1} className="border-white border-2 rounded-full w-8 h-8 flex justify-center items-center absolute bottom-2 right-2" download="image.jpg"><DownloadImg /></a>
                </div>
                <div className="h-48 w-full relative">
                    <img src={img4} className="h-48 w-full object-cover rounded" />
                    <a href={img4} className="border-white border-2 rounded-full w-8 h-8 flex justify-center items-center absolute bottom-2 right-2" download="image.png"><DownloadImg /></a>
                </div>
                <div className="h-48 w-full relative">
                    <img src={img3} className="h-48 w-full object-cover rounded" />
                    <a href={img3} className="border-white border-2 rounded-full w-8 h-8 flex justify-center items-center absolute bottom-2 right-2" download="image.jpg"><DownloadImg /></a>
                </div>
            </div>
        </div>
    );
};

export default ImageFormComponent;