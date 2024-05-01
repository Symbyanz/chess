import { FC, useEffect, useRef, useState } from "react";
import { Player } from "../models/Player"
import { Colors } from "../models/Colors";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
}

export const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer();
    }, [currentPlayer])

    function startTimer() {
        if (timer.current) clearInterval(timer.current);
        const callback = currentPlayer?.color === Colors.WHITE ? decrementBlackTimer : decrementWhiteTimer;
        timer.current = setInterval(callback, 1000);
    }

    function decrementBlackTimer() {
        setBlackTime(prev => --prev);
    }

    function decrementWhiteTimer() {
        setWhiteTime(prev => --prev);
    }

    const handleRestart = () => {
        setBlackTime(300);
        setWhiteTime(300);
        restart();
    }

    return (
        <div className="timer">
            <h3>Black time: {blackTime}</h3>
            <h3>White time: {whiteTime}</h3>
            <button className="restart" onClick={handleRestart}>New game</button>
        </div>
    )
}
