import React from "react";

import Header from "../../molecules/header";

import Content from "../../organisms/content";


const HomeTemplate = () => {      
    return (
        <React.Fragment>
            <Header />
            <div className="sp-main-container">
                {/* <Content /> */}
            </div>
        </React.Fragment>
    )
};

export default HomeTemplate;