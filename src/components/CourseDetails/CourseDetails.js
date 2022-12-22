import React from 'react';
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const course = useLoaderData();

    const { _id, title, img, details } = course;

    console.log(course)

    return (
        <div>
            <div className="card bg-base-100 lg:w-7/12 mx-6 lg:m-auto">
                <figure><img src={img} alt="" className='w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <Link to='/courses' className="btn bg-orange-800 shadow-lg shadow-blue-500/50">Show all course</Link>
                        <Link to='/checkout' className="btn bg-blue-800 shadow-lg shadow-red-500/50">Purchase this course</Link>
                        <Link to={`/course/${_id}/pdf`} className="btn bg-red-800 shadow-lg shadow-blue-500/50">Download pdf <BsFileEarmarkPdfFill></BsFileEarmarkPdfFill></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;