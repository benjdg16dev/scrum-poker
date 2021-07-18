import React from "react";

import Header from "../../molecules/header";

import Content from "../../organisms/content";

import InputBox from "../../atoms/input-box";

import Dropdown from "../../atoms/dropdown";

const HomeTemplate = () => {      
    const options = [
        {
            id: 0,
            value: "Alpha"
        },
        {
            id: 1,
            value: "Beta"
        }
    ];
    return (
        <React.Fragment>
            <Header />
            <div className="sp-main-container">
                {/* <Content /> */}
                <InputBox 
                    id="sampleID"
                    type="text"
                    labelText="Sample ID"
                    placeholder="opu"
                />
                <Dropdown onChange={() => console.log("hello")} data={options} label="hello" id="l" labelText="SampleDD" />
            </div>
        </React.Fragment>
    )
};

export default HomeTemplate;