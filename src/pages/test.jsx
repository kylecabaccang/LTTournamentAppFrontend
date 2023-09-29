
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Match({ player1, player2, onWinnerSelected }) {
  const [winner, setWinner] = useState(null);
  const [loser, setLoser] = useState(null);
  const [player1Clicked, setPlayer1Clicked] = useState(false);
  const [player2Clicked, setPlayer2Clicked] = useState(false);

  const handleWinnerSelected = (player) => {
    const loser = player === player1 ? player2 : player1;
    setWinner(player);
    setLoser(loser);
    onWinnerSelected(player, loser);

    // Disable the buttons of the unselected player
    if (player === player1) {
      setPlayer2Clicked(true);
    } else {
      setPlayer1Clicked(true);
    }
  };

  return (
    <div className='flex'>
      <div className='h-[80px] w-[100%]'>
        <div className='border-black border-2 h-[40px]'>
          <button className='w-[100%]'
            onClick={() => handleWinnerSelected(player1)}
            disabled={player1Clicked}
          >
            {player1}
          </button>
        </div>

        <div className='border-black border-2 h-[40px]'>
          <button className='w-[100%]'
            onClick={() => handleWinnerSelected(player2)}
            disabled={player2Clicked}
          >
            {player2}
          </button>
        </div>
      </div>

      <div>
        {/* {winner !== null && (
          <div>
            <div>Winner: {winner}</div>
            <div>Loser: {loser}</div>
          </div>
        )} */}
      </div>
    </div>
  );
}

function Tournament() {
//   const initialPlayers = [
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//     'Player 1', 'Player 2', 'Player 3', 'Player 4',
//     'Player 5', 'Player 6', 'Player 7', 'Player 8',
//     'Player 9', 'Player 10', 'Player 11', 'Player 12',
//     'Player 13', 'Player 14', 'Player 15', 'Player 16',
//   ];

  
  const [winnersBracket, setWinnersBracket] = useState([]);
  const [winnersBracketRound1, setWinnersBracketRound1] = useState([]);
  const [players, setAllPlayers] = useState([]);
  const [roundOneBracket, setRoundOneBracket] = useState([players]);
  // const [winnersBracketRound3, setWinnersBracketRound3] = useState([])
  // const [losersBracketRound3, setLosersBracketRound3] = useState([]);



  const handleRoundOneBracketComplete = (winner, loser) => {
    setWinnersBracket([...winnersBracket, winner]);

    if (roundOneBracket.length === 1) {
      alert(`Tournament Winner: ${winner}`);
    }
  };



  const handleRoundTwoBracketComplete = (winner, loser) => {
    setWinnersBracketRound1([...winnersBracketRound1, winner]);
  };

  // const handleRoundThreeBracketComplete = (winner, loser) => {
  //   setLosersBracketRound3([...losersBracketRound3, losersBracketRound2[loser]])
  //   setWinnersBracketRound3([...winnersBracketRound3, winnersBracketRound1[winner]])

  //   // // Check if it's the final match in winner's bracket round 2
  //   // if (winnersBracket.length === 2) {
  //   //   // Advance the winner to winner's bracket round 3
  //   //   setWinnersBracketRound3([winner]);
  //   // }
  // };

 

  // useEffect(() => {
  //   fetch(' https://tournament.luckycue.tech/api/get-matches/1')
  //   .then(res => res.json())
  //   .then(data => {
  //     // console.log(data)
  //     setName(data)
  //   })
  // })


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/player');
        console.log(res.data.player_names);
        setAllPlayers(res.data.player_names);
        setRoundOneBracket(res.data.player_names);

      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  
  

 

  return (
    <>
      <h1 className='bg-red-500'>Single Elimination Tournament</h1>
      <div className='flex flex-grow'>
        <div className='w-[20%]'>
          <h2 className='text-center h-[30px]'>Round 1</h2>
          {roundOneBracket.map((player, index) => {
            if (index % 2 === 0 && index < roundOneBracket.length - 1) {
              return (
                <>
                <Match
                  key={`match${index / 2}`}
                  player1={roundOneBracket[index]}
                  player2={roundOneBracket[index + 1]}
                  onWinnerSelected={(winner, loser) => handleRoundOneBracketComplete(winner, loser)}
                />
                <div className='h-[80px]'></div>
                </>
              );
            }
            return null;
          })}
        </div>


          {/* SPACER */}
          <div className='w-[160px]'>
            <div className='h-[30px]'></div>
          {/* ROUND1 FIRST LINES */}
            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-b-2 border-black'></div>
                    <div className='h-[40px] border-r-2 border-black'></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-r-2 border-black'></div>
                    <div className='h-[40px] border-r-2 border-black '></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-b-2 border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-r-2 border-b-2 border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px]'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] '></div>
                    <div className='h-[40px]'></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px]'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

          {/* ROUND1 SECOND LINES */}
            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-b-2 border-black'></div>
                    <div className='h-[40px] border-r-2 border-black'></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-r-2 border-black'></div>
                    <div className='h-[40px] border-r-2 border-black '></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-b-2 border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-r-2 border-b-2 border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px]'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] '></div>
                    <div className='h-[40px]'></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px]'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

          {/* ROUND1 THIRD LINES */}
            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-b-2 border-black'></div>
                    <div className='h-[40px] border-r-2 border-black'></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-r-2 border-black'></div>
                    <div className='h-[40px] border-r-2 border-black '></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-b-2 border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-r-2 border-b-2 border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px]'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] '></div>
                    <div className='h-[40px]'></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px]'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

          {/* ROUND1 FOURTH LINES */}
            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-b-2 border-black'></div>
                    <div className='h-[40px] border-r-2 border-black'></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-r-2 border-black'></div>
                    <div className='h-[40px] border-r-2 border-black '></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-b-2 border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-r-2 border-b-2 border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px]'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>
            

          </div>


        <div className='w-[20%]'>
          <h1 className='text-center h-[30px]'>Round 2</h1>
          <div className='mt-[80px]'>
          
          {winnersBracket.map((player, index) => {
            if (index % 2 === 0 && index < winnersBracket.length - 1) {
              return (
                <>
                <Match
                  key={`match${index / 2}`} 
                  player1={winnersBracket[index]}
                  player2={winnersBracket[index + 1]}
                  onWinnerSelected={(winner, loser) => handleRoundTwoBracketComplete(winner, loser)}
                />
                <div className='py-[120px]'>

                </div>
                </>
              );
            }
            return null;
          })}
      
          </div>
        </div>

              {/* SPACER */}
              <div className='w-[160px]'>
                  <div className='h-[30px]'></div>
                  {/* ROUND2 FIRST LINES */}
                  <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px]'></div>
                          <div className='h-[40px]'></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px]'></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>

                  <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] border-b-2 border-black'></div>
                          <div className='h-[40px] border-r-2 border-black'></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px]'></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>

                  <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] border-r-2 border-black'></div>
                          <div className='h-[40px] border-r-2 border-black'></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px]'></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>
                  <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] border-r-2 border-black'></div>
                          <div className='h-[40px] border-r-2 border-black'></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] border-b-2 border-black'></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>

                  {/* ROUND2 SECOND LINES */}
                  <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] border-r-2 border-black'></div>
                          <div className='h-[40px] border-r-2 border-black'></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px]'></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>

                  <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] border-b-2 border-r-2 border-black'></div>
                          <div className='h-[40px] '></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] '></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>

                  <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px]'></div>
                          <div className='h-[40px]'></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px]'></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>
                  <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] '></div>
                          <div className='h-[40px]'></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px]'></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>

                  

                  
                  {/* 
                //    */}

                  
                <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px]'></div>
                          <div className='h-[40px]'></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px]'></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>

                  <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] border-b-2 border-black'></div>
                          <div className='h-[40px] border-r-2 border-black'></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px]'></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>

                  <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] border-r-2 border-black'></div>
                          <div className='h-[40px] border-r-2 border-black'></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px]'></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>
                  <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] border-r-2 border-black'></div>
                          <div className='h-[40px] border-r-2 border-black'></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] border-b-2 border-black'></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>

                  {/* ROUND2 SECOND LINES */}
                  <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] border-r-2 border-black'></div>
                          <div className='h-[40px] border-r-2 border-black'></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px]'></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>

                  <div className='flex flex-row'>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] border-b-2 border-r-2 border-black'></div>
                          <div className='h-[40px] '></div>
                      </div>
                      <div className='h-[80px] w-[80px] flex flex-col'>
                          <div className='h-[40px] '></div>
                          <div className='h-[40px]'></div>
                      </div>
                  </div>

            
        

        

      
                  {/* 
                //    */}


               

                
                
                


              </div>

        <div>
        <h2 className='text-center'>Semi-Finals</h2>
        {winnersBracketRound1.map((player, index) => {
         
            return (
              <>
              
                <div key={index}>
                  <div className='border-black border-2 m-5'>{player}</div>
                </div>

              </>
            );
          
        })}
      </div> 
      </div>


      {/* <div>
        <h2>Round 3 Winner's Bracket</h2>
        {winnersBracketRound3.map((player, index) => {
          if (index % 2 === 0 && index < winnersBracketRound3.length - 1) {
            return (
              <Match
                key={`match${index / 2}`}
                player1={winnersBracketRound3[index]}
                player2={winnersBracketRound3[index + 1]}
                onWinnerSelected={(winner, loser) => handleRoundThreeBracketComplete(winner, loser)}
              />
            );
          }
          return null;
        })}
      </div> */}

  
    </>
  );
}

export default Tournament;