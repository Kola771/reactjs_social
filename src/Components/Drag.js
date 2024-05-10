import React, { useState } from "react";

const Drag = () => {

    // Déclaration des variables
    const [initialMouseX, setX] = useState(0);
    const [initialMouseY, setY] = useState(0);
    const [initialElementX, setEX] = useState(0);
    const [initialElementY, setEY] = useState(0);
    const [isDragging, setDragging] = useState(false);

    // Gestion de l'évènement mousedown
    const handleMouseDown = (event) => {
        setDragging(true);
        setX(event.clientX);
        setY(event.clientY);
        setEX(event.currentTarget.offsetLeft);
        setEY(event.currentTarget.offsetTop);
    };

    // Gestion de l'évènement mousemove
    const handleMouseMove = (event) => {
        if (isDragging) {
            const newX = initialElementX + (event.clientX - initialMouseX);
            const newY = initialElementY + (event.clientY - initialMouseY);
            let draggableElement = document.getElementById("draggableElement");
            draggableElement.style.left = `${newX}px`;
            if (newY < (500 - 50) && newY >= 0) {
                draggableElement.style.top = `${newY}px`;
            }
        }
    }

    // Gestion de l'événement mouseup
    const handleMouseUp = () => {
        setDragging(false);
    };

    return (
        <div>
            <div id="dragbody" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} className="h-[500px] border-2 rounded relative">
                <div id="draggableElement" onMouseDown={handleMouseDown} className="absolute bottom-0 right-0 rounded-full cursor-pointer w-[50px] h-[50px] bg-blue-500"></div>
            </div>
        </div>
    );
};

export default Drag;