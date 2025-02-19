import React, { useState } from "react";

let Counter = function ()
{
    let [counter, updateCounter] = useState(0)

    function Incremention()
    {
        updateCounter(counter += 1);
    }

    function Decremention()
    {
        updateCounter(counter -= 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={Incremention}>Increment</button>
            <button onClick={Decremention}>Decrement</button>
        </div>
    )
}

export default Counter;