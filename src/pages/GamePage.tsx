import React, { useState } from "react";
import PlayerScore from "../components/PlayerScore";
import TicTacToe from "../components/TicTacToe";
import ReactModal from "react-modal";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { State } from '../state';
import { Player } from '../types';

import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const GamePage = () => {
    const [currentTurn, setCurrentTurn] = useState<number>(1);
    const [winner, setWinner] = useState<number | null>(null);
    const [numberOfGames, setNumberOfGames] = useState(1);

    const state = useSelector((state: State) => state.players);
    const player1: Player = state[0];
    const player2: Player = state[1];

    const dispatch = useDispatch();
    const { playerWin } = bindActionCreators(actionCreators, dispatch);

    let navigate = useNavigate();

    const handlePlayAgain = () => {
        playerWin(winner!-1);

        setCurrentTurn(1);
        setWinner(null);
        setNumberOfGames(numberOfGames+1);

    }

    const handleEndGame = () => {
        navigate('/end')
    }

    return (
        <div className="gamePage">
            <div className="flexDirectionCenter gameCol">
                <PlayerScore name={player1.playerName} score={player1.wins} playerPosition={1} currentTurn={currentTurn} />
            </div>
            <div className="flexDirectionCenter gameColMid">
                <h1>Round {numberOfGames}</h1>
                <TicTacToe {...{setCurrentTurn, currentTurn, winner, setWinner}} />
            </div>
            <div className="flexDirectionCenter gameCol">
                <PlayerScore name={player2.playerName} score={player2.wins} playerPosition={2} currentTurn={currentTurn} />
            </div>

            {winner !== null &&
            <ReactModal 
                isOpen={winner !== null}
                className="modal"
                contentLabel="Minimal Modal Example"
            >
                <p style={{fontSize: '30px', fontWeight: 'bold'}}>{state[winner-1].playerName} Wins!! 🎉</p>
                <div className="flexDirectionRow">
                    <button className="startGameBtn" style={{backgroundColor: 'green', width: '150px', margin: '10px'}} onClick={() => handlePlayAgain}>Play Again</button>                
                    <button className="startGameBtn" style={{backgroundColor: 'red', width: '150px', margin: '10px'}} onClick={() => handleEndGame()}>End Game</button>
                </div>
            </ReactModal>
            }
        </div>
    );
};

export default GamePage;
