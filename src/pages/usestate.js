import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Usestate(){
    const [count, setCount] = useState(0);
    return<>
    <Container>
        <h1>UseState</h1>
        <p>{count}</p>
        <button onClick={async() =>{
            setCount(await addCount(count));
        }}>Add count</button>
    </Container>
    </>
}function addCount(count){
    count++;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(count);
        },1000);
    })
    
}