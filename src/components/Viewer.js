import React, { useState, useEffect } from 'react'; 
import TargetModal from "./TargetModal";

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

    const handleChange = (e) => {
        setTarget(e.target.value)
    };

    useEffect(() => {
    console.log(target);
    }, [target])


    return(
        <>
        <h3>Wird</h3>
        <div className="viewer">{counter}</div>
        <button onClick={resetCounter}>reset</button> 
        <TargetModal propHandleChange={handleChange}/>
        <button disabled={isDisabled} onClick={increaseCounter}>start</button>
        </>
    )
}