import React, { useState } from "react";
import "./Program.css"
import PoleProgram from "./PoleProgram";
import PoleTricks from "./PoleTricks";
import Stretching from "./Stretching";
import Exotic from "./Exotic";
import Art from "./Art";
import FormattedDate from "./FormattedDate";

export default function Program() {
    let [keyword, setKeyword] = useState("");
    let [loaded, setLoaded] = useState(false);
    let [currentDate, setCurrentDate] = useState(new Date());
    let password = "1234";

    function loadProgram(event)
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

    function goBack() {
        let newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 1);
        // alert(newDate.toString());
        setCurrentDate(newDate);
    }

    function goForward() {
        let newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate()+1);
        // alert(newDate.toString());
        setCurrentDate(newDate);
    }

    if (loaded){
        return(
            <div className="Program">
                <div className="row mb-3 date-string">
                    <div className="col">
                        <button type="button" className="date-button btn btn-link" onClick={goBack}>
                            <i className="arrow-icon fa-solid fa-arrow-left-long"></i>
                        </button>
                    </div>
                    <div className="col-8 p-0">
                        <FormattedDate date={currentDate} />   
                    </div>
                    <div className="col">
                        <button type="button" className="date-button btn btn-link" onClick={goForward}>
                            <i className="arrow-icon fa-solid fa-arrow-right-long"></i>
                        </button>
                    </div>
                </div>

                {/* ----- accordion ----- */}
                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Pole Training
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <PoleProgram date={currentDate} />
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Pole Tricks
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <PoleTricks date={currentDate} />
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Stretching
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <Stretching date={currentDate} />
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Pole Exotic
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <Exotic date={currentDate} />
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Pole Art
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <Art date={currentDate} />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="Program">
                <form onSubmit={loadProgram}>
                    Type your password:
                    <br />
                    <input type="password" className="mt-2 mb-2" autoFocus={true} onChange={handleKeywordChange} />
                </form>
            </div>
        )
    }
}