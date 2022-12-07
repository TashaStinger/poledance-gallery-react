import React, { useState } from "react";
// import pic from "./images/005.jpeg";

export default function Element(props) {
    // let [clicked, setClicked] = useState(false);

    // function loadVideo(event){
    //     event.preventDefault();
    //     setClicked(true);
    // }

    // if (clicked) {
    //     return (
    //         <div className="Element">
    //             <div class="modal" tabindex="-1">
    //             <div class="modal-dialog">
    //                 <div class="modal-content">
    //                 <div class="modal-header">
    //                     <h5 class="modal-title">Modal title</h5>
    //                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //                 </div>
    //                 <div class="modal-body">
    //                     <p>Modal body text goes here.</p>
    //                 </div>
    //                 <div class="modal-footer">
    //                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //                     <button type="button" class="btn btn-primary">Save changes</button>
    //                 </div>
    //                 </div>
    //             </div>
    //             </div>
    //         </div>
    //     )
    // } else {
        console.log("#"+props.element.id);
        return (
            <div className="Element">
                {/* <iframe width="130" height="200" src={props.element.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                {/* <a href={props.element.url} target="_blank" rel="noreferrer" onClick={loadVideo}>
                    <img src={props.element.img} width={100} alt={props.element.name} />
                </a> */}
                                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#"+props.element.id}>
                {props.element.name}
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id={props.element.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <iframe height="500" src={props.element.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
                {/* <br />
                {props.element.name} */}
            </div>
        )
    // }

}