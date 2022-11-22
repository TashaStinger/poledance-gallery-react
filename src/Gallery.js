import React, { useState } from "react";
import "./Gallery.css"
import Elements from "./Elements";

export default function Gallery() {
    let [keyword, setKeyword] = useState("");
    let [loaded, setLoaded] = useState(false);
    let password = "1234";

    let elements = [
        {
            name: "Падающая звезда",
            level: 0,
            type: 2,
            base: 1,
            hardness: 0,
            url: "https://www.youtube.com/embed/YYXpu4vTCXk"
        },
        {
            name: "Мартини",
            level: 0,
            type: 2,
            base: 1,
            hardness: 0,
            url: "https://www.youtube.com/embed/BQ8oAoejdgU"
        },
        {
            name: "Четверка",
            level: 0,
            type: 3,
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/5TBCfSgQ6N0"
        },
        {
            name: "Птичка",
            level: 0,
            type: 3,
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/6p2C9z-F70M"
        },
        {
            name: "Рогатка",
            level: 1,
            type: 1,
            base: 1,
            hardness: 3,
            url: "https://youtube.com/embed/-O6ZOAd4Fv4"
        },
        {
            name: "Хват распорка",
            level: 0,
            type: 1,
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/LIO_1de8uzY"
        },
        {
            name: "Подлаз",
            level: 0,
            type: 3,
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/9hzVEuvSoAc"
        }
    ]

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
                <Elements  elements={elements}/>
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