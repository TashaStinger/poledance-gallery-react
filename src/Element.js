import React from "react";

export default function Element(props) {
    return (
        <div className="Element">
            <iframe width="130" height="200" src={props.element.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <br />
            {props.element.name}
        </div>
    )
}