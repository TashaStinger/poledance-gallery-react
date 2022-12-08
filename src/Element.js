import React from "react";
import "./Element.css";

export default function Element(props) {
        return (
            <div className="Element">
                {/* <iframe width="130" height="200" src={props.element.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                {/* <a href={props.element.url} target="_blank" rel="noreferrer" onClick={loadVideo}>
                    <img src={props.element.img} width={100} alt={props.element.name} />
                </a> */}
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target={"#"+props.element.id}>
                    <img className="element-icon img-fluid" src={props.element.img} alt={props.element.name} />
                    {props.element.name}
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id={props.element.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{props.element.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <iframe height="500" src={props.element.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
                    </div>
                    </div>
                </div>
                </div>
                {/* <br />
                {props.element.name} */}
            </div>
        )

}