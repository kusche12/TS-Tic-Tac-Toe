import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import '../App.css';

const StartGamePage = () => {
    const [player1, setPlayer1] = useState<string>("");
    const [player2, setPlayer2] = useState<string>("");
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const { changeName } = bindActionCreators(actionCreators, dispatch);
    
    const startGame = () => {
        // TODO: Use redux to ensure both fields are full before clicking "Start"
        changeName([player1, player2]);

        navigate('/game');
    }

    return (
        <div className="startGamePage">
            <h1>Tic Tac Toe (the game 😝)</h1>

            <form className="form">
                <div className="userInput">
                    <label style={{fontWeight: 'bold'}}>Player 1</label>
                    <input
                        onChange={(e) => setPlayer1(e.target.value)}
                        value={player1}
                    />
                </div>
                <div className="userInput">
                    <label style={{fontWeight: 'bold'}}>Player 2</label>
                    <input
                        onChange={(e) => setPlayer2(e.target.value)}
                        value={player2}
                    />
                </div>

                <button onClick={() => startGame()} className="startGameBtn">Start</button>
            </form>
        </div>
    );
};

export default StartGamePage;
