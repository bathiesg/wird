import React, { useState, useEffect } from 'react'; 
import Swal from 'sweetalert2'

export default function Viewer() {
    const [target, setTarget] = useState(10);
    const [counter, setCounter] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const increaseCounter = () => {        
        setCounter(counter + 1);
        if (counter + 1 === target) {
            setIsDisabled(true)
            Swal.fire({
                title: 'Counter reached!',
                text: 'You havee reached your counter target',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
        
    }

    const resetCounter = () => {
        setCounter(0);
        setIsDisabled(false);
    }
  
    // useEffect(() => {
    // console.log(target);
    // }, [target])

    const targetSetter = async() => {
        const {value: customTarget} = await Swal.fire({  
            title: 'Enter your target',
            input: 'text',
            inputLabel: 'Your target',
            inputValue: '',
            showCancelButton: true,
            inputAttributes: {
                pattern: "[0-9]*",
                inputMode: "numeric"
            },
            inputValidator: (value) => {
                if (!value) {
                return 'Please, enter your target!'
                }
            }  
        }); 
        if (customTarget) {
            setTarget(parseInt(customTarget));
        }
    }
    return(
        <>
        <h3>Wird</h3>
        <div className="viewer">{counter}</div>
        <button onClick={resetCounter}>reset</button> 
        <button disabled={isDisabled} onClick={increaseCounter}>start</button>
        <button className="show-example-btn" aria-label="Try me! Example: input type text" onClick={targetSetter}>
          Try me!
        </button>
        </>
    )
}