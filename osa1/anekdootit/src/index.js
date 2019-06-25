import React, { useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text}) =>(
    <button onClick={handleClick}>
        {text}
    </button>
)

function getRandom() {
    
    return Math.floor(Math.random() * 6);
}


const App = (props) =>  {
    const[selected, setSelected] = useState(0)
    const[vote, setVote] = useState(0)

    const handleRandomClick = () => {
        console.log('clicked the randomizer')
        console.log(getRandom())
        setSelected(getRandom())

    }

    const handleVoteClick = () => {
        console.log('clicked the vote button!')
        
        const votes_copy =[...votes]
        votes_copy[selected] += 1
        setVote(votes_copy)
        console.log(vote[selected])
    }

    return (
        <div>
       <div>
            {props.anecdotes[selected]}
            </div>
            <div>
            has {vote[selected]} votes.
          </div>
           <Button handleClick={handleRandomClick} text= 'next anecdote' />
           <Button handleClick={handleVoteClick} text= 'vote!'/>       
       
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'

]

const votes = new Uint8Array(6)




ReactDOM.render(<App anecdotes={anecdotes} />, 
    document.getElementById('root'));


