import React from "react";

import "./_styles.scss";

// Mock options:
// const mockOptions = [
//     {
//         id: 0,
//         value: "Alpha"
//     },
//     {
//         id: 1,
//         value: "Beta"
//     }
// ];

const Dropdown = ({
    id,
    data,
    label,
    onChange,
    labelText
}) => {
    const loop = () => {
        const op = data.map((data) => {
            return (
                <option
                    className="sp-option"
                    id={data.id}
                    key={data.key}
                    value={data.value}
                >
                    {data.value}
                </option>
            )
        });
        
        return op;
    };

    return (
        <div className="sp-dropdown">
            <label for={id}>{`${labelText}:`}</label>
            <select
                id={id}
                onChange={onChange}
                name={label}
            >
                {loop()}
            </select>
        </div>
    )
};

export default Dropdown;