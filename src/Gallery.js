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
                <Elements />
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