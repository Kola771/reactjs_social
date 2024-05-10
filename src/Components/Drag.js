import React, { useState } from "react";

const Drag = () => {

    // Déclaration des variables
    const draggableElement = document.getElementById("draggableElement");
    const dragbody = document.getElementById("dragbody");

    const [initialMouseX, setX] = useState(0);
    const [initialMouseY, setY] = useState(0);
    const [initialElementX, setEX] = useState(0);
    const [initialElementY, setEY] = useState(0);
    const [isDragging, setDragging] = useState(false);

    const [isResizingTwo, setDraggingTwo] = useState(false);
    const [initialHeightMouse, setInitialHeightMouse] = useState(0);
    const [initialHeightTable, setInitialHeightTable] = useState(0);

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

            if (newY < (dragbody.clientHeight - 50) && newY >= 0) {
                draggableElement.style.top = `${newY}px`;
            }
            if (newX < (dragbody.clientWidth - 50) && newX >= 0) {
                draggableElement.style.left = `${newX}px`;
            }
        }

        if(isResizingTwo) 
        {
            let myTableTwo = document.getElementById("myTableTwo");
            let newHeight = initialHeightTable + (event.clientY - initialHeightMouse);
            myTableTwo.style.height = `${newHeight}px`;
        }
    }

    // Gestion de l'événement mouseup
    const handleMouseUp = () => {
        if(isDragging)
        {
            setDragging(false);
        }

        if(isResizingTwo)
        {
            setDraggingTwo(false);
        }
    };

    // Fonction pour le drag and drop du table
    const handleResizeHandletwo = (event) => {
        let myTableTwo = document.getElementById("myTableTwo");
        setDraggingTwo(true);
        setInitialHeightMouse(event.clientY);
        setInitialHeightTable(myTableTwo.clientHeight);
    }

    return (
        <div>
            <div id="dragbody" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} className="h-[500px] border-2 rounded relative">
                <div id="draggableElement" onMouseDown={handleMouseDown} className="absolute bottom-0 right-0 rounded-full cursor-pointer w-[50px] h-[50px] bg-blue-500"></div>
            </div>

            <div className="max-h-[300px] overflow-auto mt-4 border-2 rounded px-2 py-3" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                <table id="myTableTwo" className="relative w-full">
                    <thead>
                        <tr>
                            <th className="text-left text-[14px]">First Name</th>
                            <th className="text-left text-[14px]">Last Name</th>
                            <th className="text-left text-[14px]">Points</th>
                            <th>
                                <div id="resizeHandletwo" onMouseDown={handleResizeHandletwo} className="w-full h-[10px] bg-blue-500 cursor-ns-resize absolute bottom-0 left-0 right-0"></div>
                            </th>
                        </tr>

                    </thead>
                    <tbody className="text-[12px]">
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>Adam</td>
                            <td>Johnson</td>
                            <td>67</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Drag;