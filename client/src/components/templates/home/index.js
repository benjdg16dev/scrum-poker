import React from "react";

import Header from "../../molecules/header";

import Content from "../../organisms/content";

import InputBox from "../../atoms/input-box";
import { Input } from "@material-ui/core";

const HomeTemplate = () => {      
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
            </div>
        </React.Fragment>
    )
};

export default HomeTemplate;