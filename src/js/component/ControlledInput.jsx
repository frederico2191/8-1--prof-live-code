import React, {useState, useEffect} from 'react'

export default function ControlledInput () {
    const [myText,setMyText] = useState('');
    const [myText2,setMyText2] = useState('');
    console.log('ControlledInput: Render')

    useEffect(() => {
        console.log("Controlled input: Mount")
    })

    useEffect(() => {
        console.log("Controlled input: Mount 1st time")
        return () => console.log('ControlledInput: Ending the component...')
    }, [])

    useEffect(() => {
        console.log("Mount only when text2 is changed")
    }, [myText2])




    return (<>
        (<h1>Controlled Input</h1>)
        <input onChange={(event) => setMyText(event.target.value)}></input>
        <h2>{myText}</h2>
        <input onChange={(event) => setMyText(event.target.value)}></input>
        <h2>{myText}</h2>
     </>)
}