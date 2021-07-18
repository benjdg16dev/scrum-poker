import React, { useState, useEffect, useRef } from "react";

// function that we call to get an individual socket
import { io } from "socket.io-client";

const Content = () => {

    const [socketID, setSocketID] = useState();
    const [value, setValue] = useState();
    const [serverValue, setServerValue] = useState();
    const [room, setRoom] = useState("sample-room-guid");
    const inputRef = useRef();

    // pass in URL of our server
    const socket = io("http://localhost:3000");

    useEffect(() => {
        socket.on("connect", () => {
            setSocketID(socket.id);
        });
        socket.on("server-value", (value) => {
            setServerValue(value);
        });
    }, []);

    const submitBtn = (e) => {
        setValue(e.target.attributes[0].value);
        socket.emit("submit-btn", e.target.attributes[0].value, room);
    };

    const handleInputChange = (e) => {
        setRoom(inputRef.current.value);
    };
    
    const joinRoom = () => {
        console.log('join')
        socket.emit("join-room", room, (cbMessage) => {
            console.log(cbMessage);
        });
    };

    return (
        <>
            {`You connected with id: ${socketID}`}
            <br />
            <button value="0.5" onClick={(e) => {submitBtn(e)}}>0.5</button>
            <button value="1" onClick={(e) => {submitBtn(e)}}>1</button>
            <button value="2" onClick={(e) => {submitBtn(e)}}>2</button>
            <br />
            {`My submitted value is: ${value}`}
            <br />
            {`Server value now is: ${serverValue}`}
            <br />
            <br />
            <input onChange={handleInputChange} ref={inputRef} />
            <br />
            <button onClick={joinRoom}>Join Room</button>
        </>
    )
};

export default Content;