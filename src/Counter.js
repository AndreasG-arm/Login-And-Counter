import React from 'react';

function Counter(props) {
    return (
        <div>
            <div>
                <h1 className={props.colour(props.num)}>{props.num}</h1>
            </div>
            <div>
                <button onClick={() => props.buttAction(-10)}>-10</button>
                <button onClick={() => props.buttAction(-1)}>-1</button>
                <button onClick={() => props.buttAction(0)}>0</button>
                <button onClick={() => props.buttAction(1)}>1</button>
                <button onClick={() => props.buttAction(10)}>10</button>
            </div>
            <div>
                {props.nums.map((v, i) => (
                    <p key={i} className={props.colour(props.nums[i])}>{v}</p>
                ))}
            </div>
        </div>
    );

}

export default Counter;