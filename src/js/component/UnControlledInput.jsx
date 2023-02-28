import React, { useState, useRef } from 'react'

export default function UnControlledInput() {
    const [myText,setMyText] = useState('');
    const myInput = useRef();
    console.log("uncontrolled: render")
  return (<>
        (<h1>Uncontrolled input</h1>)
        <input ref={myInput}></input>
        <button onClick={()=>{setMyText(myInput.current.value)}}></button>
        (<h2>{myText}</h2>)
    
    </>)
}
