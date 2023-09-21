import React, { useState } from 'react';

export default function TournamentBracket() {
  const [rnd1Match1Winner, setRnd1Match1Winner] = useState('#');
  const [rnd1Match1Selected, setRnd1Match1Selected] = useState(false);

  // Create an array of player names
  const players = [];
  for (let i = 1; i <= 16; i++) {
    players.push(`Player ${i}`);
  }

  const handleWinnerClick = (player) => {
    // Add logic to handle winner click and update state
  };

  return (
    <div className="text-center">
      <div className="grid grid-cols-3">
         {/* Column 1: Players 1-16 */}
         <div className="col-span-1">
          {players.map((player, index) => (
            <div key={index} className="">
              <div
                className={`border-2 border-black ${rnd1Match1Selected ? 'disabled' : ''}`}
                onClick={() => handleWinnerClick(player)}>
                {player}
              </div>
              {/* Add an empty cell with the same size as players' cells after every 2 players (excluding the last two) */}
              {index % 2 === 1 && index < players.length - 2 && (
                <div className={`border-2 border-transparent h-[40px]`}>d</div>
              )}
            </div>
          ))}
        </div>


         {/* Column 3: Different boxes */}
         <div className="col-span-1">
          {players.map((player, index) => (
            <div key={index}>
              {/* Add empty cells with the same size as Box 1 and Box 2 */}
              {index % 2 === 0 && index < players.length - 1 && (
                <div>
                  <div className="border-2 border-transparent">d</div>
                  <div className="border-2 border-transparent">d</div>
                </div>
              )}
              {/* Add different boxes here */}
              {index % 2 === 0 && (
                <div className="border-2 border-red-500">Box 1</div>
              )}
              {index % 2 === 0 && (
                <div className="border-2 border-red-500">Box 2</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
