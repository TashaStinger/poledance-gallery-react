import React from "react";
import Element from "./Element";
import "./Elements.css";
import img001 from "./images/001.jpeg";
import img002 from "./images/002.jpeg";
import img003 from "./images/003.jpeg";
import img004 from "./images/004.jpeg";
import img005 from "./images/005.jpeg";
import img006 from "./images/006.jpeg";
import img007 from "./images/007.jpg";

export default function Elements(props) {

      let elements = [
        {
            id: "element0001",
            name: "Падаюча зірка",
            level: "level-intro",
            type: "knee",
            base: 1,
            hardness: 0,
            url: "https://www.youtube.com/embed/YYXpu4vTCXk",
            img: img001
        },
        {
            id: "element0002",
            name: "Мартіні",
            level: "level-intro",
            type: "knee",
            base: 1,
            hardness: 0,
            url: "https://www.youtube.com/embed/BQ8oAoejdgU",
            img: img002
        },
        {
            id: "element0003",
            name: "Четвірка",
            level: "level-intro",
            type: "hips",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/5TBCfSgQ6N0",
            img: img003
        },
        {
            id: "element0004",
            name: "Пташка",
            level: "level-intro",
            type: "hips",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/6p2C9z-F70M",
            img: img004
        },
        {
            id: "element0005",
            name: "Рогатка",
            level: "level-1",
            type: "base",
            base: 1,
            hardness: 3,
            url: "https://youtube.com/embed/-O6ZOAd4Fv4",
            img: img005
        },
        {
            id: "element0006",
            name: "Хват на розпір",
            level: "level-0",
            type: "base",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/LIO_1de8uzY",
            img: img006
        },
        {
            id: "element0007",
            name: "Підлаз",
            level: "level-intro",
            type: "base",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/9hzVEuvSoAc",
            img: img007
        }
    ]

    if (elements) {
        console.log(props.level);
        return(
            <div className="Elements">
                <section>
                    <div className="row">
                    
                    {elements.map (function (element,index) {
                        if (element.level === props.level || props.level === "level-all") {
                            if (element[props.filter] === props.filterValue) {
                                return (
                                    <div className="col-4" key={index}>
                                        <Element element={element}/>
                                    </div>
                                )
                            } else {
                                return null;
                            }
                        } else {
                            return null;
                        }
                    })}
                    </div>
                   
                </section>
            </div>
        )
    } else {
        return null;
    }
}