import React, { useState } from 'react';

function Match({ player1, player2, onWinnerSelected }) {

  const [winner, setWinner] = useState(null);
  const [loser, setLoser] = useState(null);

  const handleWinnerSelected = (player) => {
    const loser = player === player1 ? player2 : player1;
    setWinner(player);
    setLoser(loser);
    onWinnerSelected(player, loser);
  };

  return (
    <div className='p-2'>
      <div className='border-black border-2'>
        <button onClick={() => handleWinnerSelected(player1)}>{player1}</button>
      </div>

      <div className='border-black border-2'>
        <button onClick={() => handleWinnerSelected(player2)}>{player2}</button>
      </div>
    </div>
  );
}

export default Match;