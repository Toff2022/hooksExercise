import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [newState, setNewState] = useState("false");
    const toggleNewState = () => {
        setNewState(prevState => prevState === "false" ? "true" : "false");
    };
    useEffect(() => {
        prevState.current = newState;
    }, [newState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>

            <p>PrevState : {prevState.current}</p>
            <p>CurrentState : {newState}</p>
            <button className="btn btn-warning" onClick={toggleNewState}>Count</button>
        </CardWrapper>

    );
};

export default PrevStateExample;
