import React, { useState } from "react";
import "./TrainingProgram.css"
import PoleProgram from "./PoleProgram.js";

export default function TrainingProgram(){
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
            <div className="TrainingProgram">
                {/* ----- accordion ----- */}
                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Training Program
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {/* <Elements filter="type" filterValue="base" level={level} /> */}
                        <PoleProgram />
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Pole dance
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {/* <Elements filter="type" filterValue="knee" level={level} /> */}
                        План тижня по трюках
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Pole Exotic
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {/* <Elements filter="type" filterValue="hips" level={level} /> */}
                        Pole Exotic Program
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Pole Art
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {/* <Elements filter="type" filterValue="handstand" level={level} /> */}
                        Pole Art Program
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Stretching
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {/* <Elements filter="type" filterValue="spin" level={level} /> */}
                        Stretching Program
                    </div>
                    </div>
                </div>
                </div>
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