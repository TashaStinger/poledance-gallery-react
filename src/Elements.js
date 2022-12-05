import React from "react";
import Element from "./Element";
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
            name: "Падаюча зірка",
            level: 0,
            type: "knee",
            base: 1,
            hardness: 0,
            url: "https://www.youtube.com/embed/YYXpu4vTCXk",
            img: img001
        },
        {
            name: "Мартіні",
            level: 0,
            type: "knee",
            base: 1,
            hardness: 0,
            url: "https://www.youtube.com/embed/BQ8oAoejdgU",
            img: img002
        },
        {
            name: "Четвірка",
            level: 0,
            type: "hips",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/5TBCfSgQ6N0",
            img: img003
        },
        {
            name: "Пташка",
            level: 0,
            type: "hips",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/6p2C9z-F70M",
            img: img004
        },
        {
            name: "Рогатка",
            level: 1,
            type: "base",
            base: 1,
            hardness: 3,
            url: "https://youtube.com/embed/-O6ZOAd4Fv4",
            img: img005
        },
        {
            name: "Хват на розпір",
            level: 0,
            type: "base",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/LIO_1de8uzY",
            img: img006
        },
        {
            name: "Підлаз",
            level: 0,
            type: "base",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/9hzVEuvSoAc",
            img: img007
        }
    ]

    console.log(props);
    if (elements) {
        return(
            <div className="Elements">
                <section>
                    <div className="row">
                    
                    {elements.map (function (element,index) {
                        if (element[props.filter] === props.filterValue) {
                            return (
                                <div className="col m-3" key={index}>
                                    <Element element={element}/>
                                </div>
                            )
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