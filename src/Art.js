import React from "react";
import "./Art.css";

export default function Art (props) {
    let program = [
        [   // 0
            "Хвилі",
            "На колінах підйом ніг з прогином",
            "Розтяжка - ШС сидячи",
            "Віджимання у кутку",
            "Спина - голуб",
            "Переверт в шпагат"
        ],
        [   // 1
            "Стоячи коліно пліє",
            "Підйом ніг стоячи",
            "Розтяжка - з пілоном стоячи",
            "Ластівка",
            "Випади з пілоном",
            "Сонечко"
        ],
        [   // 2
            "Сидячи хвилі руками",
            "Випрямлення ніг лежачи на животі, на боку, на спині",
            "Повітряна хода",
            "Віджимання в прогин",
            "Коробочка",
            "Переверт через стійку на плечі",
        ],
        [   // 3
            "На колінах кола спиною",
            "Випрямлення ніг в кутку та столику",
            "Стопи",
            "Вправа з подушками на ліктях",
            "Спина - випади",
            "Переверт назад"
        ],
        [   // 4
            "Стоячи хвилі руками",
            "Стоячи випрямлення ніг, або настукування",
            "ШС стоячи",
            "Віджимання від пілону, хват розпірка",
            "Спина - затяжки стоячи",
            "Сонечко"
        ],
        [   // 5
            "Сидячи ромбик однією/двома ногами",
            "Настукування, стопи",
            "Розтяжка - сидячи нога на пілон",
            "Віджимання скорпіони",
            "Спина - прогин сидячи",
            "Переверт вперед"
        ],
        
    ];
    let trainingIndex = props.date.getDate() % program.length;

    return (
        <div className="Art">
            <ul>
                {program[trainingIndex].map (function (element,index) {
                    return (
                        <li key={index}>
                            {element}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}