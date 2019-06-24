import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    return (
        <h1>Give Us some Feedback! </h1>
        
    )

}

const Button = ({ handleClick, text}) =>(
    <button onClick={handleClick}>
    {text}
    </button>
)



const Statistics = (props) => {
    if (props.all === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>----No feedback given----</p>
            </div>
        )
    }

    return (
        <div>
                <h2>Statistics:</h2>
                <table>
                    <tbody>
                    <tr>
                <td>good:</td><td>{props.good}</td>
                    </tr>
                    <tr>
                <td>neutral:</td><td> {props.neutral}</td>
                    </tr>
                    <tr>
                <td>bad:</td><td> {props.bad}</td>
                    </tr>
                    <tr>
                <td>all:</td><td> {props.all}</td>
                    </tr>
                    <tr>
                <td>average:</td><td> {props.average}</td>
                    </tr>
                    <tr>
                <td>positive:</td><td> {props.positive}</td>
                    </tr>
                    </tbody>
                </table>
        </div>
       
    )
}

const App = (props) => {
   
    const [good, setGood ] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    const handleGoodClick = () => {
        console.log('clicked the goodness button')
        setGood(good +1)
        setAll(all +1)
        setAverage(average +1)
        setPositive(positive +1)
        
    }

    const handleNeutralClick = () => {
        console.log('clicked the neutralizer')
        setNeutral(neutral + 1)
        setAll(all +1)
        setAverage(average +0)
    }

    const handleBadClick = () => {
        console.log('clicked the badass button')
        setBad(bad +1)
        setAll(all +1)
        setAverage(average -1)
    }



    return (
        <div>
            <div>
                <Header />
                
                <Button handleClick={handleGoodClick} text='good :D' />
                <Button handleClick={handleNeutralClick} text='neutral :|' />
                <Button handleClick={handleBadClick} text='bad :(' />

                <Statistics all = {all} good = {good} bad = {bad} neutral = {neutral} average = {average/all} positive = {positive/all*100 + ' %'} /> 
                
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


