import React, { useState } from "react";
import "./Gallery.css"
import Elements from "./Elements";

export default function Gallery() {
    let [keyword, setKeyword] = useState("");
    let [loaded, setLoaded] = useState(false);
    let [level, setLevel] = useState("level-all");
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

    function changeLevel(event){
        setLevel(event.target.id);
        console.log(level+" --> "+event.target.id);

    }

    if (loaded){
        return(
            <div className="Gallery">
                {/* ----- radio buttons ----- */}
                <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="level-intro" value="option1" onClick={changeLevel}/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Intro</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="level-0" value="option2" onClick={changeLevel} />
                    <label className="form-check-label" htmlFor="inlineRadio2">0</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="level-1" value="option3" onClick={changeLevel} />
                    <label className="form-check-label" htmlFor="inlineRadio3">1</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="level-2" value="option4" onClick={changeLevel} />
                    <label className="form-check-label" htmlFor="inlineRadio4">2</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="level-all" value="option5" defaultChecked onClick={changeLevel} />
                    <label className="form-check-label" htmlFor="inlineRadio5">All</label>
                </div>

                {/* ----- accordion ----- */}
                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        База
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <Elements filter="type" filterValue="base" level={level} />
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
                        <Elements filter="type" filterValue="knee" level={level} />
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
                        <Elements filter="type" filterValue="hips" level={level} />
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