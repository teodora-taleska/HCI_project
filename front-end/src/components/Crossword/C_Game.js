import NavBar from "../NavBar"
import "./Crossword.css"
import { Link } from "react-router-dom"

import React from 'react';
import Crossword from '@jaredreisinger/react-crossword';


const data = {

  across: {
    1: {
      clue: 'Most common type of STI',
      answer: 'HPV',
      row: 4,
      col: 7,
    },
    2: {
      clue: 'STI if left untreated can lead to infertility',
      answer: 'CHLAMIDIA',
      row: 7,
      col: 4,
    },
    3: {
      clue: 'Most effective prevention against STIs (plural)',
      answer: 'CONDOMS',
      row: 12,
      col: 1,
    },

  },
  down: {
    5: {
      clue: 'Bacterial infection of the genital tract',
      answer: 'GONORRHEA',
      row: 1,
      col: 5,
    },
    1: {
      clue: 'Viran infection that has three types',
      answer: 'HEPATITIS',
      row: 4,
      col: 7,
    },
    6: {
      clue: 'Causes AIDS',
      answer: 'HIV',
      row: 6,
      col: 11,
    },
  },

};

function C_Game(){

    return (
        <div>
        <NavBar />
        <div className="crossword-nav">
                <Link to="/crossword/easy"><button id="arrowbutton"><i class="fa fa-arrow-left" aria-hidden="true"></i> </button></Link>
                <h3 id="learnwbutton"><b>Diseases</b></h3>
                <i class="fa fa-star right" aria-hidden="true">5</i>
            </div>
         <Crossword data={data} />;
         <Link to="/crossword/game/ask"><button>Submit</button></Link>
        </div>
        )
}

export default C_Game