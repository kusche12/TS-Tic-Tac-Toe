import React from "react";
import {TbTallymark1, TbTallymarks} from 'react-icons/tb';

type AppProps = {
    name: string;
    score: number;
    playerPosition: number;
    currentTurn: number;
};

const PlayerScore = ({ name, score, playerPosition, currentTurn }: AppProps) => {
    const renderScore = () => {
        const groupsOf5 = Math.floor(score / 5);
        const res = [];
        for (let i = 0; i < groupsOf5; i++) {
            res.push(<div key={`${Math.random() * 10000}`} style={{margin: 0}}><TbTallymarks size={40}/></div>);
        }

        for (let j = 0; j < score % 5; j++) {
            res.push(<div key={`${Math.random() * 10000}`} style={{margin: 0}}><TbTallymark1 size={40}/></div>);
        }

        return (
            <div className="psTallys">
                {res}
            </div>
        )
    };

    return (
        <div className="playerScore flexDirectionCenter">
            <p className="psName" style={currentTurn === playerPosition ? {backgroundColor: 'yellow'} : {backgroundColor: 'transparent'}}>{name}</p>
            <div className="psLine" style={ playerPosition === 1 ? { backgroundColor:'#33ba55'} : {backgroundColor : 'red'} } ></div>
            {renderScore()}
        </div>
    );
};

export default PlayerScore;
