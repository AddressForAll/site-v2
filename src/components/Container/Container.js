import React from "react";

const Container = (props) => (
    <div id={props.id} className="container" >
        {props.children}
    </div>
)

export default Container