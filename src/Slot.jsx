import React from 'react';

const Slot = (props) =>{

    let x = props.x;
    let y = props.y;
    let z = props.z;

        if((x===y) && (y===z)){
            return(
                <>
                <h1> {x} {y} {z} </h1>
                <h2> This is Matching ✔️ </h2>
                <hr />
                </>
            )


        }else{
            return(
                <>
                <h1> {x} {y} {z} </h1>
                <h2> This is not Matching ✖️ </h2>
                <hr />
                </>
            )
        }
}

export default Slot;