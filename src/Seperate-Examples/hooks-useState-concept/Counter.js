import React from "react";

export const Counter = () =>{

    const[value, setValue] = React.useState(0);

    const increaseValue = () => {
        setValue(value + 1);
    }

    const decreaseValue = () => {
        setValue(value - 1);
    }
    return(
        <>
            <section>
                <h3>Counter</h3>
                {
                    value
                }
                <br/>
                <button onClick={increaseValue}>Increment</button>
                <button onClick={() => setValue(0)}>Reset</button>
                <button onClick={decreaseValue}>Decrement</button>

            </section>
        </>
    )
}