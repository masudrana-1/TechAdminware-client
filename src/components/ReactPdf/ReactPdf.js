import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import "./ReactPdf.css";


const ReactPdf = () => {

    const course = useLoaderData();

    const { title, img, details } = course;

    const ref = React.createRef();

    return (
        <div className="App">
            <div ref={ref}>
                <div className="card bg-base-100 shadow-xl lg:w-7/12 mx-6 lg:m-auto">
                    <figure><img src={img} alt="" className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{details}</p>
                    </div>
                    <Pdf targetRef={ref} filename="computer-science-course.pdf">
                        {({ toPdf }) => <button className='btn' onClick={toPdf}>Download Pdf</button>}
                    </Pdf>
                </div>
            </div>
        </div>
    );
};


export default ReactPdf;