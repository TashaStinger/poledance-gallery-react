import React from "react";

export default function PoleProgram () {
    let program = [
        ["Присідання з випригом", "4 планки", "Опускання класичні", "Схрещені випрямлення сидячи", "Віджимання скорпіони", "Спина, Поперечка", "Колінки, рогатки, косички"],
        ["hands 2", "legs 2", "stretch 2"],
        ["hands 3", "legs 3", "stretch 3"],
        ["Присідання - з підйомом ніг вбік", "Планка - коліно лікоть", "Віджимання - низькі", "Прес - балетний комплекс", "Спина - ластівка", "Розтяжка - спина, ВС", "Пілонна розминка - колінки, рогатки, косички"],
        ["hands 5", "legs 5", "stretch 5"],
        ["hands 6", "legs 6", "stretch 6"],
        ["hands 7", "legs 7", "stretch 7"],
        ["hands 8", "legs 8", "stretch 8"],
        ["hands 9", "legs 9", "stretch 9"],
        ["hands 10", "legs 10", "stretch 10"],
        ["hands 11", "legs 11", "stretch 11"],
        ["hands 12", "legs 12", "stretch 12"],
        ["hands 13", "legs 13", "stretch 13"],
        ["hands 14", "legs 14", "stretch 14"],
        ["hands 15", "legs 15", "stretch 15"],
        ["hands 16", "legs 16", "stretch 16"],
    ];
    let date = new Date();
    let trainingIndex = date.getDate() % program.length;
 

    return (
        <div className="PoleProgram">
            {/* <center> */}
                {/* Hello from PoleProgram <br /> */}
                {/* {trainingIndex} */}
                <ul>
                    {program[trainingIndex].map (function (element,index) {
                                return (
                                    <li key={index}>
                                        {element}
                                    </li>
                                )
                    })}
                </ul>

                
            {/* </center> */}
        </div>
    )
}