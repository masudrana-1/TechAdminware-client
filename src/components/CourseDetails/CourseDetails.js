import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const course = useLoaderData();

    const { title, img, details } = course;

    console.log(course)

    return (
        <div>
            <div className="card bg-base-100 shadow-xl w-3/4 m-auto">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <Link to='/checkout' className="btn">Purchase this course</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;