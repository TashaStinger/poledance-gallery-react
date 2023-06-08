import React from "react";
import "./PoleProgram.css"

export default function PoleProgram (props) {
    let program = [
        [   // 0
            "ГУМКА",
            "Присідання - з випригом", 
            "Планки - чотири види", 
            "Віджимання - опускання класичні", 
            "Прес - схрещені випрямлення ніг сидячи", 
            "Спина - віджимання скорпіони", 
            "Розтяжка - плечі (з ГУМКОЮ), мостик, поперечка (напівкрабик)", 
            "Пілонна розминка - колінки, рогатки, косички"
        ],
        [   // 1
            "Настукування сидячи та на колінах", 
            "Куток на передпліччях", 
            "Опускання ліктів",	
            "Прес - відмашка, стрибок, групування",	
            "Спина - на колінах протилежна рука нога",	
            "Розтяжка - затяжки (на колінах), поздовжний (ППС пружинки, ЗПС оберти стегон), мостик",
            "Пілонна розминка - колінки, рогатки, косички"
        ],
        [   // 2
            "ПОДУШКА",
            "Перестриби у випадах",
            "Планки - вправи з ПОДУШКОЮ",
            "Бокові віджимання",
            "Прес - підйом по нозі",
            "Спина - корпус у парах, низ руки під стегна",
            "Розтяжка - мостик (віджимання), ШС (з пілоном сидячи)",
            "Пілонна розминка - колінки, рогатки, косички"
        ],
        [   // 3
            "БЛОКИ",
            "Присідання - з підйомом ноги вбік", 
            "Планка - коліно лікоть", 
            "Віджимання - низькі", 
            "Прес - балетний комплекс", 
            "Спина - ластівка", 
            "Розтяжка - затяжки (стоячи), мостик, ВС (сидячи) з БЛОКОМ", 
            "Пілонна розминка - колінки, рогатки, косички"
        ],
        [   // 4
            "Настукування стоячи",
            "Стрибки з кута з махом ногою",
            "Віджимання - класичні",
            "Прес - ножички",
            "Спина - бокові дотягування, коробочка до одної ноги",
            "Розтяжка - спина з пілоном, поперечка (ромбик)",
            "Пілонна розминка - сонечко, напівсонечко"
        ],
        [   // 5
            "БЛОКИ",
            "Стрибки через БЛОКИ, бокові випади",
            "Розкриття колін на боку з підйомом тазу",
            "Віджимання - опускання на лікті",
            "Прес, спина - підйоми ніг лежачи, по черзі",
            "Розтяжка - поздовжний (ППС випад стопа-сідниця, ЗПС прогин округлення), мостик (підйом ноги)",
            "Пілонна розминка - сонечко, напівсонечко"
        ],
        [   // 6
            "Випади з підйомом ноги назад та вперед",
            "Планка - бокові підйоми",
            "Віджимання - опускання вузькі",
            "Прес, спина - випрямлення ніг під різними кутами",
            "Спина - повільні опускання корпусу",
            "Розтяжка - мостик (стопа до голови), ШС (лежачи)",
            "Пілонна розминка - сонечко, напівсонечко"
        ],
        [   // 7
            "Підйоми ніг в столику та кутку",
            "Планка - чупачупс",
            "Віджимання - в прогин",
            "Прес - бокова складка",
            "Спина - зігнуті ноги, зведення лопаток",
            "Розтяжка - ВС (стіна/пілон), плечі (стіна/пілон), мостик (кроки)",
            "Пілонна розминка - сонечко, напівсонечко"
        ],
        [   // 8
            "БЛОКИ, ГУМКА",
            "Кросс-випади і коло ногою",
            "Планка - вистриби з носків",
            "Віджимання - глибокі з БЛОКАМИ",
            "Прес - рогатки/берізки",
            "Спина - лежачи протилежна рука нога",
            "Розтяжка - плечі (з ГУМКОЮ), мостик, поперечка/поздовжний",
            "Пілонна розминка - підтягування, обертання в зап'ястях"
        ],
        [   // 9
            "Стрибки з ноги на ногу, на одній нозі",
            "Сідничний міст",
            "Віджимання - дайвери",
            "Прес - опускання ніг лежачи, по черзі",
            "Спина - ластівка з нахилу, з пілоном",
            "Розтяжка - плечі (з пілоном), поздовжний (ППС підйом коліна, ЗПС оберти стегон), мостик (віджимання)",
            "Пілонна розминка - підтягування, обертання в зап'ястях"
        ],
        [   // 10
            "Стрибки з присідів з розворотом",
            "Планка - стопа/долоня",
            "Віджимання - поділені на два класичні",
            "Прес, спина - настукування лежачи, на спині, на боку, на животі, і руками",
            "Розтяжка - затяжки (на колінах), ШС (сидячи)",
            "Пілонна розминка - підтягування, обертання в зап'ястях"
        ],
        [   // 11
            "Підйоми ніг",
            "Планка Х-прапор з пілоном",
            "Віджимання - від пілону",
            "Прес - бокові нахили",
            "Спина - віджимання скорпіони",
            "Розтяжка - мостик (підйом ноги), затяжки (стоячи), ВС (стоячи)",
            "Пілонна розминка - підтягування, обертання в зап'ястях"
        ],
        [   // 12
            "БЛОКИ",
            "З підйомів у куток",
            "Планка - стопа долоня у кутку",
            "Віджимання - три види, з БЛОКАМИ",
            "Прес - з БЛОКАМИ",
            "Спина - корпус з розкриттям рук, або лікті вниз",
            "Розтяжка - спина (з пілоном), поперечка (у випадах)",
            "Пілонна розминка - розпірка, підлази"
        ],
        [   // 13
            "БЛОКИ",
            "Присідання - відтягування з пілоном",
            "Вистриби з підйомів",
            "Віджимання - спиною до підлоги з БЛОКАМИ",
            "Прес - підйом корпусу з розворотом",
            "Спина - корпус у парах, низ руки під стегна",
            "Розтяжка - поздовжний (ППС голуб п'ятка-сідниця, ЗПС прогин округлення), мостик (лікті)",
            "Пілонна розминка - розпірка, підлази"
        ],
        [   // 14
            "Біг у планці",
            "Підйоми рук і віджимання в кутку",
            "Прес - пінгвіни",
            "Спина - човник, корзинка",
            "Розтяжка - мостик (з пілоном), ШС (з пілоном стоячи)",
            "Підйоми ніг у ШС",
            "Пілонна розминка - розпірка, підлази"
        ],
        [   // 15
            "Випрямлення ніг",
            "Планка - підйом колін", 
            "Віджимання - поділені на два вузькі",
            "Прес - берізка / коліна вбік",
            "Спина - ножички, коробочка",
            "Растяжка - мостик (кроки), ВС (лежачи)",
            "Пілонна розминка - розпірка, підлази"
        ],
    ];
    let trainingIndex = props.date.getDate() % program.length;
 

    return (
        <div className="PoleProgram">
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