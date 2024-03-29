import React from "react";
import "./Stretching.css"

export default function Stretching (props) {
    let program = [
        [   // 0
            "БЛОКИ, ГУМКА",
            "Розігрів - стоячи (випрямлення)",
            "Поздовжний - ЗПС сидячи нахил до ноги з БЛОКОМ, ППС випад",
            "Спина - човник з ГУМКОЮ",
            "Мостик - опускання по стіні",
            "Затяжки - в голубі"
        ],
        [   // 1
            "БЛОКИ, ГУМКА",
            "Розігрів - на колінах (кола ногами)",
            "Поперечка - комплекс на боку, напівкрабик в поздовжний з ПОДУШКОЮ",
            "Затяжки - на основі ШС",
            "Закачка - на коліні",
            "Стопи - куток",
            "Плечі - провороти з ГУМКОЮ, замки"
        ],
        [   // 2
            "РОЛ, ПОДУШКА",
            "Розігрів - МФР, сфінкс, човник",
            "Спина - повільні опускання корпусу, ППС захват стопи з ПОДУШКОЮ",
            "Мостик - кроки",
            "Поздовжний - ЗПС випрямлення сидячи, махи в столику",
            "Фігури - на основі ВС", 
            "Закачка - випрямлення"
        ],
        [   // 3
            "ГУМКА, ПОДУШКИ",
            "Розігрів - кор, скручування на колінах",
            "Спина - кола, ножички, скорпіони, ППС голуб",
            "Фігури - кошик, коробочка",
            "Поперечка - лежачи з ГУМКОЮ, ромбик",
            "Закачка - пліє"
        ],
        [   // 4
            "БЛОКИ",
            "Розігрів - випади з підйомом ніг",
            "Поздовжний - ЗПС зі стіною/пілоном з БЛОКАМИ, ППС випад",
            "Спина - скручування лежачи, затяжки на колінах", 
            "Мостик - підйом ноги"
        ],
        [   // 5
            "БЛОКИ",
            "Розігрів - стоячи (рівновага)",
            "Поперечка - ШС стоячи, провороти в бокових випадах",
            "Затяжки - на основі ШС", 
            "Ззакачка - в кутку",
            "Стопи - столик БЛОКИ", 
            "Плечі - провороти зі стіною / пілоном"
        ],
        [   // 6
            "РОЛ, БЛОКИ",
            "Розігрів - МФР, сфінкс, човник",
            "Спина - повільні опускання корпусу, ППС випад з БЛОКАМИ",
            "Поздовжний - ЗПС комплекс напівлежачи",
            "Фігури - на основі ВС", 
            "Закачка - в кутку"
        ],
        [   // 7
            "ПОДУШКА, БЛОКИ",
            "Розігрів - кор, бокові нахили",
            "Спина - кола, ножички, скорпіони, ППС голуб",
            "Фігури - кошик, коробочка",
            "Поперечка - зхрещені випрямлення, метелик з ПОДУШКОЮ",
            "Закачка - кола в нахилі"
        ],
        [   // 8
            "БЛОКИ",
            "Розігрів - на колінах (випрямлення ніг з прогином)",
            "Поздовжний - ЗПС сидячи нахил до ноги з БЛОКОМ, ППС підйом коліна",
            "Спина - плечі зі стіною / пілоном", 
            "Мостик - опускання по стіні / з пілоном",
            "Затяжки - стоячи"
        ],
        [   // 9
            "ПОДУШКА, ГУМКА",
            "Розігрів - присідання з підйомом ніг вбік",
            "Поперечка - ШС сидячи, метелик, напівкрабик з ПОДУШКОЮ",
            "Затяжки - на основі ШС",
            "Закачка - на коліні",
            "Стопи - куток",
            "Плечі - провороти з ГУМКОЮ, замки"
        ],
        [   // 10
            "РОЛ",
            "Розігрів - МФР, сфінкс, човник",
            "Спина - повільні опускання корпусу, ППС захват стопи",
            "Мостик - віджимання",
            "Поздовжний - ЗПС випрямлення сидячи, махи в столику",
            "Фігури - на основі ВС", 
            "Закачка - випрямлення"
        ],
        [   // 11
            "ПОДУШКА",
            "Розігрів - кор, скручування на колінах",
            "Спина - кола, ножички, скорпіони, ППС голуб",
            "Фігури - кошик, коробочка",
            "Поперечка - лежачи, провороти з ШС в поздовжний",
            "Закачка - кола в нахилі"
        ],
        [   // 12
            "БЛОКИ, ПОДУШКА, ГУМКА",
            "Розігрів - підйоми ніг стоячи",
            "Поздовжний - ЗПС зі стіною/пілоном з БЛОКОМ, ППС випад",
            "Спина - човник з ГУМКОЮ",
            "Мостик - на ліктях",
            "Затяжки - у випаді з ГУМКОЮ"

        ],
        [   // 13
            "БЛОКИ",
            "Розігрів - бокові, або крос-випади",
            "Поперечка - ШС стоячи, провороти в бокових випадах",
            "Затяжки - на основі ШС", 
            "Ззакачка - стоячи",
            "Стопи - столик, БЛОКИ", 
            "Плечі - провороти зі стіною / пілоном"
        ],
        [   // 14
            "РОЛ, БЛОКИ",
            "Розігрів - МФР, сфінкс, човник",
            "Спина - повільні опускання корпусу, ППС випад з БЛОКАМИ",
            "Поздовжний - ЗПС комплекс лежачи на спині",
            "Фігури - на основі ВС", 
            "Закачка - в нахилі"
        ],
        [   // 15
            "ПОДУШКИ",
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