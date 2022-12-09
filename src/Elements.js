import React from "react";
import Element from "./Element";
import "./Elements.css";
// ----- База ---------------
import img_011_01 from "./images/1_base/img_011_01.jpg"; //Підлаз
import img_111_01 from "./images/1_base/img_111_01.jpeg"; //Хват на розпір
import img_111_99 from "./images/1_base/img_111_99.jpeg"; //Рогатка
// ----- Колінний зачіп -----
import img_021_01 from "./images/2_knee/img_021_01.jpeg"; //Падаюча зірка
import img_021_02 from "./images/2_knee/img_021_02.jpeg"; //Мартіні
// ----- Зачіп стегнами -----
import img_031_01 from "./images/3_hips/img_031_01.jpeg"; //Четвірка
import img_031_02 from "./images/3_hips/img_031_02.jpeg"; //Пташка
// ----- Крутки -------------
import img_051_01 from "./images/5_spin/img_051_01.jpg"; //Русалка
import img_051_04 from "./images/5_spin/img_051_04.jpeg"; //Циркуль
import img_151_01 from "./images/5_spin/img_151_01.jpeg"; //Цвіркун

export default function Elements(props) {

      let elements = [
          // ----- База -----
          {
            id: "base-011-01",
            name: "Підлаз",
            level: "level-intro",
            type: "base",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/9hzVEuvSoAc",
            img: img_011_01
        },
        {
            id: "base-111-01",
            name: "Хват на розпір",
            level: "level-0",
            type: "base",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/LIO_1de8uzY",
            img: img_111_01
        },
        {
            id: "base-111-99",
            name: "Рогатка",
            level: "level-0",
            type: "base",
            base: 1,
            hardness: 9,
            url: "https://youtube.com/embed/-O6ZOAd4Fv4",
            img: img_111_99
        },
        // ----- Колінний зачіп -----
        {
            id: "knee-021-01",
            name: "Падаюча зірка",
            level: "level-intro",
            type: "knee",
            base: 1,
            hardness: 0,
            url: "https://www.youtube.com/embed/YYXpu4vTCXk",
            img: img_021_01
        },
        {
            id: "knee-021-02",
            name: "Мартіні",
            level: "level-intro",
            type: "knee",
            base: 1,
            hardness: 0,
            url: "https://www.youtube.com/embed/BQ8oAoejdgU",
            img: img_021_02
        },
        // ----- Звчіп стегнами -----
        {
            id: "hips-031-01",
            name: "Четвірка",
            level: "level-intro",
            type: "hips",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/5TBCfSgQ6N0",
            img: img_031_01
        },
        {
            id: "hips-031-02",
            name: "Пташка",
            level: "level-intro",
            type: "hips",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/6p2C9z-F70M",
            img: img_031_02
        },
        // ----- Стійки -----
        // ----- Крутки -----
        {
            id: "spin-051-01",
            name: "Русалка",
            level: "level-intro",
            type: "spin",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/pOh4PR5hX6k",
            img: img_051_01
        },
        {
            id: "spin-051-04",
            name: "Циркуль",
            level: "level-intro",
            type: "spin",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/GTApZOfGkc4",
            img: img_051_04
        },
         {
            id: "spin-151-01",
            name: "Цвіркун",
            level: "level-0",
            type: "spin",
            base: 1,
            hardness: 0,
            url: "https://youtube.com/embed/sKyvvr6kljs",
            img: img_151_01
        }
        // ----- Інше -----
        // ----- Комбінації -----
    ]

    if (elements) {
        console.log(props.level);
        return(
            <div className="Elements">
                <section>
                    <div className="row row-cols-3">
                    
                    {elements.map (function (element,index) {
                        if (element.level === props.level || props.level === "level-all") {
                            if (element[props.filter] === props.filterValue) {
                                return (
                                    <div className="col element-col" key={index}>
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