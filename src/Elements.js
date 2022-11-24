import React from "react";
import Element from "./Element";

export default function Elements(props) {

      let elements = [
        {
            name: "Падаюча зірка",
            level: 0,
            type: "knee",
            base: 1,
            hardness: 0,
            img: "images/005.jpeg",
            url: "https://www.youtube.com/embed/YYXpu4vTCXk"
        },
        {
            name: "Мартіні",
            level: 0,
            type: "knee",
            base: 1,
            hardness: 0,
            url: "https://www.youtube.com/embed/BQ8oAoejdgU"
        },
        {
            name: "Четвірка",
            level: 0,
            type: "hips",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/5TBCfSgQ6N0"
        },
        {
            name: "Пташка",
            level: 0,
            type: "hips",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/6p2C9z-F70M"
        },
        {
            name: "Рогатка",
            level: 1,
            type: "base",
            base: 1,
            hardness: 3,
            url: "https://youtube.com/embed/-O6ZOAd4Fv4"
        },
        {
            name: "Хват на розпір",
            level: 0,
            type: "base",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/LIO_1de8uzY"
        },
        {
            name: "Підлаз",
            level: 0,
            type: "base",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/9hzVEuvSoAc"
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