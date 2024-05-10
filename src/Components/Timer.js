import React, { useState } from "react";

const Timer = () => {
    const [totalSeconds, setTotalSeconds] = useState(0);
    // Utiliser useState pour stocker timeoutId
    const [timeoutId, setTimeoutId] = useState(null);
    // Déclaration des variables d'état
    let hours = totalSeconds !== 0 ? Math.floor(totalSeconds / 3600) : 0;
    let minutes = totalSeconds !== 0 ? Math.floor((totalSeconds % 3600) / 60) : 0;
    let seconds = totalSeconds !== 0 ? totalSeconds % 60 : 0;

    // Fonction pour démarrer le compte à rebours
    const startTimer = () => {
        // Démarre le compte à rebours
        const id = setInterval(() => {
            // Incrémente le nombre total de secondes
            setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
        }, 1000);
        // Stocke l'id du timeout dans l'état
        setTimeoutId(id);
    };

    // Fonction pour démarrer le compte à rebours lors du clic sur le bouton
    const handleStartClick = () => {
        // Démarre le compte à rebours
        startTimer();
    };

    // Fonction pour arrêter le compte à rebours
    const handleStopClick = () => {
        if (timeoutId) {
            clearTimeout(timeoutId); // Utilise le timeoutId stocké dans l'état
            setTimeoutId(null); // Réinitialise timeoutId à null
            setTotalSeconds(0); // Réinitialise totalSeconds à 0
        }
    };

    return (
        <div>
            <div className="text-[13px] flex flex-col gap-y-2">
                <h3>Commencer le compte à rebours !</h3>
                <div className="flex justify-start gap-x-4">
                    {/* Bouton pour démarrer le compte à rebours */}
                    <button onClick={handleStartClick} className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1 rounded">Let's go 👍!</button>
                    {/* Bouton pour arrêter le compte à rebours */}
                    <button onClick={handleStopClick} className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded">Stop 🛑</button>
                </div>
                {/* Affiche le temps écoulé */}
                <div>{hours}h : {minutes}m : {seconds}s</div>
            </div>
        </div>
    );
};

export default Timer;
