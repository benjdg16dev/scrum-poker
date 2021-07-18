import React from "react";

import "./_styles.scss";

const InputBox = ({
    id,
    type,
    placeholder,
    labelText
}) => {
    return (
        <div className="sp-input-box">
            <label for={id}>{`${labelText}:`}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
};

export default InputBox;