import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
// import { useReducer, useRef } from "react";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [newState, setNewState] = useState("false");
    const toggleNewState = () => {
        setNewState(!newState);
    };
    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            {newState.current}
            <p>RenderCount : {renderCount.current}</p>
            <button className="btn btn-warning" onClick={toggleNewState}>Count</button>
        </CardWrapper>

    );
};

export default RenderCountExample;
