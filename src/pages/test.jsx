
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import "../css/container.css";
import Spacer from '../components/Spacer.jsx';
import Spacer2 from '../components/Spacer2.jsx';
import Spacer3 from '../components/Spacer3.jsx';
import Spacer4 from '../components/Spacer4.jsx';


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
      <div className='h-[80px] w-[300px]'>
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

  

  const [players, setAllPlayers] = useState([]);
  const [roundOneBracket, setRoundOneBracket] = useState([players]);
  const [roundTwoBracket, setRoundTwoBracket] = useState([]);
  const [roundThreeBracket, setRoundThreeBracket] = useState([]);
  const [roundFourBracket, setRoundFourBracket] = useState([]);
  const [champion, setChampion] = useState([]);




  const handleRoundOneBracketComplete = (winner) => {
    setRoundTwoBracket([...roundTwoBracket, winner]);

    if (roundOneBracket.length === 1) {
      alert(`Tournament Winner: ${winner}`);
    }
  };

  const handleRoundTwoBracketComplete = (winner) => {
    setRoundThreeBracket([...roundThreeBracket, winner]);
  };

  const handleRoundThreeBracketComplete = (winner) => {
    setRoundFourBracket([...roundFourBracket, winner]);
  };

  const handleChampion = (winner) => {
    setChampion([...champion, winner]);
  };

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


  // Fetching of Players from the database
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
  
// FOR ROUND 1 LINES
const numMatchesRound1 = Math.ceil(roundOneBracket.length / 4);
const Spacers = Array(numMatchesRound1).fill().map((_, index) => (
  <Spacer key={`spacers${index}`} />
));

// FOR ROUND 2 LINES
const numMatchesRound2 = Math.ceil(roundTwoBracket.length / 4);
const Spacers2 = Array(numMatchesRound2).fill().map((_, index) => (
  <Spacer2 key={`spacers${index}`} />
));




// MOUSE MOVE
const scrollContainerRef = useRef(null);
const [isDragging, setIsDragging] = useState(false);
const [startX, setStartX] = useState(0);
const [scrollLeft, setScrollLeft] = useState(0);

const handleMouseDown = (e) => {
  setIsDragging(true);
  setStartX(e.clientX);
  setScrollLeft(scrollContainerRef.current.scrollLeft);
  scrollContainerRef.current.style.cursor = 'grabbing'; // Change cursor style
  e.preventDefault();
};

const handleMouseUp = () => {
  setIsDragging(false);
  scrollContainerRef.current.style.cursor = 'auto'; // Reset cursor style
};

const handleMouseMove = (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - startX;

  // Update both horizontal and vertical scroll positions
  scrollContainerRef.current.scrollLeft = scrollLeft - deltaX;
};



  return (
    <>
    <div 
    className='scroll-container overflow-y-auto overflow-x-auto'
    ref={scrollContainerRef}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
    >
      <h1 className='bg-red-500 w-[100%]'>Single Elimination Tournament</h1>
      <div className='flex flex-grow'>

        <div className='w-[300px]'>
          <h2 className='text-center h-[30px] border-lime-500 border-2'>Round 1</h2>
          {roundOneBracket.map((player, index) => {
            if (index % 2 === 0 && index < roundOneBracket.length - 1) {
              return (
                <>
                <Match
                  key={`match${index / 2}`}
                  player1={roundOneBracket[index]}
                  player2={roundOneBracket[index + 1]}
                  onWinnerSelected={(winner) => handleRoundOneBracketComplete(winner)}
                />
                <div className='h-[80px]'></div>
                </>
              );
            }
            return null;
          })}
        </div>

        {/* SPACER FOR ROUND1 connecting ROUND2 LINE UI */}
        <div className='flex flex-col'>
          {Spacers}
        </div>

        <div className='w-[300px]'>
          <h1 className='text-center h-[30px] border-lime-500 border-2'>Round 2</h1>
          <div className='mt-[80px]'>
          {roundTwoBracket.map((player, index) => {
            if (index % 2 === 0 && index < roundTwoBracket.length - 1) {
              return (
                <>
                <Match
                  key={`match${index / 2}`} 
                  player1={roundTwoBracket[index]}
                  player2={roundTwoBracket[index + 1]}
                  onWinnerSelected={(winner, loser) => handleRoundTwoBracketComplete(winner)}
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

              {/* SPACER FOR ROUND2 connecting ROUND3 LINE UI */}
             
                <div className='flex flex-col'>
                <div className='h-[30px]'></div>
                  {Spacers2}
                </div>



        <div className='w-[300px]'>
          <h1 className='text-center h-[30px] border-lime-500 border-2'>SEMI-FINALS</h1>
          <div className='mt-[240px]'>
          {roundThreeBracket.map((player, index) => {
            if (index % 2 === 0 && index < roundThreeBracket.length - 1) {
              return (
                <>
                <Match
                  key={`match${index / 2}`} 
                  player1={roundThreeBracket[index]}
                  player2={roundThreeBracket[index + 1]}
                  onWinnerSelected={(winner) => handleRoundThreeBracketComplete(winner)}
                />
                <div className='py-[280px]'></div>
                </>
              );
            }
            return null;
          })}
      
          </div>
        </div>


        <div className='flex flex-col'>
          <div className='h-[30px]'></div>
            <Spacer3/>
        </div>


        <div className='w-[300px]'>
          <h1 className='text-center h-[30px] border-lime-500 border-2'>FINALS</h1>
          <div className='mt-[600px]'>
          {roundFourBracket.map((player, index) => {
            if (index % 2 === 0 && index < roundFourBracket.length - 1) {
              return (
                <>
                <Match
                  key={`match${index / 2}`} 
                  player1={roundFourBracket[index]}
                  player2={roundFourBracket[index + 1]}
                  onWinnerSelected={(winner) => handleChampion(winner)}
                />
                <div className='py-[280px]'></div>
                </>
              );
            }
            return null;
          })}
      
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='h-[30px]'></div>
            <Spacer4/>
        </div>
        
        <div className='w-[300px]'>
          <h1 className='text-center h-[30px] w-[150px] border-lime-500 border-2'>CHAMPION</h1>
          <div className='mt-[615px] text-center border-black border-2 p-3'>
            {champion}
          </div>
        </div>

        


          {/* <div>
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
        </div>  */}




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






      </div>
    </div>

      

  
    </>
  );
}

export default Tournament;