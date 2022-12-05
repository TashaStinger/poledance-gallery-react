import React, { useState } from "react";
import "./Gallery.css"
import Elements from "./Elements";

export default function Gallery() {
    let [keyword, setKeyword] = useState("");
    let [loaded, setLoaded] = useState(false);
    let password = "1234";

    function loadGallery(event)
    {
        // event.preventDefault();
        if (keyword === password) {
            // alert("Loading...");
            setLoaded(true);
        } else {
            alert("Try again");
        }
        
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    if (loaded){
        return(
            <div className="Gallery">
                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        База
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <Elements filter="type" filterValue="base"/>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Колінний зачіп
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <Elements filter="type" filterValue="knee"/>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Зачіп стегнами
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <Elements filter="type" filterValue="hips"/>
                    </div>
                    </div>
                </div>
                </div>

                {/* <Elements/> */}
                {/* <Elements  filter="type" filterValue={3}/> */}
            </div>
        ) 
    } else {
        return(
            <div className="Gallery">
                <form onSubmit={loadGallery}>
                    Type your password:
                    <br />
                    <input type="password" className="mt-2 mb-2" autoFocus={true} onChange={handleKeywordChange} />
                </form>
            </div>
        )
    }
}