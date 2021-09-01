import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './GameOfLife.css'
import Footer from './Components/Footer/Footer';

function GameOfLife () {



    

    return (
        
        <AnimatePresence exitBeforeEnter>
        
        <motion.div className = 'projectBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}} transition = {{duration: 1}}>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} className = 'quoteHeader'> "The Game Of Life shows that complex patterns can emerge out of simple rules and offers in that way, an understanding of complex patterns in nature" </motion.p>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.9}} className = 'infoText'>The game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. A cellular automaton consists of a regular grid of cells, each in one of a finite number of states such as on and off or in this case, alive or dead. For each cell, a set of cells called its neighborhood is defined relative to the specified cell. After learning DOM manipulation and some degree of Javascript, I challenged myself to rebuild 'The Game of Life' from scratch with the things I knew, without looking up any versions were already available.  </motion.p>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1}} className = 'buttons'><a href="https://github.com/RensGits/Game-of-life" target="_blank"><button>TO CODE</button></a><a href = 'https://rensgits.github.io/Game-of-life/' target="_blank"><button>TO DEPLOYMENT</button></a></motion.div>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.1}} ><img style = {{width: '100%'}} src="/gameOfLifeGif.gif" alt=""/></motion.div>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.3}}  className = 'infoText'>
        This is my attempt at making the game of life from scratch with Javascript, without the use of any external sources such as blog posts or video tutorials on the Game of Life. As I just learned CSS Grid and DOM manipulation, I figured I'd combine the two to acchieve my goals.<br/><br/>

My logic is as follows;
        <br/><br/>
        1. Create a grid with blocks that have their row and column number as coordinatates as such; <br/><br/>

| 1,1 | 1,2 | 1,3 | 1,4 |<br/>

| 2,1 | 2,2 | 2,3 | 2,4 |<br/>

| 3,1 | 3,2 | 3,3 | 3,4 |<br/>

| 4,1 | 4,2 | 4,3 | 4,4 |<br/><br/>

2. Define the neighbourhood;<br/><br/>

To see which items are neighbours off every other item, non-neighbours can be crossed off for such item if the following logic aplies (I will refer to the item that is checked against all other items as the parent item, and the items that it is checked against as it's children);

The difference between the row numbers of a child compared to the parent is bigger than 1 or smaller then -1.
The difference between the column numbers of a child compared to the parent is bigger than 1 or smaller then -1.
The row and column maps are as follows; <br/><br/>
| 1 | 1 | 1 | 1 | <span> &nbsp;&nbsp;   </span> | 1 | 2 | 3 | 4 | <br/>

| 2 | 2 | 2 | 2 |  <span> &nbsp;&nbsp;   </span> | 1 | 2 | 3 | 4 |<br/>

| 3 | 3 | 3 | 3 |  <span>&nbsp;&nbsp;  </span> | 1 | 2 | 3 | 4 |<br/>

| 4 | 4 | 4 | 4 |  <span> &nbsp;&nbsp; </span>| 1 | 2 | 3 | 4 |<br/><br/>

Aplying the logic above we get: <br/><br/> 

| x | x | x | x |<span> &nbsp;&nbsp;&nbsp;    </span> | x | 2 | 3 | 4 | <br/>

| 2 | 2 | 2 | 2 | <span> &nbsp;&nbsp;   </span>| x | 2 | 3 | 4 | <br/>

| 3 | 3 | 3 | 3 | <span> &nbsp;&nbsp;   </span>| x | 2 | 3 | 4 | <br/>

| 4 | 4 | 4 | 4 | <span> &nbsp;&nbsp;   </span>| x | 2 | 3 | 4 | <br/><br/>

Combining the two results: <br/><br/>

| x,x | x,x | x,x  | x,x |<br/>

| x,x | 2,2 | 2,3 | 2,4 |<br/>

| x,x | 3,2 | 3,3 | 3,4 |<br/>

| x,x | 4,2 | 4,3 | 4,4 |<br/><br/>
In my code I loop over all children for each parent and check if these rules apply. Then, if a block is alive (in this case black), I push '1' to an array and '0' if the block is dead. Doing so, I'm able to update the status of each block per generation, preventing the result of the previous block to influence the one thereafter. I then loop over all the blocks again and update their status according to the the rules of Game of Life will be applied accordingly.
<br/><br/>3. Apply the rules of Game of Life to Neighbours each generation; <br/><br/>

The rules of Game of Life are as follows: <br/><br/>

Any live cell with 2 to 3 live neighbours survives. 2.Any dead cell with 3 live neighbours becomes a live cell. 3.All other live cells die in the next generation. Similarly, all other dead cells stay dead.
        </motion.p>
        <Footer /> 
        </motion.div>
        
        </AnimatePresence>
        
    );
}

export default GameOfLife;