import React from "react";
// import pic from "./images/005.jpeg";

export default function Element(props) {
    return (
        <div className="Element">
            <iframe width="130" height="200" src={props.element.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            {/* <img src={pic} width={100} /> */}
            <br />
            {props.element.name}
        </div>
    )
}