import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const labelRef = useRef();
    const btnRef = useRef();
    const handleChangeRefObject = () => {
        console.log(btnRef.current.clientWidth);
        console.log(labelRef.current);
        labelRef.current.textContent = "Емеля";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label ref={labelRef} id="labelEmail" htmlFor="email" name="email" className="form-label">Email</label>
            <input ref={inputRef} type="text" className="form-control" id="email" />
            <button ref={btnRef} className="btn btn-primary" onClick={handleChangeRefObject}>ChangeRefObject</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
