
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import "../css/container.css";
import Spacer from '../components/16PlayerSpacer1.jsx';
import Spacer2 from '../components/16PlayerSpacer2.jsx';
import Spacer3 from '../components/16PlayerSpacer3.jsx';
import Spacer4 from '../components/16PlayerSpacer4.jsx';
import NavigationBar from '../components/NavigationBar';



function Match({ player1, player2, onWinnerSelected }) {

  const [winner, setWinner] = useState(null);
  const [loser, setLoser] = useState(null);

  const [player1Clicked, setPlayer1Clicked] = useState(false);
  const [player2Clicked, setPlayer2Clicked] = useState(false);

  const [player1Color, setPlayer1Color] = useState();
  const [player2Color, setPlayer2Color] = useState();
  const [player1BGLoseColor, setPlayer1BGLoseColor] = useState();
  const [player2BGLoseColor, setPlayer2BGLoseColor] = useState();

  const [player1BGWinColor, setPlayer1BGWinColor] = useState();
  const [player2BGWinColor, setPlayer2BGWinColor] = useState();


  const handleWinnerSelected = (player) => {
    const loser = player === player1 ? player2 : player1;
    setWinner(player);
    setLoser(loser);
    onWinnerSelected(player, loser);

    // Disable the buttons of the unselected player
    if (player === player1) {
      setPlayer2Clicked(true);
      setPlayer2Color('white');
      setPlayer2BGLoseColor('gray');
      setPlayer1BGWinColor('#03c03c');

    } else {
      setPlayer1Clicked(true);
      setPlayer1Color('white');
      setPlayer1BGLoseColor('gray');
      setPlayer2BGWinColor('#03c03c');

    }
  };

  return (
    <div className='flex'>
      <div className='h-[80px] w-[300px]'>
        <div style={{
          color: player2Color,
          backgroundColor: player1BGWinColor
        }}>
          <div 
          className='border-black border-2 h-[40px]'
          style={{ 
            color: player1Color,
            backgroundColor: player1BGLoseColor 
          }}
          >
            <button 
              className='w-[100%]'
              onClick={() => handleWinnerSelected(player1)}
              disabled={player1Clicked}
            >
              {player1}
            </button>
          </div>
        </div>

      <div style={{
        color: player1Color,
        backgroundColor: player2BGWinColor  

      }}>
        <div 
        className='border-black border-2 h-[40px]'
        style={{ 
          color: player2Color,
          backgroundColor: player2BGLoseColor  
        }}
        >
          <button 
            className='w-[100%]'
            onClick={() => handleWinnerSelected(player2)}
            disabled={player2Clicked}
          >
            {player2}
          </button>
        </div>
      </div>

      </div>

    </div>
  );
}

function Tournament() {

  const [players, setAllPlayers] = useState([]);
  const [roundOneBracket, setRoundOneBracket] = useState([]);
  const [roundTwoBracket, setRoundTwoBracket] = useState([]);
  const [roundThreeBracket, setRoundThreeBracket] = useState([]);
  const [roundFourBracket, setRoundFourBracket] = useState([]);
  const [champion, setChampion] = useState([]);



  const handleRoundOneBracketComplete = (winner) => {
    setRoundTwoBracket([...roundTwoBracket, winner]);
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


  // Fetching of 16 Players from the database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/auth/16player');
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
    className='scroll-container overflow-y-auto overflow-x-auto bg-stone-300	'
    ref={scrollContainerRef}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
    >
      <NavigationBar/>
      <h1 className='bg-red-500 w-[100%]'>Single Elimination Tournament</h1>
      <div className='flex flex-grow'>

        <div className='w-[300px]'>
          <h2 className='text-center h-[30px] border-lime-500 border-2'>ROUND 1</h2>
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
          <h1 className='text-center h-[30px] border-lime-500 border-2'>ROUND 2</h1>
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
          <div className='mt-[615px] text-center border-black border-2 p-3 bg-yellow-400 '>
            {champion}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Tournament;