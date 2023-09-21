import "../css/customColumn.css"
import React, { useState } from 'react';

// Code Roadmap:
// rnd1 = columns of each rounds
// Match# = rows of each fights per column/rounds

export default function singleElimination() {
    // Dummy Data
    const players = [
        'Ozymandias', 
        'Kratos', 
        'Jesus', 
        'Lilith', 
        'Belial',
        'Sam Fisher',
        'Zeus',
        'Dante',
        'Drake',
        'Edward',
        'David',
        'Dredd',
        'Ichigo',
        'Altair',
        'Ezio',
        'Virgil',

        'Bob',
        'Jin',
        'Kazuya',
        'Ogre',
        'Buboy',
        'Raphael',
        'Leo',
        'Aifel',
        'Zed',
        'Klaus',
        'Ray',
        'Jay',
        'Joy',
        'Gangplank',
        'Nami',
        'Jiffy'

    ];

    // ROUND 1
    const [rnd1Match1Winner, setRnd1Match1Winner] = useState('#'); // Initialize the winner state with an empty string
    const [rnd1Match1Selected, setRnd1Match1Selected] = useState(false);

    const [rnd1Match2Winner, setRnd1Match2Winner] = useState('#'); 
    const [rnd1Match2Selected, setRnd1Match2Selected] = useState(false);

    const [rnd1Match3Winner, setRnd1Match3Winner] = useState('#'); 
    const [rnd1Match3Selected, setRnd1Match3Selected] = useState(false);

    const [rnd1Match4Winner, setRnd1Match4Winner] = useState('#'); 
    const [rnd1Match4Selected, setRnd1Match4Selected] = useState(false);

    const [rnd1Match5Winner, setRnd1Match5Winner] = useState('#'); 
    const [rnd1Match5Selected, setRnd1Match5Selected] = useState(false);

    const [rnd1Match6Winner, setRnd1Match6Winner] = useState('#'); 
    const [rnd1Match6Selected, setRnd1Match6Selected] = useState(false);

    const [rnd1Match7Winner, setRnd1Match7Winner] = useState('#'); 
    const [rnd1Match7Selected, setRnd1Match7Selected] = useState(false);

    const [rnd1Match8Winner, setRnd1Match8Winner] = useState('#'); 
    const [rnd1Match8Selected, setRnd1Match8Selected] = useState(false);




    const [rnd1Match9Winner, setRnd1Match9Winner] = useState('#'); 
    const [rnd1Match9Selected, setRnd1Match9Selected] = useState(false);

    const [rnd1Match10Winner, setRnd1Match10Winner] = useState('#'); 
    const [rnd1Match10Selected, setRnd1Match10Selected] = useState(false);

    const [rnd1Match11Winner, setRnd1Match11Winner] = useState('#'); 
    const [rnd1Match11Selected, setRnd1Match11Selected] = useState(false);

    const [rnd1Match12Winner, setRnd1Match12Winner] = useState('#'); 
    const [rnd1Match12Selected, setRnd1Match12Selected] = useState(false);

    const [rnd1Match13Winner, setRnd1Match13Winner] = useState('#'); 
    const [rnd1Match13Selected, setRnd1Match13Selected] = useState(false);

    const [rnd1Match14Winner, setRnd1Match14Winner] = useState('#'); 
    const [rnd1Match14Selected, setRnd1Match14Selected] = useState(false);

    const [rnd1Match15Winner, setRnd1Match15Winner] = useState('#'); 
    const [rnd1Match15Selected, setRnd1Match15Selected] = useState(false);

    const [rnd1Match16Winner, setRnd1Match16Winner] = useState('#'); 
    const [rnd1Match16Selected, setRnd1Match16Selected] = useState(false);

    // ROUND 2
    const [rnd2Match1Winner, setRnd2Match1Winner] = useState('#'); 
    const [rnd2Match1Selected, setRnd2Match1Selected] = useState(false);

    const [rnd2Match2Winner, setRnd2Match2Winner] = useState('#'); 
    const [rnd2Match2Selected, setRnd2Match2Selected] = useState(false);

    const [rnd2Match3Winner, setRnd2Match3Winner] = useState('#'); 
    const [rnd2Match3Selected, setRnd2Match3Selected] = useState(false);

    const [rnd2Match4Winner, setRnd2Match4Winner] = useState('#'); 
    const [rnd2Match4Selected, setRnd2Match4Selected] = useState(false);
    

    // Functions to handle the winner click and update the winner state
    // ROUND 1
    const handleWinnerClick = (playerName) => {
        if(!rnd1Match1Selected){
            setRnd1Match1Winner(playerName);
            setRnd1Match1Selected(true);
        }
    };

    const handleWinnerClickRnd1Match2 = (playerName) => {
        if(!rnd1Match2Selected){
            setRnd1Match2Winner(playerName);
            setRnd1Match2Selected(true);
        }
    };

    const handleWinnerClickRnd1Match3 = (playerName) => {
        if(!rnd1Match3Selected){
            setRnd1Match3Winner(playerName);
            setRnd1Match3Selected(true);
        }
    };

    const handleWinnerClickRnd1Match4 = (playerName) => {
        if(!rnd1Match4Selected){
            setRnd1Match4Winner(playerName);
            setRnd1Match4Selected(true);
        }
    };

    const handleWinnerClickRnd1Match5 = (playerName) => {
        if(!rnd1Match5Selected){
            setRnd1Match5Winner(playerName);
            setRnd1Match5Selected(true);
        }
    };

    const handleWinnerClickRnd1Match6 = (playerName) => {
        if(!rnd1Match6Selected){
            setRnd1Match6Winner(playerName);
            setRnd1Match6Selected(true);
        }
    };

    const handleWinnerClickRnd1Match7 = (playerName) => {
        if(!rnd1Match7Selected){
            setRnd1Match7Winner(playerName);
            setRnd1Match7Selected(true);
        }
    };

    const handleWinnerClickRnd1Match8 = (playerName) => {
        if(!rnd1Match8Selected){
            setRnd1Match8Winner(playerName);
            setRnd1Match8Selected(true);
        }
    };




    const handleWinnerClickRnd1Match9 = (playerName) => {
        if(!rnd1Match9Selected){
            setRnd1Match9Winner(playerName);
            setRnd1Match9Selected(true);
        }
    };

    const handleWinnerClickRnd1Match10 = (playerName) => {
        if(!rnd1Match10Selected){
            setRnd1Match10Winner(playerName);
            setRnd1Match10Selected(true);
        }
    };

    const handleWinnerClickRnd1Match11 = (playerName) => {
        if(!rnd1Match11Selected){
            setRnd1Match11Winner(playerName);
            setRnd1Match11Selected(true);
        }
    };

    const handleWinnerClickRnd1Match12 = (playerName) => {
        if(!rnd1Match12Selected){
            setRnd1Match12Winner(playerName);
            setRnd1Match12Selected(true);
        }
    };

    const handleWinnerClickRnd1Match13 = (playerName) => {
        if(!rnd1Match13Selected){
            setRnd1Match13Winner(playerName);
            setRnd1Match13Selected(true);
        }
    };

    const handleWinnerClickRnd1Match14 = (playerName) => {
        if(!rnd1Match14Selected){
            setRnd1Match14Winner(playerName);
            setRnd1Match14Selected(true);
        }
    };

    const handleWinnerClickRnd1Match15 = (playerName) => {
        if(!rnd1Match15Selected){
            setRnd1Match15Winner(playerName);
            setRnd1Match15Selected(true);
        }
    };

    const handleWinnerClickRnd1Match16 = (playerName) => {
        if(!rnd1Match16Selected){
            setRnd1Match16Winner(playerName);
            setRnd1Match16Selected(true);
        }
    };

    // ROUND 2
    const handleWinnerClickRnd2Match1 = (playerName) => {
        if(!rnd2Match1Selected){
            setRnd2Match1Winner(playerName);
            setRnd2Match1Selected(true);
        }
    };

    const handleWinnerClickRnd2Match2 = (playerName) => {
        if(!rnd2Match2Selected){
            setRnd2Match2Winner(playerName);
            setRnd2Match2Selected(true);
        }
    };

    const handleWinnerClickRnd2Match3 = (playerName) => {
        if(!rnd2Match3Selected){
            setRnd2Match3Winner(playerName);
            setRnd2Match3Selected(true);
        }
    };

    const handleWinnerClickRnd2Match4 = (playerName) => {
        if(!rnd2Match4Selected){
            setRnd2Match4Winner(playerName);
            setRnd2Match4Selected(true);
        }
    };

    return (
        <>
        <div className="text-center">
                {/* ROUNDS LABEL*/}
                    <div className="grid grid-cols-12 font-bold sticky top-0">
                        <div className="">ROUND 1</div>
                        <div className=""></div>
                        <div className="">ROUND 2</div>
                        <div className=""></div>
                        <div className="">SEMI-FINALS</div>
                        <div className=""></div>
                        <div className="">FINALS</div>
                        <div className=""></div>
                        <div className="">TOURNAMENT CHAMPION</div>
                    </div>

                {/* Row1 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div 
                        className={`border-2 border-black ${rnd1Match1Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClick(players[0])}>
                        {players[0]}
                        </div>
                        <div className="custom-col-span"></div>
                    </div>
                {/* Row2 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div 
                        className={`border-b-2 border-l-2 border-r-2 border-black ${rnd1Match1Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClick(players[1])}>
                        {players[1]}
                        </div>
                        <div className="custom-col-span border-t-2 border-r-2 border-black items-end"></div>
                    </div>
                    
                {/* Row3 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span2 border-l-2 border-black border-b-2"></div>
                        <div 
                        className={`border-2 border-black ${rnd1Match1Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match1(rnd1Match1Winner)}>
                            {rnd1Match1Winner}
                        </div>
                    </div>

                {/* Row4 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span border-r-2 border-black"></div>
                        <div 
                        className={`border-b-2 border-l-2 border-r-2 border-black ${rnd1Match2Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match1(rnd1Match2Winner)}>
                            {rnd1Match2Winner}
                        </div>
                        <div className="custom-col-span border-black border-t-2 border-r-2"></div>
                    </div>

                {/* Row5 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div 
                        className={`border-2 border-black ${rnd1Match2Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd1Match2(players[2])}>
                        {players[2]}
                        </div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row6 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div 
                        className={`border-l-2 border-r-2 border-b-2 border-black ${rnd1Match2Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd1Match2(players[3])}>
                        {players[3]}
                        </div>
                        <div className="custom-col-span border-t-2 border-black items-end"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>


                {/* Row7 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span2 border-black border-l-2 border-b-2"></div>
                        <div 
                        className={`border-black border-2 ${rnd2Match1Selected ? 'disabled' : ''}`}
                        >
                            {rnd2Match1Winner}
                        </div>
                        <div className="custom-col-span"></div>
                    </div>

                {/* Row8 - PlayerBox*/}
                <div className="grid grid-cols-12">
                        <div 
                        className={`border-2 border-black ${rnd1Match3Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd1Match3(players[4])}>
                        {players[4]}
                        </div>
                        <div className="custom-col-span"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div 
                        className={`border-black border-b-2 border-l-2 border-r-2 ${rnd2Match1Selected ? 'disabled' : ''}`}>{rnd2Match2Winner}</div>
                        <div className="custom-col-span border-black border-t-2 border-r-2"></div>
                    </div>

                {/* Row9 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div 
                        className={`border-l-2 border-r-2 border-b-2 border-black ${rnd1Match3Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd1Match3(players[5])}>
                        {players[5]}
                        </div>
                        <div className="custom-col-span border-t-2 border-r-2 border-black items-end"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row10 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span2 border-l-2 border-black border-black border-b-2"></div>
                        <div 
                        className={`border-black border-2 ${rnd1Match3Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match2(rnd1Match3Winner)}
                        >
                            {rnd1Match3Winner}
                        </div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row11 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span border-r-2 border-black"></div>
                        <div 
                        className={`border-b-2 border-l-2 border-r-2 border-black ${rnd1Match4Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match2(rnd1Match4Winner)}
                        >
                            {rnd1Match4Winner}
                        </div>
                        <div className="custom-col-span border-black border-t-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row12 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-2 border-black"
                         onClick={() => handleWinnerClickRnd1Match4(players[6])}>
                        {players[6]}
                        </div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row13 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-l-2 border-r-2 border-b-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match4(players[7])}>
                        {players[7]}
                        </div>
                        <div className="custom-col-span border-t-2 border-black items-end"></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row14 - PlayerBox*/}
                <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span2 border-black border-l-2 border-b-2"></div>
                        <div className="border-black border-2">Winner #13</div>
                        <div className="border-black border-b-2"></div>
                        <div className="border-black border-l-2 border-t-2 border-r-2">#Name</div>
                    </div>

                {/* Row15 - PlayerBox*/}
                <div className="grid grid-cols-12">
                        <div className="border-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match5(players[8])}>
                        {players[8]}
                        </div>
                        <div className="custom-col-span"></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className="border-black border-l-2 border-b-2 border-r-2">Winner #14</div>
                        <div className=""></div>
                        <div className="border-black border-b-2 border-l-2 border-r-2">CHAMPION</div>
                    </div>

                {/* Row16 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div 
                        className="border-b-2 border-l-2 border-r-2 border-black" 
                        onClick={() => handleWinnerClickRnd1Match5(players[9])}>
                        {players[9]}
                        </div>
                        <div className="custom-col-span border-t-2 border-r-2 border-black items-end"></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row17 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span2 border-l-2 border-black border-b-2"></div>
                        <div 
                        className={`border-2 border-black ${rnd1Match5Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match3(rnd1Match5Winner)}
                        >
                            {rnd1Match5Winner}
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row18 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span border-r-2 border-black"></div>
                        <div 
                        className={`border-b-2 border-l-2 border-r-2 border-black ${rnd1Match5Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match3(rnd1Match6Winner)}>
                            {rnd1Match6Winner}
                        </div>
                        <div className="custom-col-span border-black border-t-2 border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row19 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match6(players[10])}>
                        {players[10]}
                        </div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row20 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-l-2 border-r-2 border-b-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match6(players[11])}>
                        {players[11]}
                        </div>
                        <div className="custom-col-span border-t-2 border-black items-end"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>


                {/* Row21 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span2 border-black border-l-2 border-b-2"></div>
                        <div className={`border-black border-2 ${rnd2Match3Selected ? 'disabled' : ''}`}>
                            {rnd2Match3Winner}
                        </div>
                        <div className="custom-col-span border-black border-r-2 border-b-2"></div>
                    </div>


                {/* Row22 - PlayerBox*/}
                <div className="grid grid-cols-12">
                        <div className="border-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match7(players[12])}>
                        {players[12]}
                        </div>
                        <div className="custom-col-span"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className={`border-black border-b-2 border-l-2 border-r-2 ${rnd2Match4Selected ? 'disabled' : ''}`}>
                            {rnd2Match4Winner}
                        </div>
                        <div className="custom-col-span"></div>
                    </div>

                {/* Row23 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-l-2 border-r-2 border-b-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match7(players[13])}>
                        {players[13]}
                        </div>
                        <div className="custom-col-span border-t-2 border-r-2 border-black items-end"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row24 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span2 border-l-2 border-black border-black border-b-2"></div>
                        <div 
                        className={`border-black border-2 ${rnd1Match7Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match4(rnd1Match7Winner)}>
                            {rnd1Match7Winner}
                        </div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row25 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span border-r-2 border-black"></div>
                        <div 
                        className={`border-b-2 border-l-2 border-r-2 border-black ${rnd1Match8Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match4(rnd1Match7Winner)}
                        >
                            {rnd1Match8Winner}</div>
                        <div className="custom-col-span border-black border-t-2"></div>
                    </div>

                {/* Row26 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match8(players[14])}>
                        {players[14]}
                        </div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row27 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-l-2 border-r-2 border-b-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match8(players[15])}>
                        {players[15]}
                        </div>
                        <div className="custom-col-span border-t-2 border-black items-end"></div>
                    </div>










                {/* Row1 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div 
                        className={`border-2 border-black ${rnd1Match1Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClick(players[0])}>
                        {players[0]}
                        </div>
                        <div className="custom-col-span"></div>
                    </div>
                {/* Row2 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div 
                        className={`border-b-2 border-l-2 border-r-2 border-black ${rnd1Match1Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClick(players[1])}>
                        {players[1]}
                        </div>
                        <div className="custom-col-span border-t-2 border-r-2 border-black items-end"></div>
                    </div>
                    
                {/* Row3 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span2 border-l-2 border-black border-b-2"></div>
                        <div 
                        className={`border-2 border-black ${rnd1Match1Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match1(rnd1Match1Winner)}>
                            {rnd1Match1Winner}
                        </div>
                    </div>

                {/* Row4 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span border-r-2 border-black"></div>
                        <div 
                        className={`border-b-2 border-l-2 border-r-2 border-black ${rnd1Match2Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match1(rnd1Match2Winner)}>
                            {rnd1Match2Winner}
                        </div>
                        <div className="custom-col-span border-black border-t-2 border-r-2"></div>
                    </div>

                {/* Row5 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div 
                        className={`border-2 border-black ${rnd1Match2Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd1Match2(players[2])}>
                        {players[2]}
                        </div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row6 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div 
                        className={`border-l-2 border-r-2 border-b-2 border-black ${rnd1Match2Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd1Match2(players[3])}>
                        {players[3]}
                        </div>
                        <div className="custom-col-span border-t-2 border-black items-end"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>


                {/* Row7 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span2 border-black border-l-2 border-b-2"></div>
                        <div 
                        className={`border-black border-2 ${rnd2Match1Selected ? 'disabled' : ''}`}
                        >
                            {rnd2Match1Winner}
                        </div>
                        <div className="custom-col-span"></div>
                    </div>

                {/* Row8 - PlayerBox*/}
                <div className="grid grid-cols-12">
                        <div 
                        className={`border-2 border-black ${rnd1Match3Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd1Match3(players[4])}>
                        {players[4]}
                        </div>
                        <div className="custom-col-span"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div 
                        className={`border-black border-b-2 border-l-2 border-r-2 ${rnd2Match1Selected ? 'disabled' : ''}`}>{rnd2Match2Winner}</div>
                        <div className="custom-col-span border-black border-t-2 border-r-2"></div>
                    </div>

                {/* Row9 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div 
                        className={`border-l-2 border-r-2 border-b-2 border-black ${rnd1Match3Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd1Match3(players[5])}>
                        {players[5]}
                        </div>
                        <div className="custom-col-span border-t-2 border-r-2 border-black items-end"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row10 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span2 border-l-2 border-black border-black border-b-2"></div>
                        <div 
                        className={`border-black border-2 ${rnd1Match3Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match2(rnd1Match3Winner)}
                        >
                            {rnd1Match3Winner}
                        </div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row11 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span border-r-2 border-black"></div>
                        <div 
                        className={`border-b-2 border-l-2 border-r-2 border-black ${rnd1Match4Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match2(rnd1Match4Winner)}
                        >
                            {rnd1Match4Winner}
                        </div>
                        <div className="custom-col-span border-black border-t-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row12 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-2 border-black"
                         onClick={() => handleWinnerClickRnd1Match4(players[6])}>
                        {players[6]}
                        </div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row13 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-l-2 border-r-2 border-b-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match4(players[7])}>
                        {players[7]}
                        </div>
                        <div className="custom-col-span border-t-2 border-black items-end"></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row14 - PlayerBox*/}
                <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span2 border-black border-l-2 border-b-2"></div>
                        <div className="border-black border-2">Winner #13</div>
                        <div className="border-black border-b-2"></div>
                        <div className="border-black border-l-2 border-t-2 border-r-2">#Name</div>
                    </div>

                {/* Row15 - PlayerBox*/}
                <div className="grid grid-cols-12">
                        <div className="border-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match5(players[8])}>
                        {players[8]}
                        </div>
                        <div className="custom-col-span"></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className="border-black border-l-2 border-b-2 border-r-2">Winner #14</div>
                        <div className=""></div>
                        <div className="border-black border-b-2 border-l-2 border-r-2">CHAMPION</div>
                    </div>

                {/* Row16 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div 
                        className="border-b-2 border-l-2 border-r-2 border-black" 
                        onClick={() => handleWinnerClickRnd1Match5(players[9])}>
                        {players[9]}
                        </div>
                        <div className="custom-col-span border-t-2 border-r-2 border-black items-end"></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row17 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span2 border-l-2 border-black border-b-2"></div>
                        <div 
                        className={`border-2 border-black ${rnd1Match5Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match3(rnd1Match5Winner)}
                        >
                            {rnd1Match5Winner}
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row18 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span border-r-2 border-black"></div>
                        <div 
                        className={`border-b-2 border-l-2 border-r-2 border-black ${rnd1Match5Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match3(rnd1Match6Winner)}>
                            {rnd1Match6Winner}
                        </div>
                        <div className="custom-col-span border-black border-t-2 border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row19 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match6(players[10])}>
                        {players[10]}
                        </div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row20 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-l-2 border-r-2 border-b-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match6(players[11])}>
                        {players[11]}
                        </div>
                        <div className="custom-col-span border-t-2 border-black items-end"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>


                {/* Row21 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="custom-col-span2 border-black border-l-2 border-b-2"></div>
                        <div className={`border-black border-2 ${rnd2Match3Selected ? 'disabled' : ''}`}>
                            {rnd2Match3Winner}
                        </div>
                        <div className="custom-col-span border-black border-r-2 border-b-2"></div>
                    </div>


                {/* Row22 - PlayerBox*/}
                <div className="grid grid-cols-12">
                        <div className="border-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match7(players[12])}>
                        {players[12]}
                        </div>
                        <div className="custom-col-span"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                        <div className={`border-black border-b-2 border-l-2 border-r-2 ${rnd2Match4Selected ? 'disabled' : ''}`}>
                            {rnd2Match4Winner}
                        </div>
                        <div className="custom-col-span"></div>
                    </div>

                {/* Row23 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-l-2 border-r-2 border-b-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match7(players[13])}>
                        {players[13]}
                        </div>
                        <div className="custom-col-span border-t-2 border-r-2 border-black items-end"></div>
                        <div className=""></div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row24 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span2 border-l-2 border-black border-black border-b-2"></div>
                        <div 
                        className={`border-black border-2 ${rnd1Match7Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match4(rnd1Match7Winner)}>
                            {rnd1Match7Winner}
                        </div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row25 */}
                    <div className="grid grid-cols-12">
                        <div className=""></div>
                        <div className="custom-col-span border-r-2 border-black"></div>
                        <div 
                        className={`border-b-2 border-l-2 border-r-2 border-black ${rnd1Match8Selected ? 'disabled' : ''}`}
                        onClick={() => handleWinnerClickRnd2Match4(rnd1Match7Winner)}
                        >
                            {rnd1Match8Winner}</div>
                        <div className="custom-col-span border-black border-t-2"></div>
                    </div>

                {/* Row26 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match8(players[14])}>
                        {players[14]}
                        </div>
                        <div className="custom-col-span border-black border-r-2"></div>
                    </div>

                {/* Row27 - PlayerBox*/}
                    <div className="grid grid-cols-12">
                        <div className="border-l-2 border-r-2 border-b-2 border-black"
                        onClick={() => handleWinnerClickRnd1Match8(players[15])}>
                        {players[15]}
                        </div>
                        <div className="custom-col-span border-t-2 border-black items-end"></div>
                    </div>
        </div>
        </>
    )
}
