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
                {/* <p>
                <button class="btn btn-light m-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    База
                </button>
                <button class="btn btn-light m-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                    Колінний зачіп
                </button>
                </p>
                <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    <Elements filter="type" filterValue="base"/>
                </div>
                </div>
                <div class="collapse" id="collapseExample1">
                <div class="card card-body">
                    <Elements filter="type" filterValue="knee"/>
                </div>
                </div> */}

                <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        База
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <Elements filter="type" filterValue="base"/>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Колінний зачіп
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <Elements filter="type" filterValue="knee"/>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Зачіп стегнами
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
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