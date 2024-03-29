import React from "react";
import "./PoleTricks.css";

export default function PoleTricks (props) {
    let program_PDIntro = [
        [  
            "1 Крутка - стільчик / обліт", 
            "Падаюча зірка / на одній руці", 
            "Пташка / Ембріон", 
            "Сидяшка на гомілці / Заплутана сидяшка"
        ],
        [
            "2 Крутка - Циркуль, Жабка / Цвіркун", 
            "Мартіні / Йог", 
            "Четвірка / Стрічка", 
            "Сидяшка-розпірка / Варіація"
        ],
        [
            "3 Крутка - Русалка / Ніжка на ніжку", 
            "Купідон / Цвіркун", 
            "Стійка-скорпіон / Стійка на ліктях спиною до пілону", 
            "Бантик / Свастика"
        ],
        [
            "4 Крутка - Сніжинка, Жабка / Стрілка", 
            "Упор в лікоть / Хват розпірка", 
            "Павучок / Стійка ДВ", 
            "ШС з підлоги / на одній руці"
        ],
        [
            "5 Крутка - Конячка / Цвіркун", 
            "Напівсонечко / Сонечко", 
            "Балеринка / Із затяжкою", 
            "Лаз мавпи / Китайський шпагат"
        ]
    ];

    let program_PD0 = [
        [
            "1 Крутка - стільчики-колінки на крутяшці", 
            "Падаюча зірка на крутяшці", 
            "Пташка, ємбріон на кртяшці", 
            "Сидяшка ніжка на ніжку"
        ],
        [
            "2 Крутка - повітряний циркуль", 
            "Опускання в ДВ", 
            "Ножички", 
            "Свічка головою вгору"
        ],
        [
            "3 Крутка - ніжка на ніжку з розворотом", 
            "Цвіркун - варіація за коліно", 
            "Стійка - Олень", 
            "Зв'язка-свастика"
        ],
        [
            "4 Крутка - обліт", 
            "Розпірка на крутяшці", 
            "Стійка ДВ - варіація (нога по пілону)", 
            "ШС в лікоть з підлоги"
        ],
        [
            "5 Стрибок в зачіп", 
            "Сонечко з акцентом", 
            "Балеринка на крутяшці", 
            "Китайський прапорець"
        ],
        [
            "6 Крутки - Штопор, Олівець",
            "Зв'язка - Падаюча зірка, сидяшка в лікоть, Цвіркун",
            "Зв'язка зі Стрічкою",
            "Відьмочка"
        ],
        [
            "7 Крутка - Стільчик в Жабку",
            "Опускання в ДВ / Рогатка зі столику",
            "Опускання з Четвірки",
            "Свічка головою вниз"
        ],
        [
            "8 Крутки - дуетні свастики на крутяшці",
            "Цвіркун - варіаця рука за спину",
            "Стійка - відтяжка",
            "Півмісяць з Четвірки"
        ],
        [  
            "9 Крутка - хватом чашка",
            "Стійка з четвірки",
            "Стійка - Напіворігамі",
            "Діжка"
        ],
        [   
            "10 Крутка - Цвіркун з розворотом",
            "Русалка з Четвірки",
            "Морський вузол",
            "Комбо Марини"
        ]
    ];

    let program_PD1 = [
        [
            "1 Циркуль, Цвіркун, Рогатка",
             "Шпагат в лікоть", 
             "ДВ чи варіація", 
             "Журавлик", 
             "Стійка Скорпіон", 
             "Підлази, рогатки, шолдери"
        ],
        [
            "2 Олень з розворотом в стільчик", 
            "Вихід з четвірки в Брасманкі", 
            "Орігамі", 
            "Стійка Напіворігамі", 
            "Падаюча зірка та Цвіркун на динаміці, рогатка зверху", 
        ],
        [
            "3 Стрибок у Цвіркуна, перехоплення, рогатка", 
            "Скорпіон, Крило метелика", 
            "БВ", 
            "Алегра", 
            "Стійка Скорпіон з зачіпом п'яткою прямою ногою", 
            "Прапори"
        ],
        [
            "4 Захід через бокову стійку",
            "Напівшпагат з упором в передпліччя",
            "Зачіп дальнім коліном",
            "Супермен", 
            "Мартіні", 
            "Підлази, рогатки, шолдери"
        ],
        [
            "5 Обліт", 
            "Упор в передпліччя, хвиля ногами", 
            "Ембріон", 
            "Напівмісяць, мостик", 
            "Схід через стійку", 
            "Балерина"
        ],
        [
            "6 Тюльпан", 
            "Скат", 
            "Горизонт", 
            "Перехід в Журавлика", 
            "Схід через стійку", 
            "Прапори"
        ],
        [
            "7 Сніжинка, Жабка, Рогатка", 
            "Відмашка", 
            "Напівпрапор", 
            "Близнюки", 
            "Зістриб", 
            "Прапорова стійка"
        ],
        [
            "8 Обліт маятник", 
            "Шолдер/Четвірка", 
            "Брасманкі", 
            "Затяжка", 
            "Перехід в БВ", 
            "Сонечко"
        ],
        [
            "9 Повітряний Циркуль, або з маятником",
            "Стрибок з підлоги в Олівець",
            "Солдатик",
            "Кільце", 
            "Стійка на одній руці спиню до пілону", 
            "Підлази, рогатки, шолдери"
        ],
        [
            "10 Боковий підлаз", 
            "Рогатка в розпірці", 
            "ДВ Свастика", 
            "Супермен", 
            "Перехід у БВ", 
            "Прапори"
        ],
        [
            "11 Олівець, Штопор, Діжка, Рогатка", 
            "Дуетна підтримка", 
            "Складка, варіація", 
            "Крапелька", 
            "Стійка-розніжка на двох руках", 
            "Щось на динаміці"
        ],
        [
            "12 Крутка хватом чашка", 
            "Варіації павучка", 
            "Шпагат Брасманкі", 
            "Лук та стріли", 
            "Бокова стійка"
        ],
        [
            "13 Крутка під коліно з рогаткою", 
            "Варіації Цвіркуна", 
            "Перехвати з Цвіркуна", 
            "Четвірка", 
            "Стійка Русалка", 
            "Підлази, рогатки, шолдери"
        ],
        [
            "14 Крутка ніжка на ніжку, рогатка", 
            "Рогатка на динаміці", 
            "Ближній шпагат", 
            "Прогин з рукою під спиною", 
            "Зміна сторін у Журавлику", 
            "Прапори"
        ],
        [
            "15 Стрибок у бокову стійку на передпліччі", 
            "Падаюча зірка", 
            "Хвіст Дракона", 
            "ДВ Свастика", 
            "Зміна ніг", 
            "Вдімашка каскад"
        ],
        [
            "16 Відмашка у Цвіркуна", 
            "Стрілець", 
            "Пітер Пен", 
            "Супермен", 
            "Цвіркун", 
            "Підлази, рогатки, шолдери"
        ]        
    ];
    let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dayInYear = 0;

    for (let i = 0; i < props.date.getMonth(); i++) {
        dayInYear += daysInMonths[i];
    }
    dayInYear += props.date.getDate();
    
    // console.log(Math.trunc(dayInYear/7));
 
    function loadLevelProgram(program) {
        let trainingIndex = Math.trunc(dayInYear/7) % program.length;
        return (
            <ul>
                {program[trainingIndex].map (function (element,index) {
                    return (
                        <li key={index}>
                            {element}
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <div className="PoleTricks">
            <h6>PD Intro</h6>
            {loadLevelProgram(program_PDIntro)}
            <h6>PD 0</h6>
            {loadLevelProgram(program_PD0)}
            <h6>PD 1</h6>
            {loadLevelProgram(program_PD1)}
        </div>
    )
}