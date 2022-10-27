import React from 'react';
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const course = useLoaderData();

    const { title, img, details } = course;

    console.log(course)

    return (
        <div>
            <div className="card bg-base-100 shadow-xl lg:w-7/12 mx-6 lg:m-auto">
                <figure><img src={img} alt="" className='w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <Link to='/courses' className="btn">Show all course</Link>
                        <Link to='/checkout' className="btn">Purchase this course</Link>
                        <button className="btn">Download pdf <BsFileEarmarkPdfFill></BsFileEarmarkPdfFill></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;