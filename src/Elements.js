import React from "react";
import Element from "./Element";

export default function Elements(props) {
    console.log(props);
    if (props.elements) {
        return(
            <div className="Elements">
                <section>
                    <div className="row">
                    
                    {props.elements.map (function (element,index) {
                        return (
                            <div className="col m-3">
                                <div key={index}>
                                    <Element element={element}/>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                   
                </section>
            </div>
        )
    } else {
        return null;
    }
}