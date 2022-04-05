import React, {useRef} from 'react';

export default function HelloButton() {
    const ws = useRef(null);

    ws.current = new WebSocket("ws://localhost:8000/ws/hello/");
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");

    ws.current.onmessage = e => {
      const json = JSON.parse(e.data)
      console.log(json)
    }

    function clickHelloButton(){
      console.log("click logo")
      ws.current.send('{"message": "Hello"}')
    }

    return (
        <div>
            <button onClick={clickHelloButton}>Hello</button>
        </div>
    );
}

