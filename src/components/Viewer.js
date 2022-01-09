import React, { useState } from 'react'; 

export default function Viewer() {
    const [target, setTarget] = useState(10);
    const [counter, setCounter] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const increaseCounter = () => {        
        setCounter(counter + 1);
        if (counter + 1 === target) {
            setIsDisabled(true)
            alert("counter reached!")
        }
        
    }

    const resetCounter = () => {
        setCounter(0);
        setIsDisabled(false);
    }

    return(
        <>
        <h3>Wird</h3>
        <div className="viewer">{counter}</div>
        <button onClick={resetCounter}>reset</button>
        <button disabled={isDisabled} onClick={increaseCounter}>start</button>
        </>
    )
}