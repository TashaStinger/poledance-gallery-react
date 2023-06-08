import React from "react";
import "./Stretching.css"

export default function Stretching (props) {
    let program = [
        [   // 0
            "Розігрів - стоячи (випрямлення)",
            "Поздовжний - ЗПС сидячи нахил до ноги, ППС випад",
            "Спина - човник з гумкою",
            "Мостик - опускання по стіні",
            "Затяжки - в голубі"
        ],
        [   // 1
            "Розігрів - на колінах (кола ногами)",
            "Поперечка - комплекс на боку, напівкрабик в поздовжний",
            "Затяжки - на основі ШС",
            "Закачка - на коліні",
            "Стопи - куток",
            "Плечі - провороти з резинкою, замки"
        ],
        [   // 2
            "Розігрів - МФР, сфінкс, човник",
            "Спина - повільні опускання корпусу, ППС захват стопи",
            "Мостик - кроки",
            "Поздовжний - ЗПС випрямлення сидячи, махи в столику",
            "Фігури - на основі ВС", 
            "Закачка - випрямлення"
        ],
        [   // 3
            "Розігрів - кор, скручування на колінах",
            "Спина - кола, ножички, скорпіони, ППС голуб",
            "Фігури - кошик, коробочка",
            "Поперечка - лежачи з гумкою, ромбик",
            "Закачка - пліє"
        ],
        [   // 4
            "Розігрів - випади з підйомом ніг",
            "Поздовжний - ЗПС зі стіною/пілоном, ППС випад",
            "Спина - скручування лежачи, затяжки на колінах", 
            "Мостик - підйом ноги"
        ],
        [   // 5
            "Розігрів - стоячи (рівновага)",
            "Поперечка - ШС стоячи, провороти в бокових випадах",
            "Затяжки - на основі ШС", 
            "Ззакачка - в кутку",
            "Стопи - столик", 
            "Плечі - провороти зі стіною / пілоном"
        ],
        [   // 6
            "Розігрів - МФР, сфінкс, човник",
            "Спина - повільні опускання корпусу, ППС випад з блоками",
            "Поздовжний - ЗПС комплекс напівлежачи",
            "Фігури - на основі ВС", 
            "Закачка - в кутку"
        ],
        [   // 7
            "Розігрів - кор, бокові нахили",
            "Спина - кола, ножички, скорпіони, ППС голуб",
            "Фігури - кошик, коробочка",
            "Поперечка - зхрещені випрямлення, метелик",
            "Закачка - кола в нахилі"
        ],
        [   // 8
            "Розігрів - на колінах (випрямлення ніг з прогином)",
            "Поздовжний - ЗПС сидячи нахил до ноги, ППС підйом коліна ",
            "Спина - плечі зі стіною / пілоном", 
            "Мостик - опускання по стіні / з пілоном",
            "Затяжки - стоячи"
        ],
        [   // 9
            "Розігрів - присідання з підйомом ніг вбік",
            "Поперечка - ШС сидячи, метелик, напівкрабик",
            "Затяжки - на основі ШС",
            "Закачка - на коліні",
            "Стопи - куток",
            "Плечі - провороти з резинкою, замки"
        ],
        [   // 10
            "Розігрів - МФР, сфінкс, човник",
            "Спина - повільні опускання корпусу, ППС захват стопи",
            "Мостик - віджимання",
            "Поздовжний - ЗПС випрямлення сидячи, махи в столику",
            "Фігури - на основі ВС", 
            "Закачка - випрямлення"
        ],
        [   // 11
            "Розігрів - кор, скручування на колінах",
            "Спина - кола, ножички, скорпіони, ППС голуб",
            "Фігури - кошик, коробочка",
            "Поперечка - лежачи, провороти з ШС в поздовжний",
            "Закачка - кола в нахилі"
        ],
        [   // 12
            "Розігрів - підйоми ніг стоячи",
            "Поздовжний - ЗПС зі стіною/пілоном, ППС випад",
            "Спина - човник з гумкою",
            "Мостик - на ліктях",
            "Затяжки - у випаді"

        ],
        [   // 13
            "Розігрів - бокові, або крос-випади",
            "Поперечка - ШС стоячи, провороти в бокових випадах",
            "Затяжки - на основі ШС", 
            "Ззакачка - стоячи",
            "Стопи - столик", 
            "Плечі - провороти зі стіною / пілоном"
        ],
        [   // 14
            "Розігрів - МФР, сфінкс, човник",
            "Спина - повільні опускання корпусу, ППС випад з блоками",
            "Поздовжний - ЗПС комплекс лежачи на спині",
            "Фігури - на основі ВС", 
            "Закачка - в нахилі"
        ],
        [   // 15
            "Розігрів - кор, бокові нахили",
            "Спина - кола, ножички, скорпіони, ППС голуб",
            "Фігури - кошик, коробочка",
            "Поперечка - ШС сидячи, ромбик",
            "Закачка - пліє"
        ],
    ];
    let trainingIndex = props.date.getDate() % program.length;
 

    return (
        <div className="Stretching">
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