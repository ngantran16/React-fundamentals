import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { TextField } from '@material-ui/core';
const Hook = () => {
  
//Number
    const [number, setNumber] = useState(() => {
        const initialNumber = 0;
        return initialNumber;
    });

    const increaseNumber = () => {
        setNumber(number + 1);
    }

//Array
    const [array, setArray] = useState(() => {
        const initialArray = ['One', 'True', 'Three'];
        return initialArray;
    });

    const resetArray = () => {
        setArray(['1']);
    }

//Object
    const [object, setObject] = useState(() => {
        const initialObject = {firstName: 'Tran', lastName: 'Ngan'};
        return initialObject;
    });

// useRef
    const previousState = useRef(number);

    useEffect(() => {
        previousState.current = number;
        return; 
    }, [number]);

    useLayoutEffect(() => {
        previousState.current = number;
    }, [number]);

    const selectChange = (event: any) => {
        console.log(event.target.value);
    }

    const showTextInput = (event: any) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <p>Number: { number } - Previous state: { previousState.current } </p>
            <button color="primary" onClick={ () => increaseNumber()}>Click me</button>

            <p>Array: { array }</p>
            <button color="primary" onClick={() => resetArray()}>Click me</button>

            <p>Object: { object.firstName } - { object.lastName } </p>
            <TextField id="standard-basic" label="Standard" onChange={ e => showTextInput(e) } />

            <select onChange={e =>selectChange(e)}>
                <option value="select">Select</option>
                <option value="Java">Java</option>
                <option value="C++">C++</option>
            </select>
        </div>
        
    );
    
}

export default Hook;