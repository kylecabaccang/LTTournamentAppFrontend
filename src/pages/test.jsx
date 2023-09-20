import React, { useState } from 'react';
import '../css/TournamentBracket.css'; // You can create a CSS file for styling

export default function SingleElimination() {
  const [winnersRound1, setWinnersRound1] = useState(Array(8).fill(null));
  const [winnersRound2, setWinnersRound2] = useState(Array(4).fill(null));
  const [winnersSemiFinals, setWinnersSemiFinals] = useState(Array(2).fill(null));
  const [champion, setChampion] = useState(null);

  const handleWinnerClick = (round, matchIndex, playerName) => {
    switch (round) {
      case 1:
        const newWinnersRound1 = [...winnersRound1];
        newWinnersRound1[matchIndex] = playerName;
        setWinnersRound1(newWinnersRound1);
        break;
      case 2:
        const newWinnersRound2 = [...winnersRound2];
        newWinnersRound2[matchIndex] = playerName;
        setWinnersRound2(newWinnersRound2);
        break;
      case 3:
        const newWinnersSemiFinals = [...winnersSemiFinals];
        newWinnersSemiFinals[matchIndex] = playerName;
        setWinnersSemiFinals(newWinnersSemiFinals);
        break;
      default:
        break;
    }
  };

  return (
    <div className="tournament-bracket">
      <div className="round round-1">
        {Array(8)
          .fill()
          .map((_, matchIndex) => (
            <div className="match" key={matchIndex}>
              <div
                className={`player ${
                  winnersRound1[matchIndex] ? 'disabled' : ''
                }`}
                onClick={() =>
                  handleWinnerClick(1, matchIndex, `Player ${matchIndex + 1}`)
                }
              >
                {winnersRound1[matchIndex] || `Player ${matchIndex * 2 + 1}`}
              </div>
              <div className="player">
                {winnersRound1[matchIndex] || `Player ${matchIndex * 2 + 2}`}
              </div>
            </div>
          ))}
      </div>

      <div className="round round-2">
        {Array(4)
          .fill()
          .map((_, matchIndex) => (
            <div className="match" key={matchIndex}>
              <div
                className={`player ${
                  winnersRound2[matchIndex] ? 'disabled' : ''
                }`}
                onClick={() =>
                  handleWinnerClick(2, matchIndex, winnersRound1[matchIndex * 2])
                }
              >
                {winnersRound2[matchIndex] || 'Winner'}
              </div>
              <div className="player">
                {winnersRound2[matchIndex] || 'Winner'}
              </div>
            </div>
          ))}
      </div>

      <div className="round round-3">
        {Array(2)
          .fill()
          .map((_, matchIndex) => (
            <div className="match" key={matchIndex}>
              <div
                className={`player ${
                  winnersSemiFinals[matchIndex] ? 'disabled' : ''
                }`}
                onClick={() =>
                  handleWinnerClick(3, matchIndex, winnersRound2[matchIndex * 2])
                }
              >
                {winnersSemiFinals[matchIndex] || 'Finalist'}
              </div>
              <div className="player">
                {winnersSemiFinals[matchIndex] || 'Finalist'}
              </div>
            </div>
          ))}
      </div>

      <div className="round round-4">
        <div className="match">
          <div className={`player ${champion ? 'disabled' : ''}`}>
            {champion || 'Champion'}
          </div>
        </div>
      </div>
    </div>
  );
}
