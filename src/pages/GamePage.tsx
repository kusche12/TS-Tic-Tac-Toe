import React, { useState } from "react";
import PlayerScore from "../components/PlayerScore";
import TicTacToe from "../components/TicTacToe";

const GamePage = () => {

    const [currentTurn, setCurrentTurn] = useState<number>(1);

    return (
        <div className="gamePage">
            <div className="flexDirectionCenter gameCol">
                <PlayerScore name="Kyle" score={103} playerPosition={1} currentTurn={currentTurn} />
            </div>
            <div className="flexDirectionCenter gameColMid">
                <h1>Round 1</h1>
                <TicTacToe {...{setCurrentTurn, currentTurn}} />
            </div>
            <div className="flexDirectionCenter gameCol">
                <PlayerScore name="John" score={4} playerPosition={2} currentTurn={currentTurn} />
            </div>
        </div>
    );
};

export default GamePage;
