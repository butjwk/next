import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Usestate(){
    const [count, setCount] = useState(0);
    return<>
    <Container>
        <h1>UseState</h1>
        <p>{count}</p>
        <button onClick={() =>{
            setCount(addCount(count));
        }}>Add count</button>
    </Container>
    </>
}function addCount(count){
    setTimeout(() => {
        return count + 1;
    },1000);
}